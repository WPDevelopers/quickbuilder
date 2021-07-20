import React from 'react'
const ControlField = ({ position, description, renderComponent, help }) => {
    return (
        <div className="wprf-control-field">
            {
                position === 'left' && description &&
                <p className="wprf-description" dangerouslySetInnerHTML={{ __html: description }}></p>
            }
            {renderComponent()}
            {
                position === 'right' && description &&
                <p className="wprf-description" dangerouslySetInnerHTML={{ __html: description }}></p>
            }
            {help && <p className="wprf-help" dangerouslySetInnerHTML={{ __html: help }}></p>}
        </div>
    )
}
export default ControlField