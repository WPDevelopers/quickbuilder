(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@wordpress/data'), require('@wordpress/i18n'), require('intersect'), require('@wordpress/api-fetch'), require('lodash-es'), require('@wordpress/date'), require('moment'), require('@wordpress/hooks'), require('classnames'), require('sweetalert2'), require('react-select'), require('@wordpress/components'), require('copy-to-clipboard'), require('react-draft-wysiwyg'), require('draft-js'), require('draftjs-to-html'), require('html-to-draftjs'), require('react-draft-wysiwyg/dist/react-draft-wysiwyg.css'), require('@wordpress/media-utils'), require('react-bootstrap-sweetalert'), require('react-sortablejs'), require('uuid'), require('html-react-parser'), require('react-select/async')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@wordpress/data', '@wordpress/i18n', 'intersect', '@wordpress/api-fetch', 'lodash-es', '@wordpress/date', 'moment', '@wordpress/hooks', 'classnames', 'sweetalert2', 'react-select', '@wordpress/components', 'copy-to-clipboard', 'react-draft-wysiwyg', 'draft-js', 'draftjs-to-html', 'html-to-draftjs', 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css', '@wordpress/media-utils', 'react-bootstrap-sweetalert', 'react-sortablejs', 'uuid', 'html-react-parser', 'react-select/async'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.quickbuilder = {}, global.React, global.wpData, global.wpI18n, global.intersect, global.wpApiFetch, global.lodashEs, global.wpDate, global.momentLib, global.wpHooks, global.classNames, global.sweetalert2, global.reactSelect, global.wpComponents, global.copy, global.reactDraftWysiwyg, global.draftJs, global.draftjsToHtml, global.htmlToDraftjs, null, global.wpMedia, global.sweetalert, global.reactSortablejs, global.uuid, global.parse, global.AsyncSelect));
})(this, (function (exports, React, data, i18n, intersect, apiFetch, lodashEs, date, moment, hooks, classNames, Swal, ReactSelect, components, copy, reactDraftWysiwyg, draftJs, draftToHtml, htmlToDraft, reactDraftWysiwyg_css, mediaUtils, SweetAlert$1, reactSortablejs, uuid, parse, AsyncSelect) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var intersect__default = /*#__PURE__*/_interopDefaultLegacy(intersect);
  var apiFetch__default = /*#__PURE__*/_interopDefaultLegacy(apiFetch);
  var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
  var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
  var Swal__default = /*#__PURE__*/_interopDefaultLegacy(Swal);
  var ReactSelect__default = /*#__PURE__*/_interopDefaultLegacy(ReactSelect);
  var copy__default = /*#__PURE__*/_interopDefaultLegacy(copy);
  var draftToHtml__default = /*#__PURE__*/_interopDefaultLegacy(draftToHtml);
  var htmlToDraft__default = /*#__PURE__*/_interopDefaultLegacy(htmlToDraft);
  var SweetAlert__default = /*#__PURE__*/_interopDefaultLegacy(SweetAlert$1);
  var parse__default = /*#__PURE__*/_interopDefaultLegacy(parse);
  var AsyncSelect__default = /*#__PURE__*/_interopDefaultLegacy(AsyncSelect);

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof$1(obj);
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

  function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$g(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var wpFetch = function wpFetch(params) {
    var args = _objectSpread$g(_objectSpread$g({}, params), {}, {
      method: "POST"
    });
    return apiFetch__default["default"](args);
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
    var path = lodashEs.toPath(key);
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
    var res = lodashEs.clone(obj); // this keeps inheritance when obj is a class

    var resVal = res;
    var i = 0;
    var pathArray = lodashEs.toPath(path);
    for (; i < pathArray.length - 1; i++) {
      var currentPath = pathArray[i];
      var currentObj = getIn(obj, pathArray.slice(0, i + 1));
      if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
        resVal = resVal[currentPath] = lodashEs.clone(currentObj);
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
            var _response$data3;
            downloadFile({
              data: JSON.stringify(response.data.download),
              fileName: (response === null || response === void 0 ? void 0 : (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.filename) || 'export.json',
              fileType: 'text/json'
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
    var settings = date.__experimentalGetSettings();
    var _value = moment__default["default"].utc(value ? value : undefined).utcOffset(+(settings === null || settings === void 0 ? void 0 : (_settings$timezone = settings.timezone) === null || _settings$timezone === void 0 ? void 0 : _settings$timezone.offset), keepLocalTime);
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
            return (_intersect = intersect__default["default"](newData, checkAgainst)) === null || _intersect === void 0 ? void 0 : _intersect.length;
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
        throw Error(i18n.__('"allOf" condition requires an array as #3 argument', 'betterdocs'));
      }
      var dataValues = get(data, key);
      return values.every(function (currentValue) {
        return dataValues.includes(currentValue);
      });
    },
    anyOf: function anyOf(key, values, data) {
      if (!Array.isArray(values)) {
        throw Error(i18n.__('"anyOf" condition requires an array as #3 argument', 'betterdocs'));
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
        throw Error(i18n.__('"not" can have only one comparison rule, multiple rules given', 'betterdocs'));
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
      throw Error(i18n.sprintf(i18n.__("Invalid comparison rule %s.", 'betterdocs'), condition));
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

  function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$f(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
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

  var BuilderContext = /*#__PURE__*/React.createContext(undefined);
  BuilderContext.displayName = process.env.NODE_ENV === 'production' ? 'Anonymous' : 'BuilderContext';
  var BuilderProvider = BuilderContext.Provider;
  var BuilderConsumer = BuilderContext.Consumer;
  function useBuilderContext() {
    var builderContext = React.useContext(BuilderContext);
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
    var _useState = React.useState(props[propertyName]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldOptions = _useState2[0],
      setFieldOptions = _useState2[1];
    var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      lOptions = _useState4[0],
      setOptions = _useState4[1];
    var _useState5 = React.useState({
        options: null,
        parentIndex: null
      }),
      _useState6 = _slicedToArray(_useState5, 2),
      isData = _useState6[0],
      setData = _useState6[1];
    var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedOption = _useState8[0],
      setSelectedOption = _useState8[1];
    var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      option = _useState10[0],
      setOption = _useState10[1];
    React.useEffect(function () {
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
    React.useEffect(function () {
      setFieldOptions(props[propertyName]);
      setOptions(builderContext.eligibleOptions(props[propertyName]));
    }, [props]);
    React.useEffect(function () {
      setOptions(builderContext.eligibleOptions(fieldOptions));
    }, [fieldOptions]);
    React.useEffect(function () {
      if (isData.options != null) {
        // builderContext.setFormField(isData.parentIndex, [...props[propertyName], ...isData.options])
        // setOptions(builderContext.eligibleOptions(isData.options));
        setFieldOptions(isData.options);
      }
    }, [isData]);
    React.useEffect(function () {
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
    React.useEffect(function () {
      if (lOptions.filter(function (opt) {
        return opt.value === option;
      }).length === 0) {
        var _options$;
        var _options = sortingFields(lOptions);
        setOption((_options === null || _options === void 0 ? void 0 : (_options$ = _options[0]) === null || _options$ === void 0 ? void 0 : _options$.value) || savedValue);
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
      props === null || props === void 0 ? void 0 : props.trigger.map(function (trigger) {
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

  function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$e(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  // import store from "../store";

  var SweetAlert = function SweetAlert() {
    var _args$target, _args$type, _args$title, _args$text, _args$icon, _args$timer;
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Swal__default["default"].fire(_objectSpread$e({
      target: (_args$target = args === null || args === void 0 ? void 0 : args.target) !== null && _args$target !== void 0 ? _args$target : "#betterdocs",
      type: (_args$type = args === null || args === void 0 ? void 0 : args.type) !== null && _args$type !== void 0 ? _args$type : "success",
      html: args === null || args === void 0 ? void 0 : args.html,
      title: (_args$title = args === null || args === void 0 ? void 0 : args.title) !== null && _args$title !== void 0 ? _args$title : i18n.__("Title Goes Here: title", 'betterdocs'),
      text: (_args$text = args === null || args === void 0 ? void 0 : args.text) !== null && _args$text !== void 0 ? _args$text : i18n.__("Test Goes Here: text", 'betterdocs'),
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
    return data.select("formbuilder");
  };
  var setStoreData = function setStoreData() {
    return data.dispatch("formbuilder");
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

  function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$d(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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

  function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$c(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var useBuilder = function useBuilder(props) {
    var _state$isSubmitting;
    // Set is Mounted or NOT
    var isMounted = React.useRef(false);
    React.useEffect(function () {
      isMounted.current = true;
      return function () {
        isMounted.current = false;
      };
    }, []);
    var _useReducer = React.useReducer(builderReducer, _objectSpread$c(_objectSpread$c({}, props), {}, {
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
    var getFieldValue = React.useCallback(function (name) {
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

    var executeBlur = React.useCallback(function (event) {
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
    var executeChange$1 = React.useCallback(function (eventOrTextValue, maybePath, validProps) {
      if (validProps !== null && validProps !== void 0 && validProps.isPro && Boolean(state.is_pro_active) === false) {
        return;
      }
      var _eChange = executeChange(eventOrTextValue, maybePath),
        field = _eChange.field,
        value = _eChange.val;
      if (field) {
        setFieldValue(field, value);
        hooks.doAction('quickBuilder_setFieldValue', field, value, validProps);
      }
    }, [setFieldValue, state.values]);
    var handleChange = useEventCallback(function (eventOrString, validProps) {
      if (validProps !== null && validProps !== void 0 && validProps.isPro && Boolean(state.is_pro_active) === false) {
        var _state$alerts, _state$alerts$pro_ale;
        (_state$alerts = state.alerts) === null || _state$alerts === void 0 ? void 0 : (_state$alerts$pro_ale = _state$alerts.pro_alert(validProps === null || validProps === void 0 ? void 0 : validProps.popup)) === null || _state$alerts$pro_ale === void 0 ? void 0 : _state$alerts$pro_ale.fire();
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
    var getFieldProps = React.useCallback(function (args) {
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
        valueState = (_parentValue$validPro = _parentValue === null || _parentValue === void 0 ? void 0 : (_parentValue$validPro2 = _parentValue[validProps.index]) === null || _parentValue$validPro2 === void 0 ? void 0 : _parentValue$validPro2[name]) !== null && _parentValue$validPro !== void 0 ? _parentValue$validPro : defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps["default"];
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
    var getFieldMeta = React.useCallback(function (name, props) {
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
    var eligibleOptions = React.useCallback(function (options) {
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
    var eligibleOption = React.useCallback(function (options, value) {
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
    var getFieldHelpers = React.useCallback(function () {
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
    var getTabFields = React.useCallback(function (parentIndex) {
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
  var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  var useEventCallback = function useEventCallback(fn) {
    var ref = React.useRef(fn);
    useIsomorphicLayoutEffect(function () {
      ref.current = fn;
    });
    return React.useCallback(function () {
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
    var componentClasses = classNames__default["default"]("wprf-row clearfix wprf-flex", props === null || props === void 0 ? void 0 : props.className);
    return React.createElement("div", {
      className: componentClasses
    }, props === null || props === void 0 ? void 0 : props.children);
  };

  var Column = function Column(props) {
    var _classNames;
    var componentClasses = classNames__default["default"]("wprf-column", props === null || props === void 0 ? void 0 : props.className, (_classNames = {}, _defineProperty(_classNames, "wprf-column-".concat(12 / (props === null || props === void 0 ? void 0 : props.column)), (props === null || props === void 0 ? void 0 : props.column) && props.column !== 12), _defineProperty(_classNames, "wprf-column-12", props.column === 12), _classNames));
    return React.createElement("div", {
      className: componentClasses
    }, props === null || props === void 0 ? void 0 : props.children);
  };

  var Label = function Label(props) {
    var _props$badge, _props$badge2, _props$badge3;
    var componentClasses = classNames__default["default"]("wprf-input-label", props === null || props === void 0 ? void 0 : props.className);
    return React.createElement("label", {
      htmlFor: props === null || props === void 0 ? void 0 : props.htmlFor,
      className: componentClasses
    }, (props === null || props === void 0 ? void 0 : (_props$badge = props.badge) === null || _props$badge === void 0 ? void 0 : _props$badge.value) && React.createElement("div", {
      className: "wprf-badge"
    }, React.createElement("sup", {
      className: classNames__default["default"]("wprf-badge-item", {
        'wprf-badge-active': props === null || props === void 0 ? void 0 : (_props$badge2 = props.badge) === null || _props$badge2 === void 0 ? void 0 : _props$badge2.active
      })
    }, props === null || props === void 0 ? void 0 : (_props$badge3 = props.badge) === null || _props$badge3 === void 0 ? void 0 : _props$badge3.label)), !(props !== null && props !== void 0 && props.src) && (props === null || props === void 0 ? void 0 : props.children), (props === null || props === void 0 ? void 0 : props.src) && React.createElement(Image, {
      className: "wprf-label-image",
      src: props.src,
      alt: props === null || props === void 0 ? void 0 : props.label
    }));
  };

  var Image = function Image(props) {
    if (!(props !== null && props !== void 0 && props.src)) {
      return React.createElement("p", null, "No Source( src ) Defined");
    }
    var componentClasses = classNames__default["default"](["wprf-input-image", props === null || props === void 0 ? void 0 : props.className]);
    return React.createElement("img", {
      className: componentClasses,
      src: props === null || props === void 0 ? void 0 : props.src,
      alt: props === null || props === void 0 ? void 0 : props.alt
    });
  };

  var BadgeComp = function BadgeComp(_ref) {
    var componentClasses = _ref.componentClasses,
      label = _ref.label;
    return React.createElement("div", {
      className: "wprf-badge"
    }, React.createElement("span", {
      className: "wprf-badge-icon"
    }, React.createElement("i", {
      className: "btd-icon btd-crown"
    })), React.createElement("span", {
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
    var componentClasses = classNames__default["default"]("wprf-badge-item", {
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
    return React.createElement("div", _extends$1({
      className: classNames__default["default"]("wprf-badge-wrapper", {
        "pro-deactivated": !builderContext.is_pro_active
      })
    }, componentProps), position === "left" && label.length > 0 && React.createElement(React.Fragment, null, renderLabel(React.createElement(BadgeComp, {
      componentClasses: componentClasses,
      label: label
    }), "left")), position === "right" && label.length > 0 && React.createElement(React.Fragment, null, renderLabel(React.createElement(BadgeComp, {
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

    return React.createElement("div", {
      className: "wprf-control-label"
    }, badge ? React.createElement("div", {
      className: "wprf-label-with-badge"
    }, badgePosition == "left" && badge, React.createElement("label", {
      htmlFor: id
    }, label), badgePosition == "right" && badge) : React.createElement("label", {
      htmlFor: id
    }, label), (rest === null || rest === void 0 ? void 0 : rest.label_subtitle) && React.createElement("p", {
      className: "wprf-label-subtitle",
      dangerouslySetInnerHTML: {
        __html: rest === null || rest === void 0 ? void 0 : rest.label_subtitle
      }
    }), (rest === null || rest === void 0 ? void 0 : rest.link) && React.createElement("a", {
      rel: "nofollow",
      target: "_blank",
      href: rest.link
    }, context === null || context === void 0 ? void 0 : (_context$icons = context.icons) === null || _context$icons === void 0 ? void 0 : _context$icons.link));
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
    var _useState = React.useState(descriptionText),
      _useState2 = _slicedToArray(_useState, 2),
      description = _useState2[0],
      setDescription = _useState2[1];
    React.useEffect(function () {
      if (type === "toggle" && enableDisableActive) {
        if (value) {
          setDescription("".concat(i18n.__("Enabled", "quickbuilder"), " ").concat(descriptionText !== null && descriptionText !== void 0 ? descriptionText : ''));
        } else {
          setDescription("".concat(i18n.__("Disabled", "quickbuilder"), " ").concat(descriptionText !== null && descriptionText !== void 0 ? descriptionText : ''));
        }
      }
    }, [value]);
    return React.createElement("div", {
      className: "wprf-control-field"
    }, position === "left" && description && React.createElement("p", {
      className: "wprf-description",
      dangerouslySetInnerHTML: {
        __html: description
      }
    }), renderComponent(), position === "right" && description && React.createElement("p", {
      className: "wprf-description",
      dangerouslySetInnerHTML: {
        __html: description
      }
    }), help && React.createElement("p", {
      className: "wprf-help",
      dangerouslySetInnerHTML: {
        __html: help
      }
    }));
  };

  var _excluded$3 = ["label", "id", "name", "type", "style", "is_pro", "badge", "value", "enable_disable_text_active"];
  function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$b(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      var styleClasses = classNames__default["default"]((_classNames = {}, _defineProperty(_classNames, "wprf-style-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type) || false), _defineProperty(_classNames, "wprf-label-none", label === undefined || label === "" || label.length === 0), _defineProperty(_classNames, "wprf-".concat((styles === null || styles === void 0 ? void 0 : (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position) || "inline", "-label"), ((_styles$label$positio = styles === null || styles === void 0 ? void 0 : (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position) !== null && _styles$label$positio !== void 0 ? _styles$label$positio : true) && label != undefined), _classNames));
      if (type === "hidden") {
        return React.createElement(WrappedComponent, _extends$1({}, props, {
          id: id
        }));
      }
      var validProps = validFieldProps(props, ["description", "label", "help", "style"]);
      var componentClasses = classNames__default["default"]("wprf-control-wrapper", "wprf-type-".concat(type), styleClasses, props === null || props === void 0 ? void 0 : props.classes, _defineProperty({}, "wprf-name-".concat(name), name));
      return React.createElement("div", {
        className: componentClasses
      }, is_pro == true && React.createElement(React.Fragment, null, React.createElement(Badge, _extends$1({}, badge, rest, {
        renderLabel: function renderLabel(badge, position) {
          return React.createElement(ControlLabel, _extends$1({}, validProps, {
            context: rest === null || rest === void 0 ? void 0 : rest.context,
            id: id,
            label: label,
            badge: badge,
            badgePosition: position
          }));
        },
        renderComponent: function renderComponent() {
          var _styles$description;
          return React.createElement(ControlField, {
            help: null,
            description: props === null || props === void 0 ? void 0 : props.description,
            position: styles === null || styles === void 0 ? void 0 : (_styles$description = styles.description) === null || _styles$description === void 0 ? void 0 : _styles$description.position,
            type: type,
            value: value,
            enableDisableActive: enable_disable_text_active,
            renderComponent: function renderComponent() {
              return React.createElement(WrappedComponent, _extends$1({}, validProps, {
                disable: true,
                id: id
              }));
            }
          });
        }
      })), (props === null || props === void 0 ? void 0 : props.help) && React.createElement("div", {
        className: "wprf-badge-wrapper"
      }, React.createElement("div", {
        className: "wprf-control-label"
      }), React.createElement("div", {
        className: "wprf-control-field"
      }, React.createElement("p", {
        className: "wprf-help",
        dangerouslySetInnerHTML: {
          __html: props.help
        }
      })))), (is_pro == false || is_pro == undefined) && React.createElement(React.Fragment, null, label && label.length > 0 && React.createElement(ControlLabel, _extends$1({}, validProps, {
        context: rest === null || rest === void 0 ? void 0 : rest.context,
        label: label,
        id: id
      })), React.createElement(ControlField, {
        help: props === null || props === void 0 ? void 0 : props.help,
        description: props === null || props === void 0 ? void 0 : props.description,
        position: styles === null || styles === void 0 ? void 0 : (_styles$description2 = styles.description) === null || _styles$description2 === void 0 ? void 0 : _styles$description2.position,
        type: type,
        value: value,
        enableDisableActive: enable_disable_text_active,
        renderComponent: function renderComponent() {
          return React.createElement(WrappedComponent, _extends$1({}, validProps, {
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
      var isFieldMounted = React.useRef({});
      React.useEffect(function () {
        isFieldMounted.current[props.name] = true;
        return function () {
          isFieldMounted.current[props.name] = false;
        };
      }, []);
      React.useEffect(function () {
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
      React.useEffect(function () {
        if (isFieldMounted.current[props.name]) {
          if (isObject(trigger) && !isEmptyObj(trigger)) {
            useDefaults(field.name, helpers, field.value, trigger);
          }
        }
      }, [field.value, meta.visible]);
      if (!meta.visible) {
        return React.createElement(React.Fragment, null);
      }
      return React.createElement(WrappedComponent, field);
    };
    return WithProps;
  };

  var Action = function Action(props) {
    return React.createElement(React.Fragment, null, hooks.applyFilters(props.action, '', props));
  };

  var Button = function Button(props) {
    var _props$text, _props$text2, _props$text3;
    if (!(props !== null && props !== void 0 && props.text) && (props === null || props === void 0 ? void 0 : props.group) !== true) {
      throw new Error(i18n.__("Button has a required params #text.", "betterdocs"));
    }
    var validProps = validFieldProps(props, ["is_pro", "visible", "disable", "parentIndex", "context", "onBlur", "value", "ajax", "text"]);
    var _useState = React.useState(false),
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
            var _props$ajax2, _props$ajax2$swal, _props$ajax3, _props$ajax3$swal, _props$ajax4, _props$ajax4$swal;
            var type = ((_props$ajax2 = props.ajax) === null || _props$ajax2 === void 0 ? void 0 : (_props$ajax2$swal = _props$ajax2.swal) === null || _props$ajax2$swal === void 0 ? void 0 : _props$ajax2$swal.icon) || "success";
            var message = ((_props$ajax3 = props.ajax) === null || _props$ajax3 === void 0 ? void 0 : (_props$ajax3$swal = _props$ajax3.swal) === null || _props$ajax3$swal === void 0 ? void 0 : _props$ajax3$swal.text) || "Complete";
            props.context.alerts.toast(type, message, {
              autoClose: (_props$ajax4 = props.ajax) === null || _props$ajax4 === void 0 ? void 0 : (_props$ajax4$swal = _props$ajax4.swal) === null || _props$ajax4$swal === void 0 ? void 0 : _props$ajax4$swal.autoClose
            });
          }
          if ((_props$ajax5 = props.ajax) !== null && _props$ajax5 !== void 0 && _props$ajax5.reload) {
            setTimeout(function () {
              return window.location.reload();
            }, 1000);
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
            props.context.alerts.toast("error", (err === null || err === void 0 ? void 0 : err.message) || i18n.__("Something went wrong.", "betterdocs"));
          }
        });
      }
      props !== null && props !== void 0 && props.onClick ? props === null || props === void 0 ? void 0 : props.onClick(event) : useTrigger(props);
    };
    if (props !== null && props !== void 0 && props.href) {
      return React.createElement("a", {
        href: (props === null || props === void 0 ? void 0 : props.href) === -1 ? props === null || props === void 0 ? void 0 : props.value : props === null || props === void 0 ? void 0 : props.href,
        target: props === null || props === void 0 ? void 0 : props.target,
        className: classNames__default["default"]("wprf-control wprf-button wprf-href-btn", props === null || props === void 0 ? void 0 : props.classes)
      }, props === null || props === void 0 ? void 0 : props.text);
    }
    if (props !== null && props !== void 0 && props.group) {
      var allFields = props.fields.map(function (item, index) {
        var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ["fields", index]);
        return React.createElement(Field$1, _extends$1({
          key: item.name
        }, item, {
          parentIndex: parentIndex
        }));
      });
      return React.createElement("div", {
        className: "wprf-control wprf-button-group wprf-flex"
      }, allFields);
    }
    return React.createElement(React.Fragment, null, React.createElement("button", _extends$1({}, validProps, {
      name: props.name,
      disabled: isLoading,
      onClick: handleClick,
      className: classNames__default["default"]("wprf-control wprf-button wprf-btn", props === null || props === void 0 ? void 0 : props.classes)
    }), isObject(props === null || props === void 0 ? void 0 : props.text) && props !== null && props !== void 0 && props.ajax ? isLoading ? props === null || props === void 0 ? void 0 : (_props$text = props.text) === null || _props$text === void 0 ? void 0 : _props$text.loading : props.value ? props === null || props === void 0 ? void 0 : (_props$text2 = props.text) === null || _props$text2 === void 0 ? void 0 : _props$text2.saved : props === null || props === void 0 ? void 0 : (_props$text3 = props.text) === null || _props$text3 === void 0 ? void 0 : _props$text3.normal : props === null || props === void 0 ? void 0 : props.text));
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
    var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      sOption = _useState2[0],
      setSOption = _useState2[1];
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];
    var _useState5 = React.useState(false),
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
    React.useEffect(function () {
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
    React.useEffect(function () {
      handleMenuOpen();
    }, []);
    React.useEffect(function () {
      if (props !== null && props !== void 0 && props.menuOpen) {
        handleMenuOpen();
      }
    }, [props === null || props === void 0 ? void 0 : props.menuOpen]);
    var handleOptionChange = React.useCallback(function (option) {
      var _props$filterValue;
      if (isArray(option) && (props === null || props === void 0 ? void 0 : (_props$filterValue = props.filterValue) === null || _props$filterValue === void 0 ? void 0 : _props$filterValue.length) > 0) {
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
    return React.createElement("div", {
      className: "wprf-checkbox-select-wrapper"
    }, React.createElement(ReactSelect__default["default"], {
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
    }), selectedOption !== null && selectedOption !== void 0 && selectedOption.length ? React.createElement("ul", {
      className: "wprf-selected-options"
    }, selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.map(function (item, index) {
      return React.createElement("li", {
        key: item === null || item === void 0 ? void 0 : item.label,
        className: "wprf-selected-option wprf-selected-option-".concat(index % 6 + 1)
      }, item === null || item === void 0 ? void 0 : item.label, React.createElement("button", {
        type: "button",
        className: "wprf-remove-button",
        onClick: function onClick() {
          return removeSelection(item);
        }
      }, React.createElement("i", {
        className: "btd-icon btd-close-fill"
      })));
    })) : "");
  };
  var CheckboxSelect$1 = withLabel(CheckboxSelect);

  function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var CodeViewer = function CodeViewer(props) {
    var _props$code2;
    var validProps = validFieldProps(props, ["is_pro", "visible", "trigger", "disable", "parentIndex", "context", "copyOnClick"]);
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCopied = _useState2[0],
      setIsCopied = _useState2[1];
    React.useEffect(function () {
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
      copy__default["default"]((_props$code = props === null || props === void 0 ? void 0 : props.code) !== null && _props$code !== void 0 ? _props$code : (props === null || props === void 0 ? void 0 : props["default"]) || (props === null || props === void 0 ? void 0 : props.value), {
        format: "text/plain",
        onCopy: function onCopy() {
          setIsCopied(true);
        }
      });
    };
    return React.createElement("span", {
      className: "wprf-code-viewer"
    }, React.createElement("span", {
      className: "wprf-code-viewer-header"
    }, props === null || props === void 0 ? void 0 : props.label), React.createElement("span", {
      className: "wprf-code-viewer-body"
    }, /*#__PURE__*/React__default["default"].createElement("pre", _objectSpread$a({}, validProps), (_props$code2 = props === null || props === void 0 ? void 0 : props.code) !== null && _props$code2 !== void 0 ? _props$code2 : (props === null || props === void 0 ? void 0 : props["default"]) || (props === null || props === void 0 ? void 0 : props.value)), React.createElement("span", {
      className: "wprf-clipboard-tooltip ".concat(isCopied ? "active" : "")
    }, React.createElement("span", {
      className: "wprf-clipboard-tooltip-text"
    }, React.createElement("span", null, "Copied")), React.createElement(components.Button, {
      className: "wprf-copy-icon",
      onClick: function onClick() {
        return handleCopy();
      }
    }, React.createElement("i", {
      className: "btd-icon btd-duplicate"
    })))));
  };
  var CodeViewer$1 = /*#__PURE__*/React__default["default"].memo(CodeViewer);

  var ColorPicker = function ColorPicker(props) {
    var _props$reset_text;
    var value = props.value,
      name = props.name,
      id = props.id,
      onChange = props.onChange;
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPicker = _useState2[0],
      setShowPicker = _useState2[1];
    var _useState3 = React.useState(value || null),
      _useState4 = _slicedToArray(_useState3, 2),
      color = _useState4[0],
      setColor = _useState4[1];
    var _useState5 = React.useState(value || null),
      _useState6 = _slicedToArray(_useState5, 2),
      defaultColor = _useState6[0],
      setDefaultColor = _useState6[1];
    var closeRef = React.useRef(null);
    React.useEffect(function () {
      if (value) setDefaultColor(value);else setDefaultColor("#ffffff00");
    }, []);
    var handleCloseRef = function handleCloseRef(ref) {
      React.useEffect(function () {
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
    React.useEffect(function () {
      onChange({
        target: {
          type: "colorpicker",
          name: name,
          value: color
        }
      });
    }, [color]);
    handleCloseRef(closeRef);
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "wprf-colorpicker-wrap",
      ref: closeRef
    }, React.createElement("div", {
      className: "wprf-colorpicker-screen",
      onClick: function onClick() {
        return setShowPicker(!showPicker);
      }
    }, React.createElement("input", {
      type: "hidden",
      value: value,
      name: name,
      id: id
    }), React.createElement("span", {
      className: "wprf-picker-code"
    }, value || defaultColor), React.createElement("span", {
      className: "wprf-picker-display",
      style: {
        backgroundColor: value
      }
    })), showPicker && React.createElement("div", {
      className: "wprf-colorpicker"
    }, React.createElement(components.ColorPicker, {
      color: value || defaultColor,
      onChangeComplete: function onChangeComplete(event) {
        return setColor(event.hex);
      }
    }), React.createElement("div", {
      className: "wprf-colorpicker-reset-wrap"
    }, React.createElement("button", {
      className: "wprf-colorpicker-reset",
      onClick: function onClick(e) {
        e.preventDefault();
        setColor(defaultColor);
        setShowPicker(false);
      }
    }, (_props$reset_text = props === null || props === void 0 ? void 0 : props.reset_text) !== null && _props$reset_text !== void 0 ? _props$reset_text : i18n.__("Reset", "betterdocs"))))));
  };
  var ColorPicker$1 = withLabel(ColorPicker);

  function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var CopyToClipboard = function CopyToClipboard(props) {
    var validProps = validFieldProps(props, ["is_pro", "visible", "trigger", "descriptionCopyable", "disable", "parentIndex", "context", "badge", "popup", "type", 'descriptionLabel']);
    var handleChange = React.useCallback(function (event) {
      return validProps.onChange(event, {
        popup: props === null || props === void 0 ? void 0 : props.popup,
        isPro: !!props.is_pro,
        originProps: props
      });
    }, [validProps === null || validProps === void 0 ? void 0 : validProps.value]);
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCopied = _useState2[0],
      setIsCopied = _useState2[1];
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDescriptionCopied = _useState4[0],
      setIsDescriptionCopied = _useState4[1];
    React.useEffect(function () {
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
    React.useEffect(function () {
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
      copy__default["default"](props.value, {
        format: "text/plain",
        onCopy: function onCopy() {
          setIsCopied(true);
        }
      });
    };
    var handleDescriptionCopy = function handleDescriptionCopy() {
      copy__default["default"](props.description, {
        format: "text/plain",
        onCopy: function onCopy() {
          setIsDescriptionCopied(true);
        }
      });
    };
    return React.createElement("span", {
      className: "wprf-copy-to-clipboard-wrapper"
    }, React.createElement("div", {
      className: "wprf-copy-to-clipboard-header"
    }, React.createElement(ControlLabel, props), React.createElement("span", {
      className: "wprf-clipboard-tooltip ".concat(isCopied ? "active" : "")
    }, React.createElement("span", {
      className: "wprf-clipboard-tooltip-text"
    }, React.createElement("span", null, "Copied")), React.createElement(components.Button, {
      className: "wprf-copy-icon",
      onClick: function onClick() {
        return handleCopy();
      }
    }, React.createElement("i", {
      className: "btd-icon btd-copy"
    })))), React.createElement("div", {
      className: "wprf-copy-to-clipboard-body"
    }, /*#__PURE__*/React__default["default"].createElement("input", _objectSpread$9(_objectSpread$9({}, validProps), {}, {
      type: "text",
      onChange: handleChange,
      disabled: true
    }))), React.createElement("div", {
      className: "wprf-copy-to-clipboard-footer"
    }, (props === null || props === void 0 ? void 0 : props.description) && (props === null || props === void 0 ? void 0 : props.descriptionLabel) && React.createElement("i", {
      dangerouslySetInnerHTML: {
        __html: props === null || props === void 0 ? void 0 : props.descriptionLabel
      }
    }), props !== null && props !== void 0 && props.description ? props !== null && props !== void 0 && props.descriptionCopyable ? React.createElement("div", {
      className: "wprf-clipboard-tooltip ".concat(isDescriptionCopied ? "active" : "")
    }, React.createElement("span", {
      className: "wprf-clipboard-tooltip-text"
    }, React.createElement("span", null, "Copied")), React.createElement("p", {
      className: "wprf-description",
      onClick: function onClick() {
        return handleDescriptionCopy();
      },
      dangerouslySetInnerHTML: {
        __html: props === null || props === void 0 ? void 0 : props.description
      }
    })) : React.createElement("p", {
      className: "wprf-description",
      dangerouslySetInnerHTML: {
        __html: props === null || props === void 0 ? void 0 : props.description
      }
    }) : ""));
  };
  var CopyToClipboard$1 = /*#__PURE__*/React__default["default"].memo(CopyToClipboard);

  var DateControl = function DateControl(props) {
    var _props$format;
    var name = props.name,
      value = props.value,
      _onChange = props.onChange,
      position = props.position;
    var settings = date.__experimentalGetSettings();
    var format = (_props$format = props === null || props === void 0 ? void 0 : props.format) !== null && _props$format !== void 0 ? _props$format : settings.formats.datetime;
    var _value = getTime(value);
    var is12HourTime = /a(?!\\)/i.test(settings.formats.datetime.toLowerCase().replace(/\\\\/g, "").split("").reverse().join(""));
    React.useEffect(function () {
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
    return React.createElement(components.Dropdown, {
      className: "wprf-control-datetime",
      contentClassName: "wprf-control-datetime-content",
      position: position ? position : "bottom right",
      renderToggle: function renderToggle(_ref) {
        _ref.isOpen;
          var onToggle = _ref.onToggle;
        return React.createElement(components.Button, {
          isTertiary: true,
          onClick: onToggle
        }, date.date(format, _value, -new Date().getTimezoneOffset()));
      },
      renderContent: function renderContent() {
        // console.log(getTime(value), getTime(value).toDate());

        return React.createElement(components.DateTimePicker
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
                value: moment__default["default"](date).utc().format()
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
    return React.useMemo(() => {
      if (preferredId) return preferredId;
      const id = createId(object);
      return prefix ? `${prefix}-${id}` : id;
    }, [object]);
  }

  var RepeaterField = function RepeaterField(props) {
    var _builderContext$value, _builderContext$value2;
    var builderContext = useBuilderContext();
    var fields = props.fields,
      _onChange = props.onChange,
      index = props.index,
      parent = props.parent;
    var _useState = React.useState(props.isCollapsed),
      _useState2 = _slicedToArray(_useState, 2),
      isCollapsed = _useState2[0],
      setIsCollapsed = _useState2[1];
    var instanceId = useInstanceId(RepeaterField);
    // onClick={() => setIsCollapse(!isCollapse)}
    var values = (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : (_builderContext$value2 = _builderContext$value[parent]) === null || _builderContext$value2 === void 0 ? void 0 : _builderContext$value2[index];
    var title = (values === null || values === void 0 ? void 0 : values.title) || (values === null || values === void 0 ? void 0 : values.post_title) || (values === null || values === void 0 ? void 0 : values.username) || (values === null || values === void 0 ? void 0 : values.plugin_theme_name);
    var _title = title ? title.length < 40 ? title : title.substr(0, 40) + "..." : '';
    var onClone = function onClone(event) {
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      props.clone(props.index);
    };
    var onDelete = function onDelete(event) {
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      props.remove(props.index);
    };
    React.useEffect(function () {
      builderContext.setFieldValue([parent, index, 'isCollapsed'], isCollapsed);
    }, [isCollapsed]);
    return React.createElement("div", {
      className: "wprf-repeater-field"
    }, React.createElement("div", {
      className: "wprf-repeater-field-title",
      onClick: function onClick() {
        return setIsCollapsed(!isCollapsed);
      }
    }, React.createElement("h4", null, React.createElement(components.Icon, {
      icon: "move"
    }), props.index + 1, ": ", _title), React.createElement("div", {
      className: "wprf-repeater-field-controls"
    }, React.createElement(components.Icon, {
      onClick: onClone,
      icon: "admin-page"
    }), React.createElement(components.Icon, {
      onClick: onDelete,
      icon: "trash"
    }))), !isCollapsed && React.createElement("div", {
      className: "wprf-repeater-inner-field"
    }, fields.map(function (field, fieldIndex) {
      return React.createElement(GenericField, _extends$1({
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

  function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
    var isChecked = React.useMemo(function () {
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
    var componentClasses = classNames__default["default"]("wprf-toggle-wrap", (_classNames = {}, _defineProperty(_classNames, "wprf-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type.length) > 0), _defineProperty(_classNames, "wprf-checked", Boolean(isChecked)), _defineProperty(_classNames, "wprf-label-position-".concat(styles === null || styles === void 0 ? void 0 : (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position), styles === null || styles === void 0 ? void 0 : (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position), _classNames), props === null || props === void 0 ? void 0 : props.classes);
    return React.createElement("div", {
      className: componentClasses
    }, React.createElement(GenericInput, _objectSpread$8(_objectSpread$8({}, props), {}, {
      type: 'checkbox',
      placeholder: undefined
    })), React.createElement(Label, {
      htmlFor: props.id
    }));
  };
  var GenericToggle$1 = withLabel(GenericToggle);

  var ModalContent = function ModalContent(props) {
    var _props$body;
    var isLoading = props.isLoading;
      props.closeModal;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];
    React.useEffect(function () {
      var newFields = sortingFields(props.body.fields);
      // context.setFormField([...props.parentIndex, 'fields'], newFields);
      var allFields = newFields.map(function (item, index) {
        var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ['fields', index]);
        return React.createElement(Field$1, _extends$1({
          key: item.name
        }, item, {
          parentIndex: parentIndex
        }));
      });
      setFields(allFields);
    }, []);
    return React.createElement("div", {
      className: "wprf-modal-body"
    }, isLoading && React.createElement(Loading, null), !isLoading && React.createElement(React.Fragment, null, React.createElement("div", {
      className: "wprf-modal-content"
    }, fields.length > 0 && fields), React.createElement("div", {
      className: "wprf-modal-footer clearfix"
    }, React.createElement("div", {
      className: "wprf-modal-footer-left"
    }, ((_props$body = props.body) === null || _props$body === void 0 ? void 0 : _props$body.footer) && isString(props.body.footer) && React.createElement("p", null, props.body.footer), React.createElement(GenericField, _extends$1({
      type: "button"
    }, props === null || props === void 0 ? void 0 : props.confirm_button))))));
  };

  var ModalHeader = function ModalHeader(_ref) {
    var content = _ref.content;
    return React.createElement("div", {
      className: "wprf-modal-header"
    }, content && isString(content) && React.createElement("h3", null, content));
  };

  var Loading = function Loading(props) {
    return React.createElement("p", null, i18n.__('Loading...', 'betterdocs'));
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
    var _useState = React.useState(draftJs.EditorState.createEmpty()),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];
    React.useEffect(function () {
      if (props.value) {
        var _htmlToDraft = htmlToDraft__default["default"](props.value),
          contentBlocks = _htmlToDraft.contentBlocks,
          entityMap = _htmlToDraft.entityMap;
        var contentState = draftJs.ContentState.createFromBlockArray(contentBlocks, entityMap);
        var _editorState = draftJs.EditorState.createWithContent(contentState);
        setEditorState(_editorState);
      }
    }, []);
    React.useEffect(function () {
      var tempValue = draftToHtml__default["default"](draftJs.convertToRaw(editorState.getCurrentContent()));
      props.onChange({
        target: {
          type: 'editor',
          value: tempValue,
          name: props.name
        }
      });
    }, [editorState]);
    return React.createElement(reactDraftWysiwyg.Editor, {
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
  function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
    var isChecked = React.useMemo(function () {
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
    var componentClasses = classNames__default["default"]("wprf-checkbox-wrap", (_classNames = {}, _defineProperty(_classNames, "wprf-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type.length) > 0), _defineProperty(_classNames, "wprf-checked", Boolean(isChecked)), _defineProperty(_classNames, "wprf-label-position-".concat(styles === null || styles === void 0 ? void 0 : (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position), styles === null || styles === void 0 ? void 0 : (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position), _classNames), props === null || props === void 0 ? void 0 : props.classes);
    return React.createElement("div", {
      className: componentClasses
    }, React.createElement(GenericInput, _objectSpread$7(_objectSpread$7({}, props), {}, {
      type: 'checkbox'
    })), React.createElement("label", {
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
      var _useState = React.useState({}),
        _useState2 = _slicedToArray(_useState, 2),
        localState = _useState2[0],
        setLocalState = _useState2[1];
      var handleChange = function handleChange(event) {
        var target = event.target ? event.target : event.currentTarget;
        setLocalState(function (prevState) {
          return _objectSpread$7(_objectSpread$7({}, prevState), {}, _defineProperty({}, target.value, target.checked));
        });
      };
      React.useEffect(function () {
        props.onChange({
          target: {
            type: 'checkbox',
            name: props.name,
            value: localState,
            multiple: true
          }
        });
      }, [localState]);
      React.useEffect(function () {
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
      return React.createElement("div", {
        className: "wprf-checkbox-wrapper wprf-control"
      }, React.createElement(Row, null, options.map(function (item) {
        return React.createElement(Column, {
          key: item.value,
          column: styles.column
        }, React.createElement(GenericCheckbox, _objectSpread$7(_objectSpread$7({}, item), {}, {
          context: props === null || props === void 0 ? void 0 : props.context,
          id: item.value,
          checked: typeof localState[item.value] === 'undefined' ? true : localState !== null && localState !== void 0 && localState[item.value] ? value : !!(localState !== null && localState !== void 0 && localState[item.value]),
          type: 'checkbox',
          onChange: handleChange,
          style: styles
        })));
      })));
    }
    return React.createElement(GenericInput, _objectSpread$7(_objectSpread$7({}, props), {}, {
      type: 'checkbox'
    }));
  }
  var Checkbox$1 = withLabel(Checkbox);

  var Field = function Field(props) {
    if (!props.type || props.type.length === 0) {
      console.error(props);
      throw new Error(i18n.__("Field must have a #type. see documentation.", "betterdocs"));
    }
    switch (props.type) {
      case "text":
      // case "checkbox":
      case "radio":
      case "email":
      case "range":
      case "number":
      case "hidden":
        return React.createElement(Input$1, props);
      case "checkbox":
        return React.createElement(Checkbox$1, props);
      case "textarea":
        return React.createElement(Textarea$1, props);
      case "codeviewer":
        return React.createElement(CodeViewer$1, props);
      case "copy-to-clipboard":
        return React.createElement(CopyToClipboard$1, props);
      case "message":
        return React.createElement(Message, props);
      case "select":
        return React.createElement(Select$1, props);
      case "checkbox-select":
        return React.createElement(CheckboxSelect$1, props);
      case "select-async":
        return React.createElement(SelectAsync$1, props);
      case "slider":
        return React.createElement(Slider, props);
      case "group":
        return React.createElement(Group$1, props);
      case "radio-card":
        return React.createElement(Radio, props);
      case "section":
        return React.createElement(Section$1, props);
      case "date":
        return React.createElement(Date$1, props);
      case "toggle":
        return React.createElement(Toggle, props);
      case "colorpicker":
        return React.createElement(ColorPicker$1, props);
      case "jsonuploader":
        return React.createElement(JsonUploader$1, props);
      case "repeater":
        return React.createElement(Repeater, props);
      case "media":
        return React.createElement(Media$1, props);
      case "editor":
        return React.createElement(Editor$1, props);
      case "action":
        return React.createElement(Action, props);
      case "button":
        return React.createElement(Button$1, props);
      case "modal":
        return React.createElement(Modal, props);
      case "tab":
        return React.createElement(Tab, props);
      // case "test":
      //     return <Test {...props} />;
      case "responsive-number":
        return React.createElement(ResponsiveNumber$1, props);
      default:
        var customField = hooks.applyFilters("custom_field", "", props.type, props);
        return React.createElement(React.Fragment, null, customField);
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
      throw new Error(i18n.__('You should give a #fields arguments to a group field.', 'betterdocs'));
    }
    var builderContext = useBuilderContext();
    var handleChange = React.useCallback(function (event) {
      if (event.persist) {
        event.persist();
      }
      var _executeChange = executeChange(event),
        field = _executeChange.field,
        value = _executeChange.val;
      builderContext.setFieldValue([fieldName, field], value);
    }, [props.value]);
    var newFields = sortingFields(fields);
    React.useEffect(function () {
      builderContext.setFormField([].concat(_toConsumableArray(props.parentIndex), ['fields']), newFields);
    }, []);
    var allFields = newFields.map(function (item, index) {
      var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ['fields', index]);
      return React.createElement(GenericField, _extends$1({}, rest, {
        key: item.name,
        index: props.index,
        onChange: handleChange
      }, item, {
        parenttype: "group",
        parent: fieldName,
        parentIndex: parentIndex
      }));
    });
    var innerClasses = classNames__default["default"]('wprf-group-control-inner', {
      'wprf-display-inline': (props === null || props === void 0 ? void 0 : props.display) === 'inline'
    });
    return React.createElement("div", {
      className: "wprf-group-control"
    }, React.createElement("div", {
      className: innerClasses
    }, allFields));
  };
  var Group$1 = withLabel(Group);

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Input = function Input(props) {
    var validProps = validFieldProps(props, ["is_pro", "visible", "trigger", "copyOnClick", "disable", "parentIndex", "context", "badge", "popup", "enable_disable_text_active"]);
    var handleChange = React.useCallback(function (event) {
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
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCopied = _useState2[0],
      setIsCopied = _useState2[1];
    React.useEffect(function () {
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
        copy__default["default"](props.value, {
          format: "text/plain",
          onCopy: function onCopy() {
            setIsCopied(true);
          }
        });
      };
      return React.createElement("span", {
        className: "wprf-clipboard-wrapper"
      }, /*#__PURE__*/React__default["default"].createElement("input", _objectSpread$6(_objectSpread$6({}, validProps), {}, {
        onChange: handleChange
      })), React.createElement("span", {
        className: "wprf-clipboard-tooltip"
      }, React.createElement("span", {
        className: "wprf-clipboard-tooltip-text"
      }, isCopied ? copiedMessage : copyMessage), React.createElement(components.Button, {
        className: "wprf-copy-icon",
        onClick: function onClick() {
          return handleCopy();
        }
      }, "Copy")));
    }
    return /*#__PURE__*/React__default["default"].createElement("input", _objectSpread$6(_objectSpread$6({}, validProps), {}, {
      onChange: handleChange,
      disabled: (props === null || props === void 0 ? void 0 : props.is_pro) || false
    }));
  };
  Input.defaultProps = {
    type: "text"
  };
  var GenericInput = /*#__PURE__*/React__default["default"].memo(Input);
  var Input$1 = withLabel( /*#__PURE__*/React__default["default"].memo(Input));

  var JsonUploader = function JsonUploader(props) {
    validFieldProps(props, ["is_pro", "visible", "trigger", "disable", "parentIndex", "context", "copyOnClick"]);
    var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      uploadedFile = _useState2[0],
      setUploadedFile = _useState2[1];
    var handleChange = function handleChange(e) {
      if (!e.target.files.length) {
        return;
      }
      var file = e.target.files[0];
      if ((file === null || file === void 0 ? void 0 : file.size) == 0) {
        props.context.alerts.toast('error', i18n.__("File can't be empty.", 'betterdocs'));
        return;
      } else if ((file === null || file === void 0 ? void 0 : file.type) != 'application/json' && (file === null || file === void 0 ? void 0 : file.type) != 'text/json') {
        props.context.alerts.toast('error', i18n.__("Invalid file type.", 'betterdocs'));
        return;
      }
      setUploadedFile(file);
      var reader = new FileReader();
      reader.onload = function (event) {
        var _event$target;
        var json = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result;
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
    React.useEffect(function () {
      if (!(props !== null && props !== void 0 && props.value)) {
        setUploadedFile(null);
      }
    }, [props === null || props === void 0 ? void 0 : props.value]);
    return React.createElement("span", {
      className: "wprf-json-uploader"
    }, !uploadedFile && React.createElement("label", {
      className: "wprf-json-uploaderButton"
    }, React.createElement("span", null, i18n.__("Upload")), React.createElement("input", {
      type: "file",
      accept: "application/JSON",
      onChange: function onChange(e) {
        handleChange(e);
      }
    })), uploadedFile && (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name) && React.createElement("span", {
      className: "wpfr-json-file-name-wrapper"
    }, React.createElement("span", {
      className: "wpfr-json-file-name"
    }, (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.length) > 20 ? "".concat(uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.substr(0, 9), "...").concat(uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.substr((uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.length) - 7)) : uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name), React.createElement("span", {
      className: "wprf-json-file-delete-button",
      onClick: removeFile
    }, "x")));
  };
  var JsonUploader$1 = withLabel( /*#__PURE__*/React__default["default"].memo(JsonUploader));

  var Media = function Media(props) {
    var _props$value;
    var _useState = React.useState((_props$value = props.value) !== null && _props$value !== void 0 && _props$value.url ? props.value : null),
      _useState2 = _slicedToArray(_useState, 2),
      imageData = _useState2[0],
      setImageData = _useState2[1];
    React.useEffect(function () {
      props.onChange({
        target: {
          type: "media",
          name: props.name,
          value: imageData
        }
      });
    }, [imageData]);
    return React.createElement("div", {
      className: "wprf-control wprf-media"
    }, imageData != null && !(props !== null && props !== void 0 && props.notImage) && React.createElement("div", {
      className: "wprf-image-preview"
    }, imageData != null && (imageData === null || imageData === void 0 ? void 0 : imageData.url) && React.createElement("img", {
      src: imageData.url,
      alt: imageData.title
    })), React.createElement("div", {
      className: "wprf-image-uploader ".concat(imageData != null && !(props !== null && props !== void 0 && props.notImage) ? "uploaded" : "")
    }, React.createElement(mediaUtils.MediaUpload, {
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
        return React.createElement(React.Fragment, null, imageData != null ? React.createElement("div", {
          className: "wprf_image_overlay"
        }, React.createElement("button", {
          className: "wprf-btn wprf-image-change-btn",
          onClick: open
        }, React.createElement("i", {
          className: "btd-icon btd-upload"
        })), React.createElement("button", {
          className: "wprf-btn wprf-image-remove-btn",
          onClick: function onClick() {
            return setImageData(null);
          }
        }, (props === null || props === void 0 ? void 0 : props.remove) || React.createElement("i", {
          className: "btd-icon btd-delete"
        }))) : React.createElement("button", {
          className: "wprf-btn wprf-image-upload-btn",
          onClick: open
        }, React.createElement("span", {
          className: "icon"
        }, React.createElement("i", {
          className: "btd-icon btd-upload"
        })), React.createElement("span", {
          className: "title"
        }, "Click to upload"), React.createElement("span", {
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
      return React.createElement(React.Fragment, null);
    }
    return React.createElement("div", {
      className: classNames__default["default"]('wprf-control', 'wprf-message', "wprf-".concat(type, "-message"), "wprf-".concat(props.name, "-message"), props === null || props === void 0 ? void 0 : props.classes)
    }, html && React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: message
      }
    }), !html && React.createElement("p", null, message));
  };

  var Modal = function Modal(props) {
    var _props$body;
    if ((props === null || props === void 0 ? void 0 : props.body) == undefined || (props === null || props === void 0 ? void 0 : props.button) == undefined) {
      throw new Error(i18n.__('Modal needs button/body with it.', 'betterdocs'));
    }
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0];
      _useState4[1];
    var openModal = function openModal() {
      return setOpen(true);
    };
    var closeModal = function closeModal() {
      return setOpen(false);
    };
    var onConfirm = React.useCallback(function () {}, []);
    return React.createElement("div", {
      className: "wprf-control wprf-modal",
      id: "wprf-modal-".concat(props.name)
    }, React.createElement(GenericField, _extends$1({
      type: "button"
    }, props === null || props === void 0 ? void 0 : props.button, {
      onClick: openModal
    })), isOpen && React.createElement(SweetAlert__default["default"], {
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
      title: React.createElement(ModalHeader, {
        content: props === null || props === void 0 ? void 0 : (_props$body = props.body) === null || _props$body === void 0 ? void 0 : _props$body.header
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
    }, React.createElement(ModalContent, _extends$1({}, props, {
      isLoading: isLoading,
      closeModal: closeModal,
      context: props.context,
      onConfirm: onConfirm
    }))));
  };

  var _excluded$1 = ["label", "value", "icon", "is_pro"];
  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var RadioCard = function RadioCard(props) {
    var builderContext = useBuilderContext();
    var _useOptions = useOptions(props, 'options'),
      options = _useOptions.options,
      option = _useOptions.option;
    if (!options) {
      throw new Error(i18n.__('#options is a required arguments for RadioCard field.', 'betterdocs'));
    }
    var instanceId = useInstanceId(RadioCard);
    var componentClasses = classNames__default["default"](["wprf-control", "wprf-radio-card", "wprf-input-radio-set-wrap", props === null || props === void 0 ? void 0 : props.className]);
    var styles = _objectSpread$5({}, props === null || props === void 0 ? void 0 : props.style);
    var validProps = validFieldProps(props, ['options', 'placeholder', 'style', 'trigger']);
    React.useEffect(function () {
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
    return React.createElement("div", {
      className: componentClasses
    }, React.createElement(Row, null, options.map(function (_ref, index) {
      var _ref2;
      var label = _ref.label,
        value = _ref.value,
        icon = _ref.icon,
        is_pro = _ref.is_pro,
        rest = _objectWithoutProperties(_ref, _excluded$1);
      return React.createElement(Column, {
        column: +(rest === null || rest === void 0 ? void 0 : rest.column) || 4,
        key: index
      }, React.createElement("div", {
        className: classNames__default["default"]("wprf-input-radio-option", {
          "wprf-option-has-image": icon !== null && icon !== void 0 ? icon : false,
          "wprf-option-selected": value == option
        })
      }, React.createElement(Label, {
        className: classNames__default["default"](_defineProperty({
          "wprf-label-has-image": icon !== null && icon !== void 0 ? icon : false
        }, "wprf-size-".concat(styles.size), (_ref2 = icon && (styles === null || styles === void 0 ? void 0 : styles.size)) !== null && _ref2 !== void 0 ? _ref2 : false)),
        htmlFor: "wprf-input-radio-".concat(instanceId, "-").concat(index),
        src: icon,
        badge: {
          label: is_pro ? 'Pro' : 'Free',
          value: is_pro,
          active: Boolean(builderContext.is_pro_active)
        }
      }, label), React.createElement(GenericInput, _extends$1({}, rest, validProps, {
        is_pro: is_pro,
        type: "radio",
        value: value,
        checked: value === option,
        id: "wprf-input-radio-".concat(instanceId, "-").concat(index)
      }))));
    })));
  };
  var Radio = withLabel(RadioCard);

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Repeater = function Repeater(props) {
    var _builderContext$value, _builderContext$value4;
    var fieldName = props.name;
      props.value;
      var button = props.button,
      fields = props.fields;
    var builderContext = useBuilderContext();
    var _useState = React.useState((_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[fieldName]),
      _useState2 = _slicedToArray(_useState, 2),
      localMemoizedValue = _useState2[0],
      setLocalMemoizedValue = _useState2[1];

    // const localMemoizedValue = useMemo(() => {
    //     let localS = builderContext.values?.[fieldName];
    //     return localS;
    // }, [builderContext.values?.[fieldName], refresh])

    React.useEffect(function () {
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
    var handleRemove = React.useCallback(function (index) {
      var lValue = _toConsumableArray(localMemoizedValue);
      lValue.splice(index, 1);
      builderContext.setFieldValue(fieldName, lValue);
    }, [localMemoizedValue]);
    var handleClone = React.useCallback(function (index) {
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
          index: uuid.v4(),
          isCollapsed: false
        });
        builderContext.setFieldValue([fieldName, localMemoizedValue.length], indexedCopy);
      }
    }, [localMemoizedValue]);
    React.useEffect(function () {
      if (localMemoizedValue == undefined || localMemoizedValue == '') {
        setLocalMemoizedValue([{
          index: uuid.v4()
        }]);
      } else {
        setLocalMemoizedValue(function (items) {
          return items.map(function (item) {
            return _objectSpread$4(_objectSpread$4({}, item), {}, {
              index: uuid.v4()
            });
          });
        });
      }
    }, []);
    return React.createElement("div", {
      className: "wprf-repeater-control"
    }, localMemoizedValue && (localMemoizedValue === null || localMemoizedValue === void 0 ? void 0 : localMemoizedValue.length) > 0 && React.createElement(reactSortablejs.ReactSortable, {
      className: "wprf-repeater-content",
      list: localMemoizedValue,
      setList: handleSort,
      handle: '.wprf-repeater-field-title',
      filter: '.wprf-repeater-field-controls',
      forceFallback: true
    }, localMemoizedValue.map(function (value, index) {
      return React.createElement(RepeaterField, {
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
    })), React.createElement("div", {
      className: "wprf-repeater-label"
    }, React.createElement("button", {
      className: "wprf-repeater-button",
      onClick: function onClick() {
        return builderContext.setFieldValue(fieldName, [].concat(_toConsumableArray(localMemoizedValue), [{
          index: uuid.v4()
        }]));
      }
    }, button === null || button === void 0 ? void 0 : button.label)));
  };

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var ResponsiveNumber = function ResponsiveNumber(props) {
    var _Object$keys;
    var validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context', 'badge', 'popup']);
    var _useState = React.useState(Object.keys(props.controls)[0]),
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
    var _useState3 = React.useState(value),
      _useState4 = _slicedToArray(_useState3, 2),
      responsiveSize = _useState4[0],
      setResponsiveSize = _useState4[1];
    var handleChange = function handleChange(event) {
      setResponsiveSize(_objectSpread$3(_objectSpread$3({}, responsiveSize), {}, _defineProperty({}, responsive, event.target.value)));
    };
    React.useEffect(function () {
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
    return React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        rowGap: 5,
        columnGap: 10,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React__default["default"].createElement("input", _objectSpread$3(_objectSpread$3({}, validProps), {}, {
      type: "number",
      value: responsiveSize === null || responsiveSize === void 0 ? void 0 : responsiveSize[responsive],
      onChange: handleChange
    })), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, (_Object$keys = Object.keys(props.controls)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (key) {
      return React.createElement("button", {
        type: "button",
        key: key,
        className: "responsive-button ".concat(responsive === key ? "active" : ""),
        onClick: function onClick() {
          return setResponsive(key);
        }
      }, React.createElement("img", {
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
  var ResponsiveNumber$1 = withLabel( /*#__PURE__*/React__default["default"].memo(ResponsiveNumber));

  var SteppedButton = function SteppedButton(props) {
    var _useState = React.useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      nextTab = _useState2[0],
      setNextTab = _useState2[1];
    var _useState3 = React.useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      prevTab = _useState4[0],
      setPrevTab = _useState4[1];
    var builderContext = useBuilderContext();
    React.useEffect(function () {
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
    React.useEffect(function () {
      var _builderContext$confi;
      builderContext.setFieldValue("active_tab", builderContext === null || builderContext === void 0 ? void 0 : (_builderContext$confi = builderContext.config) === null || _builderContext$confi === void 0 ? void 0 : _builderContext$confi.active);
    }, [props.active]);
    return React.createElement("div", {
      className: "wprf-stepped-button"
    }, props.config.buttons && Object.keys(props.config.buttons).map(function (button, index) {
      var _props$config$buttons, _props$config$buttons2, _props$config$buttons3, _props$config$buttons4, _props$config$buttons5, _props$config$buttons6, _props$config$buttons7, _props$config$buttons8, _props$config$buttons9, _props$config$buttons10, _props$config$buttons11, _props$config$buttons12, _props$config$buttons13, _props$config$buttons14;
      return React.createElement(React__default["default"].Fragment, {
        key: "button_".concat(button, "_").concat(index)
      }, button === "skip" && nextTab !== undefined && React.createElement(components.Button, {
        className: "wprf-btn wprf-step-btn-".concat(button),
        onClick: function onClick() {
          return props.setActive(nextTab);
        }
      }, (_props$config$buttons = props.config.buttons) === null || _props$config$buttons === void 0 ? void 0 : _props$config$buttons[button]), (button === "next" && nextTab !== undefined || button === "prev" && prevTab !== undefined) && React.createElement("div", {
        className: "wprf-btn wprf-step-btn-".concat(button)
      }, React.createElement(Field$1, {
        type: "button",
        ajax: (_props$config$buttons2 = props.config.buttons) === null || _props$config$buttons2 === void 0 ? void 0 : (_props$config$buttons3 = _props$config$buttons2[button]) === null || _props$config$buttons3 === void 0 ? void 0 : _props$config$buttons3.ajax,
        name: "step-button",
        onClick: function onClick() {
          return props.setActive(button === "next" ? nextTab : prevTab);
        },
        text: _typeof$1((_props$config$buttons4 = props.config.buttons) === null || _props$config$buttons4 === void 0 ? void 0 : _props$config$buttons4[button]) === "object" ? (props === null || props === void 0 ? void 0 : props.active) === ((_props$config$buttons5 = props.config.buttons) === null || _props$config$buttons5 === void 0 ? void 0 : (_props$config$buttons6 = _props$config$buttons5[button]) === null || _props$config$buttons6 === void 0 ? void 0 : _props$config$buttons6.condition) ? (_props$config$buttons7 = props.config.buttons) === null || _props$config$buttons7 === void 0 ? void 0 : (_props$config$buttons8 = _props$config$buttons7[button]) === null || _props$config$buttons8 === void 0 ? void 0 : _props$config$buttons8.customName : (_props$config$buttons9 = props.config.buttons) === null || _props$config$buttons9 === void 0 ? void 0 : (_props$config$buttons10 = _props$config$buttons9[button]) === null || _props$config$buttons10 === void 0 ? void 0 : _props$config$buttons10.name : (_props$config$buttons11 = props.config.buttons) === null || _props$config$buttons11 === void 0 ? void 0 : _props$config$buttons11[button]
      })), nextTab == undefined && ((_props$config$buttons12 = props.config.buttons) === null || _props$config$buttons12 === void 0 ? void 0 : (_props$config$buttons13 = _props$config$buttons12[button]) === null || _props$config$buttons13 === void 0 ? void 0 : _props$config$buttons13.type) && React.createElement(Field$1, (_props$config$buttons14 = props.config.buttons) === null || _props$config$buttons14 === void 0 ? void 0 : _props$config$buttons14[button]));
    }));
  };
  var SteppedButton$1 = /*#__PURE__*/React__default["default"].memo(SteppedButton);

  function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure " + obj);
  }

  var Submit = function Submit(_ref) {
    var props = _extends$1({}, (_objectDestructuringEmpty(_ref), _ref));
    var context = useBuilderContext();
    var label = (props === null || props === void 0 ? void 0 : props.label) || i18n.__('Save Changes', 'betterdocs');
    if (context.isSubmitting) {
      var _props$loadingLabel;
      label = (_props$loadingLabel = props === null || props === void 0 ? void 0 : props.loadingLabel) !== null && _props$loadingLabel !== void 0 ? _props$loadingLabel : 'Saving...';
    }
    var handleSubmit = React.useCallback(function (event) {
      var _context$submit;
      if ((_context$submit = context.submit) !== null && _context$submit !== void 0 && _context$submit.onSubmit) {
        context.submit.onSubmit(event, context);
        return;
      }
    }, [context]);
    return React.createElement("div", {
      className: "wprf-submit wprf-control"
    }, React.createElement(components.Button, {
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
    var _useState = React.useState((_props$collapsed = props.collapsed) !== null && _props$collapsed !== void 0 ? _props$collapsed : false),
      _useState2 = _slicedToArray(_useState, 2),
      isCollapse = _useState2[0],
      setCollapse = _useState2[1];
    var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      fields = _useState4[0],
      setFields = _useState4[1];
    var _useState5 = React.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      filteredFields = _useState6[0],
      setFilteredFields = _useState6[1];
    var _useState7 = React.useState(""),
      _useState8 = _slicedToArray(_useState7, 2),
      searchString = _useState8[0],
      setSearchString = _useState8[1];
    React.useEffect(function () {
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
        return React.createElement(Field$1, _extends$1({
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
      setSearchString(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
    };
    React.useEffect(function () {
      if (searchString) {
        var newFields = fields.filter(function (field) {
          var _field$props, _field$props$label, _field$props$label$to;
          return field === null || field === void 0 ? void 0 : (_field$props = field.props) === null || _field$props === void 0 ? void 0 : (_field$props$label = _field$props.label) === null || _field$props$label === void 0 ? void 0 : (_field$props$label$to = _field$props$label.toLowerCase()) === null || _field$props$label$to === void 0 ? void 0 : _field$props$label$to.includes(searchString.toLowerCase());
        });
        setFilteredFields(newFields);
      } else {
        setFilteredFields(fields);
      }
    }, [searchString, fields]);
    var componentClasses = classNames__default["default"]("wprf-control-section", props === null || props === void 0 ? void 0 : props.classes, props === null || props === void 0 ? void 0 : props.name, {
      "wprf-section-collapsed": (props === null || props === void 0 ? void 0 : props.collapsible) && isCollapse
    });
    return React.createElement("div", {
      id: props === null || props === void 0 ? void 0 : props.name,
      className: componentClasses
    }, props.placeholder && React.createElement("div", {
      className: "wprf-section-title"
    }, React.createElement("h4", null, props.placeholder), props.collapsible && React.createElement("button", {
      onClick: function onClick() {
        return setCollapse(!isCollapse);
      }
    }, "Icon")), searchable ? React.createElement("div", {
      className: "wprf-section-fields"
    }, React.createElement("div", {
      className: "wprf-section-search-form"
    }, React.createElement("span", {
      className: "wprf-section-search"
    }, React.createElement("input", {
      type: "text",
      name: "",
      id: "",
      placeholder: searchPlaceholder,
      onChange: function onChange(e) {
        return handleSearchString(e);
      },
      value: searchString
    }))), React.createElement("div", {
      className: "wprf-section-search-results"
    }, filteredFields !== null && filteredFields !== void 0 && filteredFields.length ? filteredFields : React.createElement("div", {
      className: "wprf-result-not-found",
      dangerouslySetInnerHTML: {
        __html: searchNotFoundMessage !== null && searchNotFoundMessage !== void 0 ? searchNotFoundMessage : "Not found!"
      }
    }))) : React.createElement("div", {
      className: "wprf-section-fields"
    }, filteredFields), props.showSubmit && React.createElement(Submit, builderContext.submit), props.showSteps && React.createElement(SteppedButton$1, {
      fields: builderContext.tabs,
      active: builderContext.config.active,
      setActive: builderContext.setActiveTab,
      config: (_builderContext$confi = builderContext.config.step) !== null && _builderContext$confi !== void 0 ? _builderContext$confi : {
        show: false
      }
    }));
  };
  var Section$1 = /*#__PURE__*/React__default["default"].memo(Section);

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
    var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      sOption = _useState2[0],
      setSOption = _useState2[1];
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];
    var _useState5 = React.useState(false),
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
    React.useEffect(function () {
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
    React.useEffect(function () {
      handleMenuOpen();
    }, []);
    React.useEffect(function () {
      if (props !== null && props !== void 0 && props.menuOpen) {
        handleMenuOpen();
      }
    }, [props === null || props === void 0 ? void 0 : props.menuOpen]);
    var handleOptionChange = React.useCallback(function (option) {
      var _props$filterValue;
      if (isArray(option) && (props === null || props === void 0 ? void 0 : (_props$filterValue = props.filterValue) === null || _props$filterValue === void 0 ? void 0 : _props$filterValue.length) > 0) {
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
    return React.createElement("div", {
      className: "wprf-select-wrapper"
    }, React.createElement(ReactSelect__default["default"], {
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
    var _useState = React.useState(builderContext.eligibleOptions(props.options)),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];
    var _useState3 = React.useState(props === null || props === void 0 ? void 0 : props.value),
      _useState4 = _slicedToArray(_useState3, 2),
      sOption = _useState4[0],
      setSOption = _useState4[1];
    var _useState5 = React.useState(false),
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
            'label': i18n.__("Please input a minimum of 3 characters."),
            'value': null,
            'disabled': true
          }]);
          return;
        }
        var data = {
          inputValue: inputValue
        };
        (_Object$keys = Object.keys(props.ajax.data)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (singleData) {
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
    React.useEffect(function () {
      setOptions(builderContext.eligibleOptions(props.options));
    }, [builderContext.values.source]);
    React.useEffect(function () {
      onChange({
        target: {
          type: "select",
          name: name,
          value: sOption,
          multiple: multiple
        }
      });
    }, [sOption]);
    return React.createElement("div", {
      className: "wprf-async-select-wrapper"
    }, React.createElement(AsyncSelect__default["default"], {
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
          if (option.name.toLowerCase().includes(meta === null || meta === void 0 ? void 0 : (_meta$inputValue2 = meta.inputValue) === null || _meta$inputValue2 === void 0 ? void 0 : _meta$inputValue2.toLowerCase())) {
            var _option$name, _option$address;
            option === null || option === void 0 ? void 0 : option.name;
            var regX = new RegExp("(".concat(meta === null || meta === void 0 ? void 0 : meta.inputValue, ")"), "gi");
            var _name = (_option$name = option.name) === null || _option$name === void 0 ? void 0 : _option$name.replace(regX, "<strong style={font-weight: 900}>$1</strong>");
            var address = (_option$address = option.address) === null || _option$address === void 0 ? void 0 : _option$address.replace(regX, "<strong style={font-weight: 900}>$1</strong>");
            return React.createElement(React.Fragment, null, parse__default["default"](_name || ""), " ", React.createElement("small", null, parse__default["default"](address || "")));
          }
        }
        return React.createElement(React.Fragment, null, option.name ? React.createElement(React.Fragment, null, React.createElement("b", null, option.name), " ") : React.createElement(React.Fragment, null, option.label, " "), option.address && React.createElement("small", null, option.address));
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
    var _useState = React.useState(value || 0),
      _useState2 = _slicedToArray(_useState, 2),
      isValue = _useState2[0],
      setValue = _useState2[1];
    var _useState3 = React.useState(unit),
      _useState4 = _slicedToArray(_useState3, 2),
      sunit = _useState4[0],
      setSunit = _useState4[1];
    React.useEffect(function () {
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
    return React.createElement("div", {
      className: "wprf-slider-wrap"
    }, React.createElement("div", {
      className: "wprf-slider-control-head"
    }, React.createElement(Label, {
      htmlFor: id || name
    }, label), isArray(units) && units.length > 0 && React.createElement("div", {
      className: "wprf-slider-units"
    }, units.map(function (unit, index) {
      return React.createElement(components.Button, {
        key: index,
        isSmall: true,
        isPrimary: true,
        onClick: function onClick() {
          return setSunit(unit);
        },
        className: unit == sunit ? "unit-active" : ""
      }, unit);
    }))), React.createElement("div", {
      className: "wprf-slider-control"
    }, React.createElement(components.RangeControl, {
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

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Textarea = function Textarea(props) {
    var validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context']);
    var handleChange = React.useCallback(function (event) {
      return validProps.onChange(event, {
        isPro: !!props.is_pro
      });
    }, [validProps === null || validProps === void 0 ? void 0 : validProps.value]);
    return /*#__PURE__*/React__default["default"].createElement('textarea', _objectSpread$2(_objectSpread$2({}, validProps), {}, {
      onChange: handleChange,
      rows: 2
    }));
  };
  var Textarea$1 = withLabel( /*#__PURE__*/React__default["default"].memo(Textarea));

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
      var _useState = React.useState({}),
        _useState2 = _slicedToArray(_useState, 2),
        localState = _useState2[0],
        setLocalState = _useState2[1];
      var handleChange = function handleChange(event) {
        var target = event.target ? event.target : event.currentTarget;
        setLocalState(function (prevState) {
          return _objectSpread$1(_objectSpread$1({}, prevState), {}, _defineProperty({}, target.value, target.checked));
        });
      };
      React.useEffect(function () {
        props.onChange({
          target: {
            type: 'toggle',
            name: props.name,
            value: localState
          }
        });
      }, [localState]);
      React.useEffect(function () {
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
      return React.createElement("div", {
        className: "wprf-toggle-wrapper wprf-control"
      }, React.createElement(Row, null, options.map(function (item) {
        return React.createElement(Column, {
          key: item.value,
          column: styles.column
        }, React.createElement(GenericToggle$1, _objectSpread$1(_objectSpread$1({}, item), {}, {
          context: props === null || props === void 0 ? void 0 : props.context,
          id: item.value,
          checked: typeof localState[item.value] === 'undefined' ? true : localState !== null && localState !== void 0 && localState[item.value] ? value : !!(localState !== null && localState !== void 0 && localState[item.value]),
          type: 'checkbox',
          onChange: handleChange,
          style: styles
        })));
      })));
    }
    return React.createElement(GenericToggle$1, props);
  };

  var InnerContent = function InnerContent(_ref) {
    var fields = _ref.fields,
      parentIndex = _ref.parentIndex,
      context = _ref.context;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      _fields = _useState2[0],
      setFields = _useState2[1];
    var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      fieldViews = _useState4[0],
      setFieldViews = _useState4[1];
    // Fields Sorting
    React.useEffect(function () {
      var newFields = sortingFields(fields);
      context.setFormField([parentIndex, 'fields'], newFields);
      setFields(newFields);
    }, []);
    React.useEffect(function () {
      if (isArray(_fields) && _fields.length > 0) {
        var allFields = _fields.map(function (item, index) {
          var pIndex = [].concat(_toConsumableArray(parentIndex), ['fields', index]);
          if ((item === null || item === void 0 ? void 0 : item.type) === 'section') {
            return React.createElement(GenericField, _extends$1({
              key: "input-".concat(item.name, "-").concat(index)
            }, item, {
              parentIndex: pIndex
            }));
          } else if (item) {
            return React.createElement(Field$1, _extends$1({
              key: "input-".concat(item.name, "-").concat(index)
            }, item, {
              parentIndex: pIndex
            }));
          }
          return React.createElement(React.Fragment, null);
        });
        setFieldViews(allFields);
      }
    }, [_fields]);
    return React.createElement(React.Fragment, null, fieldViews);
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
      throw new Error(i18n.__("There are no #tabs args defined in props.", "betterdocs"));
    }
    var builderContext = useBuilderContext();
    var parentIndex = rest.parentIndex || [];
    if (!isArray(tabs)) {
      throw new Error(i18n.__("Not an array.", "betterdocs"));
    }
    var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      tabsFields = _useState2[0],
      setTabsFields = _useState2[1];
    React.useEffect(function () {
      var filteredTabs = tabs.filter(function (tab) {
        return isVisible(builderContext === null || builderContext === void 0 ? void 0 : builderContext.values, tab);
      });
      setTabsFields(filteredTabs);
    }, [tabs, builderContext === null || builderContext === void 0 ? void 0 : (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value.source]);
    return React.createElement("div", {
      className: classNames__default["default"]("wprf-tab-content-wrapper", builderContext === null || builderContext === void 0 ? void 0 : (_builderContext$value2 = builderContext.values) === null || _builderContext$value2 === void 0 ? void 0 : _builderContext$value2.source, builderContext === null || builderContext === void 0 ? void 0 : (_builderContext$value3 = builderContext.values) === null || _builderContext$value3 === void 0 ? void 0 : _builderContext$value3.themes)
    }, React.createElement("div", {
      className: "wprf-tab-flex"
    }, React.createElement("div", {
      className: "wprf-tab-contents"
    }, tabs.map(function (tab, index) {
      var _rest$title;
      if (!isVisible(builderContext === null || builderContext === void 0 ? void 0 : builderContext.values, tab)) {
        return "";
      }
      var componentClasses = classNames__default["default"]("wprf-tab-content", "wprf-tab-".concat(tab === null || tab === void 0 ? void 0 : tab.id), {
        "wprf-active": active === tab.id
      });
      return React.createElement("div", {
        id: tab === null || tab === void 0 ? void 0 : tab.id,
        className: componentClasses,
        key: tab === null || tab === void 0 ? void 0 : tab.id
      }, React.createElement("div", {
        className: "wprf-tab-heading-wrapper"
      }, (tab === null || tab === void 0 ? void 0 : tab.label) && ((_rest$title = rest === null || rest === void 0 ? void 0 : rest.title) !== null && _rest$title !== void 0 ? _rest$title : true) && React.createElement("h4", null, tab.label), React.createElement("div", null, (rest === null || rest === void 0 ? void 0 : rest.content_heading) && Object.keys(rest.content_heading).map(function (button, index) {
        return React.createElement(React__default["default"].Fragment, {
          key: "button_".concat(button, "_").concat(index)
        }, React.createElement(Field$1, rest.content_heading[button]));
      }))), React.createElement(InnerContent, {
        context: builderContext,
        fields: tab === null || tab === void 0 ? void 0 : tab.fields,
        parentIndex: [].concat(_toConsumableArray(parentIndex), [index])
      }));
    })), hooks.applyFilters("wprf_tab_content", "", rest)), (rest === null || rest === void 0 ? void 0 : (_rest$step = rest.step) === null || _rest$step === void 0 ? void 0 : _rest$step.show) && (rest !== null && rest !== void 0 && (_rest$step2 = rest.step) !== null && _rest$step2 !== void 0 && _rest$step2.rules ? when(rest === null || rest === void 0 ? void 0 : (_rest$step3 = rest.step) === null || _rest$step3 === void 0 ? void 0 : _rest$step3.rules, {
      rest: rest,
      config: {
        active: active
      }
    }) : true) && React.createElement(SteppedButton$1, _extends$1({
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
    }) : true) && React.createElement(Submit, submit));
  };

  var Menu = function Menu(props) {
    var _context$values, _context$values2;
    if (props.fields === undefined) {
      throw new Error(i18n.__("There are no tabs defined!", "betterdocs"));
    }
    var active = props.active,
      setActive = props.setActive,
      tabs = props.fields,
      context = props.context;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      tabsFields = _useState2[0],
      setTabsFields = _useState2[1];
    React.useEffect(function () {
      var filteredTabs = tabs.filter(function (tab) {
        return isVisible(context === null || context === void 0 ? void 0 : context.values, tab);
      });
      setTabsFields(filteredTabs);
    }, [tabs, context === null || context === void 0 ? void 0 : (_context$values = context.values) === null || _context$values === void 0 ? void 0 : _context$values.source]);
    var componentClasses = classNames__default["default"]("wprf-tab-menu-wrapper", props === null || props === void 0 ? void 0 : props.className, {
      "wprf-tab-menu-sidebar": props === null || props === void 0 ? void 0 : props.sidebar
    }, context === null || context === void 0 ? void 0 : (_context$values2 = context.values) === null || _context$values2 === void 0 ? void 0 : _context$values2.source);
    var currentTabIndex = tabsFields.findIndex(function (tab) {
      return tab.id === active;
    });
    return React.createElement("div", {
      className: componentClasses
    }, React.createElement("ul", {
      className: "wprf-tab-nav"
    }, tabsFields.map(function (tab, index) {
      var _classNames, _context$icons, _context$icons$tab$ic, _tab$icon, _tab$icon2;
      return React.createElement("li", {
        className: classNames__default["default"]("wprf-tab-nav-item", (_classNames = {}, _defineProperty(_classNames, "".concat(tab.classes), tab.classes), _defineProperty(_classNames, "wprf-active-nav", active === tab.id), _defineProperty(_classNames, "wprf-tab-complete", props !== null && props !== void 0 && props.completionTrack ? index <= currentTabIndex : false), _classNames)),
        "data-key": tab.id,
        key: tab.id,
        onClick: function onClick() {
          var _props$clickable;
          return ((_props$clickable = props === null || props === void 0 ? void 0 : props.clickable) !== null && _props$clickable !== void 0 ? _props$clickable : true) && setActive(tab.id);
        }
      }, props !== null && props !== void 0 && props.tab_number ? React.createElement("span", {
        className: "icon"
      }, React.createElement("span", {
        className: "count"
      }, index + 1)) : "", (tab === null || tab === void 0 ? void 0 : tab.icon) && (isString(tab.icon) && !isObject(tab.icon) ? React.createElement("img", {
        src: tab.icon,
        alt: tab === null || tab === void 0 ? void 0 : tab.label
      }) : isObject(tab.icon) ? context === null || context === void 0 ? void 0 : (_context$icons = context.icons) === null || _context$icons === void 0 ? void 0 : (_context$icons$tab$ic = _context$icons[tab === null || tab === void 0 ? void 0 : (_tab$icon = tab.icon) === null || _tab$icon === void 0 ? void 0 : _tab$icon.type]) === null || _context$icons$tab$ic === void 0 ? void 0 : _context$icons$tab$ic[tab === null || tab === void 0 ? void 0 : (_tab$icon2 = tab.icon) === null || _tab$icon2 === void 0 ? void 0 : _tab$icon2.name] : ""), React.createElement("span", null, tab.label), tab !== null && tab !== void 0 && tab.is_pro ? React.createElement(BadgeComp, {
        componentClasses: "wprf-badge-item",
        label: "Pro"
      }) : React.createElement(React.Fragment, null));
    })));
  };

  var Tab = function Tab(props) {
    var _props$save;
    // const builderContextState = useBuilder(props);

    var builderContext = useBuilderContext();
    var _useState = React.useState((props === null || props === void 0 ? void 0 : props.value) || (props === null || props === void 0 ? void 0 : props.active)),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];
    React.useEffect(function () {
      if (props !== null && props !== void 0 && props.save_locally) {
        var _localStorage$getItem;
        var locally_saved_data = (_localStorage$getItem = localStorage.getItem("quickbuilder_active_tab")) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : null;
        locally_saved_data && setActiveTab(JSON.parse(locally_saved_data));
      }
    }, []);
    var saveValue = (_props$save = props === null || props === void 0 ? void 0 : props.save) !== null && _props$save !== void 0 ? _props$save : true;
    var componentClasses = classNames__default["default"]("wp-react-form wprf-tabs-wrapper", props === null || props === void 0 ? void 0 : props.className, {
      "wprf-tab-menu-as-sidebar": props === null || props === void 0 ? void 0 : props.sidebar
    });
    React.useEffect(function () {
      var _props$value;
      var _activeTab = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : props.active;
      if (_activeTab != activeTab) {
        setActiveTab(_activeTab);
      }
    }, [props === null || props === void 0 ? void 0 : props.value]);
    React.useEffect(function () {
      if (props !== null && props !== void 0 && props.save_locally) {
        localStorage.setItem("quickbuilder_active_tab", JSON.stringify(activeTab));
      }
    }, [activeTab]);
    React.useEffect(function () {
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
    return React.createElement("div", {
      className: componentClasses
    }, React.createElement(Menu, _extends$1({}, props, {
      active: activeTab,
      setActive: function setActive(tabId) {
        return setActiveTab(tabId);
      },
      fields: props.fields,
      context: builderContext
    })), React.createElement(Content, _extends$1({}, props, {
      fields: props.fields,
      active: activeTab,
      setActive: function setActive(tabId) {
        return setActiveTab(tabId);
      },
      submit: props === null || props === void 0 ? void 0 : props.submit
    })));
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  data.registerStore("formbuilder", store);
  var FormBuilder = function FormBuilder(props) {
    var _tabs;
    var builderContext = useBuilderContext();
    var tabs = props.tabs;
    if (!((_tabs = tabs) !== null && _tabs !== void 0 && _tabs.type)) {
      var _props$config;
      tabs = _objectSpread(_objectSpread({}, props.config), {}, {
        value: props === null || props === void 0 ? void 0 : (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.active,
        fields: props.tabs,
        tabs: undefined,
        submit: props === null || props === void 0 ? void 0 : props.submit,
        onChange: function onChange(event) {
          var _event$target;
          builderContext.setActiveTab(event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value);
        }
      });
    }
    return React.createElement(React.Fragment, null, React.createElement(Tab, tabs));
  };

  exports.Action = Action;
  exports.BuilderConsumer = BuilderConsumer;
  exports.BuilderProvider = BuilderProvider;
  exports.Button = Button$1;
  exports.CheckboxSelect = CheckboxSelect$1;
  exports.CodeViewer = CodeViewer$1;
  exports.ColorPicker = ColorPicker$1;
  exports.Column = Column;
  exports.CopyToClipboard = CopyToClipboard$1;
  exports.Date = Date$1;
  exports.Editor = Editor$1;
  exports.Field = Field$1;
  exports.FormBuilder = FormBuilder;
  exports.GenericField = GenericField;
  exports.GenericInput = GenericInput;
  exports.Group = Group$1;
  exports.Image = Image;
  exports.Input = Input$1;
  exports.JsonUploader = JsonUploader$1;
  exports.Label = Label;
  exports.Media = Media$1;
  exports.Message = Message;
  exports.Modal = Modal;
  exports.ObjectFilter = ObjectFilter;
  exports.Radio = Radio;
  exports.Repeater = Repeater;
  exports.ResponsiveNumber = ResponsiveNumber$1;
  exports.Row = Row;
  exports.Section = Section$1;
  exports.Select = Select$1;
  exports.SelectAsync = SelectAsync$1;
  exports.Slider = Slider;
  exports.SweetAlert = SweetAlert;
  exports.Textarea = Textarea$1;
  exports.Toggle = Toggle;
  exports._extends = _extends;
  exports.builderReducer = builderReducer;
  exports.executeChange = executeChange;
  exports.getIn = getIn;
  exports.getSelectedValues = getSelectedValues;
  exports.getStoreData = getStoreData;
  exports.getTime = getTime;
  exports.hitAAJX = hitAAJX;
  exports.isArray = isArray;
  exports.isEmptyObj = isEmptyObj;
  exports.isExists = isExists;
  exports.isFunction = isFunction;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isString = isString;
  exports.isVisible = isVisible;
  exports.merge = merge;
  exports.objectWithoutPropertiesLoose = objectWithoutPropertiesLoose;
  exports.processAjaxData = processAjaxData;
  exports.setIn = setIn;
  exports.setStoreData = setStoreData;
  exports.sortingFields = sortingFields;
  exports.triggerDefaults = triggerDefaults;
  exports.useBuilder = useBuilder;
  exports.useBuilderContext = useBuilderContext;
  exports.useDefaults = useDefaults;
  exports.validFieldProps = validFieldProps;
  exports.valueExists = valueExists;
  exports.when = when;
  exports.withLabel = withLabel;
  exports.withProps = withProps;
  exports.withState = withState;
  exports.wpFetch = wpFetch;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
