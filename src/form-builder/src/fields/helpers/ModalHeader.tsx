import React from 'react'
import { isString } from '../../core/utils';

const ModalHeader = ({ content }) => {
    return (
        <div className="wprf-modal-header">
            {content && isString(content) && <h3>{content}</h3>}
        </div>
    )
}

export default ModalHeader;