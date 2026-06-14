
export { default as FormBuilder } from './src/FormBuilder';

export { when, builderReducer } from './src/core';
export * from './src/core/utils';
export * from './src/fields';
export * from './src/core/functions';

// Public type surface (field-config schema, primitives, builder types).
export * from './src/types';

export {
    useBuilder,
    useBuilderContext,
    BuilderProvider,
    BuilderConsumer,
    useDefaults,
    withProps,
    useOptions,
    withLabel
} from './src/core/hooks';

export { Row, Column, Label, Image } from './src/core/components';
