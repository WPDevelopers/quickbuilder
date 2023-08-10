import _defineProperty from '@babel/runtime/helpers/defineProperty';
import when from '../core/when.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DEFAULT_STATE = {
  savedValues: {
    type: "conversions",
    source: "edd"
  },
  values: {
    // source: "woocommerce",
  },
  touched: {},
  errors: {}
};
var actions = {
  setSavedValues: function setSavedValues(payload) {
    return {
      type: "SET_SAVED_VALUES",
      payload: payload
    };
  },
  setFieldValue: function setFieldValue(_ref) {
    var name = _ref.name,
      value = _ref.value;
    return {
      type: "FIELD_VALUE",
      name: name,
      payload: value
    };
  },
  removeFieldValue: function removeFieldValue(payload) {
    return {
      type: "REMOVE_FIELD_VALUE",
      payload: payload
    };
  },
  resetFieldValue: function resetFieldValue(payload) {
    return {
      type: "RESET_FIELD_VALUE",
      payload: payload
    };
  },
  setFieldTouched: function setFieldTouched(payload) {
    return {
      type: "FIELD_TOUCHED",
      payload: payload
    };
  },
  setError: function setError(payload) {
    return {
      type: "FIELD_ERROR",
      payload: payload
    };
  },
  removeError: function removeError(payload) {
    return {
      type: "REMOVE_FIELD_ERROR",
      payload: payload
    };
  }
};
var store = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "SET_SAVED_VALUES":
        {
          var _updatedState = _objectSpread({}, state);
          _updatedState = _objectSpread(_objectSpread({}, _updatedState), {}, {
            values: action.payload,
            savedValues: action.payload
          });
          return _updatedState;
        }
      case "FIELD_VALUE":
        {
          var _updatedState3;
          var _updatedState2 = _objectSpread({}, state);
          var payload = action.payload;
          _updatedState2 = _objectSpread(_objectSpread({}, _updatedState2), {}, {
            values: _objectSpread(_objectSpread({}, (_updatedState3 = _updatedState2) === null || _updatedState3 === void 0 ? void 0 : _updatedState3.values), payload)
          });
          return _updatedState2;
        }
      case "REMOVE_FIELD_VALUE":
        {
          var _updatedState4$values;
          var _updatedState4 = _objectSpread({}, state);
          var _payload = action.payload;
          if ((_updatedState4$values = _updatedState4.values) !== null && _updatedState4$values !== void 0 && _updatedState4$values[_payload]) {
            delete _updatedState4.values[_payload];
          }
          return _updatedState4;
        }
      case "RESET_FIELD_VALUE":
        {
          var _updatedState5$values;
          var _updatedState5 = _objectSpread({}, state);
          if ((_updatedState5$values = _updatedState5.values) !== null && _updatedState5$values !== void 0 && _updatedState5$values[action.payload]) {
            var _updatedState5$savedV;
            delete _updatedState5.values[action.payload];
            if ((_updatedState5$savedV = _updatedState5.savedValues) !== null && _updatedState5$savedV !== void 0 && _updatedState5$savedV[action.payload]) {
              _updatedState5.values[action.payload] = _updatedState5.savedValues[action.payload];
            }
          }
          return _updatedState5;
        }
      case "FIELD_ERROR":
        return _objectSpread(_objectSpread({}, state), {}, {
          errors: _objectSpread(_objectSpread({}, state.errors), action.payload)
        });
      case "REMOVE_FIELD_ERROR":
        var updatedState = _objectSpread({}, state);
        delete updatedState.errors[action.payload];
        return updatedState;
      case "FIELD_TOUCHED":
        return _objectSpread(_objectSpread({}, state), {}, {
          touched: _objectSpread(_objectSpread({}, state.touched), action.payload)
        });
    }
    return state;
  },
  actions: actions,
  selectors: {
    getValues: function getValues(state) {
      return state.values;
    },
    getFieldValue: function getFieldValue(state, name) {
      var _state$values;
      return (_state$values = state.values) === null || _state$values === void 0 ? void 0 : _state$values[name];
    },
    getSavedFieldValue: function getSavedFieldValue(state, name, comparisonKey) {
      var _state$savedValues2, _state$values2, _state$savedValues3;
      if (comparisonKey === null) {
        var _state$savedValues;
        return (_state$savedValues = state.savedValues) === null || _state$savedValues === void 0 ? void 0 : _state$savedValues[name];
      }
      return ((_state$savedValues2 = state.savedValues) === null || _state$savedValues2 === void 0 ? void 0 : _state$savedValues2[comparisonKey]) === ((_state$values2 = state.values) === null || _state$values2 === void 0 ? void 0 : _state$values2[comparisonKey]) ? (_state$savedValues3 = state.savedValues) === null || _state$savedValues3 === void 0 ? void 0 : _state$savedValues3[name] : false;
    },
    isTouched: function isTouched(state, current) {
      var _state$touched;
      return (_state$touched = state.touched) === null || _state$touched === void 0 ? void 0 : _state$touched[current];
    },
    getError: function getError(state, current) {
      var _state$errors;
      return (_state$errors = state.errors) === null || _state$errors === void 0 ? void 0 : _state$errors[current];
    },
    isVisible: function isVisible(state, props) {
      if (!props.rules || props.name == undefined) {
        return true;
      }
      var whenVar = when(props.rules, state.values);
      return Boolean(whenVar);
    }
  }
};

export { store as default };
