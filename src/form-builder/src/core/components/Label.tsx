import React from "react";
import classNames from "classnames";
import { Image } from ".";

const Label = (props) => {
    const componentClasses = classNames("wprf-input-label", props?.className);

    return (
        <label htmlFor={props?.htmlFor} className={componentClasses}>
            {
                props?.badge?.value &&
                <div className="wprf-badge">
                    <sup className={classNames("wprf-badge-item", {
                        'wprf-badge-active': props?.badge?.active
                    })}>{props?.badge?.label}</sup>
                </div>
            }

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
