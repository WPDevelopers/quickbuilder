import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import { isArray, isObject, merge, wpFetch } from "../core/utils";
import { withLabel, useBuilderContext } from "../core/hooks";
import { when } from "../core";
import parse from "html-react-parser";

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
		if (timeOutId) {
			clearTimeout(timeOutId);
		}
		let id = setTimeout(() => {
			// AJAX
			if (
				props?.ajax &&
				when(props?.ajax?.rules, builderContext.values)
			) {
				let data = { inputValue };
				Object.keys(props?.ajax.data).map((singleData) => {
					if (props?.ajax.data[singleData].indexOf("@") > -1) {
						let eligibleKey =
							props?.ajax.data[singleData].substr(1);
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
		//@ts-ignore
		setTimeOutId(id);
	};

	useEffect(() => {
		onChange({
			target: {
				type: "select",
				name,
				value: sOption,
				options,
				multiple,
			},
		});
	}, [sOption]);

	return (
		<div className="wprf-async-select-wrapper">
			<AsyncSelect
				cacheOptions
				loadOptions={handleMenuOpen}
				defaultOptions
				isDisabled={props?.disable}
				classNamePrefix="wprf-async-select"
				defaultMenuIsOpen={true}
				menuIsOpen={true}
				id={id}
				name={name}
				placeholder={placeholder}
				formatOptionLabel={(option, meta) => {
					if (meta?.inputValue?.length) {
						if (
							option?.name
								.toLowerCase()
								.includes(meta?.inputValue?.toLowerCase())
						) {
							let x = option?.name;
							let regX = new RegExp(
								`(${meta?.inputValue})`,
								"gi"
							);
							let name = option?.name.replace(
								regX,
								"<strong style={font-weight: 900}>$1</strong>"
							);
							let address = option?.address.replace(
								regX,
								"<strong style={font-weight: 900}>$1</strong>"
							);
							return (
								<>
									{parse(name)}{" "}
									<small>{parse(address)}</small>
								</>
							);
						}
					}
					return (
						<>
							<b>{option?.name}</b>{" "}
							<small>{option?.address}</small>
						</>
					);
				}}
				value={sOption}
				isClearable={true}
				isOptionDisabled={(option) => option?.disabled}
				onChange={(option) => setSOption(option)} // option or options
			/>
		</div>
	);
};

export default withLabel(SelectAsync);
