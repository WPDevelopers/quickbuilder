import * as React from 'react';
import invariant from 'tiny-warning';
import { FormBuilderContextType } from '../types';

export const BuilderContext = React.createContext<FormBuilderContextType<any>>(
    undefined as any
);

BuilderContext.displayName = process.env.NODE_ENV === 'production' ? 'Anonymous' : 'BuilderContext';

export const BuilderProvider = BuilderContext.Provider;
export const BuilderConsumer = BuilderContext.Consumer;

export default function useBuilderContext<Values>() {
    const builderContext = React.useContext<FormBuilderContextType<Values>>(BuilderContext);
    invariant(
        !!builderContext,
        `BuilderContext context is undefined, please verify you are calling useBuilderContext() as child of a <FormBuilder> component.`
    );
    return builderContext;
}
