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
var react_1 = __importDefault(require("react"));
var index_1 = require("./index");
var withChange = function (WrappedComponent) {
    var WithChange = function (props) {
        var builderContext = index_1.useBuilderContext();
        var handleChange = function (value, args) {
            if (args === void 0) { args = {}; }
            builderContext.setFieldValue(props.name, value);
        };
        return react_1.default.createElement(WrappedComponent, __assign({}, props, { value: builderContext.values[props.name], onChange: handleChange }));
    };
    return WithChange;
};
exports.default = withChange;
//# sourceMappingURL=withChange.js.map