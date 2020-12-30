import React, { useEffect, useState } from "react";
import { useInstanceId } from "@wordpress/compose";
import Select from "react-select";

import withConditionedFields from "../../../../Hooks/withConditionedFields";

import "./select.scss";
import Label from "../../../../core/Label";

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
	} = props;
	const [option, setOption] = useState(value);

	useEffect(() => {
		if (value && options.length > 0) {
			let currentOption = options.filter(
				(option) => option.value === value
			);
			if (currentOption?.[0]) {
				setOption(currentOption[0]);
			}
		}
	}, []);

	useEffect(() => {
		//FIXME: Need to handle if Multiple is true.
		if (option?.value) {
			onChange(option.value);
		}
	}, [option]);

	return (
		<div className="wprf-select-wrapper">
			<Label label={label} htmlFor={id} />
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
