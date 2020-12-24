import React from "react";
import { withSelect } from "@wordpress/data";
import { TextControl, TextareaControl, Checkbox, RadioBasic, ColorPicker } from "./Controls";
import withCommon from "../../Hooks/withCommon";

const Field = (props) => {
	if (!props.isVisible) {
		return "";
	}

	let controlProps = {
		...props,
		value:
			props[props.name] !== null
				? props[props.name]
				: props.value !== undefined
				? props.value
				: null,
	};

	// console.log("console from Field Comp controlProps", controlProps);

	switch (props.type) {
		case "text":
			return <TextControl {...controlProps} />;
		case "textarea":
			return <TextareaControl {...controlProps} />;
		case "checkbox":
			return <Checkbox {...controlProps} />;
		case "radio-basic":
			return <RadioBasic {...controlProps} />;
		case "colorpicker":
			return <ColorPicker {...controlProps} />;
		case "slider":

		case "button":
		case "toggle":
		case "date":
		default:
			return <div></div>;
	}
};

export default withSelect((select, ownProps) => {
	return {
		[ownProps.name]: select("wprf-store").getFieldValu(ownProps.name),
		isVisible: select("wprf-store").isVisible(ownProps.name),
	};
})(withCommon(Field));
