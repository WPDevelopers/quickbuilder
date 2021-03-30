import React from 'react'
import { sortingFields } from '../core/utils';
import { Field } from '../fields';

const InnerContent = ({ fields }) => {
    // Fields Sorting
    const newFields = sortingFields(fields);
    const allFields = newFields.map((item) => {
        return <Field key={item.name} field={item} />;
    });
    return <>{allFields}</>;
};

export default InnerContent;