import React from 'react'
import {
    ColorPicker,
    Group,
    Input,
    Radio,
    Repeater,
    Section,
    Select,
    Slider,
    Toggle,
    Date, Action, Test, Media, Editor, Button, Message, Modal
} from '.';

import { withProps } from '../core/hooks';

const Field = (props) => {
    if (!props.type || props.type.length === 0) {
        console.error(props);

        throw new Error('Field must have a #type. see documentation.');
    }

    switch (props.type) {
        case "text":
        case "checkbox":
        case "radio":
        case "email":
        case "range":
        case "number":
        case "hidden":
            return <Input {...props} />;
        case "message":
            return <Message {...props} />;
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
        case "media":
            return <Media {...props} />;
        case "editor":
            return <Editor {...props} />;
        case "action":
            return <Action {...props} />;
        case "button":
            return <Button {...props} />;
        case "modal":
            return <Modal {...props} />;
        // case "test":
        //     return <Test {...props} />;
        default:
            return <></>;
    }
};

export const GenericField = withProps(Field, true);
export default withProps(Field);
