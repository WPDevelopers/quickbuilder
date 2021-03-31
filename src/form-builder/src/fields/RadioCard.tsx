import React, { useEffect } from "react";
import { useInstanceId } from "@wordpress/compose";
import classNames from "classnames";
import { Row, Column, Label, Field } from '../core/components';

import "../scss/radio-card.scss";
import useOptions from "../core/hooks/useOptions";
import { Input } from ".";
import { validFieldProps } from "../core/utils";


const RadioCard = (props) => {
    const { options, option } = useOptions(props, 'options');

    // if (name === 'themes') {
    //     console.log('RadioCard', options);
    // }

    if (!options) {
        throw new Error('#options is a required arguments for RadioCard field.');
    }

    // useEffect(() => {
    //     console.log("option", option);

    //     // helpers.setValue(name, option)
    // }, [option])

    const instanceId = useInstanceId(RadioCard);

    const componentClasses = classNames([
        "wprf-control",
        "wprf-radio-card",
        "wprf-input-radio-set-wrap",
        props?.className,
    ]);

    const validProps = validFieldProps(props, ['options']);

    return (
        <div className={componentClasses}>
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
                                    {label}
                                </Label>
                                <Input
                                    {...validProps}
                                    type="radio"
                                    value={value}
                                    checked={value === option}
                                    id={`wprf-input-radio-${instanceId}-${index}`}
                                />
                            </div>
                        </Column>
                    )
                )}
            </Row>
        </div>
    );
}

export default RadioCard;