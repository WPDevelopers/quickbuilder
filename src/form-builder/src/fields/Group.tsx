import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useBuilderContext } from '../core/hooks';
import { isEqual } from 'lodash';
import { executeChange, isArray, sortingFields } from '../core/utils';

import BuilderField from '../core/BuilderField';

const Group = (props) => {
    if (!props.fields || !isArray(props.fields) || props.fields.length === 0) {
        throw new Error('You should give a #fields arguments to a group field.')
    }

    const builderContext = useBuilderContext();

    const localMemoizedState = useMemo(() => {
        let localS = builderContext.values?.[props.name];
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
        if (!isEqual(localState, builderContext.values[props.name]) && !props?.handleChange) {
            builderContext.setFieldValue(props.name, localState);
        }

        if (props?.handleChange) {
            props.handleChange(localState);
        }
    }, [localState])

    const newFields = sortingFields(props.fields);
    const allFields = newFields.map((item, index) => {
        return <BuilderField key={item.name} index={props.index} {...item} meta={props.meta} onChange={handleChange} />;
    });

    return (
        <div className="wprf-group-control">
            <br />
            {props.label}
            <br />
            {allFields}
        </div>
    )
}

export default Group