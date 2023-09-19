import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useCallback } from 'react';
import { useBuilderContext } from '../../core/hooks';

const Submit = ({ ...props }) => {
    const context = useBuilderContext();
    let label = props?.label || __('Save Changes', 'betterdocs');

	if( context.isSubmitting ) {
		label = props?.loadingLabel ?? 'Saving...';
	}

    const handleSubmit = useCallback(
        (event) => {
            if (context.submit?.onSubmit) {
                context.submit.onSubmit(event, context);
                return;
            }
        },
        [context],
    )

    return (
        <div className="wprf-submit wprf-control">
            <Button disabled={context?.isSubmitting} className="wprf-submit-button" onClick={handleSubmit}>{label}</Button>
        </div>
    )
}

export default Submit;
