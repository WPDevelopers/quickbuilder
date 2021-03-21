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
var hooks_1 = require("../core/hooks");
var lodash_1 = require("lodash");
var utils_1 = require("../core/utils");
var BuilderField_1 = __importDefault(require("../core/BuilderField"));
var Group = function (props) {
    var _a = props.field, fieldName = _a.name, fields = _a.fields;
    if (!fields || !utils_1.isArray(fields) || fields.length === 0) {
        throw new Error('You should give a #fields arguments to a group field.');
    }
    var builderContext = hooks_1.useBuilderContext();
    var localMemoizedState = react_1.useMemo(function () {
        var _a;
        var localS = (_a = builderContext.values) === null || _a === void 0 ? void 0 : _a[fieldName];
        if (localS && props.meta.default) {
            localS = __assign(__assign({}, props.meta.default), localS);
        }
        return localS;
    }, []);
    var _b = react_1.useState(((props === null || props === void 0 ? void 0 : props.handleChange) ? {} : (localMemoizedState || props.meta.default)) || {}), localState = _b[0], setLocalState = _b[1];
    var handleChange = react_1.useCallback(function (event) {
        if (event.persist) {
            event.persist();
        }
        var _a = utils_1.executeChange(event), field = _a.field, value = _a.val;
        setLocalState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[field] = value, _a)));
        });
    }, []);
    react_1.useEffect(function () {
        var _a;
        if (!lodash_1.isEqual(localState, builderContext.values[fieldName]) && !(props === null || props === void 0 ? void 0 : props.handleChange)) {
            builderContext.setFieldValue(fieldName, localState);
        }
        if (props === null || props === void 0 ? void 0 : props.handleChange) {
            var newLocal = ((_a = builderContext.values[fieldName]) === null || _a === void 0 ? void 0 : _a[props.index]) ? __assign(__assign({}, builderContext.values[fieldName][props.index]), localState) : localState;
            props.handleChange(newLocal);
        }
    }, [localState]);
    var newFields = utils_1.sortingFields(fields);
    var allFields = newFields.map(function (item, index) {
        return react_1.default.createElement(BuilderField_1.default, { key: item.name, index: props.index, onChange: handleChange, field: __assign({}, item), meta: props.meta, helpers: props.helpers });
    });
    return (react_1.default.createElement("div", { className: "wprf-group-control" },
        props.label,
        allFields));
};
exports.default = Group;
//# sourceMappingURL=Group.js.map