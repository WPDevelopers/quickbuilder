(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@wordpress/data'), require('@wordpress/i18n'), require('intersect'), require('@wordpress/api-fetch'), require('lodash-es'), require('@wordpress/date'), require('moment'), require('@wordpress/hooks'), require('classnames'), require('sweetalert2'), require('react-select'), require('@wordpress/components'), require('copy-to-clipboard'), require('react-draft-wysiwyg'), require('draft-js'), require('draftjs-to-html'), require('html-to-draftjs'), require('react-draft-wysiwyg/dist/react-draft-wysiwyg.css'), require('@wordpress/compose'), require('@wordpress/media-utils'), require('react-bootstrap-sweetalert'), require('react-sortablejs'), require('uuid'), require('html-react-parser'), require('react-select/async'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@wordpress/data', '@wordpress/i18n', 'intersect', '@wordpress/api-fetch', 'lodash-es', '@wordpress/date', 'moment', '@wordpress/hooks', 'classnames', 'sweetalert2', 'react-select', '@wordpress/components', 'copy-to-clipboard', 'react-draft-wysiwyg', 'draft-js', 'draftjs-to-html', 'html-to-draftjs', 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css', '@wordpress/compose', '@wordpress/media-utils', 'react-bootstrap-sweetalert', 'react-sortablejs', 'uuid', 'html-react-parser', 'react-select/async', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.quickbuilder = {}, global.React, global.wpData, global.wpI18n, global.intersect, global.wpApiFetch, global.lodashEs, global.wpDate, global.momentLib, global.wpHooks, global.classNames, global.sweetalert2, global.reactSelect, global.wpComponents, global.copy, global.reactDraftWysiwyg, global.draftJs, global.draftjsToHtml, global.htmlToDraftjs, null, global.compose, global.wpMedia, global.sweetalert, global.reactSortablejs, global.uuid, global.parse, global.AsyncSelect, global.ReactDOM));
})(this, (function (exports, React, data, i18n, intersect, apiFetch, lodashEs, date, moment, hooks, classNames, Swal, ReactSelect, components, copy, reactDraftWysiwyg, draftJs, draftToHtml, htmlToDraft, reactDraftWysiwyg_css, compose, mediaUtils, SweetAlert$1, reactSortablejs, uuid, parse, AsyncSelect, reactDom) { 'use strict';

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

  function _typeof$1(o) {
    "@babel/helpers - typeof";

    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$1(o);
  }

  function toPrimitive(t, r) {
    if ("object" != _typeof$1(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$1(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }

  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof$1(i) ? i : i + "";
  }

  function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }

  function _arrayLikeToArray$3(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }

  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray$3(r);
  }

  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }

  function _unsupportedIterableToArray$3(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray$3(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$3(r, a) : void 0;
    }
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray$3(r) || _nonIterableSpread();
  }

  function ownKeys$g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$g(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var wpFetch = function wpFetch(params) {
    var _params$method;
    var args = _objectSpread$g(_objectSpread$g({}, params), (params === null || params === void 0 ? void 0 : params.method) == undefined || (params === null || params === void 0 ? void 0 : params.method) == null || (params === null || params === void 0 || (_params$method = params.method) === null || _params$method === void 0 ? void 0 : _params$method.length) == 0 ? {
      'method': 'POST'
    } : {
      'method': params === null || params === void 0 ? void 0 : params.method
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
    var _props;
    if (!((_props = props) !== null && _props !== void 0 && _props.rules) || props.name == undefined) {
      return true;
    }
    if (Object.hasOwnProperty.call(props, 'index')) {
      var _props2;
      var newRules = _replaceIndex((_props2 = props) === null || _props2 === void 0 ? void 0 : _props2.rules, props);
      props = _objectSpread$g(_objectSpread$g({}, props), {}, {
        rules: newRules
      });
    }
    var whenVar = when(props.rules, values);
    return Boolean(whenVar);
  };
  var withState = function withState(type) {
    return Boolean(["group", "section"].includes(type));
  };
  var getDeepData = function getDeepData(data, filterKey) {
    var finalValue = filterKey === null || filterKey === void 0 ? void 0 : filterKey.reduce(function (subject, currentProperty, currentIndex) {
      return subject[currentProperty] != undefined ? subject[currentProperty] : {};
    }, data);
    return finalValue;
  };
  var processRule$1 = function processRule(_ref, index) {
    var condition = _ref[0],
      key = _ref[1],
      value = _ref[2];
    key = key.replace("[index]", "[".concat(index, "]"));
    return [condition, key, value];
  };
  var _replaceIndex = function replaceIndex(conditions, props, data) {
    if (!isValidCondition(conditions)) {
      return processRule$1(conditions, props === null || props === void 0 ? void 0 : props.index);
    }
    var logicalRule = conditions.slice(0, 1)[0];
    var comparisonRules = conditions.slice(1);
    var result = comparisonRules.map(function (condition, index) {
      if (isValidCondition(condition)) {
        return _replaceIndex(condition, props);
      }
      return processRule$1(condition, props === null || props === void 0 ? void 0 : props.index);
    });
    return [logicalRule].concat(_toConsumableArray(result));
  };
  var insertDefaultRepeaterValues = function insertDefaultRepeaterValues(fields) {
    var newDefaultFields = {};
    fields === null || fields === void 0 || fields.map(function (field) {
      newDefaultFields[field === null || field === void 0 ? void 0 : field.name] = field === null || field === void 0 ? void 0 : field["default"];
    });
    return newDefaultFields;
  };
  var removeTagsFromString = function removeTagsFromString(str) {
    if (str === null || str === '') {
      return false;
    } else {
      str = str.toString();
    }
    return str.replace(/(<([^>]+)>)/ig, '');
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
  var validFieldProps = function validFieldProps(defaultParams) {
    var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var type = defaultParams.type;
    var filterOutArray = ['validation_rules', 'default', 'rules', 'meta', 'switch'].concat(_toConsumableArray(exclude));
    if (type !== 'select' && type !== 'checkbox-select' && type !== 'select-async' && type !== 'radio-card' && type !== 'checkbox' && type !== 'toggle' && defaultParams.multiple) {
      filterOutArray.push('options');
    }
    if (type !== 'tab' && type !== 'group' && type !== 'repeater' && type !== 'section' && type !== 'button') {
      filterOutArray.push('fields');
    }
    var validProps = objectWithoutPropertiesLoose(defaultParams, filterOutArray);
    if (defaultParams !== null && defaultParams !== void 0 && defaultParams.label && !(defaultParams !== null && defaultParams !== void 0 && defaultParams.placeholder)) {
      validProps.placeholder = defaultParams.label;
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
    var settings = date.__experimentalGetSettings();
    var _value = moment__default["default"].utc(value ? value : undefined).utcOffset(+(settings === null || settings === void 0 || (_settings$timezone = settings.timezone) === null || _settings$timezone === void 0 ? void 0 : _settings$timezone.offset), keepLocalTime);
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
  var downloadFile = function downloadFile(_ref2) {
    var data = _ref2.data,
      fileName = _ref2.fileName,
      fileType = _ref2.fileType;
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
    // if( path == 'betterdocs_access_control_repeater[1].control_access_restrict_doc_category' ) {
    // 	String.prototype.split
    // 	.call(path, /[,[\].]+?/)
    // 	.filter(Boolean)
    // 	.reduce(function (a, c) {
    // 		console.log(a);
    // 		console.log(c);
    // 		console.log(Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue);
    // 		console.log('---xx---');
    // 		return a && Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue;
    // 		// return a && Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue;
    // 	}, obj)
    // }
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
    return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends$1.apply(null, arguments);
  }

  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
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

  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$3(r, e) || _nonIterableRest();
  }

  function _objectWithoutPropertiesLoose$1(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
    return t;
  }

  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose$1(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
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
        setFieldValue(field, hooks.applyFilters('quickBuilder_fieldValue', value, field));
        hooks.doAction('quickBuilder_setFieldValue', field, value, validProps);
      }
    }, [setFieldValue, state.values]);
    var handleChange = useEventCallback(function (eventOrString, validProps) {
      if (validProps !== null && validProps !== void 0 && validProps.isPro && Boolean(state.is_pro_active) === false) {
        var _state$alerts;
        (_state$alerts = state.alerts) === null || _state$alerts === void 0 || (_state$alerts = _state$alerts.pro_alert(validProps === null || validProps === void 0 ? void 0 : validProps.popup)) === null || _state$alerts === void 0 || _state$alerts.fire();
        // return false;
      }
      if (validProps !== null && validProps !== void 0 && validProps.isLicenseActive && Boolean(state.is_license_active) === false) {
        var _state$alerts2;
        (_state$alerts2 = state.alerts) === null || _state$alerts2 === void 0 || (_state$alerts2 = _state$alerts2.licenseInactiveAlert(validProps === null || validProps === void 0 ? void 0 : validProps.popup)) === null || _state$alerts2 === void 0 || _state$alerts2.fire();
        return;
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
  var useIsomorphicLayoutEffect$1 = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  var useEventCallback = function useEventCallback(fn) {
    var ref = React.useRef(fn);
    useIsomorphicLayoutEffect$1(function () {
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
    var componentClasses = classNames__default["default"]("wprf-column", props === null || props === void 0 ? void 0 : props.className, _defineProperty(_defineProperty({}, "wprf-column-".concat(12 / (props === null || props === void 0 ? void 0 : props.column)), (props === null || props === void 0 ? void 0 : props.column) && props.column !== 12), "wprf-column-12", props.column === 12));
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
    }, (props === null || props === void 0 || (_props$badge = props.badge) === null || _props$badge === void 0 ? void 0 : _props$badge.value) && React.createElement("div", {
      className: "wprf-badge"
    }, React.createElement("sup", {
      className: classNames__default["default"]("wprf-badge-item", {
        'wprf-badge-active': props === null || props === void 0 || (_props$badge2 = props.badge) === null || _props$badge2 === void 0 ? void 0 : _props$badge2.active
      })
    }, props === null || props === void 0 || (_props$badge3 = props.badge) === null || _props$badge3 === void 0 ? void 0 : _props$badge3.label)), !(props !== null && props !== void 0 && props.src) && (props === null || props === void 0 ? void 0 : props.children), (props === null || props === void 0 ? void 0 : props.src) && React.createElement(Image, {
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
      renderComponent = props.renderComponent,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;
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
        "pro-deactivated": !builderContext.is_pro_active || disabled
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
    var _useState = React.useState(descriptionText),
      _useState2 = _slicedToArray(_useState, 2),
      description = _useState2[0],
      setDescription = _useState2[1];
    React.useEffect(function () {
      if (type === "toggle" && enableDisableActive) {
        if (value) {
          setDescription(i18n.sprintf(i18n.__("Enabled %s", "betterdocs"), descriptionText !== null && descriptionText !== void 0 ? descriptionText : ""));
        } else {
          setDescription(i18n.sprintf(i18n.__("Disabled %s", "betterdocs"), descriptionText !== null && descriptionText !== void 0 ? descriptionText : ""));
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

  var _excluded$3 = ["label", "id", "name", "type", "style", "is_pro", "badge", "value", "disabled", "enable_disable_text_active"];
  function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

  // import { useInstanceId } from "@wordpress/compose";

  var withLabel = function withLabel(WrappedComponent) {
    var WithLabel = function WithLabel(props) {
      var _styles$label, _styles$label$positio, _styles$label2, _styles$description2;
      var label = props.label,
        id = props.id,
        name = props.name,
        type = props.type,
        prevStyle = props.style,
        is_pro = props.is_pro,
        badge = props.badge,
        value = props.value,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
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
      var styleClasses = classNames__default["default"](_defineProperty(_defineProperty(_defineProperty({}, "wprf-style-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type) || false), "wprf-label-none", label === undefined || label === "" || label.length === 0), "wprf-".concat((styles === null || styles === void 0 || (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position) || "inline", "-label"), ((_styles$label$positio = styles === null || styles === void 0 || (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position) !== null && _styles$label$positio !== void 0 ? _styles$label$positio : true) && label != undefined));
      if (type === "hidden") {
        return React.createElement(WrappedComponent, _extends$1({}, props, {
          id: id
        }));
      }
      var validProps = validFieldProps(props, ["description", "label", "help", "style", "disabled"]);
      var componentClasses = classNames__default["default"]("wprf-control-wrapper", "wprf-type-".concat(type), styleClasses, props === null || props === void 0 ? void 0 : props.classes, _defineProperty({}, "wprf-name-".concat(name), name));
      return React.createElement("div", {
        className: componentClasses
      }, (is_pro == true || disabled == true) && React.createElement(React.Fragment, null, React.createElement(Badge, _extends$1({}, badge, rest, {
        disabled: disabled,
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
            position: styles === null || styles === void 0 || (_styles$description = styles.description) === null || _styles$description === void 0 ? void 0 : _styles$description.position,
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
      })))), (is_pro == false || is_pro == undefined) && disabled == false && React.createElement(React.Fragment, null, label && label.length > 0 && React.createElement(ControlLabel, _extends$1({}, validProps, {
        context: rest === null || rest === void 0 ? void 0 : rest.context,
        label: label,
        id: id
      })), React.createElement(ControlField, {
        help: props === null || props === void 0 ? void 0 : props.help,
        description: props === null || props === void 0 ? void 0 : props.description,
        position: styles === null || styles === void 0 || (_styles$description2 = styles.description) === null || _styles$description2 === void 0 ? void 0 : _styles$description2.position,
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
      options = _useOptions.options;
      _useOptions.option;
      var selectedOption = _useOptions.selectedOption;
      _useOptions.setOptions;
      var setData = _useOptions.setData,
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

  function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
      if (value) {
        setDefaultColor(value);
      } else {
        setDefaultColor("#ffffff00");
      }
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

  function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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

  var _RepeaterField = function RepeaterField(props) {
    var _builderContext$value;
    var builderContext = useBuilderContext();
    var fields = props.fields,
      _onChange = props.onChange,
      index = props.index,
      parent = props.parent;
      props.parentIndex;
    var _useState = React.useState(props.isCollapsed),
      _useState2 = _slicedToArray(_useState, 2),
      isCollapsed = _useState2[0],
      setIsCollapsed = _useState2[1];
    var instanceId = compose.useInstanceId(_RepeaterField);
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
      var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ['fields', fieldIndex]);
      return React.createElement(GenericField, _extends$1({
        key: "field-".concat(index, "-").concat(fieldIndex)
      }, field, {
        id: "field-".concat(instanceId, "-").concat(index, "-").concat(fieldIndex),
        index: index,
        parenttype: "repeater",
        parent: parent,
        onChange: function onChange(event) {
          return _onChange(event, index);
        },
        parentIndex: parentIndex
      }));
    })));
  };

  function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var GenericToggle = function GenericToggle(props) {
    var _styles$label, _styles$label2;
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
    var componentClasses = classNames__default["default"]("wprf-toggle-wrap", _defineProperty(_defineProperty(_defineProperty({}, "wprf-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type.length) > 0), "wprf-checked", Boolean(isChecked)), "wprf-label-position-".concat(styles === null || styles === void 0 || (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position), styles === null || styles === void 0 || (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position), props === null || props === void 0 ? void 0 : props.classes);
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

  function _createForOfIteratorHelper$2(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray$2(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray$2(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray$2(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0; } }
  function _arrayLikeToArray$2(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function GenericCheckbox(props) {
    var _styles$label, _styles$label2;
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
    var componentClasses = classNames__default["default"]("wprf-checkbox-wrap", _defineProperty(_defineProperty(_defineProperty({}, "wprf-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type.length) > 0), "wprf-checked", Boolean(isChecked)), "wprf-label-position-".concat(styles === null || styles === void 0 || (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position), styles === null || styles === void 0 || (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position), props === null || props === void 0 ? void 0 : props.classes);
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
          var _iterator = _createForOfIteratorHelper$2(options),
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

  function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var Input = function Input(props) {
    var validProps = validFieldProps(props, ["is_license_active", "is_pro", "visible", "trigger", "copyOnClick", "disable", "parentIndex", "context", "badge", "popup", "enable_disable_text_active"]);
    var handleChange = React.useCallback(function (event) {
      return validProps.onChange(event, {
        popup: props === null || props === void 0 ? void 0 : props.popup,
        isPro: !!props.is_pro,
        isLicenseActive: !!props.is_license_active,
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

  // Input.defaultProps = {
  // 	type: "text",
  // };

  var GenericInput = /*#__PURE__*/React__default["default"].memo(Input);
  var Input$1 = withLabel(/*#__PURE__*/React__default["default"].memo(Input));

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
  var JsonUploader$1 = withLabel(/*#__PURE__*/React__default["default"].memo(JsonUploader));

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
        }, i18n.__('Click to upload', 'betterdocs')), React.createElement("span", {
          className: "info"
        }, i18n.__("SVG, PNG, JPG or GIF (max.800x400px)", "betterdocs"))));
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
    }, React.createElement(ModalContent, _extends$1({}, props, {
      isLoading: isLoading,
      closeModal: closeModal,
      context: props.context,
      onConfirm: onConfirm
    }))));
  };

  var _excluded$1 = ["label", "value", "icon", "is_pro"];
  function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var _RadioCard = function RadioCard(props) {
    var builderContext = useBuilderContext();
    var _useOptions = useOptions(props, 'options'),
      options = _useOptions.options,
      option = _useOptions.option;
    if (!options) {
      throw new Error(i18n.__('#options is a required arguments for RadioCard field.', 'betterdocs'));
    }
    var instanceId = compose.useInstanceId(_RadioCard);
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
  var Radio = withLabel(_RadioCard);

  function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
        setLocalMemoizedValue([_objectSpread$4({
          index: uuid.v4()
        }, insertDefaultRepeaterValues(fields))]);
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
      return React.createElement(_RepeaterField, {
        isCollapsed: value === null || value === void 0 ? void 0 : value.isCollapsed,
        key: (value === null || value === void 0 ? void 0 : value.index) || index,
        fields: fields,
        index: index,
        parent: fieldName,
        clone: handleClone,
        remove: handleRemove,
        onChange: function onChange(event) {
          return handleChange(event, index);
        },
        parentIndex: props.parentIndex
      });
    })), React.createElement("div", {
      className: "wprf-repeater-label"
    }, React.createElement("button", {
      className: "wprf-repeater-button",
      onClick: function onClick() {
        return builderContext.setFieldValue(fieldName, [].concat(_toConsumableArray(localMemoizedValue), [_objectSpread$4({
          index: uuid.v4()
        }, insertDefaultRepeaterValues(fields))]));
      }
    }, button === null || button === void 0 ? void 0 : button.label)));
  };

  function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  var ResponsiveNumber$1 = withLabel(/*#__PURE__*/React__default["default"].memo(ResponsiveNumber));

  function _createForOfIteratorHelper$1(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray$1(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray$1(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0; } }
  function _arrayLikeToArray$1(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  var SteppedButton = function SteppedButton(props) {
    var _builderContext$getFi;
    var builderContext = useBuilderContext(); // Access builder context
    var _useState = React.useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      nextTab = _useState2[0],
      setNextTab = _useState2[1];
    var _useState3 = React.useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      prevTab = _useState4[0],
      setPrevTab = _useState4[1];
    var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      disablePrev = _useState6[0],
      setDisablePrev = _useState6[1];

    // Retrieve `isStartClicked` from the context
    var isStartClicked = (_builderContext$getFi = builderContext.getFieldValue("isStartClicked")) !== null && _builderContext$getFi !== void 0 ? _builderContext$getFi : false;
    var getCookie = function getCookie(cookieName) {
      var cookies = document.cookie.split("; ");
      var _iterator = _createForOfIteratorHelper$1(cookies),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cookie = _step.value;
          var _cookie$split = cookie.split("="),
            _cookie$split2 = _slicedToArray(_cookie$split, 2),
            name = _cookie$split2[0],
            value = _cookie$split2[1];
          if (name === cookieName) {
            return decodeURIComponent(value);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    };
    React.useEffect(function () {
      var tabIds = props.fields.map(function (tab) {
        return tab.id;
      });
      var currentTabIndex = tabIds.findIndex(function (tab) {
        return tab === props.active;
      });

      // Set previous and next tabs
      if (currentTabIndex !== -1) {
        setPrevTab(tabIds[currentTabIndex - 1]);
      }
      if (currentTabIndex <= tabIds.length) {
        setNextTab(tabIds[currentTabIndex + 1]);
      }

      // Check if `prev` button should be disabled
      var isSetupPage = tabIds[currentTabIndex] === "setup-page";
      var betterdocsInsightsAllowed = getCookie("betterdocs_insights_allowed") == "1";
      setDisablePrev(isSetupPage && (isStartClicked || betterdocsInsightsAllowed));
    }, [props.active, props.fields, isStartClicked]);
    React.useEffect(function () {
      var _builderContext$confi;
      builderContext.setFieldValue("active_tab", builderContext === null || builderContext === void 0 || (_builderContext$confi = builderContext.config) === null || _builderContext$confi === void 0 ? void 0 : _builderContext$confi.active);
    }, [props.active]);
    var handleButtonClick = function handleButtonClick(button) {
      var tabIds = props.fields.map(function (tab) {
        return tab.id;
      });
      var currentTabIndex = tabIds.findIndex(function (tab) {
        return tab === props.active;
      });
      var targetTab;
      if (button === "start") {
        builderContext.setFieldValue("isStartClicked", true); // Update context
        targetTab = tabIds[currentTabIndex + 1];
      } else if (button === "next" || button === "skip") {
        targetTab = tabIds[currentTabIndex + 1];
      } else if (button === "prev" && !disablePrev) {
        targetTab = tabIds[currentTabIndex - 1];
      }

      // Navigate to the target tab if it exists
      if (targetTab) {
        props.setActive(targetTab);
      }
    };
    return React.createElement("div", {
      className: "wprf-stepped-button"
    }, props.config.buttons && Object.keys(props.config.buttons).map(function (button, index) {
      var _props$config$buttons, _props$config$buttons2, _props$config$buttons3, _props$config$buttons4, _props$config$buttons5, _props$config$buttons6, _props$config$buttons7, _props$config$buttons8, _props$config$buttons9, _props$config$buttons10, _props$config$buttons11, _props$config$buttons12, _props$config$buttons13, _props$config$buttons14, _props$config$buttons15;
      return React.createElement(React__default["default"].Fragment, {
        key: "button_".concat(button, "_").concat(index)
      }, button === "skip" && nextTab !== undefined && React.createElement(components.Button, {
        className: "wprf-btn wprf-step-btn-".concat(button),
        onClick: function onClick() {
          return handleButtonClick(button);
        }
      }, (_props$config$buttons = props.config.buttons) === null || _props$config$buttons === void 0 ? void 0 : _props$config$buttons[button]), button === "start" && prevTab === undefined && React.createElement("div", {
        className: "wprf-btn wprf-step-btn-next"
      }, React.createElement(Field$1, {
        type: "button",
        ajax: (_props$config$buttons2 = props.config.buttons) === null || _props$config$buttons2 === void 0 || (_props$config$buttons2 = _props$config$buttons2[button]) === null || _props$config$buttons2 === void 0 ? void 0 : _props$config$buttons2.ajax,
        name: "step-button",
        onClick: function onClick() {
          return handleButtonClick(button);
        },
        text: _typeof$1((_props$config$buttons3 = props.config.buttons) === null || _props$config$buttons3 === void 0 ? void 0 : _props$config$buttons3[button]) === "object" ? (props === null || props === void 0 ? void 0 : props.active) === ((_props$config$buttons4 = props.config.buttons) === null || _props$config$buttons4 === void 0 || (_props$config$buttons4 = _props$config$buttons4[button]) === null || _props$config$buttons4 === void 0 ? void 0 : _props$config$buttons4.condition) ? (_props$config$buttons5 = props.config.buttons) === null || _props$config$buttons5 === void 0 || (_props$config$buttons5 = _props$config$buttons5[button]) === null || _props$config$buttons5 === void 0 ? void 0 : _props$config$buttons5.customName : (_props$config$buttons6 = props.config.buttons) === null || _props$config$buttons6 === void 0 || (_props$config$buttons6 = _props$config$buttons6[button]) === null || _props$config$buttons6 === void 0 ? void 0 : _props$config$buttons6.name : (_props$config$buttons7 = props.config.buttons) === null || _props$config$buttons7 === void 0 ? void 0 : _props$config$buttons7[button]
      })), (button === "next" && nextTab !== undefined && prevTab !== undefined || button === "prev" && prevTab !== undefined) && React.createElement("div", {
        className: "wprf-btn wprf-step-btn-".concat(button, " ").concat(button === "prev" && disablePrev ? "disabled" : "")
      }, React.createElement(Field$1, {
        type: "button",
        ajax: (_props$config$buttons8 = props.config.buttons) === null || _props$config$buttons8 === void 0 || (_props$config$buttons8 = _props$config$buttons8[button]) === null || _props$config$buttons8 === void 0 ? void 0 : _props$config$buttons8.ajax,
        name: "step-button",
        disabled: button === "prev" && disablePrev,
        onClick: function onClick() {
          return handleButtonClick(button);
        },
        text: _typeof$1((_props$config$buttons9 = props.config.buttons) === null || _props$config$buttons9 === void 0 ? void 0 : _props$config$buttons9[button]) === "object" ? (props === null || props === void 0 ? void 0 : props.active) === ((_props$config$buttons10 = props.config.buttons) === null || _props$config$buttons10 === void 0 || (_props$config$buttons10 = _props$config$buttons10[button]) === null || _props$config$buttons10 === void 0 ? void 0 : _props$config$buttons10.condition) ? (_props$config$buttons11 = props.config.buttons) === null || _props$config$buttons11 === void 0 || (_props$config$buttons11 = _props$config$buttons11[button]) === null || _props$config$buttons11 === void 0 ? void 0 : _props$config$buttons11.customName : (_props$config$buttons12 = props.config.buttons) === null || _props$config$buttons12 === void 0 || (_props$config$buttons12 = _props$config$buttons12[button]) === null || _props$config$buttons12 === void 0 ? void 0 : _props$config$buttons12.name : (_props$config$buttons13 = props.config.buttons) === null || _props$config$buttons13 === void 0 ? void 0 : _props$config$buttons13[button]
      })), nextTab === undefined && ((_props$config$buttons14 = props.config.buttons) === null || _props$config$buttons14 === void 0 || (_props$config$buttons14 = _props$config$buttons14[button]) === null || _props$config$buttons14 === void 0 ? void 0 : _props$config$buttons14.type) && React.createElement(Field$1, (_props$config$buttons15 = props.config.buttons) === null || _props$config$buttons15 === void 0 ? void 0 : _props$config$buttons15[button]));
    }));
  };
  var SteppedButton$1 = /*#__PURE__*/React__default["default"].memo(SteppedButton);

  function _objectDestructuringEmpty(t) {
    if (null == t) throw new TypeError("Cannot destructure " + t);
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
      setSearchString(e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
    };
    React.useEffect(function () {
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

  /** @type {HTMLTextAreaElement} */
  let _decodeTextArea;

  /**
   * Decodes the HTML entities from a given string.
   *
   * @param {string} html String that contain HTML entities.
   *
   * @example
   * ```js
   * import { decodeEntities } from '@wordpress/html-entities';
   *
   * const result = decodeEntities( '&aacute;' );
   * console.log( result ); // result will be "á"
   * ```
   *
   * @return {string} The decoded string.
   */
  function decodeEntities(html) {
    // Not a string, or no entities to decode.
    if ('string' !== typeof html || -1 === html.indexOf('&')) {
      return html;
    }

    // Create a textarea for decoding entities, that we can reuse.
    if (undefined === _decodeTextArea) {
      if (document.implementation && document.implementation.createHTMLDocument) {
        _decodeTextArea = document.implementation.createHTMLDocument('').createElement('textarea');
      } else {
        _decodeTextArea = document.createElement('textarea');
      }
    }
    _decodeTextArea.innerHTML = html;
    const decoded = _decodeTextArea.textContent;
    _decodeTextArea.innerHTML = '';

    /**
     * Cast to string, HTMLTextAreaElement should always have `string` textContent.
     *
     * > The `textContent` property of the `Node` interface represents the text content of the
     * > node and its descendants.
     * >
     * > Value: A string or `null`
     * >
     * > * If the node is a `document` or a Doctype, `textContent` returns `null`.
     * > * If the node is a CDATA section, comment, processing instruction, or text node,
     * >   textContent returns the text inside the node, i.e., the `Node.nodeValue`.
     * > * For other node types, `textContent returns the concatenation of the textContent of
     * >   every child node, excluding comments and processing instructions. (This is an empty
     * >   string if the node has no children.)
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
     */
    return /** @type {string} */decoded;
  }

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement$1(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement$1(placement) {
    return placement.split('-')[0];
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function getUAString() {
    var uaData = navigator.userAgentData;

    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function (item) {
        return item.brand + "/" + item.version;
      }).join(' ');
    }

    return navigator.userAgent;
  }

  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }

    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }

    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;

    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }

    var _ref = isElement$1(element) ? getWindow(element) : window,
        visualViewport = _ref.visualViewport;

    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x: x,
      y: y
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement$1(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x,
        y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets,
        isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x,
        x = _offsets$x === void 0 ? 0 : _offsets$x,
        _offsets$y = offsets.y,
        y = _offsets$y === void 0 ? 0 : _offsets$y;

    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };

    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
        offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
        offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x,
      y: y
    }, getWindow(popper)) : {
      x: x,
      y: y
    };

    x = _ref4.x;
    y = _ref4.y;

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref5) {
    var state = _ref5.state,
        options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement$1(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
      isFixed: state.options.strategy === 'fixed'
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();

      if (layoutViewport || !layoutViewport && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement$1(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement$1(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$strategy = _options.strategy,
        strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement$1(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement$1(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement$1(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement$1(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement$1(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement$1(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement$1(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis) {
      var _offsetModifierState$;

      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _offsetModifierState$2;

      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _len = altAxis === 'y' ? 'height' : 'width';

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce$1(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce$1(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref) {
          var name = _ref.name,
              _ref$options = _ref.options,
              options = _ref$options === void 0 ? {} : _ref$options,
              effect = _ref.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  /**!
  * tippy.js v6.3.7
  * (c) 2017-2021 atomiks
  * MIT License
  */
  var BOX_CLASS = "tippy-box";
  var CONTENT_CLASS = "tippy-content";
  var BACKDROP_CLASS = "tippy-backdrop";
  var ARROW_CLASS = "tippy-arrow";
  var SVG_ARROW_CLASS = "tippy-svg-arrow";
  var TOUCH_OPTIONS = {
    passive: true,
    capture: true
  };
  var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
  };

  function hasOwnProperty(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
      var v = value[index];
      return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }

    return value;
  }
  function isType(value, type) {
    var str = {}.toString.call(value);
    return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
  }
  function invokeWithArgsOrReturn(value, args) {
    return typeof value === 'function' ? value.apply(void 0, args) : value;
  }
  function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) {
      return fn;
    }

    var timeout;
    return function (arg) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn(arg);
      }, ms);
    };
  }
  function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function (key) {
      delete clone[key];
    });
    return clone;
  }
  function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
  }
  function normalizeToArray(value) {
    return [].concat(value);
  }
  function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  function unique(arr) {
    return arr.filter(function (item, index) {
      return arr.indexOf(item) === index;
    });
  }
  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }
  function arrayFrom(value) {
    return [].slice.call(value);
  }
  function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function (acc, key) {
      if (obj[key] !== undefined) {
        acc[key] = obj[key];
      }

      return acc;
    }, {});
  }

  function div() {
    return document.createElement('div');
  }
  function isElement(value) {
    return ['Element', 'Fragment'].some(function (type) {
      return isType(value, type);
    });
  }
  function isNodeList(value) {
    return isType(value, 'NodeList');
  }
  function isMouseEvent(value) {
    return isType(value, 'MouseEvent');
  }
  function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
  }
  function getArrayOfElements(value) {
    if (isElement(value)) {
      return [value];
    }

    if (isNodeList(value)) {
      return arrayFrom(value);
    }

    if (Array.isArray(value)) {
      return value;
    }

    return arrayFrom(document.querySelectorAll(value));
  }
  function setTransitionDuration(els, value) {
    els.forEach(function (el) {
      if (el) {
        el.style.transitionDuration = value + "ms";
      }
    });
  }
  function setVisibilityState(els, state) {
    els.forEach(function (el) {
      if (el) {
        el.setAttribute('data-state', state);
      }
    });
  }
  function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;

    var _normalizeToArray = normalizeToArray(elementOrElements),
        element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
  }
  function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX,
        clientY = event.clientY;
    return popperTreeData.every(function (_ref) {
      var popperRect = _ref.popperRect,
          popperState = _ref.popperState,
          props = _ref.props;
      var interactiveBorder = props.interactiveBorder;
      var basePlacement = getBasePlacement(popperState.placement);
      var offsetData = popperState.modifiersData.offset;

      if (!offsetData) {
        return true;
      }

      var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
      var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
      var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
      var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
      var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
      var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
      var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
      var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
      return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
  }
  function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...

    ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
      box[method](event, listener);
    });
  }
  /**
   * Compared to xxx.contains, this function works for dom structures with shadow
   * dom
   */

  function actualContains(parent, child) {
    var target = child;

    while (target) {
      var _target$getRootNode;

      if (parent.contains(target)) {
        return true;
      }

      target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }

    return false;
  }

  var currentInput = {
    isTouch: false
  };
  var lastMouseMoveTime = 0;
  /**
   * When a `touchstart` event is fired, it's assumed the user is using touch
   * input. We'll bind a `mousemove` event listener to listen for mouse input in
   * the future. This way, the `isTouch` property is fully dynamic and will handle
   * hybrid devices that use a mix of touch + mouse input.
   */

  function onDocumentTouchStart() {
    if (currentInput.isTouch) {
      return;
    }

    currentInput.isTouch = true;

    if (window.performance) {
      document.addEventListener('mousemove', onDocumentMouseMove);
    }
  }
  /**
   * When two `mousemove` event are fired consecutively within 20ms, it's assumed
   * the user is using mouse input again. `mousemove` can fire on touch devices as
   * well, but very rarely that quickly.
   */

  function onDocumentMouseMove() {
    var now = performance.now();

    if (now - lastMouseMoveTime < 20) {
      currentInput.isTouch = false;
      document.removeEventListener('mousemove', onDocumentMouseMove);
    }

    lastMouseMoveTime = now;
  }
  /**
   * When an element is in focus and has a tippy, leaving the tab/window and
   * returning causes it to show again. For mouse users this is unexpected, but
   * for keyboard use it makes sense.
   * TODO: find a better technique to solve this problem
   */

  function onWindowBlur() {
    var activeElement = document.activeElement;

    if (isReferenceElement(activeElement)) {
      var instance = activeElement._tippy;

      if (activeElement.blur && !instance.state.isVisible) {
        activeElement.blur();
      }
    }
  }
  function bindGlobalEventListeners() {
    document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener('blur', onWindowBlur);
  }

  var isBrowser$1 = typeof window !== 'undefined' && typeof document !== 'undefined';
  var isIE11 = isBrowser$1 ? // @ts-ignore
  !!window.msCrypto : false;

  function createMemoryLeakWarning(method) {
    var txt = method === 'destroy' ? 'n already-' : ' ';
    return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
  }
  function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
  }

  function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
  }

  function getFormattedMessage(message) {
    return [getDevMessage(message), // title
    'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
    'line-height: 1.5', // footer
    'color: #a6a095;'];
  } // Assume warnings and errors never have the same message

  var visitedMessages;

  if (process.env.NODE_ENV !== "production") {
    resetVisitedMessages();
  }

  function resetVisitedMessages() {
    visitedMessages = new Set();
  }
  function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console;

      visitedMessages.add(message);

      (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
  }
  function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console2;

      visitedMessages.add(message);

      (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
  }
  function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
    errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
    errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
  }

  var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
  };
  var renderProps = {
    allowHTML: false,
    animation: 'fade',
    arrow: true,
    content: '',
    inertia: false,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999
  };
  var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
      content: 'auto',
      expanded: 'auto'
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: '',
    offset: [0, 10],
    onAfterUpdate: function onAfterUpdate() {},
    onBeforeUpdate: function onBeforeUpdate() {},
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    onClickOutside: function onClickOutside() {},
    placement: 'top',
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: 'mouseenter focus',
    triggerTarget: null
  }, pluginProps, renderProps);
  var defaultKeys = Object.keys(defaultProps);
  var setDefaultProps = function setDefaultProps(partialProps) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      validateProps(partialProps, []);
    }

    var keys = Object.keys(partialProps);
    keys.forEach(function (key) {
      defaultProps[key] = partialProps[key];
    });
  };
  function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps = plugins.reduce(function (acc, plugin) {
      var name = plugin.name,
          defaultValue = plugin.defaultValue;

      if (name) {
        var _name;

        acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
      }

      return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps);
  }
  function getDataAttributeProps(reference, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
      plugins: plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function (acc, key) {
      var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

      if (!valueAsString) {
        return acc;
      }

      if (key === 'content') {
        acc[key] = valueAsString;
      } else {
        try {
          acc[key] = JSON.parse(valueAsString);
        } catch (e) {
          acc[key] = valueAsString;
        }
      }

      return acc;
    }, {});
    return props;
  }
  function evaluateProps(reference, props) {
    var out = Object.assign({}, props, {
      content: invokeWithArgsOrReturn(props.content, [reference])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
      expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
      content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
    };
    return out;
  }
  function validateProps(partialProps, plugins) {
    if (partialProps === void 0) {
      partialProps = {};
    }

    if (plugins === void 0) {
      plugins = [];
    }

    var keys = Object.keys(partialProps);
    keys.forEach(function (prop) {
      var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
      var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

      if (didPassUnknownProp) {
        didPassUnknownProp = plugins.filter(function (plugin) {
          return plugin.name === prop;
        }).length === 0;
      }

      warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
    });
  }

  var innerHTML = function innerHTML() {
    return 'innerHTML';
  };

  function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
  }

  function createArrowElement(value) {
    var arrow = div();

    if (value === true) {
      arrow.className = ARROW_CLASS;
    } else {
      arrow.className = SVG_ARROW_CLASS;

      if (isElement(value)) {
        arrow.appendChild(value);
      } else {
        dangerouslySetInnerHTML(arrow, value);
      }
    }

    return arrow;
  }

  function setContent(content, props) {
    if (isElement(props.content)) {
      dangerouslySetInnerHTML(content, '');
      content.appendChild(props.content);
    } else if (typeof props.content !== 'function') {
      if (props.allowHTML) {
        dangerouslySetInnerHTML(content, props.content);
      } else {
        content.textContent = props.content;
      }
    }
  }
  function getChildren(popper) {
    var box = popper.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
      box: box,
      content: boxChildren.find(function (node) {
        return node.classList.contains(CONTENT_CLASS);
      }),
      arrow: boxChildren.find(function (node) {
        return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
      }),
      backdrop: boxChildren.find(function (node) {
        return node.classList.contains(BACKDROP_CLASS);
      })
    };
  }
  function render(instance) {
    var popper = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute('data-state', 'hidden');
    box.setAttribute('tabindex', '-1');
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute('data-state', 'hidden');
    setContent(content, instance.props);
    popper.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);

    function onUpdate(prevProps, nextProps) {
      var _getChildren = getChildren(popper),
          box = _getChildren.box,
          content = _getChildren.content,
          arrow = _getChildren.arrow;

      if (nextProps.theme) {
        box.setAttribute('data-theme', nextProps.theme);
      } else {
        box.removeAttribute('data-theme');
      }

      if (typeof nextProps.animation === 'string') {
        box.setAttribute('data-animation', nextProps.animation);
      } else {
        box.removeAttribute('data-animation');
      }

      if (nextProps.inertia) {
        box.setAttribute('data-inertia', '');
      } else {
        box.removeAttribute('data-inertia');
      }

      box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

      if (nextProps.role) {
        box.setAttribute('role', nextProps.role);
      } else {
        box.removeAttribute('role');
      }

      if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
        setContent(content, instance.props);
      }

      if (nextProps.arrow) {
        if (!arrow) {
          box.appendChild(createArrowElement(nextProps.arrow));
        } else if (prevProps.arrow !== nextProps.arrow) {
          box.removeChild(arrow);
          box.appendChild(createArrowElement(nextProps.arrow));
        }
      } else if (arrow) {
        box.removeChild(arrow);
      }
    }

    return {
      popper: popper,
      onUpdate: onUpdate
    };
  } // Runtime check to identify if the render function is the default one; this
  // way we can apply default CSS transitions logic and it can be tree-shaken away

  render.$$tippy = true;

  var idCounter = 1;
  var mouseMoveListeners = []; // Used by `hideAll()`

  var mountedInstances = [];
  function createTippy(reference, passedProps) {
    var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================

    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================

    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
      // Is the instance currently enabled?
      isEnabled: true,
      // Is the tippy currently showing and not transitioning out?
      isVisible: false,
      // Has the instance been destroyed?
      isDestroyed: false,
      // Is the tippy currently mounted to the DOM?
      isMounted: false,
      // Has the tippy finished transitioning in?
      isShown: false
    };
    var instance = {
      // properties
      id: id,
      reference: reference,
      popper: div(),
      popperInstance: popperInstance,
      props: props,
      state: state,
      plugins: plugins,
      // methods
      clearDelayTimeouts: clearDelayTimeouts,
      setProps: setProps,
      setContent: setContent,
      show: show,
      hide: hide,
      hideWithInteractivity: hideWithInteractivity,
      enable: enable,
      disable: disable,
      unmount: unmount,
      destroy: destroy
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser

    /* istanbul ignore if */

    if (!props.render) {
      if (process.env.NODE_ENV !== "production") {
        errorWhen(true, 'render() function has not been supplied.');
      }

      return instance;
    } // ===========================================================================
    // Initial mutations
    // ===========================================================================


    var _props$render = props.render(instance),
        popper = _props$render.popper,
        onUpdate = _props$render.onUpdate;

    popper.setAttribute('data-tippy-root', '');
    popper.id = "tippy-" + instance.id;
    instance.popper = popper;
    reference._tippy = instance;
    popper._tippy = instance;
    var pluginsHooks = plugins.map(function (plugin) {
      return plugin.fn(instance);
    });
    var hasAriaExpanded = reference.hasAttribute('aria-expanded');
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook('onCreate', [instance]);

    if (props.showOnCreate) {
      scheduleShow();
    } // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding


    popper.addEventListener('mouseenter', function () {
      if (instance.props.interactive && instance.state.isVisible) {
        instance.clearDelayTimeouts();
      }
    });
    popper.addEventListener('mouseleave', function () {
      if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
        getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      }
    });
    return instance; // ===========================================================================
    // 🔒 Private methods
    // ===========================================================================

    function getNormalizedTouchSettings() {
      var touch = instance.props.touch;
      return Array.isArray(touch) ? touch : [touch, 0];
    }

    function getIsCustomTouchBehavior() {
      return getNormalizedTouchSettings()[0] === 'hold';
    }

    function getIsDefaultRenderFn() {
      var _instance$props$rende;

      // @ts-ignore
      return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
    }

    function getCurrentTarget() {
      return currentTarget || reference;
    }

    function getDocument() {
      var parent = getCurrentTarget().parentNode;
      return parent ? getOwnerDocument(parent) : document;
    }

    function getDefaultTemplateChildren() {
      return getChildren(popper);
    }

    function getDelay(isShow) {
      // For touch or keyboard input, force `0` delay for UX reasons
      // Also if the instance is mounted but not visible (transitioning out),
      // ignore delay
      if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
        return 0;
      }

      return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }

    function handleStyles(fromHide) {
      if (fromHide === void 0) {
        fromHide = false;
      }

      popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
      popper.style.zIndex = "" + instance.props.zIndex;
    }

    function invokeHook(hook, args, shouldInvokePropsHook) {
      if (shouldInvokePropsHook === void 0) {
        shouldInvokePropsHook = true;
      }

      pluginsHooks.forEach(function (pluginHooks) {
        if (pluginHooks[hook]) {
          pluginHooks[hook].apply(pluginHooks, args);
        }
      });

      if (shouldInvokePropsHook) {
        var _instance$props;

        (_instance$props = instance.props)[hook].apply(_instance$props, args);
      }
    }

    function handleAriaContentAttribute() {
      var aria = instance.props.aria;

      if (!aria.content) {
        return;
      }

      var attr = "aria-" + aria.content;
      var id = popper.id;
      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        var currentValue = node.getAttribute(attr);

        if (instance.state.isVisible) {
          node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
        } else {
          var nextValue = currentValue && currentValue.replace(id, '').trim();

          if (nextValue) {
            node.setAttribute(attr, nextValue);
          } else {
            node.removeAttribute(attr);
          }
        }
      });
    }

    function handleAriaExpandedAttribute() {
      if (hasAriaExpanded || !instance.props.aria.expanded) {
        return;
      }

      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        if (instance.props.interactive) {
          node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
        } else {
          node.removeAttribute('aria-expanded');
        }
      });
    }

    function cleanupInteractiveMouseListeners() {
      getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
      mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
        return listener !== debouncedOnMouseMove;
      });
    }

    function onDocumentPress(event) {
      // Moved finger to scroll instead of an intentional tap outside
      if (currentInput.isTouch) {
        if (didTouchMove || event.type === 'mousedown') {
          return;
        }
      }

      var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper

      if (instance.props.interactive && actualContains(popper, actualTarget)) {
        return;
      } // Clicked on the event listeners target


      if (normalizeToArray(instance.props.triggerTarget || reference).some(function (el) {
        return actualContains(el, actualTarget);
      })) {
        if (currentInput.isTouch) {
          return;
        }

        if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
          return;
        }
      } else {
        invokeHook('onClickOutside', [instance, event]);
      }

      if (instance.props.hideOnClick === true) {
        instance.clearDelayTimeouts();
        instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
        // currentTarget. This lets a tippy with `focus` trigger know that it
        // should not show

        didHideDueToDocumentMouseDown = true;
        setTimeout(function () {
          didHideDueToDocumentMouseDown = false;
        }); // The listener gets added in `scheduleShow()`, but this may be hiding it
        // before it shows, and hide()'s early bail-out behavior can prevent it
        // from being cleaned up

        if (!instance.state.isMounted) {
          removeDocumentPress();
        }
      }
    }

    function onTouchMove() {
      didTouchMove = true;
    }

    function onTouchStart() {
      didTouchMove = false;
    }

    function addDocumentPress() {
      var doc = getDocument();
      doc.addEventListener('mousedown', onDocumentPress, true);
      doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
      doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
      doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }

    function removeDocumentPress() {
      var doc = getDocument();
      doc.removeEventListener('mousedown', onDocumentPress, true);
      doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
      doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
      doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }

    function onTransitionedOut(duration, callback) {
      onTransitionEnd(duration, function () {
        if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
          callback();
        }
      });
    }

    function onTransitionedIn(duration, callback) {
      onTransitionEnd(duration, callback);
    }

    function onTransitionEnd(duration, callback) {
      var box = getDefaultTemplateChildren().box;

      function listener(event) {
        if (event.target === box) {
          updateTransitionEndListener(box, 'remove', listener);
          callback();
        }
      } // Make callback synchronous if duration is 0
      // `transitionend` won't fire otherwise


      if (duration === 0) {
        return callback();
      }

      updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
      updateTransitionEndListener(box, 'add', listener);
      currentTransitionEndListener = listener;
    }

    function on(eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }

      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        node.addEventListener(eventType, handler, options);
        listeners.push({
          node: node,
          eventType: eventType,
          handler: handler,
          options: options
        });
      });
    }

    function addListeners() {
      if (getIsCustomTouchBehavior()) {
        on('touchstart', onTrigger, {
          passive: true
        });
        on('touchend', onMouseLeave, {
          passive: true
        });
      }

      splitBySpaces(instance.props.trigger).forEach(function (eventType) {
        if (eventType === 'manual') {
          return;
        }

        on(eventType, onTrigger);

        switch (eventType) {
          case 'mouseenter':
            on('mouseleave', onMouseLeave);
            break;

          case 'focus':
            on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
            break;

          case 'focusin':
            on('focusout', onBlurOrFocusOut);
            break;
        }
      });
    }

    function removeListeners() {
      listeners.forEach(function (_ref) {
        var node = _ref.node,
            eventType = _ref.eventType,
            handler = _ref.handler,
            options = _ref.options;
        node.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }

    function onTrigger(event) {
      var _lastTriggerEvent;

      var shouldScheduleClickHide = false;

      if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
        return;
      }

      var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
      lastTriggerEvent = event;
      currentTarget = event.currentTarget;
      handleAriaExpandedAttribute();

      if (!instance.state.isVisible && isMouseEvent(event)) {
        // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved
        mouseMoveListeners.forEach(function (listener) {
          return listener(event);
        });
      } // Toggle show/hide when clicking click-triggered tooltips


      if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
        shouldScheduleClickHide = true;
      } else {
        scheduleShow(event);
      }

      if (event.type === 'click') {
        isVisibleFromClick = !shouldScheduleClickHide;
      }

      if (shouldScheduleClickHide && !wasFocused) {
        scheduleHide(event);
      }
    }

    function onMouseMove(event) {
      var target = event.target;
      var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

      if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
        return;
      }

      var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
        var _instance$popperInsta;

        var instance = popper._tippy;
        var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

        if (state) {
          return {
            popperRect: popper.getBoundingClientRect(),
            popperState: state,
            props: props
          };
        }

        return null;
      }).filter(Boolean);

      if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
        cleanupInteractiveMouseListeners();
        scheduleHide(event);
      }
    }

    function onMouseLeave(event) {
      var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

      if (shouldBail) {
        return;
      }

      if (instance.props.interactive) {
        instance.hideWithInteractivity(event);
        return;
      }

      scheduleHide(event);
    }

    function onBlurOrFocusOut(event) {
      if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
        return;
      } // If focus was moved to within the popper


      if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
        return;
      }

      scheduleHide(event);
    }

    function isEventListenerStopped(event) {
      return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
    }

    function createPopperInstance() {
      destroyPopperInstance();
      var _instance$props2 = instance.props,
          popperOptions = _instance$props2.popperOptions,
          placement = _instance$props2.placement,
          offset = _instance$props2.offset,
          getReferenceClientRect = _instance$props2.getReferenceClientRect,
          moveTransition = _instance$props2.moveTransition;
      var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
      var computedReference = getReferenceClientRect ? {
        getBoundingClientRect: getReferenceClientRect,
        contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
      } : reference;
      var tippyModifier = {
        name: '$$tippy',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: function fn(_ref2) {
          var state = _ref2.state;

          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh = getDefaultTemplateChildren(),
                box = _getDefaultTemplateCh.box;

            ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
              if (attr === 'placement') {
                box.setAttribute('data-placement', state.placement);
              } else {
                if (state.attributes.popper["data-popper-" + attr]) {
                  box.setAttribute("data-" + attr, '');
                } else {
                  box.removeAttribute("data-" + attr);
                }
              }
            });
            state.attributes.popper = {};
          }
        }
      };
      var modifiers = [{
        name: 'offset',
        options: {
          offset: offset
        }
      }, {
        name: 'preventOverflow',
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: 'flip',
        options: {
          padding: 5
        }
      }, {
        name: 'computeStyles',
        options: {
          adaptive: !moveTransition
        }
      }, tippyModifier];

      if (getIsDefaultRenderFn() && arrow) {
        modifiers.push({
          name: 'arrow',
          options: {
            element: arrow,
            padding: 3
          }
        });
      }

      modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
      instance.popperInstance = createPopper(computedReference, popper, Object.assign({}, popperOptions, {
        placement: placement,
        onFirstUpdate: onFirstUpdate,
        modifiers: modifiers
      }));
    }

    function destroyPopperInstance() {
      if (instance.popperInstance) {
        instance.popperInstance.destroy();
        instance.popperInstance = null;
      }
    }

    function mount() {
      var appendTo = instance.props.appendTo;
      var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
      // it's directly after the reference element so the elements inside the
      // tippy can be tabbed to
      // If there are clipping issues, the user can specify a different appendTo
      // and ensure focus management is handled correctly manually

      var node = getCurrentTarget();

      if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
        parentNode = node.parentNode;
      } else {
        parentNode = invokeWithArgsOrReturn(appendTo, [node]);
      } // The popper element needs to exist on the DOM before its position can be
      // updated as Popper needs to read its dimensions


      if (!parentNode.contains(popper)) {
        parentNode.appendChild(popper);
      }

      instance.state.isMounted = true;
      createPopperInstance();
      /* istanbul ignore else */

      if (process.env.NODE_ENV !== "production") {
        // Accessibility check
        warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
      }
    }

    function getNestedPopperTree() {
      return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
    }

    function scheduleShow(event) {
      instance.clearDelayTimeouts();

      if (event) {
        invokeHook('onTrigger', [instance, event]);
      }

      addDocumentPress();
      var delay = getDelay(true);

      var _getNormalizedTouchSe = getNormalizedTouchSettings(),
          touchValue = _getNormalizedTouchSe[0],
          touchDelay = _getNormalizedTouchSe[1];

      if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
        delay = touchDelay;
      }

      if (delay) {
        showTimeout = setTimeout(function () {
          instance.show();
        }, delay);
      } else {
        instance.show();
      }
    }

    function scheduleHide(event) {
      instance.clearDelayTimeouts();
      invokeHook('onUntrigger', [instance, event]);

      if (!instance.state.isVisible) {
        removeDocumentPress();
        return;
      } // For interactive tippies, scheduleHide is added to a document.body handler
      // from onMouseLeave so must intercept scheduled hides from mousemove/leave
      // events when trigger contains mouseenter and click, and the tip is
      // currently shown as a result of a click.


      if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
        return;
      }

      var delay = getDelay(false);

      if (delay) {
        hideTimeout = setTimeout(function () {
          if (instance.state.isVisible) {
            instance.hide();
          }
        }, delay);
      } else {
        // Fixes a `transitionend` problem when it fires 1 frame too
        // late sometimes, we don't want hide() to be called.
        scheduleHideAnimationFrame = requestAnimationFrame(function () {
          instance.hide();
        });
      }
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================


    function enable() {
      instance.state.isEnabled = true;
    }

    function disable() {
      // Disabling the instance should also hide it
      // https://github.com/atomiks/tippy.js-react/issues/106
      instance.hide();
      instance.state.isEnabled = false;
    }

    function clearDelayTimeouts() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      cancelAnimationFrame(scheduleHideAnimationFrame);
    }

    function setProps(partialProps) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== "production") {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
      }

      if (instance.state.isDestroyed) {
        return;
      }

      invokeHook('onBeforeUpdate', [instance, partialProps]);
      removeListeners();
      var prevProps = instance.props;
      var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
        ignoreAttributes: true
      }));
      instance.props = nextProps;
      addListeners();

      if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
        cleanupInteractiveMouseListeners();
        debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
      } // Ensure stale aria-expanded attributes are removed


      if (prevProps.triggerTarget && !nextProps.triggerTarget) {
        normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
          node.removeAttribute('aria-expanded');
        });
      } else if (nextProps.triggerTarget) {
        reference.removeAttribute('aria-expanded');
      }

      handleAriaExpandedAttribute();
      handleStyles();

      if (onUpdate) {
        onUpdate(prevProps, nextProps);
      }

      if (instance.popperInstance) {
        createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
        // and the nested ones get re-rendered first.
        // https://github.com/atomiks/tippyjs-react/issues/177
        // TODO: find a cleaner / more efficient solution(!)

        getNestedPopperTree().forEach(function (nestedPopper) {
          // React (and other UI libs likely) requires a rAF wrapper as it flushes
          // its work in one
          requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
        });
      }

      invokeHook('onAfterUpdate', [instance, partialProps]);
    }

    function setContent(content) {
      instance.setProps({
        content: content
      });
    }

    function show() {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== "production") {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
      } // Early bail-out


      var isAlreadyVisible = instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

      if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
        return;
      } // Normalize `disabled` behavior across browsers.
      // Firefox allows events on disabled elements, but Chrome doesn't.
      // Using a wrapper element (i.e. <span>) is recommended.


      if (getCurrentTarget().hasAttribute('disabled')) {
        return;
      }

      invokeHook('onShow', [instance], false);

      if (instance.props.onShow(instance) === false) {
        return;
      }

      instance.state.isVisible = true;

      if (getIsDefaultRenderFn()) {
        popper.style.visibility = 'visible';
      }

      handleStyles();
      addDocumentPress();

      if (!instance.state.isMounted) {
        popper.style.transition = 'none';
      } // If flipping to the opposite side after hiding at least once, the
      // animation will use the wrong placement without resetting the duration


      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
            box = _getDefaultTemplateCh2.box,
            content = _getDefaultTemplateCh2.content;

        setTransitionDuration([box, content], 0);
      }

      onFirstUpdate = function onFirstUpdate() {
        var _instance$popperInsta2;

        if (!instance.state.isVisible || ignoreOnFirstUpdate) {
          return;
        }

        ignoreOnFirstUpdate = true; // reflow

        void popper.offsetHeight;
        popper.style.transition = instance.props.moveTransition;

        if (getIsDefaultRenderFn() && instance.props.animation) {
          var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
              _box = _getDefaultTemplateCh3.box,
              _content = _getDefaultTemplateCh3.content;

          setTransitionDuration([_box, _content], duration);
          setVisibilityState([_box, _content], 'visible');
        }

        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
        // popper has been positioned for the first time

        (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
        invokeHook('onMount', [instance]);

        if (instance.props.animation && getIsDefaultRenderFn()) {
          onTransitionedIn(duration, function () {
            instance.state.isShown = true;
            invokeHook('onShown', [instance]);
          });
        }
      };

      mount();
    }

    function hide() {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== "production") {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
      } // Early bail-out


      var isAlreadyHidden = !instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

      if (isAlreadyHidden || isDestroyed || isDisabled) {
        return;
      }

      invokeHook('onHide', [instance], false);

      if (instance.props.onHide(instance) === false) {
        return;
      }

      instance.state.isVisible = false;
      instance.state.isShown = false;
      ignoreOnFirstUpdate = false;
      isVisibleFromClick = false;

      if (getIsDefaultRenderFn()) {
        popper.style.visibility = 'hidden';
      }

      cleanupInteractiveMouseListeners();
      removeDocumentPress();
      handleStyles(true);

      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
            box = _getDefaultTemplateCh4.box,
            content = _getDefaultTemplateCh4.content;

        if (instance.props.animation) {
          setTransitionDuration([box, content], duration);
          setVisibilityState([box, content], 'hidden');
        }
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();

      if (instance.props.animation) {
        if (getIsDefaultRenderFn()) {
          onTransitionedOut(duration, instance.unmount);
        }
      } else {
        instance.unmount();
      }
    }

    function hideWithInteractivity(event) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== "production") {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
      }

      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }

    function unmount() {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== "production") {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
      }

      if (instance.state.isVisible) {
        instance.hide();
      }

      if (!instance.state.isMounted) {
        return;
      }

      destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
      // tree by default. This seems mainly for interactive tippies, but we should
      // find a workaround if possible

      getNestedPopperTree().forEach(function (nestedPopper) {
        nestedPopper._tippy.unmount();
      });

      if (popper.parentNode) {
        popper.parentNode.removeChild(popper);
      }

      mountedInstances = mountedInstances.filter(function (i) {
        return i !== instance;
      });
      instance.state.isMounted = false;
      invokeHook('onHidden', [instance]);
    }

    function destroy() {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== "production") {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
      }

      if (instance.state.isDestroyed) {
        return;
      }

      instance.clearDelayTimeouts();
      instance.unmount();
      removeListeners();
      delete reference._tippy;
      instance.state.isDestroyed = true;
      invokeHook('onDestroy', [instance]);
    }
  }

  function tippy(targets, optionalProps) {
    if (optionalProps === void 0) {
      optionalProps = {};
    }

    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    /* istanbul ignore else */

    if (process.env.NODE_ENV !== "production") {
      validateTargets(targets);
      validateProps(optionalProps, plugins);
    }

    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
      plugins: plugins
    });
    var elements = getArrayOfElements(targets);
    /* istanbul ignore else */

    if (process.env.NODE_ENV !== "production") {
      var isSingleContentElement = isElement(passedProps.content);
      var isMoreThanOneReferenceElement = elements.length > 1;
      warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
    }

    var instances = elements.reduce(function (acc, reference) {
      var instance = reference && createTippy(reference, passedProps);

      if (instance) {
        acc.push(instance);
      }

      return acc;
    }, []);
    return isElement(targets) ? instances[0] : instances;
  }

  tippy.defaultProps = defaultProps;
  tippy.setDefaultProps = setDefaultProps;
  tippy.currentInput = currentInput;

  // every time the popper is destroyed (i.e. a new target), removing the styles
  // and causing transitions to break for singletons when the console is open, but
  // most notably for non-transform styles being used, `gpuAcceleration: false`.

  Object.assign({}, applyStyles$1, {
    effect: function effect(_ref) {
      var state = _ref.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: '0',
          top: '0',
          margin: '0'
        },
        arrow: {
          position: 'absolute'
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;

      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      } // intentionally return no cleanup function
      // return () => { ... }

    }
  });

  tippy.setDefaultProps({
    render: render
  });

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

  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  function preserveRef(ref, node) {
    if (ref) {
      if (typeof ref === 'function') {
        ref(node);
      }

      if ({}.hasOwnProperty.call(ref, 'current')) {
        ref.current = node;
      }
    }
  }
  function ssrSafeCreateDiv() {
    return isBrowser && document.createElement('div');
  }
  function toDataAttributes(attrs) {
    var dataAttrs = {
      'data-placement': attrs.placement
    };

    if (attrs.referenceHidden) {
      dataAttrs['data-reference-hidden'] = '';
    }

    if (attrs.escaped) {
      dataAttrs['data-escaped'] = '';
    }

    return dataAttrs;
  }

  function deepEqual(x, y) {
    if (x === y) {
      return true;
    } else if (typeof x === 'object' && x != null && typeof y === 'object' && y != null) {
      if (Object.keys(x).length !== Object.keys(y).length) {
        return false;
      }

      for (var prop in x) {
        if (y.hasOwnProperty(prop)) {
          if (!deepEqual(x[prop], y[prop])) {
            return false;
          }
        } else {
          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  }

  function uniqueByShape(arr) {
    var output = [];
    arr.forEach(function (item) {
      if (!output.find(function (outputItem) {
        return deepEqual(item, outputItem);
      })) {
        output.push(item);
      }
    });
    return output;
  }
  function deepPreserveProps(instanceProps, componentProps) {
    var _instanceProps$popper, _componentProps$poppe;

    return Object.assign({}, componentProps, {
      popperOptions: Object.assign({}, instanceProps.popperOptions, componentProps.popperOptions, {
        modifiers: uniqueByShape([].concat(((_instanceProps$popper = instanceProps.popperOptions) == null ? void 0 : _instanceProps$popper.modifiers) || [], ((_componentProps$poppe = componentProps.popperOptions) == null ? void 0 : _componentProps$poppe.modifiers) || []))
      })
    });
  }

  var useIsomorphicLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;
  function useMutableBox(initialValue) {
    // Using refs instead of state as it's recommended to not store imperative
    // values in state due to memory problems in React(?)
    var ref = React.useRef();

    if (!ref.current) {
      ref.current = typeof initialValue === 'function' ? initialValue() : initialValue;
    }

    return ref.current;
  }

  function updateClassName(box, action, classNames) {
    classNames.split(/\s+/).forEach(function (name) {
      if (name) {
        box.classList[action](name);
      }
    });
  }

  var classNamePlugin = {
    name: 'className',
    defaultValue: '',
    fn: function fn(instance) {
      var box = instance.popper.firstElementChild;

      var isDefaultRenderFn = function isDefaultRenderFn() {
        var _instance$props$rende;

        return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
      };

      function add() {
        if (instance.props.className && !isDefaultRenderFn()) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(['@tippyjs/react: Cannot use `className` prop in conjunction with', '`render` prop. Place the className on the element you are', 'rendering.'].join(' '));
          }

          return;
        }

        updateClassName(box, 'add', instance.props.className);
      }

      function remove() {
        if (isDefaultRenderFn()) {
          updateClassName(box, 'remove', instance.props.className);
        }
      }

      return {
        onCreate: add,
        onBeforeUpdate: remove,
        onAfterUpdate: add
      };
    }
  };

  function TippyGenerator(tippy) {
    function Tippy(_ref) {
      var children = _ref.children,
          content = _ref.content,
          visible = _ref.visible,
          singleton = _ref.singleton,
          render = _ref.render,
          reference = _ref.reference,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled,
          _ref$ignoreAttributes = _ref.ignoreAttributes,
          ignoreAttributes = _ref$ignoreAttributes === void 0 ? true : _ref$ignoreAttributes;
          _ref.__source;
          _ref.__self;
          var restOfNativeProps = _objectWithoutPropertiesLoose(_ref, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"]);

      var isControlledMode = visible !== undefined;
      var isSingletonMode = singleton !== undefined;

      var _useState = React.useState(false),
          mounted = _useState[0],
          setMounted = _useState[1];

      var _useState2 = React.useState({}),
          attrs = _useState2[0],
          setAttrs = _useState2[1];

      var _useState3 = React.useState(),
          singletonContent = _useState3[0],
          setSingletonContent = _useState3[1];

      var mutableBox = useMutableBox(function () {
        return {
          container: ssrSafeCreateDiv(),
          renders: 1
        };
      });
      var props = Object.assign({
        ignoreAttributes: ignoreAttributes
      }, restOfNativeProps, {
        content: mutableBox.container
      });

      if (isControlledMode) {
        if (process.env.NODE_ENV !== 'production') {
          ['trigger', 'hideOnClick', 'showOnCreate'].forEach(function (nativeStateProp) {
            if (props[nativeStateProp] !== undefined) {
              console.warn(["@tippyjs/react: Cannot specify `" + nativeStateProp + "` prop in", "controlled mode (`visible` prop)"].join(' '));
            }
          });
        }

        props.trigger = 'manual';
        props.hideOnClick = false;
      }

      if (isSingletonMode) {
        disabled = true;
      }

      var computedProps = props;
      var plugins = props.plugins || [];

      if (render) {
        computedProps = Object.assign({}, props, {
          plugins: isSingletonMode && singleton.data != null ? [].concat(plugins, [{
            fn: function fn() {
              return {
                onTrigger: function onTrigger(instance, event) {
                  var node = singleton.data.children.find(function (_ref2) {
                    var instance = _ref2.instance;
                    return instance.reference === event.currentTarget;
                  });
                  instance.state.$$activeSingletonInstance = node.instance;
                  setSingletonContent(node.content);
                }
              };
            }
          }]) : plugins,
          render: function render() {
            return {
              popper: mutableBox.container
            };
          }
        });
      }

      var deps = [reference].concat(children ? [children.type] : []); // CREATE

      useIsomorphicLayoutEffect(function () {
        var element = reference;

        if (reference && reference.hasOwnProperty('current')) {
          element = reference.current;
        }

        var instance = tippy(element || mutableBox.ref || ssrSafeCreateDiv(), Object.assign({}, computedProps, {
          plugins: [classNamePlugin].concat(props.plugins || [])
        }));
        mutableBox.instance = instance;

        if (disabled) {
          instance.disable();
        }

        if (visible) {
          instance.show();
        }

        if (isSingletonMode) {
          singleton.hook({
            instance: instance,
            content: content,
            props: computedProps,
            setSingletonContent: setSingletonContent
          });
        }

        setMounted(true);
        return function () {
          instance.destroy();
          singleton == null ? void 0 : singleton.cleanup(instance);
        };
      }, deps); // UPDATE

      useIsomorphicLayoutEffect(function () {
        var _instance$popperInsta;

        // Prevent this effect from running on 1st render
        if (mutableBox.renders === 1) {
          mutableBox.renders++;
          return;
        }

        var instance = mutableBox.instance;
        instance.setProps(deepPreserveProps(instance.props, computedProps)); // Fixes #264

        (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.forceUpdate();

        if (disabled) {
          instance.disable();
        } else {
          instance.enable();
        }

        if (isControlledMode) {
          if (visible) {
            instance.show();
          } else {
            instance.hide();
          }
        }

        if (isSingletonMode) {
          singleton.hook({
            instance: instance,
            content: content,
            props: computedProps,
            setSingletonContent: setSingletonContent
          });
        }
      });
      useIsomorphicLayoutEffect(function () {
        var _instance$props$poppe;

        if (!render) {
          return;
        }

        var instance = mutableBox.instance;
        instance.setProps({
          popperOptions: Object.assign({}, instance.props.popperOptions, {
            modifiers: [].concat((((_instance$props$poppe = instance.props.popperOptions) == null ? void 0 : _instance$props$poppe.modifiers) || []).filter(function (_ref3) {
              var name = _ref3.name;
              return name !== '$$tippyReact';
            }), [{
              name: '$$tippyReact',
              enabled: true,
              phase: 'beforeWrite',
              requires: ['computeStyles'],
              fn: function fn(_ref4) {
                var _state$modifiersData;

                var state = _ref4.state;
                var hideData = (_state$modifiersData = state.modifiersData) == null ? void 0 : _state$modifiersData.hide; // WARNING: this is a high-risk path that can cause an infinite
                // loop. This expression _must_ evaluate to false when required

                if (attrs.placement !== state.placement || attrs.referenceHidden !== (hideData == null ? void 0 : hideData.isReferenceHidden) || attrs.escaped !== (hideData == null ? void 0 : hideData.hasPopperEscaped)) {
                  setAttrs({
                    placement: state.placement,
                    referenceHidden: hideData == null ? void 0 : hideData.isReferenceHidden,
                    escaped: hideData == null ? void 0 : hideData.hasPopperEscaped
                  });
                }

                state.attributes.popper = {};
              }
            }])
          })
        });
      }, [attrs.placement, attrs.referenceHidden, attrs.escaped].concat(deps));
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, children ? /*#__PURE__*/React.cloneElement(children, {
        ref: function ref(node) {
          mutableBox.ref = node;
          preserveRef(children.ref, node);
        }
      }) : null, mounted && /*#__PURE__*/reactDom.createPortal(render ? render(toDataAttributes(attrs), singletonContent, mutableBox.instance) : content, mutableBox.container));
    }

    return Tippy;
  }

  var forwardRef = (function (Tippy, defaultProps) {
    return /*#__PURE__*/React.forwardRef(function TippyWrapper(_ref, _ref2) {
      var children = _ref.children,
          props = _objectWithoutPropertiesLoose(_ref, ["children"]);

      return (
        /*#__PURE__*/
        // If I spread them separately here, Babel adds the _extends ponyfill for
        // some reason
        React__default["default"].createElement(Tippy, Object.assign({}, defaultProps, props), children ? /*#__PURE__*/React.cloneElement(children, {
          ref: function ref(node) {
            preserveRef(_ref2, node);
            preserveRef(children.ref, node);
          }
        }) : null)
      );
    });
  });
  var index = /*#__PURE__*/forwardRef( /*#__PURE__*/TippyGenerator(tippy));

  var Tippy = index;

  /* wp:polyfill */
  /**
   * Returns the query string part of the URL.
   *
   * @param {string} url The full URL.
   *
   * @example
   * ```js
   * const queryString = getQueryString( 'http://localhost:8080/this/is/a/test?query=true#fragment' ); // 'query=true'
   * ```
   *
   * @return {string|void} The query string part of the URL.
   */
  function getQueryString(url) {
    let query;
    try {
      query = new URL(url, 'http://example.com').search.substring(1);
    } catch (error) {}
    if (query) {
      return query;
    }
  }

  /**
   * Generates URL-encoded query string using input query data.
   *
   * It is intended to behave equivalent as PHP's `http_build_query`, configured
   * with encoding type PHP_QUERY_RFC3986 (spaces as `%20`).
   *
   * @example
   * ```js
   * const queryString = buildQueryString( {
   *    simple: 'is ok',
   *    arrays: [ 'are', 'fine', 'too' ],
   *    objects: {
   *       evenNested: {
   *          ok: 'yes',
   *       },
   *    },
   * } );
   * // "simple=is%20ok&arrays%5B0%5D=are&arrays%5B1%5D=fine&arrays%5B2%5D=too&objects%5BevenNested%5D%5Bok%5D=yes"
   * ```
   *
   * @param {Record<string,*>} data Data to encode.
   *
   * @return {string} Query string.
   */
  function buildQueryString(data) {
    let string = '';
    const stack = Object.entries(data);
    let pair;
    while (pair = stack.shift()) {
      let [key, value] = pair;

      // Support building deeply nested data, from array or object values.
      const hasNestedData = Array.isArray(value) || value && value.constructor === Object;
      if (hasNestedData) {
        // Push array or object values onto the stack as composed of their
        // original key and nested index or key, retaining order by a
        // combination of Array#reverse and Array#unshift onto the stack.
        const valuePairs = Object.entries(value).reverse();
        for (const [member, memberValue] of valuePairs) {
          stack.unshift([`${key}[${member}]`, memberValue]);
        }
      } else if (value !== undefined) {
        // Null is treated as special case, equivalent to empty string.
        if (value === null) {
          value = '';
        }
        string += '&' + [key, value].map(encodeURIComponent).join('=');
      }
    }

    // Loop will concatenate with leading `&`, but it's only expected for all
    // but the first query parameter. This strips the leading `&`, while still
    // accounting for the case that the string may in-fact be empty.
    return string.substr(1);
  }

  /**
   * Safely decodes a URI component with `decodeURIComponent`. Returns the URI component unmodified if
   * `decodeURIComponent` throws an error.
   *
   * @param {string} uriComponent URI component to decode.
   *
   * @return {string} Decoded URI component if possible.
   */
  function safeDecodeURIComponent(uriComponent) {
    try {
      return decodeURIComponent(uriComponent);
    } catch (uriComponentError) {
      return uriComponent;
    }
  }

  /**
   * Internal dependencies
   */

  /** @typedef {import('./get-query-arg').QueryArgParsed} QueryArgParsed */

  /**
   * @typedef {Record<string,QueryArgParsed>} QueryArgs
   */

  /**
   * Sets a value in object deeply by a given array of path segments. Mutates the
   * object reference.
   *
   * @param {Record<string,*>} object Object in which to assign.
   * @param {string[]}         path   Path segment at which to set value.
   * @param {*}                value  Value to set.
   */
  function setPath(object, path, value) {
    const length = path.length;
    const lastIndex = length - 1;
    for (let i = 0; i < length; i++) {
      let key = path[i];
      if (!key && Array.isArray(object)) {
        // If key is empty string and next value is array, derive key from
        // the current length of the array.
        key = object.length.toString();
      }
      key = ['__proto__', 'constructor', 'prototype'].includes(key) ? key.toUpperCase() : key;

      // If the next key in the path is numeric (or empty string), it will be
      // created as an array. Otherwise, it will be created as an object.
      const isNextKeyArrayIndex = !isNaN(Number(path[i + 1]));
      object[key] = i === lastIndex ?
      // If at end of path, assign the intended value.
      value :
      // Otherwise, advance to the next object in the path, creating
      // it if it does not yet exist.
      object[key] || (isNextKeyArrayIndex ? [] : {});
      if (Array.isArray(object[key]) && !isNextKeyArrayIndex) {
        // If we current key is non-numeric, but the next value is an
        // array, coerce the value to an object.
        object[key] = {
          ...object[key]
        };
      }

      // Update working reference object to the next in the path.
      object = object[key];
    }
  }

  /**
   * Returns an object of query arguments of the given URL. If the given URL is
   * invalid or has no querystring, an empty object is returned.
   *
   * @param {string} url URL.
   *
   * @example
   * ```js
   * const foo = getQueryArgs( 'https://wordpress.org?foo=bar&bar=baz' );
   * // { "foo": "bar", "bar": "baz" }
   * ```
   *
   * @return {QueryArgs} Query args object.
   */
  function getQueryArgs(url) {
    return (getQueryString(url) || ''
    // Normalize space encoding, accounting for PHP URL encoding
    // corresponding to `application/x-www-form-urlencoded`.
    //
    // See: https://tools.ietf.org/html/rfc1866#section-8.2.1
    ).replace(/\+/g, '%20').split('&').reduce((accumulator, keyValue) => {
      const [key, value = ''] = keyValue.split('=')
      // Filtering avoids decoding as `undefined` for value, where
      // default is restored in destructuring assignment.
      .filter(Boolean).map(safeDecodeURIComponent);
      if (key) {
        const segments = key.replace(/\]/g, '').split('[');
        setPath(accumulator, segments, value);
      }
      return accumulator;
    }, Object.create(null));
  }

  /**
   * Internal dependencies
   */

  /**
   * Appends arguments as querystring to the provided URL. If the URL already
   * includes query arguments, the arguments are merged with (and take precedent
   * over) the existing set.
   *
   * @param {string} [url=''] URL to which arguments should be appended. If omitted,
   *                          only the resulting querystring is returned.
   * @param {Object} [args]   Query arguments to apply to URL.
   *
   * @example
   * ```js
   * const newURL = addQueryArgs( 'https://google.com', { q: 'test' } ); // https://google.com/?q=test
   * ```
   *
   * @return {string} URL with arguments applied.
   */
  function addQueryArgs(url = '', args) {
    // If no arguments are to be appended, return original URL.
    if (!args || !Object.keys(args).length) {
      return url;
    }
    let baseUrl = url;

    // Determine whether URL already had query arguments.
    const queryStringIndex = url.indexOf('?');
    if (queryStringIndex !== -1) {
      // Merge into existing query arguments.
      args = Object.assign(getQueryArgs(url), args);

      // Change working base URL to omit previous query arguments.
      baseUrl = baseUrl.substr(0, queryStringIndex);
    }
    return baseUrl + '?' + buildQueryString(args);
  }

  // Custom Option Component with Tooltip
  var CustomOption = function CustomOption(props) {
    var data = props.data,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      selectProps = props.selectProps;

    // Construct class names using classNamePrefix
    var prefix = selectProps.classNamePrefix || 'react-select';
    var optionClassName = "".concat(prefix, "__option");
    var focusedClassName = isFocused ? "".concat(optionClassName, "--is-focused") : '';
    var selectedClassName = isSelected ? "".concat(optionClassName, "--is-selected") : '';
    return React.createElement("div", _extends$1({
      ref: innerRef
    }, innerProps, {
      className: "".concat(optionClassName, " ").concat(focusedClassName, " ").concat(selectedClassName, " custom-option"),
      style: {
        padding: '10px',
        backgroundColor: isFocused ? '#f0f0f0' : 'white',
        cursor: 'pointer'
      }
    }), React.createElement("span", null, data.label), data.tooltip && React.createElement(Tippy, {
      content: data.tooltip
    }, React.createElement("span", {
      className: "tooltip-icon",
      style: {
        marginLeft: '10px'
      }
    }, React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M6.33203 10.332H7.66536V6.33203H6.33203V10.332ZM6.9987 4.9987C7.18759 4.9987 7.34592 4.93481 7.4737 4.80703C7.60148 4.67925 7.66536 4.52092 7.66536 4.33203C7.66536 4.14314 7.60148 3.98481 7.4737 3.85703C7.34592 3.72925 7.18759 3.66536 6.9987 3.66536C6.80981 3.66536 6.65148 3.72925 6.5237 3.85703C6.39592 3.98481 6.33203 4.14314 6.33203 4.33203C6.33203 4.52092 6.39592 4.67925 6.5237 4.80703C6.65148 4.93481 6.80981 4.9987 6.9987 4.9987ZM6.9987 13.6654C6.07648 13.6654 5.20981 13.4904 4.3987 13.1404C3.58759 12.7904 2.88203 12.3154 2.28203 11.7154C1.68203 11.1154 1.20703 10.4098 0.857031 9.5987C0.507031 8.78759 0.332031 7.92092 0.332031 6.9987C0.332031 6.07648 0.507031 5.20981 0.857031 4.3987C1.20703 3.58759 1.68203 2.88203 2.28203 2.28203C2.88203 1.68203 3.58759 1.20703 4.3987 0.857031C5.20981 0.507031 6.07648 0.332031 6.9987 0.332031C7.92092 0.332031 8.78759 0.507031 9.5987 0.857031C10.4098 1.20703 11.1154 1.68203 11.7154 2.28203C12.3154 2.88203 12.7904 3.58759 13.1404 4.3987C13.4904 5.20981 13.6654 6.07648 13.6654 6.9987C13.6654 7.92092 13.4904 8.78759 13.1404 9.5987C12.7904 10.4098 12.3154 11.1154 11.7154 11.7154C11.1154 12.3154 10.4098 12.7904 9.5987 13.1404C8.78759 13.4904 7.92092 13.6654 6.9987 13.6654ZM6.9987 12.332C8.48759 12.332 9.7487 11.8154 10.782 10.782C11.8154 9.7487 12.332 8.48759 12.332 6.9987C12.332 5.50981 11.8154 4.2487 10.782 3.21536C9.7487 2.18203 8.48759 1.66536 6.9987 1.66536C5.50981 1.66536 4.2487 2.18203 3.21536 3.21536C2.18203 4.2487 1.66536 5.50981 1.66536 6.9987C1.66536 8.48759 2.18203 9.7487 3.21536 10.782C4.2487 11.8154 5.50981 12.332 6.9987 12.332Z",
      fill: "#667085"
    })))));
  };
  var Select = function Select(props) {
    var _props$show_selected_;
    var builderContext = useBuilderContext();
    var id = props.id,
      name = props.name,
      multiple = props.multiple,
      placeholder = props.placeholder,
      _props$search = props.search,
      search = _props$search === void 0 ? false : _props$search,
      onChange = props.onChange,
      parentIndex = props.parentIndex,
      index = props.index;
    var _useOptions = useOptions(props, 'options'),
      options = _useOptions.options,
      selectedOption = _useOptions.selectedOption;
      _useOptions.setOptions;
      var setSelectedOption = _useOptions.setSelectedOption,
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
            var eligibleKey = props === null || props === void 0 ? void 0 : props.ajax.data[singleData].substr(1);
            eligibleKey = eligibleKey.includes('.') ? eligibleKey.split('.') : eligibleKey;
            if (Array.isArray(eligibleKey)) {
              var repeaterDatas = index != undefined ? builderContext.values[eligibleKey[0]][index] : builderContext.values[eligibleKey[0]];
              if (!Array.isArray(repeaterDatas) && _typeof$1(repeaterDatas) == 'object') {
                var _repeaterDatas$eligib;
                data[singleData] = Array.isArray(repeaterDatas[eligibleKey[1]]) ? (_repeaterDatas$eligib = repeaterDatas[eligibleKey[1]]) === null || _repeaterDatas$eligib === void 0 ? void 0 : _repeaterDatas$eligib.join(',') : repeaterDatas[eligibleKey[1]];
              } else {
                repeaterDatas === null || repeaterDatas === void 0 || repeaterDatas.map(function (value) {
                  var _value$eligibleKey$, _value$eligibleKey$2;
                  data[singleData] = Array.isArray(value[eligibleKey[1]]) ? (_value$eligibleKey$ = value[eligibleKey[1]]) === null || _value$eligibleKey$ === void 0 ? void 0 : _value$eligibleKey$.join(',') : value[eligibleKey[1]];
                  if (((_value$eligibleKey$2 = value[eligibleKey[1]]) === null || _value$eligibleKey$2 === void 0 ? void 0 : _value$eligibleKey$2.length) == 0) {
                    delete data[singleData];
                  }
                });
              }
            } else {
              var _builderContext$value;
              data[singleData] = (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[eligibleKey];
            }
          } else {
            data[singleData] = props === null || props === void 0 ? void 0 : props.ajax.data[singleData];
          }
        });
        if (!isAjaxComplete) {
          var _props$ajax;
          var payload = {
            path: props === null || props === void 0 ? void 0 : props.ajax.api,
            data: data,
            method: "POST"
          };
          if ((props === null || props === void 0 || (_props$ajax = props.ajax) === null || _props$ajax === void 0 ? void 0 : _props$ajax.method) == 'GET') {
            payload.method = 'GET';
            delete payload.data;
            payload.path = addQueryArgs(payload.path, data);
          }
          return wpFetch(payload).then(function (response) {
            var _Object$keys, _props$ajax2;
            var options = [];
            if (((_Object$keys = Object.keys(props === null || props === void 0 || (_props$ajax2 = props.ajax) === null || _props$ajax2 === void 0 ? void 0 : _props$ajax2.response_mapper)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
              response === null || response === void 0 || response.map(function (data) {
                var _props$ajax3, _props$ajax4, _props$ajax5, _props$ajax6, _props$ajax7, _props$ajax8;
                var keyLabel = props !== null && props !== void 0 && (_props$ajax3 = props.ajax) !== null && _props$ajax3 !== void 0 && (_props$ajax3 = _props$ajax3.response_mapper) !== null && _props$ajax3 !== void 0 && (_props$ajax3 = _props$ajax3.label) !== null && _props$ajax3 !== void 0 && _props$ajax3.includes('.') ? props === null || props === void 0 || (_props$ajax4 = props.ajax) === null || _props$ajax4 === void 0 || (_props$ajax4 = _props$ajax4.response_mapper) === null || _props$ajax4 === void 0 || (_props$ajax4 = _props$ajax4.label) === null || _props$ajax4 === void 0 ? void 0 : _props$ajax4.split('.') : props === null || props === void 0 || (_props$ajax5 = props.ajax) === null || _props$ajax5 === void 0 || (_props$ajax5 = _props$ajax5.response_mapper) === null || _props$ajax5 === void 0 ? void 0 : _props$ajax5.label;
                var keyValue = props !== null && props !== void 0 && (_props$ajax6 = props.ajax) !== null && _props$ajax6 !== void 0 && (_props$ajax6 = _props$ajax6.response_mapper) !== null && _props$ajax6 !== void 0 && (_props$ajax6 = _props$ajax6.value) !== null && _props$ajax6 !== void 0 && _props$ajax6.includes('.') ? props === null || props === void 0 || (_props$ajax7 = props.ajax) === null || _props$ajax7 === void 0 || (_props$ajax7 = _props$ajax7.response_mapper) === null || _props$ajax7 === void 0 || (_props$ajax7 = _props$ajax7.value) === null || _props$ajax7 === void 0 ? void 0 : _props$ajax7.split('.') : props === null || props === void 0 || (_props$ajax8 = props.ajax) === null || _props$ajax8 === void 0 || (_props$ajax8 = _props$ajax8.response_mapper) === null || _props$ajax8 === void 0 ? void 0 : _props$ajax8.value;
                var option = {};
                if (Array.isArray(keyLabel)) {
                  option['label'] = decodeEntities(removeTagsFromString(getDeepData(data, keyLabel)));
                } else {
                  option['label'] = decodeEntities(removeTagsFromString(data[keyLabel]));
                }
                if (Array.isArray(keyValue)) {
                  var lastKeyValue = keyValue[(keyValue === null || keyValue === void 0 ? void 0 : keyValue.length) - 1];
                  option['value'] = getDeepData(data, lastKeyValue);
                } else {
                  option['value'] = data[keyValue];
                }
                options.push(option);
              });
            }
            setIsLoading(false);
            var arrayMerge = merge(props.options, (options === null || options === void 0 ? void 0 : options.length) > 0 ? options : response, 'value');
            if ((arrayMerge === null || arrayMerge === void 0 ? void 0 : arrayMerge.find(function (data) {
              return (data === null || data === void 0 ? void 0 : data.value) == 'all';
            })) == undefined && (props === null || props === void 0 ? void 0 : props.include_all_in_options) == true && (response === null || response === void 0 ? void 0 : response.length) > 0) {
              arrayMerge === null || arrayMerge === void 0 || arrayMerge.unshift({
                label: i18n.__('All', 'betterdocs'),
                value: 'all'
              });
            }
            builderContext.setFormField([].concat(_toConsumableArray(parentIndex), ['options']), arrayMerge);
            setData({
              options: arrayMerge,
              parentIndex: [].concat(_toConsumableArray(parentIndex), ['options'])
            });
            return response;
          });
        }
      }
    };
    var handleOptionChange = React.useCallback(function (option) {
      setSOption(option);
      if (!isArray(option)) {
        onChange({
          target: {
            type: 'select',
            name: name,
            value: option === null || option === void 0 ? void 0 : option.value,
            options: options,
            multiple: multiple
          }
        });
      } else {
        onChange({
          target: {
            type: 'select',
            name: name,
            value: option === null || option === void 0 ? void 0 : option.map(function (item) {
              return item.value;
            }),
            options: options,
            multiple: multiple
          }
        });
      }
    }, [name, options, onChange, multiple]);
    var removeSelection = function removeSelection(item) {
      // @ts-ignore
      var newSelectedOptions = selectedOption.filter(function (option) {
        return (option === null || option === void 0 ? void 0 : option.value) != (item === null || item === void 0 ? void 0 : item.value);
      });
      setSOption(newSelectedOptions);
      setSelectedOption(newSelectedOptions);
    };
    React.useEffect(function () {
      handleMenuOpen();
    }, []);
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

    // Conditional components prop
    var selectComponents = props.options_tooltip ? {
      Option: CustomOption
    } : undefined;
    return React.createElement("div", {
      className: "wprf-select-wrapper"
    }, React.createElement(ReactSelect__default["default"], {
      isDisabled: props === null || props === void 0 ? void 0 : props.disable,
      className: "wprf-select",
      classNamePrefix: "wprf-select",
      isSearchable: search !== null && search !== void 0 ? search : false,
      id: id,
      name: name,
      menuIsOpen: props.menuIsOpen,
      isMulti: multiple !== null && multiple !== void 0 ? multiple : false,
      placeholder: placeholder,
      isLoading: isLoading,
      options: options,
      value: selectedOption,
      onMenuOpen: handleMenuOpen,
      components: selectComponents // Conditional rendering of tooltip-enabled options
      ,
      onChange: handleOptionChange,
      controlShouldRenderValue: (_props$show_selected_ = props === null || props === void 0 ? void 0 : props.show_selected_values) !== null && _props$show_selected_ !== void 0 ? _props$show_selected_ : true
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

    var _handleMenuOpen = function handleMenuOpen(inputValue, callback) {
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
              _handleMenuOpen.apply(void 0, _toConsumableArray(lr));
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
      loadOptions: _handleMenuOpen,
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

  function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  var Textarea$1 = withLabel(/*#__PURE__*/React__default["default"].memo(Textarea));

  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
    }, [tabs, builderContext === null || builderContext === void 0 || (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value.source]);
    return React.createElement("div", {
      className: classNames__default["default"]("wprf-tab-content-wrapper", builderContext === null || builderContext === void 0 || (_builderContext$value2 = builderContext.values) === null || _builderContext$value2 === void 0 ? void 0 : _builderContext$value2.source, builderContext === null || builderContext === void 0 || (_builderContext$value3 = builderContext.values) === null || _builderContext$value3 === void 0 ? void 0 : _builderContext$value3.themes)
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
    })), hooks.applyFilters("wprf_tab_content", "", rest)), (rest === null || rest === void 0 || (_rest$step = rest.step) === null || _rest$step === void 0 ? void 0 : _rest$step.show) && (rest !== null && rest !== void 0 && (_rest$step2 = rest.step) !== null && _rest$step2 !== void 0 && _rest$step2.rules ? when(rest === null || rest === void 0 || (_rest$step3 = rest.step) === null || _rest$step3 === void 0 ? void 0 : _rest$step3.rules, {
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
    }, [tabs, context === null || context === void 0 || (_context$values = context.values) === null || _context$values === void 0 ? void 0 : _context$values.source]);
    var componentClasses = classNames__default["default"]("wprf-tab-menu-wrapper", props === null || props === void 0 ? void 0 : props.className, {
      "wprf-tab-menu-sidebar": props === null || props === void 0 ? void 0 : props.sidebar
    }, context === null || context === void 0 || (_context$values2 = context.values) === null || _context$values2 === void 0 ? void 0 : _context$values2.source);
    var currentTabIndex = tabsFields.findIndex(function (tab) {
      return tab.id === active;
    });
    return React.createElement("div", {
      className: componentClasses
    }, React.createElement("ul", {
      className: "wprf-tab-nav"
    }, tabsFields.map(function (tab, index) {
      var _context$icons, _tab$icon, _tab$icon2;
      return React.createElement("li", {
        className: classNames__default["default"]("wprf-tab-nav-item", _defineProperty(_defineProperty(_defineProperty({}, "".concat(tab.classes), tab.classes), "wprf-active-nav", active === tab.id), "wprf-tab-complete", props !== null && props !== void 0 && props.completionTrack ? index <= currentTabIndex : false)),
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
      }) : isObject(tab.icon) ? context === null || context === void 0 || (_context$icons = context.icons) === null || _context$icons === void 0 || (_context$icons = _context$icons[tab === null || tab === void 0 || (_tab$icon = tab.icon) === null || _tab$icon === void 0 ? void 0 : _tab$icon.type]) === null || _context$icons === void 0 ? void 0 : _context$icons[tab === null || tab === void 0 || (_tab$icon2 = tab.icon) === null || _tab$icon2 === void 0 ? void 0 : _tab$icon2.name] : ""), React.createElement("span", null, tab.label), tab !== null && tab !== void 0 && tab.is_pro ? React.createElement(BadgeComp, {
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

  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  data.registerStore("formbuilder", store);
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
  exports.getDeepData = getDeepData;
  exports.getIn = getIn;
  exports.getSelectedValues = getSelectedValues;
  exports.getStoreData = getStoreData;
  exports.getTime = getTime;
  exports.hitAAJX = hitAAJX;
  exports.insertDefaultRepeaterValues = insertDefaultRepeaterValues;
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
  exports.removeTagsFromString = removeTagsFromString;
  exports.replaceIndex = _replaceIndex;
  exports.setIn = setIn;
  exports.setStoreData = setStoreData;
  exports.sortingFields = sortingFields;
  exports.triggerDefaults = triggerDefaults;
  exports.useBuilder = useBuilder;
  exports.useBuilderContext = useBuilderContext;
  exports.useDefaults = useDefaults;
  exports.useOptions = useOptions;
  exports.validFieldProps = validFieldProps;
  exports.valueExists = valueExists;
  exports.when = when;
  exports.withLabel = withLabel;
  exports.withProps = withProps;
  exports.withState = withState;
  exports.wpFetch = wpFetch;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
