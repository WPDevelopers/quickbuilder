"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Image = function (props) {
    if (!(props === null || props === void 0 ? void 0 : props.src)) {
        return react_1.default.createElement("p", null, "No Source( src ) Defined");
    }
    var componentClasses = classnames_1.default(["wprf-input-image", props === null || props === void 0 ? void 0 : props.className]);
    return (react_1.default.createElement("img", { className: componentClasses, src: props === null || props === void 0 ? void 0 : props.src, alt: props === null || props === void 0 ? void 0 : props.alt }));
};
exports.default = Image;
//# sourceMappingURL=Image.js.map