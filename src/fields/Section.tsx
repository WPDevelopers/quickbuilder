import React, { useEffect, useState } from 'react'
import { Field } from '../fields';
import { sortingFields } from '../core/utils';
import { useBuilderContext } from '../core/hooks';
import classNames from 'classnames';
import { Icon, chevronDown, chevronUp } from '@wordpress/icons';

const Section = (props) => {
    const builderContext = useBuilderContext();
    const [isCollapse, setCollapse] = useState(props.collapsed ?? false);
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const newFields = sortingFields(props.fields);
        /**
         * FIXME: the line below the doc:
         * Commented for Issue#11, Cycle 7
         * Uncommented for Issue #38, Cycle 7
         */
        builderContext.setFormField([...props.parentIndex, 'fields'], newFields);
        // builderContext.setFormField([...props.parentIndex, 'sorted'], true);
        let allFields = newFields.map((item, index) => {
            let parentIndex = [...props.parentIndex, 'fields', index];
            return <Field key={item.name} {...item} parentIndex={parentIndex} />;
        });
        setFields(allFields);
    }, [])

    const componentClasses = classNames('wprf-control-section', props?.classes, props?.name, {
        'wprf-section-collapsed': props?.collapsible && isCollapse,
    })

    return (
        <div
            id={props?.name}
            className={componentClasses}>
            {props.placeholder &&
                <div className="wprf-section-title">
                    <h4>{props.placeholder}</h4>
                    {props.collapsible && (
                        <button onClick={() => setCollapse(!isCollapse)}>
                            <Icon icon={isCollapse ? chevronDown : chevronUp} />
                        </button>
                    )}
                </div>
            }
            <div className="wprf-section-fields">{fields}</div>
        </div>
    )
}

export default React.memo(Section);
