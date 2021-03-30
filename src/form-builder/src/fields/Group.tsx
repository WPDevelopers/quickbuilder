import React, { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames';

import { useBuilderContext } from '../core/hooks';
import { isEqual } from 'lodash';
import { executeChange, isArray, sortingFields } from '../core/utils';
import { GenericField } from './Field';


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
    }, [builderContext.values?.[fieldName]])

    const [localState, setLocalState] = useState((props?.handleChange ? localMemoizedState : (localMemoizedState || props.meta.default)) || {});

    const handleChange = useCallback((event) => {
        if (event.persist) {
            event.persist();
        }
        const { field, val: value } = executeChange(event);
        setLocalState((prevState) => ({ ...prevState, [field]: value }));
    }, [])

    const handleChangeForSelect = useCallback((event) => {
        setLocalState((prevState) => ({ ...prevState, [event.field]: event.value }));
    }, [props.meta.value, props.meta.default])

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
        let meta = { ...props.meta, ...builderContext.getFieldMeta(item.name, { field: item }), value: localState[item.name] };

        return <GenericField
            key={item.name}
            index={props.index}
            handleChange={item.type != 'select' ? handleChange : handleChangeForSelect}
            field={{ ...item }}
            meta={meta}
            helpers={props.helpers}
        />;
    });

    const innerClasses = classNames('wprf-group-control-inner', {
        'wprf-display-inline': props.field.display === 'inline'
    });

    return (
        <div className="wprf-group-control">
            { props.field.label && <h4>{props.field.label}</h4>}
            <div className={innerClasses}>
                {allFields}
            </div>
        </div>
    )
}

export default Group