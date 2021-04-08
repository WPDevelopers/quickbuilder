import React from 'react'
import { ColorPicker, Group, Input, Radio, Repeater, Section, Select, Slider, Toggle, Date, Action, Editor } from '.';
import { withChange, withProps } from '../core/hooks';

const Field = (props) => {
    if (!props.type || props.type.length === 0) {
        throw new Error('Field must have a #type. see documentation.');
    }

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
        case "editor":
            return <Editor {...props} />;
        case "action":
            return <Action {...props} />;
        // return <Test {...inputFieldsAttributes} />;
        default:
            return <></>;
    }
};

export const GenericField = withProps(Field, true);
export default withProps(Field);
