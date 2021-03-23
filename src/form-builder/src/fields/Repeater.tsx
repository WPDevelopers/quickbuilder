import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useBuilderContext } from '../core/hooks';
import { RepeaterField } from './helpers';
import { isEmptyObj } from '../core/utils';

import { useInstanceId } from "@wordpress/compose";


const Repeater = (props) => {
    console.log("re", props);

    const { field, meta, helpers } = props;
    const { name, label, button, fields } = field;
    const builderContext = useBuilderContext();
    const instanceId = useInstanceId(Repeater);

    const localMemoizedValue = useMemo(() => {
        let localS = builderContext.values?.[name];
        if (localS && meta.default) {
            localS = [...meta.default, ...localS];
        }
        return localS;
    }, [builderContext.values?.[name]])

    // useEffect(() => {
    //     console.log("localMemoizedValue", localMemoizedValue, builderContext.values?.[props.name])
    // }, [])

    const [localFields, setLocalFields] = useState([{}]);
    const [localValue, setLocalValue] = useState(localMemoizedValue);

    const handleChange = useCallback((value, index) => {
        if (!isEmptyObj(value)) {
            setLocalValue(prevLocalValue => ({ ...prevLocalValue, [index]: value }));
        }
    }, [])

    const handleRemove = useCallback((index) => {
        let newValue = { ...localValue };
        delete newValue[index];

        helpers.setValue(name, newValue);

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
        helpers.setValue(name, localValue);
    }, [localValue])

    return (
        <div className="wprf-repeater-control">
            <div className="wprf-repeater-label">
                <h4>{label}</h4>
                <button className="wprf-repeater-button"
                    onClick={() => setLocalFields(prevLocalState => ([...prevLocalState, {}]))}>
                    {button?.label}
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
                            name={name}
                            index={index}
                            handleChange={handleChange}
                            fields={fields}
                            parentProps={props}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Repeater;