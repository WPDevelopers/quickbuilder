"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Column = function (props) {
    var _a;
    var componentClasses = classnames_1.default("wprf-column", props === null || props === void 0 ? void 0 : props.className, (_a = {},
        _a["wprf-column-" + 12 / (props === null || props === void 0 ? void 0 : props.column)] = props === null || props === void 0 ? void 0 : props.column,
        _a));
    return react_1.default.createElement("div", { className: componentClasses }, props === null || props === void 0 ? void 0 : props.children);
};
exports.default = Column;
//# sourceMappingURL=Column.js.map