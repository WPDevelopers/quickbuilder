import React, { useState } from 'react'
import { Icon } from '@wordpress/components';
import { GenericField } from '../index';
import { useInstanceId } from "@wordpress/compose";

const RepeaterField = (props) => {
    const { fields, onChange, index, parent } = props;
    const [isCollapse, setIsCollapse] = useState(props.isOpen);
    const instanceId = useInstanceId(RepeaterField);
    // onClick={() => setIsCollapse(!isCollapse)}
    return (
        <div className="wprf-repeater-field">
            <div className="wprf-repeater-field-title" >
                <h4>#ID: {props.index}</h4>
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
