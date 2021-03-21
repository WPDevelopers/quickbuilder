import React, { useEffect, useState } from 'react'
import { Label } from '../core/components';
import ReactSelect from "react-select";
import useOptions from '../core/hooks/useOptions';
import { isArray, isObject } from '../core/utils';

const Select = (props: any) => {
    const { meta, helpers, field } = props;
    let { label, id, name, multiple, placeholder, search = false } = field;
    const { options, option, selectedOption } = useOptions(props, 'options');
    const [sOption, setSOption] = useState<any>(null);

    useEffect(() => {
        if (!isArray(sOption) && isObject(sOption)) {
            helpers.setValue(name, sOption.value)
        }
        if (isArray(sOption)) {
            helpers.setValue(name, sOption.map(item => item.value))
        }
    }, [sOption])

    if (placeholder == undefined) {
        placeholder = label;
    }

    return (
        <div className="wprf-select-wrapper">
            <Label htmlFor={id}>{label}</Label>
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