import Swal from "sweetalert2";
import apiFetch from "@wordpress/api-fetch";
import { dispatch, select } from "@wordpress/data";

// const { api_nonce } = NotificationXGlobal;
// wpFetch.use(wpFetch.createNonceMiddleware(notificationxTabs.rest.nonce));
// wpFetch.use(
//     wpFetch.createRootURLMiddleware("http://my-wordpress-site/wp-json/")
// );
// console.log(notificationxTabs);

import when from "./when";
import { isArray, isEmptyObj } from "./utils";
// import store from "../store";

export const SweetAlert = ( args: any = {} ) => {
	return Swal.fire({
		target: args?.target ?? "#notificationx",
		type: args?.type ?? "success",
		html: args?.html,
		title: args?.title ?? "Title Goes Here: title",
		text: args?.text ?? "Test Goes Here: text",
		icon: args?.icon ?? (args?.type || "success"),
		timer: args?.timer ?? null,
		...args,
	});
};

export const ObjectFilter = (thisObj, func, returnArr = false) => {
	if (!thisObj) {
		return false;
	}
	let newObj = {};
	let newArr = Object.keys(thisObj).filter((item) => func(item));
	if (returnArr) {
		return newArr;
	} else {
		newArr.map((item) => {
			newObj[item] = thisObj[item];
		});
	}
	return newObj;
};

export const isExists = (args, value) => {
	let typeOfargs = typeof args;
	switch (true) {
		case typeOfargs === "object" && isArray(args):
			return args.includes(value);
		case typeOfargs === "object" && !isArray(args):
			return args?.[value] !== undefined;
		default:
			return args === value;
	}
};



export const triggerDefaults = (defaults, checkType, value = null) => {
	if (!isEmptyObj(defaults) && typeof defaults === "object") {
		for (let obj in defaults) {
			if (obj === value) {
				let at = defaults[obj].indexOf("@"),
					colon = defaults[obj].indexOf(":");
				if (at === 0 && colon > 0) {
					let eligibleKey = defaults[obj].substr(1, colon - 1);
					let eligibleDataToSet = defaults[obj].substr(colon + 1);
					let eligibleDefaultData = getStoreData().getSavedFieldValue(
						eligibleKey,
						checkType
					);
					if (eligibleKey != "" && eligibleDataToSet != "") {
						setStoreData().setFieldValue({
							name: eligibleKey,
							value: {
								[eligibleKey]: eligibleDefaultData
									? eligibleDefaultData
									: eligibleDataToSet,
							},
						});
					}
				}
			}
		}
	}
};

/**
 * API Fetch for WP
 * @param {object} args
 */
export const getStoreData = () => select("formbuilder");
export const setStoreData = () => dispatch("formbuilder");

export const wpFetch = (params) => {
	let args = { ...params, method: "POST" };
	return apiFetch(args);
};

export const processAjaxData = (data) => {
	let newData = {};
	Object.keys(data).map((item) => {
		if (data[item].indexOf("@") === 0) {
			let eligibleKey = data[item].substr(1);
			if (eligibleKey != "") {
				let eligibleData = getStoreData().getFieldValue(eligibleKey);
				if (eligibleData) {
					newData[item] = eligibleData;
				} else {
					newData[item] = "undefined";
				}
			}
		} else {
			newData[item] = data[item];
		}
	});
	return newData;
};

export function _extends(...rest) {
	const _extends = Object.assign || function (target) {
		for (let i = 1; i < rest.length; i++) {
			let source = rest[i];
			for (let key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};

	return _extends.apply(this, rest);
}

// export const timezoneString = ($offset) => {
//     let $hours     = Math.trunc($offset);
//     let $minutes   = ( $offset - $hours );
//     let $sign      = ( $offset < 0 ) ? '-' : '+';
//     let $abs_hour  = Math.abs( $hours );
//     let $abs_mins  = Math.abs( $minutes * 60 );
//     let $tz_offset = $sign + pad2($abs_hour) + ':' + pad2($abs_mins) );
//     return $tz_offset;
// }

// export function pad2(number) {
//     return (number < 10 ? '0' : '') + number
// }
