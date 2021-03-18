import React, { useState } from 'react'
import BuilderField from '../core/BuilderField';
import { sortingFields } from '../core/utils';

const Section = (props) => {
    const [isCollapse, setCollapse] = useState(props.collapsed ?? false);
    const newFields = sortingFields(props.field.fields);
    const allFields = newFields.map((item, index) => {
        return <BuilderField key={item.name} field={item} />;
    });

    return (
        <div
            className={`wprf-control-section ${props.collapsible ? (isCollapse ? "wprf-section-collapsed" : "") : ""}`}
        >
            <div className="wprf-section-title">
                <h4>{props.label}</h4>
                {props.collapsible && (
                    <button onClick={() => setCollapse(!isCollapse)}>
                        {/* <Icon
                            icon={`arrow-${isCollapse ? "down" : "up"}-alt2`}
                        /> */}
                        Icon
                    </button>
                )}
            </div>
            <div className="wprf-section-fields">{allFields}</div>
        </div>
    )
}

export default Section;