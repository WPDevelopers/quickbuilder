import { isEqual } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useBuilderContext } from './hooks';
import { _extends } from './functions';
import { FieldInputProps, FieldMetaProps } from './types';
import { isFunction, withState } from './utils';

export declare type FieldValidator = (value: any) => string | void | Promise<string | void>;

export interface FieldProps<V = any, FormValues = any> {
    field: FieldInputProps<V>;
    // form: BuilderProps<FormValues>;
    meta: FieldMetaProps<V>;
}

export interface FieldConfig<V = any> {
    /**
     * Field component to render. Can either be a string like 'select' or a component.
     */
    component?: string | React.ComponentType<FieldProps<V>> | React.ComponentType | React.ForwardRefExoticComponent<any>;
    /**
     * Component to render. Can either be a string e.g. 'select', 'input', or 'textarea', or a component.
     */
    as?: React.ComponentType<FieldProps<V>['field']> | string | React.ComponentType | React.ForwardRefExoticComponent<any>;
    /**
     * Children render function <Field name>{props => ...}</Field>)
     */
    children?: ((props: FieldProps<V>) => React.ReactNode) | React.ReactNode;
    /**
     * Validate a single field value independently
     */
    validate?: FieldValidator;
    /**
     * Field name
     */
    name: string;
    /** HTML input type */
    type?: string;
    /** Field value */
    value?: any;
    /** Inner ref */
    innerRef?: (instance: any) => void;
}

export declare type GenericFieldHTMLAttributes = JSX.IntrinsicElements['input'] | JSX.IntrinsicElements['select'] | JSX.IntrinsicElements['textarea'];

export declare type FieldAttributes<T> = GenericFieldHTMLAttributes & FieldConfig<T> & T & {
    name: string;
    withState: boolean
};


const Field: React.FC<FieldAttributes<any>> = (props) => {
    const { name, children, as: is, component } = props;
    const builderContext = useBuilderContext();

    const withState = !!(props?.meta?.withState ?? true);
    let meta = builderContext.getFieldMeta(name, props);
    let field = builderContext.getFieldProps({ name, ...props });

    if (!withState) {
        const parent = props?.meta?.parent.name;
        delete field.onChange;
        delete field.onBlur;
        meta = builderContext.getFieldMeta(parent, props)

        if (meta.parent) {
            if (meta.parent.type === 'group') {
                field.value = meta.value && meta.value[field.name] || '';
            }
            if (meta.parent.type === 'repeater') {
                field.value = meta.value && meta.value?.[field.index]?.[field.name] || '';
            }
        }

        field.onChange = props.onChange;
        field.onBlur = props.onBlur;
    }

    var legacyField = {
        field: field,
        form: builderContext
    };

    useEffect(() => {
        if (!meta.value && withState) {
            builderContext.setFieldValue(field.name, meta.default);
        }
    }, [])


    if (isFunction(children)) {
        return children({ ...legacyField, meta });
    }

    if (component) {
        if (typeof component === 'string') {
            return React.createElement(component, { ref: props.innerRef, ...field }, children);
        }
        return React.createElement(component, { ...field }, children);
    }

    const asElement = is || 'input';
    if (typeof asElement === 'string') {
        return React.createElement(
            asElement,
            { ref: props.innerRef, ...field },
            children
        );
    }
    return React.createElement(asElement, { ...field }, children);
}

export default Field;