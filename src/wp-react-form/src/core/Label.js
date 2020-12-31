import React from "react";
import classNames from "classnames";
import Image from "./Image";

const Label = (props) => {
	const componentClasses = classNames("wprf-input-label", props?.className);

	return (
		<label htmlFor={props?.htmlFor} className={componentClasses}>
			{!props?.src && props?.children}
			{props?.src && (
				<Image
					className="wprf-label-image"
					src={props.src}
					alt={props?.label}
				/>
			)}
		</label>
	);
};

export default Label;
