import classNames from 'classnames';
import React from 'react'
import { addFilter } from "@wordpress/hooks";
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
    return {
        message: props?.message,
        html: props?.html,
        type: 'normal'
    };
}

const Message = (props) => {
    let { html, message, type = 'warning' } = eligibleMessage(props);

    if (!message) {
        return <></>;
    }

    return (
        <div className={classNames('wprf-control', 'wprf-message', `wprf-${type}-message`, `wprf-${props.name}-message`, props?.classes)}>
            {html && <p dangerouslySetInnerHTML={{ __html: message }}></p>}
            {!html && <p>{message}</p>}
        </div>
    )
}

export default Message;

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('message' === type) {
    return <Message {...props} />;
  }
  return field;
});
