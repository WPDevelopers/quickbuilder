# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

quickbuilder is a React form-builder library (TypeScript, ~26 field types) consumed by WPDeveloper WordPress plugins. The public entry point is `index.tsx` at the repo root (not `src/`); it re-exports from `src/core/`, `src/fields/`, and `src/store/`.

## Commands

Use pnpm. **Node 24+ is required** (`engines: node >=24`, pinned in `.nvmrc`; `.npmrc` sets `engine-strict=true`, so installs fail on older Node). Run `nvm use` (or install Node 24) before building.

- `pnpm dev` — one-off development build (Rollup)
- `pnpm start` — development build in watch mode
- `pnpm build` — full build: dev + minified production outputs (run this before shipping)
- `pnpm lint` — ESLint over `index.tsx` and `src/` (@wordpress/eslint-plugin; many pre-existing violations remain — don't fix unrelated ones)

There is no test suite. Verify changes by running `pnpm build`, then linking the package into a consuming WordPress plugin and testing in a WordPress install.

## Shipping a change — dist/ is committed

Consumers install this package from the GitHub repo, not npm. `dist/` is therefore committed to git: after changing source, run `pnpm build` and include the updated `dist/` files in the commit, or consumers never receive the change.

## Build externals gotcha

Rollup marks React, ReactDOM, lodash, and all `@wordpress/*` packages as externals — consumers provide them (as `wp.*` / window globals in WordPress). Never bundle these. If you add a dependency that consumers should provide, add it to the externals/globals in `rollup.config.js` AND to `peerDependencies`. React is pinned to 17.x.

`webpack.config.js` is legacy; Rollup (`rollup.config.js`) is the real build.

## Conventions

- Commit subjects use Title Case prefixes: `Fix:`, `Added:`, `Improved:` (see git log)
- PRs target `master`
- Tabs for indentation in `.ts`/`.tsx`/`.js`/`.jsx`; spaces in JSON/YAML (per `.editorconfig`)
