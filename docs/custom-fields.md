# Custom Fields

quickbuilder dispatches unknown field `type`s through the WordPress
`custom_field` filter, so you can register your own field components without
forking the library.

## How dispatch works

`Field` (`src/fields/Field.tsx`) `switch`es on `props.type`. The `default` case is:

```ts
const customField = applyFilters('custom_field', '', props.type, props);
return <>{customField}</>;
```

So for any unrecognized `type`, quickbuilder calls the `custom_field` filter with
`(output, type, props)` and renders whatever you return.

## Registering a custom field

Hook the filter (typically from your plugin's entry script) and return your
component for the type(s) you own; otherwise pass `output` through:

```tsx
import { addFilter } from '@wordpress/hooks';
import type { CustomFieldConfig, InjectedFieldProps } from 'quickbuilder';

/** Author-facing config for this field type. */
export interface RatingFieldConfig extends CustomFieldConfig {
  type: 'rating';
  max?: number;
}

/** Props the component receives at runtime (config + injected). */
type RatingProps = RatingFieldConfig & InjectedFieldProps;

function Rating({ name, value, onChange, max = 5 }: RatingProps) {
  return (
    <div className="my-rating">
      {Array.from({ length: max }, (_, i) => (
        <button
          key={i}
          aria-pressed={Number(value) === i + 1}
          onClick={() =>
            onChange({ target: { type: 'rating', name: name!, value: i + 1 } })
          }
        >
          ★
        </button>
      ))}
    </div>
  );
}

addFilter(
  'custom_field',
  'my-plugin/rating',
  (output: unknown, type: string, props: RatingProps) =>
    type === 'rating' ? <Rating {...props} /> : output
);
```

Key points:

- **Emit the synthetic event.** Call `onChange({ target: { type, name, value } })`
  — the same shape built-in fields use (`FieldChangeEvent`). The builder reads it
  via `executeChange` and writes `value` into the form state under `name`.
- **Reuse `InjectedFieldProps`** for the runtime contract (`value`, `onChange`,
  `onBlur`, `context`, `parentIndex`, …). Extend `CustomFieldConfig` for the
  author-facing config so arbitrary props are allowed.
- **The builder context** is available via `props.context` or
  `useBuilderContext()` if your field needs `values`, `setFieldValue`, etc.

## Authoring configs that use custom fields

Custom types aren't part of the strict `FieldConfig` union (their `type` isn't a
known literal). Type config trees that mix them with **`AnyFieldConfig`**:

```ts
import type { AnyFieldConfig } from 'quickbuilder';

const fields: AnyFieldConfig[] = [
  { type: 'text',   name: 'title' },
  { type: 'rating', name: 'score', max: 10 },   // custom type + props accepted
];
```

For strict checking of a single custom field, annotate it with your own config
interface (e.g. `RatingFieldConfig`) directly.

## Reusing built-in field types

You don't need a custom component to reuse a built-in control inside your own
markup — render `GenericField`/`Field` with a `type` and props:

```tsx
import { GenericField } from 'quickbuilder';

<GenericField type="select" name="kind" options={[/* … */]} />;
```
