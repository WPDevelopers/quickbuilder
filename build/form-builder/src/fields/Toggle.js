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
exports.Toggle = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Field_1 = __importDefault(require("../core/Field"));
var components_1 = require("../core/components");
var Toggle = function (props) {
    var _a;
    var _b, _c;
    var prevStyles = props.styles, field = props.field, meta = props.meta, helpers = props.helpers, options = props.options;
    var label = field.label, value = field.value;
    var styles = __assign({ type: "card", label: {
            position: "right",
        }, column: 4 }, prevStyles);
    var componentClasses = classnames_1.default("wprf-toggle-wrap", "wprf-" + (styles === null || styles === void 0 ? void 0 : styles.type), (_a = {
            "wprf-checked": Boolean(value)
        },
        _a["wprf-label-position-" + ((_b = styles === null || styles === void 0 ? void 0 : styles.label) === null || _b === void 0 ? void 0 : _b.position)] = (_c = styles === null || styles === void 0 ? void 0 : styles.label) === null || _c === void 0 ? void 0 : _c.position,
        _a), props === null || props === void 0 ? void 0 : props.classes);
    if (field.multiple) {
        var _d = react_1.useState({}), localState_1 = _d[0], setLocalState_1 = _d[1];
        var handleChange_1 = function (event) {
            var target = event.target ? event.target : event.currentTarget;
            setLocalState_1(function (prevState) {
                var _a;
                return (__assign(__assign({}, prevState), (_a = {}, _a[target.value] = target.checked, _a)));
            });
        };
        react_1.useEffect(function () {
            helpers.setValue(field.name, localState_1);
        }, [localState_1]);
        react_1.useEffect(function () {
            setLocalState_1(meta.value || meta.default);
        }, []);
        return react_1.default.createElement("div", { className: "wprf-toggle-wrapper wprf-control" },
            react_1.default.createElement(components_1.Row, null, options.map(function (item) {
                return (react_1.default.createElement(components_1.Column, { key: item.value, column: styles.column },
                    react_1.default.createElement("div", { className: componentClasses },
                        react_1.default.createElement(Field_1.default, { meta: meta, helpers: helpers, field: __assign(__assign({}, item), { id: item.value, checked: !!(localState_1 === null || localState_1 === void 0 ? void 0 : localState_1[item.value]), type: 'checkbox', onChange: handleChange_1 }) }),
                        react_1.default.createElement(components_1.Label, { htmlFor: item.value }))));
            })));
    }
    return (react_1.default.createElement("div", { className: componentClasses },
        react_1.default.createElement(Field_1.default, { meta: meta, helpers: helpers, field: __assign(__assign({}, field), { type: 'checkbox' }) }),
        react_1.default.createElement(components_1.Label, { htmlFor: field.id })));
};
exports.Toggle = Toggle;
exports.default = exports.Toggle;
//# sourceMappingURL=Toggle.js.map