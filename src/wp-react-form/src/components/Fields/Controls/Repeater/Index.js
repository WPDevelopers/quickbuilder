import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Field from "../../Field";

import "./repeater.scss";

const Index = ({ label, name, ...props }) => {
	if (props?.fields == undefined) {
		throw Error("#fields is required attributes for repeater");
	}
	console.log("props", name, props);

	const fields = [].concat(props.fields).sort(function (a, b) {
		if (a.priority == undefined || b.priority == undefined) return 0;
		return a.priority > b.priority ? 1 : -1;
	});
	const [tempFields, setTempFields] = useState([]);
	const [values, setValues] = useState([]);

	useEffect(() => {
		console.log(tempFields);
	}, [tempFields]);

	console.log("fields", fields);

	return (
		<div className={classNames("wprf-repeater-control")}>
			{label}
			<button
				onClick={() => setTempFields((prevState) => [...prevState, {}])}
			>
				Add New Group
			</button>
			{tempFields.map((tempField, tempIndex) => {
				return (
					<div
						key={tempIndex}
						className={classNames(
							"wprf-repeater-item",
							`wprf-repeater-item-${tempIndex}`
						)}
					>
						<div className="wprf-repeater-item-header">
							{label} <span>#{tempIndex}</span>
							<span
								onClick={() => {
									let newFields = tempFields.filter(
										(item, index) => tempIndex !== index
									);
									setTempFields(newFields);
								}}
							>
								x
							</span>
						</div>
						<div className="wprf-repeater-item-fields">
							{fields.map((field, index) => {
								const modifiedName = `${name}[${tempIndex}][${field.name}]`;
								const modifiedID = `${name}-${tempIndex}-${field.name}`;
								let singleProps = {
									...field,
									name: modifiedName,
									id: modifiedID,
									onChange: (value) => {
										console.log("value", value);
										return;
										// onChange(value, modifiedName);
									},
								};
								return <Field {...singleProps} />;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Index;
