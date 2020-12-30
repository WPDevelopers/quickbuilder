import React from "react";

const Image = (props) => {
	if (!props?.src) {
		return <p>No Source( src ) Defined</p>;
	}
	return (
		<img
			className={`wprf-radio-card-image ${props?.classes ?? ``}`}
			src={props?.src}
			alt={props?.alt}
		/>
	);
};

export default Image;
