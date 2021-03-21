"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var BuilderField_1 = __importDefault(require("../core/BuilderField"));
var utils_1 = require("../core/utils");
var Section = function (props) {
    var _a;
    var _b = react_1.useState((_a = props.collapsed) !== null && _a !== void 0 ? _a : false), isCollapse = _b[0], setCollapse = _b[1];
    var newFields = utils_1.sortingFields(props.field.fields);
    var allFields = newFields.map(function (item, index) {
        return react_1.default.createElement(BuilderField_1.default, { key: item.name, field: item });
    });
    return (react_1.default.createElement("div", { className: "wprf-control-section " + (props.collapsible ? (isCollapse ? "wprf-section-collapsed" : "") : "") },
        react_1.default.createElement("div", { className: "wprf-section-title" },
            react_1.default.createElement("h4", null, props.label),
            props.collapsible && (react_1.default.createElement("button", { onClick: function () { return setCollapse(!isCollapse); } }, "Icon"))),
        react_1.default.createElement("div", { className: "wprf-section-fields" }, allFields)));
};
exports.default = Section;
//# sourceMappingURL=Section.js.map