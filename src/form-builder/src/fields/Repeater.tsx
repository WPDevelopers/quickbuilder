import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useBuilderContext } from '../core/hooks';
import { RepeaterField } from './helpers';
import { executeChange, isEmptyObj } from '../core/utils';

import { useInstanceId } from "@wordpress/compose";
import { GenericField } from './Field';


const Repeater = (props) => {
    const { name: fieldName, value: fieldValue, button, fields } = props;
    const builderContext = useBuilderContext();
    const instanceId = useInstanceId(Repeater);

    const localMemoizedValue = useMemo(() => {
        let localS = builderContext.values?.[fieldName] || [{}];
        // if (localS && meta.default) {
        //     localS = [...meta.default, ...localS];
        // }
        return localS;
    }, [builderContext.values?.[fieldName]])

    // useEffect(() => {
    //     console.log("localMemoizedValue", localMemoizedValue, builderContext.values?.[props.name])
    // }, [])

    const [localValue, setLocalValue] = useState(localMemoizedValue);

    const handleChange = (event, index) => {
        if (event.persist) {
            event.persist();
        }
        const { field, val: value } = executeChange(event);

        let lValue = [...localValue];
        if (lValue.indexOf(index) !== -1) {
            lValue[index][field] = value;
        } else {
            lValue[index] = { ...lValue[index], [field]: value };
        }
        if (!isEmptyObj(value)) {
            setLocalValue(lValue);
        }
    }

    const handleRemove = useCallback((index) => {
        let lValue = [...localValue];
        lValue.splice(index, 1)
        setLocalValue(lValue);
    }, [localValue])

    const handleClone = useCallback((index) => {
        let lValue = [...localValue];
        if (lValue.length > 0 && lValue.findIndex((arr, idx) => index === idx) > -1) {
            const indexedCopy = lValue?.[index];
            lValue.splice(index + 1, 0, indexedCopy);
            setLocalValue(lValue);
        }
    }, [localValue])

    useEffect(() => {
        builderContext.handleChange({
            target: {
                type: 'repeater',
                name: fieldName,
                value: localValue
            },
        });
    }, [localValue])

    return (
        <div className="wprf-repeater-control">
            <div className="wprf-repeater-label">
                <button className="wprf-repeater-button"
                    onClick={() => setLocalValue(prevLocalValue => ([...prevLocalValue, {}]))}>
                    {button?.label}
                </button>
            </div>
            <div className="wprf-repeater-content">
                {
                    localValue.map((value, index) => {
                        return <RepeaterField
                            isOpen={true}
                            key={index}
                            fields={fields}
                            index={index}
                            parent={fieldName}
                            clone={handleClone}
                            remove={handleRemove}
                            onChange={(event: any) => handleChange(event, index)}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Repeater;