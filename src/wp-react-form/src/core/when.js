import { isArray, isEmptyObj } from "./functions";
import intersect from "intersect";

const _typeof = (obj) => {
	if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
		return typeof obj;
	} else {
		return obj &&
			typeof Symbol === "function" &&
			obj.constructor === Symbol &&
			obj !== Symbol.prototype
			? "symbol"
			: typeof obj;
	}
};

const get = (obj, path) => {
	let defaultValue =
		arguments.length > 2 && arguments[2] !== undefined
			? arguments[2]
			: undefined;
	return String.prototype.split
		.call(path, /[,[\].]+?/)
		.filter(Boolean)
		.reduce(function (a, c) {
			return a && Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue;
		}, obj);
};

const rules = {
	is: (key, value, data) => {
		return get(data, key) === value;
	},
	"!is": (key, value, data) => {
		return !rules.is(key, value, data);
	},
	includes: (key, checkAgainst, selectedData) => {
		if (!isEmptyObj(selectedData)) {
			let newData = get(selectedData, key);
			if (_typeof(newData) != "function") {
				if (isArray(checkAgainst) && isArray(newData)) {
					return intersect(newData, checkAgainst)?.length;
				} else if (
					isArray(checkAgainst) &&
					_typeof(newData) == "string"
				) {
					return checkAgainst.includes(newData);
				} else if (
					isArray(newData) &&
					_typeof(checkAgainst) == "string"
				) {
					return newData.includes(checkAgainst);
				}
			}
		}
		return false;
	},
	"!includes": (key, value, data) => {
		return !rules.includes(key, value, data);
	},
	isOfType: (key, value, data) => {
		return _typeof(get(data, key)) === value;
	},
	allOf: (key, values, data) => {
		if (!Array.isArray(values)) {
			throw Error('"allOf" condition requires an array as #3 argument');
		}

		let dataValues = get(data, key);
		return values.every(function (currentValue) {
			return dataValues.includes(currentValue);
		});
	},
	anyOf: (key, values, data) => {
		if (!Array.isArray(values)) {
			throw Error('"anyOf" condition requires an array as #3 argument');
		}
		var dataValue = get(data, key);
		return values.includes(dataValue);
	},
	gt: (key, value, data) => {
		return get(data, key) > value;
	},
	gte: (key, value, data) => {
		return get(data, key) >= value;
	},
	lt: (key, value, data) => {
		return get(data, key) < value;
	},
	lte: (key, value, data) => {
		return get(data, key) <= value;
	},
};
const logicalRules = {
	and: (data) => {
		return !data.includes(false);
	},
	or: (data) => {
		return data.includes(true);
	},
	not: (data) => {
		if (data.length !== 1) {
			throw Error(
				'"not" can have only one comparison rule, multiple rules given'
			);
		}
		return !data[0];
	},
};

const isValidCondition = (conditions) => {
	if (
		Array.isArray(conditions) &&
		Array.isArray(conditions[1]) &&
		conditions[0] &&
		logicalRules[conditions[0].toLowerCase()]
	) {
		return true;
	}

	return false;
};

const processRule = (_ref, data) => {
	let condition = _ref[0],
		key = _ref[1],
		value = _ref[2];

	if (typeof condition !== "string" || rules[condition] === undefined) {
		throw Error("Invalid comparison rule " + condition + ".");
	}

	return rules[condition](key, value, data);
};

const processCondition = (condition, data) => {
	return logicalRules[condition.toLowerCase()](data);
};

const validate = (conditions, data) => {
	if (!isValidCondition(conditions)) {
		return processRule(conditions, data);
	}

	let logicalRule = conditions.slice(0, 1)[0];
	let comparisonRules = conditions.slice(1);
	let result = comparisonRules.map(function (condition, index) {
		if (isValidCondition(condition)) {
			return when(condition, data);
		}
		return processRule(condition, data);
	});
	return processCondition(logicalRule, result);
};

const when = (conditions, data) => {
	if (typeof conditions === "function") {
		return Promise.resolve(conditions(data));
	}
	return validate(conditions, data);
};

export default when;
