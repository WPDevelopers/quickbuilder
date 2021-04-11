import React from 'react'
import classNames from "classnames";
import { Label } from '../../core/components';
import { withLabel } from '../../core/hooks';
import { Input, GenericInput } from '../.';

const GenericToggle = (props) => {
    const { value, style: prevStyles } = props;

    let styles = {
        type: "", // card
        label: {
            position: "right",
        },
        column: 4,
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
            <Input {...{ ...props, type: 'checkbox', placeholder: undefined }} />
            <Label htmlFor={props.id} />
        </div>
    );
}

export default withLabel(GenericToggle);