import React, { useState, useEffect, useMemo } from "react";
import {
	isArray,
	apiFetch,
	processAjaxData,
	eligibleOption,
	isEmptyObj,
} from "../core/functions";

import { dispatch } from "@wordpress/data";
import intersect from "intersect";

const withFields = (WrappedComponent) => {
	const WithFields = (props) => {
		const { options, onChange, value, onReset, ajax } = props;
		const [fields, setFields] = useState(options);
		const [isMenuOpen, setMenuOpen] = useState(false);
		const [option, setOption] = useState(null);
		const [isAjaxOptionLoaded, setAjaxOptionLoaded] = useState(false);

		useEffect(() => {
			setFields(options);
		}, [options]);

		useEffect(() => {
			if (
				ajax &&
				ajax?.on === "click" &&
				isMenuOpen &&
				!isAjaxOptionLoaded &&
				ajax?.api
			) {
				apiFetch({
					path: ajax.api,
					data: processAjaxData(ajax.data),
				})
					.then((response) => {
						if (isArray(response)) {
							setTimeout(() => {
								setAjaxOptionLoaded(true);
								setFields((oldFields) => [
									...oldFields,
									...response,
								]);
							}, 1000);
						}
					})
					.catch((err) => {
						setAjaxOptionLoaded(false);
					});
			}
		}, [isMenuOpen]);

		useEffect(() => {
			if (value) {
				let newOption = eligibleOption(options, value, props?.multiple);
				if (newOption != false) {
					setOption(newOption);
				}
			}
		}, []);

		useEffect(() => {
			if (isArray(value)) {
				let nValue = intersect(
					fields.map((item) => item.value),
					value
				);
				if (nValue.length !== value.length) {
					let newOption = eligibleOption(
						fields,
						nValue,
						props?.multiple
					);
					setOption(newOption);
				}
			} else {
				let newOption = eligibleOption(fields, value, false);
				if (isEmptyObj(newOption)) {
					onReset(props.name);
				} else {
					setOption(newOption);
				}
			}
		}, [fields]);

		useEffect(() => {
			if (option !== null) {
				if (!props?.multiple) {
					setOption(option);
					onChange(option.value);
				} else {
					if (isArray(option)) {
						let selectedOptions = option.map((opt) => opt.value);
						onChange(selectedOptions);
					}
				}
			} else {
				onChange([]);
			}
		}, [option]);

		return (
			<WrappedComponent
				{...props}
				options={fields}
				option={option}
				menuOpen={(res) => setMenuOpen(res)}
				setOption={(res) => setOption(res)}
			/>
		);
	};
	return WithFields;
};

export default withFields;
