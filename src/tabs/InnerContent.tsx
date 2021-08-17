import React, { useEffect, useState } from 'react'
import { isArray, sortingFields } from '../core/utils';
import { Field, GenericField } from '../fields';

const InnerContent = ({ fields, parentIndex, context }) => {
    const [_fields, setFields] = useState([])
    const [fieldViews, setFieldViews] = useState([])
    // Fields Sorting
    useEffect(() => {
        const newFields = sortingFields(fields);
        context.setFormField([parentIndex, 'fields'], newFields);
        setFields(newFields);
    }, [])

    useEffect(() => {
        if (isArray(_fields) && _fields.length > 0) {
            const allFields = _fields.map((item, index) => {
                let pIndex = [parentIndex, 'fields', index];
                if (item.type === 'section') {
                    return <GenericField key={`input-${item.name}-${index}`} {...item} parentIndex={pIndex} />;
                } else {
                    return <Field key={`input-${item.name}-${index}`} {...item} parentIndex={pIndex} />;
                }
            });
            setFieldViews(allFields);
        }
    }, [_fields])


    return <>{fieldViews}</>;
};

export default InnerContent;