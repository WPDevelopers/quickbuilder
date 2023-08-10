import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { useRef, useEffect, createElement, Fragment } from 'react';
import { isFunction, isArray, isObject, isEmptyObj } from '../utils.js';
import useBuilderContext from './useBuilderContext.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import '@wordpress/i18n';
import '@babel/runtime/helpers/slicedToArray';
import useDefaults from './useDefaults.js';
import '@babel/runtime/helpers/defineProperty';
import 'sweetalert2';
import '@wordpress/data';
import '@wordpress/hooks';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'classnames';

var withProps = function withProps(WrappedComponent) {
  var isGeneric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var WithProps = function WithProps(props) {
    var builderContext = useBuilderContext();
    var trigger = props.trigger;
    var field = builderContext.getFieldProps(props);
    var meta = builderContext.getFieldMeta(field.name, props);
    var helpers = builderContext.getFieldHelpers();
    if (builderContext !== null && builderContext !== void 0 && builderContext.quickBuilder && builderContext !== null && builderContext !== void 0 && builderContext.show) {
      if (!builderContext.show.includes(props.name)) {
        field.classes = field !== null && field !== void 0 && field.classes ? field.classes + ' hidden' : ' hidden';
      }
    }
    var pIndex = props !== null && props !== void 0 && props.parentIndex ? _toConsumableArray(props.parentIndex) : [];
    field.parentIndex = pIndex;
    field.context = builderContext;
    if (isFunction(props.onChange)) {
      field.onChange = props.onChange;
    }
    if (isFunction(props.onBlur)) {
      field.onBlur = props.onBlur;
    }
    var isFieldMounted = useRef({});
    useEffect(function () {
      isFieldMounted.current[props.name] = true;
      return function () {
        isFieldMounted.current[props.name] = false;
      };
    }, []);
    useEffect(function () {
      if (['ft_theme_three_line_one', 'ft_theme_three_line_two', 'ft_theme_four_line_two'].includes(props.name)) {
        return;
      }
      if (meta.visible && isFieldMounted.current[props.name]) {
        // Not needed / Confused
        if (!isGeneric && field.type !== 'group') {
          helpers.setValue(field.name, field.value);
        } else {
          var parent = props === null || props === void 0 ? void 0 : props.parent;
          var parenttype = props === null || props === void 0 ? void 0 : props.parenttype;
          if (parent && parenttype === 'group' && field.value) {
            var _parent = isArray(parent) ? [].concat(_toConsumableArray(parent), [field.name]) : [parent, field.name];
            helpers.setValue(_parent, field.value);
          }
          // if (parent && parenttype === 'repeater') {
          //     // let parentValues = helpers.getValue(parent) || [];
          //     // if (isArray(parentValues) && parentValues.length > 0) {
          //     //     parentValues[props.index][field.name] = field.value;
          //     //     helpers.setValue(parent, parentValues)
          //     // } else {
          //     //     parentValues = [...parentValues,];
          //     //     parentValues = { ...parentValues, [field.name]: field.value };
          //     //     helpers.setValue(parent, parentValues)
          //     // }
          // }
        }
      }
    }, [meta.visible]);
    useEffect(function () {
      if (isFieldMounted.current[props.name]) {
        if (isObject(trigger) && !isEmptyObj(trigger)) {
          useDefaults(field.name, helpers, field.value, trigger);
        }
      }
    }, [field.value, meta.visible]);
    if (!meta.visible) {
      return createElement(Fragment, null);
    }
    return createElement(WrappedComponent, field);
  };
  return WithProps;
};

export { withProps as default };
