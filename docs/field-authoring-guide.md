# Field Authoring Guide

How to describe a form with the typed config schema. For the full per-type
property list, see the [Field Reference](./fields/README.md).

## The config shape

A form is an array of **tab** configs; each tab has a `fields` array; container
fields nest further `fields`. Annotate with `FieldConfig[]` for autocomplete,
narrowing, and unknown-prop rejection:

```ts
import type { FieldConfig } from 'quickbuilder';

const fields: FieldConfig[] = [
  { type: 'text', name: 'title', label: 'Title', default: 'Hello' },
  { type: 'select', name: 'src', label: 'Source', options: [/* … */] },
];
```

Because `FieldConfig` is a **discriminated union on `type`**, the editor offers
exactly the props valid for the chosen type, and rejects typos:

```ts
const bad: FieldConfig = { type: 'select', name: 'x', opions: [] };
//                                                    ^^^^^ Error: unknown prop
```

## Shared properties (`BaseFieldConfig`)

Every field type supports these (all optional except `type`):

| Prop | Type | Purpose |
|---|---|---|
| `type` | `FieldType` | **Required.** The field type discriminator. |
| `name` | `string` | Field identifier and key in `values`. |
| `label` | `string` | Rendered label. |
| `default` | `any` | Initial value when none is saved. |
| `placeholder` | `string` | Placeholder (falls back to `label`). |
| `description` / `help` | `string` | Helper text (help may contain HTML). |
| `className` / `classes` | `string` | Extra CSS classes. |
| `priority` | `number` | Sort order within the container (lower first). |
| `rules` | `Condition` | Conditional visibility (see below). |
| `validation_rules` | `ValidationRules` | Validation messages by rule name. |
| `is_pro` | `boolean` | Marks the field pro-only. |
| `trigger` | `object` | Dynamic default/value assignment. |
| `style` | `FieldStyle` | Layout/presentation overrides. |

## Options (select / radio / checkbox families)

Static options are `FieldOption[]`:

```ts
{
  type: 'select',
  name: 'source',
  label: 'Source',
  multiple: false,
  options: [
    { label: 'WooCommerce', value: 'woocommerce' },
    { label: 'CF7',         value: 'cf7', is_pro: true },
  ],
}
```

`FieldOption` supports `label`, `value`, and optional `rules`, `is_pro`,
`column`, `icon`, `tooltip`.

## Async options (AJAX)

For options loaded from a REST endpoint, provide `ajax` (`AjaxConfig`):

```ts
{
  type: 'select',
  name: 'forms',
  label: 'Form',
  ajax: {
    api: '/my-plugin/v1/forms',
    method: 'POST',
    on: 'click',
    data: { source: '@source' },              // '@source' = value of field "source"
    rules: ['is', 'source', 'woocommerce'],    // only fetch when this passes
    response_mapper: { label: 'title', value: 'id' },
    include_all_in_options: true,
  },
  options: [],                                  // static fallback
}
```

`@fieldName` references another field's current value; dot-paths
(`@category.name`) are supported.

## Conditional visibility (`rules`)

A field's `rules` decide whether it renders, evaluated against the form values:

```ts
{ type: 'number', name: 'border_size', label: 'Border size',
  rules: ['is', 'has_border', true] }                       // show if has_border === true

{ type: 'section', name: 'design', label: 'Design',
  rules: ['and',
            ['is', 'advanced', true],
            ['!is', 'source', 'press_bar']],
  fields: [/* … */] }
```

The same DSL filters individual options (`option.rules`) and gates AJAX
(`ajax.rules`). Operators and combinators are listed in
[Architecture › Rules engine](./architecture.md#the-rules-engine-conditional-logic).

## Validation

```ts
{ type: 'text', name: 'email', label: 'Email',
  validation_rules: {
    required: 'This field is required',
    'min:5':  'Minimum 5 characters',
  } }
```

## Containers

`group`, `repeater`, `section`, and `tab` nest a `fields` array:

```ts
// Repeater — array of objects
{ type: 'repeater', name: 'items', label: 'Items',
  button: { label: 'Add item' },
  fields: [
    { type: 'text',   name: 'title', label: 'Title' },
    { type: 'select', name: 'kind',  label: 'Kind', options: [/* … */] },
  ] }

// Group — flat object of its fields
{ type: 'group', name: 'meta', label: 'Meta', display: 'inline',
  fields: [
    { type: 'text',     name: 'title', label: 'Title' },
    { type: 'textarea', name: 'desc',  label: 'Description' },
  ] }
```

## Strict checking for a single field

`FieldConfig` accepts any built-in field; to lock one entry to a specific type
(and catch a wrong `type` or missing required props), annotate with its interface:

```ts
import type { RepeaterFieldConfig } from 'quickbuilder';

const items: RepeaterFieldConfig = {
  type: 'repeater', name: 'items', fields: [/* … */],
};
```

## Custom field types

If you use a field type registered via the `custom_field` filter, type the tree
with `AnyFieldConfig` (which adds the open `CustomFieldConfig` escape hatch):

```ts
import type { AnyFieldConfig } from 'quickbuilder';

const fields: AnyFieldConfig[] = [
  { type: 'text', name: 'title' },
  { type: 'my-rating', name: 'score', max: 5 },   // custom type + custom props OK
];
```

See [Custom Fields](./custom-fields.md) for registering the component.
