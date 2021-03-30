import React, { useEffect } from 'react'
import { ColorPicker, Group, Input, Radio, Repeater, Section, Select, Slider, Toggle, Date } from '.';
import { useBuilderContext, useDefaults, withChange, withProps } from '../core/hooks';
import { isEmptyObj, isObject } from '../core/utils';

const Field = (props) => {
    if (!props.type || props.type.length === 0) {
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
            // let groupAttr = {
            //     ...props,
            //     meta: {
            //         ...inputFieldsAttributes.meta,
            //         withState: false,
            //         parent: {
            //             type: field.type,
            //             name: field.name,
            //             default: meta.default,
            //             ...inputFieldsAttributes?.meta?.parent
            //         }
            //     }
            // };
            return '';
        // return <Group {...props} />;
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
        // let repeaterAttr = {
        //     ...inputFieldsAttributes,
        //     meta: {
        //         ...inputFieldsAttributes.meta,
        //         withState: false,
        //         parent: {
        //             type: field.type,
        //             name: field.name,
        //             default: field.default,
        //             ...inputFieldsAttributes?.meta?.parent
        //         }
        //     }
        // };
        // return <Repeater {...props} />;
        // return <Test {...inputFieldsAttributes} />;
        default:
            return <></>;
    }
};

export const GenericField = withProps(Field);
export default withProps(withChange(Field));
