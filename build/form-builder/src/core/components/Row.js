"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Row = function (props) {
    var componentClasses = classnames_1.default("wprf-row clearfix wprf-flex", props === null || props === void 0 ? void 0 : props.className);
    return react_1.default.createElement("div", { className: componentClasses }, props === null || props === void 0 ? void 0 : props.children);
};
exports.default = Row;
//# sourceMappingURL=Row.js.map