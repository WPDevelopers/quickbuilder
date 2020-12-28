import React from "react";
import { withSelect } from "@wordpress/data";
import {
	TextControl,
	TextareaControl,
	Checkbox,
	RadioBasic,
	ColorPicker,
	RadioCard,
	GroupControl,
	SectionView,
	Toggle,
} from "./Controls";
import withCommon from "../../Hooks/withCommon";

const Field = (props) => {
	if (!props.isVisible) {
		return "";
	}

	let controlProps = {
		...props,
	};

	// console.log(
	// 	"from Field Comp controlProps",
	// 	controlProps.name,
	// 	controlProps
	// );

	switch (props.type) {
		case "section":
			return <SectionView {...controlProps} />;
		case "text":
			return <TextControl {...controlProps} />;
		case "textarea":
			return <TextareaControl {...controlProps} />;
		case "checkbox":
			return <Checkbox {...controlProps} />;
		case "radio-basic":
			return <RadioBasic {...controlProps} />;
		case "radio-card":
			return <RadioCard {...controlProps} />;
		case "colorpicker":
			return <ColorPicker {...controlProps} />;
		case "toggle":
			return <Toggle {...controlProps} />;
		case "slider":

		case "button":
		case "date":
		case "group":
			return <GroupControl {...controlProps} />;
		default:
			return <div></div>;
	}
};

export default withSelect((select, ownProps) => {
	let savedValue = select("wprf-store").getFieldValue(ownProps.name);
	const mapsToProps = {
		value: savedValue ?? ownProps.value,
		// default: ownProps.value,
		isVisible: select("wprf-store").isVisible(ownProps, ownProps.name),
		isTouched: select("wprf-store").isTouched(ownProps.name),
		errorMessage: select("wprf-store").getError(ownProps.name),
	};
	return mapsToProps;
})(withCommon(Field));
