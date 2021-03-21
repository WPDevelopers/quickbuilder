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
var api_fetch_1 = __importDefault(require("@wordpress/api-fetch"));
var data_1 = require("@wordpress/data");
var utils_1 = require("./utils");
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
//# sourceMappingURL=functions.js.map