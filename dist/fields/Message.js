import classNames from 'classnames';
import { createElement, Fragment } from 'react';
import { addFilter } from '@wordpress/hooks';
import when from '../core/when.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/typeof';
import 'sweetalert2';
import '@wordpress/data';
import '@babel/runtime/helpers/toConsumableArray';
import 'lodash-es';
import '@wordpress/api-fetch';
import '@wordpress/i18n';

var eligibleMessage = function eligibleMessage(props) {
  if (props !== null && props !== void 0 && props.messages) {
    for (var msg in props.messages) {
      var singleMessage = props.messages[msg];
      if (when(singleMessage.rules, props.context.values)) {
        return singleMessage;
      }
    }
  }
  return {
    message: props === null || props === void 0 ? void 0 : props.message,
    html: props === null || props === void 0 ? void 0 : props.html,
    type: 'normal'
  };
};
var Message = function Message(props) {
  var _eligibleMessage = eligibleMessage(props),
    html = _eligibleMessage.html,
    message = _eligibleMessage.message,
    _eligibleMessage$type = _eligibleMessage.type,
    type = _eligibleMessage$type === void 0 ? 'warning' : _eligibleMessage$type;
  if (!message) {
    return createElement(Fragment, null);
  }
  return createElement("div", {
    className: classNames('wprf-control', 'wprf-message', "wprf-".concat(type, "-message"), "wprf-".concat(props.name, "-message"), props === null || props === void 0 ? void 0 : props.classes)
  }, html && createElement("p", {
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), !html && createElement("p", null, message));
};
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('message' === type) {
    return createElement(Message, props);
  }
  return field;
});

export { Message as default };
