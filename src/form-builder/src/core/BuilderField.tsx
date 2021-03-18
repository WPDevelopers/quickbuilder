import React from 'react'
import { Group, Radio, Section, Date, Test, Repeater, Toggle } from '../fields';
import { useBuilderContext } from './hooks';
import Field from './Field';
import { objectWithoutPropertiesLoose } from './utils';
import { isFunction } from 'lodash';

const BuilderField = (props) => {
    if (!props.field || props.field.length === 0) {
        throw new Error('Field must have a #field. see documentation.');
    }
    if (!props.field.type || props.field.type.length === 0) {
        throw new Error('Field must have a #type. see documentation.');
    }

    const builderContext = useBuilderContext();

    const { onChange, onBlur } = props;
    let field: any = objectWithoutPropertiesLoose(props.field, ['validation_rules', 'default', 'rules', 'meta']);
    field = builderContext.getFieldProps(field);

    const { validation_rules, default: defolt, rules, options } = props.field;

    if (isFunction(onChange)) {
        field.onChange = props.onChange;
    }
    if (isFunction(onBlur)) {
        field.onBlur = props.onBlur;
    }

    const meta = { ...builderContext.getFieldMeta(field.name, props), ...props.meta, validation_rules, default: defolt, rules };
    const helpers = builderContext.getFieldHelpers(props);

    const inputFieldsAttributes = { field, meta, helpers }
    // console.log("inputFieldsAttributes", inputFieldsAttributes)

    if (!meta.visible) {
        return <></>;
    }

    switch (field.type) {
        case "text":
        case "checkbox":
        case "radio":
        case "select":
        case "email":
        case "range":
        case "number":
            // case "date":
            return <Field {...inputFieldsAttributes} />;
        case "group":
            let groupAttr = {
                ...inputFieldsAttributes,
                meta: {
                    ...inputFieldsAttributes.meta,
                    withState: false,
                    parent: {
                        type: field.type,
                        name: field.name,
                        default: meta.default,
                        ...inputFieldsAttributes?.meta?.parent
                    }
                }
            };
            return <Group {...groupAttr} />;
        case "radio-card":
            return <Radio {...inputFieldsAttributes} options={options} />;
        case "section":
            return <Section {...inputFieldsAttributes} />;
        case "date":
            return <Date {...inputFieldsAttributes} />;
        case "toggle":
            return <Toggle {...inputFieldsAttributes} />;
        case "repeater":
            let repeaterAttr = {
                ...inputFieldsAttributes,
                meta: {
                    ...inputFieldsAttributes.meta,
                    withState: false,
                    parent: {
                        type: props.type,
                        name: props.name,
                        default: props.default
                    }
                }
            };
            return <Repeater {...repeaterAttr} />;
        // return <Test {...inputFieldsAttributes} />;
        default:
            return <></>;
    }
}

export default BuilderField;