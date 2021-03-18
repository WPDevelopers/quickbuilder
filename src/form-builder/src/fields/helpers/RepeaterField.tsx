import React from 'react'
import BuilderField from '../../core/BuilderField';

const RepeaterField = (props) => {
    return (
        <div className="wprf-repeater-field" key={props.index}>
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
    )
}

export default RepeaterField;
