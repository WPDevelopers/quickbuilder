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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("@wordpress/components");
var components_2 = require("../core/components");
var utils_1 = require("../core/utils");
var Slider = function (_a) {
    var field = _a.field, meta = _a.meta, helpers = _a.helpers, props = __rest(_a, ["field", "meta", "helpers"]);
    var name = field.name, id = field.id, label = field.label, units = field.units, value = field.value, min = field.min, max = field.max, unit = field.unit, tooltip = field.tooltip, reset = field.reset;
    var _b = react_1.useState(value || meta.default), isValue = _b[0], setValue = _b[1];
    var _c = react_1.useState(unit || "px"), sunit = _c[0], setSunit = _c[1];
    react_1.useEffect(function () {
        if (isValue) {
            var finalValue = void 0;
            if (utils_1.isNumber(isValue)) {
                finalValue = "" + isValue + sunit;
            }
            else if (utils_1.isString(isValue)) {
                if (!(isValue.indexOf('px') > -1)) {
                    finalValue = "" + isValue + sunit;
                }
                else {
                    finalValue = "" + isValue;
                }
            }
            helpers.setValue(name, finalValue);
        }
    }, [isValue, sunit]);
    return (react_1.default.createElement("div", { className: "wprf-slider-wrap" },
        react_1.default.createElement("div", { className: "wprf-slider-control-head" },
            react_1.default.createElement(components_2.Label, { htmlFor: id || name }, label),
            utils_1.isArray(units) && units.length > 0 && (react_1.default.createElement("div", { className: "wprf-slider-units" }, units.map(function (unit, index) { return (react_1.default.createElement(components_1.Button, { key: index, isSmall: true, isPrimary: true, onClick: function () { return setSunit(unit); }, className: unit == sunit ? "unit-active" : "" }, unit)); })))),
        react_1.default.createElement("div", { className: "wprf-slider-control" },
            react_1.default.createElement(components_1.RangeControl, { allowReset: reset !== null && reset !== void 0 ? reset : true, value: parseInt(isValue), min: min, max: max, 
                // showTooltip={tooltip ?? false}
                onChange: function (value) { return setValue(value); } }))));
};
exports.default = Slider;
//# sourceMappingURL=Slider.js.map