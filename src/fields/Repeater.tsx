import React, { useCallback, useMemo, useEffect, useState } from 'react'
import { useBuilderContext } from '../core/hooks';
import { RepeaterField } from './helpers';
import { executeChange } from '../core/utils';
import { ReactSortable } from "react-sortablejs";
import { v4 } from "uuid";


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
            let indexedCopy = lValue?.[index] || {};
            if(indexedCopy?.title){
                indexedCopy = {...indexedCopy, title: (indexedCopy.title + ' - Copy')}
            }
            if(indexedCopy?.post_title){
                indexedCopy = {...indexedCopy, post_title: (indexedCopy.post_title + ' - Copy')}
            }
            if(indexedCopy?.username){
                indexedCopy = {...indexedCopy, username: (indexedCopy.username + ' - Copy')}
            }
            if(indexedCopy?.plugin_theme_name){
                indexedCopy = {...indexedCopy, plugin_theme_name: (indexedCopy.plugin_theme_name + ' - Copy')}
            }
            indexedCopy = {...indexedCopy, index: v4(), isCollapsed: false};
            builderContext.setFieldValue([fieldName, localMemoizedValue.length], indexedCopy);
        }
    }, [localMemoizedValue])

    useEffect(() => {
        if (localMemoizedValue == undefined || localMemoizedValue == '') {
            setLocalMemoizedValue([{index: v4()}]);
        }
        else{
            setLocalMemoizedValue((items) => items.map((item) => {
                return {...item, index: v4()};
            }))
        }
    }, [])

    return (
        <div className="wprf-repeater-control">
            {
            localMemoizedValue && localMemoizedValue?.length > 0 &&
            <ReactSortable className="wprf-repeater-content" list={localMemoizedValue} setList={handleSort} handle={'.wprf-repeater-field-title'} filter={'.wprf-repeater-field-controls'} forceFallback={true}>
                {
                    localMemoizedValue.map((value, index) => {
                        return <RepeaterField
                            isCollapsed={value?.isCollapsed}
                            key={value?.index || index}
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
            }
            <div className="wprf-repeater-label">
                <button className="wprf-repeater-button"
                    onClick={() => builderContext.setFieldValue(fieldName, [...localMemoizedValue, {index: v4()}])}>
                    {button?.label}
                </button>
            </div>
        </div>
    )
}

export default Repeater;