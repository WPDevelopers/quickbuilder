import React, { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames';

import { useBuilderContext, withLabel } from '../core/hooks';
import { executeChange, isArray, sortingFields } from '../core/utils';
import { GenericField } from '.';
import { __ } from '@wordpress/i18n';


const Group = (props) => {
    const { name: fieldName, fields, ...rest } = props;

    if (!fields || !isArray(fields) || fields.length === 0) {
        throw new Error(__('You should give a #fields arguments to a group field.', 'notificationx'))
    }

    const builderContext = useBuilderContext();
    const handleChange = useCallback((event) => {
        if (event.persist) {
            event.persist();
        }
        const { field, val: value } = executeChange(event);
        builderContext.setFieldValue([fieldName, field], value);
    }, [props.value])

    const newFields = sortingFields(fields);

    useEffect(() => {
        builderContext.setFormField([...props.parentIndex, 'fields'], newFields)
    }, [])


    const allFields = newFields.map((item, index) => {
        let parentIndex = [...props.parentIndex, 'fields', index]
        return <GenericField
            {...rest}
            key={item.name}
            index={props.index}
            onChange={handleChange}
            {...item}
            parenttype='group'
            parent={fieldName}
            parentIndex={parentIndex}
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

export default withLabel(Group)