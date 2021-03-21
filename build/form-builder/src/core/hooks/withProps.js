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
var withProps = function (WrappedComponent) {
    var WithProps = function (props) {
        var _a, _b, _c, _d;
        var builderContext = index_1.useBuilderContext();
        var value = (_d = (_c = (_b = (_a = builderContext.values) === null || _a === void 0 ? void 0 : _a[props.field.name]) !== null && _b !== void 0 ? _b : props.field.value) !== null && _c !== void 0 ? _c : props.field.default) !== null && _d !== void 0 ? _d : null;
        return react_1.default.createElement(WrappedComponent, __assign({}, __assign(__assign({}, props), { field: __assign(__assign({}, props.field), { value: value }) })));
    };
    return WithProps;
};
exports.default = withProps;
//# sourceMappingURL=withProps.js.map