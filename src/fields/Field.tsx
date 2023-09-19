import { applyFilters } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import React from "react";
import {
	Action,
	Button,
	CheckboxSelect,
	CodeViewer,
	ColorPicker,
	CopyToClipboard,
	Date,
	Editor,
	Group,
	Input,
	JsonUploader,
	Media,
	Message,
	Modal,
	Radio,
	Repeater,
	ResponsiveNumber,
	Section,
	Select,
	SelectAsync,
	Slider,
	Textarea,
	Toggle,
} from ".";

import { withProps } from "../core/hooks";
import Checkbox from "./Checkbox";
import Tab from "./Tab";

const Field = (props) => {
	if (!props.type || props.type.length === 0) {
		console.error(props);
		throw new Error(
			__("Field must have a #type. see documentation.", "betterdocs")
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
		case "copy-to-clipboard":
			return <CopyToClipboard {...props} />;
		case "message":
			return <Message {...props} />;
		case "select":
			return <Select {...props} />;
		case "checkbox-select":
			return <CheckboxSelect {...props} />;
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
