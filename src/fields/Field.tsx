import React from "react";
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";
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
	Date,
	Action,
	Media,
	Editor,
	Button,
	Message,
	Modal,
	Textarea,
	CodeViewer,
	JsonUploader,
	SelectAsync,
	ResponsiveNumber,
} from ".";

import { withProps } from "../core/hooks";
import Tab from "./Tab";
import Checkbox from "./Checkbox";

const Field = (props) => {
	if (!props.type || props.type.length === 0) {
		console.error(props);
		throw new Error(
			__("Field must have a #type. see documentation.", "notificationx")
		);
	}

	switch (props.type) {
		case "text":
		// case "checkbox":
		case "radio":
		case "email":
		case "range":
		case "number":
		case "hidden":
			return <Input {...props} />;
		case "checkbox":
			return <Checkbox {...props} />;
		case "textarea":
			return <Textarea {...props} />;
		case "codeviewer":
			return <CodeViewer {...props} />;
		case "message":
			return <Message {...props} />;
		case "select":
			return <Select {...props} />;
		case "select-async":
			return <SelectAsync {...props} />;
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
		case "jsonuploader":
			return <JsonUploader {...props} />;
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
		case "tab":
			return <Tab {...props} />;
		// case "test":
		//     return <Test {...props} />;
		case "responsive-number":
			return <ResponsiveNumber {...props} />;
		default:
			const customField = applyFilters(
				"custom_field",
				"",
				props.type,
				props
			);
			return <>{customField}</>;
	}
};

export const GenericField = withProps(Field, true);
export default withProps(Field);
