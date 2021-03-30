import React, { useEffect } from 'react'
import { ColorPicker, Group, Input, Radio, Repeater, Section, Select, Slider, Toggle, Date } from '.';
import { useBuilderContext, useDefaults, withChange, withProps } from '../core/hooks';
import { isEmptyObj, isObject } from '../core/utils';

const Field = ({ meta, field, helpers }) => {
    if (!field || field.length === 0) {
        throw new Error('Field must have a #field. see documentation.');
    }
    if (!field.type || field.type.length === 0) {
        throw new Error('Field must have a #type. see documentation.');
    }

    const inputFieldsAttributes = { meta, field, helpers };
    const { options, fields, trigger } = meta;

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
            return <Input {...field} />;
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
                        type: field.type,
                        name: field.name,
                        default: field.default,
                        ...inputFieldsAttributes?.meta?.parent
                    }
                }
            };
            return <Repeater {...repeaterAttr} fields={fields} />;
        // return <Test {...inputFieldsAttributes} />;
        default:
            return <></>;
    }
};

export const GenericField = withProps(Field);
export default withProps(withChange(Field));
