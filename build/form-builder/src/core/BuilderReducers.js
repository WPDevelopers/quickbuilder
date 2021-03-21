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
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderReducer = void 0;
var functions_1 = require("./functions");
var utils_1 = require("./utils");
var builderReducer = function (state, action) {
    var _a;
    switch (action.type) {
        case 'SET_VALUES':
            return functions_1._extends({}, state, {
                values: __assign(__assign({}, state.values), action.payload)
            });
        case 'SET_TOUCHED':
            return functions_1._extends({}, state, {
                touched: action.payload
            });
        case 'SET_ERRORS':
            // if (isEqual(state.errors, action.payload)) {
            //     return state;
            // }
            return functions_1._extends({}, state, {
                errors: action.payload
            });
        case 'SET_STATUS':
            return functions_1._extends({}, state, {
                status: action.payload
            });
        case 'SET_ISSUBMITTING':
            return functions_1._extends({}, state, {
                isSubmitting: action.payload
            });
        case 'SET_ISVALIDATING':
            return functions_1._extends({}, state, {
                isValidating: action.payload
            });
        case 'SET_FIELD_VALUE':
            return functions_1._extends({}, state, {
                values: __assign(__assign({}, state.values), (_a = {}, _a[action.payload.field] = action.payload.value, _a))
            });
        case 'SET_FIELD_TOUCHED':
            // return { ...state, touched: { ...state.touched, [action.payload.field]: action.payload.value }}
            return functions_1._extends({}, state, {
                touched: utils_1.setIn(state.touched, action.payload.field, action.payload.value)
            });
        case 'SET_FIELD_ERROR':
        // return _extends({}, state, {
        //     errors: setIn(state.errors, action.payload.field, action.payload.value)
        // });
        case 'RESET_FORM':
            return functions_1._extends({}, state, action.payload);
        case 'SET_FORMIK_STATE':
            return action.payload(state);
        case 'SUBMIT_ATTEMPT':
            return functions_1._extends({}, state, {
                // touched: setNestedObjectValues(state.values, true),
                isSubmitting: true,
                submitCount: state.submitCount + 1
            });
        case 'SUBMIT_FAILURE':
            return functions_1._extends({}, state, {
                isSubmitting: false
            });
        case 'SUBMIT_SUCCESS':
            return functions_1._extends({}, state, {
                isSubmitting: false
            });
        default:
            return state;
    }
};
exports.builderReducer = builderReducer;
//# sourceMappingURL=BuilderReducers.js.map