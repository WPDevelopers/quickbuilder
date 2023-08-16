import React, { useCallback } from 'react'
import { Button } from '@wordpress/components';
import useBuilderContext from '../../core/hooks/useBuilderContext';
import { __ } from '@wordpress/i18n';

const Submit = ({ ...props }) => {
    const context = useBuilderContext();
    const label = props?.label || __('Save Changes', 'notificationx');
    const handleSubmit = useCallback(
        (event) => {
            if (context.submit?.onSubmit) {
                context.submit.onSubmit(event, context);
                return;
            }
            // console.log('on submit wprf.');
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
