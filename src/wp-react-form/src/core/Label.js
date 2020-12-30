import React from "react";
import Image from "./Image";

const Label = (props) => {
	return (
		<label
			{...props}
			className={`wprf-input-label ${props?.className ?? ""} ${
				props?.left
					? " wprf-label-left"
					: props?.right
					? " wprf-label-right"
					: ""
			}`}
		>
			{props?.left && !props?.src && props?.label}
			{props?.src && <Image src={props.src} alt={props?.label} />}
			{!props?.src && !props?.right && !props?.left && props?.label}
			{props?.children}
			{props?.right && !props?.src && props?.label}
		</label>
	);
};

export default Label;
