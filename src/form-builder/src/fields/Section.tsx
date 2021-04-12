import React, { useEffect, useState } from 'react'
import { Field } from '../fields';
import { sortingFields } from '../core/utils';
import { useBuilderContext } from '../core/hooks';

const Section = (props) => {
    const builderContext = useBuilderContext();
    const [isCollapse, setCollapse] = useState(props.collapsed ?? false);
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const newFields = sortingFields(props.fields);
        builderContext.setFormField([...props.parentIndex, 'fields'], newFields);
        // builderContext.setFormField([...props.parentIndex, 'sorted'], true);
        let allFields = newFields.map((item, index) => {
            let parentIndex = [...props.parentIndex, 'fields', index];
            return <Field key={item.name} {...item} parentIndex={parentIndex} />;
        });
        setFields(allFields);
    }, [])

    return (
        <div
            className={`wprf-control-section ${props.collapsible ? (isCollapse ? "wprf-section-collapsed" : "") : ""}`}
        >
            { props.placeholder &&
                <div className="wprf-section-title">
                    <h4>{props.placeholder}</h4>
                    {props.collapsible && (
                        <button onClick={() => setCollapse(!isCollapse)}>
                            {/* <Icon
                            icon={`arrow-${isCollapse ? "down" : "up"}-alt2`}
                        /> */}
                        Icon
                        </button>
                    )}
                </div>
            }
            <div className="wprf-section-fields">{fields}</div>
        </div>
    )
}

export default React.memo(Section);