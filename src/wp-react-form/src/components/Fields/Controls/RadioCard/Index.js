import React, { useEffect, useState } from "react";
import { useInstanceId } from "@wordpress/compose";
import { ObjectFilter } from "../../../../core/functions";

import "./radio-card.scss";

function Index(props) {
	const { name, label, options, onChange, value, parentValue } = props;
	const [fields, setFields] = useState([]);
	const [savedValue, setSavedValue] = useState(value);
	const instanceId = useInstanceId(Index);

	useEffect(() => {
		if (
			ObjectFilter(
				parentValue,
				(item) => parentValue[item] != undefined,
				true
			).length > 0
		) {
			// console.log("parentValue", parentValue);
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
					// if (props.name == "themes") {
					// 	console.log("condtion", item.value, isVisible);
					// }
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

	return (
		<>
			<h4 class="wprf-input-label">{label}</h4>
			<div className="wprf-input-radio-set-wrap wprf-radio-card">
				{fields.map(({ label, value, icon, is_pro }, index) => (
					<div className="wprf-input-radio-set" key={index}>
						<input
							type="radio"
							checked={value === savedValue}
							id={`wprf-input-radio-${instanceId}-${index}`}
							className="wprf-input-field wprf-input-radio"
							value={value}
							name={name}
							onChange={(event) =>
								onChange(event.target.value, { is_pro })
							}
						/>
						<label
							className={`wprf-input-radio-label ${
								icon ? "with-wprf-radio-card-image" : ""
							}`}
							htmlFor={`wprf-input-radio-${instanceId}-${index}`}
						>
							{icon ? (
								<img
									className={`wprf-radio-card-image`}
									src={icon}
									alt={label}
								/>
							) : (
								label
							)}
						</label>
					</div>
				))}
			</div>
		</>
	);
}

export default Index;
