import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import { isArray, isObject, merge, wpFetch } from "../core/utils";
import { withLabel, useBuilderContext } from "../core/hooks";
import { when } from "../core";

const SelectAsync = (props) => {
	const builderContext = useBuilderContext();
	let { id, name, multiple, placeholder, onChange, parentIndex } = props;

	const [options, setOptions] = useState(props?.options);
	const [sOption, setSOption] = useState(props?.value);
	const [isAjaxComplete, setIsAjaxComplete] = useState(false);
	const [timeOutId, setTimeOutId] = useState();

	const handleMenuOpen = (
		inputValue: string,
		callback: (options: []) => void
	) => {
		if(timeOutId){
			clearTimeout(timeOutId);
		}
		let id = setTimeout(() => {
			// AJAX
			if (props?.ajax && when(props?.ajax?.rules, builderContext.values)) {
				let data = { inputValue };
				Object.keys(props?.ajax.data).map((singleData) => {
					if (props?.ajax.data[singleData].indexOf("@") > -1) {
						let eligibleKey = props?.ajax.data[singleData].substr(1);
						data[singleData] = builderContext.values?.[eligibleKey];
					} else {
						data[singleData] = props?.ajax.data[singleData];
					}
				});
				if (!isAjaxComplete) {
					return wpFetch({
						path: props?.ajax.api,
						data: data,
					}).then((response: any) => {
						callback(response);
						// setData({
						// 	options: response,
						// 	parentIndex: [...parentIndex, "options"],
						// });
						// setIsAjaxComplete(true);
						return response;
					});
				}
			}
		}, 300);
		setTimeOutId(id);
	};

	useEffect(() => {
		if (!isArray(sOption) && isObject(sOption)) {
			onChange({
				target: {
					type: "select",
					name,
					value: sOption,
					options,
					multiple,
				},
			});
		}
		if (isArray(sOption)) {
			onChange({
				target: {
					type: "select",
					name,
					value: sOption,
					options,
					multiple,
				},
			});
		}
	}, [sOption]);

	return (
		<div className="wprf-select-wrapper">
			<AsyncSelect
				cacheOptions
				loadOptions={handleMenuOpen}
				defaultOptions
				isDisabled={props?.disable}
				classNamePrefix="wprf-select"
				id={id}
				name={name}
				placeholder={placeholder}
				value={sOption}
				isOptionDisabled={(option) => option?.disabled}
				onChange={(option) => setSOption(option)} // option or options
			/>
		</div>
	);
};

export default withLabel(SelectAsync);
