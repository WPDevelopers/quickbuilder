import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { createElement, useEffect } from 'react';
import { useInstanceId } from '@wordpress/compose';
import classNames from 'classnames';
import Row from '../core/components/Row.js';
import Column from '../core/components/Column.js';
import Label from '../core/components/Label.js';
import useBuilderContext from '../core/hooks/useBuilderContext.js';
import { validFieldProps } from '../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import { __ } from '@wordpress/i18n';
import useOptions from '../core/hooks/useOptions.js';
import '@babel/runtime/helpers/slicedToArray';
import 'sweetalert2';
import '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/toConsumableArray';
import { GenericInput } from './Input.js';

var _excluded = ["label", "value", "icon", "is_pro"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _RadioCard = function _RadioCard(props) {
  var builderContext = useBuilderContext();
  var _useOptions = useOptions(props, 'options'),
    options = _useOptions.options,
    option = _useOptions.option;
  if (!options) {
    throw new Error(__('#options is a required arguments for RadioCard field.', 'notificationx'));
  }
  var instanceId = useInstanceId(RadioCard);
  var componentClasses = classNames(["wprf-control", "wprf-radio-card", "wprf-input-radio-set-wrap", props === null || props === void 0 ? void 0 : props.className]);
  var styles = _objectSpread({}, props === null || props === void 0 ? void 0 : props.style);
  var validProps = validFieldProps(props, ['options', 'placeholder', 'style', 'trigger']);
  useEffect(function () {
    if (option) {
      props.onChange({
        target: {
          type: 'radio-card',
          name: props.name,
          value: option
        }
      });
    }
  }, [option]);
  return createElement("div", {
    className: componentClasses
  }, createElement(Row, null, options.map(function (_ref, index) {
    var _ref2;
    var label = _ref.label,
      value = _ref.value,
      icon = _ref.icon,
      is_pro = _ref.is_pro,
      rest = _objectWithoutProperties(_ref, _excluded);
    return createElement(Column, {
      column: +(rest === null || rest === void 0 ? void 0 : rest.column) || 4,
      key: index
    }, createElement("div", {
      className: classNames("wprf-input-radio-option", {
        "wprf-option-has-image": icon !== null && icon !== void 0 ? icon : false,
        "wprf-option-selected": value == option
      })
    }, createElement(Label, {
      className: classNames(_defineProperty({
        "wprf-label-has-image": icon !== null && icon !== void 0 ? icon : false
      }, "wprf-size-".concat(styles.size), (_ref2 = icon && (styles === null || styles === void 0 ? void 0 : styles.size)) !== null && _ref2 !== void 0 ? _ref2 : false)),
      htmlFor: "wprf-input-radio-".concat(instanceId, "-").concat(index),
      src: icon,
      badge: {
        label: is_pro ? 'Pro' : 'Free',
        value: is_pro,
        active: Boolean(builderContext.is_pro_active)
      }
    }, label), createElement(GenericInput, _extends({}, rest, validProps, {
      is_pro: is_pro,
      type: "radio",
      value: value,
      checked: value === option,
      id: "wprf-input-radio-".concat(instanceId, "-").concat(index)
    }))));
  })));
};
var RadioCard = withLabel(_RadioCard);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('radio-card' === type) {
    return createElement(RadioCard, props);
  }
  return field;
});

export { RadioCard as default };
