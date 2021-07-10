import React from 'react'
import classNames from "classnames";
import { Label } from '../../core/components';
import { withLabel } from '../../core/hooks';
import { GenericInput } from '../.';

const GenericToggle = (props) => {
    const { style: prevStyles } = props;

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
        {
            [`wprf-${styles?.type}`]: styles?.type.length > 0,
            "wprf-checked": Boolean(props.checked),
            [`wprf-label-position-${styles?.label?.position}`]: styles?.label
                ?.position,
        },
        props?.classes
    );

    return (
        <div className={componentClasses}>
            <GenericInput {...{ ...props, type: 'checkbox', placeholder: undefined }} />
            <Label htmlFor={props.id} />
        </div>
    );
}

export default withLabel(GenericToggle);