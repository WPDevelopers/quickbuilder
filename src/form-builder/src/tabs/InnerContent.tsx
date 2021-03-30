import React from 'react'
import { sortingFields } from '../core/utils';
import { Field, GenericField } from '../fields';

const InnerContent = ({ fields }) => {
    // Fields Sorting
    const newFields = sortingFields(fields);
    const allFields = newFields.map((item) => {
        //TODO: visibility needs to be done here somehow.
        if (item.type === 'section') {
            return <GenericField key={item.name} {...item} />;
        } else {
            return <Field key={item.name} {...item} />;
        }
    });
    return <>{allFields}</>;
};

export default InnerContent;