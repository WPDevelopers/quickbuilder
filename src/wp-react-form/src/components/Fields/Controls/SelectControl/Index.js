import React, { useEffect, useState } from "react";
import { useInstanceId } from "@wordpress/compose";
import Select from "react-select";
import { ObjectFilter } from "../../../../core/functions";

import "./select.scss";

function Index({
	id,
	name,
	label,
	multiple,
	value,
	onChange,
	placeholder,
	search,
	parentValue,
	options,
	...rest
}) {
	const [fields, setFields] = useState([]);
	const [savedValue, setSavedValue] = useState(value);
	const [svalue, setValue] = useState(value);
	const instanceId = useInstanceId(Index);

	useEffect(() => {
		if (
			ObjectFilter(
				parentValue,
				(item) => parentValue[item] != undefined,
				true
			).length > 0
		) {
			let newOptions = options.filter((item, i) => {
				if (item?.condition) {
					let isVisible = true;
					Object.keys(item.condition).map((type) => {
						// cond: notification_type, source
						let typeValue =
							typeof parentValue === "object"
								? parentValue[type]
								: parentValue;
						if (item?.condition?.[type]) {
							if (
								typeof item?.condition?.[type] === "object" &&
								!item?.condition?.[type].includes(typeValue)
							) {
								isVisible = false;
							}
							if (
								typeof item?.condition?.[type] === "string" &&
								item?.condition?.[type] !== typeValue
							) {
								isVisible = false;
							}
						}
					});
					return isVisible;
				} else {
					return item;
				}
			});
			setFields(newOptions);
		} else {
			setFields(options);
		}
	}, [parentValue]);

	useEffect(() => {
		if (parentValue && typeof parentValue !== "object") {
			let isExists = [...fields].filter(
				(field) => field.value === savedValue
			);
			if (0 === isExists.length) {
				if (fields?.[0]?.value) {
					setSavedValue(fields[0].value);
					onChange(fields[0].value);
				}
			}
		}
	}, [fields]);

	useEffect(() => {
		setSavedValue(value);
	}, [value]);

	useEffect(() => {
		if (svalue) {
			onChange(svalue.value);
		}
	}, [svalue]);

	return (
		<div className="wprf-select-wrapper">
			<label class="wprf-input-label" htmlFor={id}>
				{label}
			</label>
			<Select
				classNamePrefix="wprf-select"
				isSearchable={search ?? false}
				id={id}
				name={name}
				isMulti={multiple ?? false}
				placeholder={placeholder}
				options={fields}
				value={svalue}
				onChange={(option) => setValue(option)}
			/>
		</div>
	);
}

export default Index;
