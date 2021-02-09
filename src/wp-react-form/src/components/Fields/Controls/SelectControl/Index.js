import React, { useEffect, useState } from "react";
import Select from "react-select";

import withFields from "../../../../Hooks/withFields";

import Label from "../../../../core/Label";
import { isArray } from "../../../../core/functions";

import "./select.scss";
function Index(props) {
	const {
		id,
		name,
		label,
		multiple,
		placeholder,
		search,
		options,
		option,
	} = props;

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
				onChange={(option) => props.setOption(option)} // option or options
			/>
		</div>
	);
}

export default withFields(Index);
