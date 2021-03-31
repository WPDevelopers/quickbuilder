import React, { useCallback } from 'react'
import { Button } from '@wordpress/components';
import { useBuilderContext } from '../core/hooks';

const Submit = ({ label = 'Save Changes', ...props }) => {
    const context = useBuilderContext();

    const handleSubmit = useCallback(
        (event) => {
            if (context.submit?.onSubmit) {
                context.submit.onSubmit(event, context);
                return;
            }
            console.log('on submit wprf.');
        },
        [context],
    )

    return (
        <div className="wprf-submit wprf-control">
            <Button className="wprf-submit-button" onClick={handleSubmit}>{label}</Button>
        </div>
    )
}

export default Submit;