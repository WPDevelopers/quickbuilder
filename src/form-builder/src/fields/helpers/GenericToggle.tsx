import React, { useMemo } from 'react'
import classNames from "classnames";
import { Label } from '../../core/components';
import { withLabel } from '../../core/hooks';
import { GenericInput } from '../.';
import { isObject, isString } from '../../core/utils';

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

    const isChecked = useMemo(() => {
        let _isChecked = false;
        if (props?.checked && isObject(props.checked) && isString(props?.value)) {
            _isChecked = props.checked[props.value]
        } else {
            if (!isString(props.value)) {
                _isChecked = props.value;
            }
        }
        return _isChecked;
    }, [props?.checked, props.value])

    const componentClasses = classNames(
        "wprf-toggle-wrap",
        {
            [`wprf-${styles?.type}`]: styles?.type.length > 0,
            "wprf-checked": Boolean(isChecked),
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