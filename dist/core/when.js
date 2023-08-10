import _typeof$1 from '@babel/runtime/helpers/typeof';
import { isEmptyObj, isArray } from './utils.js';
import intersect from 'intersect';
import { sprintf, __ } from '@wordpress/i18n';

var _typeof = function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof$1(Symbol.iterator) === "symbol") {
    return _typeof$1(obj);
  } else {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof$1(obj);
  }
};
var get = function get(obj, path) {
  var defaultValue = (arguments.length <= 2 ? 0 : arguments.length - 2) > 2 && (arguments.length <= 4 ? undefined : arguments[4]) !== undefined ? arguments.length <= 4 ? undefined : arguments[4] : undefined;
  return String.prototype.split.call(path, /[,[\].]+?/).filter(Boolean).reduce(function (a, c) {
    return a && Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue;
  }, obj);
};
var rules = {
  is: function is(key, value, data) {
    return get(data, key) == value;
  },
  "!is": function is(key, value, data) {
    return !rules.is(key, value, data);
  },
  includes: function includes(key, checkAgainst, selectedData) {
    if (!isEmptyObj(selectedData)) {
      var newData = get(selectedData, key);
      if (_typeof(newData) != "function") {
        if (isArray(checkAgainst) && isArray(newData)) {
          var _intersect;
          return !!((_intersect = intersect(newData, checkAgainst)) !== null && _intersect !== void 0 && _intersect.length);
        } else if (isArray(checkAgainst) && _typeof(newData) == "string") {
          return checkAgainst.includes(newData);
        } else if (isArray(newData) && _typeof(checkAgainst) == "string") {
          return newData.includes(checkAgainst);
        }
      }
    }
    return false;
  },
  "!includes": function includes(key, value, data) {
    return !rules.includes(key, value, data);
  },
  isOfType: function isOfType(key, value, data) {
    return _typeof(get(data, key)) === value;
  },
  "!isOfType": function isOfType(key, value, data) {
    return !rules.isOfType(key, value, data);
  },
  allOf: function allOf(key, values, data) {
    if (!Array.isArray(values)) {
      throw Error(__('"allOf" condition requires an array as #3 argument', 'notificationx'));
    }
    var dataValues = get(data, key);
    return values.every(function (currentValue) {
      return dataValues.includes(currentValue);
    });
  },
  anyOf: function anyOf(key, values, data) {
    if (!Array.isArray(values)) {
      throw Error(__('"anyOf" condition requires an array as #3 argument', 'notificationx'));
    }
    var dataValue = get(data, key);
    return values.includes(dataValue);
  },
  gt: function gt(key, value, data) {
    return get(data, key) > value;
  },
  gte: function gte(key, value, data) {
    return get(data, key) >= value;
  },
  lt: function lt(key, value, data) {
    return get(data, key) < value;
  },
  lte: function lte(key, value, data) {
    return get(data, key) <= value;
  }
};
var logicalRules = {
  and: function and(data) {
    return !data.includes(false);
  },
  or: function or(data) {
    return data.includes(true);
  },
  not: function not(data) {
    if (data.length !== 1) {
      throw Error(__('"not" can have only one comparison rule, multiple rules given', 'notificationx'));
    }
    return !data[0];
  }
};
var isValidCondition = function isValidCondition(conditions) {
  if (Array.isArray(conditions) && Array.isArray(conditions[1]) && conditions[0] && logicalRules[conditions[0].toLowerCase()]) {
    return true;
  }
  return false;
};
var processRule = function processRule(_ref, data) {
  var condition = _ref[0],
    key = _ref[1],
    value = _ref[2];
  if (typeof condition !== "string" || rules[condition] === undefined) {
    throw Error(sprintf(__("Invalid comparison rule %s.", 'notificationx'), condition));
  }
  return rules[condition](key, value, data);
};
var processCondition = function processCondition(condition, data) {
  return logicalRules[condition.toLowerCase()](data);
};
var validate = function validate(conditions, data) {
  if (!isValidCondition(conditions)) {
    return processRule(conditions, data);
  }
  var logicalRule = conditions.slice(0, 1)[0];
  var comparisonRules = conditions.slice(1);
  var result = comparisonRules.map(function (condition, index) {
    if (isValidCondition(condition)) {
      return when(condition, data);
    }
    return processRule(condition, data);
  });
  return processCondition(logicalRule, result);
};
var when = function when(conditions, data) {
  if (typeof conditions === "function") {
    return Promise.resolve(conditions(data));
  }
  return validate(conditions, data);
};

export { when as default };
