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
var fields_1 = require("../fields");
var hooks_1 = require("./hooks");
var Field_1 = __importDefault(require("./Field"));
var utils_1 = require("./utils");
var lodash_1 = require("lodash");
var BuilderField = function (props) {
    var _a;
    if (!props.field || props.field.length === 0) {
        throw new Error('Field must have a #field. see documentation.');
    }
    if (!props.field.type || props.field.type.length === 0) {
        throw new Error('Field must have a #type. see documentation.');
    }
    var builderContext = hooks_1.useBuilderContext();
    var onChange = props.onChange, onBlur = props.onBlur;
    var field = utils_1.objectWithoutPropertiesLoose(props.field, ['validation_rules', 'default', 'rules', 'meta', 'options', 'trigger', 'is_pro', 'switch']);
    field = builderContext.getFieldProps(field);
    var _b = props.field, validation_rules = _b.validation_rules, defolt = _b.default, rules = _b.rules, options = _b.options, trigger = _b.trigger;
    if (field.name === 'type') {
        console.log(props);
    }
    if (lodash_1.isFunction(onChange)) {
        field.onChange = props.onChange;
    }
    if (lodash_1.isFunction(onBlur)) {
        field.onBlur = props.onBlur;
    }
    var meta = __assign(__assign(__assign({}, builderContext.getFieldMeta(field.name, props)), props.meta), { validation_rules: validation_rules, default: defolt, rules: rules });
    var helpers = builderContext.getFieldHelpers(props);
    var inputFieldsAttributes = { field: field, meta: meta, helpers: helpers };
    // console.log("inputFieldsAttributes", inputFieldsAttributes)
    if (!meta.visible) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    react_1.useEffect(function () {
        if (lodash_1.isObject(trigger) && !utils_1.isEmptyObj(trigger)) {
            hooks_1.useDefaults(field.name, helpers, meta, trigger);
        }
    }, [meta.value]);
    switch (field.type) {
        case "text":
        case "checkbox":
        case "radio":
        case "email":
        case "range":
        case "number":
            return react_1.default.createElement(Field_1.default, __assign({}, inputFieldsAttributes));
        case "select":
            return react_1.default.createElement(fields_1.Select, __assign({}, inputFieldsAttributes, { options: options }));
        case "slider":
            return react_1.default.createElement(fields_1.Slider, __assign({}, inputFieldsAttributes));
        case "group":
            var groupAttr = __assign(__assign({}, inputFieldsAttributes), { meta: __assign(__assign({}, inputFieldsAttributes.meta), { withState: false, parent: __assign({ type: field.type, name: field.name, default: meta.default }, (_a = inputFieldsAttributes === null || inputFieldsAttributes === void 0 ? void 0 : inputFieldsAttributes.meta) === null || _a === void 0 ? void 0 : _a.parent) }) });
            return react_1.default.createElement(fields_1.Group, __assign({}, groupAttr));
        case "radio-card":
            return react_1.default.createElement(fields_1.Radio, __assign({}, inputFieldsAttributes, { options: options }));
        case "section":
            return react_1.default.createElement(fields_1.Section, __assign({}, inputFieldsAttributes));
        case "date":
            return react_1.default.createElement(fields_1.Date, __assign({}, inputFieldsAttributes));
        case "toggle":
            return react_1.default.createElement(fields_1.Toggle, __assign({}, inputFieldsAttributes, { options: options }));
        case "colorpicker":
            return react_1.default.createElement(fields_1.ColorPicker, __assign({}, inputFieldsAttributes));
        case "repeater":
            var repeaterAttr = __assign(__assign({}, inputFieldsAttributes), { meta: __assign(__assign({}, inputFieldsAttributes.meta), { withState: false, parent: {
                        type: props.type,
                        name: props.name,
                        default: props.default
                    } }) });
            return react_1.default.createElement(fields_1.Repeater, __assign({}, repeaterAttr));
        // return <Test {...inputFieldsAttributes} />;
        default:
            return react_1.default.createElement(react_1.default.Fragment, null);
    }
};
exports.default = BuilderField;
//# sourceMappingURL=BuilderField.js.map