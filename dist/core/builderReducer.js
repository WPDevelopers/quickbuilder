import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { _extends } from './functions.js';
import { setIn } from './utils.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var builderReducer = function builderReducer(state, action) {
  switch (action.type) {
    case 'SET_CONTEXT':
      return _extends({}, state, setIn(state, action.payload.field, action.payload.value));
    case 'SET_ACTIVE_TAB':
      return _objectSpread(_objectSpread({}, state), {}, {
        config: _objectSpread(_objectSpread({}, state.config), {}, {
          active: action.payload
        })
      });
    case 'SET_REDIRECT':
      return _objectSpread(_objectSpread({}, state), {}, {
        redirect: _objectSpread(_objectSpread({}, state.redirect), action.payload)
      });
    case 'SET_VALUES':
      return _extends({}, state, setIn(state, 'values', action.payload));
    case 'SET_SAVED_VALUES':
      return _extends({}, state, setIn(state, 'savedValues', action.payload));
    case 'SET_FIELD_VALUE':
      return _extends({}, state, {
        values: setIn(state.values, action.payload.field, action.payload.value)
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
      return _objectSpread(_objectSpread({}, state), {}, {
        isSubmitting: action.payload
      });
    case 'SET_ISVALIDATING':
      return _extends({}, state, {
        isValidating: action.payload
      });
    case 'SET_FIELD_TOUCHED':
      return _objectSpread(_objectSpread({}, state), {}, {
        touched: _objectSpread(_objectSpread({}, state.touched), {}, _defineProperty({}, action.payload.field, action.payload.value))
      });

    // return _extends({}, state, {
    //     touched: setIn(state.touched, action.payload.field, action.payload.value)
    // });

    case 'SET_FIELD_ERROR':
    // return _extends({}, state, {
    //     errors: setIn(state.errors, action.payload.field, action.payload.value)
    // });

    case 'RESET_FORM':
      return _extends({}, state, action.payload);
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
    // Tabs Fields SET
    case 'SET_FORM_FIELD':
      if (action.payload.field === null) {
        return _extends({}, state, setIn(state, 'tabs', action.payload.value));
      }
      return _extends({}, state, {
        tabs: setIn(state.tabs, action.payload.field, action.payload.value)
      });
    case 'SET_ICONS':
      return _extends({}, state, {
        icons: setIn(state.icons, action.payload.name, action.payload.icons)
      });
    case 'SET_ALERTS':
      return _extends({}, state, {
        alerts: setIn(state.alerts, action.payload.name, action.payload.value)
      });
    case 'SET_COMMONS':
      return _extends({}, state, {
        common: setIn(state.common, action.payload.name, action.payload.value)
      });
    default:
      return state;
  }
};

export { builderReducer, builderReducer as default };
