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
	FormToggle,
	DateTimePicker
} from "@wordpress/components";

import '../../../../../node_modules/@wordpress/components/build-style/style.css'
import './radio.scss';

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
	let checkedProps = {
		// ...props,
		checked: props[props.name],
		onChange: (inputValue) => handleChange(inputValue.currentTarget ? inputValue.currentTarget.checked : inputValue, props.name),
	};

	// console.log("Field for", props.name, props);

	if (!props.canVisible) {
		return "";
	}

	switch (props.type) {
		case "text":
			return <TextControl {...controlProps} />;
		case "textarea":
			return <TextareaControl {...controlProps} />;
		case "checkbox":
			return <CheckboxControl {...checkedProps} />;
		case "colorpicker":
			return <ColorPicker {...controlProps} />;
		case "radio":
			return <div className={`${controlProps.css_class}${ ` ${controlProps.style || `default`}` }`}><RadioControl {...controlProps} /></div>;
		case "slider":
			return <RangeControl {...controlProps} />;
		case "button":
			return <Button {...controlProps} />;
		case "toggle":
			return <FormToggle  {...checkedProps}/>;
		case "date":
			return <DateTimePicker {...checkedProps}/>
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
