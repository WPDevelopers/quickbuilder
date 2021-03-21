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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("./hooks");
var utils_1 = require("./utils");
var Field = function (props) {
    var _a, _b, _c;
    var children = props.children, is = props.as, component = props.component, originalField = props.field, originalMeta = props.meta, helpers = props.helpers;
    var name = originalField.name;
    var builderContext = hooks_1.useBuilderContext();
    var withState = !!((_a = originalMeta === null || originalMeta === void 0 ? void 0 : originalMeta.withState) !== null && _a !== void 0 ? _a : true);
    var meta = builderContext.getFieldMeta(name, props);
    var field = __assign({}, originalField);
    if (!withState) {
        var parent_1 = meta === null || meta === void 0 ? void 0 : meta.parent.name;
        meta = builderContext.getFieldMeta(parent_1, props);
        if (meta.parent) {
            if (meta.parent.type === 'group') {
                field.value = meta.value && meta.value[field.name] || '';
            }
            if (meta.parent.type === 'repeater') {
                field.value = meta.value && ((_c = (_b = meta.value) === null || _b === void 0 ? void 0 : _b[field.index]) === null || _c === void 0 ? void 0 : _c[field.name]) || '';
            }
        }
    }
    var legacyField = {
        field: field,
        form: builderContext
    };
    react_1.useEffect(function () {
        if (!meta.value && withState) {
            builderContext.setFieldValue(field.name, meta.default);
        }
    }, []);
    if (utils_1.isFunction(children)) {
        return children(__assign(__assign({}, legacyField), { meta: meta }));
    }
    if (component) {
        if (typeof component === 'string') {
            return react_1.default.createElement(component, __assign({ ref: props.innerRef }, field), children);
        }
        return react_1.default.createElement(component, __assign({}, field), children);
    }
    var asElement = is || 'input';
    if (typeof asElement === 'string') {
        return react_1.default.createElement(asElement, __assign({ ref: props.innerRef }, field), children);
    }
    return react_1.default.createElement(asElement, __assign({}, field), children);
};
exports.default = react_1.default.memo(Field);
//# sourceMappingURL=Field.js.map