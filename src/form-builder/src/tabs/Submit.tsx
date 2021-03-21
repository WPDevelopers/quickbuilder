import React, { useCallback } from 'react'
import { Button } from '@wordpress/components';

const Submit = ({ label = 'Save Changes', ...props }) => {
    const handleSubmit = useCallback(
        (event) => {
            if (props?.onSubmit) {
                props.onSubmit(event);
                return;
            }

            console.log('on submit wprf.');
        },
        [],
    )

    return (
        <div className="wprf-submit wprf-control">
            <Button className="wprf-submit-button" onClick={handleSubmit}>{label}</Button>
        </div>
    )
}

export default Submit;