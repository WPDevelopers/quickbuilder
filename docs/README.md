# quickbuilder

A React + TypeScript **form-builder library** used by WPDeveloper WordPress
plugins. You describe a form as a **config object** (tabs → sections/groups →
fields) and quickbuilder renders it, manages state, validation, conditional
visibility, and AJAX-driven options.

It ships ~26 built-in field types (text, select, repeater, color-picker, editor,
…) and is extensible with custom field types.

> **New to the codebase?** Start with [Architecture](./architecture.md). \
> **Building a form?** See the [Field Authoring Guide](./field-authoring-guide.md)
> and the [Field Reference](./fields/README.md). \
> **Adding a new field type?** See [Custom Fields](./custom-fields.md).

## Installation

quickbuilder is consumed directly from the GitHub repository (the built `dist/`
is committed), not from npm:

```jsonc
// package.json
"dependencies": {
  "quickbuilder": "WPDevelopers/quickbuilder"
}
```

React, ReactDOM and all `@wordpress/*` packages are **peer/externals** — the host
WordPress provides them as globals (`wp.element`, `wp.components`, …). The library
targets **React 18** (the version current WordPress ships).

## Quick start

`useBuilder` creates the builder context, `BuilderProvider` supplies it, and
`FormBuilder` renders the tree:

```tsx
import { FormBuilder, BuilderProvider, useBuilder } from 'quickbuilder';
import type { FieldConfig } from 'quickbuilder';

const tabs = [
  {
    type: 'tab',
    id: 'general',
    label: 'General',
    fields: [
      { type: 'text', name: 'title', label: 'Title', default: '' },
      {
        type: 'select',
        name: 'source',
        label: 'Source',
        options: [
          { label: 'WooCommerce', value: 'woocommerce' },
          { label: 'Contact Form 7', value: 'cf7' },
        ],
      },
    ] satisfies FieldConfig[],
  },
];

const config = { active: 'general', sidebar: false };

export default function MyForm({ savedValues }) {
  const context = useBuilder({ config, tabs, savedValues });
  return (
    <BuilderProvider value={context}>
      <FormBuilder config={config} tabs={tabs} />
    </BuilderProvider>
  );
}
```

## Public API surface

Everything below is exported from the package root (`index.tsx`).

| Export | What it is |
|---|---|
| `FormBuilder` | The top-level component that renders a config. |
| `useBuilder(props)` | Creates the builder context (state, handlers, helpers). |
| `BuilderProvider` / `BuilderConsumer` | React context provider/consumer. |
| `useBuilderContext()` | Reads the builder context inside a field/component. |
| `useOptions`, `useDefaults`, `withProps`, `withLabel` | Field hooks/HOCs. |
| field components | `Input`, `Select`, `Repeater`, `Group`, `Section`, … |
| `Row`, `Column`, `Label`, `Image` | Layout/primitive components. |
| utils | `when`, `getIn`, `setIn`, `executeChange`, `isVisible`, … |
| **types** | `FieldConfig`, `AnyFieldConfig`, per-type `*FieldConfig`, `*Props`, `InjectedFieldProps`, `Condition`, `FieldOption`, `AjaxConfig`, … |

See the [Field Authoring Guide](./field-authoring-guide.md) for the config schema
and the [Field Reference](./fields/README.md) for every field type's props.

## Development

```bash
nvm use            # Node 24 (see .nvmrc; engines require >=24)
pnpm install
pnpm build         # Rollup dev + minified prod bundles -> dist/ (committed)
pnpm typecheck     # tsc --noEmit (must stay green)
pnpm lint          # ESLint (see note in CLAUDE.md)
```

`dist/` is committed — after changing source, **rebuild and commit `dist/`** or
consumers won't receive the change.
