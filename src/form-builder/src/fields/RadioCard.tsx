import React, { useEffect } from "react";
import { useInstanceId } from "@wordpress/compose";
import classNames from "classnames";
import { Row, Column, Label, Field } from '../core/components';

import "../scss/radio-card.scss";
import useOptions from "../core/hooks/useOptions";


const RadioCard = (props) => {
    const { name, label, meta } = props;
    const { options, option } = useOptions(props, 'options');

    if (!options) {
        throw new Error('#options is a required arguments for RadioCard field.');
    }

    // useEffect(() => {
    //     console.log(props, option);
    // }, [option])

    const instanceId = useInstanceId(RadioCard);

    const componentClasses = classNames([
        "wprf-control",
        "wprf-radio-card",
        "wprf-input-radio-set-wrap",
        props?.className,
    ]);

    return (
        <div className={componentClasses}>
            <h4 className="wprf-control-label">{label}</h4>
            <Row>
                {options.map(
                    ({ label, value, icon }, index) => (
                        <Column column="4" key={index}>
                            <div
                                className={classNames(
                                    "wprf-input-radio-option",
                                    {
                                        "wprf-option-selected":
                                            value == option,
                                    }
                                )}
                            >
                                <Label
                                    className={classNames({
                                        "wprf-label-has-image":
                                            icon ?? false,
                                    })}
                                    htmlFor={`wprf-input-radio-${instanceId}-${index}`}
                                    src={icon}
                                >
                                    <Field
                                        type="radio"
                                        checked={value === option}
                                        id={`wprf-input-radio-${instanceId}-${index}`}
                                        value={value}
                                        name={name}
                                        meta={meta}
                                    />
                                    {label}
                                </Label>
                            </div>
                        </Column>
                    )
                )}
            </Row>
        </div>
    );
}

export default RadioCard;