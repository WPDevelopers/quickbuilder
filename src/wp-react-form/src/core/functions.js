import Swal from "sweetalert2";
import * as wpFetch from "@wordpress/api-fetch";
import { select } from "@wordpress/data";

// const { api_nonce } = NotificationXGlobal;
// wpFetch.use(wpFetch.createNonceMiddleware(notificationxTabs.rest.nonce));
// wpFetch.use(
//     wpFetch.createRootURLMiddleware("http://my-wordpress-site/wp-json/")
// );
// console.log(notificationxTabs);

import when from "./when";
// import store from "../store";

export const SweetAlert = (args = {}) => {
    return Swal.fire({
        target: args?.target ?? "#root .wp-react-form",
        type: args?.type ?? "success",
        html: args?.html,
        title: args?.title ?? "Title Goes Here: title",
        text: args?.text ?? "Test Goes Here: text",
        icon: args?.icon ?? "success",
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

export const isEmptyObj = (obj) => {
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
};

export const isArray = (args) => {
    return typeof args === "object" && Array.isArray(args);
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

export const eligibleOptions = (options, parentValue = {}) => {
    let newOptions = [];
    parentValue = isEmptyObj(parentValue)
        ? getStoreData().getValues()
        : parentValue;
    if (options?.length) {
        newOptions = options.filter((item, i) => {
            if (item?.rules) {
                // console.log("item?.rules", item?.rules);
                return when(item.rules, parentValue);
            } else {
                return item;
            }
        });
    }

    return newOptions;
};

export const eligibleOption = (options, value, multiple = false) => {
    let newOptions = [];
    if (options.length) {
        if (!multiple) {
            newOptions = options.filter((option) => option.value === value);
            return newOptions?.[0] ?? [];
        } else {
            newOptions = options.filter((option) =>
                value.includes(option.value)
            );
            return newOptions;
        }
    }
    return false;
};

/**
 * API Fetch for WP
 * @param {object} args
 */
export const getStoreData = () => select("wprf-store");

export const apiFetch = (params) => {
    let args = { ...params, method: "POST" };
    return wpFetch(args);
};

export const processAjaxData = (data) => {
    let newData = {};
    Object.keys(data).map((item) => {
        if (data[item].indexOf("@") === 0) {
            let eligibleKey = data[item].substr(1);
            if (eligibleKey != "") {
                newData[item] = getStoreData().getFieldValue(eligibleKey);
            }
        } else {
            newData[item] = data[item];
        }
    });
    return newData;
};
