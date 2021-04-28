import React, { useEffect, useState } from 'react'
import ReactSelect from "react-select";
import { isArray, isObject } from '../core/utils';
import { withLabel, useOptions, useBuilderContext } from '../core/hooks';
import { wpFetch } from '../core/functions';
import { when } from '../core';

const Select = (props) => {
    const builderContext = useBuilderContext();
    let { id, name, multiple, placeholder, search = false, onChange, parentIndex } = props;
    const { options, selectedOption, setOptions, setData } = useOptions(props, 'options');
    const [sOption, setSOption] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [isAjaxComplete, setIsAjaxComplete] = useState(false)

    const handleMenuOpen = () => {
        // AJAX
        if (props?.ajax && when(props?.ajax?.rules, builderContext.values)) {
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
                wpFetch({
                    path: props?.ajax.api,
                    data: data
                }).then((response: any) => {
                    setIsLoading(false);
                    builderContext.setFormField([...parentIndex, 'options'], [...props.options, ...response])
                    setData({
                        options: [...props.options, ...response],
                        parentIndex: [...parentIndex, 'options']
                    });
                    // setIsAjaxComplete(true);
                })
            }
        }
    }
    const handleMenuClose = () => {
        console.log('menuClose', options);
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

    return (
        <div className="wprf-select-wrapper">
            <ReactSelect
                isDisabled={props?.disable}
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
                onChange={(option) => setSOption(option)} // option or options
            />
        </div>
    )
}

export default withLabel(Select);