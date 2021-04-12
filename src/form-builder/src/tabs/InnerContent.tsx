import React from 'react'
import { sortingFields } from '../core/utils';
import { Field, GenericField } from '../fields';

const InnerContent = ({ fields, parentIndex }) => {
    // Fields Sorting
    const newFields = sortingFields(fields);

    const allFields = newFields.map((item, index) => {
        //TODO: visibility needs to be done here somehow.
        let pIndex = [parentIndex, 'fields', index]
        if (item.type === 'section') {
            return <GenericField key={`input-${item.name}-${index}`} {...item} parentIndex={pIndex} />;
        } else {
            return <Field key={`input-${item.name}-${index}`} {...item} parentIndex={pIndex} />;
        }
    });
    return <>{allFields}</>;
};

export default InnerContent;