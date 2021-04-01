import React, { useEffect, useState } from 'react'
import classNames from "classnames";
import { Column, Label, Row } from '../core/components';
import { withLabel } from '../core/hooks';
import { Input } from '.';

export const Toggle = (props) => {
    const { options, value, multiple } = props;

    let styles = {
        type: "", // card
        label: {
            position: "right",
        },
        column: 4,
        // ...prevStyles,
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

    if (multiple) {
        const [localState, setLocalState] = useState({});
        const handleChange = (event) => {
            const target = event.target ? event.target : event.currentTarget;
            setLocalState(prevState => ({ ...prevState, [target.value]: target.checked }))
        }

        useEffect(() => {
            // helpers.setValue(name, localState);
        }, [localState])

        useEffect(() => {
            setLocalState(value);
        }, [])

        return <div className="wprf-toggle-wrapper wprf-control">
            <Row>
                {options.map(item => {
                    return (
                        <Column key={item.value} column={styles.column}>
                            <div className={componentClasses}>
                                <Input
                                    {...{
                                        ...item,
                                        id: item.value,
                                        checked: !!localState?.[item.value],
                                        type: 'checkbox',
                                        onChange: handleChange
                                    }}
                                />
                                <Label htmlFor={item.value} />
                            </div>
                        </Column>
                    )
                })}
            </Row>
        </div>
    }

    return (
        <div className={componentClasses}>
            <Input {...{ ...props, type: 'checkbox', placeholder: undefined }} />
            <Label htmlFor={props.id} />
        </div>
    );
}

export default withLabel(Toggle);