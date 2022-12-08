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
	const [isAjaxRunning, setIsAjaxRunning] = useState(false);
	const [lastRequest, setLastRequest] = useState("");

	const handleMenuOpen = (
		inputValue: string,
		callback: (options: []) => void
	) => {
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
			if (!isAjaxRunning) {
				setIsAjaxRunning(true);
				return wpFetch({
					path: props?.ajax.api,
					data: data,
				})
					.then((response: any) => {
						callback(response);
						// setData({
						// 	options: response,
						// 	parentIndex: [...parentIndex, "options"],
						// });
						return response;
					})
					.finally(() => {
						setIsAjaxRunning(false);
					});
			} else {
				setLastRequest(inputValue);
			}
		}
	};

	// const handleMenuOpen = (
	// 	inputValue: string,
	// 	callback: (options: []) => void
	// ) => {
	// 	if (props?.ajax && when(props?.ajax?.rules, builderContext.values)) {
	// 		let data = { inputValue };
	// 		Object.keys(props?.ajax.data).map((singleData) => {
	// 			if (props?.ajax.data[singleData].indexOf("@") > -1) {
	// 				let eligibleKey = props?.ajax.data[singleData].substr(1);
	// 				data[singleData] = builderContext.values?.[eligibleKey];
	// 			} else {
	// 				data[singleData] = props?.ajax.data[singleData];
	// 			}
	// 		});
	// 		if (!isAjaxComplete) {
	// 			setIsAjaxComplete(true);
	// 			const x = [...lastRequest];
	// 			setLastRequest([]);
	// 			return wpFetch({
	// 				path: props?.ajax.api,
	// 				data: data,
	// 			})
	// 				.then((response: any) => {
	// 					callback(response);
	// 					// setData({
	// 					// 	options: response,
	// 					// 	parentIndex: [...parentIndex, "options"],
	// 					// });
	// 					return response;
	// 				})
	// 				.finally(() => {
	// 					if (x.length) {
	// 						setTimeout(() => {
	// 							handleMenuOpen(...x);
	// 						}, 1000);
	// 					}
	// 					setIsAjaxComplete(false);
	// 				});
	// 		} else {
	// 			setLastRequest([inputValue, callback]);
	// 		}
	// 	}
	// };

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
