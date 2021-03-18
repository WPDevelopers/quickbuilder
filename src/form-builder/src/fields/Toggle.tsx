import React from 'react'
import classNames from "classnames";
import Field from '../core/Field';
import { Label } from '../core/components';

export const Toggle = (props) => {

    const { styles: prevStyles, field, meta, helpers } = props;
    const { label, value } = field;

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
            "wprf-checked": Boolean(value),
            [`wprf-label-position-${styles?.label?.position}`]: styles?.label
                ?.position,
        },
        props?.classes
    );

    return (
        <div className={componentClasses}>
            {styles?.label?.position === "left" && <span>{label}</span>}
            <Field meta={meta} helpers={helpers} field={{ ...field, type: 'checkbox' }} />
            <Label htmlFor={field.id} />
            {styles?.label?.position === "right" && <span>{label}</span>}
        </div>
    );
}

export default Toggle;