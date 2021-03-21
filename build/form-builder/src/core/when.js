"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var intersect_1 = __importDefault(require("intersect"));
var _typeof = function (obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        return typeof obj;
    }
    else {
        return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
    }
};
var get = function (obj, path) {
    var restParams = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restParams[_i - 2] = arguments[_i];
    }
    var defaultValue = restParams.length > 2 && restParams[2] !== undefined ? restParams[2] : undefined;
    return String.prototype.split
        .call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce(function (a, c) {
        return a && Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue;
    }, obj);
};
var rules = {
    is: function (key, value, data) {
        return get(data, key) === value;
    },
    "!is": function (key, value, data) {
        return !rules.is(key, value, data);
    },
    includes: function (key, checkAgainst, selectedData) {
        var _a;
        if (!utils_1.isEmptyObj(selectedData)) {
            var newData = get(selectedData, key);
            if (_typeof(newData) != "function") {
                if (utils_1.isArray(checkAgainst) && utils_1.isArray(newData)) {
                    return (_a = intersect_1.default(newData, checkAgainst)) === null || _a === void 0 ? void 0 : _a.length;
                }
                else if (utils_1.isArray(checkAgainst) &&
                    _typeof(newData) == "string") {
                    return checkAgainst.includes(newData);
                }
                else if (utils_1.isArray(newData) &&
                    _typeof(checkAgainst) == "string") {
                    return newData.includes(checkAgainst);
                }
            }
        }
        return false;
    },
    "!includes": function (key, value, data) {
        return !rules.includes(key, value, data);
    },
    isOfType: function (key, value, data) {
        return _typeof(get(data, key)) === value;
    },
    allOf: function (key, values, data) {
        if (!Array.isArray(values)) {
            throw Error('"allOf" condition requires an array as #3 argument');
        }
        var dataValues = get(data, key);
        return values.every(function (currentValue) {
            return dataValues.includes(currentValue);
        });
    },
    anyOf: function (key, values, data) {
        if (!Array.isArray(values)) {
            throw Error('"anyOf" condition requires an array as #3 argument');
        }
        var dataValue = get(data, key);
        return values.includes(dataValue);
    },
    gt: function (key, value, data) {
        return get(data, key) > value;
    },
    gte: function (key, value, data) {
        return get(data, key) >= value;
    },
    lt: function (key, value, data) {
        return get(data, key) < value;
    },
    lte: function (key, value, data) {
        return get(data, key) <= value;
    },
};
var logicalRules = {
    and: function (data) {
        return !data.includes(false);
    },
    or: function (data) {
        return data.includes(true);
    },
    not: function (data) {
        if (data.length !== 1) {
            throw Error('"not" can have only one comparison rule, multiple rules given');
        }
        return !data[0];
    },
};
var isValidCondition = function (conditions) {
    if (Array.isArray(conditions) &&
        Array.isArray(conditions[1]) &&
        conditions[0] &&
        logicalRules[conditions[0].toLowerCase()]) {
        return true;
    }
    return false;
};
var processRule = function (_ref, data) {
    var condition = _ref[0], key = _ref[1], value = _ref[2];
    if (typeof condition !== "string" || rules[condition] === undefined) {
        throw Error("Invalid comparison rule " + condition + ".");
    }
    return rules[condition](key, value, data);
};
var processCondition = function (condition, data) {
    return logicalRules[condition.toLowerCase()](data);
};
var validate = function (conditions, data) {
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
var when = function (conditions, data) {
    if (typeof conditions === "function") {
        return Promise.resolve(conditions(data));
    }
    return validate(conditions, data);
};
exports.default = when;
//# sourceMappingURL=when.js.map