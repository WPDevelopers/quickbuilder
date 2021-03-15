import React from "react";
import classNames from "classnames";
import Image from "../Image";

const withLabel = (WrappedComponent) => {
    const WithLabel = (props) => {
        const componentClasses = classNames("wprf-input-label", props?.className);
        const id = props.name;
        return (
            <label htmlFor={id} className={componentClasses}>
                {!props?.src && props?.children}
                {props.label}
                <WrappedComponent id={id} {...props} />
                {/* {props?.src && (
                    <Image
                        className="wprf-label-image"
                        src={props.src}
                        alt={props?.label}
                    />
                )} */}
            </label>
        );
    }

    return WithLabel;
};

export default withLabel;