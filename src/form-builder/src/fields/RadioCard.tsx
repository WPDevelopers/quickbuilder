import React, { useEffect } from "react";
import { useInstanceId } from "@wordpress/compose";
import classNames from "classnames";
import { Row, Column, Label } from '../core/components';

import "../scss/radio-card.scss";
import useOptions from "../core/hooks/useOptions";
import { GenericInput } from ".";
import { validFieldProps } from "../core/utils";
import { useBuilderContext, withLabel } from "../core/hooks";


const RadioCard = (props) => {
    const builderContext = useBuilderContext();
    const { options, option } = useOptions(props, 'options');

    if (!options) {
        throw new Error('#options is a required arguments for RadioCard field.');
    }

    const instanceId = useInstanceId(RadioCard);

    const componentClasses = classNames([
        "wprf-control",
        "wprf-radio-card",
        "wprf-input-radio-set-wrap",
        props?.className,
    ]);

    const styles = { ...props?.style };
    const validProps = validFieldProps(props, ['options', 'placeholder', 'style', 'trigger']);

    useEffect(() => {
        props.onChange({
            target: {
                type: 'radio-card',
                name: props.name,
                value: option
            }
        })
    }, [option])

    return (
        <div className={componentClasses}>
            <Row>
                {options.map(
                    ({ label, value, icon, is_pro, ...rest }, index) => (
                        <Column column={+rest?.column || 4} key={index}>
                            <div
                                className={classNames(
                                    "wprf-input-radio-option",
                                    {
                                        "wprf-option-has-image": icon ?? false,
                                        "wprf-option-selected": value == option,
                                    }
                                )}
                            >
                                <Label
                                    className={classNames({
                                        "wprf-label-has-image": icon ?? false,
                                        [`wprf-size-${styles.size}`]: (icon && styles?.size) ?? false
                                    })}
                                    htmlFor={`wprf-input-radio-${instanceId}-${index}`}
                                    src={icon}
                                    badge={{
                                        label: is_pro ? 'Pro' : 'Free',
                                        value: is_pro,
                                        active: Boolean(builderContext.is_pro_active),
                                    }}
                                >
                                    {label}
                                </Label>
                                <GenericInput
                                    {...validProps}
                                    is_pro={is_pro}
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

export default withLabel(RadioCard);