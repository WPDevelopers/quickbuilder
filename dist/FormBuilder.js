import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { createElement, Fragment } from 'react';
import { registerStore } from '@wordpress/data';
import store from './store/index.js';
import Tab from './fields/Tab.js';
import useBuilderContext from './core/hooks/useBuilderContext.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
registerStore("formbuilder", store);
var FormBuilder = function FormBuilder(props) {
  var _tabs;
  var builderContext = useBuilderContext();
  var tabs = props.tabs;
  if (!((_tabs = tabs) !== null && _tabs !== void 0 && _tabs.type)) {
    var _props$config;
    var onChange = function onChange(event) {
      var _event$target;
      builderContext.setActiveTab(event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value);
    };
    tabs = _objectSpread(_objectSpread(_objectSpread({}, props), props.config), {}, {
      value: (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.active,
      fields: props.tabs,
      tabs: undefined,
      submit: props.submit,
      onChange: props.onChange || onChange
    });
  }
  return createElement(Fragment, null, createElement(Tab, tabs));
};

export { FormBuilder as default };
