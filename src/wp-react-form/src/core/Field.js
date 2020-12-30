import React from "react";

const Field = (props) => {
	if (!props?.type) {
		return <p>No Type( type ) Defined</p>;
	}
	return (
		<input
			{...props}
			id={`wprf-input-${props.type}-${props.unique_id}`}
			className={`wprf-input-field wprf-input-${props.type}`}
		/>
	);
};

export default Field;
