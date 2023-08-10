import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Button } from '@wordpress/components';
import copy from 'copy-to-clipboard';
import React, { createElement, useState, useEffect } from 'react';
import { addFilter } from '@wordpress/hooks';
import '../core/hooks/useBuilderContext.js';
import { validFieldProps } from '../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import '@wordpress/i18n';
import 'sweetalert2';
import '@wordpress/data';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/extends';
import 'classnames';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _Input = function _Input(props, ref) {
  var type = props.type ? props.type : 'text';
  var validProps = validFieldProps(_objectSpread(_objectSpread({}, props), {}, {
    type: type
  }), ['is_pro', 'visible', 'trigger', 'copyOnClick', 'disable', 'parentIndex', 'context', 'badge', 'popup', 'tags']);
  var handleChange = function handleChange(event) {
    console.log(props);
    return validProps.onChange(event, {
      popup: props === null || props === void 0 ? void 0 : props.popup,
      isPro: !!props.is_pro
    });
  };
  if (validProps.type === 'checkbox') {
    if (validProps !== null && validProps !== void 0 && validProps.name) {
      validProps.checked = (validProps === null || validProps === void 0 ? void 0 : validProps.checked) || (validProps === null || validProps === void 0 ? void 0 : validProps.value);
    }
  }
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCopied = _useState2[0],
    setIsCopied = _useState2[1];
  useEffect(function () {
    var CopyInterval;
    if (isCopied) {
      CopyInterval = setTimeout(function () {
        setIsCopied(false);
      }, 2000);
    }
    return function () {
      return CopyInterval && clearTimeout(CopyInterval);
    };
  }, [isCopied]);
  if (!props.is_pro && props !== null && props !== void 0 && props.copyOnClick && props !== null && props !== void 0 && props.value) {
    var copyMessage = (props === null || props === void 0 ? void 0 : props.copyMessage) || "Click To Copy!";
    var copiedMessage = (props === null || props === void 0 ? void 0 : props.copiedMessage) || "Copied!";
    var handleCopy = function handleCopy() {
      copy(props.value, {
        format: 'text/plain',
        onCopy: function onCopy() {
          setIsCopied(true);
        }
      });
    };
    return createElement("span", {
      className: "wprf-clipboard-wrapper"
    }, /*#__PURE__*/React.createElement("input", _objectSpread(_objectSpread({}, validProps), {}, {
      onChange: handleChange
    })), createElement("span", {
      className: "wprf-clipboard-tooltip"
    }, createElement("span", {
      className: "wprf-clipboard-tooltip-text"
    }, isCopied ? copiedMessage : copyMessage), createElement(Button, {
      className: "wprf-copy-icon",
      onClick: function onClick() {
        return handleCopy();
      }
    }, "Copy")));
  }
  return /*#__PURE__*/React.createElement('input', _objectSpread(_objectSpread({}, validProps), {}, {
    onChange: handleChange
  }));
};
_Input.defaultProps = {
  type: 'text'
};
var GenericInput = /*#__PURE__*/React.memo(_Input);
var Input = withLabel( /*#__PURE__*/React.memo(_Input));
addFilter('custom_field', 'wprf', function (field, type, props) {
  if (type === 'text' || type === 'radio' || type === 'email' || type === 'range' || type === 'number' || type === 'hidden') {
    return createElement(Input, props);
  }
  return field;
});

export { GenericInput, Input as default };
