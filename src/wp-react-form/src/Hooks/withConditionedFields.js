import React, { useState, useEffect, useMemo } from "react";
import { isExists, ObjectFilter } from "../core/functions";

import { dispatch } from "@wordpress/data";

const withConditionedFields = (WrappedComponent) => {
	const WithConditionedFields = (props) => {
		const { options, onChange, value, parentValue } = props;
		const [fields, setFields] = useState(options);
		const [savedValue, setSavedValue] = useState(value);
		const [option, setOption] = useState([]);
		const [isOpt, setOptin] = useState();

		useEffect(() => {
			if (fields) {
				let selectedOption = fields.filter(
					(field) => field.value === value
				);
				setOptin(selectedOption?.[0]);
			}
		}, []);

		useEffect(() => {
			if (options?.length > 0) {
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
									!isExists(
										item?.condition?.[type],
										typeValue
									)
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
				// if (newOptions?.[0]?.value && !savedValue && !props?.multiple) {
				// 	setOption(newOptions?.[0]);
				// }
			} else {
				setFields(options);
				// if (options?.[0]?.value && !savedValue && !props?.multiple) {
				// 	setOption(options?.[0]);
				// }
			}
		}, [parentValue]);

		useEffect(() => {
			if (fields?.length > 0) {
				let isExists = [...fields].filter(
					(field) => field.value === savedValue
				);
				if (parentValue) {
					if (0 === isExists.length) {
						if (fields?.[0]?.value) {
							setSavedValue(fields[0].value);
							if (!props?.multiple) {
								setOption({ ...fields[0] });
							}
						}
					}
				}
			}
		}, [fields]);

		useEffect(() => {
			if (value) {
				setSavedValue(value);
			}
		}, [value]);

		useEffect(() => {
			if (option?.value && !props?.multiple) {
				setOptin(option);
				onChange(option.value);
			}
		}, [option]);

		useEffect(() => {
			if (isOpt?.value && !props?.multiple) {
				onChange(isOpt.value);
			}
			if (isOpt?.trigger) {
				Object.keys(isOpt.trigger).map((key) => {
					let keyValue = isOpt.trigger?.[key];
					Object.keys(keyValue).map((control_key) => {
						dispatch("wprf-store").setFieldValue({
							name: `${key}[${control_key}]`,
							value: {
								[`${key}[${control_key}]`]: keyValue[
									control_key
								],
							},
						});
					});
				});
			}
		}, [isOpt]);

		return (
			<WrappedComponent
				{...props}
				options={fields}
				value={option}
				savedValue={savedValue}
				setValue={(res) => setOptin(res)}
			/>
		);
	};
	return WithConditionedFields;
};

export default withConditionedFields;
