import React from "react";
import classNames from "classnames";

const Input = (props) => {
	if (!props?.type) {
		throw Error("No Type( :type ) Defined");
	}
	if (!props?.name) {
		throw Error("No Name( :name ) Defined");
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
		{
			[`wprf-input-${props.type}`]: props?.type ?? false,
			[`wprf-${props?.size}`]: props?.size,
		},
		props?.className,
	]);

	if (props.type === "textarea") {
		return <textarea {...props} id={id} className={componentClasses} />;
	}

	return <input {...props} id={id} className={componentClasses} />;
};

export default Input;
