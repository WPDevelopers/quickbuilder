import React, { useCallback, useEffect, useState } from 'react';
import ReactSelect from "react-select";
import { when } from '../core';
import { useBuilderContext, useOptions, withLabel } from '../core/hooks';
import { isArray, isObject, merge, valueExists, wpFetch } from '../core/utils';

const Select = (props) => {
	const builderContext = useBuilderContext();
	let { id, name, multiple, placeholder, search = false, onChange, parentIndex } = props;
	const { options, selectedOption, setOptions, setData } = useOptions(props, 'options');
	const [sOption, setSOption] = useState(null);
	const [isLoading, setIsLoading] = useState(false)
	const [isAjaxComplete, setIsAjaxComplete] = useState(false)

	const handleMenuOpen = () => {
		// AJAX
		if (props.ajax && (!props.ajax.rules || when(props.ajax.rules, builderContext.values))) {
			setIsLoading(true);
			let data = {};
			Object.keys(props?.ajax.data).map(singleData => {
				if (props?.ajax.data[singleData].indexOf('@') > -1) {
					let eligibleKey = props?.ajax.data[singleData].substr(1);
					data[singleData] = builderContext.values?.[eligibleKey]
				} else {
					data[singleData] = props?.ajax.data[singleData]
				}
			})
			if (!isAjaxComplete) {
				return wpFetch({
					path: props?.ajax.api,
					data: data
				}).then((response: any) => {
					setIsLoading(false);
					const arrayMerge = merge(props.options, response, 'value');
					builderContext.setFormField([...parentIndex, 'options'], arrayMerge)
					setData({
						options: arrayMerge,
						parentIndex: [...parentIndex, 'options']
					});
					// setIsAjaxComplete(true);
					return response;
				})
			}
		}
	}
	const handleMenuClose = () => {
		setIsLoading(false);
	}

	useEffect(() => {
		if (!isArray(sOption) && isObject(sOption)) {
			onChange({
				target: {
					type: 'select',
					name,
					value: sOption.value,
					options,
					multiple
				},
			});
		}
		if (isArray(sOption)) {
			onChange({
				target: {
					type: 'select',
					name,
					value: sOption.map(item => item.value),
					options,
					multiple
				},
			});
		}
	}, [sOption])

	useEffect(() => {
		handleMenuOpen();
	}, [])

	useEffect(() => {
		if (props?.menuOpen) {
			handleMenuOpen();
		}
	}, [props?.menuOpen])

	const handleOptionChange = useCallback((option) => {
		if (isArray(option) && props?.filterValue?.length > 0) {
			const origialValues = option;
			let values = origialValues;

			let filterValue = props?.filterValue ?? ['all'];
			if (!isArray(filterValue)) {
				filterValue = [filterValue];
			}

			if (origialValues?.length > 1 && valueExists(origialValues.map(item => item.value), filterValue)) {
				values = origialValues.filter((item) => !filterValue.includes(item?.value));
			}

			option = values;
		}

		setSOption(option);
	}, [name, id, parentIndex]);

	return (
		<div className="wprf-select-wrapper">
			<ReactSelect
				isDisabled={props?.disable}
				className="wprf-select"
				classNamePrefix="wprf-select"
				isSearchable={search ?? false}
				id={id}
				name={name}
				isMulti={multiple ?? false}
				placeholder={placeholder}
				isLoading={isLoading}
				options={options}
				value={selectedOption}
				onMenuOpen={handleMenuOpen}
				onMenuClose={handleMenuClose}
				isOptionDisabled={(option) => option?.disabled}
				onChange={handleOptionChange} // option or options
			/>
		</div>
	)
}

export default withLabel(Select);
