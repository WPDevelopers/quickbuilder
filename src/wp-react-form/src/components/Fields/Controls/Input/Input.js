import React from "react";
import classNames from "classnames";

const Input = (props) => {
	if (!props?.type) {
		throw "No Type( :type ) Defined";
	}
	if (!props?.name) {
		throw "No Name( :name ) Defined";
	}
	let id;
	if (!props?.id) {
		id = `wprf-input-${props.type}`;
		if (props?.unique_id) {
			id = `${id}-${props.unique_id}`;
		}
	} else {
		id = props.id;
	}

	const componentClasses = classNames([
		"wprf-input-field",
		{ [`wprf-input-${props.type}`]: props?.type ?? false },
		props?.className,
		props?.size,
	]);

	return <input {...props} id={id} className={componentClasses} />;
};

export default Input;
