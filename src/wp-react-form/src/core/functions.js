import Swal from "sweetalert2";

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
