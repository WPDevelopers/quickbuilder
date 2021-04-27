import classNames from 'classnames';
import React from 'react'
import { when } from '../core';

const eligibleMessage = (props) => {
    if (props?.messages) {
        for (let msg in props.messages) {
            let singleMessage = props.messages[msg];
            if (when(singleMessage.rules, props.context.values)) {
                return singleMessage;
            }
        }
    }
    return ''
}

const Message = (props) => {
    let { html, message, type = 'warning' } = eligibleMessage(props);

    if (!message) {
        return <></>;
    }

    return (
        <div className={classNames('wprf-control', 'wprf-message', `wprf-${type}-message`)}>
            {html && <p dangerouslySetInnerHTML={{ __html: message }}></p>}
            {!html && <p>{message}</p>}
        </div>
    )
}

export default Message;