import React from 'react'
import { Group, Radio } from '../fields';
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

    const inputFieldsAttributes = { ...field, meta }

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
            // console.log(inputFieldsAttributes);
            return <Field {...inputFieldsAttributes} />;
        case "group":
            let groupAttr = {
                ...inputFieldsAttributes,
                meta: { ...inputFieldsAttributes.meta, withState: false, parent: props.name, parentDefault: props.default }
            };
            return <Group {...groupAttr} />;
        case "radio-card":
            return <Radio {...inputFieldsAttributes} />;
    }
}

export default BuilderField;