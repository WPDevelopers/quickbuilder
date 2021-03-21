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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var when_1 = __importDefault(require("../core/when"));
var DEFAULT_STATE = {
    savedValues: {
        type: "conversions",
        source: "edd",
    },
    values: {
    // source: "woocommerce",
    },
    touched: {},
    errors: {},
};
var actions = {
    setSavedValues: function (payload) {
        return {
            type: "SET_SAVED_VALUES",
            payload: payload,
        };
    },
    setFieldValue: function (_a) {
        var name = _a.name, value = _a.value;
        return {
            type: "FIELD_VALUE",
            name: name,
            payload: value,
        };
    },
    removeFieldValue: function (payload) {
        return {
            type: "REMOVE_FIELD_VALUE",
            payload: payload,
        };
    },
    resetFieldValue: function (payload) {
        return {
            type: "RESET_FIELD_VALUE",
            payload: payload,
        };
    },
    setFieldTouched: function (payload) {
        return {
            type: "FIELD_TOUCHED",
            payload: payload,
        };
    },
    setError: function (payload) {
        return {
            type: "FIELD_ERROR",
            payload: payload,
        };
    },
    removeError: function (payload) {
        return {
            type: "REMOVE_FIELD_ERROR",
            payload: payload,
        };
    },
};
var store = {
    reducer: function (state, action) {
        var _a, _b, _c;
        if (state === void 0) { state = DEFAULT_STATE; }
        switch (action.type) {
            case "SET_SAVED_VALUES": {
                var updatedState_1 = __assign({}, state);
                updatedState_1 = __assign(__assign({}, updatedState_1), { values: action.payload, savedValues: action.payload });
                return updatedState_1;
            }
            case "FIELD_VALUE": {
                var updatedState_2 = __assign({}, state);
                var payload = action.payload, name_1 = action.name;
                updatedState_2 = __assign(__assign({}, updatedState_2), { values: __assign(__assign({}, updatedState_2 === null || updatedState_2 === void 0 ? void 0 : updatedState_2.values), payload) });
                return updatedState_2;
            }
            case "REMOVE_FIELD_VALUE": {
                var updatedState_3 = __assign({}, state);
                var payload = action.payload;
                if ((_a = updatedState_3.values) === null || _a === void 0 ? void 0 : _a[payload]) {
                    delete updatedState_3.values[payload];
                }
                return updatedState_3;
            }
            case "RESET_FIELD_VALUE": {
                var updatedState_4 = __assign({}, state);
                if ((_b = updatedState_4.values) === null || _b === void 0 ? void 0 : _b[action.payload]) {
                    delete updatedState_4.values[action.payload];
                    if ((_c = updatedState_4.savedValues) === null || _c === void 0 ? void 0 : _c[action.payload]) {
                        updatedState_4.values[action.payload] =
                            updatedState_4.savedValues[action.payload];
                    }
                }
                return updatedState_4;
            }
            case "FIELD_ERROR":
                return __assign(__assign({}, state), { errors: __assign(__assign({}, state.errors), action.payload) });
            case "REMOVE_FIELD_ERROR":
                var updatedState = __assign({}, state);
                delete updatedState.errors[action.payload];
                return updatedState;
            case "FIELD_TOUCHED":
                return __assign(__assign({}, state), { touched: __assign(__assign({}, state.touched), action.payload) });
        }
        return state;
    },
    actions: actions,
    selectors: {
        getValues: function (state) {
            return state.values;
        },
        getFieldValue: function (state, name) {
            var _a;
            return (_a = state.values) === null || _a === void 0 ? void 0 : _a[name];
        },
        getSavedFieldValue: function (state, name, comparisonKey) {
            var _a, _b, _c, _d;
            if (comparisonKey === null) {
                return (_a = state.savedValues) === null || _a === void 0 ? void 0 : _a[name];
            }
            return ((_b = state.savedValues) === null || _b === void 0 ? void 0 : _b[comparisonKey]) ===
                ((_c = state.values) === null || _c === void 0 ? void 0 : _c[comparisonKey])
                ? (_d = state.savedValues) === null || _d === void 0 ? void 0 : _d[name]
                : false;
        },
        isTouched: function (state, current) {
            var _a;
            return (_a = state.touched) === null || _a === void 0 ? void 0 : _a[current];
        },
        getError: function (state, current) {
            var _a;
            return (_a = state.errors) === null || _a === void 0 ? void 0 : _a[current];
        },
        isVisible: function (state, props) {
            if (!props.rules || props.name == undefined) {
                return true;
            }
            var whenVar = when_1.default(props.rules, state.values);
            return Boolean(whenVar);
        },
    },
};
exports.default = store;
//# sourceMappingURL=index.js.map