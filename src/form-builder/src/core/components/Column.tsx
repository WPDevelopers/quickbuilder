import React from "react";
import classNames from "classnames";

const Column = (props) => {
    const componentClasses = classNames("wprf-column", props?.className, {
        [`wprf-column-${12 / props?.column}`]: props?.column && props.column !== 12,
        [`wprf-column-12`]: props.column === 12,
    });
    return <div className={componentClasses}>{props?.children}</div>;
};

export default Column;