import React, { useState } from 'react'
import { Icon } from '@wordpress/components';
import BuilderField from '../../core/BuilderField';

const RepeaterField = (props) => {
    const [isCollapse, setIsCollapse] = useState(props.isOpen);
    // onClick={() => setIsCollapse(!isCollapse)}
    return (
        <div className="wprf-repeater-field">
            <div className="wprf-repeater-field-title" >
                <h4>#ID: {props.index} - {props.parentProps.label}</h4>
                <div className="wprf-repeater-field-controls">
                    <Icon onClick={() => props.clone(props.index)} icon="admin-page" />
                    <Icon onClick={() => props.remove(props.index)} icon="trash" />
                </div>
            </div>
            { isCollapse &&
                <div className="wprf-repeater-inner-field">
                    <BuilderField
                        meta={{
                            parent: {
                                type: 'repeater'
                            }
                        }}
                        index={props.index}
                        name={`${props.name}`}
                        handleChange={(value) => props.handleChange(value || value, props.index)}
                        type="group"
                        fields={props.fields}
                    />
                </div>
            }
        </div>
    )
}

export default RepeaterField;
