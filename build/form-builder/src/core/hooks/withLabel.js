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
var classnames_1 = __importDefault(require("classnames"));
var withLabel = function (WrappedComponent) {
    var WithLabel = function (props) {
        var componentClasses = classnames_1.default("wprf-label");
        var _a = props.field, label = _a.label, id = _a.id;
        return (react_1.default.createElement("label", { htmlFor: id, className: componentClasses },
            label,
            react_1.default.createElement(WrappedComponent, __assign({}, props))));
    };
    return WithLabel;
};
exports.default = withLabel;
//# sourceMappingURL=withLabel.js.map