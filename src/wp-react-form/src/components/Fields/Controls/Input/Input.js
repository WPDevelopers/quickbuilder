import React from "react";

const Input = (props) => {
	if (!props?.type) {
		return <p>No Type( type ) Defined</p>;
	}

	let id = `wprf-input-${props.type}`;
	if (props?.unique_id) {
		id = `${id}-${props.unique_id}`;
	}

	return (
		<input
			id={id}
			className={`wprf-input-field wprf-input-${props.type}`}
			{...props}
		/>
	);
};

export default Input;
