import { createContext, useContext } from 'react';
import { FormBuilderContextType, FormBuilderValues } from '../types';

export const BuilderContext = createContext<FormBuilderContextType<any>>(
    undefined as any
);

BuilderContext.displayName = process.env.NODE_ENV === 'production' ? 'Anonymous' : 'BuilderContext';

export const BuilderProvider = BuilderContext.Provider;
export const BuilderConsumer = BuilderContext.Consumer;

export default function useBuilderContext<Values = FormBuilderValues>() {
    const builderContext = useContext<FormBuilderContextType<Values>>(BuilderContext);
    return builderContext;
}
