# Node 16 → Node 24 Upgrade Plan — quickbuilder

## Context

`quickbuilder` is a React 17 / TypeScript form-builder library bundled with **Rollup**, whose
build output (`dist/`) is committed to git and consumed directly from GitHub by WPDeveloper
WordPress plugins. The project currently has **no formal Node version pin at all** — the
"Node 16" baseline only exists in a Dec 2024 commit message, never in `engines`, `.nvmrc`, or
any tool config. Meanwhile parts of the build toolchain are end-of-life (Rollup 2.79, an
uglify-based minifier, two unmaintained 2018–2019 Rollup plugins).

The goal is to make the project **Node 24-native**: formally require Node 24, and modernize the
EOL build toolchain (primarily a **Rollup 2 → 4 migration**) so the project builds cleanly on a
supported, current stack. Because `dist/` is shipped to live plugins, the minified output *will*
change (different minifier + bundler), so success is defined by **functional verification in a
real WordPress install**, not byte-for-byte parity.

### Decisions (confirmed with the user)
- **Scope:** Modernize the toolchain (not just pin the version).
- **engines floor:** Strict — `node >= 24`.
- **CI:** None — verification stays manual (local build + link into a consuming plugin).
- **Remove all legacy code:** the dead webpack build (`webpack.config.js` + its toolchain)
  must be deleted, not just left in place. The repo should ship a single, current build path
  (Rollup only).

> **Non-negotiable constraint — behavior must be identical.** This is an infrastructure-only
> upgrade (Node version, build tooling, legacy removal). The library's runtime behavior must not
> change in any way: **no source/logic edits, no public API changes, no changes to component
> output, props, events, or the data/response shape returned to consuming plugins.** The only
> things allowed to change are *how* the code is built and which Node/tooling versions are used.
> The committed `dist/` bundles will differ textually (different bundler + minifier), but they
> must be **functionally equivalent** — same exports, same behavior. Any observable behavioral
> difference is a regression and a blocker, not an acceptable side effect.

## Current state (from codebase exploration)

- **No Node pin anywhere:** no `engines`, `.nvmrc`, `.node-version`, `.tool-versions`, `volta`,
  `packageManager`.
- **No CI, no Docker, no husky/git hooks, no shell scripts/Makefile** — nothing else to update.
- **Build = Rollup** (`rollup.config.js`); `webpack.config.js` is legacy/broken (references an
  unimported `CleanWebpackPlugin`) and not part of `pnpm build`.
- **Styling:** Dart `sass` (`^1.81.0`), *not* the Node-coupled `node-sass` ✅.
- **Package manager:** pnpm, `pnpm-lock.yaml` lockfileVersion `9.0` (pnpm 9.x).
- **Entry mapping (important):** `package.json` `main`/`module` → `dist/index.js`, a **committed
  hand-written shim** (not generated; `rimraf` never deletes it). It does:
  ```js
  module.exports = require("./index.css");
  if (process.env.NODE_ENV === "production") module.exports = require("./src/quickbuilder.esm.min.js");
  else module.exports = require("./dev/quickbuilder.esm.js");
  ```
  Rollup produces `dist/dev/quickbuilder.{cjs,esm,umd}.js`,
  `dist/src/quickbuilder.{cjs,esm,umd}.min.js`, and `dist/index.css`. **These filenames and the
  shim must be preserved exactly** or consumers break.
- **Source Node-API surface:** none meaningful — only `process.env.NODE_ENV` (compiled away).
  Confirmed: no source imports of Node builtins; no `*.json` imports in source.

## Toolchain migration matrix (the core of the work)

`rollup.config.js` imports 9 plugins. Target Rollup 4 + compatible plugin majors:

| Package | Current | Target | Action / Notes |
|---|---|---|---|
| `rollup` | ^2.79.2 | **^4.x** | Core upgrade. Rollup 4 requires Node 18+ (fine for 24). |
| `@rollup/plugin-babel` | ^5.3.1 | **^6.0.4** | v6 supports Rollup 4. Keep `babelHelpers: "runtime"`. |
| `@rollup/plugin-commonjs` | ^20.0.0 | **^28.x** | Keep the `exclude: ["node_modules/draft-js/**","dist/**"]` option. |
| `@rollup/plugin-node-resolve` | ^13.3.0 | **^16.x** | Keep `mainFields`/`extensions`. |
| `@rollup/plugin-json` | ^4.1.0 | **^6.x** | Low impact (only node_modules JSON). |
| `rollup-plugin-uglify` | ^6.0.4 | **REMOVE** → `@rollup/plugin-terser` **^0.4.4** | uglify plugin is dead and chokes on modern syntax; terser is the official Rollup minifier. Swap `uglify()` → `terser()`. |
| `rollup-plugin-node-builtins` | ^2.1.2 | **REMOVE** | 2018, unmaintained, breaks on Rollup 4. Confirmed **zero** Node-builtin imports in source/bundle — safe to drop with no replacement. |
| `rollup-plugin-scss` | ^3.0.0 | **^4.x** (with fallback) | Highest-risk item (see below). v4 supports Rollup 4 but changed output/`fileName` API. **Fallback:** migrate to `rollup-plugin-postcss` if v4 misbehaves. |
| `rollup-plugin-ignore-import` | ^1.3.2 | **Keep, but verify on Rollup 4** | Still needed functionally (stops `.scss`/`.css` imports from being bundled as JS). If it breaks on Rollup 4, replace its job with a ~10-line inline `load()` plugin or `rollup-plugin-postcss`'s native handling. |
| `rollup-plugin-peer-deps-external` | ^2.2.4 | **Keep** | Simple plugin, works on Rollup 4. |
| `ts-loader` (webpack only) | ^8.4.0 | **REMOVE** | Only `webpack.config.js` used it; removed with the legacy build (Phase 3). |
| `@wordpress/scripts` | ^26.19.0 | **REMOVE** | Exists only to serve the legacy webpack build + `packages-update`. Removed in Phase 3 — **but first** promote `@wordpress/postcss-plugins-preset` to a direct dep (see below). |
| `@wordpress/postcss-plugins-preset` | (transitive, 4.42.0) | **ADD as direct devDep ^4.42.0** | `rollup.config.js` requires it but currently gets it only *through* `@wordpress/scripts`. Must be explicit before scripts is removed, or the Rollup build breaks. |
| `typescript` | ^4.9.5 | **Optional → ^5.x** | Not required for Node 24. Bump only if desired; `strict: true` + pinned old `@types/wordpress__*` may surface new type errors. If errors balloon, stay on 4.9. |

**Explicitly NOT bumped / kept as-is (scope discipline):** `@wordpress/babel-preset-default`
(7.6.0, used by `.babelrc` — a direct devDep, independent of `@wordpress/scripts`),
`@wordpress/eslint-plugin` (13.6.0), and all `@wordpress/*` runtime deps. Newer
`@wordpress/scripts` (30.x) assumes React 18 and would change Babel output / break the React-17
pin — and we are deleting it anyway. `eslint` ^8.57.1 and `sass` ^1.81 already run on Node 24 —
leave them.

### The CSS pipeline (the part most likely to fight back)
Three source files import styles, all currently routed through `rollup-plugin-scss` (extract to
`dist/index.css`) with `rollup-plugin-ignore-import` preventing them from also bundling into JS:
- `src/fields/Tab.tsx` → `import "../scss/index.scss";` (the main stylesheet, ~10 partials)
- `src/fields/Editor.tsx` → `import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";`
- `src/fields/Select.tsx` → `import 'tippy.js/dist/tippy.css';`

On Rollup 4, validate that `rollup-plugin-scss` v4 still: (a) compiles `index.scss` + partials via
Dart `sass`, (b) runs the `@wordpress/postcss-plugins-preset` PostCSS plugins, and (c) emits a
single `dist/index.css`. If v4's output API differs, adjust the `output`/`fileName` option; if it
still fights with `ignore-import`, switch this whole concern to `rollup-plugin-postcss`
(`extract: 'index.css'`, `use: ['sass']`, `plugins: postcssPlugins`).

## Plan of work

### Phase 1 — Node version pinning (low risk, do first)
1. **`package.json`** — add:
   - `"engines": { "node": ">=24.0.0" }`
   - `"packageManager": "pnpm@9.x.x"` (pin to the exact installed pnpm 9 version; matches
     lockfile v9.0 and Node 24's bundled corepack).
2. **`.nvmrc`** (new) — `24`.
3. **`.npmrc`** — add `engine-strict=true` so installs are blocked on Node < 24 (honors the
   strict decision; note it also blocks contributors on 20/22).
4. Update **`CLAUDE.md`** "Commands" area to state the Node 24 requirement (replaces the implicit
   Node 16 baseline).

### Phase 2 — Rollup 2 → 4 toolchain migration (the core)
> Config-only: changes are limited to `package.json` and `rollup.config.js`. **No edits to
> `index.tsx`, `src/`, or any application logic** — see the behavior-identical constraint above.
1. Update `devDependencies` in `package.json` per the matrix above (bump Rollup + 4 `@rollup/*`
   plugins, add `@rollup/plugin-terser`, bump `rollup-plugin-scss`; remove `rollup-plugin-uglify`
   and `rollup-plugin-node-builtins`).
2. Edit **`rollup.config.js`**:
   - Remove the `builtins` import + `builtins()` call.
   - Replace `import { uglify } from "rollup-plugin-uglify"` with
     `import terser from "@rollup/plugin-terser"`; change `isProduction ? uglify() : null` →
     `isProduction ? terser() : null`.
   - Keep `peerDepsExternal()`, `nodeResolve(...)`, `commonjs(...)`, `scss(...)`,
     `ignoreImport(...)`, `json(...)`, `babel(...)` with their existing options.
   - Keep `input`, all three `output` entries, filenames, `globals`, and `external` **identical**.
3. `pnpm install` on Node 24 to regenerate `pnpm-lock.yaml`.
4. Iterate on the **CSS pipeline** until `dist/index.css` builds correctly (see fallback above).

### Phase 3 — Remove the legacy webpack build (legacy cleanup)
The webpack toolchain is dead code: `webpack.config.js` is its only consumer, it is **not** part
of `pnpm build`, and it is already broken (it constructs `new CleanWebpackPlugin(...)` without
ever importing `CleanWebpackPlugin`). Delete it and its exclusive dependencies.

1. **Delete `webpack.config.js`.**
2. **Delete any committed webpack output dir** (`build/`) if present.
3. **`package.json`:**
   - **First**, add `@wordpress/postcss-plugins-preset` `^4.42.0` to `devDependencies` — the
     Rollup build's `require("@wordpress/postcss-plugins-preset")` currently resolves only
     because `@wordpress/scripts` drags it in transitively. This must become explicit *before*
     the next step or the real build breaks.
   - Remove `ts-loader` (only the webpack config used it).
   - Remove `@wordpress/scripts`.
   - Remove the `packages-update` script (`wp-scripts packages-update`) — it depends on the
     now-removed `@wordpress/scripts`.
4. **Tidy references:** drop the `webpack.config.js` line from `.eslintignore` and `.npmignore`.
5. `pnpm install` on Node 24 — prunes the large webpack/jest/playwright/svgr transitive tree from
   `pnpm-lock.yaml`, confirming nothing in the real build depended on it.

> **`config/` is explicitly out of scope — leave it untouched.** `config/default.ts` and
> `config/nx.ts` (demo/sample builder configs) are **not** part of this upgrade. The user will
> decide their fate separately at a later time; do not modify or delete them here.

### Phase 4 — (Optional) TypeScript 5
Only if desired. Bump `typescript` → ^5.x; run `pnpm lint` / a type-check and triage new errors.
Abort this phase (revert to 4.9.5) if the pinned old `@types/wordpress__*` packages produce
excessive friction — it is not needed for Node 24. (Note: the Rollup build transpiles `.ts` via
`@babel/preset-typescript`, so `typescript` is used for type-checking/editor only, not the build.)
**Honor the behavior-identical constraint:** since TS only type-checks here (it does not affect the
emitted bundle), do **not** edit source to satisfy a TS 5 type error — if it would require touching
`src/`, skip the bump entirely. Type-only changes alone are not worth risking a behavioral diff.

### Phase 5 — Rebuild & commit `dist/`
1. `pnpm build` on Node 24 → regenerates `dist/dev/*`, `dist/src/*.min.js`, `dist/index.css`.
2. Confirm `dist/index.js` shim is untouched and still points at the right filenames.
3. Commit source changes **and** the rebuilt `dist/` together (consumers pull `dist/` from git).

## Files to be modified / created

- `package.json` — `engines`, `packageManager`; dep bumps/removals; **add** `@wordpress/postcss-plugins-preset`; **remove** `ts-loader`, `@wordpress/scripts`, `rollup-plugin-uglify`, `rollup-plugin-node-builtins`; **remove** the `packages-update` script.
- `.nvmrc` — **new**, `24`.
- `.npmrc` — add `engine-strict=true`.
- `rollup.config.js` — remove builtins, uglify→terser, plugin option review.
- `webpack.config.js` — **deleted** (legacy).
- `build/` — **deleted** if present (legacy webpack output).
- `.eslintignore`, `.npmignore` — drop the `webpack.config.js` line.
- `pnpm-lock.yaml` — regenerated by `pnpm install` (large webpack tree pruned).
- `dist/dev/*`, `dist/src/*.min.js`, `dist/index.css` — regenerated by `pnpm build`.
- `CLAUDE.md` — note Node 24 requirement; remove the "`webpack.config.js` is legacy" line (file gone).
- *(Optional, Phase 4)* `tsconfig.json` review, `typescript` bump.

## Risk register

| Risk | Likelihood | Mitigation |
|---|---|---|
| `rollup-plugin-scss` v4 changes break CSS extraction | **High** | Primary risk. Iterate config; fall back to `rollup-plugin-postcss`. Diff old vs new `dist/index.css` for missing rules. |
| `rollup-plugin-ignore-import` incompatible with Rollup 4 | Medium | Replace with tiny inline plugin or fold into `rollup-plugin-postcss`. |
| Removing `@wordpress/scripts` also drops the transitively-provided `@wordpress/postcss-plugins-preset` that the Rollup build requires | **High** | Add `@wordpress/postcss-plugins-preset` as an explicit devDep *before* removing scripts; after `pnpm install`, confirm Rollup resolves it and still emits `dist/index.css`. |
| Terser output differs from uglify → subtle runtime diff in a plugin | Medium | Functional test in WordPress (below); terser is more standards-correct than uglify. |
| Rollup 4 module wrapping changes break UMD `globals` consumption | Medium | Verify all three formats; keep `globals`/`external` identical; smoke-test the UMD build. |
| TS 5 surfaces new type errors (Phase 4) | Medium | Phase 4 is optional and isolated; revert to TS 4.9.5 if noisy. |
| `engine-strict=true` blocks contributors on Node 20/22 | Low | Intended per the strict decision; documented in CLAUDE.md. |
| Accidentally regenerating/removing the `dist/index.js` shim | Low | Do not touch it; verify it exists post-build. |

## Verification (no test suite exists — manual)

1. **Toolchain:** Install Node 24 (`nvm install 24 && nvm use`), `corepack enable`, then
   `pnpm install` — must succeed with `engine-strict=true`.
2. **Build:** `pnpm build` completes with no errors and produces all expected artifacts:
   `dist/dev/quickbuilder.{cjs,esm,umd}.js`, `dist/src/quickbuilder.{cjs,esm,umd}.min.js`,
   `dist/index.css` (non-empty, comparable size to the current ~64 KB). This implicitly confirms
   the legacy removal was safe — Rollup still resolves `@wordpress/postcss-plugins-preset` from
   its new explicit devDep after `@wordpress/scripts` is gone.
3. **Lint:** `pnpm lint` shows no *new* errors vs. baseline (many pre-existing violations are
   expected — ignore those).
4. **Structural diff:** Confirm output filenames unchanged and `dist/index.js` shim intact;
   spot-check `dist/index.css` retains the major rule blocks (tabs, text, modal, colorpicker,
   tippy, react-draft-wysiwyg styles).
5. **Exports parity:** confirm the rebuilt bundles expose the **same public exports** as the
   pre-upgrade bundles (compare the export lists of `dist/dev/quickbuilder.esm.js` old vs new).
   No additions, removals, or renames — the API surface must be identical.
6. **Functional / behavior-identical (the real gate):** Link the rebuilt package into a consuming
   WPDeveloper plugin (or use the WordPress sandbox), load the form builder UI, and exercise the
   style-sensitive, bundle-sensitive field types end to end, confirming behavior is **identical to
   the pre-upgrade build** (same rendering, same interactions, same saved-data / response shape):
   - **Editor** (draft-js + `react-draft-wysiwyg.css`) renders and edits,
   - **Select** (react-select + tippy tooltip CSS) opens/styles correctly,
   - **Tab** + general layout picks up `dist/index.css`,
   - a save round-trip produces the **same payload** as before (diff the submitted/saved data
     against a pre-upgrade capture — it must match).
7. **Rollback:** All changes are isolated to one branch/commit; revert restores Rollup 2 + the
   prior committed `dist/`. Keep the pre-upgrade `dist/` available for quick comparison/rollback.

## Out of scope (flagged for later)
- React 17 → 18 (intentionally pinned; would cascade into `@wordpress/*` bumps).
- Adding CI (declined for now; revisit if desired).
- The `config/` demo fixtures (`default.ts`, `nx.ts`) — left untouched; the user will decide on
  these separately later.
