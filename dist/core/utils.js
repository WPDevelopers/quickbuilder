import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _typeof from '@babel/runtime/helpers/typeof';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { toPath, clone } from 'lodash-es';
import apiFetch from '@wordpress/api-fetch';
import when from './when.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var wpFetch = function wpFetch(params) {
  var args = _objectSpread(_objectSpread({}, params), {}, {
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
  return args !== null && _typeof(args) === "object" && Array.isArray(args);
};
var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object' && !isArray(obj);
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
  if (type !== 'select' && type !== 'select-async' && type !== 'radio-card' && type !== 'checkbox' && type !== 'toggle' && defaultProps.multiple) {
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
            fileName: (response === null || response === void 0 || (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.filename) || 'export.json',
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

export { executeChange, getIn, getSelectedValues, hitAAJX, isArray, isEmptyObj, isFunction, isNumber, isObject, isString, isVisible, merge, objectWithoutPropertiesLoose, setIn, sortingFields, validFieldProps, valueExists, withState, wpFetch };
