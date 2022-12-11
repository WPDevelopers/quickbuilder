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
	// const [lastRequest, setLastRequest] = useState("");

	const handleMenuOpen = (
		inputValue: string,
		callback: (options: []) => void
	) => {
		// AJAX
		if (props?.ajax && when(props?.ajax?.rules, builderContext.values)) {
			if (!inputValue) {
				callback(options);
				return;
			}

			let data = { inputValue };
			Object.keys(props?.ajax.data).map((singleData) => {
				if (props?.ajax.data[singleData].indexOf("@") > -1) {
					let eligibleKey = props?.ajax.data[singleData].substr(1);
					data[singleData] = builderContext.values?.[eligibleKey];
				} else {
					data[singleData] = props?.ajax.data[singleData];
				}
			});

			if (!isAjaxRunning && inputValue) {
				setIsAjaxRunning(true);
				// @ts-ignore
				window.lastRequest = null;
				return wpFetch({
					path: props?.ajax.api,
					data: data,
				})
					.then((response: any) => {
						console.log(inputValue, response, callback);

						callback(response);
						return response;
					})
					.finally(() => {
						setIsAjaxRunning(false);
						// @ts-ignore
						if (window.lastRequest) {
							// @ts-ignore
							const lr = window.lastRequest;
							// @ts-ignore
							window.lastRequest = null;
							console.log("recursive call: ", lr, callback);

							// @ts-ignore
							handleMenuOpen(...lr);
						}

						// @ts-ignore
						window.lastCompleteRequest = inputValue;
					});
			} else {
				// @ts-ignore
				window.lastRequest = [inputValue, callback];
			}
		}
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
				// defaultMenuIsOpen={true}
				id={id}
				name={name}
				placeholder={placeholder}
				formatOptionLabel={(option, meta) => {
					if (meta?.inputValue?.length) {
						if (
							option.name
								.toLowerCase()
								.includes(meta?.inputValue?.toLowerCase())
						) {
							let x = option?.name;
							let regX = new RegExp(
								`(${meta?.inputValue})`,
								"gi"
							);
							let name = option.name?.replace(
								regX,
								"<strong style={font-weight: 900}>$1</strong>"
							);
							let address = option.address?.replace(
								regX,
								"<strong style={font-weight: 900}>$1</strong>"
							);
							return (
								<>
									{parse(name || "")}{" "}
									<small>{parse(address || "")}</small>
								</>
							);
						}
					}
					return (
						<>
							{option.name ? (
								<>
									<b>{option.name}</b>{" "}
								</>
							) : (
								<>{option.label}{" "}</>
							)}
							<small>{option.address}</small>
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
