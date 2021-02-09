import React, { useEffect, useState } from "react";
import Select from "react-select";

import withConditionedFields from "../../../../Hooks/withConditionedFields";

import Label from "../../../../core/Label";
import { isArray } from "../../../../core/functions";

import "./select.scss";
function Index(props) {
	const {
		id,
		name,
		label,
		multiple,
		value,
		onChange,
		placeholder,
		search,
		options,
		isAjax,
	} = props;
	const [option, setOption] = useState(value);

	useEffect(() => {
		setOption(value);
	}, [value]);

	// useEffect(() => {
	// 	if (savedValue && options.length > 0) {
	// 		if (!multiple && typeof savedValue === "string") {
	// 			let currentOption = options.filter(
	// 				(option) => option.value === savedValue
	// 			);
	// 			setOption(currentOption[0]);
	// 		} else {
	// 			if (isArray(savedValue)) {
	// 				let currentOptions = options.filter((option) =>
	// 					savedValue.includes(option.value)
	// 				);
	// 				setOption(currentOptions);
	// 			}
	// 		}
	// 	}
	// }, []);

	useEffect(() => {
		// TODO
		if (isAjax != undefined) {
		}
	}, [isAjax]);

	useEffect(() => {
		if (option) {
			if (!multiple && option?.value) {
				onChange(option.value);
			} else {
				if (isArray(option)) {
					let selectedOptions = option.map((opt) => opt.value);
					onChange(selectedOptions);
				}
			}
		}
	}, [option]);

	return (
		<div className="wprf-select-wrapper">
			<Label htmlFor={id}>{label}</Label>
			<Select
				classNamePrefix="wprf-select"
				isSearchable={search ?? false}
				id={id}
				name={name}
				isMulti={multiple ?? false}
				placeholder={placeholder}
				options={options}
				value={option}
				onChange={(option) => setOption(option)}
			/>
		</div>
	);
}

export default withConditionedFields(Index);
