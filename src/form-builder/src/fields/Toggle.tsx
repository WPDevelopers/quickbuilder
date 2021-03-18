import React from 'react'
import classNames from "classnames";
import Field from '../core/Field';
import { Label } from '../core/components';

export const Toggle = ({ label, styles: prevStyles, ...props }) => {

    let styles = {
        type: "card",
        label: {
            position: "right",
        },
        ...prevStyles,
    };

    const componentClasses = classNames(
        "wprf-toggle-wrap",
        `wprf-${styles?.type}`,
        {
            "wprf-checked": Boolean(props.value),
            [`wprf-label-position-${styles?.label?.position}`]: styles?.label
                ?.position,
        },
        props?.classes
    );

    // console.log("props", props)

    return (
        <div className={componentClasses}>
            {styles?.label?.position === "left" && <span>{label}</span>}
            <Field {...props} type="checkbox" />
            <Label htmlFor={props.id} />
            {styles?.label?.position === "right" && <span>{label}</span>}
        </div>
    );
}

export default Toggle;