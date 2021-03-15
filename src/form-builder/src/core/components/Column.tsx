import React from "react";
import classNames from "classnames";

const Column = (props) => {
    const componentClasses = classNames("wprf-column", props?.className, {
        [`wprf-column-${12 / props?.column}`]: props?.column,
    });
    return <div className={componentClasses}>{props?.children}</div>;
};

export default Column;