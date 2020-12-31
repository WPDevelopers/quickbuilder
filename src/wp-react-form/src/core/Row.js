import React from "react";
import classNames from "classnames";

const Row = (props) => {
	const componentClasses = classNames(
		"wprf-row clearfix wprf-flex",
		props?.className
	);
	return <div className={componentClasses}>{props?.children}</div>;
};

export default Row;
