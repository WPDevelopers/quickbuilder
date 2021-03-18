import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useBuilderContext } from '../core/hooks';

import BuilderField from '../core/BuilderField'
import { RepeaterField } from './helpers';
import { isEqual } from 'lodash';


const Repeater = (props) => {
    const builderContext = useBuilderContext();

    const localMemoizedValue = useMemo(() => {
        let localS = builderContext.values?.[props.name];
        if (localS && props.meta.default) {
            localS = [...props.meta.default, ...localS];
        }
        return localS;
    }, [])

    const [localFields, setLocalFields] = useState([{}]);
    const [localValue, setLocalValue] = useState(localMemoizedValue || {});

    const handleChange = useCallback((value, index) => {
        setLocalValue(prevLocalValue => ({ ...prevLocalValue, [index]: value }));
    }, [])

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
                            key={index}
                            name={`${props.name}`}
                            index={index}
                            handleChange={handleChange}
                            fields={props.fields}
                        />
                    })
                }

            </div>
        </div>
    )
}

export default Repeater;