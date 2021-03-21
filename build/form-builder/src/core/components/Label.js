"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Image_1 = __importDefault(require("./Image"));
var Label = function (props) {
    var componentClasses = classnames_1.default("wprf-input-label", props === null || props === void 0 ? void 0 : props.className);
    return (react_1.default.createElement("label", { htmlFor: props === null || props === void 0 ? void 0 : props.htmlFor, className: componentClasses },
        !(props === null || props === void 0 ? void 0 : props.src) && (props === null || props === void 0 ? void 0 : props.children),
        (props === null || props === void 0 ? void 0 : props.src) && (react_1.default.createElement(Image_1.default, { className: "wprf-label-image", src: props.src, alt: props === null || props === void 0 ? void 0 : props.label }))));
};
exports.default = Label;
//# sourceMappingURL=Label.js.map