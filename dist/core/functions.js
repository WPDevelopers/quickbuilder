import _typeof from '@babel/runtime/helpers/typeof';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import Swal from 'sweetalert2';
import { select, dispatch } from '@wordpress/data';
import { isArray, isEmptyObj } from './utils.js';
import { __ } from '@wordpress/i18n';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// import store from "../store";

var SweetAlert = function SweetAlert() {
  var _args$target, _args$type, _args$title, _args$text, _args$icon, _args$timer;
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Swal.fire(_objectSpread({
    target: (_args$target = args === null || args === void 0 ? void 0 : args.target) !== null && _args$target !== void 0 ? _args$target : "#notificationx",
    type: (_args$type = args === null || args === void 0 ? void 0 : args.type) !== null && _args$type !== void 0 ? _args$type : "success",
    html: args === null || args === void 0 ? void 0 : args.html,
    title: (_args$title = args === null || args === void 0 ? void 0 : args.title) !== null && _args$title !== void 0 ? _args$title : __("Title Goes Here: title", 'notificationx'),
    text: (_args$text = args === null || args === void 0 ? void 0 : args.text) !== null && _args$text !== void 0 ? _args$text : __("Test Goes Here: text", 'notificationx'),
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
  var typeOfargs = _typeof(args);
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
  if (!isEmptyObj(defaults) && _typeof(defaults) === "object") {
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

export { ObjectFilter, SweetAlert, _extends, getStoreData, isExists, processAjaxData, setStoreData, triggerDefaults };
