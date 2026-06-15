# Architecture

How quickbuilder turns a config object into a live, stateful form.

## Render tree

```
FormBuilder                      (src/FormBuilder.tsx)
  └─ Tab                         (src/fields/Tab.tsx)        — tabbed shell
       ├─ Menu / Content         (src/fields/tabs/*)
       └─ Field  ───────────────  (src/fields/Field.tsx)     — the dispatcher
            ├─ Input / Select / Checkbox / …                 — leaf fields
            └─ Section / Group / Repeater                    — containers
                 └─ Field …                                  — recurses
```

- **`FormBuilder`** takes `config`, `tabs`, and `submit` and renders a root `Tab`.
- **`Field`** (`src/fields/Field.tsx`) is the **dispatcher**: it `switch`es on the
  field's `type` string and renders the matching component. Unknown types fall
  through to the `custom_field` WordPress filter (see [Custom Fields](./custom-fields.md)).
- **Container fields** (`Section`, `Group`, `Repeater`, `Tab`) each hold a nested
  `fields` array and render `Field` again for each child, threading a
  `parentIndex` path down the tree.

## State & context

State lives in a single reducer created by **`useBuilder`** (`src/core/hooks/useBuilder.tsx`),
exposed through React context:

- **`useBuilder(props)`** → builds the context object: form **state**
  (`values`, `errors`, `touched`, `isSubmitting`), **handlers**
  (`handleChange`, `handleBlur`, `getFieldProps`, `getFieldMeta`), and
  **helpers** (`setFieldValue`, `setFormField`, `setActiveTab`, …).
- **`BuilderProvider`** supplies that object; **`useBuilderContext()`** reads it.
- The reducer (`src/core/builderReducer.ts`) is driven by the typed
  **`BuilderAction`** discriminated union; nested values are written immutably via
  `setIn` (`src/core/utils.ts`).
- `values` is the form's data, addressed by field `name`. Nested containers use
  **path arrays** (e.g. `setFieldValue(['repeater', 0, 'title'], v)`).

The context's form-state slice (`values`/`errors`/`touched`/`isSubmitting`) is
typed via `FormBuilderContextType<Values>`; the imperative members stay open
(index signature) because they're attached dynamically.

## The HOC pipeline

Most leaf fields are wrapped by two HOCs (`src/core/hooks/`):

1. **`withProps`** — injects the builder context: resolves the field's value via
   `getFieldProps`, computes visibility (`getFieldMeta`), applies trigger-based
   defaults (`useDefaults`), and renders nothing when the field isn't visible.
2. **`withLabel`** — renders the label/description/badge wrapper around the control.

So a field component receives its **config props** *plus* the **injected props**
(`value`, `onChange`, `onBlur`, `context`, `parentIndex`, …). That combined shape
is the exported `XxxProps` type (`SelectProps = SelectFieldConfig & InjectedFieldProps`).

## The change-event flow

Fields don't emit native React events; they emit a **synthetic event**:

```ts
props.onChange({ target: { type: 'select', name, value, multiple?, checked?, options? } })
```

`executeChange` (`src/core/utils.ts`) normalizes either this synthetic event or a
native React event into `{ field, val }`, which the builder writes to `values`.
This shape is typed as `FieldChangeEvent` / `FieldChangeHandler`
(`src/types/primitives.ts`).

## The rules engine (conditional logic)

Visibility and option filtering use a small array-based DSL evaluated by
`when` (`src/core/when.ts`), typed as `Condition` (`src/types/primitives.ts`):

```ts
['is', 'source', 'woocommerce']                       // comparison
['and', ['is', 'a', 1], ['includes', 'b', ['x']]]     // logical
(values) => values.advanced === true                  // or a predicate fn
```

Operators: `is`, `!is`, `includes`, `!includes`, `isOfType`, `!isOfType`,
`allOf`, `anyOf`, `gt`, `gte`, `lt`, `lte`; combinators: `and`, `or`, `not`.
A field's `rules` hide/show the whole field; an option's `rules` filter that
single option; an `ajax.rules` gates the request.

## The type system

New in the TypeScript refactor (`src/types/`):

| File | Contents |
|---|---|
| `primitives.ts` | `FieldType`, `FieldOption`, `AjaxConfig`, `Condition` DSL, `ValidationRules`, `FieldChangeEvent`/`Handler` |
| `field-config.ts` | `BaseFieldConfig`, every per-type `*FieldConfig`, the `FieldConfig` union, `CustomFieldConfig`, `AnyFieldConfig` |
| `field-props.ts` | `InjectedFieldProps` + per-component `*Props` |
| `index.ts` | barrel (re-exported from the package root) |

`FieldConfig` is a **discriminated union** on `type`: authoring a config gives
per-type autocomplete, `switch` narrowing, and unknown-prop rejection.

## Build

Rollup (`rollup.config.js`) bundles `index.tsx` into cjs/esm/umd (dev +
minified), extracting SCSS to `dist/index.css`. Babel transpiles TS (types are
**erased**, not type-checked, at build time) — run `pnpm typecheck` separately.
`dist/` is committed and consumed from GitHub.
