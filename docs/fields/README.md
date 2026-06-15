# Field Reference

Every built-in field type, its `type` value(s), the config interface, and the
**type-specific** props it adds on top of the shared
[`BaseFieldConfig`](../field-authoring-guide.md#shared-properties-basefieldconfig)
(`name`, `label`, `label_subtitle`, `default`, `rules`, `validation_rules`, `is_pro`, …).
`BaseFieldConfig` also tolerates extra/legacy props (real configs carry props no
component reads), so unknown keys don't error.

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
| `options` | `FieldOptions` | Static choices (array **or** keyed object). |
| `multiple` | `boolean` | Multi-select. |
| `search` | `boolean` | Searchable. |
| `ajax` | `AjaxConfig` | Async option loading. |
| `include_all_in_options` | `boolean` | Prepend an "All" option. |
| `show_selected_values` | `boolean` | Render selected values inline. |
| `filterValue` | `any` | Pre-filter options by another field's value. |

```ts
{ type: 'select', name: 'src', label: 'Source', multiple: true,
  options: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] }
```

### Checkbox — `CheckboxFieldConfig`
`type: 'checkbox'` · `options?`, `multiple?` — single checkbox or a group.

### Checkbox select — `CheckboxSelectFieldConfig`
`type: 'checkbox-select'` · `options?`, `multiple?`, `search?`, `ajax?`, `filterValue?`

### Async select — `SelectAsyncFieldConfig`
`type: 'select-async'` · `ajax?`, `options?`, `multiple?` — react-select async loader.

### Radio cards — `RadioCardFieldConfig`
`type: 'radio-card'` · `options?`, `multiple?`, `search?`, `filterValue?` — card-style choice.
Options may carry `icon`, `column`, and per-option `rules`.

### Toggle — `ToggleFieldConfig`
`type: 'toggle'` · `options?`, `disabled?`, `enable_disable_text_active?`

## Rich / specialized

### Slider — `SliderFieldConfig`
`type: 'slider'` · `min` / `max` / `step` — WP `RangeControl`.

### Date — `DateFieldConfig`
`type: 'date'` — date/datetime picker.

### Color picker — `ColorPickerFieldConfig`
`type: 'colorpicker'` · `reset_text?: string`.

### Editor — `EditorFieldConfig`
`type: 'editor'` — Draft.js rich-text editor (HTML value).

### Media — `MediaFieldConfig`
`type: 'media'` · `multiple?: boolean`, `value?` — WordPress media uploader.

### JSON uploader — `JsonUploaderFieldConfig`
`type: 'jsonuploader'` — upload/parse a JSON file.

### Code viewer — `CodeViewerFieldConfig`
`type: 'codeviewer'` · `code?`, `copyOnClick?`, `readOnly?` — read-only code block with copy.

### Copy to clipboard — `CopyToClipboardFieldConfig`
`type: 'copy-to-clipboard'` · `readOnly?`, `descriptionLabel?`, `descriptionCopyable?` — copy utility.

### Message — `MessageFieldConfig`
`type: 'message'` — static informational text.

## Actions / overlays

### Button — `ButtonFieldConfig`
`type: 'button'` · component: `Button`

| Prop | Type | Notes |
|---|---|---|
| `text` | `string \| { normal?; saved?; … }` | Label (object form for AJAX states). |
| `ajax` | `AjaxConfig` | Run a request on click. |
| `href` / `target` | `string \| number` / `string` | Render as a link. |
| `fields` | `AnyFieldConfig[]` | Button group. |

### Action — `ActionFieldConfig`
`type: 'action'` · `action?`, `url?`, `button?` — defers to a WordPress filter.

### Modal — `ModalFieldConfig`
`type: 'modal'` · `fields?: FieldConfig[]` — dialog containing fields.

## Containers (nest `fields`)

Containers nest `fields: AnyFieldConfig[]` so both built-in **and** custom field
types can be nested. Note: some hosts (e.g. betterdocs) store `fields`/`tabs` as
**keyed objects** in their saved data (PHP associative arrays) — convert those to
arrays (`Object.values`) before passing to the builder, which renders/sorts arrays.

### Group — `GroupFieldConfig`
`type: 'group'` · `fields`, `display?: 'inline' | 'block'` — stored as a flat object.

### Repeater — `RepeaterFieldConfig`
`type: 'repeater'` · `fields`, `button?: { label?: string }` — stored as an **array of objects**.

```ts
{ type: 'repeater', name: 'items', button: { label: 'Add' },
  fields: [{ type: 'text', name: 'title' }] }
```

### Section — `SectionFieldConfig`
`type: 'section'` · `fields`, `id?`, `collapsed?`, `searchable?`, `searchPlaceholder?`,
`searchNotFoundMessage?`, `showSubmit?`, `submit?`, `save?` — collapsible group.

### Tab — `TabFieldConfig`
`type: 'tab'` · `fields`, `id?`, `icon?`, `title?`, `active?`, `config?`, `step?`,
`submit?`, `sidebar?`, `completionTrack?`, `save?` — a single tab.

---

## Custom field types

Any other `type` string routes to the `custom_field` filter — see
[Custom Fields](../custom-fields.md). Type such configs with `AnyFieldConfig`.

## Component prop types

When authoring a field **component** (not just a config), import its props type —
`InputProps`, `SelectProps`, `RepeaterProps`, … — each is
`XxxFieldConfig & InjectedFieldProps` (config + the props the builder injects).
