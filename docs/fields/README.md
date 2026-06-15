# Field Reference

Every built-in field type, its `type` value(s), the config interface, and the
**type-specific** props it adds on top of the shared
[`BaseFieldConfig`](../field-authoring-guide.md#shared-properties-basefieldconfig)
(`name`, `label`, `default`, `rules`, `validation_rules`, `is_pro`, …).

All interfaces are importable from the package root, e.g.
`import type { SelectFieldConfig } from 'quickbuilder'`.

## Inputs

### Text input — `TextFieldConfig`
`type: 'text' | 'email' | 'number' | 'range' | 'hidden'` · component: `Input`

| Prop | Type | Notes |
|---|---|---|
| `min` / `max` / `step` | `number` | For `number` / `range`. |
| `copyOnClick` | `boolean` | Render a click-to-copy affordance. |

```ts
{ type: 'email', name: 'email', label: 'Email', placeholder: 'you@site.com' }
```

### Textarea — `TextareaFieldConfig`
`type: 'textarea'` · `rows?: number`

### Radio — `RadioFieldConfig`
`type: 'radio'` · `options?: FieldOption[]` · component: `Input`

### Responsive number — `ResponsiveNumberFieldConfig`
`type: 'responsive-number'` · `min` / `max` / `step` — per-device numeric input.

## Choice fields

### Select — `SelectFieldConfig`
`type: 'select'` · component: `Select`

| Prop | Type | Notes |
|---|---|---|
| `options` | `FieldOption[]` | Static choices. |
| `multiple` | `boolean` | Multi-select. |
| `search` | `boolean` | Searchable. |
| `ajax` | `AjaxConfig` | Async option loading. |

```ts
{ type: 'select', name: 'src', label: 'Source', multiple: true,
  options: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] }
```

### Checkbox — `CheckboxFieldConfig`
`type: 'checkbox'` · `options?`, `multiple?` — single checkbox or a group.

### Checkbox select — `CheckboxSelectFieldConfig`
`type: 'checkbox-select'` · `options?`, `multiple?`, `ajax?`

### Async select — `SelectAsyncFieldConfig`
`type: 'select-async'` · `ajax?`, `options?`, `multiple?` — react-select async loader.

### Radio cards — `RadioCardFieldConfig`
`type: 'radio-card'` · `options?: FieldOption[]` — card-style single choice.
Options may carry `icon`, `column`, and per-option `rules`.

### Toggle — `ToggleFieldConfig`
`type: 'toggle'` · `options?`, `default?: boolean`

## Rich / specialized

### Slider — `SliderFieldConfig`
`type: 'slider'` · `min` / `max` / `step` / `default: number` — WP `RangeControl`.

### Date — `DateFieldConfig`
`type: 'date'` · `default?: string` — date/datetime picker.

### Color picker — `ColorPickerFieldConfig`
`type: 'colorpicker'` · `reset_text?: string`, `default?: string`.

### Editor — `EditorFieldConfig`
`type: 'editor'` · `default?: string` — Draft.js rich-text editor (HTML value).

### Media — `MediaFieldConfig`
`type: 'media'` · `multiple?: boolean` — WordPress media uploader.

### JSON uploader — `JsonUploaderFieldConfig`
`type: 'json-uploader'` — upload/parse a JSON file.

### Code viewer — `CodeViewerFieldConfig`
`type: 'code-viewer'` — read-only code block with copy.

### Copy to clipboard — `CopyToClipboardFieldConfig`
`type: 'copy-to-clipboard'` — copy utility.

### Message — `MessageFieldConfig`
`type: 'message'` — static informational text.

## Actions / overlays

### Button — `ButtonFieldConfig`
`type: 'button'` · component: `Button`

| Prop | Type | Notes |
|---|---|---|
| `text` | `string \| { normal?; saved?; … }` | Label (object form for AJAX states). |
| `ajax` | `AjaxConfig` | Run a request on click. |
| `href` / `target` | `string` / `string` | Render as a link. |
| `fields` | `FieldConfig[]` | Button group. |

### Action — `ActionFieldConfig`
`type: 'action'` — defers to a WordPress filter (no UI of its own).

### Modal — `ModalFieldConfig`
`type: 'modal'` · `fields?: FieldConfig[]` — dialog containing fields.

## Containers (nest `fields`)

### Group — `GroupFieldConfig`
`type: 'group'` · `fields: FieldConfig[]`, `display?: 'inline' | 'block'` —
stored as a flat object under the group's `name`.

### Repeater — `RepeaterFieldConfig`
`type: 'repeater'` · `fields: FieldConfig[]`, `button?: { label?: string }` —
stored as an **array of objects**.

```ts
{ type: 'repeater', name: 'items', button: { label: 'Add' },
  fields: [{ type: 'text', name: 'title' }] }
```

### Section — `SectionFieldConfig`
`type: 'section'` · `fields: FieldConfig[]`, `collapsed?: boolean` — collapsible group.

### Tab — `TabFieldConfig`
`type: 'tab'` · `fields: FieldConfig[]`, `icon?: string` — a single tab.

---

## Custom field types

Any other `type` string routes to the `custom_field` filter — see
[Custom Fields](../custom-fields.md). Type such configs with `AnyFieldConfig`.

## Component prop types

When authoring a field **component** (not just a config), import its props type —
`InputProps`, `SelectProps`, `RepeaterProps`, … — each is
`XxxFieldConfig & InjectedFieldProps` (config + the props the builder injects).
