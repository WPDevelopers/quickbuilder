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
	SelectControl,
	Typography,
	Slider,
	Number,
} from "./Controls";
import withCommon from "../../Hooks/withCommon";
import { isArray } from "../../core/functions";

const Field = (props) => {
	if (!props.isVisible) {
		return "";
	}

	let controlProps = {
		...props,
	};

	// console.log("controlProps", controlProps);

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
		case "typography":
			return <Typography {...controlProps} />;
		case "slider":
			return <Slider {...controlProps} />;
		case "button":
		case "date":
		case "group":
			return <GroupControl {...controlProps} />;
		case "select":
			return <SelectControl {...controlProps} />;
		case "number":
			return <Number {...controlProps} />;
		default:
			return <div></div>;
	}
};

export default withSelect((select, ownProps) => {
	let savedValue = select("wprf-store").getFieldValue(ownProps.name);

	let value;

	if (typeof ownProps.value === "object" && savedValue != undefined) {
		if (isArray(ownProps.value)) {
			value = [...ownProps.value, ...savedValue];
		} else {
			value = { ...ownProps.value, ...savedValue };
		}
	} else {
		value = savedValue ?? ownProps.value;
	}

	let mapsToProps = {
		value,
		isVisible: select("wprf-store").isVisible(ownProps),
		isTouched: select("wprf-store").isTouched(ownProps.name),
		errorMessage: select("wprf-store").getError(ownProps.name),
	};

	if (
		ownProps?.options &&
		ownProps?.options?.length > 0 &&
		["radio-card", "select"].includes(ownProps?.type)
	) {
		let listCond = [];
		ownProps.options.map((option) => {
			if (option?.condition) {
				Object.keys(option?.condition).map((condKey) => {
					if (!listCond.includes(condKey)) {
						listCond.push(condKey);
					}
				});
			}
		});
		ownProps.parent = listCond;
	}

	if (ownProps.parent) {
		let parentsData = undefined;
		let parentValue = select("wprf-store").getFieldValue(ownProps.parent);
		if (typeof ownProps.parent === "object") {
			parentsData = {};
			ownProps.parent.map((parent) => {
				parentsData[parent] = select("wprf-store").getFieldValue(
					parent
				);
			});
			parentValue = parentsData;
		}
		mapsToProps = {
			...mapsToProps,
			parentValue,
			isVisible: select("wprf-store").isVisible(ownProps, parentValue),
		};
	}

	mapsToProps = {
		...mapsToProps,
	};

	return mapsToProps;
})(withCommon(Field));
