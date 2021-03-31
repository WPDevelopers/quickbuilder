import React from "react";
import classNames from "classnames";
import Image from "../Image";

const withLabel = (WrappedComponent) => {
    const WithLabel = (props) => {
        const componentClasses = classNames("wprf-label");
        let { label, id, name, type } = props;

        if (id == undefined) {
            id = name;
        }

        return (
            <div className="wprf-control-wrapper">
                <div className="wprf-control-label">
                    <label htmlFor={id}>{label}</label>
                </div>
                <div className="wprf-control-field">
                    <WrappedComponent {...props} id={id} />
                </div>
            </div>
        );
    }

    return WithLabel;
};

export default withLabel;