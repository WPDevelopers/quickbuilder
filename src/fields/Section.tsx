import React, { useEffect, useState } from 'react'
import { sortingFields } from '../core/utils';
import useBuilderContext from '../core/hooks/useBuilderContext';
import classNames from 'classnames';
import { Icon, chevronDown, chevronUp } from '@wordpress/icons';
import { addFilter } from "@wordpress/hooks";
import Submit from './tabs/Submit';
import Field from './Field';

const _Section = (props) => {
    const builderContext = useBuilderContext();
    const [isCollapse, setCollapse] = useState(props.collapsed ?? false);
    const [fields, setFields] = useState<React.JSX.Element[]>([]);

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
                    {props?.sub_title &&
                        <p dangerouslySetInnerHTML={{ __html: props?.sub_title }}></p>
                    }
                </div>
            }
            <div className="wprf-section-fields">{fields}</div>
            {(props.showSubmit) && <Submit {...builderContext.submit} />}
        </div>
    )
}

const Section = React.memo(_Section);
export default Section;

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('section' === type) {
    return <Section {...props} />;
  }
  return field;
});
