import React, { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames';
import { addFilter } from "@wordpress/hooks";

import { withLabel } from '../core/hooks';
import { executeChange, isArray, sortingFields } from '../core/utils';
import { __ } from '@wordpress/i18n';
import { GenericField } from './Field';
import useBuilderContext from '../core/hooks/useBuilderContext';


const _Group = (props) => {
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
        const _fieldName = [fieldName, field];
        if (props.parent) {
            _fieldName.unshift(props.parent);
        }
        builderContext.setFieldValue(_fieldName, value);
    }, [props.value])

    const newFields = sortingFields(fields);

    useEffect(() => {
        builderContext.setFormField([...props.parentIndex, 'fields'], newFields)
    }, [])


    const allFields = newFields.map((item, index) => {
        let parentIndex = [...props.parentIndex, 'fields', index]
        const parent = [fieldName];
        if (props.parent) {
            parent.unshift(props.parent);
        }
        return <GenericField
            {...rest}
            key={item.name}
            index={props.index}
            onChange={handleChange}
            {...item}
            parenttype='group'
            parent={parent}
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

const Group = withLabel(_Group);
export default Group;

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('group' === type) {
    return <Group {...props} />;
  }
  return field;
});
