import React, { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames';

import { BuilderConsumer, useBuilderContext, withLabel } from '../core/hooks';
import { executeChange, isArray, isEmptyObj, sortingFields } from '../core/utils';
import { GenericField } from '.';


const Group = (props) => {
    const { name: fieldName, fields } = props;

    if (!fields || !isArray(fields) || fields.length === 0) {
        throw new Error('You should give a #fields arguments to a group field.')
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

export default withLabel(Group)