import React, { useState, useEffect, useMemo } from "react";
import { eligibleOption, eligibleOptions, isArray } from "../core/functions";

import { dispatch } from "@wordpress/data";

const withFields = (WrappedComponent) => {
	const WithFields = (props) => {
		const { options, onChange, value, parentValue } = props;
		const [fields, setFields] = useState(options);
		const [option, setOption] = useState(null);

		useEffect(() => {
			setFields(options);
		}, [options]);

		// useEffect(() => {
		// 	let newOptions = eligibleOptions(options, parentValue);
		// 	setFields(newOptions);
		// 	if (value) {
		// 		let newOption = eligibleOption(
		// 			newOptions,
		// 			value,
		// 			props?.multiple
		// 		);
		// 		if (newOption != false) {
		// 			setOption(newOption);
		// 		}
		// 	}
		// }, []);

		// useEffect(() => {
		// 	let newOptions = eligibleOptions(options, parentValue);
		// 	setFields(newOptions);
		// }, [parentValue]);

		useEffect(() => {
			if (option !== null) {
				if (!props?.multiple) {
					setOption(option);
					onChange(option.value);
				} else {
					if (isArray(option)) {
						let selectedOptions = option.map((opt) => opt.value);
						onChange(selectedOptions);
					}
				}
			} else {
				onChange([]);
			}
		}, [option]);

		return (
			<WrappedComponent
				{...props}
				options={fields}
				option={option}
				setOption={(res) => setOption(res)}
			/>
		);
	};
	return WithFields;
};

export default withFields;
