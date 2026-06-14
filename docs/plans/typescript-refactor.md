# TypeScript Refactor & Documentation Plan — quickbuilder

## Context

`quickbuilder` is a React form-builder library with ~28 field types (button, checkbox,
checkbox-select, code-viewer, color-picker, editor, select, repeater, …) consumed by WPDeveloper
WordPress plugins. Today the field layer is **effectively untyped**: every field component takes
implicit `any` props, there are no per-field interfaces, the field-configuration schema that
external developers author is a catch-all (`Field { …; [key: string]: any }`), several files use
`@ts-ignore`, and there is **no documentation at all**. This makes it hard for other developers to
author field configs or build new field types with confidence.

The goal is to make the field layer **TypeScript-friendly** — proper interfaces and types for every
field (both the *config schema* authors write and the *component props* fields receive) plus the
core/builder surface — and to ship **comprehensive documentation**, so external developers can
extend the library easily with full editor autocomplete and type checking.

### Decisions (confirmed with the user)
- **Depth: behavior-preserving.** Types + docs only — **no runtime/logic changes**. Type
  annotations are erased by the Babel build, so the shipped `dist/` is unaffected. This is the safe
  choice given the recent, not-yet-runtime-verified React 18 upgrade.
- **Enforcement: progressive + add a typecheck.** Add `pnpm typecheck` (`tsc --noEmit`), type the
  public surface first (config schema, component props, hooks), keep it green incrementally, and
  tighten `noImplicitAny` only on newly-typed areas. The Babel build is never blocked.
- **Docs: comprehensive.** README + architecture overview + field-authoring guide + per-field-type
  reference + custom-field extension guide.

## Current state (from exploration)

- **`src/fields/` — ~28 components, ~0% typed.** All take implicit `any` props, no return types.
  `@ts-ignore` in `Select.tsx`, `CheckboxSelect.tsx`, `SelectAsync.tsx`, `Repeater.tsx`.
- **Implicit shared contract** every field relies on: `name`, `value`, `onChange`, `onBlur`,
  `label`, `id`, `options?`, `rules?`, `is_pro`, `is_license_active`, `context`, `parentIndex`,
  `style`, plus a **custom event shape** `onChange({ target: { type, name, value, checked?,
  multiple?, options? } })`.
- **Field-config schema is untyped:** `src/types/Tabs.ts` `Field` = `{ label?, name?, type?,
  className?, parentIndex? } & [key:string]: any`; `src/types/Builder.d.ts` `Builder` has
  `tabs: any`, `submit: any`.
- **Groundwork exists** in `src/core/types.d.ts`: `FormBuilderState/Errors/Touched<Values>`,
  `FieldMetaProps`, `FieldHelperProps`, `BuilderHandlers`, `BuilderHelper`, `FieldInputProps`. Gap:
  `FormBuilderContextType<Values> = any`, and field components don't consume any of it.
- **Dispatch:** `src/fields/Field.tsx` switches on `props.type` → component; custom types via the
  `applyFilters('custom_field', …)` WordPress hook (currently not type-safe).
- **Rules DSL** (`src/core/when.ts`): comparison `['is'|'!is'|'includes'|'gt'|… , key, value]` and
  logical `['and'|'or'|'not', …rules]` — untyped. **Options/AJAX** shapes are consistent but
  untyped (`{label,value,rules?,is_pro?,column?,icon?,tooltip?}`; `{api,method?,data?,rules?,
  response_mapper?,target?,on?,include_all_in_options?}`).
- **`tsconfig.json`:** `strict: true` **but** `noImplicitAny: false` and `noUnusedLocals: false`
  (defeats strictness). **No typecheck step** (Babel strips types; ESLint is currently broken from
  the eslint-10 bump). TypeScript pinned at 4.9.5 (TS-5 bump deferred).
- **Public API** (`index.tsx`): `FormBuilder`, all fields, hooks (`useBuilder`,
  `useBuilderContext`, `useOptions`, `useDefaults`, `withProps`, `withLabel`), utils, components,
  and the existing types.

## Target type architecture (new `src/types/`)

A single, discriminated-union-based type system that serves **both** config authors and field
authors. New/expanded files under `src/types/`:

1. **`primitives.ts`** — shared building blocks reused everywhere:
   - `FieldType` — string-literal union of all built-ins (`'text' | 'email' | 'number' | 'select' |
     'repeater' | …`), plus `(string & {})` so custom-field types keep autocomplete without
     rejecting unknown strings.
   - `FieldOption` — `{ label; value; rules?: Condition; is_pro?; column?; icon?; tooltip?; … }`.
   - `AjaxConfig` — `{ api; method?; data?; rules?; response_mapper?; target?; on?;
     include_all_in_options? }`.
   - `Condition` — recursive rules DSL: `ComparisonRule = [ComparisonOp, string, unknown]` and
     `LogicalRule = ['and'|'or'|'not', ...Condition[]]`; `Condition = ComparisonRule | LogicalRule |
     ((values) => boolean)`.
   - `ValidationRules` — `{ required?: string; [rule: string]: string }`.
   - `FieldChangeEvent` / `FieldChangeHandler` — the custom `{ target: {...} }` event the fields emit.

2. **`field-config.ts`** — the **author-facing schema**:
   - `BaseFieldConfig` — every shared optional: `name`, `label`, `type`, `default?`, `placeholder?`,
     `description?`, `help?`, `className?`/`classes?`, `priority?`, `rules?: Condition`,
     `validation_rules?`, `is_pro?`, `trigger?`, `style?`.
   - Per-type interfaces extending `BaseFieldConfig`, e.g. `TextFieldConfig` (`type:'text'|'email'|
     'number'|'range'|'hidden'`), `SelectFieldConfig` (`type:'select'`, `options?`, `multiple?`,
     `ajax?`), `RepeaterFieldConfig` (`type:'repeater'`, `fields`, `button?`), `GroupFieldConfig`,
     `SectionFieldConfig`, `CheckboxFieldConfig`, `RadioCardFieldConfig`, `ColorPickerFieldConfig`,
     `EditorFieldConfig`, `DateFieldConfig`, `SliderFieldConfig`, `MediaFieldConfig`,
     `ButtonFieldConfig`, `ToggleFieldConfig`, `TextareaFieldConfig`, `CodeViewerFieldConfig`, …
   - `FieldConfig` = discriminated union (on `type`) of all the above **+ `CustomFieldConfig`**
     (`{ type: string & {} } & BaseFieldConfig`) so the `custom_field` filter stays usable.
   - Replaces the loose `Field`/`Fields` in `src/types/Tabs.ts` (kept as deprecated aliases for
     backward-compat).

3. **`field-props.ts`** — the **component-facing props** (what HOCs inject at runtime):
   - `InjectedFieldProps` — `{ value; onChange: FieldChangeHandler; onBlur; id; visible?; context:
     BuilderContext; parentIndex?: Array<string|number> }`.
   - Per-field component prop type = `<XxxFieldConfig> & InjectedFieldProps`, e.g. `ButtonProps`,
     `SelectProps`, `RepeaterProps`. Exported so external field authors can reuse them.

4. **Fix core types** in `src/core/types.d.ts`: define `FormBuilderContextType<Values>` as the real
   intersection (`FormBuilderState<Values> & BuilderHandlers & BuilderHelper<Values> & { … }`)
   instead of `any`; add a `BuilderAction` discriminated union for `builderReducer`.

## Plan of work (each phase keeps `pnpm typecheck` and `pnpm build` green)

### Phase 0 — Tooling & baseline
- Add `"typecheck": "tsc --noEmit"` to `package.json` scripts. Run it once to capture the **baseline
  error count** on the current code (with `noImplicitAny:false`, most untyped code passes).
- Add a `tsconfig.strict.json` (extends base, `noImplicitAny:true`, `include` only the new
  `src/types/**`) so newly-authored types are strictly checked without forcing the whole tree.

### Phase 1 — Foundational shared types
- Author `src/types/primitives.ts` and the core of `src/types/field-config.ts`
  (`BaseFieldConfig`, `FieldType`, `Condition`, `FieldOption`, `AjaxConfig`, `ValidationRules`,
  `FieldChangeEvent`).
- Fix `FormBuilderContextType<Values>` and add `BuilderAction` in `src/core/types.d.ts`.
- Reconcile `src/types/Tabs.ts` + `src/types/Builder.d.ts` with the new base (deprecate, don't
  delete, the old `Field`/`Builder` aliases).

### Phase 2 — Per-field-type config union
- Complete the per-type config interfaces and the `FieldConfig` discriminated union (+
  `CustomFieldConfig`). Export everything via `src/types/index.ts` and re-export from `index.tsx`.
- Type the sample configs (`config/default.ts`, `config/nx.ts`) against `FieldConfig` as the first
  real consumer / smoke test of the union (config files are out of scope to *delete* but are useful
  to type-check the schema).

### Phase 3 — Type the field components (behavior-preserving)
- Annotate each `src/fields/*.tsx` component with its `XxxProps` type and a return type, e.g.
  `const Button = (props: ButtonProps): JSX.Element => { … }`. **No logic edits.**
- Type the HOCs/hooks the fields rely on so the props flow through: `withProps`, `withLabel`,
  `withStyles` (generics), `useOptions` (return `UseOptionsResult`), `useDefaults`.
- Replace `@ts-ignore` with correct types **only where the code is already type-correct**; if a
  proper fix would require a runtime change, leave it (or use a typed cast) to honor
  behavior-preserving.

### Phase 4 — Type core infrastructure
- Annotate `src/core/utils.ts` (`getIn`, `setIn`, `executeChange`, `isVisible`, `validFieldProps`),
  `src/core/when.ts` (the `Condition` DSL), `builderReducer.ts` (use `BuilderAction`), `useBuilder`,
  and `src/store/`. Annotations only.

### Phase 5 — Comprehensive documentation (`docs/`)
- `docs/README.md` — what it is, install, quick start, the public API surface.
- `docs/architecture.md` — FormBuilder → Tab → Section/Group/Repeater → `Field` dispatch; store +
  context; HOC pipeline (`withProps`→`withLabel`); the custom event flow; the rules engine.
- `docs/field-authoring-guide.md` — authoring a `FieldConfig` (with autocomplete), the rules DSL,
  options vs AJAX, validation, conditional visibility — with copy-paste examples.
- `docs/fields/` — one reference section per built-in field type (its config props + an example),
  generated from / cross-checked against the `field-config.ts` interfaces.
- `docs/custom-fields.md` — registering a new field via the `custom_field` filter, typed with
  `CustomFieldConfig` + `InjectedFieldProps`.

### Phase 6 — Wire up enforcement
- Make `pnpm typecheck` pass on the typed surface; document running it before commits. (Hooking it
  into CI is out of scope — no CI per the prior decision.)

## Files to create / modify

- **New:** `src/types/primitives.ts`, `src/types/field-config.ts`, `src/types/field-props.ts`,
  `src/types/index.ts`; `tsconfig.strict.json`; the entire `docs/` set above.
- **Modify (types/annotations only):** every `src/fields/*.tsx` (representative: `Button.tsx`,
  `Input.tsx`, `Select.tsx`, `Repeater.tsx`, `Field.tsx`); `src/core/hooks/*` (withProps, withLabel,
  useOptions, useDefaults, useBuilder); `src/core/types.d.ts`, `src/core/utils.ts`,
  `src/core/when.ts`, `src/core/builderReducer.ts`; `src/store/index.ts`; `src/types/Tabs.ts`,
  `src/types/Builder.d.ts`; `index.tsx` (export new types); `package.json` (typecheck script);
  `CLAUDE.md` (note the typecheck step + docs location).

## Verification

1. **Types compile:** `pnpm typecheck` (`tsc --noEmit`) passes — and the **strict** config
   (`tsc -p tsconfig.strict.json --noEmit`) passes for `src/types/**`.
2. **Behavior unchanged (the key gate):** `pnpm build`, then confirm **`dist/` is byte-identical**
   to the pre-refactor commit. Because the Babel build strips types and comments, a truly
   types-only refactor must produce identical bundles — any `dist/` diff means a runtime change
   slipped in and must be reverted. (Use `git diff --stat HEAD -- dist/`.)
3. **Author-experience smoke test:** in a scratch `.ts`, write a `const cfg: FieldConfig = { type:
   'select', … }` and confirm the editor (a) autocompletes select-only props, (b) narrows on `type`,
   (c) rejects an unknown prop, and (d) still accepts a `{ type: 'my-custom', … }` custom field.
4. **Docs review:** every built-in field type has a reference entry; the authoring + custom-field
   guides compile their example snippets against the new types.

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| A "type-only" edit accidentally changes runtime behavior | The byte-identical `dist/` check (Verification #2) catches it deterministically. |
| `tsc --noEmit` surfaces a large pre-existing error backlog | Progressive scope: keep base `noImplicitAny:false`; enforce strictness only on `src/types/**` via `tsconfig.strict.json`; drive the rest down over time. |
| Discriminated union too rigid for the dynamic `[key:string]:any` configs in the wild | `CustomFieldConfig` fallback + retain index-signature escape hatches on `BaseFieldConfig` where needed. |
| TypeScript 4.9.5 limits (TS-5 deferred) | Author types within 4.9 capabilities; revisit `satisfies`-heavy docs examples if 4.9 chokes. |
| `@ts-ignore` removal forces a logic fix | Leave such cases typed-but-ignored; behavior-preserving wins over zero-ignores. |

## Out of scope (flagged for later)
- Any runtime/logic refactor, normalizing the custom `onChange` event, or replacing the `Field`
  switch with a typed registry (that was the rejected "deep restructure" option).
- The deferred TypeScript 5 upgrade and the ESLint-10 flat-config migration.
- React 19, CI, and touching `config/default.ts`/`config/nx.ts` beyond type-checking them.
