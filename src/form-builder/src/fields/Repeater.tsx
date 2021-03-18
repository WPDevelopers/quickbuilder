import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useBuilderContext } from '../core/hooks';
import { RepeaterField } from './helpers';
import { isEmptyObj } from '../core/utils';

import { useInstanceId } from "@wordpress/compose";


const Repeater = (props) => {
    const builderContext = useBuilderContext();
    const instanceId = useInstanceId(Repeater);

    const localMemoizedValue = useMemo(() => {
        let localS = builderContext.values?.[props.name];
        if (localS && props.meta.default) {
            localS = [...props.meta.default, ...localS];
        }
        return localS;
    }, [builderContext.values?.[props.name]])

    // useEffect(() => {
    //     console.log("localMemoizedValue", localMemoizedValue, builderContext.values?.[props.name])
    // }, [])

    const [localFields, setLocalFields] = useState([{}]);
    const [localValue, setLocalValue] = useState(localMemoizedValue);

    const handleChange = useCallback((value, index) => {
        if (!isEmptyObj(value)) {
            setLocalValue(prevLocalValue => ({ ...prevLocalValue, [index]: value }));
            // setLocalValue(prevLocalValue => ([...prevLocalValue, value]));
        }
    }, [])

    const handleRemove = useCallback((index) => {
        console.log("index", index)

        let newValue = { ...localValue };
        delete newValue[index];

        props.helpers.setValue(props.name, newValue);

        let newFields = [...localFields];
        newFields.splice(index, 1)
        setLocalFields(newFields);

    }, [localFields, localValue])

    const handleClone = useCallback((index) => {
        const indexedCopy = localValue?.[index] || {};
        setLocalFields(prevLocalState => ([...prevLocalState, indexedCopy]));
        handleChange(indexedCopy, ++index);
    }, [localValue, localFields])

    useEffect(() => {
        props.helpers.setValue(props.name, localValue);
    }, [localValue])

    return (
        <div className="wprf-repeater-control">
            <div className="wprf-repeater-label">
                <h4>{props.label}</h4>
                <button className="wprf-repeater-button" onClick={() => setLocalFields(prevLocalState => ([...prevLocalState, {}]))}>
                    {props.button.label}
                </button>
            </div>
            <div className="wprf-repeater-content">
                {
                    localFields.map((field, index) => {
                        return <RepeaterField
                            remove={handleRemove}
                            clone={handleClone}
                            isOpen={true}
                            key={index}
                            name={`${props.name}`}
                            index={index}
                            handleChange={handleChange}
                            fields={props.fields}
                            parentProps={props}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Repeater;