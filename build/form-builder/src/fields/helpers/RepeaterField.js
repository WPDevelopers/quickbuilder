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
var components_1 = require("@wordpress/components");
var BuilderField_1 = __importDefault(require("../../core/BuilderField"));
var RepeaterField = function (props) {
    var _a = react_1.useState(props.isOpen), isCollapse = _a[0], setIsCollapse = _a[1];
    // onClick={() => setIsCollapse(!isCollapse)}
    return (react_1.default.createElement("div", { className: "wprf-repeater-field" },
        react_1.default.createElement("div", { className: "wprf-repeater-field-title" },
            react_1.default.createElement("h4", null,
                "#ID: ",
                props.index,
                " - ",
                props.parentProps.label),
            react_1.default.createElement("div", { className: "wprf-repeater-field-controls" },
                react_1.default.createElement(components_1.Icon, { onClick: function () { return props.clone(props.index); }, icon: "admin-page" }),
                react_1.default.createElement(components_1.Icon, { onClick: function () { return props.remove(props.index); }, icon: "trash" }))),
        isCollapse &&
            react_1.default.createElement("div", { className: "wprf-repeater-inner-field" },
                react_1.default.createElement(BuilderField_1.default, { meta: {
                        parent: {
                            type: 'repeater'
                        }
                    }, field: {
                        type: 'group',
                        name: props.name,
                        fields: props.field.fields
                    }, index: props.index, handleChange: function (value) { return props.handleChange(value || value, props.index); } }))));
};
exports.default = RepeaterField;
//# sourceMappingURL=RepeaterField.js.map