import React from 'react'
import { Group, Radio, Section, Date, Test, Repeater, Toggle } from '../fields';
import { useBuilderContext } from './hooks';
import Field from './Field';
import { objectWithoutPropertiesLoose } from './utils';

const BuilderField = (props) => {

    if (!props.type || props.type.length === 0) {
        throw new Error('Field must have a #type. see documentation.');
    }

    const builderContext = useBuilderContext();

    const field: any = objectWithoutPropertiesLoose(props, ['validation_rules', 'default', 'rules', 'meta']);

    const { validation_rules, default: defolt, rules } = props;

    const meta = { ...builderContext.getFieldMeta(field.name, props), ...props.meta, validation_rules, default: defolt, rules };
    const helpers = builderContext.getFieldHelpers(props);

    const inputFieldsAttributes = { ...field, meta, helpers }

    // if (props.name === 'repeater_text_one') {
    //     console.log(props, field, meta)
    // }

    if (!meta.visible) {
        return <></>;
    }

    switch (props.type) {
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
                        type: props.type,
                        name: props.name,
                        default: props.default,
                        ...inputFieldsAttributes?.meta?.parent
                    }
                }
            };
            return <Group {...groupAttr} />;
        case "radio-card":
            return <Radio {...inputFieldsAttributes} />;
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