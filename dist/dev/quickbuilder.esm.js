import React, { useContext, createContext, useState, useEffect, useRef, useReducer, useCallback, useLayoutEffect, createElement, Fragment, useMemo } from 'react';
import { select, dispatch, registerStore } from '@wordpress/data';
import { sprintf, __ } from '@wordpress/i18n';
import intersect from 'intersect';
import apiFetch from '@wordpress/api-fetch';
import { toPath, clone } from 'lodash-es';
import { __experimentalGetSettings, date } from '@wordpress/date';
import moment from 'moment';
import { doAction, applyFilters } from '@wordpress/hooks';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import ReactSelect from 'react-select';
import { Button as Button$2, ColorPicker as ColorPicker$2, Dropdown, DateTimePicker, Icon, RangeControl } from '@wordpress/components';
import copy from 'copy-to-clipboard';
import { Editor as Editor$2 } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { MediaUpload } from '@wordpress/media-utils';
import SweetAlert$1 from 'react-bootstrap-sweetalert';
import { ReactSortable } from 'react-sortablejs';
import { v4 } from 'uuid';
import parse from 'html-react-parser';
import AsyncSelect from 'react-select/async';

function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}

function _toPrimitive(input, hint) {
  if (_typeof$1(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof$1(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}

function ownKeys$g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$g(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var wpFetch = function wpFetch(params) {
  var args = _objectSpread$g(_objectSpread$g({}, params), {}, {
    method: "POST"
  });
  return apiFetch(args);
};
var isString = function isString(args) {
  return args !== null && typeof args === "string";
};
var isNumber = function isNumber(args) {
  return args !== null && typeof args === "number";
};
var isInteger = function isInteger(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
var isFunction = function isFunction(functionName) {
  return functionName !== null && typeof functionName === "function";
};
var isArray = function isArray(args) {
  return args !== null && _typeof$1(args) === "object" && Array.isArray(args);
};
var isObject = function isObject(obj) {
  return obj !== null && _typeof$1(obj) === 'object' && !isArray(obj);
};
var valueExists = function valueExists(arrayOptions, needles) {
  if (isArray(needles)) {
    return arrayOptions.some(function (value) {
      return needles.includes(value);
    });
  }
  return arrayOptions.includes(needles);
};
var isVisible = function isVisible(values, props) {
  if (!(props !== null && props !== void 0 && props.rules) || props.name == undefined) {
    return true;
  }
  var whenVar = when(props.rules, values);
  return Boolean(whenVar);
};
var withState = function withState(type) {
  return Boolean(["group", "section"].includes(type));
};
var isEmptyObj = function isEmptyObj(obj) {
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      return false;
    }
  }
  return true;
};
var getIn = function getIn(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }
  var path = toPath(key);
  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }
  return obj === undefined ? def : obj;
};
var sortingFields = function sortingFields(fields) {
  return [].concat(fields).sort(function (a, b) {
    if (a.priority == undefined || b.priority == undefined) return 0;
    return a.priority > b.priority ? 1 : -1;
  });
};
var getSelectedValues = function getSelectedValues(options) {
  return Array.from(options).filter(function (el) {
    return el.selected;
  }).map(function (el) {
    return el.value;
  });
};
var executeChange = function executeChange(eventOrTextValue, maybePath) {
  var field = maybePath;
  var val = eventOrTextValue;
  var parsed;
  if (!isString(eventOrTextValue)) {
    if (eventOrTextValue.persist) {
      eventOrTextValue.persist();
    }
    var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
    var type = target.type,
      name = target.name,
      value = target.value,
      checked = target.checked,
      multiple = target.multiple;
    field = maybePath ? maybePath : name;

    // val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
    //     ? checked : !!multiple ? value : value;

    switch (type) {
      case 'number':
      case 'range':
        parsed = parseFloat(value);
        val = parsed;
        break;
      case 'checkbox':
        val = !!multiple ? value : checked;
        break;
      case 'toggle':
      default:
        val = value;
        break;
    }
  }
  return {
    field: field,
    val: val
  };
};
var objectWithoutPropertiesLoose = function objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
};
var setIn = function setIn(obj, path, value) {
  var res = clone(obj); // this keeps inheritance when obj is a class

  var resVal = res;
  var i = 0;
  var pathArray = toPath(path);
  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn(obj, pathArray.slice(0, i + 1));
    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  } // Return original object if new value is the same as current

  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }
  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  } // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.

  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }
  return res;
};
var validFieldProps = function validFieldProps(defaultProps) {
  var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var type = defaultProps.type;
  var filterOutArray = ['validation_rules', 'default', 'rules', 'meta', 'switch'].concat(_toConsumableArray(exclude));
  if (type !== 'select' && type !== 'checkbox-select' && type !== 'select-async' && type !== 'radio-card' && type !== 'checkbox' && type !== 'toggle' && defaultProps.multiple) {
    filterOutArray.push('options');
  }
  if (type !== 'tab' && type !== 'group' && type !== 'repeater' && type !== 'section' && type !== 'button') {
    filterOutArray.push('fields');
  }
  var validProps = objectWithoutPropertiesLoose(defaultProps, filterOutArray);
  if (defaultProps !== null && defaultProps !== void 0 && defaultProps.label && !(defaultProps !== null && defaultProps !== void 0 && defaultProps.placeholder)) {
    validProps.placeholder = defaultProps.label;
  }
  return validProps;
};
var hitAAJX = function hitAAJX(ajax) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (context !== null && ajax) {
    var isEligible = true;
    if (ajax !== null && ajax !== void 0 && ajax.rules) {
      isEligible = when(ajax === null || ajax === void 0 ? void 0 : ajax.rules, context.values);
    }
    if (isEligible) {
      var data = {};
      Object.keys(ajax.data).map(function (singleData) {
        var _ajax$data$singleData, _ajax$data$singleData2;
        if (((_ajax$data$singleData = (_ajax$data$singleData2 = ajax.data[singleData]).indexOf) === null || _ajax$data$singleData === void 0 ? void 0 : _ajax$data$singleData.call(_ajax$data$singleData2, '@')) > -1) {
          var _context$values;
          var eligibleKey = ajax.data[singleData].substr(1);
          data[singleData] = (_context$values = context.values) === null || _context$values === void 0 ? void 0 : _context$values[eligibleKey];
        } else {
          data[singleData] = ajax.data[singleData];
        }
      });
      return wpFetch({
        path: ajax.api,
        data: data
      }).then(function (response) {
        var _response$data, _response$data2;
        if ((response === null || response === void 0 ? void 0 : response.status) == "success" && response !== null && response !== void 0 && response.redirect) {
          window.location = response === null || response === void 0 ? void 0 : response.redirect;
        }
        var dataContext = response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.context ? response.data.context : response !== null && response !== void 0 && response.context ? response.context : false;
        if (dataContext && isObject(dataContext)) {
          Object.keys(dataContext).map(function (eligibleKey) {
            context.setFieldValue(eligibleKey, dataContext[eligibleKey]);
          });
        }
        if (response !== null && response !== void 0 && (_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.download) {
          var fileName = response.data.filename || 'export.json';
          var fileType = response.data.filetype || 'text/json';
          var _data = response.data.filetype ? response.data.download : JSON.stringify(response.data.download);
          downloadFile({
            data: _data,
            fileName: fileName,
            fileType: fileType
          });
        }
        if (ajax !== null && ajax !== void 0 && ajax.trigger && isString(ajax === null || ajax === void 0 ? void 0 : ajax.trigger)) {
          var at = ajax.trigger.indexOf('@');
          var colon = ajax.trigger.indexOf(":");
          if (at === 0 && colon > 0) {
            var eligibleKey = ajax.trigger.substr(1, colon - 1);
            var eligibleDataToSet = ajax.trigger.substr(colon + 1);
            if (eligibleDataToSet == 'true') {
              eligibleDataToSet = true;
            } else if (eligibleDataToSet == 'false') {
              eligibleDataToSet = false;
            }
            context.setFieldValue(eligibleKey, eligibleDataToSet);
          }
        }
        return response;
      });
    }
  }
  return Promise.reject(false);
};
var getTime = function getTime(value) {
  var _settings$timezone;
  var keepLocalTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var settings = __experimentalGetSettings();
  var _value = moment.utc(value ? value : undefined).utcOffset(+(settings === null || settings === void 0 || (_settings$timezone = settings.timezone) === null || _settings$timezone === void 0 ? void 0 : _settings$timezone.offset), keepLocalTime);
  return _value;
};
var merge = function merge(array_one, array_two, key) {
  // if( ! isArray(array_one) && ! isArray( array_two ) && isObject( array_one ) && isObject( array_two ) ) {
  //     return { ...array_one, ...array_two }
  // }
  var data = _toConsumableArray(array_one);
  var _array_two = array_two.filter(function (element) {
    return data.findIndex(function (_element) {
      return _element[key] === element[key];
    }) <= -1;
  });
  return [].concat(_toConsumableArray(data), _toConsumableArray(_array_two));
};
var downloadFile = function downloadFile(_ref) {
  var data = _ref.data,
    fileName = _ref.fileName,
    fileType = _ref.fileType;
  // Create a blob with the data we want to download as a file
  var blob = new Blob([data], {
    type: fileType
  });
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  var a = document.createElement('a');
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  var clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

var _typeof = function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof$1(Symbol.iterator) === "symbol") {
    return _typeof$1(obj);
  } else {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof$1(obj);
  }
};
var get = function get(obj, path) {
  var defaultValue = (arguments.length <= 2 ? 0 : arguments.length - 2) > 2 && (arguments.length <= 4 ? undefined : arguments[4]) !== undefined ? arguments.length <= 4 ? undefined : arguments[4] : undefined;
  return String.prototype.split.call(path, /[,[\].]+?/).filter(Boolean).reduce(function (a, c) {
    return a && Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue;
  }, obj);
};
var rules = {
  is: function is(key, value, data) {
    return get(data, key) == value;
  },
  "!is": function is(key, value, data) {
    return !rules.is(key, value, data);
  },
  includes: function includes(key, checkAgainst, selectedData) {
    if (!isEmptyObj(selectedData)) {
      var newData = get(selectedData, key);
      if (_typeof(newData) != "function") {
        if (isArray(checkAgainst) && isArray(newData)) {
          var _intersect;
          return (_intersect = intersect(newData, checkAgainst)) === null || _intersect === void 0 ? void 0 : _intersect.length;
        } else if (isArray(checkAgainst) && _typeof(newData) == "string") {
          return checkAgainst.includes(newData);
        } else if (isArray(newData) && _typeof(checkAgainst) == "string") {
          return newData.includes(checkAgainst);
        }
      }
    }
    return false;
  },
  "!includes": function includes(key, value, data) {
    return !rules.includes(key, value, data);
  },
  isOfType: function isOfType(key, value, data) {
    return _typeof(get(data, key)) === value;
  },
  "!isOfType": function isOfType(key, value, data) {
    return !rules.isOfType(key, value, data);
  },
  allOf: function allOf(key, values, data) {
    if (!Array.isArray(values)) {
      throw Error(__('"allOf" condition requires an array as #3 argument', 'betterdocs'));
    }
    var dataValues = get(data, key);
    return values.every(function (currentValue) {
      return dataValues.includes(currentValue);
    });
  },
  anyOf: function anyOf(key, values, data) {
    if (!Array.isArray(values)) {
      throw Error(__('"anyOf" condition requires an array as #3 argument', 'betterdocs'));
    }
    var dataValue = get(data, key);
    return values.includes(dataValue);
  },
  gt: function gt(key, value, data) {
    return get(data, key) > value;
  },
  gte: function gte(key, value, data) {
    return get(data, key) >= value;
  },
  lt: function lt(key, value, data) {
    return get(data, key) < value;
  },
  lte: function lte(key, value, data) {
    return get(data, key) <= value;
  }
};
var logicalRules = {
  and: function and(data) {
    return !data.includes(false);
  },
  or: function or(data) {
    return data.includes(true);
  },
  not: function not(data) {
    if (data.length !== 1) {
      throw Error(__('"not" can have only one comparison rule, multiple rules given', 'betterdocs'));
    }
    return !data[0];
  }
};
var isValidCondition = function isValidCondition(conditions) {
  if (Array.isArray(conditions) && Array.isArray(conditions[1]) && conditions[0] && logicalRules[conditions[0].toLowerCase()]) {
    return true;
  }
  return false;
};
var processRule = function processRule(_ref, data) {
  var condition = _ref[0],
    key = _ref[1],
    value = _ref[2];
  if (typeof condition !== "string" || rules[condition] === undefined) {
    throw Error(sprintf(__("Invalid comparison rule %s.", 'betterdocs'), condition));
  }
  return rules[condition](key, value, data);
};
var processCondition = function processCondition(condition, data) {
  return logicalRules[condition.toLowerCase()](data);
};
var validate = function validate(conditions, data) {
  if (!isValidCondition(conditions)) {
    return processRule(conditions, data);
  }
  var logicalRule = conditions.slice(0, 1)[0];
  var comparisonRules = conditions.slice(1);
  var result = comparisonRules.map(function (condition, index) {
    if (isValidCondition(condition)) {
      return when(condition, data);
    }
    return processRule(condition, data);
  });
  return processCondition(logicalRule, result);
};
var when = function when(conditions, data) {
  if (typeof conditions === "function") {
    return Promise.resolve(conditions(data));
  }
  return validate(conditions, data);
};

function ownKeys$f(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$f(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$f(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_STATE = {
  savedValues: {
    type: "conversions",
    source: "edd"
  },
  values: {
    // source: "woocommerce",
  },
  touched: {},
  errors: {}
};
var actions = {
  setSavedValues: function setSavedValues(payload) {
    return {
      type: "SET_SAVED_VALUES",
      payload: payload
    };
  },
  setFieldValue: function setFieldValue(_ref) {
    var name = _ref.name,
      value = _ref.value;
    return {
      type: "FIELD_VALUE",
      name: name,
      payload: value
    };
  },
  removeFieldValue: function removeFieldValue(payload) {
    return {
      type: "REMOVE_FIELD_VALUE",
      payload: payload
    };
  },
  resetFieldValue: function resetFieldValue(payload) {
    return {
      type: "RESET_FIELD_VALUE",
      payload: payload
    };
  },
  setFieldTouched: function setFieldTouched(payload) {
    return {
      type: "FIELD_TOUCHED",
      payload: payload
    };
  },
  setError: function setError(payload) {
    return {
      type: "FIELD_ERROR",
      payload: payload
    };
  },
  removeError: function removeError(payload) {
    return {
      type: "REMOVE_FIELD_ERROR",
      payload: payload
    };
  }
};
var store = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "SET_SAVED_VALUES":
        {
          var _updatedState = _objectSpread$f({}, state);
          _updatedState = _objectSpread$f(_objectSpread$f({}, _updatedState), {}, {
            values: action.payload,
            savedValues: action.payload
          });
          return _updatedState;
        }
      case "FIELD_VALUE":
        {
          var _updatedState3;
          var _updatedState2 = _objectSpread$f({}, state);
          var payload = action.payload;
          _updatedState2 = _objectSpread$f(_objectSpread$f({}, _updatedState2), {}, {
            values: _objectSpread$f(_objectSpread$f({}, (_updatedState3 = _updatedState2) === null || _updatedState3 === void 0 ? void 0 : _updatedState3.values), payload)
          });
          return _updatedState2;
        }
      case "REMOVE_FIELD_VALUE":
        {
          var _updatedState4$values;
          var _updatedState4 = _objectSpread$f({}, state);
          var _payload = action.payload;
          if ((_updatedState4$values = _updatedState4.values) !== null && _updatedState4$values !== void 0 && _updatedState4$values[_payload]) {
            delete _updatedState4.values[_payload];
          }
          return _updatedState4;
        }
      case "RESET_FIELD_VALUE":
        {
          var _updatedState5$values;
          var _updatedState5 = _objectSpread$f({}, state);
          if ((_updatedState5$values = _updatedState5.values) !== null && _updatedState5$values !== void 0 && _updatedState5$values[action.payload]) {
            var _updatedState5$savedV;
            delete _updatedState5.values[action.payload];
            if ((_updatedState5$savedV = _updatedState5.savedValues) !== null && _updatedState5$savedV !== void 0 && _updatedState5$savedV[action.payload]) {
              _updatedState5.values[action.payload] = _updatedState5.savedValues[action.payload];
            }
          }
          return _updatedState5;
        }
      case "FIELD_ERROR":
        return _objectSpread$f(_objectSpread$f({}, state), {}, {
          errors: _objectSpread$f(_objectSpread$f({}, state.errors), action.payload)
        });
      case "REMOVE_FIELD_ERROR":
        var updatedState = _objectSpread$f({}, state);
        delete updatedState.errors[action.payload];
        return updatedState;
      case "FIELD_TOUCHED":
        return _objectSpread$f(_objectSpread$f({}, state), {}, {
          touched: _objectSpread$f(_objectSpread$f({}, state.touched), action.payload)
        });
    }
    return state;
  },
  actions: actions,
  selectors: {
    getValues: function getValues(state) {
      return state.values;
    },
    getFieldValue: function getFieldValue(state, name) {
      var _state$values;
      return (_state$values = state.values) === null || _state$values === void 0 ? void 0 : _state$values[name];
    },
    getSavedFieldValue: function getSavedFieldValue(state, name, comparisonKey) {
      var _state$savedValues2, _state$values2, _state$savedValues3;
      if (comparisonKey === null) {
        var _state$savedValues;
        return (_state$savedValues = state.savedValues) === null || _state$savedValues === void 0 ? void 0 : _state$savedValues[name];
      }
      return ((_state$savedValues2 = state.savedValues) === null || _state$savedValues2 === void 0 ? void 0 : _state$savedValues2[comparisonKey]) === ((_state$values2 = state.values) === null || _state$values2 === void 0 ? void 0 : _state$values2[comparisonKey]) ? (_state$savedValues3 = state.savedValues) === null || _state$savedValues3 === void 0 ? void 0 : _state$savedValues3[name] : false;
    },
    isTouched: function isTouched(state, current) {
      var _state$touched;
      return (_state$touched = state.touched) === null || _state$touched === void 0 ? void 0 : _state$touched[current];
    },
    getError: function getError(state, current) {
      var _state$errors;
      return (_state$errors = state.errors) === null || _state$errors === void 0 ? void 0 : _state$errors[current];
    },
    isVisible: function isVisible(state, props) {
      if (!props.rules || props.name == undefined) {
        return true;
      }
      var whenVar = when(props.rules, state.values);
      return Boolean(whenVar);
    }
  }
};

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var BuilderContext = /*#__PURE__*/createContext(undefined);
BuilderContext.displayName = process.env.NODE_ENV === 'production' ? 'Anonymous' : 'BuilderContext';
var BuilderProvider = BuilderContext.Provider;
var BuilderConsumer = BuilderContext.Consumer;
function useBuilderContext() {
  var builderContext = useContext(BuilderContext);
  return builderContext;
}

var useOptions = function useOptions(props) {
  var propertyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fields';
  if (!(props !== null && props !== void 0 && props[propertyName])) {
    throw new Error('#options param need to set in order to use useOptions hook.');
  }
  var savedValue = props.value,
    multiple = props.multiple;
  var builderContext = useBuilderContext();
  var _useState = useState(props[propertyName]),
    _useState2 = _slicedToArray(_useState, 2),
    fieldOptions = _useState2[0],
    setFieldOptions = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    lOptions = _useState4[0],
    setOptions = _useState4[1];
  var _useState5 = useState({
      options: null,
      parentIndex: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    isData = _useState6[0],
    setData = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedOption = _useState8[0],
    setSelectedOption = _useState8[1];
  var _useState9 = useState(null),
    _useState10 = _slicedToArray(_useState9, 2),
    option = _useState10[0],
    setOption = _useState10[1];
  useEffect(function () {
    var _builderContext$getTa;
    var newFieldsOptions = props.ajax ? ((_builderContext$getTa = builderContext.getTabFields(props === null || props === void 0 ? void 0 : props.parentIndex)) === null || _builderContext$getTa === void 0 ? void 0 : _builderContext$getTa[propertyName]) || fieldOptions : fieldOptions;
    // console.log(props.name, newFieldsOptions);
    // console.log(props.name, 'old', fieldOptions);
    /**
     * old Options is => fieldOptions, L28, 29, 30 ( remove )
     * if there is any issue with other fields, then it should be for AJAX on Select only.
     */
    setOptions(builderContext.eligibleOptions(newFieldsOptions));
    setSelectedOption(builderContext.eligibleOption(newFieldsOptions, savedValue, multiple !== null && multiple !== void 0 ? multiple : false));
  }, [savedValue, fieldOptions]);
  useEffect(function () {
    setFieldOptions(props[propertyName]);
    setOptions(builderContext.eligibleOptions(props[propertyName]));
  }, [props]);
  useEffect(function () {
    setOptions(builderContext.eligibleOptions(fieldOptions));
  }, [fieldOptions]);
  useEffect(function () {
    if (isData.options != null) {
      // builderContext.setFormField(isData.parentIndex, [...props[propertyName], ...isData.options])
      // setOptions(builderContext.eligibleOptions(isData.options));
      setFieldOptions(isData.options);
    }
  }, [isData]);
  useEffect(function () {
    if (selectedOption != null) {
      var opt;
      if (!multiple) {
        opt = selectedOption.value || savedValue;
      } else {
        opt = isArray(selectedOption) && selectedOption.map(function (o) {
          return o.value;
        }) || savedValue;
      }
      setOption(opt);
    }
  }, [selectedOption]);
  useEffect(function () {
    if (lOptions.filter(function (opt) {
      return opt.value === option;
    }).length === 0) {
      var _options$;
      var _options = sortingFields(lOptions);
      setOption((_options === null || _options === void 0 || (_options$ = _options[0]) === null || _options$ === void 0 ? void 0 : _options$.value) || savedValue);
    }
  }, [option, lOptions]);
  var options = sortingFields(lOptions);
  return {
    options: options,
    option: option,
    selectedOption: selectedOption,
    setOptions: setOptions,
    setData: setData,
    setSelectedOption: setSelectedOption
  };
};

var useTrigger = function useTrigger(props) {
  var builderContext = props.context;
  if (props !== null && props !== void 0 && props.trigger && isArray(props === null || props === void 0 ? void 0 : props.trigger)) {
    props === null || props === void 0 || props.trigger.map(function (trigger) {
      var triggerType = (trigger === null || trigger === void 0 ? void 0 : trigger.type) || 'setFieldValue';
      if (trigger !== null && trigger !== void 0 && trigger.action && isObject(trigger === null || trigger === void 0 ? void 0 : trigger.action)) {
        for (var key in trigger === null || trigger === void 0 ? void 0 : trigger.action) {
          var eligibleKey = key;
          if (eligibleKey.indexOf(".") > -1) {
            eligibleKey = eligibleKey.split('.');
          }
          var eligibleData = trigger === null || trigger === void 0 ? void 0 : trigger.action[key];
          // let eligibleDefaultData = builderContext.getFieldHelpers().getValueForDefault( eligibleKey, props.name );
          // data should be nullable.
          if (eligibleKey != "") {
            // && eligibleData !== ""
            builderContext[triggerType](eligibleKey, eligibleData); //eligibleDefaultData ? eligibleDefaultData :
          }
        }
      }
    });
  }
};

var useDefaults = function useDefaults(parentName, helpers, value, trigger) {
  if (trigger != undefined && (trigger === null || trigger === void 0 ? void 0 : trigger.defaults) != undefined && !isEmptyObj(trigger.defaults)) {
    var defaults = trigger.defaults;
    if (defaults != undefined && !isEmptyObj(defaults)) {
      var defaultsData = {};
      if (defaults !== null && defaults !== void 0 && defaults[value] && isString(defaults === null || defaults === void 0 ? void 0 : defaults[value])) {
        var at = defaults[value].indexOf("@"),
          colon = defaults[value].indexOf(":");
        if (at === 0 && colon > 0) {
          var eligibleKey = defaults[value].substr(1, colon - 1);
          var eligibleDataToSet = defaults[value].substr(colon + 1);
          var eligibleDefaultData = helpers.getValueForDefault(eligibleKey, parentName);
          if (eligibleKey != "" && eligibleDataToSet != "") {
            eligibleDataToSet = eligibleDataToSet === 'false' ? false : eligibleDataToSet;
            defaultsData[eligibleKey] = eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet;
            helpers.setValue(eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet);
          }
        }
      } else if (defaults !== null && defaults !== void 0 && defaults[value] && (isArray(defaults[value]) || isObject(defaults[value]))) {
        for (var property in defaults[value]) {
          var eachKey = defaults[value][property];
          if (eachKey && (isArray(eachKey) || isObject(eachKey))) {
            var _eligibleDefaultData = helpers.getValueForDefault(property, parentName);
            if (property != "" && eachKey != "") {
              eachKey = eachKey === 'false' ? false : eachKey;
              defaultsData[property] = _eligibleDefaultData ? _eligibleDefaultData : eachKey;
              helpers.setValue(property, _eligibleDefaultData ? _eligibleDefaultData : eachKey);
            }
          } else if (eachKey) {
            var _at = eachKey.indexOf("@"),
              _colon = eachKey.indexOf(":");
            if (_at === 0 && _colon > 0) {
              var _eligibleKey = eachKey.substr(1, _colon - 1);
              var _eligibleDataToSet = eachKey.substr(_colon + 1);
              if (eachKey.indexOf(".") > -1) {
                _eligibleKey = _eligibleKey.split('.');
              }
              var _eligibleDefaultData2 = helpers.getValueForDefault(_eligibleKey, parentName);
              if (_eligibleKey != "" && _eligibleDataToSet != "") {
                _eligibleDataToSet = _eligibleDataToSet === 'false' ? false : _eligibleDataToSet;
                defaultsData[_eligibleKey] = _eligibleDefaultData2 ? _eligibleDefaultData2 : _eligibleDataToSet;
                helpers.setValue(_eligibleKey, _eligibleDefaultData2 ? _eligibleDefaultData2 : _eligibleDataToSet);
              }
            }
          }
        }
      }
      return {
        defaultsData: defaultsData
      };
    }
  }
};

function ownKeys$e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$e(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// import store from "../store";

var SweetAlert = function SweetAlert() {
  var _args$target, _args$type, _args$title, _args$text, _args$icon, _args$timer;
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Swal.fire(_objectSpread$e({
    target: (_args$target = args === null || args === void 0 ? void 0 : args.target) !== null && _args$target !== void 0 ? _args$target : "#betterdocs",
    type: (_args$type = args === null || args === void 0 ? void 0 : args.type) !== null && _args$type !== void 0 ? _args$type : "success",
    html: args === null || args === void 0 ? void 0 : args.html,
    title: (_args$title = args === null || args === void 0 ? void 0 : args.title) !== null && _args$title !== void 0 ? _args$title : __("Title Goes Here: title", 'betterdocs'),
    text: (_args$text = args === null || args === void 0 ? void 0 : args.text) !== null && _args$text !== void 0 ? _args$text : __("Test Goes Here: text", 'betterdocs'),
    icon: (_args$icon = args === null || args === void 0 ? void 0 : args.icon) !== null && _args$icon !== void 0 ? _args$icon : (args === null || args === void 0 ? void 0 : args.type) || "success",
    timer: (_args$timer = args === null || args === void 0 ? void 0 : args.timer) !== null && _args$timer !== void 0 ? _args$timer : null
  }, args));
};
var ObjectFilter = function ObjectFilter(thisObj, func) {
  var returnArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!thisObj) {
    return false;
  }
  var newObj = {};
  var newArr = Object.keys(thisObj).filter(function (item) {
    return func(item);
  });
  if (returnArr) {
    return newArr;
  } else {
    newArr.map(function (item) {
      newObj[item] = thisObj[item];
    });
  }
  return newObj;
};
var isExists = function isExists(args, value) {
  var typeOfargs = _typeof$1(args);
  switch (true) {
    case typeOfargs === "object" && isArray(args):
      return args.includes(value);
    case typeOfargs === "object" && !isArray(args):
      return (args === null || args === void 0 ? void 0 : args[value]) !== undefined;
    default:
      return args === value;
  }
};
var triggerDefaults = function triggerDefaults(defaults, checkType) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (!isEmptyObj(defaults) && _typeof$1(defaults) === "object") {
    for (var obj in defaults) {
      if (obj === value) {
        var at = defaults[obj].indexOf("@"),
          colon = defaults[obj].indexOf(":");
        if (at === 0 && colon > 0) {
          var eligibleKey = defaults[obj].substr(1, colon - 1);
          var eligibleDataToSet = defaults[obj].substr(colon + 1);
          var eligibleDefaultData = getStoreData().getSavedFieldValue(eligibleKey, checkType);
          if (eligibleKey != "" && eligibleDataToSet != "") {
            setStoreData().setFieldValue({
              name: eligibleKey,
              value: _defineProperty({}, eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet)
            });
          }
        }
      }
    }
  }
};

/**
 * API Fetch for WP
 * @param {object} args
 */
var getStoreData = function getStoreData() {
  return select("formbuilder");
};
var setStoreData = function setStoreData() {
  return dispatch("formbuilder");
};
var processAjaxData = function processAjaxData(data) {
  var newData = {};
  Object.keys(data).map(function (item) {
    if (data[item].indexOf("@") === 0) {
      var eligibleKey = data[item].substr(1);
      if (eligibleKey != "") {
        var eligibleData = getStoreData().getFieldValue(eligibleKey);
        if (eligibleData) {
          newData[item] = eligibleData;
        } else {
          newData[item] = "undefined";
        }
      }
    } else {
      newData[item] = data[item];
    }
  });
  return newData;
};
function _extends() {
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < rest.length; i++) {
      var source = rest[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, rest);
}

// export const timezoneString = ($offset) => {
//     let $hours     = Math.trunc($offset);
//     let $minutes   = ( $offset - $hours );
//     let $sign      = ( $offset < 0 ) ? '-' : '+';
//     let $abs_hour  = Math.abs( $hours );
//     let $abs_mins  = Math.abs( $minutes * 60 );
//     let $tz_offset = $sign + pad2($abs_hour) + ':' + pad2($abs_mins) );
//     return $tz_offset;
// }

// export function pad2(number) {
//     return (number < 10 ? '0' : '') + number
// }

function ownKeys$d(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$d(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$d(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var builderReducer = function builderReducer(state, action) {
  switch (action.type) {
    case 'SET_CONTEXT':
      return _extends({}, state, setIn(state, action.payload.field, action.payload.value));
    case 'SET_ACTIVE_TAB':
      return _objectSpread$d(_objectSpread$d({}, state), {}, {
        config: _objectSpread$d(_objectSpread$d({}, state.config), {}, {
          active: action.payload
        })
      });
    case 'SET_REDIRECT':
      return _objectSpread$d(_objectSpread$d({}, state), {}, {
        redirect: _objectSpread$d(_objectSpread$d({}, state.redirect), action.payload)
      });
    case 'SET_VALUES':
      return _extends({}, state, setIn(state, 'values', action.payload));
    case 'SET_SAVED_VALUES':
      return _extends({}, state, setIn(state, 'savedValues', action.payload));
    case 'SET_FIELD_VALUE':
      return _extends({}, state, {
        values: setIn(state.values, action.payload.field, action.payload.value)
      });
    case 'SET_TOUCHED':
      return _extends({}, state, {
        touched: action.payload
      });
    case 'SET_ERRORS':
      // if (isEqual(state.errors, action.payload)) {
      //     return state;
      // }

      return _extends({}, state, {
        errors: action.payload
      });
    case 'SET_STATUS':
      return _extends({}, state, {
        status: action.payload
      });
    case 'SET_ISSUBMITTING':
      return _objectSpread$d(_objectSpread$d({}, state), {}, {
        isSubmitting: action.payload
      });
    case 'SET_ISVALIDATING':
      return _extends({}, state, {
        isValidating: action.payload
      });
    case 'SET_FIELD_TOUCHED':
      return _objectSpread$d(_objectSpread$d({}, state), {}, {
        touched: _objectSpread$d(_objectSpread$d({}, state.touched), {}, _defineProperty({}, action.payload.field, action.payload.value))
      });

    // return _extends({}, state, {
    //     touched: setIn(state.touched, action.payload.field, action.payload.value)
    // });

    case 'SET_FIELD_ERROR':
    // return _extends({}, state, {
    //     errors: setIn(state.errors, action.payload.field, action.payload.value)
    // });

    case 'RESET_FORM':
      return _extends({}, state, action.payload);
    case 'SUBMIT_ATTEMPT':
      return _extends({}, state, {
        // touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });
    case 'SUBMIT_FAILURE':
      return _extends({}, state, {
        isSubmitting: false
      });
    case 'SUBMIT_SUCCESS':
      return _extends({}, state, {
        isSubmitting: false
      });
    // Tabs Fields SET
    case 'SET_FORM_FIELD':
      if (action.payload.field === null) {
        return _extends({}, state, setIn(state, 'tabs', action.payload.value));
      }
      return _extends({}, state, {
        tabs: setIn(state.tabs, action.payload.field, action.payload.value)
      });
    case 'SET_ICONS':
      return _extends({}, state, {
        icons: setIn(state.icons, action.payload.name, action.payload.icons)
      });
    case 'SET_ALERTS':
      return _extends({}, state, {
        alerts: setIn(state.alerts, action.payload.name, action.payload.value)
      });
    case 'SET_COMMONS':
      return _extends({}, state, {
        common: setIn(state.common, action.payload.name, action.payload.value)
      });
    default:
      return state;
  }
};

function ownKeys$c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$c(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useBuilder = function useBuilder(props) {
  var _state$isSubmitting;
  // Set is Mounted or NOT
  var isMounted = useRef(false);
  useEffect(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  var _useReducer = useReducer(builderReducer, _objectSpread$c(_objectSpread$c({}, props), {}, {
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
      (_state$alerts = state.alerts) === null || _state$alerts === void 0 || (_state$alerts = _state$alerts.pro_alert(validProps === null || validProps === void 0 ? void 0 : validProps.popup)) === null || _state$alerts === void 0 || _state$alerts.fire();
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
    var defaultProps = _objectSpread$c({}, args);
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
    return _objectSpread$c(_objectSpread$c({}, props.meta), {}, {
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
  var context = _objectSpread$c(_objectSpread$c(_objectSpread$c({}, props), state), {}, {
    setContext: setContext,
    values: state.values,
    savedValues: state.savedValues,
    errors: state.errors,
    touched: state.touched,
    isSubmitting: (_state$isSubmitting = state === null || state === void 0 ? void 0 : state.isSubmitting) !== null && _state$isSubmitting !== void 0 ? _state$isSubmitting : false,
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

var Row = function Row(props) {
  var componentClasses = classNames("wprf-row clearfix wprf-flex", props === null || props === void 0 ? void 0 : props.className);
  return createElement("div", {
    className: componentClasses
  }, props === null || props === void 0 ? void 0 : props.children);
};

var Column = function Column(props) {
  var _classNames;
  var componentClasses = classNames("wprf-column", props === null || props === void 0 ? void 0 : props.className, (_classNames = {}, _defineProperty(_classNames, "wprf-column-".concat(12 / (props === null || props === void 0 ? void 0 : props.column)), (props === null || props === void 0 ? void 0 : props.column) && props.column !== 12), _defineProperty(_classNames, "wprf-column-12", props.column === 12), _classNames));
  return createElement("div", {
    className: componentClasses
  }, props === null || props === void 0 ? void 0 : props.children);
};

var Label = function Label(props) {
  var _props$badge, _props$badge2, _props$badge3;
  var componentClasses = classNames("wprf-input-label", props === null || props === void 0 ? void 0 : props.className);
  return createElement("label", {
    htmlFor: props === null || props === void 0 ? void 0 : props.htmlFor,
    className: componentClasses
  }, (props === null || props === void 0 || (_props$badge = props.badge) === null || _props$badge === void 0 ? void 0 : _props$badge.value) && createElement("div", {
    className: "wprf-badge"
  }, createElement("sup", {
    className: classNames("wprf-badge-item", {
      'wprf-badge-active': props === null || props === void 0 || (_props$badge2 = props.badge) === null || _props$badge2 === void 0 ? void 0 : _props$badge2.active
    })
  }, props === null || props === void 0 || (_props$badge3 = props.badge) === null || _props$badge3 === void 0 ? void 0 : _props$badge3.label)), !(props !== null && props !== void 0 && props.src) && (props === null || props === void 0 ? void 0 : props.children), (props === null || props === void 0 ? void 0 : props.src) && createElement(Image, {
    className: "wprf-label-image",
    src: props.src,
    alt: props === null || props === void 0 ? void 0 : props.label
  }));
};

var Image = function Image(props) {
  if (!(props !== null && props !== void 0 && props.src)) {
    return createElement("p", null, "No Source( src ) Defined");
  }
  var componentClasses = classNames(["wprf-input-image", props === null || props === void 0 ? void 0 : props.className]);
  return createElement("img", {
    className: componentClasses,
    src: props === null || props === void 0 ? void 0 : props.src,
    alt: props === null || props === void 0 ? void 0 : props.alt
  });
};

var BadgeComp = function BadgeComp(_ref) {
  var componentClasses = _ref.componentClasses,
    label = _ref.label;
  return createElement("div", {
    className: "wprf-badge"
  }, createElement("span", {
    className: "wprf-badge-icon"
  }, createElement("i", {
    className: "btd-icon btd-crown"
  })), createElement("span", {
    className: componentClasses
  }, label));
};
var Badge = function Badge(props) {
  var builderContext = useBuilderContext();
  var label = props.label,
    active = props.active,
    _props$position = props.position,
    position = _props$position === void 0 ? "right" : _props$position,
    renderLabel = props.renderLabel,
    renderComponent = props.renderComponent;
  if (label === undefined) {
    label = "Pro";
  }
  var componentClasses = classNames("wprf-badge-item", {
    "wprf-badge-active": active
  });
  var componentProps = {};
  if (!builderContext.is_pro_active) {
    componentProps = {
      onClick: function onClick(e) {
        e.preventDefault();
        builderContext.alerts.pro_alert(props === null || props === void 0 ? void 0 : props.popup).fire();
      }
    };
  }
  return createElement("div", _extends$1({
    className: classNames("wprf-badge-wrapper", {
      "pro-deactivated": !builderContext.is_pro_active
    })
  }, componentProps), position === "left" && label.length > 0 && createElement(Fragment, null, renderLabel(createElement(BadgeComp, {
    componentClasses: componentClasses,
    label: label
  }), "left")), position === "right" && label.length > 0 && createElement(Fragment, null, renderLabel(createElement(BadgeComp, {
    componentClasses: componentClasses,
    label: label
  }), "right")), renderComponent());
};

var _excluded$4 = ["id", "label", "badge", "badgePosition", "context"];
var ControlLabel = function ControlLabel(props) {
  var _context$icons;
  var id = props.id,
    label = props.label,
    badge = props.badge,
    badgePosition = props.badgePosition,
    context = props.context,
    rest = _objectWithoutProperties(props, _excluded$4);
  if (!(label && label.length > 0)) {
    return null;
  }

  /**
   * Icon need to be fixed
   * context?.icons?.[rest?.icon] through context
   */

  return createElement("div", {
    className: "wprf-control-label"
  }, badge ? createElement("div", {
    className: "wprf-label-with-badge"
  }, badgePosition == "left" && badge, createElement("label", {
    htmlFor: id
  }, label), badgePosition == "right" && badge) : createElement("label", {
    htmlFor: id
  }, label), (rest === null || rest === void 0 ? void 0 : rest.label_subtitle) && createElement("p", {
    className: "wprf-label-subtitle",
    dangerouslySetInnerHTML: {
      __html: rest === null || rest === void 0 ? void 0 : rest.label_subtitle
    }
  }), (rest === null || rest === void 0 ? void 0 : rest.link) && createElement("a", {
    rel: "nofollow",
    target: "_blank",
    href: rest.link
  }, context === null || context === void 0 || (_context$icons = context.icons) === null || _context$icons === void 0 ? void 0 : _context$icons.link));
};

var ControlField = function ControlField(_ref) {
  var position = _ref.position,
    descriptionText = _ref.description,
    renderComponent = _ref.renderComponent,
    help = _ref.help,
    _ref$enableDisableAct = _ref.enableDisableActive,
    enableDisableActive = _ref$enableDisableAct === void 0 ? false : _ref$enableDisableAct,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? undefined : _ref$type,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? false : _ref$value;
  var _useState = useState(descriptionText),
    _useState2 = _slicedToArray(_useState, 2),
    description = _useState2[0],
    setDescription = _useState2[1];
  useEffect(function () {
    if (type === "toggle" && enableDisableActive) {
      if (value) {
        setDescription("".concat(__("Enabled", "betterdocs"), " ").concat(descriptionText !== null && descriptionText !== void 0 ? descriptionText : ""));
      } else {
        setDescription("".concat(__("Disabled", "betterdocs"), " ").concat(descriptionText !== null && descriptionText !== void 0 ? descriptionText : ""));
      }
    }
  }, [value]);
  return createElement("div", {
    className: "wprf-control-field"
  }, position === "left" && description && createElement("p", {
    className: "wprf-description",
    dangerouslySetInnerHTML: {
      __html: description
    }
  }), renderComponent(), position === "right" && description && createElement("p", {
    className: "wprf-description",
    dangerouslySetInnerHTML: {
      __html: description
    }
  }), help && createElement("p", {
    className: "wprf-help",
    dangerouslySetInnerHTML: {
      __html: help
    }
  }));
};

var _excluded$3 = ["label", "id", "name", "type", "style", "is_pro", "badge", "value", "enable_disable_text_active"];
function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

// import { useInstanceId } from "@wordpress/compose";

var withLabel = function withLabel(WrappedComponent) {
  var WithLabel = function WithLabel(props) {
    var _styles$label, _styles$label$positio, _styles$label2, _classNames, _styles$description2;
    var label = props.label,
      id = props.id,
      name = props.name,
      type = props.type,
      prevStyle = props.style,
      is_pro = props.is_pro,
      badge = props.badge,
      value = props.value,
      _props$enable_disable = props.enable_disable_text_active,
      enable_disable_text_active = _props$enable_disable === void 0 ? false : _props$enable_disable,
      rest = _objectWithoutProperties(props, _excluded$3);
    // const instanceId = useInstanceId(withLabel);

    if (id == undefined) {
      id = name;
    }
    var styles = _objectSpread$b({
      description: {
        position: "right"
      }
    }, prevStyle);
    var styleClasses = classNames((_classNames = {}, _defineProperty(_classNames, "wprf-style-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type) || false), _defineProperty(_classNames, "wprf-label-none", label === undefined || label === "" || label.length === 0), _defineProperty(_classNames, "wprf-".concat((styles === null || styles === void 0 || (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position) || "inline", "-label"), ((_styles$label$positio = styles === null || styles === void 0 || (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position) !== null && _styles$label$positio !== void 0 ? _styles$label$positio : true) && label != undefined), _classNames));
    if (type === "hidden") {
      return createElement(WrappedComponent, _extends$1({}, props, {
        id: id
      }));
    }
    var validProps = validFieldProps(props, ["description", "label", "help", "style"]);
    var componentClasses = classNames("wprf-control-wrapper", "wprf-type-".concat(type), styleClasses, props === null || props === void 0 ? void 0 : props.classes, _defineProperty({}, "wprf-name-".concat(name), name));
    return createElement("div", {
      className: componentClasses
    }, is_pro == true && createElement(Fragment, null, createElement(Badge, _extends$1({}, badge, rest, {
      renderLabel: function renderLabel(badge, position) {
        return createElement(ControlLabel, _extends$1({}, validProps, {
          context: rest === null || rest === void 0 ? void 0 : rest.context,
          id: id,
          label: label,
          badge: badge,
          badgePosition: position
        }));
      },
      renderComponent: function renderComponent() {
        var _styles$description;
        return createElement(ControlField, {
          help: null,
          description: props === null || props === void 0 ? void 0 : props.description,
          position: styles === null || styles === void 0 || (_styles$description = styles.description) === null || _styles$description === void 0 ? void 0 : _styles$description.position,
          type: type,
          value: value,
          enableDisableActive: enable_disable_text_active,
          renderComponent: function renderComponent() {
            return createElement(WrappedComponent, _extends$1({}, validProps, {
              disable: true,
              id: id
            }));
          }
        });
      }
    })), (props === null || props === void 0 ? void 0 : props.help) && createElement("div", {
      className: "wprf-badge-wrapper"
    }, createElement("div", {
      className: "wprf-control-label"
    }), createElement("div", {
      className: "wprf-control-field"
    }, createElement("p", {
      className: "wprf-help",
      dangerouslySetInnerHTML: {
        __html: props.help
      }
    })))), (is_pro == false || is_pro == undefined) && createElement(Fragment, null, label && label.length > 0 && createElement(ControlLabel, _extends$1({}, validProps, {
      context: rest === null || rest === void 0 ? void 0 : rest.context,
      label: label,
      id: id
    })), createElement(ControlField, {
      help: props === null || props === void 0 ? void 0 : props.help,
      description: props === null || props === void 0 ? void 0 : props.description,
      position: styles === null || styles === void 0 || (_styles$description2 = styles.description) === null || _styles$description2 === void 0 ? void 0 : _styles$description2.position,
      type: type,
      value: value,
      enableDisableActive: enable_disable_text_active,
      renderComponent: function renderComponent() {
        return createElement(WrappedComponent, _extends$1({}, validProps, {
          id: id
        }));
      }
    })));
  };
  return WithLabel;
};

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
      if (meta.visible && isFieldMounted.current[props.name]) {
        // Not needed / Confused
        if (!isGeneric && field.type !== 'group') {
          helpers.setValue(field.name, field.value);
        } else {
          var parent = props === null || props === void 0 ? void 0 : props.parent;
          var parenttype = props === null || props === void 0 ? void 0 : props.parenttype;
          if (parent && parenttype === 'group' && field.value) {
            helpers.setValue([parent, field.name], field.value);
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

var Action = function Action(props) {
  return createElement(Fragment, null, applyFilters(props.action, '', props));
};

var Button = function Button(props) {
  var _props$text, _props$text2, _props$text3;
  if (!(props !== null && props !== void 0 && props.text) && (props === null || props === void 0 ? void 0 : props.group) !== true) {
    throw new Error(__("Button has a required params #text.", "betterdocs"));
  }
  var validProps = validFieldProps(props, ["is_pro", "visible", "disable", "parentIndex", "context", "onBlur", "value", "ajax", "text"]);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var handleClick = function handleClick(event) {
    if (props !== null && props !== void 0 && props.ajax) {
      setIsLoading(true);
      hitAAJX(props.ajax, props.context).then(function (res) {
        var _props$ajax, _props$ajax5;
        setIsLoading(false);
        if ((res === null || res === void 0 ? void 0 : res.status) == "error") {
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        }
        props.onChange({
          target: {
            type: "button",
            name: props.name,
            value: true
          }
        });
        if (!((_props$ajax = props.ajax) !== null && _props$ajax !== void 0 && _props$ajax.hideSwal)) {
          var _props$ajax2, _props$ajax3, _props$ajax4;
          var type = ((_props$ajax2 = props.ajax) === null || _props$ajax2 === void 0 || (_props$ajax2 = _props$ajax2.swal) === null || _props$ajax2 === void 0 ? void 0 : _props$ajax2.icon) || "success";
          var message = ((_props$ajax3 = props.ajax) === null || _props$ajax3 === void 0 || (_props$ajax3 = _props$ajax3.swal) === null || _props$ajax3 === void 0 ? void 0 : _props$ajax3.text) || "Complete";
          props.context.alerts.toast(type, message, {
            autoClose: (_props$ajax4 = props.ajax) === null || _props$ajax4 === void 0 || (_props$ajax4 = _props$ajax4.swal) === null || _props$ajax4 === void 0 ? void 0 : _props$ajax4.autoClose
          });
        }
        if ((_props$ajax5 = props.ajax) !== null && _props$ajax5 !== void 0 && _props$ajax5.reload) {
          if (typeof props.ajax.reload === "boolean" && props.ajax.reload) {
            setTimeout(function () {
              return window.location.reload();
            }, 1000);
          } else if (typeof props.ajax.reload === "string") {
            window.location.href = props.ajax.reload;
          }
        }
      })["catch"](function (err) {
        var _props$ajax6;
        console.error("Error In Button Called", props.name, err);
        setIsLoading(false);
        //TODO: need to be fixed.
        props.onChange({
          target: {
            type: "button",
            name: props.name,
            value: false
          }
        });
        if (!((_props$ajax6 = props.ajax) !== null && _props$ajax6 !== void 0 && _props$ajax6.hideSwal)) {
          props.context.alerts.toast("error", (err === null || err === void 0 ? void 0 : err.message) || __("Something went wrong.", "betterdocs"));
        }
      });
    }
    props !== null && props !== void 0 && props.onClick ? props === null || props === void 0 ? void 0 : props.onClick(event) : useTrigger(props);
  };
  if (props !== null && props !== void 0 && props.href) {
    return createElement("a", {
      href: (props === null || props === void 0 ? void 0 : props.href) === -1 ? props === null || props === void 0 ? void 0 : props.value : props === null || props === void 0 ? void 0 : props.href,
      target: props === null || props === void 0 ? void 0 : props.target,
      className: classNames("wprf-control wprf-button wprf-href-btn", props === null || props === void 0 ? void 0 : props.classes)
    }, props === null || props === void 0 ? void 0 : props.text);
  }
  if (props !== null && props !== void 0 && props.group) {
    var allFields = props.fields.map(function (item, index) {
      var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ["fields", index]);
      return createElement(Field$1, _extends$1({
        key: item.name
      }, item, {
        parentIndex: parentIndex
      }));
    });
    return createElement("div", {
      className: "wprf-control wprf-button-group wprf-flex"
    }, allFields);
  }
  return createElement(Fragment, null, createElement("button", _extends$1({}, validProps, {
    name: props.name,
    disabled: isLoading,
    onClick: handleClick,
    className: classNames("wprf-control wprf-button wprf-btn", props === null || props === void 0 ? void 0 : props.classes)
  }), isObject(props === null || props === void 0 ? void 0 : props.text) && props !== null && props !== void 0 && props.ajax ? isLoading ? props === null || props === void 0 || (_props$text = props.text) === null || _props$text === void 0 ? void 0 : _props$text.loading : props.value ? props === null || props === void 0 || (_props$text2 = props.text) === null || _props$text2 === void 0 ? void 0 : _props$text2.saved : props === null || props === void 0 || (_props$text3 = props.text) === null || _props$text3 === void 0 ? void 0 : _props$text3.normal : props === null || props === void 0 ? void 0 : props.text));
};
var Button$1 = withLabel(Button);

var CheckboxSelect = function CheckboxSelect(props) {
  var builderContext = useBuilderContext();
  var id = props.id,
    name = props.name,
    multiple = props.multiple,
    placeholder = props.placeholder,
    _props$search = props.search,
    search = _props$search === void 0 ? false : _props$search,
    onChange = props.onChange,
    parentIndex = props.parentIndex;
  var _useOptions = useOptions(props, "options"),
    options = _useOptions.options,
    selectedOption = _useOptions.selectedOption,
    setData = _useOptions.setData,
    setSelectedOption = _useOptions.setSelectedOption;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    sOption = _useState2[0],
    setSOption = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAjaxComplete = _useState6[0];
    _useState6[1];
  var handleMenuOpen = function handleMenuOpen() {
    // AJAX
    if (props.ajax && (!props.ajax.rules || when(props.ajax.rules, builderContext.values))) {
      setIsLoading(true);
      var data = {};
      Object.keys(props === null || props === void 0 ? void 0 : props.ajax.data).map(function (singleData) {
        if ((props === null || props === void 0 ? void 0 : props.ajax.data[singleData].indexOf("@")) > -1) {
          var _builderContext$value;
          var eligibleKey = props === null || props === void 0 ? void 0 : props.ajax.data[singleData].substr(1);
          data[singleData] = (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[eligibleKey];
        } else {
          data[singleData] = props === null || props === void 0 ? void 0 : props.ajax.data[singleData];
        }
      });
      if (!isAjaxComplete) {
        return wpFetch({
          path: props === null || props === void 0 ? void 0 : props.ajax.api,
          data: data
        }).then(function (response) {
          setIsLoading(false);
          var arrayMerge = merge(props.options, response, "value");
          builderContext.setFormField([].concat(_toConsumableArray(parentIndex), ["options"]), arrayMerge);
          setData({
            // @ts-ignore
            options: arrayMerge,
            // @ts-ignore
            parentIndex: [].concat(_toConsumableArray(parentIndex), ["options"])
          });
          // setIsAjaxComplete(true);
          return response;
        });
      }
    }
  };
  var handleMenuClose = function handleMenuClose() {
    setIsLoading(false);
  };
  useEffect(function () {
    if (!isArray(sOption) && isObject(sOption)) {
      onChange({
        target: {
          type: "select",
          name: name,
          // @ts-ignore
          value: sOption.value,
          options: options,
          multiple: multiple
        }
      });
    }
    if (isArray(sOption)) {
      onChange({
        target: {
          type: "select",
          name: name,
          // @ts-ignore
          value: sOption.map(function (item) {
            return item.value;
          }),
          options: options,
          multiple: multiple
        }
      });
    }
  }, [sOption]);
  useEffect(function () {
    handleMenuOpen();
  }, []);
  useEffect(function () {
    if (props !== null && props !== void 0 && props.menuOpen) {
      handleMenuOpen();
    }
  }, [props === null || props === void 0 ? void 0 : props.menuOpen]);
  var handleOptionChange = useCallback(function (option) {
    var _props$filterValue;
    if (isArray(option) && (props === null || props === void 0 || (_props$filterValue = props.filterValue) === null || _props$filterValue === void 0 ? void 0 : _props$filterValue.length) > 0) {
      var _props$filterValue2;
      var origialValues = option;
      var values = origialValues;
      var filterValue = (_props$filterValue2 = props === null || props === void 0 ? void 0 : props.filterValue) !== null && _props$filterValue2 !== void 0 ? _props$filterValue2 : ["all"];
      if (!isArray(filterValue)) {
        filterValue = [filterValue];
      }
      if ((origialValues === null || origialValues === void 0 ? void 0 : origialValues.length) > 1 && valueExists(origialValues.map(function (item) {
        return item.value;
      }), filterValue)) {
        values = origialValues.filter(function (item) {
          return !filterValue.includes(item === null || item === void 0 ? void 0 : item.value);
        });
      }
      option = values;
    }
    setSOption(option);
    setSelectedOption(option);
  }, [name, id, parentIndex]);
  var removeSelection = function removeSelection(item) {
    // @ts-ignore
    var newSelectedOptions = selectedOption.filter(function (option) {
      return (option === null || option === void 0 ? void 0 : option.value) != (item === null || item === void 0 ? void 0 : item.value);
    });
    setSOption(newSelectedOptions);
    setSelectedOption(newSelectedOptions);
  };
  return createElement("div", {
    className: "wprf-checkbox-select-wrapper"
  }, createElement(ReactSelect, {
    isDisabled: props === null || props === void 0 ? void 0 : props.disable,
    className: "wprf-checkbox-select",
    classNamePrefix: "wprf-checkbox-select",
    isSearchable: search !== null && search !== void 0 ? search : false,
    id: id,
    isClearable: false,
    name: name,
    isMulti: multiple !== null && multiple !== void 0 ? multiple : false,
    placeholder: placeholder,
    isLoading: isLoading,
    options: options,
    value: selectedOption,
    onMenuOpen: handleMenuOpen,
    onMenuClose: handleMenuClose,
    isOptionDisabled: function isOptionDisabled(option) {
      return option === null || option === void 0 ? void 0 : option.disabled;
    },
    onChange: handleOptionChange // option or options
    ,
    closeMenuOnSelect: false,
    hideSelectedOptions: false,
    autoFocus: false,
    controlShouldRenderValue: false
  }), selectedOption !== null && selectedOption !== void 0 && selectedOption.length ? createElement("ul", {
    className: "wprf-selected-options"
  }, selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.map(function (item, index) {
    return createElement("li", {
      key: item === null || item === void 0 ? void 0 : item.label,
      className: "wprf-selected-option wprf-selected-option-".concat(index % 6 + 1)
    }, item === null || item === void 0 ? void 0 : item.label, createElement("button", {
      type: "button",
      className: "wprf-remove-button",
      onClick: function onClick() {
        return removeSelection(item);
      }
    }, createElement("i", {
      className: "btd-icon btd-close-fill"
    })));
  })) : "");
};
var CheckboxSelect$1 = withLabel(CheckboxSelect);

function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CodeViewer = function CodeViewer(props) {
  var _props$code2;
  var validProps = validFieldProps(props, ["is_pro", "visible", "trigger", "disable", "parentIndex", "context", "copyOnClick"]);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCopied = _useState2[0],
    setIsCopied = _useState2[1];
  useEffect(function () {
    var CopyInterval;
    if (isCopied) {
      CopyInterval = setTimeout(function () {
        setIsCopied(false);
      }, 1000);
    }
    return function () {
      return CopyInterval && clearTimeout(CopyInterval);
    };
  }, [isCopied]);
  var handleCopy = function handleCopy() {
    var _props$code;
    copy((_props$code = props === null || props === void 0 ? void 0 : props.code) !== null && _props$code !== void 0 ? _props$code : (props === null || props === void 0 ? void 0 : props["default"]) || (props === null || props === void 0 ? void 0 : props.value), {
      format: "text/plain",
      onCopy: function onCopy() {
        setIsCopied(true);
      }
    });
  };
  return createElement("span", {
    className: "wprf-code-viewer"
  }, createElement("span", {
    className: "wprf-code-viewer-header"
  }, props === null || props === void 0 ? void 0 : props.label), createElement("span", {
    className: "wprf-code-viewer-body"
  }, /*#__PURE__*/React.createElement("pre", _objectSpread$a({}, validProps), (_props$code2 = props === null || props === void 0 ? void 0 : props.code) !== null && _props$code2 !== void 0 ? _props$code2 : (props === null || props === void 0 ? void 0 : props["default"]) || (props === null || props === void 0 ? void 0 : props.value)), createElement("span", {
    className: "wprf-clipboard-tooltip ".concat(isCopied ? "active" : "")
  }, createElement("span", {
    className: "wprf-clipboard-tooltip-text"
  }, createElement("span", null, "Copied")), createElement(Button$2, {
    className: "wprf-copy-icon",
    onClick: function onClick() {
      return handleCopy();
    }
  }, createElement("i", {
    className: "btd-icon btd-duplicate"
  })))));
};
var CodeViewer$1 = /*#__PURE__*/React.memo(CodeViewer);

var ColorPicker = function ColorPicker(props) {
  var _props$reset_text;
  var value = props.value,
    name = props.name,
    id = props.id,
    onChange = props.onChange;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPicker = _useState2[0],
    setShowPicker = _useState2[1];
  var _useState3 = useState(value || null),
    _useState4 = _slicedToArray(_useState3, 2),
    color = _useState4[0],
    setColor = _useState4[1];
  var _useState5 = useState(value || null),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultColor = _useState6[0],
    setDefaultColor = _useState6[1];
  var closeRef = useRef(null);
  useEffect(function () {
    if (value) setDefaultColor(value);else setDefaultColor("#ffffff00");
  }, []);
  var handleCloseRef = function handleCloseRef(ref) {
    useEffect(function () {
      var handleClickOutside = function handleClickOutside(ev) {
        if (ref.current && !ref.current.contains(ev.target)) {
          setShowPicker(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return function () {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useEffect(function () {
    onChange({
      target: {
        type: "colorpicker",
        name: name,
        value: color
      }
    });
  }, [color]);
  handleCloseRef(closeRef);
  return createElement(Fragment, null, createElement("div", {
    className: "wprf-colorpicker-wrap",
    ref: closeRef
  }, createElement("div", {
    className: "wprf-colorpicker-screen",
    onClick: function onClick() {
      return setShowPicker(!showPicker);
    }
  }, createElement("input", {
    type: "hidden",
    value: value,
    name: name,
    id: id
  }), createElement("span", {
    className: "wprf-picker-code"
  }, value || defaultColor), createElement("span", {
    className: "wprf-picker-display",
    style: {
      backgroundColor: value
    }
  })), showPicker && createElement("div", {
    className: "wprf-colorpicker"
  }, createElement(ColorPicker$2, {
    color: value || defaultColor,
    onChangeComplete: function onChangeComplete(event) {
      return setColor(event.hex);
    }
  }), createElement("div", {
    className: "wprf-colorpicker-reset-wrap"
  }, createElement("button", {
    className: "wprf-colorpicker-reset",
    onClick: function onClick(e) {
      e.preventDefault();
      setColor(defaultColor);
      setShowPicker(false);
    }
  }, (_props$reset_text = props === null || props === void 0 ? void 0 : props.reset_text) !== null && _props$reset_text !== void 0 ? _props$reset_text : __("Reset", "betterdocs"))))));
};
var ColorPicker$1 = withLabel(ColorPicker);

function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CopyToClipboard = function CopyToClipboard(props) {
  var validProps = validFieldProps(props, ["is_pro", "visible", "trigger", "descriptionCopyable", "disable", "parentIndex", "context", "badge", "popup", "type", 'descriptionLabel']);
  var handleChange = useCallback(function (event) {
    return validProps.onChange(event, {
      popup: props === null || props === void 0 ? void 0 : props.popup,
      isPro: !!props.is_pro,
      originProps: props
    });
  }, [validProps === null || validProps === void 0 ? void 0 : validProps.value]);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCopied = _useState2[0],
    setIsCopied = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isDescriptionCopied = _useState4[0],
    setIsDescriptionCopied = _useState4[1];
  useEffect(function () {
    var CopyInterval;
    if (isCopied) {
      CopyInterval = setTimeout(function () {
        setIsCopied(false);
      }, 300);
    }
    return function () {
      return CopyInterval && clearTimeout(CopyInterval);
    };
  }, [isCopied]);
  useEffect(function () {
    var DescriptionCopyInterval;
    if (isDescriptionCopied) {
      DescriptionCopyInterval = setTimeout(function () {
        setIsDescriptionCopied(false);
      }, 300);
    }
    return function () {
      return DescriptionCopyInterval && clearTimeout(DescriptionCopyInterval);
    };
  }, [isDescriptionCopied]);
  var handleCopy = function handleCopy() {
    copy(props.value, {
      format: "text/plain",
      onCopy: function onCopy() {
        setIsCopied(true);
      }
    });
  };
  var handleDescriptionCopy = function handleDescriptionCopy() {
    copy(props.description, {
      format: "text/plain",
      onCopy: function onCopy() {
        setIsDescriptionCopied(true);
      }
    });
  };
  return createElement("span", {
    className: "wprf-copy-to-clipboard-wrapper"
  }, createElement("div", {
    className: "wprf-copy-to-clipboard-header"
  }, createElement(ControlLabel, props), createElement("span", {
    className: "wprf-clipboard-tooltip ".concat(isCopied ? "active" : "")
  }, createElement("span", {
    className: "wprf-clipboard-tooltip-text"
  }, createElement("span", null, "Copied")), createElement(Button$2, {
    className: "wprf-copy-icon",
    onClick: function onClick() {
      return handleCopy();
    }
  }, createElement("i", {
    className: "btd-icon btd-copy"
  })))), createElement("div", {
    className: "wprf-copy-to-clipboard-body"
  }, /*#__PURE__*/React.createElement("input", _objectSpread$9(_objectSpread$9({}, validProps), {}, {
    type: "text",
    onChange: handleChange,
    disabled: true
  }))), createElement("div", {
    className: "wprf-copy-to-clipboard-footer"
  }, (props === null || props === void 0 ? void 0 : props.description) && (props === null || props === void 0 ? void 0 : props.descriptionLabel) && createElement("i", {
    dangerouslySetInnerHTML: {
      __html: props === null || props === void 0 ? void 0 : props.descriptionLabel
    }
  }), props !== null && props !== void 0 && props.description ? props !== null && props !== void 0 && props.descriptionCopyable ? createElement("div", {
    className: "wprf-clipboard-tooltip ".concat(isDescriptionCopied ? "active" : "")
  }, createElement("span", {
    className: "wprf-clipboard-tooltip-text"
  }, createElement("span", null, "Copied")), createElement("p", {
    className: "wprf-description",
    onClick: function onClick() {
      return handleDescriptionCopy();
    },
    dangerouslySetInnerHTML: {
      __html: props === null || props === void 0 ? void 0 : props.description
    }
  })) : createElement("p", {
    className: "wprf-description",
    dangerouslySetInnerHTML: {
      __html: props === null || props === void 0 ? void 0 : props.description
    }
  }) : ""));
};
var CopyToClipboard$1 = /*#__PURE__*/React.memo(CopyToClipboard);

var DateControl = function DateControl(props) {
  var _props$format;
  var name = props.name,
    value = props.value,
    _onChange = props.onChange,
    position = props.position;
  var settings = __experimentalGetSettings();
  var format = (_props$format = props === null || props === void 0 ? void 0 : props.format) !== null && _props$format !== void 0 ? _props$format : settings.formats.datetime;
  var _value = getTime(value);
  var is12HourTime = /a(?!\\)/i.test(settings.formats.datetime.toLowerCase().replace(/\\\\/g, "").split("").reverse().join(""));
  useEffect(function () {
    // if (!value) {
    _onChange({
      target: {
        type: 'date',
        name: name,
        value: _value
      }
    });
    //     // helpers.setValue(name, date('c', value))
    // }
  }, []);
  return createElement(Dropdown, {
    className: "wprf-control-datetime",
    contentClassName: "wprf-control-datetime-content",
    position: position ? position : "bottom right",
    renderToggle: function renderToggle(_ref) {
      _ref.isOpen;
        var onToggle = _ref.onToggle;
      return createElement(Button$2, {
        isTertiary: true,
        onClick: onToggle
      }, date(format, _value, -new Date().getTimezoneOffset()));
    },
    renderContent: function renderContent() {
      // console.log(getTime(value), getTime(value).toDate());

      return createElement(DateTimePicker
      // @ts-ignore
      , {
        __nextRemoveHelpButton: true,
        __nextRemoveResetButton: true,
        currentDate: getTime(_value).toDate().toString(),
        onChange: function onChange(date) {
          _onChange({
            target: {
              type: 'date',
              name: name,
              value: moment(date).utc().format()
            }
          });
        },
        is12Hour: is12HourTime
      });
    }
  });
};
var Date$1 = withLabel(DateControl);

/**
 * WordPress dependencies
 */
const instanceMap = new WeakMap();
/**
 * Creates a new id for a given object.
 *
 * @param  object Object reference to create an id for.
 * @return The instance id (index).
 */

function createId(object) {
  const instances = instanceMap.get(object) || 0;
  instanceMap.set(object, instances + 1);
  return instances;
}
/**
 * Specify the useInstanceId *function* signatures.
 *
 * More accurately, useInstanceId distinguishes between three different
 * signatures:
 *
 * 1. When only object is given, the returned value is a number
 * 2. When object and prefix is given, the returned value is a string
 * 3. When preferredId is given, the returned value is the type of preferredId
 */


/**
 * Provides a unique instance ID.
 *
 * @param  object        Object reference to create an id for.
 * @param  [prefix]      Prefix for the unique id.
 * @param  [preferredId] Default ID to use.
 * @return The unique instance id.
 */
function useInstanceId(object, prefix, preferredId) {
  return useMemo(() => {
    if (preferredId) return preferredId;
    const id = createId(object);
    return prefix ? `${prefix}-${id}` : id;
  }, [object]);
}

var RepeaterField = function RepeaterField(props) {
  var _builderContext$value;
  var builderContext = useBuilderContext();
  var fields = props.fields,
    _onChange = props.onChange,
    index = props.index,
    parent = props.parent;
  var _useState = useState(props.isCollapsed),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var instanceId = useInstanceId(RepeaterField);
  // onClick={() => setIsCollapse(!isCollapse)}
  var values = (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 || (_builderContext$value = _builderContext$value[parent]) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[index];
  var title = (values === null || values === void 0 ? void 0 : values.title) || (values === null || values === void 0 ? void 0 : values.post_title) || (values === null || values === void 0 ? void 0 : values.username) || (values === null || values === void 0 ? void 0 : values.plugin_theme_name);
  var _title = title ? title.length < 40 ? title : title.substr(0, 40) + "..." : '';
  var onClone = function onClone(event) {
    event === null || event === void 0 || event.stopPropagation();
    props.clone(props.index);
  };
  var onDelete = function onDelete(event) {
    event === null || event === void 0 || event.stopPropagation();
    props.remove(props.index);
  };
  useEffect(function () {
    builderContext.setFieldValue([parent, index, 'isCollapsed'], isCollapsed);
  }, [isCollapsed]);
  return createElement("div", {
    className: "wprf-repeater-field"
  }, createElement("div", {
    className: "wprf-repeater-field-title",
    onClick: function onClick() {
      return setIsCollapsed(!isCollapsed);
    }
  }, createElement("h4", null, createElement(Icon, {
    icon: "move"
  }), props.index + 1, ": ", _title), createElement("div", {
    className: "wprf-repeater-field-controls"
  }, createElement(Icon, {
    onClick: onClone,
    icon: "admin-page"
  }), createElement(Icon, {
    onClick: onDelete,
    icon: "trash"
  }))), !isCollapsed && createElement("div", {
    className: "wprf-repeater-inner-field"
  }, fields.map(function (field, fieldIndex) {
    return createElement(GenericField, _extends$1({
      key: "field-".concat(index, "-").concat(fieldIndex)
    }, field, {
      id: "field-".concat(instanceId, "-").concat(index, "-").concat(fieldIndex),
      index: index,
      parenttype: "repeater",
      parent: parent,
      onChange: function onChange(event) {
        return _onChange(event, index);
      }
    }));
  })));
};

function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var GenericToggle = function GenericToggle(props) {
  var _styles$label, _styles$label2, _classNames;
  var prevStyles = props.style;
  var styles = _objectSpread$8({
    type: "",
    // card
    label: {
      position: "right"
    },
    column: 4
  }, prevStyles);
  var isChecked = useMemo(function () {
    var _isChecked = false;
    if (props !== null && props !== void 0 && props.checked && isObject(props.checked) && isString(props === null || props === void 0 ? void 0 : props.value)) {
      _isChecked = props.checked[props.value];
    } else {
      if (!isString(props.value)) {
        _isChecked = props.value;
      }
    }
    return _isChecked;
  }, [props === null || props === void 0 ? void 0 : props.checked, props.value]);
  var componentClasses = classNames("wprf-toggle-wrap", (_classNames = {}, _defineProperty(_classNames, "wprf-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type.length) > 0), _defineProperty(_classNames, "wprf-checked", Boolean(isChecked)), _defineProperty(_classNames, "wprf-label-position-".concat(styles === null || styles === void 0 || (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position), styles === null || styles === void 0 || (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position), _classNames), props === null || props === void 0 ? void 0 : props.classes);
  return createElement("div", {
    className: componentClasses
  }, createElement(GenericInput, _objectSpread$8(_objectSpread$8({}, props), {}, {
    type: 'checkbox',
    placeholder: undefined
  })), createElement(Label, {
    htmlFor: props.id
  }));
};
var GenericToggle$1 = withLabel(GenericToggle);

var ModalContent = function ModalContent(props) {
  var _props$body;
  var isLoading = props.isLoading;
    props.closeModal;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fields = _useState2[0],
    setFields = _useState2[1];
  useEffect(function () {
    var newFields = sortingFields(props.body.fields);
    // context.setFormField([...props.parentIndex, 'fields'], newFields);
    var allFields = newFields.map(function (item, index) {
      var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ['fields', index]);
      return createElement(Field$1, _extends$1({
        key: item.name
      }, item, {
        parentIndex: parentIndex
      }));
    });
    setFields(allFields);
  }, []);
  return createElement("div", {
    className: "wprf-modal-body"
  }, isLoading && createElement(Loading, null), !isLoading && createElement(Fragment, null, createElement("div", {
    className: "wprf-modal-content"
  }, fields.length > 0 && fields), createElement("div", {
    className: "wprf-modal-footer clearfix"
  }, createElement("div", {
    className: "wprf-modal-footer-left"
  }, ((_props$body = props.body) === null || _props$body === void 0 ? void 0 : _props$body.footer) && isString(props.body.footer) && createElement("p", null, props.body.footer), createElement(GenericField, _extends$1({
    type: "button"
  }, props === null || props === void 0 ? void 0 : props.confirm_button))))));
};

var ModalHeader = function ModalHeader(_ref) {
  var content = _ref.content;
  return createElement("div", {
    className: "wprf-modal-header"
  }, content && isString(content) && createElement("h3", null, content));
};

var Loading = function Loading(props) {
  return createElement("p", null, __('Loading...', 'betterdocs'));
};

var toolbarOptions = {
  options: ['inline', 'blockType', 'textAlign', 'colorPicker', 'link'],
  inline: {
    options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace']
  },
  blockType: {
    inDropdown: true,
    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined
  }
};

var Editor = function Editor(props) {
  var _useState = useState(EditorState.createEmpty()),
    _useState2 = _slicedToArray(_useState, 2),
    editorState = _useState2[0],
    setEditorState = _useState2[1];
  useEffect(function () {
    if (props.value) {
      var _htmlToDraft = htmlToDraft(props.value),
        contentBlocks = _htmlToDraft.contentBlocks,
        entityMap = _htmlToDraft.entityMap;
      var contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      var _editorState = EditorState.createWithContent(contentState);
      setEditorState(_editorState);
    }
  }, []);
  useEffect(function () {
    var tempValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    props.onChange({
      target: {
        type: 'editor',
        value: tempValue,
        name: props.name
      }
    });
  }, [editorState]);
  return createElement(Editor$2, {
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    toolbar: toolbarOptions,
    editorState: editorState,
    toolbarClassName: "wprf-editor-toolbar",
    wrapperClassName: "wprf-editor wprf-control",
    editorClassName: "wprf-editor-main",
    onEditorStateChange: setEditorState
  });
};
var Editor$1 = withLabel(Editor);

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function GenericCheckbox(props) {
  var _styles$label, _styles$label2, _classNames;
  var prevStyles = props.style;
  var styles = _objectSpread$7({
    type: "",
    // card
    label: {
      position: "right"
    },
    column: 4
  }, prevStyles);
  var isChecked = useMemo(function () {
    var _isChecked = false;
    if (props !== null && props !== void 0 && props.checked && isObject(props.checked) && isString(props === null || props === void 0 ? void 0 : props.value)) {
      _isChecked = props.checked[props.value];
    } else {
      if (!isString(props.value)) {
        _isChecked = props.value;
      }
    }
    return _isChecked;
  }, [props === null || props === void 0 ? void 0 : props.checked, props.value]);
  var componentClasses = classNames("wprf-checkbox-wrap", (_classNames = {}, _defineProperty(_classNames, "wprf-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type.length) > 0), _defineProperty(_classNames, "wprf-checked", Boolean(isChecked)), _defineProperty(_classNames, "wprf-label-position-".concat(styles === null || styles === void 0 || (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position), styles === null || styles === void 0 || (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position), _classNames), props === null || props === void 0 ? void 0 : props.classes);
  return createElement("div", {
    className: componentClasses
  }, createElement(GenericInput, _objectSpread$7(_objectSpread$7({}, props), {}, {
    type: 'checkbox'
  })), createElement("label", {
    htmlFor: props.id
  }, props.label));
}
function Checkbox(props) {
  var passedOptions = props.options,
    value = props.value,
    multiple = props.multiple,
    prevStyles = props.style;
  var options = sortingFields(passedOptions);
  var styles = _objectSpread$7({
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
        return _objectSpread$7(_objectSpread$7({}, prevState), {}, _defineProperty({}, target.value, target.checked));
      });
    };
    useEffect(function () {
      props.onChange({
        target: {
          type: 'checkbox',
          name: props.name,
          value: localState,
          multiple: true
        }
      });
    }, [localState]);
    useEffect(function () {
      if (!isObject(value)) {
        var lState = {};
        var _iterator = _createForOfIteratorHelper$1(options),
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
      className: "wprf-checkbox-wrapper wprf-control"
    }, createElement(Row, null, options.map(function (item) {
      return createElement(Column, {
        key: item.value,
        column: styles.column
      }, createElement(GenericCheckbox, _objectSpread$7(_objectSpread$7({}, item), {}, {
        context: props === null || props === void 0 ? void 0 : props.context,
        id: item.value,
        checked: typeof localState[item.value] === 'undefined' ? true : localState !== null && localState !== void 0 && localState[item.value] ? value : !!(localState !== null && localState !== void 0 && localState[item.value]),
        type: 'checkbox',
        onChange: handleChange,
        style: styles
      })));
    })));
  }
  return createElement(GenericInput, _objectSpread$7(_objectSpread$7({}, props), {}, {
    type: 'checkbox'
  }));
}
var Checkbox$1 = withLabel(Checkbox);

var Field = function Field(props) {
  if (!props.type || props.type.length === 0) {
    console.error(props);
    throw new Error(__("Field must have a #type. see documentation.", "betterdocs"));
  }
  switch (props.type) {
    case "text":
    // case "checkbox":
    case "radio":
    case "email":
    case "range":
    case "number":
    case "hidden":
      return createElement(Input$1, props);
    case "checkbox":
      return createElement(Checkbox$1, props);
    case "textarea":
      return createElement(Textarea$1, props);
    case "codeviewer":
      return createElement(CodeViewer$1, props);
    case "copy-to-clipboard":
      return createElement(CopyToClipboard$1, props);
    case "message":
      return createElement(Message, props);
    case "select":
      return createElement(Select$1, props);
    case "checkbox-select":
      return createElement(CheckboxSelect$1, props);
    case "select-async":
      return createElement(SelectAsync$1, props);
    case "slider":
      return createElement(Slider, props);
    case "group":
      return createElement(Group$1, props);
    case "radio-card":
      return createElement(Radio, props);
    case "section":
      return createElement(Section$1, props);
    case "date":
      return createElement(Date$1, props);
    case "toggle":
      return createElement(Toggle, props);
    case "colorpicker":
      return createElement(ColorPicker$1, props);
    case "jsonuploader":
      return createElement(JsonUploader$1, props);
    case "repeater":
      return createElement(Repeater, props);
    case "media":
      return createElement(Media$1, props);
    case "editor":
      return createElement(Editor$1, props);
    case "action":
      return createElement(Action, props);
    case "button":
      return createElement(Button$1, props);
    case "modal":
      return createElement(Modal, props);
    case "tab":
      return createElement(Tab, props);
    // case "test":
    //     return <Test {...props} />;
    case "responsive-number":
      return createElement(ResponsiveNumber$1, props);
    default:
      var customField = applyFilters("custom_field", "", props.type, props);
      return createElement(Fragment, null, customField);
  }
};
var GenericField = withProps(Field, true);
var Field$1 = withProps(Field);

var _excluded$2 = ["name", "fields"];
var Group = function Group(props) {
  var fieldName = props.name,
    fields = props.fields,
    rest = _objectWithoutProperties(props, _excluded$2);
  if (!fields || !isArray(fields) || fields.length === 0) {
    throw new Error(__('You should give a #fields arguments to a group field.', 'betterdocs'));
  }
  var builderContext = useBuilderContext();
  var handleChange = useCallback(function (event) {
    if (event.persist) {
      event.persist();
    }
    var _executeChange = executeChange(event),
      field = _executeChange.field,
      value = _executeChange.val;
    builderContext.setFieldValue([fieldName, field], value);
  }, [props.value]);
  var newFields = sortingFields(fields);
  useEffect(function () {
    builderContext.setFormField([].concat(_toConsumableArray(props.parentIndex), ['fields']), newFields);
  }, []);
  var allFields = newFields.map(function (item, index) {
    var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ['fields', index]);
    return createElement(GenericField, _extends$1({}, rest, {
      key: item.name,
      index: props.index,
      onChange: handleChange
    }, item, {
      parenttype: "group",
      parent: fieldName,
      parentIndex: parentIndex
    }));
  });
  var innerClasses = classNames('wprf-group-control-inner', {
    'wprf-display-inline': (props === null || props === void 0 ? void 0 : props.display) === 'inline'
  });
  return createElement("div", {
    className: "wprf-group-control"
  }, createElement("div", {
    className: innerClasses
  }, allFields));
};
var Group$1 = withLabel(Group);

function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Input = function Input(props) {
  var validProps = validFieldProps(props, ["is_pro", "visible", "trigger", "copyOnClick", "disable", "parentIndex", "context", "badge", "popup", "enable_disable_text_active"]);
  var handleChange = useCallback(function (event) {
    return validProps.onChange(event, {
      popup: props === null || props === void 0 ? void 0 : props.popup,
      isPro: !!props.is_pro,
      originProps: props
    });
  }, [validProps === null || validProps === void 0 ? void 0 : validProps.value]);
  if (validProps.type === "checkbox") {
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
        format: "text/plain",
        onCopy: function onCopy() {
          setIsCopied(true);
        }
      });
    };
    return createElement("span", {
      className: "wprf-clipboard-wrapper"
    }, /*#__PURE__*/React.createElement("input", _objectSpread$6(_objectSpread$6({}, validProps), {}, {
      onChange: handleChange
    })), createElement("span", {
      className: "wprf-clipboard-tooltip"
    }, createElement("span", {
      className: "wprf-clipboard-tooltip-text"
    }, isCopied ? copiedMessage : copyMessage), createElement(Button$2, {
      className: "wprf-copy-icon",
      onClick: function onClick() {
        return handleCopy();
      }
    }, "Copy")));
  }
  return /*#__PURE__*/React.createElement("input", _objectSpread$6(_objectSpread$6({}, validProps), {}, {
    onChange: handleChange,
    disabled: (props === null || props === void 0 ? void 0 : props.is_pro) || false
  }));
};
Input.defaultProps = {
  type: "text"
};
var GenericInput = /*#__PURE__*/React.memo(Input);
var Input$1 = withLabel( /*#__PURE__*/React.memo(Input));

var JsonUploader = function JsonUploader(props) {
  validFieldProps(props, ["is_pro", "visible", "trigger", "disable", "parentIndex", "context", "copyOnClick"]);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    uploadedFile = _useState2[0],
    setUploadedFile = _useState2[1];
  var handleChange = function handleChange(e) {
    if (!e.target.files.length) {
      return;
    }
    var file = e.target.files[0];
    if ((file === null || file === void 0 ? void 0 : file.size) == 0) {
      props.context.alerts.toast('error', __("File can't be empty.", 'betterdocs'));
      return;
    } else if ((file === null || file === void 0 ? void 0 : file.type) != 'application/json' && (file === null || file === void 0 ? void 0 : file.type) != 'text/json') {
      props.context.alerts.toast('error', __("Invalid file type.", 'betterdocs'));
      return;
    }
    setUploadedFile(file);
    var reader = new FileReader();
    reader.onload = function (event) {
      var _event$target;
      var json = event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result;
      props.onChange({
        target: {
          type: 'jsonuploader',
          name: props.name,
          value: json
        }
      });
    };
    reader.readAsText(file);
  };
  var removeFile = function removeFile() {
    setUploadedFile(null);
    props.onChange({
      target: {
        type: 'jsonuploader',
        name: props.name,
        value: null
      }
    });
  };
  useEffect(function () {
    if (!(props !== null && props !== void 0 && props.value)) {
      setUploadedFile(null);
    }
  }, [props === null || props === void 0 ? void 0 : props.value]);
  return createElement("span", {
    className: "wprf-json-uploader"
  }, !uploadedFile && createElement("label", {
    className: "wprf-json-uploaderButton"
  }, createElement("span", null, __("Upload")), createElement("input", {
    type: "file",
    accept: "application/JSON",
    onChange: function onChange(e) {
      handleChange(e);
    }
  })), uploadedFile && (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name) && createElement("span", {
    className: "wpfr-json-file-name-wrapper"
  }, createElement("span", {
    className: "wpfr-json-file-name"
  }, (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.length) > 20 ? "".concat(uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.substr(0, 9), "...").concat(uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.substr((uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.length) - 7)) : uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name), createElement("span", {
    className: "wprf-json-file-delete-button",
    onClick: removeFile
  }, "x")));
};
var JsonUploader$1 = withLabel( /*#__PURE__*/React.memo(JsonUploader));

var Media = function Media(props) {
  var _props$value;
  var _useState = useState((_props$value = props.value) !== null && _props$value !== void 0 && _props$value.url ? props.value : null),
    _useState2 = _slicedToArray(_useState, 2),
    imageData = _useState2[0],
    setImageData = _useState2[1];
  useEffect(function () {
    props.onChange({
      target: {
        type: "media",
        name: props.name,
        value: imageData
      }
    });
  }, [imageData]);
  return createElement("div", {
    className: "wprf-control wprf-media"
  }, imageData != null && !(props !== null && props !== void 0 && props.notImage) && createElement("div", {
    className: "wprf-image-preview"
  }, imageData != null && (imageData === null || imageData === void 0 ? void 0 : imageData.url) && createElement("img", {
    src: imageData.url,
    alt: imageData.title
  })), createElement("div", {
    className: "wprf-image-uploader ".concat(imageData != null && !(props !== null && props !== void 0 && props.notImage) ? "uploaded" : "")
  }, createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      setImageData({
        id: media.id,
        title: media.title,
        url: media.url
      });
    },
    multiple: false,
    allowedTypes: ["image"],
    value: imageData,
    render: function render(_ref) {
      var open = _ref.open;
      return createElement(Fragment, null, imageData != null ? createElement("div", {
        className: "wprf_image_overlay"
      }, createElement("button", {
        className: "wprf-btn wprf-image-change-btn",
        onClick: open
      }, createElement("i", {
        className: "btd-icon btd-upload"
      })), createElement("button", {
        className: "wprf-btn wprf-image-remove-btn",
        onClick: function onClick() {
          return setImageData(null);
        }
      }, (props === null || props === void 0 ? void 0 : props.remove) || createElement("i", {
        className: "btd-icon btd-delete"
      }))) : createElement("button", {
        className: "wprf-btn wprf-image-upload-btn",
        onClick: open
      }, createElement("span", {
        className: "icon"
      }, createElement("i", {
        className: "btd-icon btd-upload"
      })), createElement("span", {
        className: "title"
      }, "Click to upload"), createElement("span", {
        className: "info"
      }, "SVG, PNG, JPG or GIF (max. 800x400px)")));
    }
  })));
};
var Media$1 = withLabel(Media);

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

var Modal = function Modal(props) {
  var _props$body;
  if ((props === null || props === void 0 ? void 0 : props.body) == undefined || (props === null || props === void 0 ? void 0 : props.button) == undefined) {
    throw new Error(__('Modal needs button/body with it.', 'betterdocs'));
  }
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0];
    _useState4[1];
  var openModal = function openModal() {
    return setOpen(true);
  };
  var closeModal = function closeModal() {
    return setOpen(false);
  };
  var onConfirm = useCallback(function () {}, []);
  return createElement("div", {
    className: "wprf-control wprf-modal",
    id: "wprf-modal-".concat(props.name)
  }, createElement(GenericField, _extends$1({
    type: "button"
  }, props === null || props === void 0 ? void 0 : props.button, {
    onClick: openModal
  })), isOpen && createElement(SweetAlert$1, {
    customClass: "wprf-modal-inner",
    style: {
      maxWidth: '900px',
      width: '100%',
      overflowY: 'scroll',
      margin: '50px auto'
    },
    closeBtnStyle: {
      top: '5px',
      right: '5px',
      color: '#f78c8c',
      fontSize: '18px',
      border: '1px solid #f78c8c',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: createElement(ModalHeader, {
      content: props === null || props === void 0 || (_props$body = props.body) === null || _props$body === void 0 ? void 0 : _props$body.header
    }),
    onConfirm: onConfirm,
    showConfirm: false,
    showCloseButton: true,
    closeOnClickOutside: true,
    onCancel: closeModal,
    afterUpdate: function afterUpdate() {
      if (props !== null && props !== void 0 && props.cancel) {
        var _props$context$values;
        if ((_props$context$values = props.context.values) !== null && _props$context$values !== void 0 && _props$context$values[props.cancel]) {
          closeModal();
        }
      }
    }
  }, createElement(ModalContent, _extends$1({}, props, {
    isLoading: isLoading,
    closeModal: closeModal,
    context: props.context,
    onConfirm: onConfirm
  }))));
};

var _excluded$1 = ["label", "value", "icon", "is_pro"];
function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var RadioCard = function RadioCard(props) {
  var builderContext = useBuilderContext();
  var _useOptions = useOptions(props, 'options'),
    options = _useOptions.options,
    option = _useOptions.option;
  if (!options) {
    throw new Error(__('#options is a required arguments for RadioCard field.', 'betterdocs'));
  }
  var instanceId = useInstanceId(RadioCard);
  var componentClasses = classNames(["wprf-control", "wprf-radio-card", "wprf-input-radio-set-wrap", props === null || props === void 0 ? void 0 : props.className]);
  var styles = _objectSpread$5({}, props === null || props === void 0 ? void 0 : props.style);
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
      rest = _objectWithoutProperties(_ref, _excluded$1);
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
    }, label), createElement(GenericInput, _extends$1({}, rest, validProps, {
      is_pro: is_pro,
      type: "radio",
      value: value,
      checked: value === option,
      id: "wprf-input-radio-".concat(instanceId, "-").concat(index)
    }))));
  })));
};
var Radio = withLabel(RadioCard);

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Repeater = function Repeater(props) {
  var _builderContext$value, _builderContext$value4;
  var fieldName = props.name;
    props.value;
    var button = props.button,
    fields = props.fields;
  var builderContext = useBuilderContext();
  var _useState = useState((_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[fieldName]),
    _useState2 = _slicedToArray(_useState, 2),
    localMemoizedValue = _useState2[0],
    setLocalMemoizedValue = _useState2[1];

  // const localMemoizedValue = useMemo(() => {
  //     let localS = builderContext.values?.[fieldName];
  //     return localS;
  // }, [builderContext.values?.[fieldName], refresh])

  useEffect(function () {
    var _builderContext$value2;
    if (((_builderContext$value2 = builderContext.values) === null || _builderContext$value2 === void 0 ? void 0 : _builderContext$value2[fieldName]) != undefined) {
      var _builderContext$value3;
      setLocalMemoizedValue((_builderContext$value3 = builderContext.values) === null || _builderContext$value3 === void 0 ? void 0 : _builderContext$value3[fieldName]);
    }
  }, [(_builderContext$value4 = builderContext.values) === null || _builderContext$value4 === void 0 ? void 0 : _builderContext$value4[fieldName]]);
  var handleSort = function handleSort(value) {
    builderContext.setFieldValue(fieldName, value);
  };
  var handleChange = function handleChange(event, index) {
    if (event.persist) {
      event.persist();
    }
    var _executeChange = executeChange(event),
      field = _executeChange.field,
      value = _executeChange.val;
    builderContext.setFieldValue([fieldName, index, field], value);
  };
  var handleRemove = useCallback(function (index) {
    var lValue = _toConsumableArray(localMemoizedValue);
    lValue.splice(index, 1);
    builderContext.setFieldValue(fieldName, lValue);
  }, [localMemoizedValue]);
  var handleClone = useCallback(function (index) {
    var lValue = _toConsumableArray(localMemoizedValue);
    if (lValue.length > 0) {
      var _indexedCopy, _indexedCopy2, _indexedCopy3, _indexedCopy4;
      var indexedCopy = (lValue === null || lValue === void 0 ? void 0 : lValue[index]) || {};
      if ((_indexedCopy = indexedCopy) !== null && _indexedCopy !== void 0 && _indexedCopy.title) {
        indexedCopy = _objectSpread$4(_objectSpread$4({}, indexedCopy), {}, {
          title: indexedCopy.title + ' - Copy'
        });
      }
      if ((_indexedCopy2 = indexedCopy) !== null && _indexedCopy2 !== void 0 && _indexedCopy2.post_title) {
        indexedCopy = _objectSpread$4(_objectSpread$4({}, indexedCopy), {}, {
          post_title: indexedCopy.post_title + ' - Copy'
        });
      }
      if ((_indexedCopy3 = indexedCopy) !== null && _indexedCopy3 !== void 0 && _indexedCopy3.username) {
        indexedCopy = _objectSpread$4(_objectSpread$4({}, indexedCopy), {}, {
          username: indexedCopy.username + ' - Copy'
        });
      }
      if ((_indexedCopy4 = indexedCopy) !== null && _indexedCopy4 !== void 0 && _indexedCopy4.plugin_theme_name) {
        indexedCopy = _objectSpread$4(_objectSpread$4({}, indexedCopy), {}, {
          plugin_theme_name: indexedCopy.plugin_theme_name + ' - Copy'
        });
      }
      indexedCopy = _objectSpread$4(_objectSpread$4({}, indexedCopy), {}, {
        index: v4(),
        isCollapsed: false
      });
      builderContext.setFieldValue([fieldName, localMemoizedValue.length], indexedCopy);
    }
  }, [localMemoizedValue]);
  useEffect(function () {
    if (localMemoizedValue == undefined || localMemoizedValue == '') {
      setLocalMemoizedValue([{
        index: v4()
      }]);
    } else {
      setLocalMemoizedValue(function (items) {
        return items.map(function (item) {
          return _objectSpread$4(_objectSpread$4({}, item), {}, {
            index: v4()
          });
        });
      });
    }
  }, []);
  return createElement("div", {
    className: "wprf-repeater-control"
  }, localMemoizedValue && (localMemoizedValue === null || localMemoizedValue === void 0 ? void 0 : localMemoizedValue.length) > 0 && createElement(ReactSortable, {
    className: "wprf-repeater-content",
    list: localMemoizedValue,
    setList: handleSort,
    handle: '.wprf-repeater-field-title',
    filter: '.wprf-repeater-field-controls',
    forceFallback: true
  }, localMemoizedValue.map(function (value, index) {
    return createElement(RepeaterField, {
      isCollapsed: value === null || value === void 0 ? void 0 : value.isCollapsed,
      key: (value === null || value === void 0 ? void 0 : value.index) || index,
      fields: fields,
      index: index,
      parent: fieldName,
      clone: handleClone,
      remove: handleRemove,
      onChange: function onChange(event) {
        return handleChange(event, index);
      }
    });
  })), createElement("div", {
    className: "wprf-repeater-label"
  }, createElement("button", {
    className: "wprf-repeater-button",
    onClick: function onClick() {
      return builderContext.setFieldValue(fieldName, [].concat(_toConsumableArray(localMemoizedValue), [{
        index: v4()
      }]));
    }
  }, button === null || button === void 0 ? void 0 : button.label)));
};

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ResponsiveNumber = function ResponsiveNumber(props) {
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
      return _objectSpread$3(_objectSpread$3({}, acc), {}, _defineProperty({}, key, validProps.value));
    }, {});
  }
  var _useState3 = useState(value),
    _useState4 = _slicedToArray(_useState3, 2),
    responsiveSize = _useState4[0],
    setResponsiveSize = _useState4[1];
  var handleChange = function handleChange(event) {
    setResponsiveSize(_objectSpread$3(_objectSpread$3({}, responsiveSize), {}, _defineProperty({}, responsive, event.target.value)));
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
  }, /*#__PURE__*/React.createElement("input", _objectSpread$3(_objectSpread$3({}, validProps), {}, {
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
ResponsiveNumber.defaultProps = {
  type: "number"
};
var ResponsiveNumber$1 = withLabel( /*#__PURE__*/React.memo(ResponsiveNumber));

var SteppedButton = function SteppedButton(props) {
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    nextTab = _useState2[0],
    setNextTab = _useState2[1];
  var _useState3 = useState(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    prevTab = _useState4[0],
    setPrevTab = _useState4[1];
  var builderContext = useBuilderContext();
  useEffect(function () {
    var tabIds = props.fields.map(function (tab) {
      return tab.id;
    });
    var currentTabIndex = tabIds.findIndex(function (tab) {
      return tab === props.active;
    });
    if (currentTabIndex != -1) {
      setPrevTab(tabIds[currentTabIndex - 1]);
    }
    if (currentTabIndex <= tabIds.length) {
      setNextTab(tabIds[currentTabIndex + 1]);
    }
  }, [props.active, props.fields]);
  useEffect(function () {
    var _builderContext$confi;
    builderContext.setFieldValue("active_tab", builderContext === null || builderContext === void 0 || (_builderContext$confi = builderContext.config) === null || _builderContext$confi === void 0 ? void 0 : _builderContext$confi.active);
  }, [props.active]);
  return createElement("div", {
    className: "wprf-stepped-button"
  }, props.config.buttons && Object.keys(props.config.buttons).map(function (button, index) {
    var _props$config$buttons, _props$config$buttons2, _props$config$buttons3, _props$config$buttons4, _props$config$buttons5, _props$config$buttons6, _props$config$buttons7, _props$config$buttons8, _props$config$buttons9;
    return createElement(React.Fragment, {
      key: "button_".concat(button, "_").concat(index)
    }, button === "skip" && nextTab !== undefined && createElement(Button$2, {
      className: "wprf-btn wprf-step-btn-".concat(button),
      onClick: function onClick() {
        return props.setActive(nextTab);
      }
    }, (_props$config$buttons = props.config.buttons) === null || _props$config$buttons === void 0 ? void 0 : _props$config$buttons[button]), (button === "next" && nextTab !== undefined || button === "prev" && prevTab !== undefined) && createElement("div", {
      className: "wprf-btn wprf-step-btn-".concat(button)
    }, createElement(Field$1, {
      type: "button",
      ajax: (_props$config$buttons2 = props.config.buttons) === null || _props$config$buttons2 === void 0 || (_props$config$buttons2 = _props$config$buttons2[button]) === null || _props$config$buttons2 === void 0 ? void 0 : _props$config$buttons2.ajax,
      name: "step-button",
      onClick: function onClick() {
        return props.setActive(button === "next" ? nextTab : prevTab);
      },
      text: _typeof$1((_props$config$buttons3 = props.config.buttons) === null || _props$config$buttons3 === void 0 ? void 0 : _props$config$buttons3[button]) === "object" ? (props === null || props === void 0 ? void 0 : props.active) === ((_props$config$buttons4 = props.config.buttons) === null || _props$config$buttons4 === void 0 || (_props$config$buttons4 = _props$config$buttons4[button]) === null || _props$config$buttons4 === void 0 ? void 0 : _props$config$buttons4.condition) ? (_props$config$buttons5 = props.config.buttons) === null || _props$config$buttons5 === void 0 || (_props$config$buttons5 = _props$config$buttons5[button]) === null || _props$config$buttons5 === void 0 ? void 0 : _props$config$buttons5.customName : (_props$config$buttons6 = props.config.buttons) === null || _props$config$buttons6 === void 0 || (_props$config$buttons6 = _props$config$buttons6[button]) === null || _props$config$buttons6 === void 0 ? void 0 : _props$config$buttons6.name : (_props$config$buttons7 = props.config.buttons) === null || _props$config$buttons7 === void 0 ? void 0 : _props$config$buttons7[button]
    })), nextTab == undefined && ((_props$config$buttons8 = props.config.buttons) === null || _props$config$buttons8 === void 0 || (_props$config$buttons8 = _props$config$buttons8[button]) === null || _props$config$buttons8 === void 0 ? void 0 : _props$config$buttons8.type) && createElement(Field$1, (_props$config$buttons9 = props.config.buttons) === null || _props$config$buttons9 === void 0 ? void 0 : _props$config$buttons9[button]));
  }));
};
var SteppedButton$1 = /*#__PURE__*/React.memo(SteppedButton);

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

var Submit = function Submit(_ref) {
  var props = _extends$1({}, (_objectDestructuringEmpty(_ref), _ref));
  var context = useBuilderContext();
  var label = (props === null || props === void 0 ? void 0 : props.label) || __('Save Changes', 'betterdocs');
  if (context.isSubmitting) {
    var _props$loadingLabel;
    label = (_props$loadingLabel = props === null || props === void 0 ? void 0 : props.loadingLabel) !== null && _props$loadingLabel !== void 0 ? _props$loadingLabel : 'Saving...';
  }
  var handleSubmit = useCallback(function (event) {
    var _context$submit;
    if ((_context$submit = context.submit) !== null && _context$submit !== void 0 && _context$submit.onSubmit) {
      context.submit.onSubmit(event, context);
      return;
    }
  }, [context]);
  return createElement("div", {
    className: "wprf-submit wprf-control"
  }, createElement(Button$2, {
    disabled: context === null || context === void 0 ? void 0 : context.isSubmitting,
    className: "wprf-submit-button",
    onClick: handleSubmit
  }, label));
};

var Section = function Section(props) {
  var _props$collapsed, _builderContext$confi;
  var _props$searchable = props.searchable,
    searchable = _props$searchable === void 0 ? false : _props$searchable,
    searchNotFoundMessage = props.searchNotFoundMessage,
    _props$searchPlacehol = props.searchPlaceholder,
    searchPlaceholder = _props$searchPlacehol === void 0 ? "Search..." : _props$searchPlacehol;
  var builderContext = useBuilderContext();
  var _useState = useState((_props$collapsed = props.collapsed) !== null && _props$collapsed !== void 0 ? _props$collapsed : false),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapse = _useState2[0],
    setCollapse = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    fields = _useState4[0],
    setFields = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    filteredFields = _useState6[0],
    setFilteredFields = _useState6[1];
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    searchString = _useState8[0],
    setSearchString = _useState8[1];
  useEffect(function () {
    var newFields = sortingFields(props.fields);
    /**
     * FIXME: the line below the doc:
     * Commented for Issue#11, Cycle 7
     * Uncommented for Issue #38, Cycle 7
     */
    builderContext.setFormField([].concat(_toConsumableArray(props.parentIndex), ["fields"]), newFields);
    // builderContext.setFormField([...props.parentIndex, 'sorted'], true);
    var allFields = newFields.map(function (item, index) {
      var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ["fields", index]);
      return createElement(Field$1, _extends$1({
        key: item.name
      }, item, {
        parentIndex: parentIndex
      }));
    });
    setFields(allFields);
    setFilteredFields(allFields);
  }, []);
  var handleSearchString = function handleSearchString(e) {
    var _e$target;
    setSearchString(e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
  };
  useEffect(function () {
    if (searchString) {
      var newFields = fields.filter(function (field) {
        var _field$props;
        return field === null || field === void 0 || (_field$props = field.props) === null || _field$props === void 0 || (_field$props = _field$props.label) === null || _field$props === void 0 || (_field$props = _field$props.toLowerCase()) === null || _field$props === void 0 ? void 0 : _field$props.includes(searchString.toLowerCase());
      });
      setFilteredFields(newFields);
    } else {
      setFilteredFields(fields);
    }
  }, [searchString, fields]);
  var componentClasses = classNames("wprf-control-section", props === null || props === void 0 ? void 0 : props.classes, props === null || props === void 0 ? void 0 : props.name, {
    "wprf-section-collapsed": (props === null || props === void 0 ? void 0 : props.collapsible) && isCollapse
  });
  return createElement("div", {
    id: props === null || props === void 0 ? void 0 : props.name,
    className: componentClasses
  }, props.placeholder && createElement("div", {
    className: "wprf-section-title"
  }, createElement("h4", null, props.placeholder), props.collapsible && createElement("button", {
    onClick: function onClick() {
      return setCollapse(!isCollapse);
    }
  }, "Icon")), searchable ? createElement("div", {
    className: "wprf-section-fields"
  }, createElement("div", {
    className: "wprf-section-search-form"
  }, createElement("span", {
    className: "wprf-section-search"
  }, createElement("input", {
    type: "text",
    name: "",
    id: "",
    placeholder: searchPlaceholder,
    onChange: function onChange(e) {
      return handleSearchString(e);
    },
    value: searchString
  }))), createElement("div", {
    className: "wprf-section-search-results"
  }, filteredFields !== null && filteredFields !== void 0 && filteredFields.length ? filteredFields : createElement("div", {
    className: "wprf-result-not-found",
    dangerouslySetInnerHTML: {
      __html: searchNotFoundMessage !== null && searchNotFoundMessage !== void 0 ? searchNotFoundMessage : "Not found!"
    }
  }))) : createElement("div", {
    className: "wprf-section-fields"
  }, filteredFields), props.showSubmit && createElement(Submit, builderContext.submit), props.showSteps && createElement(SteppedButton$1, {
    fields: builderContext.tabs,
    active: builderContext.config.active,
    setActive: builderContext.setActiveTab,
    config: (_builderContext$confi = builderContext.config.step) !== null && _builderContext$confi !== void 0 ? _builderContext$confi : {
      show: false
    }
  }));
};
var Section$1 = /*#__PURE__*/React.memo(Section);

var Select = function Select(props) {
  var builderContext = useBuilderContext();
  var id = props.id,
    name = props.name,
    multiple = props.multiple,
    placeholder = props.placeholder,
    _props$search = props.search,
    search = _props$search === void 0 ? false : _props$search,
    onChange = props.onChange,
    parentIndex = props.parentIndex;
  var _useOptions = useOptions(props, 'options'),
    options = _useOptions.options,
    selectedOption = _useOptions.selectedOption,
    setData = _useOptions.setData;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    sOption = _useState2[0],
    setSOption = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAjaxComplete = _useState6[0];
    _useState6[1];
  var handleMenuOpen = function handleMenuOpen() {
    // AJAX
    if (props.ajax && (!props.ajax.rules || when(props.ajax.rules, builderContext.values))) {
      setIsLoading(true);
      var data = {};
      Object.keys(props === null || props === void 0 ? void 0 : props.ajax.data).map(function (singleData) {
        if ((props === null || props === void 0 ? void 0 : props.ajax.data[singleData].indexOf('@')) > -1) {
          var _builderContext$value;
          var eligibleKey = props === null || props === void 0 ? void 0 : props.ajax.data[singleData].substr(1);
          data[singleData] = (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[eligibleKey];
        } else {
          data[singleData] = props === null || props === void 0 ? void 0 : props.ajax.data[singleData];
        }
      });
      if (!isAjaxComplete) {
        return wpFetch({
          path: props === null || props === void 0 ? void 0 : props.ajax.api,
          data: data
        }).then(function (response) {
          setIsLoading(false);
          var arrayMerge = merge(props.options, response, 'value');
          builderContext.setFormField([].concat(_toConsumableArray(parentIndex), ['options']), arrayMerge);
          setData({
            options: arrayMerge,
            parentIndex: [].concat(_toConsumableArray(parentIndex), ['options'])
          });
          // setIsAjaxComplete(true);
          return response;
        });
      }
    }
  };
  var handleMenuClose = function handleMenuClose() {
    setIsLoading(false);
  };
  useEffect(function () {
    if (!isArray(sOption) && isObject(sOption)) {
      onChange({
        target: {
          type: 'select',
          name: name,
          value: sOption.value,
          options: options,
          multiple: multiple
        }
      });
    }
    if (isArray(sOption)) {
      onChange({
        target: {
          type: 'select',
          name: name,
          value: sOption.map(function (item) {
            return item.value;
          }),
          options: options,
          multiple: multiple
        }
      });
    }
  }, [sOption]);
  useEffect(function () {
    handleMenuOpen();
  }, []);
  useEffect(function () {
    if (props !== null && props !== void 0 && props.menuOpen) {
      handleMenuOpen();
    }
  }, [props === null || props === void 0 ? void 0 : props.menuOpen]);
  var handleOptionChange = useCallback(function (option) {
    var _props$filterValue;
    if (isArray(option) && (props === null || props === void 0 || (_props$filterValue = props.filterValue) === null || _props$filterValue === void 0 ? void 0 : _props$filterValue.length) > 0) {
      var _props$filterValue2;
      var origialValues = option;
      var values = origialValues;
      var filterValue = (_props$filterValue2 = props === null || props === void 0 ? void 0 : props.filterValue) !== null && _props$filterValue2 !== void 0 ? _props$filterValue2 : ['all'];
      if (!isArray(filterValue)) {
        filterValue = [filterValue];
      }
      if ((origialValues === null || origialValues === void 0 ? void 0 : origialValues.length) > 1 && valueExists(origialValues.map(function (item) {
        return item.value;
      }), filterValue)) {
        values = origialValues.filter(function (item) {
          return !filterValue.includes(item === null || item === void 0 ? void 0 : item.value);
        });
      }
      option = values;
    }
    setSOption(option);
  }, [name, id, parentIndex]);
  return createElement("div", {
    className: "wprf-select-wrapper"
  }, createElement(ReactSelect, {
    isDisabled: props === null || props === void 0 ? void 0 : props.disable,
    className: "wprf-select",
    classNamePrefix: "wprf-select",
    isSearchable: search !== null && search !== void 0 ? search : false,
    id: id,
    name: name,
    isMulti: multiple !== null && multiple !== void 0 ? multiple : false,
    placeholder: placeholder,
    isLoading: isLoading,
    options: options,
    value: selectedOption,
    onMenuOpen: handleMenuOpen,
    onMenuClose: handleMenuClose,
    isOptionDisabled: function isOptionDisabled(option) {
      return option === null || option === void 0 ? void 0 : option.disabled;
    },
    onChange: handleOptionChange // option or options
  }));
};

var Select$1 = withLabel(Select);

var SelectAsync = function SelectAsync(props) {
  var builderContext = useBuilderContext();
  var id = props.id,
    name = props.name,
    multiple = props.multiple,
    placeholder = props.placeholder,
    onChange = props.onChange;
    props.parentIndex;
  var _useState = useState(builderContext.eligibleOptions(props.options)),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = useState(props === null || props === void 0 ? void 0 : props.value),
    _useState4 = _slicedToArray(_useState3, 2),
    sOption = _useState4[0],
    setSOption = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAjaxRunning = _useState6[0],
    setIsAjaxRunning = _useState6[1];
  // const [lastRequest, setLastRequest] = useState("");

  var handleMenuOpen = function handleMenuOpen(inputValue, callback) {
    // AJAX
    if (props.ajax && (!props.ajax.rules || when(props.ajax.rules, builderContext.values))) {
      var _Object$keys;
      if (!inputValue) {
        callback(options);
        return;
      }
      if (inputValue.length < 3) {
        callback([{
          'label': __("Please input a minimum of 3 characters."),
          'value': null,
          'disabled': true
        }]);
        return;
      }
      var data = {
        inputValue: inputValue
      };
      (_Object$keys = Object.keys(props.ajax.data)) === null || _Object$keys === void 0 || _Object$keys.map(function (singleData) {
        if (props.ajax.data[singleData].indexOf("@") > -1) {
          var _builderContext$value;
          var eligibleKey = props.ajax.data[singleData].substr(1);
          data[singleData] = (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[eligibleKey];
        } else {
          data[singleData] = props.ajax.data[singleData];
        }
      });
      if (!isAjaxRunning && inputValue) {
        setIsAjaxRunning(true);
        // @ts-ignore
        window.lastRequest = null;
        return wpFetch({
          path: props.ajax.api,
          data: data
        }).then(function (response) {
          callback(response);
          return response;
        })["finally"](function () {
          setIsAjaxRunning(false);
          // @ts-ignore
          if (window.lastRequest) {
            // @ts-ignore
            var lr = window.lastRequest;
            // @ts-ignore
            window.lastRequest = null;
            // console.log("recursive call: ", lr, callback);

            // @ts-ignore
            handleMenuOpen.apply(void 0, _toConsumableArray(lr));
          }

          // @ts-ignore
          window.lastCompleteRequest = inputValue;
        });
      } else {
        // @ts-ignore
        window.lastRequest = [inputValue, callback];
      }
    }
  };
  useEffect(function () {
    setOptions(builderContext.eligibleOptions(props.options));
  }, [builderContext.values.source]);
  useEffect(function () {
    onChange({
      target: {
        type: "select",
        name: name,
        value: sOption,
        multiple: multiple
      }
    });
  }, [sOption]);
  return createElement("div", {
    className: "wprf-async-select-wrapper"
  }, createElement(AsyncSelect, {
    cacheOptions: true,
    loadOptions: handleMenuOpen,
    defaultOptions: options,
    isDisabled: props === null || props === void 0 ? void 0 : props.disable,
    isMulti: multiple !== null && multiple !== void 0 ? multiple : false,
    classNamePrefix: "wprf-async-select"
    // defaultMenuIsOpen={true}
    ,
    id: id,
    name: name,
    placeholder: placeholder,
    formatOptionLabel: function formatOptionLabel(option, meta) {
      var _meta$inputValue;
      if (meta !== null && meta !== void 0 && (_meta$inputValue = meta.inputValue) !== null && _meta$inputValue !== void 0 && _meta$inputValue.length && option.name) {
        var _meta$inputValue2;
        if (option.name.toLowerCase().includes(meta === null || meta === void 0 || (_meta$inputValue2 = meta.inputValue) === null || _meta$inputValue2 === void 0 ? void 0 : _meta$inputValue2.toLowerCase())) {
          var _option$name, _option$address;
          option === null || option === void 0 ? void 0 : option.name;
          var regX = new RegExp("(".concat(meta === null || meta === void 0 ? void 0 : meta.inputValue, ")"), "gi");
          var _name = (_option$name = option.name) === null || _option$name === void 0 ? void 0 : _option$name.replace(regX, "<strong style={font-weight: 900}>$1</strong>");
          var address = (_option$address = option.address) === null || _option$address === void 0 ? void 0 : _option$address.replace(regX, "<strong style={font-weight: 900}>$1</strong>");
          return createElement(Fragment, null, parse(_name || ""), " ", createElement("small", null, parse(address || "")));
        }
      }
      return createElement(Fragment, null, option.name ? createElement(Fragment, null, createElement("b", null, option.name), " ") : createElement(Fragment, null, option.label, " "), option.address && createElement("small", null, option.address));
    },
    value: sOption,
    isClearable: true,
    isOptionDisabled: function isOptionDisabled(option) {
      return option === null || option === void 0 ? void 0 : option.disabled;
    },
    onChange: function onChange(option) {
      return setSOption(option);
    } // option or options
  }));
};

var SelectAsync$1 = withLabel(SelectAsync);

var Slider = function Slider(props) {
  var name = props.name,
    id = props.id,
    label = props.label,
    units = props.units,
    value = props.value,
    min = props.min,
    max = props.max,
    unit = props.unit;
    props.tooltip;
    var reset = props.reset;
  var _useState = useState(value || 0),
    _useState2 = _slicedToArray(_useState, 2),
    isValue = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(unit),
    _useState4 = _slicedToArray(_useState3, 2),
    sunit = _useState4[0],
    setSunit = _useState4[1];
  useEffect(function () {
    if (isValue) {
      var finalValue;
      if (isNumber(isValue)) {
        if (sunit) {
          finalValue = "".concat(isValue).concat(sunit);
        } else {
          finalValue = "".concat(isValue);
        }
      } else if (isString(isValue)) {
        if (!(isValue.indexOf(sunit) > -1)) {
          finalValue = "".concat(isValue).concat(sunit);
        } else {
          finalValue = "".concat(isValue);
        }
      }
      props.onChange({
        target: {
          type: 'slider',
          name: name,
          value: finalValue
        }
      });
    }
  }, [isValue, sunit]);
  return createElement("div", {
    className: "wprf-slider-wrap"
  }, createElement("div", {
    className: "wprf-slider-control-head"
  }, createElement(Label, {
    htmlFor: id || name
  }, label), isArray(units) && units.length > 0 && createElement("div", {
    className: "wprf-slider-units"
  }, units.map(function (unit, index) {
    return createElement(Button$2, {
      key: index,
      isSmall: true,
      isPrimary: true,
      onClick: function onClick() {
        return setSunit(unit);
      },
      className: unit == sunit ? "unit-active" : ""
    }, unit);
  }))), createElement("div", {
    className: "wprf-slider-control"
  }, createElement(RangeControl, {
    allowReset: reset !== null && reset !== void 0 ? reset : true,
    value: parseInt(isValue),
    min: min,
    max: max
    // showTooltip={tooltip ?? false}
    ,
    onChange: function onChange(value) {
      return setValue(value);
    }
  })));
};

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Textarea = function Textarea(props) {
  var validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context']);
  var handleChange = useCallback(function (event) {
    return validProps.onChange(event, {
      isPro: !!props.is_pro
    });
  }, [validProps === null || validProps === void 0 ? void 0 : validProps.value]);
  return /*#__PURE__*/React.createElement('textarea', _objectSpread$2(_objectSpread$2({}, validProps), {}, {
    onChange: handleChange,
    rows: 2
  }));
};
var Textarea$1 = withLabel( /*#__PURE__*/React.memo(Textarea));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Toggle = function Toggle(props) {
  var passedOptions = props.options,
    value = props.value,
    multiple = props.multiple,
    prevStyles = props.style;
  var options = sortingFields(passedOptions);
  var styles = _objectSpread$1({
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
        return _objectSpread$1(_objectSpread$1({}, prevState), {}, _defineProperty({}, target.value, target.checked));
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
      }, createElement(GenericToggle$1, _objectSpread$1(_objectSpread$1({}, item), {}, {
        context: props === null || props === void 0 ? void 0 : props.context,
        id: item.value,
        checked: typeof localState[item.value] === 'undefined' ? true : localState !== null && localState !== void 0 && localState[item.value] ? value : !!(localState !== null && localState !== void 0 && localState[item.value]),
        type: 'checkbox',
        onChange: handleChange,
        style: styles
      })));
    })));
  }
  return createElement(GenericToggle$1, props);
};

var InnerContent = function InnerContent(_ref) {
  var fields = _ref.fields,
    parentIndex = _ref.parentIndex,
    context = _ref.context;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    _fields = _useState2[0],
    setFields = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    fieldViews = _useState4[0],
    setFieldViews = _useState4[1];
  // Fields Sorting
  useEffect(function () {
    var newFields = sortingFields(fields);
    context.setFormField([parentIndex, 'fields'], newFields);
    setFields(newFields);
  }, []);
  useEffect(function () {
    if (isArray(_fields) && _fields.length > 0) {
      var allFields = _fields.map(function (item, index) {
        var pIndex = [].concat(_toConsumableArray(parentIndex), ['fields', index]);
        if ((item === null || item === void 0 ? void 0 : item.type) === 'section') {
          return createElement(GenericField, _extends$1({
            key: "input-".concat(item.name, "-").concat(index)
          }, item, {
            parentIndex: pIndex
          }));
        } else if (item) {
          return createElement(Field$1, _extends$1({
            key: "input-".concat(item.name, "-").concat(index)
          }, item, {
            parentIndex: pIndex
          }));
        }
        return createElement(Fragment, null);
      });
      setFieldViews(allFields);
    }
  }, [_fields]);
  return createElement(Fragment, null, fieldViews);
};

var _excluded = ["fields", "active", "setActive", "submit"];
var Content = function Content(_ref) {
  var _builderContext$value, _builderContext$value2, _builderContext$value3, _rest$step, _rest$step2, _rest$step3, _rest$step4, _submit$show;
  var tabs = _ref.fields,
    active = _ref.active,
    setActive = _ref.setActive,
    submit = _ref.submit,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (tabs === undefined) {
    throw new Error(__("There are no #tabs args defined in props.", "betterdocs"));
  }
  var builderContext = useBuilderContext();
  var parentIndex = rest.parentIndex || [];
  if (!isArray(tabs)) {
    throw new Error(__("Not an array.", "betterdocs"));
  }
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tabsFields = _useState2[0],
    setTabsFields = _useState2[1];
  useEffect(function () {
    var filteredTabs = tabs.filter(function (tab) {
      return isVisible(builderContext === null || builderContext === void 0 ? void 0 : builderContext.values, tab);
    });
    setTabsFields(filteredTabs);
  }, [tabs, builderContext === null || builderContext === void 0 || (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value.source]);
  return createElement("div", {
    className: classNames("wprf-tab-content-wrapper", builderContext === null || builderContext === void 0 || (_builderContext$value2 = builderContext.values) === null || _builderContext$value2 === void 0 ? void 0 : _builderContext$value2.source, builderContext === null || builderContext === void 0 || (_builderContext$value3 = builderContext.values) === null || _builderContext$value3 === void 0 ? void 0 : _builderContext$value3.themes)
  }, createElement("div", {
    className: "wprf-tab-flex"
  }, createElement("div", {
    className: "wprf-tab-contents"
  }, tabs.map(function (tab, index) {
    var _rest$title;
    if (!isVisible(builderContext === null || builderContext === void 0 ? void 0 : builderContext.values, tab)) {
      return "";
    }
    var componentClasses = classNames("wprf-tab-content", "wprf-tab-".concat(tab === null || tab === void 0 ? void 0 : tab.id), {
      "wprf-active": active === tab.id
    });
    return createElement("div", {
      id: tab === null || tab === void 0 ? void 0 : tab.id,
      className: componentClasses,
      key: tab === null || tab === void 0 ? void 0 : tab.id
    }, createElement("div", {
      className: "wprf-tab-heading-wrapper"
    }, (tab === null || tab === void 0 ? void 0 : tab.label) && ((_rest$title = rest === null || rest === void 0 ? void 0 : rest.title) !== null && _rest$title !== void 0 ? _rest$title : true) && createElement("h4", null, tab.label), createElement("div", null, (rest === null || rest === void 0 ? void 0 : rest.content_heading) && Object.keys(rest.content_heading).map(function (button, index) {
      return createElement(React.Fragment, {
        key: "button_".concat(button, "_").concat(index)
      }, createElement(Field$1, rest.content_heading[button]));
    }))), createElement(InnerContent, {
      context: builderContext,
      fields: tab === null || tab === void 0 ? void 0 : tab.fields,
      parentIndex: [].concat(_toConsumableArray(parentIndex), [index])
    }));
  })), applyFilters("wprf_tab_content", "", rest)), (rest === null || rest === void 0 || (_rest$step = rest.step) === null || _rest$step === void 0 ? void 0 : _rest$step.show) && (rest !== null && rest !== void 0 && (_rest$step2 = rest.step) !== null && _rest$step2 !== void 0 && _rest$step2.rules ? when(rest === null || rest === void 0 || (_rest$step3 = rest.step) === null || _rest$step3 === void 0 ? void 0 : _rest$step3.rules, {
    rest: rest,
    config: {
      active: active
    }
  }) : true) && createElement(SteppedButton$1, _extends$1({
    fields: tabsFields,
    active: active,
    setActive: setActive,
    config: (_rest$step4 = rest.step) !== null && _rest$step4 !== void 0 ? _rest$step4 : {
      show: false
    }
  }, rest)), ((_submit$show = submit === null || submit === void 0 ? void 0 : submit.show) !== null && _submit$show !== void 0 ? _submit$show : true) && (submit !== null && submit !== void 0 && submit.rules ? when(submit === null || submit === void 0 ? void 0 : submit.rules, {
    rest: rest,
    config: {
      active: active
    }
  }) : true) && createElement(Submit, submit));
};

var Menu = function Menu(props) {
  var _context$values, _context$values2;
  if (props.fields === undefined) {
    throw new Error(__("There are no tabs defined!", "betterdocs"));
  }
  var active = props.active,
    setActive = props.setActive,
    tabs = props.fields,
    context = props.context;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tabsFields = _useState2[0],
    setTabsFields = _useState2[1];
  useEffect(function () {
    var filteredTabs = tabs.filter(function (tab) {
      return isVisible(context === null || context === void 0 ? void 0 : context.values, tab);
    });
    setTabsFields(filteredTabs);
  }, [tabs, context === null || context === void 0 || (_context$values = context.values) === null || _context$values === void 0 ? void 0 : _context$values.source]);
  var componentClasses = classNames("wprf-tab-menu-wrapper", props === null || props === void 0 ? void 0 : props.className, {
    "wprf-tab-menu-sidebar": props === null || props === void 0 ? void 0 : props.sidebar
  }, context === null || context === void 0 || (_context$values2 = context.values) === null || _context$values2 === void 0 ? void 0 : _context$values2.source);
  var currentTabIndex = tabsFields.findIndex(function (tab) {
    return tab.id === active;
  });
  return createElement("div", {
    className: componentClasses
  }, createElement("ul", {
    className: "wprf-tab-nav"
  }, tabsFields.map(function (tab, index) {
    var _classNames, _context$icons, _tab$icon, _tab$icon2;
    return createElement("li", {
      className: classNames("wprf-tab-nav-item", (_classNames = {}, _defineProperty(_classNames, "".concat(tab.classes), tab.classes), _defineProperty(_classNames, "wprf-active-nav", active === tab.id), _defineProperty(_classNames, "wprf-tab-complete", props !== null && props !== void 0 && props.completionTrack ? index <= currentTabIndex : false), _classNames)),
      "data-key": tab.id,
      key: tab.id,
      onClick: function onClick() {
        var _props$clickable;
        return ((_props$clickable = props === null || props === void 0 ? void 0 : props.clickable) !== null && _props$clickable !== void 0 ? _props$clickable : true) && setActive(tab.id);
      }
    }, props !== null && props !== void 0 && props.tab_number ? createElement("span", {
      className: "icon"
    }, createElement("span", {
      className: "count"
    }, index + 1)) : "", (tab === null || tab === void 0 ? void 0 : tab.icon) && (isString(tab.icon) && !isObject(tab.icon) ? createElement("img", {
      src: tab.icon,
      alt: tab === null || tab === void 0 ? void 0 : tab.label
    }) : isObject(tab.icon) ? context === null || context === void 0 || (_context$icons = context.icons) === null || _context$icons === void 0 || (_context$icons = _context$icons[tab === null || tab === void 0 || (_tab$icon = tab.icon) === null || _tab$icon === void 0 ? void 0 : _tab$icon.type]) === null || _context$icons === void 0 ? void 0 : _context$icons[tab === null || tab === void 0 || (_tab$icon2 = tab.icon) === null || _tab$icon2 === void 0 ? void 0 : _tab$icon2.name] : ""), createElement("span", null, tab.label), tab !== null && tab !== void 0 && tab.is_pro ? createElement(BadgeComp, {
      componentClasses: "wprf-badge-item",
      label: "Pro"
    }) : createElement(Fragment, null));
  })));
};

var Tab = function Tab(props) {
  var _props$save;
  // const builderContextState = useBuilder(props);

  var builderContext = useBuilderContext();
  var _useState = useState((props === null || props === void 0 ? void 0 : props.value) || (props === null || props === void 0 ? void 0 : props.active)),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  useEffect(function () {
    if (props !== null && props !== void 0 && props.save_locally) {
      var _localStorage$getItem;
      var locally_saved_data = (_localStorage$getItem = localStorage.getItem("quickbuilder_active_tab")) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : null;
      locally_saved_data && setActiveTab(JSON.parse(locally_saved_data));
    }
  }, []);
  var saveValue = (_props$save = props === null || props === void 0 ? void 0 : props.save) !== null && _props$save !== void 0 ? _props$save : true;
  var componentClasses = classNames("wp-react-form wprf-tabs-wrapper", props === null || props === void 0 ? void 0 : props.className, {
    "wprf-tab-menu-as-sidebar": props === null || props === void 0 ? void 0 : props.sidebar
  });
  useEffect(function () {
    var _props$value;
    var _activeTab = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : props.active;
    if (_activeTab != activeTab) {
      setActiveTab(_activeTab);
    }
  }, [props === null || props === void 0 ? void 0 : props.value]);
  useEffect(function () {
    if (props !== null && props !== void 0 && props.save_locally) {
      localStorage.setItem("quickbuilder_active_tab", JSON.stringify(activeTab));
    }
  }, [activeTab]);
  useEffect(function () {
    if (props.value !== activeTab && saveValue) {
      props.onChange({
        target: {
          type: "button",
          name: props.name,
          value: activeTab
        }
      });
    }
  }, [activeTab]);
  return createElement("div", {
    className: componentClasses
  }, createElement(Menu, _extends$1({}, props, {
    active: activeTab,
    setActive: function setActive(tabId) {
      return setActiveTab(tabId);
    },
    fields: props.fields,
    context: builderContext
  })), createElement(Content, _extends$1({}, props, {
    fields: props.fields,
    active: activeTab,
    setActive: function setActive(tabId) {
      return setActiveTab(tabId);
    },
    submit: props === null || props === void 0 ? void 0 : props.submit
  })));
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
registerStore("formbuilder", store);
var FormBuilder = function FormBuilder(props) {
  var _tabs;
  var builderContext = useBuilderContext();
  var tabs = props.tabs;
  if (!((_tabs = tabs) !== null && _tabs !== void 0 && _tabs.type)) {
    var _props$config;
    tabs = _objectSpread(_objectSpread({}, props.config), {}, {
      value: props === null || props === void 0 || (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.active,
      fields: props.tabs,
      tabs: undefined,
      submit: props === null || props === void 0 ? void 0 : props.submit,
      onChange: function onChange(event) {
        var _event$target;
        builderContext.setActiveTab(event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value);
      }
    });
  }
  return createElement(Fragment, null, createElement(Tab, tabs));
};

export { Action, BuilderConsumer, BuilderProvider, Button$1 as Button, CheckboxSelect$1 as CheckboxSelect, CodeViewer$1 as CodeViewer, ColorPicker$1 as ColorPicker, Column, CopyToClipboard$1 as CopyToClipboard, Date$1 as Date, Editor$1 as Editor, Field$1 as Field, FormBuilder, GenericField, GenericInput, Group$1 as Group, Image, Input$1 as Input, JsonUploader$1 as JsonUploader, Label, Media$1 as Media, Message, Modal, ObjectFilter, Radio, Repeater, ResponsiveNumber$1 as ResponsiveNumber, Row, Section$1 as Section, Select$1 as Select, SelectAsync$1 as SelectAsync, Slider, SweetAlert, Textarea$1 as Textarea, Toggle, _extends, builderReducer, executeChange, getIn, getSelectedValues, getStoreData, getTime, hitAAJX, isArray, isEmptyObj, isExists, isFunction, isNumber, isObject, isString, isVisible, merge, objectWithoutPropertiesLoose, processAjaxData, setIn, setStoreData, sortingFields, triggerDefaults, useBuilder, useBuilderContext, useDefaults, validFieldProps, valueExists, when, withLabel, withProps, withState, wpFetch };
