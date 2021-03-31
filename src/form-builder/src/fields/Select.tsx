import React, { useEffect, useState } from 'react'
import { Label } from '../core/components';
import ReactSelect from "react-select";
import useOptions from '../core/hooks/useOptions';
import { isArray, isFunction, isObject } from '../core/utils';

const Select = (props: any) => {
    let { id, name, multiple, placeholder, search = false, onChange, value } = props;
    const { options, selectedOption } = useOptions(props, 'options');
    const [sOption, setSOption] = useState<any>(null);

    // useEffect(() => {
    // onChange({
    //     target: {
    //         type: 'select',
    //         name,
    //         value: value,
    //         options,
    //         multiple
    //     },
    // });
    // }, [])

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
                classNamePrefix="wprf-select"
                isSearchable={search ?? false}
                id={id}
                name={name}
                isMulti={multiple ?? false}
                placeholder={placeholder}
                options={options}
                value={selectedOption}
                // onMenuOpen={() => console.log(true)}
                // onMenuClose={() => console.log(false)}
                onChange={(option) => setSOption(option)} // option or options
            />
        </div>
    )
}

export default Select;