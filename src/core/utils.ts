import apiFetch from "@wordpress/api-fetch";
import { clone, toPath } from "lodash-es";
import when from "./when";
// @ts-ignore
import { __experimentalGetSettings } from "@wordpress/date";
import moment from "moment";

export const wpFetch = (params) => {
	let args = { ...params, method: "POST" };
	return apiFetch(args);
};

export const isString = (args) => {
	return args !== null && typeof args === "string";
};

export const isNumber = (args) => {
	return args !== null && typeof args === "number";
};

var isInteger = function isInteger(obj) {
	return String(Math.floor(Number(obj))) === obj;
};

export const isFunction = (functionName) => {
	return functionName !== null && typeof functionName === "function";
};

export const isArray = (args) => {
	return args !== null && typeof args === "object" && Array.isArray(args);
};

export const isObject = (obj) => {
	return obj !== null && typeof obj === 'object' && !isArray(obj)
}

export const valueExists = (arrayOptions, needles) => {
	if (isArray(needles)) {
		return arrayOptions.some(value => needles.includes(value));
	}

	return arrayOptions.includes(needles);
};

export const isVisible = (values, props) => {
	if (!props?.rules || props.name == undefined) {
		return true;
	}

	let whenVar = when(props.rules, values);
	return Boolean(whenVar);
}

export const withState = (type) => {
	return Boolean(["group", "section"].includes(type))
}

export const isEmptyObj = (obj) => {
	for (let k in obj) {
		if (obj.hasOwnProperty(k)) {
			return false;
		}
	}
	return true;
};

export const getIn = (obj, key, def?, p?) => {
	if (p === void 0) {
		p = 0;
	}
	const path = toPath(key);
	while (obj && p < path.length) {
		obj = obj[path[p++]];
	}
	return obj === undefined ? def : obj;
}

export const sortingFields = (fields) => [].concat(fields).sort(function (a, b) {
	if (a.priority == undefined || b.priority == undefined) return 0;
	return a.priority > b.priority ? 1 : -1;
});

export const getSelectedValues = (options: []) => {
	return Array.from(options).filter(function (el: any) {
		return el.selected;
	}).map(function (el: any) {
		return el.value;
	});
}

export const executeChange = (eventOrTextValue, maybePath?) => {
	var field = maybePath;
	var val = eventOrTextValue;
	var parsed;

	if (!isString(eventOrTextValue)) {
		if (eventOrTextValue.persist) {
			eventOrTextValue.persist();
		}

		const target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;

		const type = target.type,
			name = target.name,
			value = target.value,
			checked = target.checked,
			multiple = target.multiple;


		field = maybePath ? maybePath : name;

		// val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
		//     ? checked : !!multiple ? value : value;

		switch (type) {
			case 'number':
			case 'range':
				parsed = parseFloat(value), isNaN(parsed) ? '' : parsed;
				val = parsed;
				break;
			case 'checkbox':
				val = !!multiple ? value : checked;
				break;
			case 'toggle':
			default:
				val = value;
				break;
		}
	}

	return { field, val };
}

export const objectWithoutPropertiesLoose = (source, excluded) => {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i;
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}

export const setIn = (obj, path, value) => {
	var res = clone(obj); // this keeps inheritance when obj is a class

	var resVal = res;
	var i = 0;
	var pathArray = toPath(path);

	for (; i < pathArray.length - 1; i++) {
		var currentPath = pathArray[i];
		var currentObj = getIn(obj, pathArray.slice(0, i + 1));

		if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
			resVal = resVal[currentPath] = clone(currentObj);
		} else {
			var nextPath = pathArray[i + 1];
			resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
		}
	} // Return original object if new value is the same as current


	if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
		return obj;
	}

	if (value === undefined) {
		delete resVal[pathArray[i]];
	} else {
		resVal[pathArray[i]] = value;
	} // If the path array has a single element, the loop did not run.
	// Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


	if (i === 0 && value === undefined) {
		delete res[pathArray[i]];
	}

	return res;
}

export const validFieldProps = (defaultProps, exclude: string[] = []) => {
	const type = defaultProps.type;
	let filterOutArray = ['validation_rules', 'default', 'rules', 'meta', 'switch', ...exclude];
	if (type !== 'select' && type !== 'checkbox-select' && type !== 'select-async' && type !== 'radio-card' && type !== 'checkbox' && (type !== 'toggle' && defaultProps.multiple)) {
		filterOutArray.push('options');
	}
	if (type !== 'tab' && type !== 'group' && type !== 'repeater' && type !== 'section' && type !== 'button') {
		filterOutArray.push('fields');
	}

	let validProps: any = objectWithoutPropertiesLoose(defaultProps, filterOutArray);
	if (defaultProps?.label && !defaultProps?.placeholder) {
		validProps.placeholder = defaultProps.label;
	}
	return validProps;
}

export const hitAAJX = (ajax, context = null) => {
	if (context !== null && ajax) {
		let isEligible = true;
		if (ajax?.rules) {
			isEligible = when(ajax?.rules, context.values);
		}
		if (isEligible) {
			let data = {}
			Object.keys(ajax.data).map(singleData => {
				if (ajax.data[singleData].indexOf?.('@') > -1) {
					let eligibleKey = ajax.data[singleData].substr(1);
					data[singleData] = context.values?.[eligibleKey]
				} else {
					data[singleData] = ajax.data[singleData]
				}
			})
			return wpFetch({
				path: ajax.api,
				data
			}).then((response: any) => {
				if (response?.status == "success" && response?.redirect) {
					window.location = response?.redirect;
				}
				const dataContext = response?.data?.context ? response.data.context : (response?.context ? response.context : false);
				if (dataContext && isObject(dataContext)) {
					Object.keys(dataContext).map((eligibleKey) => {
						context.setFieldValue(eligibleKey, dataContext[eligibleKey]);
					});
				}
				if (response?.data?.download) {
					downloadFile({
						data: JSON.stringify(response.data.download),
						fileName: response?.data?.filename || 'export.json',
						fileType: 'text/json',
					})
				}

				if (ajax?.trigger && isString(ajax?.trigger)) {
					let at = ajax.trigger.indexOf('@');
					let colon = ajax.trigger.indexOf(":");
					if (at === 0 && colon > 0) {
						let eligibleKey = ajax.trigger.substr(1, colon - 1);
						let eligibleDataToSet = ajax.trigger.substr(colon + 1);
						if (eligibleDataToSet == 'true') {
							eligibleDataToSet = true;
						}
						else if (eligibleDataToSet == 'false') {
							eligibleDataToSet = false;
						}

						context.setFieldValue(
							eligibleKey,
							eligibleDataToSet
						);
					}
				}
				return response;
			})
		}
	}
	return Promise.reject(false);
}

export const getTime = (value?, keepLocalTime: boolean = false) => {
	const settings: any = __experimentalGetSettings();
	const _value = moment.utc(value ? value : undefined).utcOffset(+settings?.timezone?.offset, keepLocalTime);
	return _value;
}

export const merge = (array_one: Array<object>, array_two: Array<object>, key: string) => {
	// if( ! isArray(array_one) && ! isArray( array_two ) && isObject( array_one ) && isObject( array_two ) ) {
	//     return { ...array_one, ...array_two }
	// }
	const data = [...array_one];
	const _array_two = array_two.filter(
		(element: any) =>
			data.findIndex(
				(_element: any) =>
					_element[key] === element[key]) <= -1
	);
	return [...data, ..._array_two];
}


const downloadFile = ({ data, fileName, fileType }) => {
	// Create a blob with the data we want to download as a file
	const blob = new Blob([data], { type: fileType })
	// Create an anchor element and dispatch a click event on it
	// to trigger a download
	const a = document.createElement('a')
	a.download = fileName
	a.href = window.URL.createObjectURL(blob)
	const clickEvt = new MouseEvent('click', {
		view: window,
		bubbles: true,
		cancelable: true,
	})
	a.dispatchEvent(clickEvt)
	a.remove()
}
