import React from 'react'
import { sortingFields } from './utils';
import BuilderField from './BuilderField';

const InnerContent = ({ fields }) => {
    // Fields Sorting
    const newFields = sortingFields(fields);

    const allFields = newFields.map((item) => {
        return <BuilderField key={item.name} field={item} />;
    });
    return <>{allFields}</>;
};

export default InnerContent;