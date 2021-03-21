"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setIn = exports.objectWithoutPropertiesLoose = exports.executeChange = exports.getSelectedValues = exports.sortingFields = exports.getIn = exports.isEmptyObj = exports.withState = exports.isVisible = exports.isObject = exports.isArray = exports.isFunction = exports.isNumber = exports.isString = void 0;
var lodash_es_1 = require("lodash-es");
var when_1 = __importDefault(require("./when"));
var isString = function (args) {
    return args !== null && typeof args === "string";
};
exports.isString = isString;
var isNumber = function (args) {
    return args !== null && typeof args === "number";
};
exports.isNumber = isNumber;
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
//# sourceMappingURL=utils.js.map