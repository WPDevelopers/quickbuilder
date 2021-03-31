import React, { useEffect } from 'react'
import { ColorPicker, Group, Input, Radio, Repeater, Section, Select, Slider, Toggle, Date } from '.';
import { useBuilderContext, useDefaults, withChange, withProps } from '../core/hooks';
import { isEmptyObj, isObject } from '../core/utils';

const Field = (props) => {
    if (!props.type || props.type.length === 0) {
        console.error("props", props);

        throw new Error('Field must have a #type. see documentation.');
    }

    // const inputFieldsAttributes = { meta, field, helpers };
    // const { options, fields, trigger } = meta;

    // useEffect(() => {
    //     if (isObject(trigger) && !isEmptyObj(trigger)) {
    //         useDefaults(field.name, helpers, meta.value, trigger);
    //     }
    // }, [meta.value])

    switch (props.type) {
        case "text":
        case "checkbox":
        case "radio":
        case "email":
        case "range":
        case "number":
            return <Input {...props} />;
        case "select":
            return <Select {...props} />;
        case "slider":
            return <Slider {...props} />;
        case "group":
            return <Group {...props} />;
        case "radio-card":
            return <Radio {...props} />;
        case "section":
            return <Section {...props} />;
        case "date":
            return <Date {...props} />;
        case "toggle":
            return <Toggle {...props} />;
        case "colorpicker":
            return <ColorPicker {...props} />;
        case "repeater":
            return <Repeater {...props} />;
        // return <Test {...inputFieldsAttributes} />;
        default:
            return <></>;
    }
};

export const GenericField = withProps(Field, true);
export default withProps(withChange(Field));
