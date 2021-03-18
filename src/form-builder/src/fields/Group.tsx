import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useBuilderContext } from '../core/hooks';
import { isEqual } from 'lodash';
import { executeChange, isArray, sortingFields } from '../core/utils';

import BuilderField from '../core/BuilderField';

const Group = (props) => {
    const { name: fieldName, fields } = props.field;

    if (!fields || !isArray(fields) || fields.length === 0) {
        throw new Error('You should give a #fields arguments to a group field.')
    }


    const builderContext = useBuilderContext();

    const localMemoizedState = useMemo(() => {
        let localS = builderContext.values?.[fieldName];
        if (localS && props.meta.default) {
            localS = { ...props.meta.default, ...localS };
        }
        return localS;
    }, [])

    const [localState, setLocalState] = useState((props?.handleChange ? {} : (localMemoizedState || props.meta.default)) || {});

    const handleChange = useCallback((event) => {
        if (event.persist) {
            event.persist();
        }
        const { field, val: value } = executeChange(event);
        setLocalState((prevState) => ({ ...prevState, [field]: value }));
    }, [])

    useEffect(() => {
        if (!isEqual(localState, builderContext.values[fieldName]) && !props?.handleChange) {
            builderContext.setFieldValue(fieldName, localState);
        }

        if (props?.handleChange) {
            let newLocal = builderContext.values[fieldName]?.[props.index] ? { ...builderContext.values[fieldName][props.index], ...localState } : localState;
            props.handleChange(newLocal);
        }
    }, [localState])

    const newFields = sortingFields(fields);
    const allFields = newFields.map((item, index) => {
        return <BuilderField key={item.name} index={props.index} onChange={handleChange} field={{ ...item }} meta={props.meta} helpers={props.helpers} />;
    });

    return (
        <div className="wprf-group-control">
            {props.label}
            {allFields}
        </div>
    )
}

export default Group