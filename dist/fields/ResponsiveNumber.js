import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { createElement, useState, useEffect } from 'react';
import { addFilter } from '@wordpress/hooks';
import '../core/hooks/useBuilderContext.js';
import { validFieldProps, isObject } from '../core/utils.js';
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
var _ResponsiveNumber = function _ResponsiveNumber(props) {
  var _Object$keys;
  var validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context', 'badge', 'popup']);
  var _useState = useState(Object.keys(props.controls)[0]),
    _useState2 = _slicedToArray(_useState, 2),
    responsive = _useState2[0],
    setResponsive = _useState2[1];

  // backward compatibility
  var value = validProps.value;
  if (!isObject(validProps.value)) {
    Object.keys(props.controls).reduce(function (acc, key) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, validProps.value));
    }, {});
  }
  var _useState3 = useState(value),
    _useState4 = _slicedToArray(_useState3, 2),
    responsiveSize = _useState4[0],
    setResponsiveSize = _useState4[1];
  var handleChange = function handleChange(event) {
    setResponsiveSize(_objectSpread(_objectSpread({}, responsiveSize), {}, _defineProperty({}, responsive, event.target.value)));
  };
  useEffect(function () {
    validProps.onChange({
      target: {
        type: 'input',
        name: validProps.name,
        value: responsiveSize,
        checked: null,
        multiple: null
      }
    });
  }, [responsiveSize]);
  return createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      rowGap: 5,
      columnGap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", _objectSpread(_objectSpread({}, validProps), {}, {
    type: "number",
    value: responsiveSize === null || responsiveSize === void 0 ? void 0 : responsiveSize[responsive],
    onChange: handleChange
  })), createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, (_Object$keys = Object.keys(props.controls)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (key) {
    return createElement("button", {
      type: "button",
      key: key,
      className: "responsive-button ".concat(responsive === key ? "active" : ""),
      onClick: function onClick() {
        return setResponsive(key);
      }
    }, createElement("img", {
      src: props.controls[key].icon,
      alt: "desktop",
      style: {
        width: props.controls[key].size
      }
    }));
  })));
};
_ResponsiveNumber.defaultProps = {
  type: "number"
};
var ResponsiveNumber = withLabel( /*#__PURE__*/React.memo(_ResponsiveNumber));
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('responsive-number' === type) {
    return createElement(ResponsiveNumber, props);
  }
  return field;
});

export { ResponsiveNumber as default };
