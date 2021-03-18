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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/intersect/index.js":
/*!*****************************************!*\
  !*** ./node_modules/intersect/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = intersect;

function many (sets) {
  var o = {};
  var l = sets.length - 1;
  var first = sets[0];
  var last = sets[l];
  
  for(var i in first) o[first[i]] = 0;
  
  for(var i = 1; i <= l; i++) {
    var row = sets[i];
    for(var j in row) {
      var key = row[j];
      if(o[key] === i - 1) o[key] = i;
    }
  }
  
  var a = [];
  for(var i in last) {
    var key = last[i];
    if(o[key] === l) a.push(key);
  }
  
  return a;
}

function intersect (a, b) {
  if (!b) return many(a);

  var res = [];
  for (var i = 0; i < a.length; i++) {
    if (indexOf(b, a[i]) > -1) res.push(a[i]);
  }
  return res;
}

intersect.big = function(a, b) {
  if (!b) return many(a);
  
  var ret = [];
  var temp = {};
  
  for (var i = 0; i < b.length; i++) {
    temp[b[i]] = true;
  }
  for (var i = 0; i < a.length; i++) {
    if (temp[a[i]]) ret.push(a[i]);
  }
  
  return ret;
}

function indexOf(arr, el) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
  return -1;
}


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./src/form-builder/config/default.ts":
/*!********************************************!*\
  !*** ./src/form-builder/config/default.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.storeName = void 0;
var builder = {
    storeName: "formbuilder",
    config: {
        active: 'tab_2',
        sidebar: false,
    },
    tabs: [
        // {
        // 	label: "Tab 1",
        // 	id: "tab_1",
        // 	icon: "",
        // 	fields: [
        // 		{
        // 			type: "text", // Required
        // 			name: "text_control", // Required
        // 			label: "Text Control",
        // 			placeholder: "Text Control Placeholder",
        // 			value: "Test Control Saved Value", // String
        // 			default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
        // 			validation_rules: {
        // 				required: "This Fields is Required", // Message
        // 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
        // 			},
        // 		},
        // 	]
        // },
        {
            label: "Tab 2",
            id: "tab_2",
            icon: "",
            fields: [
                {
                    type: "checkbox",
                    name: "checkbox_control",
                    label: "Text Control",
                    default: true,
                    // placeholder: "Text Control Placeholder",
                    // value: "Test Control Saved Value", // String
                    // default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
                    validation_rules: {
                        required: "This Fields is Required",
                        "min:20": "Your Input is too short. Make it 20Character Bigger.",
                    },
                },
                {
                    type: "text",
                    name: "text_control_3",
                    label: "Text Control",
                    placeholder: "Text Control Placeholder",
                    value: "Test Control Saved Value",
                    default: "Test Control Default Value",
                    validation_rules: {
                        required: "This Fields is Required",
                        "min:20": "Your Input is too short. Make it 20Character Bigger.",
                    },
                    // rules: [ 'is', 'checkbox_control', true ]
                },
                {
                    type: "radio-card",
                    name: "radio_control_3",
                    label: "Text Control",
                    default: 'option_one',
                    options: [
                        {
                            label: "Option One",
                            value: 'option_one'
                        },
                        {
                            label: "Option Two",
                            value: 'option_two'
                        },
                        {
                            label: "Option Two",
                            value: 'option_three',
                            rules: ['is', 'checkbox_control', false]
                        },
                    ],
                    // placeholder: "Text Control Placeholder",
                    // value: "Test Control Saved Value", // String
                    // default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
                    validation_rules: {
                        required: "This Fields is Required",
                        "min:20": "Your Input is too short. Make it 20Character Bigger.",
                    },
                },
                {
                    type: 'date',
                    name: 'date',
                },
                {
                    type: 'repeater',
                    name: 'repeater',
                    label: 'Repeater',
                    button: {
                        label: 'Add New',
                    },
                    fields: [
                        {
                            type: 'text',
                            placeholder: 'Repeater Text',
                            name: 'repeater_text',
                        },
                        {
                            type: 'text',
                            placeholder: 'Repeater Text',
                            name: 'repeater_text_one',
                        },
                    ]
                },
                {
                    type: 'section',
                    label: 'Section Test',
                    name: 'section',
                    fields: [
                        {
                            type: "group",
                            name: "group_control",
                            label: "Group Control",
                            default: {
                                name: 'Mukul',
                                email: 'mukul@ar.com.bd'
                            },
                            fields: [
                                {
                                    type: "text",
                                    name: "name",
                                    label: "Username",
                                    placeholder: "Text Control Placeholder",
                                    value: "Test Control Saved Value",
                                    default: "Test Control Default Value",
                                    validation_rules: {
                                        required: "This Fields is Required",
                                        "min:20": "Your Input is too short. Make it 20Character Bigger.",
                                    },
                                },
                                {
                                    type: "email",
                                    name: "email",
                                    label: "Email",
                                    placeholder: "Text Control Placeholder",
                                    value: "Test Control Saved Value",
                                    default: "Test Control Default Value",
                                    validation_rules: {
                                        required: "This Fields is Required",
                                        "min:20": "Your Input is too short. Make it 20Character Bigger.",
                                    },
                                },
                            ],
                            // placeholder: "Text Control Placeholder",
                            // value: "Test Control Saved Value", // String
                            // default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
                            // validation_rules: {
                            // 	required: "This Fields is Required", // Message
                            // 	"min:20": "Your Input is too short. Make it 20Character Bigger.",
                            // },
                        }
                    ]
                },
                // {
                // 	type: "group", // Required
                // 	name: "group_control", // Required
                // 	label: "Group Control",
                // 	default: {
                // 		name: 'Mukul',
                // 		email: 'mukul@ar.com.bd'
                // 	},
                // 	fields: [
                // 		{
                // 			type: "text", // Required
                // 			name: "name", // Required
                // 			label: "Username",
                // 			placeholder: "Text Control Placeholder",
                // 			value: "Test Control Saved Value", // String
                // 			default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
                // 			validation_rules: {
                // 				required: "This Fields is Required", // Message
                // 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
                // 			},
                // 		},
                // 		{
                // 			type: "email", // Required
                // 			name: "email", // Required
                // 			label: "Email",
                // 			placeholder: "Text Control Placeholder",
                // 			value: "Test Control Saved Value", // String
                // 			default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
                // 			validation_rules: {
                // 				required: "This Fields is Required", // Message
                // 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
                // 			},
                // 		},
                // 	],
                // 	// placeholder: "Text Control Placeholder",
                // 	// value: "Test Control Saved Value", // String
                // 	// default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
                // 	// validation_rules: {
                // 	// 	required: "This Fields is Required", // Message
                // 	// 	"min:20": "Your Input is too short. Make it 20Character Bigger.",
                // 	// },
                // },
            ]
        },
    ]
};
var storeName = builder.storeName;
exports.storeName = storeName;
exports.default = builder;


/***/ }),

/***/ "./src/form-builder/index.tsx":
/*!************************************!*\
  !*** ./src/form-builder/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FormBuilder_1 = __importDefault(__webpack_require__(/*! ./src/FormBuilder */ "./src/form-builder/src/FormBuilder.tsx"));
exports.default = FormBuilder_1.default;


/***/ }),

/***/ "./src/form-builder/src/FormBuilder.tsx":
/*!**********************************************!*\
  !*** ./src/form-builder/src/FormBuilder.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
/**
 * Registering a store.
 */
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var store_1 = __importDefault(__webpack_require__(/*! ./store */ "./src/form-builder/src/store/index.ts"));
data_1.registerStore("formbuilder", store_1.default);
var Tab_1 = __importDefault(__webpack_require__(/*! ./tabs/Tab */ "./src/form-builder/src/tabs/Tab.tsx"));
var FormBuilder = function (props) {
    var _a;
    console.log("FormBuilder props", props);
    var componentClasses = classnames_1.default("wp-react-form wprf-tabs-wrapper", props === null || props === void 0 ? void 0 : props.className, {
        "wprf-tab-menu-as-sidebar": (_a = props.config) === null || _a === void 0 ? void 0 : _a.sidebar,
    });
    return (react_1.default.createElement("div", { className: componentClasses },
        react_1.default.createElement(Tab_1.default, __assign({}, props))));
};
exports.default = FormBuilder;


/***/ }),

/***/ "./src/form-builder/src/core/BuilderField.tsx":
/*!****************************************************!*\
  !*** ./src/form-builder/src/core/BuilderField.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var fields_1 = __webpack_require__(/*! ../fields */ "./src/form-builder/src/fields/index.ts");
var hooks_1 = __webpack_require__(/*! ./hooks */ "./src/form-builder/src/core/hooks/index.ts");
var Field_1 = __importDefault(__webpack_require__(/*! ./Field */ "./src/form-builder/src/core/Field.tsx"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/form-builder/src/core/utils.ts");
var BuilderField = function (props) {
    var _a;
    if (!props.type || props.type.length === 0) {
        throw new Error('Field must have a #type. see documentation.');
    }
    var builderContext = hooks_1.useBuilderContext();
    var field = utils_1.objectWithoutPropertiesLoose(props, ['validation_rules', 'default', 'rules', 'meta']);
    var validation_rules = props.validation_rules, defolt = props.default, rules = props.rules;
    var meta = __assign(__assign(__assign({}, builderContext.getFieldMeta(field.name, props)), props.meta), { validation_rules: validation_rules, default: defolt, rules: rules });
    var helpers = builderContext.getFieldHelpers(props);
    var inputFieldsAttributes = __assign(__assign({}, field), { meta: meta, helpers: helpers });
    // if (props.name === 'repeater_text_one') {
    //     console.log(props, field, meta)
    // }
    // if (props.name == 'date') {
    //     console.log("BuilderField", inputFieldsAttributes);
    // }
    if (!meta.visible) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    switch (props.type) {
        case "text":
        case "checkbox":
        case "radio":
        case "select":
        case "email":
        case "range":
        case "number":
            // case "date":
            return react_1.default.createElement(Field_1.default, __assign({}, inputFieldsAttributes));
        case "group":
            var groupAttr = __assign(__assign({}, inputFieldsAttributes), { meta: __assign(__assign({}, inputFieldsAttributes.meta), { withState: false, parent: __assign({ type: props.type, name: props.name, default: props.default }, (_a = inputFieldsAttributes === null || inputFieldsAttributes === void 0 ? void 0 : inputFieldsAttributes.meta) === null || _a === void 0 ? void 0 : _a.parent) }) });
            return react_1.default.createElement(fields_1.Group, __assign({}, groupAttr));
        case "radio-card":
            return react_1.default.createElement(fields_1.Radio, __assign({}, inputFieldsAttributes));
        case "section":
            return react_1.default.createElement(fields_1.Section, __assign({}, inputFieldsAttributes));
        case "date":
            return react_1.default.createElement(fields_1.Date, __assign({}, inputFieldsAttributes));
        case "repeater":
            var repeaterAttr = __assign(__assign({}, inputFieldsAttributes), { meta: __assign(__assign({}, inputFieldsAttributes.meta), { withState: false, parent: {
                        type: props.type,
                        name: props.name,
                        default: props.default
                    } }) });
            return react_1.default.createElement(fields_1.Repeater, __assign({}, repeaterAttr));
        // return <Test {...inputFieldsAttributes} />;
        default:
            return react_1.default.createElement(react_1.default.Fragment, null);
    }
};
exports.default = BuilderField;


/***/ }),

/***/ "./src/form-builder/src/core/BuilderReducers.ts":
/*!******************************************************!*\
  !*** ./src/form-builder/src/core/BuilderReducers.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderReducer = void 0;
var functions_1 = __webpack_require__(/*! ./functions */ "./src/form-builder/src/core/functions.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/form-builder/src/core/utils.ts");
var builderReducer = function (state, action) {
    var _a;
    switch (action.type) {
        case 'SET_VALUES':
            return functions_1._extends({}, state, {
                values: __assign(__assign({}, state.values), action.payload)
            });
        case 'SET_TOUCHED':
            return functions_1._extends({}, state, {
                touched: action.payload
            });
        case 'SET_ERRORS':
            // if (isEqual(state.errors, action.payload)) {
            //     return state;
            // }
            return functions_1._extends({}, state, {
                errors: action.payload
            });
        case 'SET_STATUS':
            return functions_1._extends({}, state, {
                status: action.payload
            });
        case 'SET_ISSUBMITTING':
            return functions_1._extends({}, state, {
                isSubmitting: action.payload
            });
        case 'SET_ISVALIDATING':
            return functions_1._extends({}, state, {
                isValidating: action.payload
            });
        case 'SET_FIELD_VALUE':
            return functions_1._extends({}, state, {
                values: __assign(__assign({}, state.values), (_a = {}, _a[action.payload.field] = action.payload.value, _a))
            });
        case 'SET_FIELD_TOUCHED':
            // return { ...state, touched: { ...state.touched, [action.payload.field]: action.payload.value }}
            return functions_1._extends({}, state, {
                touched: utils_1.setIn(state.touched, action.payload.field, action.payload.value)
            });
        case 'SET_FIELD_ERROR':
        // return _extends({}, state, {
        //     errors: setIn(state.errors, action.payload.field, action.payload.value)
        // });
        case 'RESET_FORM':
            return functions_1._extends({}, state, action.payload);
        case 'SET_FORMIK_STATE':
            return action.payload(state);
        case 'SUBMIT_ATTEMPT':
            return functions_1._extends({}, state, {
                // touched: setNestedObjectValues(state.values, true),
                isSubmitting: true,
                submitCount: state.submitCount + 1
            });
        case 'SUBMIT_FAILURE':
            return functions_1._extends({}, state, {
                isSubmitting: false
            });
        case 'SUBMIT_SUCCESS':
            return functions_1._extends({}, state, {
                isSubmitting: false
            });
        default:
            return state;
    }
};
exports.builderReducer = builderReducer;


/***/ }),

/***/ "./src/form-builder/src/core/Field.tsx":
/*!*********************************************!*\
  !*** ./src/form-builder/src/core/Field.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var hooks_1 = __webpack_require__(/*! ./hooks */ "./src/form-builder/src/core/hooks/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/form-builder/src/core/utils.ts");
var Field = function (props) {
    var _a, _b, _c, _d, _e;
    var name = props.name, children = props.children, is = props.as, component = props.component;
    var builderContext = hooks_1.useBuilderContext();
    var withState = !!((_b = (_a = props === null || props === void 0 ? void 0 : props.meta) === null || _a === void 0 ? void 0 : _a.withState) !== null && _b !== void 0 ? _b : true);
    var meta = builderContext.getFieldMeta(name, props);
    var field = builderContext.getFieldProps(__assign({ name: name }, props));
    if (!withState) {
        var parent_1 = (_c = props === null || props === void 0 ? void 0 : props.meta) === null || _c === void 0 ? void 0 : _c.parent.name;
        delete field.onChange;
        delete field.onBlur;
        meta = builderContext.getFieldMeta(parent_1, props);
        if (meta.parent) {
            if (meta.parent.type === 'group') {
                field.value = meta.value && meta.value[field.name] || '';
            }
            if (meta.parent.type === 'repeater') {
                field.value = meta.value && ((_e = (_d = meta.value) === null || _d === void 0 ? void 0 : _d[field.index]) === null || _e === void 0 ? void 0 : _e[field.name]) || '';
            }
        }
        field.onChange = props.onChange;
        field.onBlur = props.onBlur;
    }
    var legacyField = {
        field: field,
        form: builderContext
    };
    react_1.useEffect(function () {
        if (!meta.value && withState) {
            builderContext.setFieldValue(field.name, meta.default);
        }
    }, []);
    if (utils_1.isFunction(children)) {
        return children(__assign(__assign({}, legacyField), { meta: meta }));
    }
    if (component) {
        if (typeof component === 'string') {
            return react_1.default.createElement(component, __assign({ ref: props.innerRef }, field), children);
        }
        return react_1.default.createElement(component, __assign({}, field), children);
    }
    var asElement = is || 'input';
    if (typeof asElement === 'string') {
        return react_1.default.createElement(asElement, __assign({ ref: props.innerRef }, field), children);
    }
    return react_1.default.createElement(asElement, __assign({}, field), children);
};
exports.default = Field;


/***/ }),

/***/ "./src/form-builder/src/core/InnerContent.tsx":
/*!****************************************************!*\
  !*** ./src/form-builder/src/core/InnerContent.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/form-builder/src/core/utils.ts");
var BuilderField_1 = __importDefault(__webpack_require__(/*! ./BuilderField */ "./src/form-builder/src/core/BuilderField.tsx"));
var InnerContent = function (_a) {
    var fields = _a.fields;
    // Fields Sorting
    var newFields = utils_1.sortingFields(fields);
    var allFields = newFields.map(function (item) {
        return react_1.default.createElement(BuilderField_1.default, __assign({ key: item.name }, item));
    });
    return react_1.default.createElement(react_1.default.Fragment, null, allFields);
};
exports.default = InnerContent;


/***/ }),

/***/ "./src/form-builder/src/core/components/Column.tsx":
/*!*********************************************************!*\
  !*** ./src/form-builder/src/core/components/Column.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
var Column = function (props) {
    var _a;
    var componentClasses = classnames_1.default("wprf-column", props === null || props === void 0 ? void 0 : props.className, (_a = {},
        _a["wprf-column-" + 12 / (props === null || props === void 0 ? void 0 : props.column)] = props === null || props === void 0 ? void 0 : props.column,
        _a));
    return react_1.default.createElement("div", { className: componentClasses }, props === null || props === void 0 ? void 0 : props.children);
};
exports.default = Column;


/***/ }),

/***/ "./src/form-builder/src/core/components/Image.tsx":
/*!********************************************************!*\
  !*** ./src/form-builder/src/core/components/Image.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
var Image = function (props) {
    if (!(props === null || props === void 0 ? void 0 : props.src)) {
        return react_1.default.createElement("p", null, "No Source( src ) Defined");
    }
    var componentClasses = classnames_1.default(["wprf-input-image", props === null || props === void 0 ? void 0 : props.className]);
    return (react_1.default.createElement("img", { className: componentClasses, src: props === null || props === void 0 ? void 0 : props.src, alt: props === null || props === void 0 ? void 0 : props.alt }));
};
exports.default = Image;


/***/ }),

/***/ "./src/form-builder/src/core/components/Label.tsx":
/*!********************************************************!*\
  !*** ./src/form-builder/src/core/components/Label.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
var Image_1 = __importDefault(__webpack_require__(/*! ./Image */ "./src/form-builder/src/core/components/Image.tsx"));
var Label = function (props) {
    var componentClasses = classnames_1.default("wprf-input-label", props === null || props === void 0 ? void 0 : props.className);
    return (react_1.default.createElement("label", { htmlFor: props === null || props === void 0 ? void 0 : props.htmlFor, className: componentClasses },
        !(props === null || props === void 0 ? void 0 : props.src) && (props === null || props === void 0 ? void 0 : props.children),
        (props === null || props === void 0 ? void 0 : props.src) && (react_1.default.createElement(Image_1.default, { className: "wprf-label-image", src: props.src, alt: props === null || props === void 0 ? void 0 : props.label }))));
};
exports.default = Label;


/***/ }),

/***/ "./src/form-builder/src/core/components/Row.tsx":
/*!******************************************************!*\
  !*** ./src/form-builder/src/core/components/Row.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
var Row = function (props) {
    var componentClasses = classnames_1.default("wprf-row clearfix wprf-flex", props === null || props === void 0 ? void 0 : props.className);
    return react_1.default.createElement("div", { className: componentClasses }, props === null || props === void 0 ? void 0 : props.children);
};
exports.default = Row;


/***/ }),

/***/ "./src/form-builder/src/core/components/index.ts":
/*!*******************************************************!*\
  !*** ./src/form-builder/src/core/components/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.Label = exports.Field = exports.Column = exports.Row = void 0;
var Row_1 = __webpack_require__(/*! ./Row */ "./src/form-builder/src/core/components/Row.tsx");
Object.defineProperty(exports, "Row", { enumerable: true, get: function () { return __importDefault(Row_1).default; } });
var Column_1 = __webpack_require__(/*! ./Column */ "./src/form-builder/src/core/components/Column.tsx");
Object.defineProperty(exports, "Column", { enumerable: true, get: function () { return __importDefault(Column_1).default; } });
var Field_1 = __webpack_require__(/*! ..//Field */ "./src/form-builder/src/core/Field.tsx");
Object.defineProperty(exports, "Field", { enumerable: true, get: function () { return __importDefault(Field_1).default; } });
var Label_1 = __webpack_require__(/*! ./Label */ "./src/form-builder/src/core/components/Label.tsx");
Object.defineProperty(exports, "Label", { enumerable: true, get: function () { return __importDefault(Label_1).default; } });
var Image_1 = __webpack_require__(/*! ./Image */ "./src/form-builder/src/core/components/Image.tsx");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return __importDefault(Image_1).default; } });


/***/ }),

/***/ "./src/form-builder/src/core/functions.ts":
/*!************************************************!*\
  !*** ./src/form-builder/src/core/functions.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._extends = exports.processAjaxData = exports.wpFetch = exports.setStoreData = exports.getStoreData = exports.triggerDefaults = exports.isExists = exports.ObjectFilter = exports.SweetAlert = void 0;
var api_fetch_1 = __importDefault(__webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch"));
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/form-builder/src/core/utils.ts");
// import store from "../store";
var SweetAlert = function (args) {
    if (args === void 0) { args = {}; }
    console.log('Alert', args);
    // return SweatAlert.fire({
    // 	target: args?.target ?? "#root .wp-react-form",
    // 	type: args?.type ?? "success",
    // 	html: args?.html,
    // 	title: args?.title ?? "Title Goes Here: title",
    // 	text: args?.text ?? "Test Goes Here: text",
    // 	icon: args?.icon ?? "success",
    // 	timer: args?.timer ?? null,
    // 	...args,
    // });
};
exports.SweetAlert = SweetAlert;
var ObjectFilter = function (thisObj, func, returnArr) {
    if (returnArr === void 0) { returnArr = false; }
    if (!thisObj) {
        return false;
    }
    var newObj = {};
    var newArr = Object.keys(thisObj).filter(function (item) { return func(item); });
    if (returnArr) {
        return newArr;
    }
    else {
        newArr.map(function (item) {
            newObj[item] = thisObj[item];
        });
    }
    return newObj;
};
exports.ObjectFilter = ObjectFilter;
var isExists = function (args, value) {
    var typeOfargs = typeof args;
    switch (true) {
        case typeOfargs === "object" && utils_1.isArray(args):
            return args.includes(value);
        case typeOfargs === "object" && !utils_1.isArray(args):
            return (args === null || args === void 0 ? void 0 : args[value]) !== undefined;
        default:
            return args === value;
    }
};
exports.isExists = isExists;
var triggerDefaults = function (defaults, checkType, value) {
    var _a;
    if (value === void 0) { value = null; }
    if (!utils_1.isEmptyObj(defaults) && typeof defaults === "object") {
        for (var obj in defaults) {
            if (obj === value) {
                var at = defaults[obj].indexOf("@"), colon = defaults[obj].indexOf(":");
                if (at === 0 && colon > 0) {
                    var eligibleKey = defaults[obj].substr(1, colon - 1);
                    var eligibleDataToSet = defaults[obj].substr(colon + 1);
                    var eligibleDefaultData = exports.getStoreData().getSavedFieldValue(eligibleKey, checkType);
                    if (eligibleKey != "" && eligibleDataToSet != "") {
                        exports.setStoreData().setFieldValue({
                            name: eligibleKey,
                            value: (_a = {},
                                _a[eligibleKey] = eligibleDefaultData
                                    ? eligibleDefaultData
                                    : eligibleDataToSet,
                                _a),
                        });
                    }
                }
            }
        }
    }
};
exports.triggerDefaults = triggerDefaults;
/**
 * API Fetch for WP
 * @param {object} args
 */
var getStoreData = function () { return data_1.select("formbuilder"); };
exports.getStoreData = getStoreData;
var setStoreData = function () { return data_1.dispatch("formbuilder"); };
exports.setStoreData = setStoreData;
var wpFetch = function (params) {
    var args = __assign(__assign({}, params), { method: "POST" });
    return api_fetch_1.default(args);
};
exports.wpFetch = wpFetch;
var processAjaxData = function (data) {
    var newData = {};
    Object.keys(data).map(function (item) {
        if (data[item].indexOf("@") === 0) {
            var eligibleKey = data[item].substr(1);
            if (eligibleKey != "") {
                var eligibleData = exports.getStoreData().getFieldValue(eligibleKey);
                if (eligibleData) {
                    newData[item] = eligibleData;
                }
                else {
                    newData[item] = "undefined";
                }
            }
        }
        else {
            newData[item] = data[item];
        }
    });
    return newData;
};
exports.processAjaxData = processAjaxData;
function _extends() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
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
exports._extends = _extends;


/***/ }),

/***/ "./src/form-builder/src/core/hooks/index.ts":
/*!**************************************************!*\
  !*** ./src/form-builder/src/core/hooks/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderConsumer = exports.BuilderProvider = exports.useBuilderContext = void 0;
var useBuilderContext_1 = __webpack_require__(/*! ./useBuilderContext */ "./src/form-builder/src/core/hooks/useBuilderContext.ts");
Object.defineProperty(exports, "useBuilderContext", { enumerable: true, get: function () { return __importDefault(useBuilderContext_1).default; } });
Object.defineProperty(exports, "BuilderProvider", { enumerable: true, get: function () { return useBuilderContext_1.BuilderProvider; } });
Object.defineProperty(exports, "BuilderConsumer", { enumerable: true, get: function () { return useBuilderContext_1.BuilderConsumer; } });


/***/ }),

/***/ "./src/form-builder/src/core/hooks/useBuilder.tsx":
/*!********************************************************!*\
  !*** ./src/form-builder/src/core/hooks/useBuilder.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var BuilderReducers_1 = __webpack_require__(/*! ../BuilderReducers */ "./src/form-builder/src/core/BuilderReducers.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/form-builder/src/core/utils.ts");
var when_1 = __importDefault(__webpack_require__(/*! ../when */ "./src/form-builder/src/core/when.ts"));
var useBuilder = function (props) {
    // Set is Mounted or NOT
    var isMounted = react_1.useRef(null);
    react_1.useEffect(function () {
        isMounted.current = true;
        return function () { isMounted.current = false; };
    }, []);
    var _a = react_1.useReducer(BuilderReducers_1.builderReducer, {
        values: props.initialValues || {},
        errors: props.initialErrors || {},
        touched: props.initialTouched || {},
    }), state = _a[0], dispatch = _a[1];
    var setValues = useEventCallback(function (values, shouldValidate) {
        var resolvedValues = typeof values === 'function' ? values(state.values) : values;
        dispatch({
            type: 'SET_VALUES',
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
        // var willValidate = shouldValidate === undefined ? true : shouldValidate;
        // return willValidate ? value : Promise.resolve();
    });
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
    var executeBlur = react_1.default.useCallback(function (event, path) {
        if (path === void 0) { path = false; }
        if (event.persist) {
            event.persist();
        }
        var _e$target = event.target, name = _e$target.name, id = _e$target.id, outerHTML = _e$target.outerHTML;
        var field = path ? path : name ? name : id;
        setFieldTouched(field, true);
    }, [setFieldTouched]);
    var handleBlur = useEventCallback(function (eventOrString) {
        if (typeof eventOrString === 'string') {
            return function (event) {
                return executeBlur(event, eventOrString);
            };
        }
        else {
            executeBlur(eventOrString);
        }
    });
    var executeChange = react_1.default.useCallback(function (eventOrTextValue, maybePath) {
        var _a = utils_1.executeChange(eventOrTextValue, maybePath), field = _a.field, value = _a.val;
        if (field) {
            setFieldValue(field, value);
        }
    }, [setFieldValue, state.values]);
    var handleChange = useEventCallback(function (eventOrString) {
        if (typeof eventOrString === 'string') {
            return function (event) {
                return executeChange(event, eventOrString);
            };
        }
        else {
            executeChange(eventOrString);
        }
    });
    var getFieldProps = react_1.default.useCallback(function (args) {
        var isAnObject = utils_1.isObject(args);
        var name = isAnObject ? args.name : args;
        var valueState = utils_1.getIn(state.values, name);
        if (isAnObject) {
            delete args.meta;
        }
        var field = __assign(__assign({}, args), { type: args.type, name: name, value: valueState || '', onChange: handleChange, onBlur: handleBlur });
        if (args === null || args === void 0 ? void 0 : args.id) {
            field.id = args.id;
        }
        if (isAnObject) {
            var type = args.type, valueProp = args.value, is = args.as, multiple = args.multiple;
            if (type === 'checkbox') {
                if (valueProp === undefined) {
                    field.checked = !!valueState;
                }
                else {
                    field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
                    field.value = valueProp;
                }
            }
            else if (type === 'radio') {
                field.checked = valueState === valueProp;
                field.value = valueProp;
            }
            else if (is === 'select' && multiple) {
                field.value = field.value || [];
                field.multiple = true;
            }
        }
        return field;
    }, [handleBlur, handleChange, state.values]);
    var getFieldMeta = react_1.default.useCallback(function (name, props) {
        return __assign(__assign({}, props.meta), { value: utils_1.getIn(state.values, name), error: utils_1.getIn(state.errors, name), touched: !!utils_1.getIn(state.touched, name), visible: utils_1.isVisible(state.values, props), initialValue: '', initialTouched: "", initialError: "" });
    }, [state.errors, state.touched, state.values]);
    var eligibleOptions = react_1.default.useCallback(function (options) {
        if (options.length > 0) {
            var newOptions = [];
            newOptions = options.filter(function (item) {
                if (item === null || item === void 0 ? void 0 : item.rules) {
                    return when_1.default(item.rules, state.values);
                }
                else {
                    return item;
                }
            });
            return newOptions;
        }
        return options;
    }, [state.errors, state.touched, state.values]);
    var eligibleOption = react_1.default.useCallback(function (options, value, multiple) {
        var _a;
        if (multiple === void 0) { multiple = false; }
        if (options.length) {
            var newOptions = [];
            if (multiple) {
                newOptions = options.filter(function (option) {
                    return value.includes(option.value);
                });
                return newOptions;
            }
            else {
                newOptions = options.filter(function (option) { return option.value === value; });
                return (_a = newOptions === null || newOptions === void 0 ? void 0 : newOptions[0]) !== null && _a !== void 0 ? _a : '';
            }
        }
        return options;
    }, [state.errors, state.touched, state.values]);
    var getFieldHelpers = react_1.default.useCallback(function (props) {
        return {
            setValue: function (name, value) { return setFieldValue(name, value); }
        };
    }, [state.errors, state.touched, state.values]);
    var context = {
        values: state.values,
        errors: {},
        touched: {},
        isSubmitting: false,
        setValues: setValues,
        setFieldValue: setFieldValue,
        handleBlur: handleBlur,
        handleChange: handleChange,
        getFieldProps: getFieldProps,
        getFieldMeta: getFieldMeta,
        getFieldHelpers: getFieldHelpers,
        eligibleOptions: eligibleOptions,
        eligibleOption: eligibleOption,
    };
    return context;
};
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react_1.default.useLayoutEffect : react_1.default.useEffect;
var useEventCallback = function (fn) {
    var ref = react_1.default.useRef(fn);
    useIsomorphicLayoutEffect(function () {
        ref.current = fn;
    });
    return react_1.default.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
    }, []);
};
exports.default = useBuilder;


/***/ }),

/***/ "./src/form-builder/src/core/hooks/useBuilderContext.ts":
/*!**************************************************************!*\
  !*** ./src/form-builder/src/core/hooks/useBuilderContext.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderConsumer = exports.BuilderProvider = exports.BuilderContext = void 0;
var React = __importStar(__webpack_require__(/*! react */ "react"));
var tiny_warning_1 = __importDefault(__webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js"));
exports.BuilderContext = React.createContext(undefined);
exports.BuilderContext.displayName =  false ? undefined : 'BuilderContext';
exports.BuilderProvider = exports.BuilderContext.Provider;
exports.BuilderConsumer = exports.BuilderContext.Consumer;
function useBuilderContext() {
    var builderContext = React.useContext(exports.BuilderContext);
    tiny_warning_1.default(!!builderContext, "BuilderContext context is undefined, please verify you are calling useBuilderContext() as child of a <FormBuilder> component.");
    return builderContext;
}
exports.default = useBuilderContext;


/***/ }),

/***/ "./src/form-builder/src/core/hooks/useOptions.ts":
/*!*******************************************************!*\
  !*** ./src/form-builder/src/core/hooks/useOptions.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var index_1 = __webpack_require__(/*! ./index */ "./src/form-builder/src/core/hooks/index.ts");
var useOptions = function (props, propertyName) {
    if (propertyName === void 0) { propertyName = 'fields'; }
    if (!(props === null || props === void 0 ? void 0 : props[propertyName])) {
        throw new Error('#options param need to set in order to use useOptions hook.');
    }
    var builderContext = index_1.useBuilderContext();
    var options = builderContext.eligibleOptions(props[propertyName]);
    var opt = builderContext.eligibleOption(options, props.meta.value, props === null || props === void 0 ? void 0 : props.multiple);
    var option;
    if (!(props === null || props === void 0 ? void 0 : props.multiple)) {
        option = opt.value || props.meta.default;
    }
    else {
        option = opt.map(function (o) { return o.value; }) || props.meta.default;
    }
    react_1.useEffect(function () {
        if (option) {
            builderContext.setFieldValue(props.name, option);
        }
    }, [option]);
    return { options: options, option: option };
};
exports.default = useOptions;


/***/ }),

/***/ "./src/form-builder/src/core/utils.ts":
/*!********************************************!*\
  !*** ./src/form-builder/src/core/utils.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setIn = exports.objectWithoutPropertiesLoose = exports.executeChange = exports.getSelectedValues = exports.sortingFields = exports.getIn = exports.isEmptyObj = exports.withState = exports.isVisible = exports.isObject = exports.isArray = exports.isFunction = exports.isString = void 0;
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "lodash-es");
var when_1 = __importDefault(__webpack_require__(/*! ./when */ "./src/form-builder/src/core/when.ts"));
var isString = function (args) {
    return args !== null && typeof args === "string";
};
exports.isString = isString;
var isInteger = function isInteger(obj) {
    return String(Math.floor(Number(obj))) === obj;
};
var isFunction = function (functionName) {
    return functionName !== null && typeof functionName === "function";
};
exports.isFunction = isFunction;
var isArray = function (args) {
    return args !== null && typeof args === "object" && Array.isArray(args);
};
exports.isArray = isArray;
var isObject = function (obj) {
    return obj !== null && typeof obj === 'object' && !exports.isArray(obj);
};
exports.isObject = isObject;
var isVisible = function (values, props) {
    if (!props.rules || props.name == undefined) {
        return true;
    }
    var whenVar = when_1.default(props.rules, values);
    return Boolean(whenVar);
};
exports.isVisible = isVisible;
var withState = function (type) {
    return Boolean(["group", "section"].includes(type));
};
exports.withState = withState;
var isEmptyObj = function (obj) {
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
};
exports.isEmptyObj = isEmptyObj;
var getIn = function (obj, key, def, p) {
    if (p === void 0) {
        p = 0;
    }
    var path = lodash_es_1.toPath(key);
    while (obj && p < path.length) {
        obj = obj[path[p++]];
    }
    return obj === undefined ? def : obj;
};
exports.getIn = getIn;
var sortingFields = function (fields) { return [].concat(fields).sort(function (a, b) {
    if (a.priority == undefined || b.priority == undefined)
        return 0;
    return a.priority > b.priority ? 1 : -1;
}); };
exports.sortingFields = sortingFields;
var getSelectedValues = function (options) {
    return Array.from(options).filter(function (el) {
        return el.selected;
    }).map(function (el) {
        return el.value;
    });
};
exports.getSelectedValues = getSelectedValues;
var executeChange = function (eventOrTextValue, maybePath) {
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed;
    if (!exports.isString(eventOrTextValue)) {
        if (eventOrTextValue.persist) {
            eventOrTextValue.persist();
        }
        var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
        var type = target.type, name_1 = target.name, id = target.id, value = target.value, checked = target.checked, outerHTML = target.outerHTML, options = target.options, multiple = target.multiple;
        field = maybePath ? maybePath : name_1 ? name_1 : id;
        val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
            ? checked : !!multiple ? exports.getSelectedValues(options) : value;
    }
    return { field: field, val: val };
};
exports.executeChange = executeChange;
var objectWithoutPropertiesLoose = function (source, excluded) {
    if (source == null)
        return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
            continue;
        target[key] = source[key];
    }
    return target;
};
exports.objectWithoutPropertiesLoose = objectWithoutPropertiesLoose;
var setIn = function (obj, path, value) {
    var res = lodash_es_1.clone(obj); // this keeps inheritance when obj is a class
    var resVal = res;
    var i = 0;
    var pathArray = lodash_es_1.toPath(path);
    for (; i < pathArray.length - 1; i++) {
        var currentPath = pathArray[i];
        var currentObj = exports.getIn(obj, pathArray.slice(0, i + 1));
        if (currentObj && (exports.isObject(currentObj) || Array.isArray(currentObj))) {
            resVal = resVal[currentPath] = lodash_es_1.clone(currentObj);
        }
        else {
            var nextPath = pathArray[i + 1];
            resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
        }
    } // Return original object if new value is the same as current
    if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
        return obj;
    }
    if (value === undefined) {
        delete resVal[pathArray[i]];
    }
    else {
        resVal[pathArray[i]] = value;
    } // If the path array has a single element, the loop did not run.
    // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.
    if (i === 0 && value === undefined) {
        delete res[pathArray[i]];
    }
    return res;
};
exports.setIn = setIn;


/***/ }),

/***/ "./src/form-builder/src/core/when.ts":
/*!*******************************************!*\
  !*** ./src/form-builder/src/core/when.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./src/form-builder/src/core/utils.ts");
var intersect_1 = __importDefault(__webpack_require__(/*! intersect */ "./node_modules/intersect/index.js"));
var _typeof = function (obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        return typeof obj;
    }
    else {
        return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
    }
};
var get = function (obj, path) {
    var restParams = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restParams[_i - 2] = arguments[_i];
    }
    var defaultValue = restParams.length > 2 && restParams[2] !== undefined ? restParams[2] : undefined;
    return String.prototype.split
        .call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce(function (a, c) {
        return a && Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue;
    }, obj);
};
var rules = {
    is: function (key, value, data) {
        return get(data, key) === value;
    },
    "!is": function (key, value, data) {
        return !rules.is(key, value, data);
    },
    includes: function (key, checkAgainst, selectedData) {
        var _a;
        if (!utils_1.isEmptyObj(selectedData)) {
            var newData = get(selectedData, key);
            if (_typeof(newData) != "function") {
                if (utils_1.isArray(checkAgainst) && utils_1.isArray(newData)) {
                    return (_a = intersect_1.default(newData, checkAgainst)) === null || _a === void 0 ? void 0 : _a.length;
                }
                else if (utils_1.isArray(checkAgainst) &&
                    _typeof(newData) == "string") {
                    return checkAgainst.includes(newData);
                }
                else if (utils_1.isArray(newData) &&
                    _typeof(checkAgainst) == "string") {
                    return newData.includes(checkAgainst);
                }
            }
        }
        return false;
    },
    "!includes": function (key, value, data) {
        return !rules.includes(key, value, data);
    },
    isOfType: function (key, value, data) {
        return _typeof(get(data, key)) === value;
    },
    allOf: function (key, values, data) {
        if (!Array.isArray(values)) {
            throw Error('"allOf" condition requires an array as #3 argument');
        }
        var dataValues = get(data, key);
        return values.every(function (currentValue) {
            return dataValues.includes(currentValue);
        });
    },
    anyOf: function (key, values, data) {
        if (!Array.isArray(values)) {
            throw Error('"anyOf" condition requires an array as #3 argument');
        }
        var dataValue = get(data, key);
        return values.includes(dataValue);
    },
    gt: function (key, value, data) {
        return get(data, key) > value;
    },
    gte: function (key, value, data) {
        return get(data, key) >= value;
    },
    lt: function (key, value, data) {
        return get(data, key) < value;
    },
    lte: function (key, value, data) {
        return get(data, key) <= value;
    },
};
var logicalRules = {
    and: function (data) {
        return !data.includes(false);
    },
    or: function (data) {
        return data.includes(true);
    },
    not: function (data) {
        if (data.length !== 1) {
            throw Error('"not" can have only one comparison rule, multiple rules given');
        }
        return !data[0];
    },
};
var isValidCondition = function (conditions) {
    if (Array.isArray(conditions) &&
        Array.isArray(conditions[1]) &&
        conditions[0] &&
        logicalRules[conditions[0].toLowerCase()]) {
        return true;
    }
    return false;
};
var processRule = function (_ref, data) {
    var condition = _ref[0], key = _ref[1], value = _ref[2];
    if (typeof condition !== "string" || rules[condition] === undefined) {
        throw Error("Invalid comparison rule " + condition + ".");
    }
    return rules[condition](key, value, data);
};
var processCondition = function (condition, data) {
    return logicalRules[condition.toLowerCase()](data);
};
var validate = function (conditions, data) {
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
var when = function (conditions, data) {
    if (typeof conditions === "function") {
        return Promise.resolve(conditions(data));
    }
    return validate(conditions, data);
};
exports.default = when;


/***/ }),

/***/ "./src/form-builder/src/fields/Date.tsx":
/*!**********************************************!*\
  !*** ./src/form-builder/src/fields/Date.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var date_1 = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
var DateControl = function (props) {
    var settings = date_1.__experimentalGetSettings();
    var is12HourTime = /a(?!\\)/i.test(settings.formats.datetime
        .toLowerCase()
        .replace(/\\\\/g, "")
        .split("")
        .reverse()
        .join(""));
    react_1.useEffect(function () {
        if (props.meta.value == undefined) {
            props.helpers.setValue(props.name, date_1.date('c', props.meta.value));
        }
    }, []);
    return (react_1.default.createElement(components_1.Dropdown, { className: "wprf-control-datetime", renderToggle: function (_a) {
            var isOpen = _a.isOpen, onToggle = _a.onToggle;
            return (react_1.default.createElement(components_1.Button, { isTertiary: true, onClick: onToggle }, date_1.date(settings.formats.datetime, props.meta.value, settings.timezone.string)));
        }, renderContent: function () {
            return (react_1.default.createElement(components_1.DateTimePicker, { currentDate: date_1.date(settings.formats.datetime, props.meta.value) || date_1.date(settings.formats.datetime, Date.now()), onChange: function (date) { return props.helpers.setValue(props.name, date !== null && date !== void 0 ? date : (props.meta.default || new Date())); }, is12Hour: is12HourTime }));
        } }));
};
exports.default = DateControl;


/***/ }),

/***/ "./src/form-builder/src/fields/Group.tsx":
/*!***********************************************!*\
  !*** ./src/form-builder/src/fields/Group.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var hooks_1 = __webpack_require__(/*! ../core/hooks */ "./src/form-builder/src/core/hooks/index.ts");
var lodash_1 = __webpack_require__(/*! lodash */ "lodash-es");
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/form-builder/src/core/utils.ts");
var BuilderField_1 = __importDefault(__webpack_require__(/*! ../core/BuilderField */ "./src/form-builder/src/core/BuilderField.tsx"));
var Group = function (props) {
    if (!props.fields || !utils_1.isArray(props.fields) || props.fields.length === 0) {
        throw new Error('You should give a #fields arguments to a group field.');
    }
    var builderContext = hooks_1.useBuilderContext();
    var localMemoizedState = react_1.useMemo(function () {
        var _a;
        var localS = (_a = builderContext.values) === null || _a === void 0 ? void 0 : _a[props.name];
        if (localS && props.meta.default) {
            localS = __assign(__assign({}, props.meta.default), localS);
        }
        return localS;
    }, []);
    var _a = react_1.useState(((props === null || props === void 0 ? void 0 : props.handleChange) ? {} : (localMemoizedState || props.meta.default)) || {}), localState = _a[0], setLocalState = _a[1];
    var handleChange = react_1.useCallback(function (event) {
        if (event.persist) {
            event.persist();
        }
        var _a = utils_1.executeChange(event), field = _a.field, value = _a.val;
        setLocalState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[field] = value, _a)));
        });
    }, []);
    react_1.useEffect(function () {
        var _a;
        if (!lodash_1.isEqual(localState, builderContext.values[props.name]) && !(props === null || props === void 0 ? void 0 : props.handleChange)) {
            builderContext.setFieldValue(props.name, localState);
        }
        if (props === null || props === void 0 ? void 0 : props.handleChange) {
            var newLocal = ((_a = builderContext.values[props.name]) === null || _a === void 0 ? void 0 : _a[props.index]) ? __assign(__assign({}, builderContext.values[props.name][props.index]), localState) : localState;
            props.handleChange(newLocal);
        }
    }, [localState]);
    var newFields = utils_1.sortingFields(props.fields);
    var allFields = newFields.map(function (item, index) {
        return react_1.default.createElement(BuilderField_1.default, __assign({ key: item.name, index: props.index }, item, { meta: props.meta, onChange: handleChange }));
    });
    return (react_1.default.createElement("div", { className: "wprf-group-control" },
        props.label,
        allFields));
};
exports.default = Group;


/***/ }),

/***/ "./src/form-builder/src/fields/RadioCard.tsx":
/*!***************************************************!*\
  !*** ./src/form-builder/src/fields/RadioCard.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
var components_1 = __webpack_require__(/*! ../core/components */ "./src/form-builder/src/core/components/index.ts");
__webpack_require__(/*! ../scss/radio-card.scss */ "./src/form-builder/src/scss/radio-card.scss");
var useOptions_1 = __importDefault(__webpack_require__(/*! ../core/hooks/useOptions */ "./src/form-builder/src/core/hooks/useOptions.ts"));
var RadioCard = function (props) {
    var name = props.name, label = props.label, meta = props.meta;
    var _a = useOptions_1.default(props, 'options'), options = _a.options, option = _a.option;
    if (!options) {
        throw new Error('#options is a required arguments for RadioCard field.');
    }
    // useEffect(() => {
    //     console.log(props, option);
    // }, [option])
    var instanceId = compose_1.useInstanceId(RadioCard);
    var componentClasses = classnames_1.default([
        "wprf-control",
        "wprf-radio-card",
        "wprf-input-radio-set-wrap",
        props === null || props === void 0 ? void 0 : props.className,
    ]);
    return (react_1.default.createElement("div", { className: componentClasses },
        react_1.default.createElement("h4", { className: "wprf-control-label" }, label),
        react_1.default.createElement(components_1.Row, null, options.map(function (_a, index) {
            var label = _a.label, value = _a.value, icon = _a.icon;
            return (react_1.default.createElement(components_1.Column, { column: "4", key: index },
                react_1.default.createElement("div", { className: classnames_1.default("wprf-input-radio-option", {
                        "wprf-option-selected": value == option,
                    }) },
                    react_1.default.createElement(components_1.Label, { className: classnames_1.default({
                            "wprf-label-has-image": icon !== null && icon !== void 0 ? icon : false,
                        }), htmlFor: "wprf-input-radio-" + instanceId + "-" + index, src: icon },
                        react_1.default.createElement(components_1.Field, { type: "radio", checked: value === option, id: "wprf-input-radio-" + instanceId + "-" + index, value: value, name: name, meta: meta }),
                        label))));
        }))));
};
exports.default = RadioCard;


/***/ }),

/***/ "./src/form-builder/src/fields/Repeater.tsx":
/*!**************************************************!*\
  !*** ./src/form-builder/src/fields/Repeater.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var hooks_1 = __webpack_require__(/*! ../core/hooks */ "./src/form-builder/src/core/hooks/index.ts");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./src/form-builder/src/fields/helpers/index.ts");
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/form-builder/src/core/utils.ts");
var compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
var Repeater = function (props) {
    var _a;
    var builderContext = hooks_1.useBuilderContext();
    var instanceId = compose_1.useInstanceId(Repeater);
    var localMemoizedValue = react_1.useMemo(function () {
        var _a;
        var localS = (_a = builderContext.values) === null || _a === void 0 ? void 0 : _a[props.name];
        if (localS && props.meta.default) {
            localS = __spreadArray(__spreadArray([], props.meta.default), localS);
        }
        return localS;
    }, [(_a = builderContext.values) === null || _a === void 0 ? void 0 : _a[props.name]]);
    // useEffect(() => {
    //     console.log("localMemoizedValue", localMemoizedValue, builderContext.values?.[props.name])
    // }, [])
    var _b = react_1.useState([{}]), localFields = _b[0], setLocalFields = _b[1];
    var _c = react_1.useState(localMemoizedValue), localValue = _c[0], setLocalValue = _c[1];
    var handleChange = react_1.useCallback(function (value, index) {
        if (!utils_1.isEmptyObj(value)) {
            setLocalValue(function (prevLocalValue) {
                var _a;
                return (__assign(__assign({}, prevLocalValue), (_a = {}, _a[index] = value, _a)));
            });
        }
    }, []);
    var handleRemove = react_1.useCallback(function (index) {
        var newValue = __assign({}, localValue);
        delete newValue[index];
        props.helpers.setValue(props.name, newValue);
        var newFields = __spreadArray([], localFields);
        newFields.splice(index, 1);
        setLocalFields(newFields);
    }, [localFields, localValue]);
    var handleClone = react_1.useCallback(function (index) {
        var indexedCopy = (localValue === null || localValue === void 0 ? void 0 : localValue[index]) || {};
        setLocalFields(function (prevLocalState) { return (__spreadArray(__spreadArray([], prevLocalState), [indexedCopy])); });
        handleChange(indexedCopy, ++index);
    }, [localValue, localFields]);
    react_1.useEffect(function () {
        props.helpers.setValue(props.name, localValue);
    }, [localValue]);
    react_1.useEffect(function () {
        console.log(localFields);
    });
    return (react_1.default.createElement("div", { className: "wprf-repeater-control" },
        react_1.default.createElement("div", { className: "wprf-repeater-label" },
            react_1.default.createElement("h4", null, props.label),
            react_1.default.createElement("button", { className: "wprf-repeater-button", onClick: function () { return setLocalFields(function (prevLocalState) { return (__spreadArray(__spreadArray([], prevLocalState), [{}])); }); } }, props.button.label)),
        react_1.default.createElement("div", { className: "wprf-repeater-content" }, localFields.map(function (field, index) {
            return react_1.default.createElement(helpers_1.RepeaterField, { remove: handleRemove, clone: handleClone, isOpen: true, key: index, name: "" + props.name, index: index, handleChange: handleChange, fields: props.fields, parentProps: props });
        }))));
};
exports.default = Repeater;


/***/ }),

/***/ "./src/form-builder/src/fields/Section.tsx":
/*!*************************************************!*\
  !*** ./src/form-builder/src/fields/Section.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var BuilderField_1 = __importDefault(__webpack_require__(/*! ../core/BuilderField */ "./src/form-builder/src/core/BuilderField.tsx"));
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/form-builder/src/core/utils.ts");
// import "../section.scss";
var Section = function (props) {
    var _a;
    var _b = react_1.useState((_a = props.collapsed) !== null && _a !== void 0 ? _a : false), isCollapse = _b[0], setCollapse = _b[1];
    var newFields = utils_1.sortingFields(props.fields);
    var allFields = newFields.map(function (item, index) {
        return react_1.default.createElement(BuilderField_1.default, __assign({ key: item.name }, item, { meta: props.meta }));
    });
    return (react_1.default.createElement("div", { className: "wprf-control-section " + (props.collapsible ? (isCollapse ? "wprf-section-collapsed" : "") : "") },
        react_1.default.createElement("div", { className: "wprf-section-title" },
            react_1.default.createElement("h4", null, props.label),
            props.collapsible && (react_1.default.createElement("button", { onClick: function () { return setCollapse(!isCollapse); } }, "Icon"))),
        react_1.default.createElement("div", { className: "wprf-section-fields" }, allFields)));
};
exports.default = Section;


/***/ }),

/***/ "./src/form-builder/src/fields/Test.tsx":
/*!**********************************************!*\
  !*** ./src/form-builder/src/fields/Test.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
var MyPopover = compose_1.withState({
    isVisible: false,
})(function (_a) {
    var isVisible = _a.isVisible, setState = _a.setState;
    var toggleVisible = function () {
        setState(function (state) { return ({ isVisible: !state.isVisible }); });
    };
    return (react_1.default.createElement(components_1.Button, { isSecondary: true, onClick: toggleVisible },
        "Toggle Popover!",
        isVisible && (react_1.default.createElement(components_1.Popover, null, "Popover is toggled!"))));
});
exports.default = MyPopover;


/***/ }),

/***/ "./src/form-builder/src/fields/helpers/Popover.tsx":
/*!*********************************************************!*\
  !*** ./src/form-builder/src/fields/helpers/Popover.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var Popover = function (props) {
    if (!props.children) {
        throw new Error('Popover must have children to render.');
    }
    if (!props.renderToggle) {
        throw new Error('Popover must have renderToggle as props .');
    }
    var ref = react_1.useRef(null);
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    // const onToggle = useCallback(
    //     () => {
    //         console.log('ddd', !isOpen)
    //     },
    //     [],
    // )
    // const onToggle = (event) => {
    //     setIsOpen(!isOpen);
    // }
    var toggle = function (event) {
        setIsOpen(!isOpen);
    };
    var args = { isOpen: isOpen, onToggle: toggle };
    return (react_1.default.createElement("div", { className: "wprf-control-popover" },
        props.renderToggle(args),
        isOpen &&
            react_1.default.createElement("div", { className: "wprf-control-popover-content", ref: ref }, props.children)));
};
exports.default = Popover;


/***/ }),

/***/ "./src/form-builder/src/fields/helpers/RepeaterField.tsx":
/*!***************************************************************!*\
  !*** ./src/form-builder/src/fields/helpers/RepeaterField.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var BuilderField_1 = __importDefault(__webpack_require__(/*! ../../core/BuilderField */ "./src/form-builder/src/core/BuilderField.tsx"));
var RepeaterField = function (props) {
    var _a = react_1.useState(props.isOpen), isCollapse = _a[0], setIsCollapse = _a[1];
    // onClick={() => setIsCollapse(!isCollapse)}
    return (react_1.default.createElement("div", { className: "wprf-repeater-field" },
        react_1.default.createElement("div", { className: "wprf-repeater-field-title" },
            react_1.default.createElement("h4", null,
                "#ID: ",
                props.index,
                " - ",
                props.parentProps.label),
            react_1.default.createElement("div", { className: "wprf-repeater-field-controls" },
                react_1.default.createElement(components_1.Icon, { onClick: function () { return props.clone(props.index); }, icon: "admin-page" }),
                react_1.default.createElement(components_1.Icon, { onClick: function () { return props.remove(props.index); }, icon: "trash" }))),
        isCollapse &&
            react_1.default.createElement("div", { className: "wprf-repeater-inner-field" },
                react_1.default.createElement(BuilderField_1.default, { meta: {
                        parent: {
                            type: 'repeater'
                        }
                    }, index: props.index, name: "" + props.name, handleChange: function (value) { return props.handleChange(value || value, props.index); }, type: "group", fields: props.fields }))));
};
exports.default = RepeaterField;


/***/ }),

/***/ "./src/form-builder/src/fields/helpers/index.ts":
/*!******************************************************!*\
  !*** ./src/form-builder/src/fields/helpers/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepeaterField = exports.Popover = void 0;
var Popover_1 = __webpack_require__(/*! ./Popover */ "./src/form-builder/src/fields/helpers/Popover.tsx");
Object.defineProperty(exports, "Popover", { enumerable: true, get: function () { return __importDefault(Popover_1).default; } });
var RepeaterField_1 = __webpack_require__(/*! ./RepeaterField */ "./src/form-builder/src/fields/helpers/RepeaterField.tsx");
Object.defineProperty(exports, "RepeaterField", { enumerable: true, get: function () { return __importDefault(RepeaterField_1).default; } });


/***/ }),

/***/ "./src/form-builder/src/fields/index.ts":
/*!**********************************************!*\
  !*** ./src/form-builder/src/fields/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.Repeater = exports.Section = exports.Radio = exports.Group = exports.Date = void 0;
var Date_1 = __webpack_require__(/*! ./Date */ "./src/form-builder/src/fields/Date.tsx");
Object.defineProperty(exports, "Date", { enumerable: true, get: function () { return __importDefault(Date_1).default; } });
var Group_1 = __webpack_require__(/*! ./Group */ "./src/form-builder/src/fields/Group.tsx");
Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return __importDefault(Group_1).default; } });
var RadioCard_1 = __webpack_require__(/*! ./RadioCard */ "./src/form-builder/src/fields/RadioCard.tsx");
Object.defineProperty(exports, "Radio", { enumerable: true, get: function () { return __importDefault(RadioCard_1).default; } });
var Section_1 = __webpack_require__(/*! ./Section */ "./src/form-builder/src/fields/Section.tsx");
Object.defineProperty(exports, "Section", { enumerable: true, get: function () { return __importDefault(Section_1).default; } });
var Repeater_1 = __webpack_require__(/*! ./Repeater */ "./src/form-builder/src/fields/Repeater.tsx");
Object.defineProperty(exports, "Repeater", { enumerable: true, get: function () { return __importDefault(Repeater_1).default; } });
var Test_1 = __webpack_require__(/*! ./Test */ "./src/form-builder/src/fields/Test.tsx");
Object.defineProperty(exports, "Test", { enumerable: true, get: function () { return __importDefault(Test_1).default; } });


/***/ }),

/***/ "./src/form-builder/src/scss/index.scss":
/*!**********************************************!*\
  !*** ./src/form-builder/src/scss/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/form-builder/src/scss/radio-card.scss":
/*!***************************************************!*\
  !*** ./src/form-builder/src/scss/radio-card.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/form-builder/src/store/index.ts":
/*!*********************************************!*\
  !*** ./src/form-builder/src/store/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var when_1 = __importDefault(__webpack_require__(/*! ../core/when */ "./src/form-builder/src/core/when.ts"));
var DEFAULT_STATE = {
    savedValues: {
        type: "conversions",
        source: "edd",
    },
    values: {
    // source: "woocommerce",
    },
    touched: {},
    errors: {},
};
var actions = {
    setSavedValues: function (payload) {
        return {
            type: "SET_SAVED_VALUES",
            payload: payload,
        };
    },
    setFieldValue: function (_a) {
        var name = _a.name, value = _a.value;
        return {
            type: "FIELD_VALUE",
            name: name,
            payload: value,
        };
    },
    removeFieldValue: function (payload) {
        return {
            type: "REMOVE_FIELD_VALUE",
            payload: payload,
        };
    },
    resetFieldValue: function (payload) {
        return {
            type: "RESET_FIELD_VALUE",
            payload: payload,
        };
    },
    setFieldTouched: function (payload) {
        return {
            type: "FIELD_TOUCHED",
            payload: payload,
        };
    },
    setError: function (payload) {
        return {
            type: "FIELD_ERROR",
            payload: payload,
        };
    },
    removeError: function (payload) {
        return {
            type: "REMOVE_FIELD_ERROR",
            payload: payload,
        };
    },
};
var store = {
    reducer: function (state, action) {
        var _a, _b, _c;
        if (state === void 0) { state = DEFAULT_STATE; }
        switch (action.type) {
            case "SET_SAVED_VALUES": {
                var updatedState_1 = __assign({}, state);
                updatedState_1 = __assign(__assign({}, updatedState_1), { values: action.payload, savedValues: action.payload });
                return updatedState_1;
            }
            case "FIELD_VALUE": {
                var updatedState_2 = __assign({}, state);
                var payload = action.payload, name_1 = action.name;
                updatedState_2 = __assign(__assign({}, updatedState_2), { values: __assign(__assign({}, updatedState_2 === null || updatedState_2 === void 0 ? void 0 : updatedState_2.values), payload) });
                return updatedState_2;
            }
            case "REMOVE_FIELD_VALUE": {
                var updatedState_3 = __assign({}, state);
                var payload = action.payload;
                if ((_a = updatedState_3.values) === null || _a === void 0 ? void 0 : _a[payload]) {
                    delete updatedState_3.values[payload];
                }
                return updatedState_3;
            }
            case "RESET_FIELD_VALUE": {
                var updatedState_4 = __assign({}, state);
                if ((_b = updatedState_4.values) === null || _b === void 0 ? void 0 : _b[action.payload]) {
                    delete updatedState_4.values[action.payload];
                    if ((_c = updatedState_4.savedValues) === null || _c === void 0 ? void 0 : _c[action.payload]) {
                        updatedState_4.values[action.payload] =
                            updatedState_4.savedValues[action.payload];
                    }
                }
                return updatedState_4;
            }
            case "FIELD_ERROR":
                return __assign(__assign({}, state), { errors: __assign(__assign({}, state.errors), action.payload) });
            case "REMOVE_FIELD_ERROR":
                var updatedState = __assign({}, state);
                delete updatedState.errors[action.payload];
                return updatedState;
            case "FIELD_TOUCHED":
                return __assign(__assign({}, state), { touched: __assign(__assign({}, state.touched), action.payload) });
        }
        return state;
    },
    actions: actions,
    selectors: {
        getValues: function (state) {
            return state.values;
        },
        getFieldValue: function (state, name) {
            var _a;
            return (_a = state.values) === null || _a === void 0 ? void 0 : _a[name];
        },
        getSavedFieldValue: function (state, name, comparisonKey) {
            var _a, _b, _c, _d;
            if (comparisonKey === null) {
                return (_a = state.savedValues) === null || _a === void 0 ? void 0 : _a[name];
            }
            return ((_b = state.savedValues) === null || _b === void 0 ? void 0 : _b[comparisonKey]) ===
                ((_c = state.values) === null || _c === void 0 ? void 0 : _c[comparisonKey])
                ? (_d = state.savedValues) === null || _d === void 0 ? void 0 : _d[name]
                : false;
        },
        isTouched: function (state, current) {
            var _a;
            return (_a = state.touched) === null || _a === void 0 ? void 0 : _a[current];
        },
        getError: function (state, current) {
            var _a;
            return (_a = state.errors) === null || _a === void 0 ? void 0 : _a[current];
        },
        isVisible: function (state, props) {
            if (!props.rules || props.name == undefined) {
                return true;
            }
            var whenVar = when_1.default(props.rules, state.values);
            return Boolean(whenVar);
        },
    },
};
exports.default = store;


/***/ }),

/***/ "./src/form-builder/src/tabs/Content.tsx":
/*!***********************************************!*\
  !*** ./src/form-builder/src/tabs/Content.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/form-builder/src/core/utils.ts");
var InnerContent_1 = __importDefault(__webpack_require__(/*! ../core/InnerContent */ "./src/form-builder/src/core/InnerContent.tsx"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var Content = function (_a) {
    var tabs = _a.tabs, active = _a.active;
    if (tabs === undefined) {
        throw new Error("There are no #tabs args defined in props.");
    }
    // if (!tabs?.id) {
    // 	throw Error("Each Tab Must Have an Unique ID. i.e: id: tab_one");
    // }
    // if (!tabs?.fields) {
    // 	throw Error("Each tab must have some fields.");
    // }
    // sorting tabs
    var newTabs = utils_1.sortingFields(tabs);
    if (!utils_1.isArray(newTabs)) {
        throw new Error('Not an array.');
    }
    return (react_1.default.createElement("div", { className: "wprf-tab-content-wrapper" }, newTabs.map(function (tab) {
        var componentClasses = classnames_1.default("wprf-tab-content", "wprf-tab-" + (tab === null || tab === void 0 ? void 0 : tab.id), {
            "wprf-active": active === tab.id,
        });
        return (react_1.default.createElement("div", { id: tab === null || tab === void 0 ? void 0 : tab.id, className: componentClasses, key: tab === null || tab === void 0 ? void 0 : tab.id },
            react_1.default.createElement(InnerContent_1.default, { fields: tab === null || tab === void 0 ? void 0 : tab.fields }),
            react_1.default.createElement(components_1.Popover.Slot, null)));
    })));
};
exports.default = Content;


/***/ }),

/***/ "./src/form-builder/src/tabs/Menu.tsx":
/*!********************************************!*\
  !*** ./src/form-builder/src/tabs/Menu.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
var Menu = function (props) {
    if (props.tabs === undefined) {
        throw new Error("There are no tabs defined!");
    }
    var active = props.active, setActive = props.setActive, tabs = props.tabs, config = props.config;
    var componentClasses = classnames_1.default("wprf-tab-menu-wrapper", props === null || props === void 0 ? void 0 : props.className, { "wprf-tab-menu-sidebar": config === null || config === void 0 ? void 0 : config.sidebar });
    return (React.createElement("div", { className: componentClasses },
        React.createElement("ul", { className: "wprf-tab-nav" }, tabs.map(function (tab) {
            var _a;
            return (React.createElement("li", { className: classnames_1.default("wprf-tab-nav-item", (_a = {},
                    _a["" + tab.classes] = tab.classes,
                    _a["wprf-active-nav"] = active === tab.id,
                    _a)), "data-key": tab.id, key: tab.id, onClick: function () { return setActive(tab.id); } }, tab.label));
        }))));
};
exports.default = Menu;


/***/ }),

/***/ "./src/form-builder/src/tabs/Tab.tsx":
/*!*******************************************!*\
  !*** ./src/form-builder/src/tabs/Tab.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var Menu_1 = __importDefault(__webpack_require__(/*! ./Menu */ "./src/form-builder/src/tabs/Menu.tsx"));
var Content_1 = __importDefault(__webpack_require__(/*! ./Content */ "./src/form-builder/src/tabs/Content.tsx"));
var useBuilderContext_1 = __webpack_require__(/*! ../core/hooks/useBuilderContext */ "./src/form-builder/src/core/hooks/useBuilderContext.ts");
__webpack_require__(/*! ../scss/index.scss */ "./src/form-builder/src/scss/index.scss");
var useBuilder_1 = __importDefault(__webpack_require__(/*! ../core/hooks/useBuilder */ "./src/form-builder/src/core/hooks/useBuilder.tsx"));
var Tab = function (props) {
    var builderContextState = useBuilder_1.default(props);
    var _a = react_1.useState(props.config.active), activeTab = _a[0], setActiveTab = _a[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(useBuilderContext_1.BuilderProvider, { value: builderContextState },
            react_1.default.createElement(Menu_1.default, { active: activeTab, setActive: function (tabId) { return setActiveTab(tabId); }, tabs: props.tabs, config: props.config }),
            react_1.default.createElement(Content_1.default, { tabs: props.tabs, active: activeTab }))));
};
exports.default = Tab;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
var form_builder_1 = __importDefault(__webpack_require__(/*! ./form-builder */ "./src/form-builder/index.tsx"));
var default_1 = __importDefault(__webpack_require__(/*! ./form-builder/config/default */ "./src/form-builder/config/default.ts"));
(function () {
    var App = function () {
        return react_1.default.createElement(form_builder_1.default, __assign({}, default_1.default));
    };
    react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
})();


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

/***/ }),

/***/ "lodash-es":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

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