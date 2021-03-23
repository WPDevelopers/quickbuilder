import React from "react";
import classNames from "classnames";
import Image from "../Image";

const withLabel = (WrappedComponent) => {
    const WithLabel = (props) => {
        const componentClasses = classNames("wprf-label");
        let { label, id, name, type } = props.field;

        if (id == undefined) {
            id = name;
        }

        return (
            <div>
                <div>
                    <label htmlFor={id} className={componentClasses}>
                        {label}
                    </label>
                </div>
                <div>
                    <WrappedComponent {...props} id={id} />
                </div>
            </div>
        );
    }

    return WithLabel;
};

export default withLabel;