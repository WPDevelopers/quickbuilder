/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
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

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wp_react_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wp-react-form */ "./src/wp-react-form/index.js");





var tabs = [{
  label: "Tab 1",
  key: "tab_1",
  icon: "",
  classes: "wrf-menu",
  fields: [{
    label: "Last Name",
    name: "last_name",
    type: "text",
    classes: "input-field",
    value: "blah blah"
  }, {
    label: "Comments",
    name: "comments",
    type: "textarea",
    classes: "inputdd-field",
    value: "blah blah",
    lala: "lala",
    max: 30
  }, {
    label: "Are you sure?",
    name: "consent",
    type: "checkbox",
    classes: "inputdd-field",
    value: "blah blah",
    lala: "lala",
    max: 30
  }, {
    label: "Gender",
    name: "genderrr",
    type: "radio-basic",
    classes: "input-field",
    options: [{
      label: "Male",
      value: 'male'
    }, {
      label: "Female",
      value: 'female'
    }, {
      label: "Others",
      value: 'others'
    }]
  } // {
  // 	label: "Is Checked?",
  // 	name: "is_checked",
  // 	type: "checkbox",
  // 	css_class: "input-field",
  // 	value: false,
  // },
  // {
  // 	label: "Message",
  // 	name: "message",
  // 	type: "textarea",
  // 	css_class: "input-field",
  // 	value: "blah blah",
  // 	depends_on: "is_checked",
  // 	depended_value: true,
  // },
  // {
  // 	// label: "Notification Type",
  // 	name: "notification_type",
  // 	type: "radio",
  // 	css_class: "notifications-type",
  // 	style: "style-card",
  // 	options : [
  // 		{ label: "Sales Notification", value: "sales-notification" },
  // 		{ label: "Comments", value: "comments" },
  // 		{ label: "Reviews", value: "reviews" },
  // 		{ label: "Download Stats", value: "download-stats" },
  // 		{ label: "Donations", value: "donations" },
  // 	]
  // },
  // {
  // 	label: "User type",
  // 	name: "header_size",
  // 	type: "slider",
  // 	min: 2,
  // 	max: 100
  // },
  // {
  // 	label: "User type",
  // 	name: "header_size",
  // 	type: "colorpicker"
  // },
  // {
  // 	label: "More",
  // 	name: "more_excerpt",
  // 	type: "icon-button",
  // 	icon: "ellipsis"
  // },
  // {
  // 	label: "Switch",
  // 	name: "switch_control",
  // 	type: "toggle",
  // },
  // {
  // 	label: "Birthday",
  // 	name: "birthday",
  // 	type: "date",
  // },
  ]
}, {
  label: "Tab 2",
  key: "tab_2",
  icon: "",
  fields: [// {
    // 	label: "First Name",
    // 	name: "first_name",
    // 	type: "text",
    // 	css_class: "input-field",
    // 	placeholder: "blah blah",
    // },
    // {
    // 	label: "Last Name",
    // 	name: "message",
    // 	type: "textarea",
    // 	css_class: "input-field",
    // 	value: "blah blah",
    // },
  ]
}];
var builder = {
  tabs: tabs,
  submit: {
    label: "Save Changes" // onSubmit: (e) => { // this is for custom submit
    // 	console.log("from builder obj", e);
    // },

  }
};

var App = function App() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wp_react_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    config: builder
  });
};

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(App, null), document.getElementById("root"));

/***/ }),

/***/ "./src/wp-react-form/index.js":
/*!************************************!*\
  !*** ./src/wp-react-form/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/Tab */ "./src/wp-react-form/src/components/Tab/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/store */ "./src/wp-react-form/src/store/index.js");



/**
 * Registering a store.
 */



Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["registerStore"])("wprf-store", _src_store__WEBPACK_IMPORTED_MODULE_4__["default"]);

var WPReactForm = function WPReactForm(_ref) {
  var config = _ref.config;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-react-form wrf-tabs-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_src_components_Tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: config
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WPReactForm);

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/Checkbox/checkbox.scss":
/*!*********************************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/Checkbox/checkbox.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/Checkbox/index.js":
/*!****************************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/Checkbox/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.scss */ "./src/wp-react-form/src/components/Fields/Controls/Checkbox/checkbox.scss");
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_checkbox_scss__WEBPACK_IMPORTED_MODULE_2__);




function Index(_ref) {
  var classes = _ref.classes,
      name = _ref.name,
      label = _ref.label,
      checked = _ref.checked,
      onChange = _ref.onChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wprf-control ".concat(classes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    class: "wprf-input-label",
    htmlFor: name
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "checkbox",
    id: name,
    className: "wprf-input-field wprf-input-checkbox",
    name: name,
    onChange: onChange,
    checked: checked
  }), " ", label));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/RadioBasic/index.js":
/*!******************************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/RadioBasic/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radio_basic_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-basic.scss */ "./src/wp-react-form/src/components/Fields/Controls/RadioBasic/radio-basic.scss");
/* harmony import */ var _radio_basic_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_radio_basic_scss__WEBPACK_IMPORTED_MODULE_2__);




function Index(_ref) {
  var classes = _ref.classes,
      name = _ref.name,
      label = _ref.label,
      options = _ref.options,
      onChange = _ref.onChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wprf-control ".concat(classes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "wprf-input-label"
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wprf-input-radio-set-wrap"
  }, options.map(function (_ref2, index) {
    var label = _ref2.label,
        value = _ref2.value;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wprf-input-radio-set"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      key: index,
      type: "radio",
      id: "wprf-input-radio-".concat(index),
      className: "wprf-input-field wprf-input-radio",
      value: value,
      name: name,
      onChange: onChange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "wprf-input-radio-label",
      htmlFor: "wprf-input-radio-".concat(index)
    }, label));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/RadioBasic/radio-basic.scss":
/*!**************************************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/RadioBasic/radio-basic.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/TextControl/index.js":
/*!*******************************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/TextControl/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _text_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text.scss */ "./src/wp-react-form/src/components/Fields/Controls/TextControl/text.scss");
/* harmony import */ var _text_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_text_scss__WEBPACK_IMPORTED_MODULE_2__);




function Index(_ref) {
  var classes = _ref.classes,
      name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wprf-control ".concat(classes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    class: "wprf-input-label",
    htmlFor: name
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    id: name,
    className: "wprf-input-field wprf-input-text-field",
    name: name,
    onChange: onChange,
    value: value
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/TextControl/text.scss":
/*!********************************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/TextControl/text.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/TextareaControl/index.js":
/*!***********************************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/TextareaControl/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _textarea_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textarea.scss */ "./src/wp-react-form/src/components/Fields/Controls/TextareaControl/textarea.scss");
/* harmony import */ var _textarea_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_textarea_scss__WEBPACK_IMPORTED_MODULE_4__);






function TextareaControl(_ref) {
  var classes = _ref.classes,
      name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["classes", "name", "label", "value", "onChange"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "wprf-control ".concat(classes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    class: "wprf-input-label",
    htmlFor: name
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("textarea", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: "text",
    id: name,
    className: "wprf-input-field wprf-textarea-field",
    name: name,
    onChange: onChange
  }, rest), value));
}

/* harmony default export */ __webpack_exports__["default"] = (TextareaControl);

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/TextareaControl/textarea.scss":
/*!****************************************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/TextareaControl/textarea.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/controls.scss":
/*!************************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/controls.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Controls/index.js":
/*!*******************************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Controls/index.js ***!
  \*******************************************************************/
/*! exports provided: TextControl, TextareaControl, Checkbox, RadioBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls.scss */ "./src/wp-react-form/src/components/Fields/Controls/controls.scss");
/* harmony import */ var _controls_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_controls_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextControl */ "./src/wp-react-form/src/components/Fields/Controls/TextControl/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextControl", function() { return _TextControl__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TextareaControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextareaControl */ "./src/wp-react-form/src/components/Fields/Controls/TextareaControl/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaControl", function() { return _TextareaControl__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ "./src/wp-react-form/src/components/Fields/Controls/Checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _RadioBasic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RadioBasic */ "./src/wp-react-form/src/components/Fields/Controls/RadioBasic/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioBasic", function() { return _RadioBasic__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/Field.js":
/*!**********************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/Field.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controls */ "./src/wp-react-form/src/components/Fields/Controls/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Field = function Field(props) {
  // useEffect(() => {
  // 	console.log("Field for", props.name);
  // }, []);
  var handleChange = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value, name) {
    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])("wprf-store").setFormState(_objectSpread(_objectSpread({}, props.formState), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value)));
  }, [props]);

  var controlProps = _objectSpread(_objectSpread({}, props), {}, {
    value: props[props.name],
    onChange: function onChange(inputValue) {
      return handleChange(inputValue, props.name);
    }
  }); // console.log("Field for", props.name, props);


  if (!props.canVisible) {
    return "";
  } // console.log( 'props.type', props.type );


  switch (props.type) {
    case "text":
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Controls__WEBPACK_IMPORTED_MODULE_4__["TextControl"], controlProps);

    case "textarea":
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Controls__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"], controlProps);

    case "checkbox":
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Controls__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], controlProps);

    case "radio-basic":
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Controls__WEBPACK_IMPORTED_MODULE_4__["RadioBasic"], controlProps);

    case "colorpicker":
    case "slider":
    case "button":
    case "toggle":
    case "date":
    default:
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, ownProps) {
  var _ref;

  return _ref = {
    formState: select("wprf-store").getFormState()
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ownProps.name, select("wprf-store").getInputState(ownProps.name)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "canVisible", select("wprf-store").inputCanVisible(ownProps.name)), _ref;
})(Field)));

/***/ }),

/***/ "./src/wp-react-form/src/components/Fields/index.js":
/*!**********************************************************!*\
  !*** ./src/wp-react-form/src/components/Fields/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field */ "./src/wp-react-form/src/components/Fields/Field.js");




var Fields = function Fields(_ref) {
  var fields = _ref.fields;
  console.log("Fields Loops");
  var allFields = fields.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Field__WEBPACK_IMPORTED_MODULE_2__["default"], item);
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, allFields);
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Fields));

/***/ }),

/***/ "./src/wp-react-form/src/components/Submit/index.js":
/*!**********************************************************!*\
  !*** ./src/wp-react-form/src/components/Submit/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);





var Submit = function Submit(_ref) {
  var config = _ref.config,
      formState = _ref.formState;

  /**
   * This is default submit function
   */
  if (!config.hasOwnProperty("onSubmit")) {
    config.onSubmit = function (evt) {
      console.log(formState);
      console.log("from submit button itself", evt);
    };
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick(evt) {
      return config.onSubmit(evt);
    }
  }, config.label);
};

/* harmony default export */ __webpack_exports__["default"] = (Submit);

/***/ }),

/***/ "./src/wp-react-form/src/components/Tab/TabContent.js":
/*!************************************************************!*\
  !*** ./src/wp-react-form/src/components/Tab/TabContent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Fields */ "./src/wp-react-form/src/components/Fields/index.js");
/* harmony import */ var _Submit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Submit */ "./src/wp-react-form/src/components/Submit/index.js");






var TabContent = function TabContent(_ref) {
  var activeTab = _ref.activeTab,
      config = _ref.config;

  if (config.tabs == undefined) {
    return "";
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wrf-tab-content-wrap"
  }, console.log("activeTab tab-content", activeTab), config.tabs.map(function (_ref2) {
    var key = _ref2.key,
        fields = _ref2.fields;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wrf-tab-content ".concat(key).concat(key === activeTab ? " active-tab" : ""),
      key: key
    }, console.log("tab-content", key), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wrf-tab-content-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Fields__WEBPACK_IMPORTED_MODULE_3__["default"], {
      fields: fields
    })));
  }), config.submit && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Submit__WEBPACK_IMPORTED_MODULE_4__["default"], {
    config: config.submit
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(TabContent // withSelect((select) => {
// 	return {
// 		formState: select("wprf-store").getFormState(),
// 	};
// })(TabContent)
));

/***/ }),

/***/ "./src/wp-react-form/src/components/Tab/TabMenu.js":
/*!*********************************************************!*\
  !*** ./src/wp-react-form/src/components/Tab/TabMenu.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var TabMenu = function TabMenu(_ref) {
  var tabs = _ref.tabs,
      activeTab = _ref.activeTab,
      setActiveTab = _ref.setActiveTab;

  if (tabs == undefined) {
    return "";
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "wrf-tab-nav"
  }, tabs.map(function (tab) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      className: "wrf-tab-nav-item".concat(tab.classes !== undefined ? " ".concat(tab.classes) : "").concat(activeTab === tab.key ? " active-tab" : ""),
      "data-key": tab.key,
      key: tab.key,
      onClick: function onClick() {
        return setActiveTab(tab.key);
      }
    }, tab.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TabMenu);

/***/ }),

/***/ "./src/wp-react-form/src/components/Tab/index.js":
/*!*******************************************************!*\
  !*** ./src/wp-react-form/src/components/Tab/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TabMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabMenu */ "./src/wp-react-form/src/components/Tab/TabMenu.js");
/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabContent */ "./src/wp-react-form/src/components/Tab/TabContent.js");
/* harmony import */ var _tab_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab.scss */ "./src/wp-react-form/src/components/Tab/tab.scss");
/* harmony import */ var _tab_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tab_scss__WEBPACK_IMPORTED_MODULE_5__);







var Tabs = function Tabs(_ref) {
  var config = _ref.config;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("tab_1"),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_TabMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tabs: config.tabs,
    activeTab: activeTab,
    setActiveTab: setActiveTab
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_TabContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    config: config,
    activeTab: activeTab
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./src/wp-react-form/src/components/Tab/tab.scss":
/*!*******************************************************!*\
  !*** ./src/wp-react-form/src/components/Tab/tab.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/wp-react-form/src/store/index.js":
/*!**********************************************!*\
  !*** ./src/wp-react-form/src/store/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_STATE = {
  depends_on: {
    message: {
      target: "is_checked",
      value: true
    }
  },
  formState: {
    last_name: "Mukul"
  }
};
var actions = {
  setFormState: function setFormState(formState) {
    return {
      type: "SET_FORM_STATE",
      payload: formState
    };
  }
};
var store = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case "SET_FORM_STATE":
        return _objectSpread(_objectSpread({}, state), {}, {
          formState: action.payload
        });
    }

    return state;
  },
  actions: actions,
  selectors: {
    getFormState: function getFormState(state) {
      return state.formState;
    },
    getInputState: function getInputState(state, name) {
      return state.formState.hasOwnProperty(name) ? state.formState[name] : null;
    },
    inputCanVisible: function inputCanVisible(state, current) {
      if (!state.depends_on.hasOwnProperty(current)) {
        return true;
      }

      return state.depends_on.hasOwnProperty(current) && state.formState.hasOwnProperty(state.depends_on[current].target) && state.depends_on[current].value === state.formState[state.depends_on[current].target];
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map