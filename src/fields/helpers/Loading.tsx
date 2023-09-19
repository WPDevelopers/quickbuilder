import { __ } from '@wordpress/i18n';
import React from 'react';

const Loading = (props) => {
    return (
        <p>{__('Loading...', 'betterdocs')}</p>
    )
}

export default Loading;
