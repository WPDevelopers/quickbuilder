import React, { useCallback, useMemo } from 'react'
import { useBuilderContext } from '../core/hooks';
import { RepeaterField } from './helpers';
import { executeChange } from '../core/utils';


const Repeater = (props) => {
    const { name: fieldName, value: fieldValue, button, fields } = props;
    const builderContext = useBuilderContext();

    const localMemoizedValue = useMemo(() => {
        let localS = builderContext.values?.[fieldName] || [{}];
        return localS;
    }, [builderContext.values?.[fieldName]])

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
            builderContext.setFieldValue([fieldName, index + 1], indexedCopy);
        }
    }, [localMemoizedValue])

    return (
        <div className="wprf-repeater-control">
            <div className="wprf-repeater-label">
                <button className="wprf-repeater-button"
                    onClick={() => builderContext.setFieldValue(fieldName, [...localMemoizedValue, {}])}>
                    {button?.label}
                </button>
            </div>
            <div className="wprf-repeater-content">
                {
                    localMemoizedValue.map((value, index) => {
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