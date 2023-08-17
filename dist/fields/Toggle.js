import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { createElement, useState, useEffect } from 'react';
import { addFilter } from '@wordpress/hooks';
import Row from '../core/components/Row.js';
import Column from '../core/components/Column.js';
import 'classnames';
import '@babel/runtime/helpers/extends';
import '../core/hooks/useBuilderContext.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import { sortingFields, isObject } from '../core/utils.js';
import '@wordpress/components';
import '@wordpress/i18n';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import 'sweetalert2';
import '@wordpress/data';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@wordpress/compose';
import GenericToggle from './helpers/GenericToggle.js';

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Toggle = function Toggle(props) {
  var passedOptions = props.options,
    value = props.value,
    multiple = props.multiple,
    prevStyles = props.style;
  var options = sortingFields(passedOptions);
  var styles = _objectSpread({
    column: 4
  }, prevStyles);
  if (multiple) {
    var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      localState = _useState2[0],
      setLocalState = _useState2[1];
    var handleChange = function handleChange(event) {
      var target = event.target ? event.target : event.currentTarget;
      setLocalState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, target.value, target.checked));
      });
    };
    useEffect(function () {
      props.onChange({
        target: {
          type: 'toggle',
          name: props.name,
          value: localState
        }
      });
    }, [localState]);
    useEffect(function () {
      if (!isObject(value)) {
        var lState = {};
        var _iterator = _createForOfIteratorHelper(options),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var option = _step.value;
            lState[option.value] = value;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        setLocalState(lState);
      } else {
        setLocalState(value);
      }
    }, []);
    return createElement("div", {
      className: "wprf-toggle-wrapper wprf-control"
    }, createElement(Row, null, options.map(function (item) {
      return createElement(Column, {
        key: item.value,
        column: styles.column
      }, createElement(GenericToggle, _objectSpread(_objectSpread({}, item), {}, {
        context: props === null || props === void 0 ? void 0 : props.context,
        id: item.value,
        checked: typeof localState[item.value] === 'undefined' ? true : localState !== null && localState !== void 0 && localState[item.value] ? value : !!(localState !== null && localState !== void 0 && localState[item.value]),
        type: 'checkbox',
        onChange: handleChange,
        style: styles
      })));
    })));
  }
  return createElement(GenericToggle, props);
};
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('toggle' === type) {
    return createElement(Toggle, props);
  }
  return field;
});

export { Toggle, Toggle as default };
