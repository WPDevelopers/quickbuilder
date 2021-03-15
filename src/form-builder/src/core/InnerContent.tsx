import React from 'react'
import { objectWithoutPropertiesLoose, sortingFields } from './utils';
import BuilderField from './BuilderField';

const InnerContent = ({ fields }) => {
    // Fields Sorting
    const newFields = sortingFields(fields);
    const allFields = newFields.map((item) => {
        return <BuilderField key={item.name} {...item} />;
    });
    return <>{allFields}</>;
};

export default InnerContent;