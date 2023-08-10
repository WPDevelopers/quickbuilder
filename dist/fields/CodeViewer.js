import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import copy from 'copy-to-clipboard';
import React, { createElement, useCallback } from 'react';
import { addFilter } from '@wordpress/hooks';
import '../core/hooks/useBuilderContext.js';
import { validFieldProps } from '../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import '@babel/runtime/helpers/slicedToArray';
import 'sweetalert2';
import '@wordpress/data';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/extends';
import 'classnames';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _CodeViewer = function _CodeViewer(props) {
  var validProps = validFieldProps(props, ["is_pro", "visible", "trigger", "disable", "parentIndex", "context", "copyOnClick"]);
  var handleChange = useCallback(function (event) {
    return validProps.onChange(event, {
      isPro: !!props.is_pro
    });
  }, [validProps === null || validProps === void 0 ? void 0 : validProps.value]);
  var extraProps = {
    onChange: handleChange,
    rows: 5
  };
  if (!props.is_pro && props !== null && props !== void 0 && props.copyOnClick && props !== null && props !== void 0 && props.value) {
    extraProps["onClick"] = function () {
      var successText = props !== null && props !== void 0 && props.success_text ? props.success_text : __("Copied to Clipboard.", "notificationx");
      copy(props.value, {
        format: 'text/plain',
        onCopy: function onCopy() {
          props.context.alerts.toast("success", successText);
        }
      });
    };
  }
  var ButtonText = props !== null && props !== void 0 && props.button_text ? props.button_text : __("Click to Copy", "notificationx");
  return createElement("span", {
    className: "wprf-code-viewer"
  }, /*#__PURE__*/React.createElement("textarea", _objectSpread(_objectSpread({}, validProps), extraProps)), createElement(Button, {
    className: "wprf-copy-button"
  }, ButtonText));
};
var CodeViewer = withLabel( /*#__PURE__*/React.memo(_CodeViewer));
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('codeviewer' === type) {
    return createElement(CodeViewer, props);
  }
  return field;
});

export { CodeViewer as default };
