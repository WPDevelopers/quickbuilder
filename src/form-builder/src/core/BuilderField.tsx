import React, { useEffect } from 'react'
import { Group, Radio, Section, Date, Test, Repeater, Toggle, ColorPicker, Select, Slider } from '../fields';
import { useBuilderContext, useDefaults } from './hooks';
import Field from './Field';
import { isEmptyObj, objectWithoutPropertiesLoose } from './utils';
import { isFunction, isObject } from 'lodash';

const BuilderField = (props) => {
    if (!props.field || props.field.length === 0) {
        console.log(props)
        throw new Error('Field must have a #field. see documentation.');
    }
    if (!props.field.type || props.field.type.length === 0) {
        throw new Error('Field must have a #type. see documentation.');
    }

    const builderContext = useBuilderContext();

    const { onChange, onBlur } = props;
    let field: any = objectWithoutPropertiesLoose(
        props.field,
        ['validation_rules', 'default', 'rules', 'meta', 'options', 'trigger', 'is_pro', 'switch']
    );
    field = builderContext.getFieldProps(field);

    const { validation_rules, default: defolt, rules, options, trigger, styles, fields } = props.field;

    if (isFunction(onChange)) {
        field.onChange = props.onChange;
    }
    if (isFunction(onBlur)) {
        field.onBlur = props.onBlur;
    }

    const meta = { ...builderContext.getFieldMeta(field.name, props), ...props.meta, validation_rules, default: defolt, rules, options, trigger, styles };
    const helpers = builderContext.getFieldHelpers(props);

    const inputFieldsAttributes = { field, meta, helpers }

    // if (field.name == 'custom_first_param') {
    //     console.log(field.name, meta)
    // }

    useEffect(() => {
        if (isObject(trigger) && !isEmptyObj(trigger)) {
            useDefaults(field.name, helpers, meta.value, trigger);
        }
    }, [meta.value])

    if (!meta.visible) {
        return <></>;
    }

    switch (field.type) {
        case "text":
        case "checkbox":
        case "radio":
        case "email":
        case "range":
        case "number":
            return <Field {...inputFieldsAttributes} />;
        case "select":
            return <Select {...inputFieldsAttributes} options={options} />;
        case "slider":
            return <Slider {...inputFieldsAttributes} />;
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
            return <Toggle {...inputFieldsAttributes} options={options} />;
        case "colorpicker":
            return <ColorPicker {...inputFieldsAttributes} />;
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
            return <Repeater {...repeaterAttr} fields={fields} />;
        // return <Test {...inputFieldsAttributes} />;
        default:
            return <></>;
    }
}

// export default withLabel(BuilderField);
export default BuilderField;