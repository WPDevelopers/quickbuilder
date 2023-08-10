import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { createElement, useCallback } from 'react';
import { addFilter } from '@wordpress/hooks';
import '../core/hooks/useBuilderContext.js';
import { validFieldProps } from '../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import '@wordpress/i18n';
import '@babel/runtime/helpers/slicedToArray';
import 'sweetalert2';
import '@wordpress/data';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/extends';
import 'classnames';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _Textarea = function _Textarea(props) {
  var validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context']);
  var handleChange = useCallback(function (event) {
    return validProps.onChange(event, {
      isPro: !!props.is_pro
    });
  }, [validProps === null || validProps === void 0 ? void 0 : validProps.value]);
  return /*#__PURE__*/React.createElement('textarea', _objectSpread(_objectSpread({}, validProps), {}, {
    onChange: handleChange,
    rows: 5
  }));
};
var Textarea = withLabel( /*#__PURE__*/React.memo(_Textarea));
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('textarea' === type) {
    return createElement(Textarea, props);
  }
  return field;
});

export { Textarea as default };
