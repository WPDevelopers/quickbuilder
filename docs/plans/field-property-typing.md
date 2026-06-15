# Config-Driven Field Property Typing — quickbuilder

## Context

The TypeScript refactor already introduced a typed `FieldConfig` discriminated union
(`src/types/field-config.ts`), but those per-type interfaces were derived from the
demo configs (`config/default.ts`, `config/nx.ts`) plus code reading. Analyzing a
**real production consumer config** — `config/betterdocs.json` — shows the types are
**incomplete and partly wrong** against real usage, so a betterdocs settings screen
could not be strictly typed today.

Goal: derive an **evidence-based field-property pattern** from real configs and make
each field type accurately typed — precise per-type props for autocomplete, while
**tolerant** of the messy extras real configs carry (per the decisions below).

### Decisions (confirmed with the user)
- **Tolerant base.** Model every genuine prop precisely per field type, but add a
  tolerated index signature to `BaseFieldConfig` so real configs (e.g. betterdocs,
  which carries `x`, a `priotity` typo, `customizer_img`) type-check as-is.
  Autocomplete for known props; unknown extras are accepted, not flagged.
- **Custom field types stay consumer-typed.** The 9 betterdocs-specific types
  (registered via the `custom_field` filter) are documented as a pattern for the
  consumer to type (extending `CustomFieldConfig`); they do **not** enter core.

## What `config/betterdocs.json` revealed

> `betterdocs.json` is actually an `error_log` dump — multiple timestamped JSON
> copies. The first complete object (lines 1–6649) is one full settings config;
> analysis used `jq` over it.

**Field types in use** (built-ins): `text`(55), `toggle`(80), `section`(68),
`select`(33), `colorpicker`(29), `checkbox-select`(25), `media`(18),
`copy-to-clipboard`(16), `number`(12), `button`(9), `textarea`(7), `tab`(17),
`action`(2), `radio-card`(2), `codeviewer`(1).

**Two naming bugs in current types** — the `Field.tsx` dispatcher switches on
`codeviewer` and `jsonuploader`, but `FieldConfig` declares `code-viewer` /
`json-uploader`. Authoring those (correct, runtime) strings is currently a type
error, and the wrong strings silently route to the `custom_field` fallback.

**Genuine props missing from the per-type interfaces** (confirmed *read by component
source*, not just present in config):
- cross-cutting: `label_subtitle` (used by ~17 types; read in `withLabel`)
- `select`: `include_all_in_options`, `show_selected_values`, `filterValue`
- `checkbox-select` / `radio-card`: `filterValue`, `multiple`, `search`, `placeholder`
- `copy-to-clipboard`: `readOnly`, `descriptionCopyable`, `descriptionLabel`
- `toggle`: `disabled`, `enable_disable_text_active`
- `codeviewer`: `code`, `copyOnClick`, `readOnly`
- `section`: `id`, `searchable`, `searchPlaceholder`, `searchNotFoundMessage`, `showSubmit`, `submit`, `save`
- `tab`: `active`, `config`, `step`, `submit`, `sidebar`, `completionTrack`, `save`, `classes`
- `action`: `action`, `url`, `button`

**Noise props** (no component reads them — dead config data): `x` (6 types),
`priotity` (typo of `priority`), `customizer_img`. These motivate the tolerant base.

**Custom types** (via `custom_field`, betterdocs-specific): `better-repeater`,
`embed_model_select`, `github-repo-settings`, `html`, `importerupload`,
`min_token_number`, `permalink_structure`, `settingsuploader`, `title`.

## The pattern

1. **`BaseFieldConfig`** — shared props every field accepts:
   `type, name, label, label_subtitle, default, placeholder, description, help,
   className, classes, priority, rules, validation_rules, is_pro,
   is_license_active, trigger, style` **+ a tolerated `[key: string]: any`**
   index signature (the escape for real-world extras/typos).
2. **Per-type `XxxFieldConfig extends BaseFieldConfig`** — narrows `type` to the
   literal(s) the dispatcher uses and adds the **genuine** type-specific props
   (the lists above). These drive autocomplete.
3. **Custom types** — consumers extend `CustomFieldConfig` (already open) and type
   their config trees with `AnyFieldConfig`.
4. **Maintenance methodology** (documented, repeatable): extract real props per
   type from a config with `jq` (`group_by(.type) | union of keys`), confirm each
   against component source (`grep src/`), add genuine ones to the per-type
   interface, leave noise to the tolerant base.

## Plan of work

### Phase 1 — Base + naming fixes
- `src/types/field-config.ts` `BaseFieldConfig`: add `label_subtitle?: string` and
  the tolerated `[key: string]: any` index signature.
- `src/types/primitives.ts` `FieldType` + `field-config.ts`: **fix the two type
  literals** — `code-viewer` → `codeviewer`, `json-uploader` → `jsonuploader`
  (rename the interfaces' `type` to match `Field.tsx`). Keep the old strings out;
  the dispatcher is the source of truth.

### Phase 2 — Enrich per-type interfaces
- Add the genuine per-type props (table above) to each `*FieldConfig`. Cross-check
  against `config/default.ts` / `config/nx.ts` using the same jq+grep method so the
  pattern covers all sample configs, not only betterdocs.

### Phase 3 — Docs
- `docs/fields/README.md`: update each field's prop list with the newly typed props
  and the corrected `codeviewer` / `jsonuploader` type strings.
- `docs/custom-fields.md`: add the **consumer-typed custom-field pattern** with the
  betterdocs types as worked examples (e.g. `BetterRepeaterFieldConfig extends
  CustomFieldConfig`). Document the jq+grep maintenance methodology.

## Files to modify
- `src/types/field-config.ts` (Base + every per-type interface)
- `src/types/primitives.ts` (`FieldType` literal fixes)
- `docs/fields/README.md`, `docs/custom-fields.md`
- (no component/runtime changes — types + docs only)

## Verification
1. **Real-config smoke test** (the core proof): extract the first betterdocs object
   (`head -6649 config/betterdocs.json > /tmp/bd.json`), import it in a scratch
   `.ts` typed as `FieldConfig[]` / `AnyFieldConfig[]`, and run `tsc --noEmit` — it
   must **compile** (tolerant base accepts the noise; genuine props are typed).
2. **Autocomplete/known-prop check**: a `SelectFieldConfig` literal offers
   `include_all_in_options` etc.; `{ type: 'codeviewer' }` is accepted (bug fixed).
3. `pnpm typecheck` stays **0**; `pnpm typecheck:strict` green.
4. `pnpm build` → **`dist/` byte-identical** (type-only change; nothing runtime).

## Risks & mitigations
| Risk | Mitigation |
|---|---|
| Tolerant base loses typo-catching | Accepted by decision; precise per-type props still give autocomplete. Authors wanting strict checks annotate a single field with its specific `*FieldConfig`. |
| Renaming `code-viewer`/`json-uploader` breaks someone using the wrong string | The dispatcher only ever matched `codeviewer`/`jsonuploader`; the old type strings never worked at runtime, so the fix aligns types with reality. Note in the changelog. |
| Other consumer configs use props not in betterdocs | The jq+grep methodology is applied to `default.ts`/`nx.ts` too in Phase 2; the tolerant base covers anything missed. |

## Out of scope
- Typing field **values** (the `values` map) — separate effort.
- Promoting betterdocs custom types into core (would need the components).
- `config/betterdocs.json` itself (it's a log dump; left as-is).
