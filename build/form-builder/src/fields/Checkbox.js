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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var Field_1 = __importDefault(require("../core/Field"));
function Checkbox(props) {
    var _a;
    var name = props.name, label = props.label, value = props.value, rest = __rest(props, ["name", "label", "value"]);
    return (react_1.default.createElement(Field_1.default, __assign({ type: "checkbox", id: name, name: name, value: value, size: (_a = rest === null || rest === void 0 ? void 0 : rest.size) !== null && _a !== void 0 ? _a : "large" }, rest)));
}
exports.Checkbox = Checkbox;
exports.default = Checkbox;
// export default withChange(Checkbox);
//# sourceMappingURL=Checkbox.js.map