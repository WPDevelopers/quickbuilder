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
var ColorPicker = function (_a) {
    var field = _a.field, meta = _a.meta, helpers = _a.helpers, props = __rest(_a, ["field", "meta", "helpers"]);
    var value = field.value, name = field.name, id = field.id;
    var _b = react_1.useState(false), showPicker = _b[0], setShowPicker = _b[1];
    var closeRef = react_1.useRef(null);
    var handleCloseRef = function (ref) {
        react_1.useEffect(function () {
            var handleClickOutside = function (ev) {
                if (ref.current && !ref.current.contains(ev.target)) {
                    setShowPicker(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return function () {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };
    react_1.useEffect(function () {
        helpers.setValue(name, value || meta.value || meta.default);
    }, [value, meta.value, meta.default]);
    handleCloseRef(closeRef);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "wprf-colorpicker-wrap", ref: closeRef },
            react_1.default.createElement("input", { type: "hidden", value: value, name: name, id: id }),
            react_1.default.createElement("span", { className: "wprf-picker-display", style: { backgroundColor: value, borderColor: value }, onClick: function () { return setShowPicker(!showPicker); } }),
            showPicker && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("button", { className: "wprf-colorpicker-reset", onClick: function (e) {
                        e.preventDefault();
                        setShowPicker(false);
                        meta.default && helpers.setValue(name, meta.default);
                    } }, "Reset"),
                react_1.default.createElement(components_1.ColorPicker, { color: value, onChangeComplete: function (event) { return helpers.setValue(name, event.hex); } }))))));
};
exports.default = ColorPicker;
//# sourceMappingURL=ColorPicker.js.map