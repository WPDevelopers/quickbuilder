import React from "react";
import classNames from "classnames";
import Image from "../Image";

const withLabel = (WrappedComponent) => {
    const WithLabel = (props) => {
        const componentClasses = classNames("wprf-label");
        const { label, id } = props.field;

        return (
            <label htmlFor={id} className={componentClasses}>
                {label}
                <WrappedComponent {...props} />
            </label>
        );
    }

    return WithLabel;
};

export default withLabel;