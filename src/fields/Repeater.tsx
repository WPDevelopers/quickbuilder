import React, { useCallback, useMemo, useEffect, useState } from 'react'
import { useBuilderContext } from '../core/hooks';
import { RepeaterField } from './helpers';
import { executeChange } from '../core/utils';
import { ReactSortable } from "react-sortablejs";


const Repeater = (props) => {
    const { name: fieldName, value: fieldValue, button, fields } = props;
    const builderContext = useBuilderContext();
    const [localMemoizedValue, setLocalMemoizedValue] = useState(builderContext.values?.[fieldName])

    // const localMemoizedValue = useMemo(() => {
    //     let localS = builderContext.values?.[fieldName];
    //     return localS;
    // }, [builderContext.values?.[fieldName], refresh])

    useEffect(() => {
        if (builderContext.values?.[fieldName] != undefined) {
            setLocalMemoizedValue(builderContext.values?.[fieldName]);
        }
    }, [builderContext.values?.[fieldName]])


    const handleSort = (value) => {
        builderContext.setFieldValue(fieldName, value);
    }

    const handleChange = (event, index) => {
        if (event.persist) {
            event.persist();
        }
        const { field, val: value } = executeChange(event);
        builderContext.setFieldValue([fieldName, index, field], value);
    }

    const handleRemove = useCallback((index) => {
        let lValue = [...localMemoizedValue];
        lValue.splice(index, 1)
        builderContext.setFieldValue(fieldName, lValue);
    }, [localMemoizedValue])

    const handleClone = useCallback((index) => {
        let lValue = [...localMemoizedValue];
        if (lValue.length > 0) {
            const indexedCopy = lValue?.[index] || {};
            builderContext.setFieldValue([fieldName, localMemoizedValue.length], indexedCopy);
        }
    }, [localMemoizedValue])

    useEffect(() => {
        if (localMemoizedValue == undefined) {
            setLocalMemoizedValue([{}]);
        }
    }, [])

    return (
        <div className="wprf-repeater-control">
            <ReactSortable className="wprf-repeater-content" list={localMemoizedValue || [{}]} setList={handleSort}>
                {
                    localMemoizedValue && localMemoizedValue?.length > 0 && localMemoizedValue.map((value, index) => {
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
            </ReactSortable>
            <div className="wprf-repeater-label">
                <button className="wprf-repeater-button"
                    onClick={() => builderContext.setFieldValue(fieldName, [...localMemoizedValue, {}])}>
                    {button?.label}
                </button>
            </div>
        </div>
    )
}

export default Repeater;