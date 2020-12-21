import React, { useEffect } from "react";
import { withSelect, dispatch } from "@wordpress/data";
import {
	TextControl,
	TextareaControl,
	CheckboxControl,
	ColorPicker,
	RadioControl,
	RangeControl,
	Button,
	ColorIndicator
} from "@wordpress/components";
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

	console.log("Field for", props.name);

	if (!props.canVisible) {
		return "";
	}

	console.log("Field for dd", props.name);

	switch (props.type) {
		case "text":
			return <TextControl {...controlProps} />;
		case "textarea":
			return <TextareaControl {...controlProps} />;
		case "checkbox":
			return <CheckboxControl {...controlProps} />;
		case "colorpicker":
			return <ColorPicker {...controlProps} />;
		case "radio":
			return <RadioControl {...controlProps} />;
		case "slider":
			return <RangeControl {...controlProps} />;
		case "icon-button":
			return <Button {...controlProps} />;
		case "color-indicator":
			<ColorIndicator colorValue="#0073aa" />
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
