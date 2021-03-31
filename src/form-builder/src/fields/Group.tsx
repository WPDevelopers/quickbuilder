import React, { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames';

import { useBuilderContext } from '../core/hooks';
import { isEqual } from 'lodash';
import { executeChange, isArray, sortingFields } from '../core/utils';
import { GenericField } from './Field';


const Group = (props) => {
    const { name: fieldName, fields, value } = props;

    if (!fields || !isArray(fields) || fields.length === 0) {
        throw new Error('You should give a #fields arguments to a group field.')
    }


    const builderContext = useBuilderContext();

    const localMemoizedState = useMemo(() => {
        let localS = builderContext.values?.[fieldName];
        // if (localS && props.meta.default) {
        //     localS = { ...props.meta.default, ...localS };
        // }
        return localS;
    }, [value])

    const [localState, setLocalState] = useState(localMemoizedState);

    const handleChange = useCallback((event) => {
        if (event.persist) {
            event.persist();
        }
        const { field, val: value } = executeChange(event);
        setLocalState((prevState) => ({ ...prevState, [field]: value }));
    }, [props.value])

    useEffect(() => {
        builderContext.handleChange({
            target: {
                type: 'group',
                name: fieldName,
                value: localState
            },
        });
        // if (!isEqual(localState, builderContext.values[fieldName]) && !props?.handleChange) {
        //     builderContext.handleChange(fieldName, localState);
        // }

        // if (props?.handleChange) {
        //     let newLocal = builderContext.values[fieldName]?.[props.index] ? { ...builderContext.values[fieldName][props.index], ...localState } : localState;
        //     props.handleChange(newLocal);
        // }
    }, [localState])

    const newFields = sortingFields(fields);
    const allFields = newFields.map((item, index) => {
        return <GenericField
            key={item.name}
            index={props.index}
            onChange={handleChange}
            {...item}
            parenttype='group'
            parent={fieldName}
        />;
    });

    const innerClasses = classNames('wprf-group-control-inner', {
        'wprf-display-inline': props?.display === 'inline'
    });

    return (
        <div className="wprf-group-control">
            <div className={innerClasses}>
                {allFields}
            </div>
        </div>
    )
}

export default Group