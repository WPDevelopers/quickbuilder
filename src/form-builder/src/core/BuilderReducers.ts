import { _extends } from "./functions";
import { setIn } from "./utils";

export const builderReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_VALUES':
            return _extends({}, state, {
                values: { ... state.values, ...action.payload }
            });

        case 'SET_TOUCHED':
            return _extends({}, state, {
                touched: action.payload
            });

        case 'SET_ERRORS':
            // if (isEqual(state.errors, action.payload)) {
            //     return state;
            // }

            return _extends({}, state, {
                errors: action.payload
            });

        case 'SET_STATUS':
            return _extends({}, state, {
                status: action.payload
            });

        case 'SET_ISSUBMITTING':
            return _extends({}, state, {
                isSubmitting: action.payload
            });

        case 'SET_ISVALIDATING':
            return _extends({}, state, {
                isValidating: action.payload
            });

        case 'SET_FIELD_VALUE':
            return _extends({}, state, {
                values: { ...state.values,[ action.payload.field ]: action.payload.value }
            });

        case 'SET_FIELD_TOUCHED':
            // return { ...state, touched: { ...state.touched, [action.payload.field]: action.payload.value }}

            return _extends({}, state, {
                touched: setIn(state.touched, action.payload.field, action.payload.value)
            });

        case 'SET_FIELD_ERROR':
            // return _extends({}, state, {
            //     errors: setIn(state.errors, action.payload.field, action.payload.value)
            // });

        case 'RESET_FORM':
            return _extends({}, state, action.payload);

        case 'SET_FORMIK_STATE':
            return action.payload(state);

        case 'SUBMIT_ATTEMPT':
            return _extends({}, state, {
                // touched: setNestedObjectValues(state.values, true),
                isSubmitting: true,
                submitCount: state.submitCount + 1
            });

        case 'SUBMIT_FAILURE':
            return _extends({}, state, {
                isSubmitting: false
            });

        case 'SUBMIT_SUCCESS':
            return _extends({}, state, {
                isSubmitting: false
            });

        default:
            return state;
    }
}