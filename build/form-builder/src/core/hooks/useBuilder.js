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
var BuilderReducers_1 = require("../BuilderReducers");
var utils_1 = require("../utils");
var when_1 = __importDefault(require("../when"));
var useBuilder = function (props) {
    // Set is Mounted or NOT
    var isMounted = react_1.useRef(null);
    react_1.useEffect(function () {
        isMounted.current = true;
        return function () { isMounted.current = false; };
    }, []);
    var _a = react_1.useReducer(BuilderReducers_1.builderReducer, {
        savedValues: props.savedValues || {},
        values: props.initialValues || {},
        errors: props.initialErrors || {},
        touched: props.initialTouched || {},
    }), state = _a[0], dispatch = _a[1];
    var setValues = useEventCallback(function (values, shouldValidate) {
        var resolvedValues = typeof values === 'function' ? values(state.values) : values;
        dispatch({
            type: 'SET_VALUES',
            payload: resolvedValues
        });
        var willValidate = shouldValidate === undefined ? false : shouldValidate;
        return willValidate ? resolvedValues : Promise.resolve();
    });
    var setFieldValue = useEventCallback(function (field, value, shouldValidate) {
        dispatch({
            type: 'SET_FIELD_VALUE',
            payload: {
                field: field,
                value: value
            }
        });
        // var willValidate = shouldValidate === undefined ? true : shouldValidate;
        // return willValidate ? value : Promise.resolve();
    });
    var setFieldTouched = useEventCallback(function (field, touched, shouldValidate) {
        if (!touched) {
            touched = true;
        }
        dispatch({
            type: 'SET_FIELD_TOUCHED',
            payload: {
                field: field,
                value: touched
            }
        });
        // var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
        // return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
    });
    var executeBlur = react_1.default.useCallback(function (event, path) {
        if (path === void 0) { path = false; }
        if (event.persist) {
            event.persist();
        }
        var _e$target = event.target, name = _e$target.name, id = _e$target.id, outerHTML = _e$target.outerHTML;
        var field = path ? path : name ? name : id;
        setFieldTouched(field, true);
    }, [setFieldTouched]);
    var handleBlur = useEventCallback(function (eventOrString) {
        if (typeof eventOrString === 'string') {
            return function (event) {
                return executeBlur(event, eventOrString);
            };
        }
        else {
            executeBlur(eventOrString);
        }
    });
    var executeChange = react_1.default.useCallback(function (eventOrTextValue, maybePath) {
        var _a = utils_1.executeChange(eventOrTextValue, maybePath), field = _a.field, value = _a.val;
        if (field) {
            setFieldValue(field, value);
        }
    }, [setFieldValue, state.values]);
    var handleChange = useEventCallback(function (eventOrString) {
        if (typeof eventOrString === 'string') {
            return function (event) {
                return executeChange(event, eventOrString);
            };
        }
        else {
            executeChange(eventOrString);
        }
    });
    var getFieldProps = react_1.default.useCallback(function (args) {
        var isAnObject = utils_1.isObject(args);
        var name = isAnObject ? args.name : args;
        var valueState = utils_1.getIn(state.values, name);
        if (isAnObject) {
            delete args.meta;
            delete args.helpers;
            delete args.options;
        }
        var field = __assign(__assign({}, args), { type: args.type, name: name, value: valueState || '', onChange: handleChange, onBlur: handleBlur, id: name });
        if (args === null || args === void 0 ? void 0 : args.id) {
            field.id = args.id;
        }
        if (isAnObject) {
            var type = args.type, valueProp = args.value, is = args.as, multiple = args.multiple;
            if (type === 'checkbox') {
                if (valueProp === undefined) {
                    field.checked = !!valueState;
                }
                else {
                    field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
                    field.value = valueProp;
                }
            }
            else if (type === 'radio') {
                field.checked = valueState === valueProp;
                field.value = valueProp;
            }
            else if (is === 'select' && multiple) {
                field.value = field.value || [];
                field.multiple = true;
            }
        }
        return field;
    }, [handleBlur, handleChange, state.values]);
    var getFieldMeta = react_1.default.useCallback(function (name, props) {
        return __assign(__assign({}, props.meta), { value: utils_1.getIn(state.values, name), error: utils_1.getIn(state.errors, name), touched: !!utils_1.getIn(state.touched, name), visible: utils_1.isVisible(state.values, props), initialValue: '', initialTouched: "", initialError: "" });
    }, [state.errors, state.touched, state.values]);
    var eligibleOptions = react_1.default.useCallback(function (options) {
        if (options.length > 0) {
            var newOptions = [];
            newOptions = options.filter(function (item) {
                if (item === null || item === void 0 ? void 0 : item.rules) {
                    return when_1.default(item.rules, state.values);
                }
                else {
                    return item;
                }
            });
            return newOptions;
        }
        return options;
    }, [state.errors, state.touched, state.values]);
    var eligibleOption = react_1.default.useCallback(function (options, value, multiple) {
        if (multiple === void 0) { multiple = false; }
        if (options.length) {
            var newOptions = [];
            if (multiple && utils_1.isArray(value)) {
                newOptions = options.filter(function (option) {
                    return value.includes(option.value);
                });
                return newOptions;
            }
            else {
                newOptions = options.filter(function (option) { return option.value === value; });
                return newOptions.length > 0 ? newOptions[0] : '';
            }
        }
        return options;
    }, [state.errors, state.touched, state.values]);
    var getFieldHelpers = react_1.default.useCallback(function (props) {
        return {
            setValue: function (name, value) { return setFieldValue(name, value); },
            getValue: function (name) { return utils_1.getIn(state.values, name); },
            getValueForDefault: function (name, comparisonKey) {
                if (comparisonKey === void 0) { comparisonKey = null; }
                if (comparisonKey === null) {
                    return utils_1.getIn(state.savedValues, name);
                }
                var savedValue = utils_1.getIn(state.savedValues, comparisonKey), currentValue = utils_1.getIn(state.values, comparisonKey);
                return savedValue === currentValue ? utils_1.getIn(state.savedValues, name) : false;
            },
        };
    }, [state.errors, state.touched, state.values]);
    var context = {
        values: state.values,
        errors: {},
        touched: {},
        isSubmitting: false,
        setValues: setValues,
        setFieldValue: setFieldValue,
        handleBlur: handleBlur,
        handleChange: handleChange,
        getFieldProps: getFieldProps,
        getFieldMeta: getFieldMeta,
        getFieldHelpers: getFieldHelpers,
        eligibleOptions: eligibleOptions,
        eligibleOption: eligibleOption,
    };
    return context;
};
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react_1.default.useLayoutEffect : react_1.default.useEffect;
var useEventCallback = function (fn) {
    var ref = react_1.default.useRef(fn);
    useIsomorphicLayoutEffect(function () {
        ref.current = fn;
    });
    return react_1.default.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
    }, []);
};
exports.default = useBuilder;
//# sourceMappingURL=useBuilder.js.map