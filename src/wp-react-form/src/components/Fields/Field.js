import React, { useEffect } from "react";
import { withSelect, dispatch } from "@wordpress/data";
import { TextControl, TextareaControl, Checkbox, RadioBasic } from "./Controls";

import { useCallback } from "@wordpress/element";

const Field = (props) => {
	// useEffect(() => {
	// 	console.log("Field for", props.name);
	// }, []);
	const handleChange = useCallback(
		(value, name) => {
			dispatch("wprf-store").setFormState({
				...props.formState,
				[name]: value,
			});
		},
		[props]
	);

	let controlProps = {
		...props,
		value: props[props.name],
		onChange: (inputValue) => handleChange(inputValue, props.name),
	};

	// console.log("Field for", props.name, props);

	if (!props.canVisible) {
		return "";
	}

	// console.log( 'props.type', props.type );

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

		case "slider":
		case "button":
		case "toggle":
		case "date":
		default:
			return <div></div>;
	}
};

export default React.memo(
	withSelect((select, ownProps) => {
		return {
			formState: select("wprf-store").getFormState(),
			[ownProps.name]: select("wprf-store").getInputState(ownProps.name),
			canVisible: select("wprf-store").inputCanVisible(ownProps.name),
		};
	})(Field)
);
