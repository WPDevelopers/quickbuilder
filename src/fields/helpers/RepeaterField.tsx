import React, { useState } from 'react'
import { Icon } from '@wordpress/components';
import { GenericField } from '../index';
import { useInstanceId } from "@wordpress/compose";
import { useBuilderContext } from '../../core/hooks';

const RepeaterField = (props) => {
    const builderContext = useBuilderContext();
    const { fields, onChange, index, parent } = props;
    const [isCollapse, setIsCollapse] = useState(props.isOpen);
    const instanceId = useInstanceId(RepeaterField);
    // onClick={() => setIsCollapse(!isCollapse)}
    const values = builderContext.values?.[parent]?.[index];
    const title = values?.title || values?.post_title || values?.username || values?.plugin_theme_name;
    const _title = title ? ('(' + (title.length < 20 ? title : title.substr(0, 30) + "...") + ')') : '';
    return (
        <div className="wprf-repeater-field">
            <div className="wprf-repeater-field-title" onClick={() => setIsCollapse(!isCollapse)} >
                <h4><Icon icon="sort" />{'\u00A0'}{'\u00A0'}#ID: {props.index} {_title}</h4>
                <div className="wprf-repeater-field-controls">
                    <Icon onClick={() => props.clone(props.index)} icon="admin-page" />
                    <Icon onClick={() => props.remove(props.index)} icon="trash" />
                </div>
            </div>
            { isCollapse &&
                <div className="wprf-repeater-inner-field">
                    {fields.map((field, fieldIndex) => {
                        return <GenericField
                            key={`field-${index}-${fieldIndex}`}
                            {...field}
                            id={`field-${instanceId}-${index}-${fieldIndex}`}
                            index={index}
                            parenttype='repeater'
                            parent={parent}
                            onChange={(event) => onChange(event, index)}
                        />
                    })}
                </div>
            }
        </div>
    )
}

export default RepeaterField;
