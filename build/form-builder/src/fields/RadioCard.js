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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var compose_1 = require("@wordpress/compose");
var classnames_1 = __importDefault(require("classnames"));
var components_1 = require("../core/components");
require("../scss/radio-card.scss");
var useOptions_1 = __importDefault(require("../core/hooks/useOptions"));
var RadioCard = function (props) {
    var meta = props.meta, field = props.field, helpers = props.helpers;
    var name = field.name, label = field.label;
    var _a = useOptions_1.default(props, 'options'), options = _a.options, option = _a.option;
    if (!options) {
        throw new Error('#options is a required arguments for RadioCard field.');
    }
    react_1.useEffect(function () {
        helpers.setValue(name, option);
    }, [option]);
    var instanceId = compose_1.useInstanceId(RadioCard);
    var componentClasses = classnames_1.default([
        "wprf-control",
        "wprf-radio-card",
        "wprf-input-radio-set-wrap",
        props === null || props === void 0 ? void 0 : props.className,
    ]);
    return (react_1.default.createElement("div", { className: componentClasses },
        react_1.default.createElement("h4", { className: "wprf-control-label" }, label),
        react_1.default.createElement(components_1.Row, null, options.map(function (_a, index) {
            var label = _a.label, value = _a.value, icon = _a.icon;
            return (react_1.default.createElement(components_1.Column, { column: "4", key: index },
                react_1.default.createElement("div", { className: classnames_1.default("wprf-input-radio-option", {
                        "wprf-option-selected": value == option,
                    }) },
                    react_1.default.createElement(components_1.Label, { className: classnames_1.default({
                            "wprf-label-has-image": icon !== null && icon !== void 0 ? icon : false,
                        }), htmlFor: "wprf-input-radio-" + instanceId + "-" + index, src: icon }, label),
                    react_1.default.createElement(components_1.Field, { field: __assign(__assign({}, field), { value: value, type: 'radio', checked: value === option, id: "wprf-input-radio-" + instanceId + "-" + index }), meta: meta }))));
        }))));
};
exports.default = RadioCard;
//# sourceMappingURL=RadioCard.js.map