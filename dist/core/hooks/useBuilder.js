import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useRef, useEffect, useReducer, useCallback, useLayoutEffect } from 'react';
import when from '../when.js';
import { builderReducer } from '../builderReducer.js';
import { sortingFields, getIn, executeChange, validFieldProps, isString, getTime, isVisible, isArray } from '../utils.js';
import { doAction } from '@wordpress/hooks';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useBuilder = function useBuilder(props) {
  // Set is Mounted or NOT
  var isMounted = useRef(false);
  useEffect(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  var _useReducer = useReducer(builderReducer, _objectSpread(_objectSpread({}, props), {}, {
      savedValues: props.savedValues || {},
      values: props.values || {},
      errors: props.initialErrors || {},
      touched: props.initialTouched || {},
      icons: props.initialIcons || {},
      common: {},
      alerts: {},
      tabs: sortingFields(props.tabs)
    })),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var setContext = useEventCallback(function (field, value, shouldValidate) {
    dispatch({
      type: 'SET_CONTEXT',
      payload: {
        field: field,
        value: value
      }
    });
  });
  var setValues = useEventCallback(function (values, shouldValidate) {
    var resolvedValues = typeof values === 'function' ? values(state.values) : values;
    dispatch({
      type: 'SET_VALUES',
      payload: resolvedValues
    });
    var willValidate = shouldValidate === undefined ? false : shouldValidate;
    return willValidate ? resolvedValues : Promise.resolve();
  });
  var setSavedValues = useEventCallback(function (values, shouldValidate) {
    var resolvedValues = typeof values === 'function' ? values(state.values) : values;
    dispatch({
      type: 'SET_SAVED_VALUES',
      payload: resolvedValues
    });
    var willValidate = shouldValidate === undefined ? false : shouldValidate;
    return willValidate ? resolvedValues : Promise.resolve();
  });
  var setFieldValue = useEventCallback(function (field, value, shouldValidate) {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field: field,
        value: value
      }
    });
  });
  var setFormField = useEventCallback(function (field, value) {
    dispatch({
      type: 'SET_FORM_FIELD',
      payload: {
        field: field,
        value: value
      }
    });
  });
  var getFieldValue = useCallback(function (name) {
    return getIn(state.values, name);
  }, [state]);
  var setFieldTouched = useEventCallback(function (field, touched, shouldValidate) {
    if (!touched) {
      touched = true;
    }
    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: {
        field: field,
        value: touched
      }
    });
    // var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    // return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });

  var executeBlur = useCallback(function (event) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (event.persist) {
      event.persist();
    }
    var _e$target = event.target,
      name = _e$target.name,
      id = _e$target.id;
      _e$target.outerHTML;
    var field = path ? path : name ? name : id;
    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function (eventOrString) {
    if (typeof eventOrString === 'string') {
      return function (event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var executeChange$1 = useCallback(function (eventOrTextValue, maybePath, validProps) {
    if (validProps !== null && validProps !== void 0 && validProps.isPro && Boolean(state.is_pro_active) === false) {
      return;
    }
    var _eChange = executeChange(eventOrTextValue, maybePath),
      field = _eChange.field,
      value = _eChange.val;
    if (field) {
      setFieldValue(field, value);
      doAction('quickBuilder_setFieldValue', field, value, validProps);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function (eventOrString, validProps) {
    if (validProps !== null && validProps !== void 0 && validProps.isPro && Boolean(state.is_pro_active) === false) {
      var _state$alerts;
      (_state$alerts = state.alerts) === null || _state$alerts === void 0 || (_state$alerts = _state$alerts.pro_alert(validProps === null || validProps === void 0 ? void 0 : validProps.popup)) === null || _state$alerts === void 0 ? void 0 : _state$alerts.fire();
      // return false;
    }

    if (typeof eventOrString === 'string') {
      return function (event) {
        return executeChange$1(eventOrString, event, validProps);
      };
    } else {
      executeChange$1(eventOrString, null, validProps);
    }
  });
  var getFieldProps = useCallback(function (args) {
    var defaultProps = _objectSpread({}, args);
    var validProps = validFieldProps(defaultProps);
    var name = validProps.name;
    var type = validProps.type;
    var parent = validProps.parent;
    var parentType = validProps.parenttype;
    var valueState;
    // For Badge Is Commented.
    if (defaultProps !== null && defaultProps !== void 0 && defaultProps.is_pro) {
      validProps.is_pro = !(defaultProps !== null && defaultProps !== void 0 && defaultProps.is_pro && Boolean(state.is_pro_active) === true);
    }
    if (parent && parentType === 'group') {
      var _getIn, _parentValue$name;
      var parentValue = (_getIn = getIn(state.values, parent)) !== null && _getIn !== void 0 ? _getIn : {};
      valueState = (_parentValue$name = parentValue === null || parentValue === void 0 ? void 0 : parentValue[name]) !== null && _parentValue$name !== void 0 ? _parentValue$name : defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps["default"];
    } else if (parent && parentType === 'repeater') {
      var _getIn2, _parentValue$validPro, _parentValue$validPro2;
      var _parentValue = (_getIn2 = getIn(state.values, parent)) !== null && _getIn2 !== void 0 ? _getIn2 : [];
      valueState = (_parentValue$validPro = _parentValue === null || _parentValue === void 0 || (_parentValue$validPro2 = _parentValue[validProps.index]) === null || _parentValue$validPro2 === void 0 ? void 0 : _parentValue$validPro2[name]) !== null && _parentValue$validPro !== void 0 ? _parentValue$validPro : defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps["default"];
    } else {
      var _getIn3;
      valueState = (_getIn3 = getIn(state.values, name)) !== null && _getIn3 !== void 0 ? _getIn3 : defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps["default"];
    }
    validProps.onChange = handleChange;
    validProps.onBlur = handleBlur;
    var valueProp = validProps.value;
    if (type === 'checkbox' && !validProps.multiple) {
      validProps.checked = !!valueState;
      validProps.value = !!valueState;
      if (isString(valueState) && valueState === "0") {
        validProps.checked = false;
        validProps.value = false;
      } else {
        validProps.checked = Boolean(valueState);
        validProps.value = Boolean(valueState);
      }
    } else if (type === 'radio') {
      validProps.checked = valueState === valueProp;
      validProps.value = valueProp;
    } else if (type === 'date') {
      validProps.value = valueState == undefined ? getTime() : valueState;
    } else {
      validProps.value = valueState;
    }
    validProps.visible = isVisible(state.values, args);
    //=== "notification-template"
    // if (validProps?.parenttype === 'group') {
    //     // if ("custom_fifth_param" === name) {
    //     let currentIndex = validProps.parentIndex;
    //     let parentIndex = validProps.parentIndex;
    //     const lastIndex = parentIndex.pop() - 1;
    //     parentIndex = [...parentIndex, lastIndex];
    //     const parentField = getIn(state.tabs, parentIndex);
    //     const parentVisibility = isVisible(state.values, getFieldProps(parentField));
    //     console.log("validProps", validProps.name, parentVisibility);
    //     // }
    // }

    return validProps;
  }, [handleBlur, handleChange, state.values]);
  var getFieldMeta = useCallback(function (name, props) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var parentValue, value;
    if (parent !== null) {
      var _parentValue2;
      parentValue = getIn(state.values, parent);
      value = (_parentValue2 = parentValue) === null || _parentValue2 === void 0 ? void 0 : _parentValue2[name];
    } else {
      var _props$meta;
      value = getIn(state.values, name) || ((_props$meta = props.meta) === null || _props$meta === void 0 ? void 0 : _props$meta["default"]);
    }
    return _objectSpread(_objectSpread({}, props.meta), {}, {
      value: value,
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      visible: isVisible(state.values, props),
      initialValue: '',
      // getIn(initialValues.current, name),
      initialTouched: "",
      // !!getIn(initialTouched.current, name),
      initialError: "" // getIn(initialErrors.current, name)
    });
  }, [state.errors, state.touched, state.values]);
  var eligibleOptions = useCallback(function (options) {
    if (options.length > 0) {
      var newOptions = [];
      newOptions = options.filter(function (item) {
        if (item !== null && item !== void 0 && item.rules) {
          return when(item.rules, state.values);
        } else {
          return item;
        }
      });
      return newOptions;
    }
    return options;
  }, [state.errors, state.touched, state.values]);
  var eligibleOption = useCallback(function (options, value) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (options.length) {
      var newOptions = [];
      if (multiple && isArray(value)) {
        newOptions = options.filter(function (option) {
          return value.includes(option.value);
        });
        return newOptions;
      } else {
        newOptions = options.filter(function (option) {
          return option.value == value;
        });
        return newOptions.length > 0 ? newOptions[0] : '';
      }
    }
    return options;
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = useCallback(function () {
    return {
      setValue: function setValue(name, value) {
        return setFieldValue(name, value);
      },
      getValue: function getValue(name) {
        return getIn(state.values, name);
      },
      getValueForDefault: function getValueForDefault(name) {
        var comparisonKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (comparisonKey === null) {
          return getIn(state.savedValues, name);
        }
        var savedValue = getIn(state.savedValues, comparisonKey),
          currentValue = getIn(state.values, comparisonKey);
        return savedValue === currentValue ? getIn(state.savedValues, name) : false;
      }
    };
  }, [state.errors, state.touched, state.values, state.savedValues]);
  var getTabFields = useCallback(function (parentIndex) {
    return getIn(state.tabs, parentIndex);
  }, [state]);
  var setSubmitting = useEventCallback(function (submit) {
    dispatch({
      type: 'SET_ISSUBMITTING',
      payload: submit
    });
  });
  var setActiveTab = useEventCallback(function (tab) {
    dispatch({
      type: 'SET_ACTIVE_TAB',
      payload: tab
    });
  });
  var setRedirect = useEventCallback(function (redirectData) {
    dispatch({
      type: 'SET_REDIRECT',
      payload: redirectData
    });
  });
  var registerIcons = useEventCallback(function (name, iconLists) {
    dispatch({
      type: 'SET_ICONS',
      payload: {
        name: name,
        icons: iconLists
      }
    });
  });
  var registerCommon = useEventCallback(function (name, value) {
    dispatch({
      type: 'SET_COMMONS',
      payload: {
        name: name,
        value: value
      }
    });
  });
  var registerAlert = useEventCallback(function (name, value) {
    dispatch({
      type: 'SET_ALERTS',
      payload: {
        name: name,
        value: value
      }
    });
  });
  var context = _objectSpread(_objectSpread(_objectSpread({}, props), state), {}, {
    setContext: setContext,
    values: state.values,
    savedValues: state.savedValues,
    errors: state.errors,
    touched: state.touched,
    isSubmitting: false,
    setActiveTab: setActiveTab,
    setRedirect: setRedirect,
    setSubmitting: setSubmitting,
    setValues: setValues,
    setSavedValues: setSavedValues,
    setFieldValue: setFieldValue,
    getFieldValue: getFieldValue,
    handleBlur: handleBlur,
    handleChange: handleChange,
    getFieldProps: getFieldProps,
    getFieldMeta: getFieldMeta,
    getFieldHelpers: getFieldHelpers,
    eligibleOptions: eligibleOptions,
    eligibleOption: eligibleOption,
    getTabFields: getTabFields,
    setFormField: setFormField,
    registerIcons: registerIcons,
    registerCommon: registerCommon,
    registerAlert: registerAlert
  });
  return context;
};
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? useLayoutEffect : useEffect;
var useEventCallback = function useEventCallback(fn) {
  var ref = useRef(fn);
  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return useCallback(function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current.apply(void 0, args);
  }, []);
};

export { useBuilder as default };
