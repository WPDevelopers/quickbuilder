import React, { useState, useEffect, useMemo } from "react";
import { ObjectFilter } from "../core/functions";

const withConditionedFields = (WrappedComponent) => {
	const WithConditionedFields = (props) => {
		const { options, onChange, value, parentValue } = props;
		const isParentValueExists = useMemo(
			() =>
				ObjectFilter(
					parentValue,
					(item) => parentValue[item] != undefined,
					true
				).length > 0,
			[parentValue]
		);
		const [fields, setFields] = useState(
			isParentValueExists ? [] : options
		);
		const [savedValue, setSavedValue] = useState(value);

		useEffect(() => {
			if (isParentValueExists) {
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
								let condTypeof = typeof item?.condition?.[type];
								if (
									condTypeof === "object" &&
									!item?.condition?.[type].includes(typeValue)
								) {
									isVisible = false;
								}
								if (
									condTypeof === "string" &&
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
						if (props.type !== "select") {
							onChange(fields[0].value);
						}
					}
				}
			}
		}, [fields]);

		useEffect(() => {
			setSavedValue(value);
		}, [value]);

		return (
			<WrappedComponent
				{...props}
				options={fields}
				savedValue={savedValue}
			/>
		);
	};
	return WithConditionedFields;
};

export default withConditionedFields;
