import React, { useCallback, useEffect, useState } from 'react';
import ReactSelect, { components } from "react-select";
import { when } from '../core';
import { useBuilderContext, useOptions, withLabel } from '../core/hooks';
import { getDeepData, isArray, isObject, merge, removeTagsFromString, valueExists, wpFetch } from '../core/utils';
import { decodeEntities } from '@wordpress/html-entities';
import Tippy from '@tippyjs/react'; // Install with `npm install @tippyjs/react`
import 'tippy.js/dist/tippy.css'; // Tippy.js styles
import { addQueryArgs } from '@wordpress/url';

// Custom Option Component with Tooltip
const CustomOption = (props) => {
    const {
        data,
        innerRef,
        innerProps,
        isFocused,
        isSelected,
        selectProps, // Contains classNamePrefix
    } = props;

    // Construct class names using classNamePrefix
    const prefix = selectProps.classNamePrefix || 'react-select';
    const optionClassName = `${prefix}__option`;
    const focusedClassName = isFocused ? `${optionClassName}--is-focused` : '';
    const selectedClassName = isSelected ? `${optionClassName}--is-selected` : '';

    return (
        <div
            ref={innerRef}
            {...innerProps}
            className={`${optionClassName} ${focusedClassName} ${selectedClassName} custom-option`}
            style={{
                padding: '10px',
                backgroundColor: isFocused ? '#f0f0f0' : 'white',
                cursor: 'pointer',
            }}
        >
            <span>{data.label}</span>
            {data.tooltip && (
                <Tippy content={data.tooltip}>
                    <span className="tooltip-icon" style={{ marginLeft: '10px' }}>
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
							d="M6.33203 10.332H7.66536V6.33203H6.33203V10.332ZM6.9987 4.9987C7.18759 4.9987 7.34592 4.93481 7.4737 4.80703C7.60148 4.67925 7.66536 4.52092 7.66536 4.33203C7.66536 4.14314 7.60148 3.98481 7.4737 3.85703C7.34592 3.72925 7.18759 3.66536 6.9987 3.66536C6.80981 3.66536 6.65148 3.72925 6.5237 3.85703C6.39592 3.98481 6.33203 4.14314 6.33203 4.33203C6.33203 4.52092 6.39592 4.67925 6.5237 4.80703C6.65148 4.93481 6.80981 4.9987 6.9987 4.9987ZM6.9987 13.6654C6.07648 13.6654 5.20981 13.4904 4.3987 13.1404C3.58759 12.7904 2.88203 12.3154 2.28203 11.7154C1.68203 11.1154 1.20703 10.4098 0.857031 9.5987C0.507031 8.78759 0.332031 7.92092 0.332031 6.9987C0.332031 6.07648 0.507031 5.20981 0.857031 4.3987C1.20703 3.58759 1.68203 2.88203 2.28203 2.28203C2.88203 1.68203 3.58759 1.20703 4.3987 0.857031C5.20981 0.507031 6.07648 0.332031 6.9987 0.332031C7.92092 0.332031 8.78759 0.507031 9.5987 0.857031C10.4098 1.20703 11.1154 1.68203 11.7154 2.28203C12.3154 2.88203 12.7904 3.58759 13.1404 4.3987C13.4904 5.20981 13.6654 6.07648 13.6654 6.9987C13.6654 7.92092 13.4904 8.78759 13.1404 9.5987C12.7904 10.4098 12.3154 11.1154 11.7154 11.7154C11.1154 12.3154 10.4098 12.7904 9.5987 13.1404C8.78759 13.4904 7.92092 13.6654 6.9987 13.6654ZM6.9987 12.332C8.48759 12.332 9.7487 11.8154 10.782 10.782C11.8154 9.7487 12.332 8.48759 12.332 6.9987C12.332 5.50981 11.8154 4.2487 10.782 3.21536C9.7487 2.18203 8.48759 1.66536 6.9987 1.66536C5.50981 1.66536 4.2487 2.18203 3.21536 3.21536C2.18203 4.2487 1.66536 5.50981 1.66536 6.9987C1.66536 8.48759 2.18203 9.7487 3.21536 10.782C4.2487 11.8154 5.50981 12.332 6.9987 12.332Z"
							fill="#667085"
							/>
						</svg>
                    </span>
                </Tippy>
            )}
        </div>
    );
};





const Select = (props) => {
    const builderContext = useBuilderContext();
    let { id, name, multiple, placeholder, search = false, onChange, parentIndex } = props;
    const { options, selectedOption, setOptions, setData } = useOptions(props, 'options');
    const [sOption, setSOption] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAjaxComplete, setIsAjaxComplete] = useState(false);

    const handleMenuOpen = () => {
        // AJAX
        if (props.ajax && (!props.ajax.rules || when(props.ajax.rules, builderContext.values))) {
            setIsLoading(true);
            let data = {};
            Object.keys(props?.ajax.data).map(singleData => {
                if (props?.ajax.data[singleData].indexOf('@') > -1) {
                    let eligibleKey  = props?.ajax.data[singleData].substr(1);
					eligibleKey 	 = eligibleKey.includes('.') ? eligibleKey.split('.') : eligibleKey;
					if( Array.isArray(eligibleKey) ) {
						let repeaterDatas = builderContext.values[eligibleKey[0]];
						repeaterDatas?.map((value) => {
							data[singleData] = value[eligibleKey[1]]?.join(',');
							if( value[eligibleKey[1]]?.length == 0 ) {
								delete data[singleData];
							}
						});
					} else {
                    	data[singleData] = builderContext.values?.[eligibleKey];
					}
                } else {
                    data[singleData] = props?.ajax.data[singleData];
                }
            });
            if (!isAjaxComplete) {
				let payload = {
                    path: props?.ajax.api,
                    data: data,
					method: "POST"
                };
				if( props?.ajax?.method == 'GET' ) {
					payload.method = 'GET';
					delete payload.data;
					payload.path = addQueryArgs( payload.path, data );
				}

                return wpFetch(payload).then((response) => {
					let options = [];
					if( Object.keys(props?.ajax?.response_mapper)?.length >  0 ) {
						response?.map((doc) => {
							let keyLabel = props?.ajax?.response_mapper?.label?.includes('.') ? props?.ajax?.response_mapper?.label?.split('.') : props?.ajax?.response_mapper?.label;
							let keyValue = props?.ajax?.response_mapper?.value?.includes('.') ? props?.ajax?.response_mapper?.value?.split('.') : props?.ajax?.response_mapper?.value;

							let option  = {};

							if( Array.isArray( keyLabel ) ) {
								let lastKeyLabel = keyLabel[keyLabel?.length - 1];
								option['label'] = decodeEntities( removeTagsFromString( getDeepData(doc, lastKeyLabel) ));
							} else{
								option['label'] =  decodeEntities( removeTagsFromString( doc[keyLabel] ) );
							}

							if( Array.isArray( keyValue ) ) {
								let lastKeyValue = keyValue[keyValue?.length - 1];
								option['value'] = getDeepData(doc, lastKeyValue);
							} else {
								option['value'] = doc[keyValue];
							}

							options.push(option);
						});
					}
                    setIsLoading(false);
                    const arrayMerge = merge(props.options, (options?.length > 0 ? options : response), 'value');
                    builderContext.setFormField([...parentIndex, 'options'], arrayMerge);
                    setData({
                        options: arrayMerge,
                        parentIndex: [...parentIndex, 'options']
                    });
                    return response;
                });
            }
        }
    };

    const handleOptionChange = useCallback((option) => {
        setSOption(option);
        if (!isArray(option)) {
            onChange({
                target: {
                    type: 'select',
                    name,
                    value: option?.value,
                    options,
                    multiple,
                },
            });
        } else {
            onChange({
                target: {
                    type: 'select',
                    name,
                    value: option?.map(item => item.value),
                    options,
                    multiple,
                },
            });
        }
    }, [name, options, onChange, multiple]);

    useEffect(() => {
        handleMenuOpen();
    }, []);

    // Conditional components prop
    const selectComponents = props.options_tooltip
        ? { Option: CustomOption }
        : undefined;

    return (
        <div className="wprf-select-wrapper">
            <ReactSelect
                isDisabled={props?.disable}
                className="wprf-select"
                classNamePrefix="wprf-select"
                isSearchable={search ?? false}
                id={id}
                name={name}
                menuIsOpen={props.menuIsOpen}
                isMulti={multiple ?? false}
                placeholder={placeholder}
                isLoading={isLoading}
                options={options}
                value={selectedOption}
                onMenuOpen={handleMenuOpen}
                components={selectComponents} // Conditional rendering of tooltip-enabled options
                onChange={handleOptionChange}
            />
        </div>
    );
};

export default withLabel(Select);
