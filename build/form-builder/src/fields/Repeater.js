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
var react_1 = __importStar(require("react"));
var hooks_1 = require("../core/hooks");
var helpers_1 = require("./helpers");
var utils_1 = require("../core/utils");
var compose_1 = require("@wordpress/compose");
var Repeater = function (props) {
    var _a, _b;
    return react_1.default.createElement(react_1.default.Fragment, null);
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
    var _c = react_1.useState([{}]), localFields = _c[0], setLocalFields = _c[1];
    var _d = react_1.useState(localMemoizedValue), localValue = _d[0], setLocalValue = _d[1];
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
            react_1.default.createElement("button", { className: "wprf-repeater-button", onClick: function () { return setLocalFields(function (prevLocalState) { return (__spreadArray(__spreadArray([], prevLocalState), [{}])); }); } }, (_b = props === null || props === void 0 ? void 0 : props.button) === null || _b === void 0 ? void 0 : _b.label)),
        react_1.default.createElement("div", { className: "wprf-repeater-content" }, localFields.map(function (field, index) {
            return react_1.default.createElement(helpers_1.RepeaterField, { remove: handleRemove, clone: handleClone, isOpen: true, key: index, name: "" + props.name, index: index, handleChange: handleChange, fields: props.fields, parentProps: props });
        }))));
};
exports.default = Repeater;
//# sourceMappingURL=Repeater.js.map