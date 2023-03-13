import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import { GenericInput, Input } from ".";
import { Column, Row } from "../core/components";
import { withLabel } from "../core/hooks";
import { isObject, isString, sortingFields } from "../core/utils";

function GenericCheckbox(props) {
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
        "wprf-checkbox-wrap",
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
            <GenericInput {...{ ...props, type: 'checkbox' }} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

function Checkbox(props) {
    const { options: passedOptions, value, multiple, style: prevStyles } = props;
    const options: {label: string, value: string, rules?:{}[]}[] = sortingFields(passedOptions);

    let styles = {
        column: 4,
        ...prevStyles,
    };


    if (multiple) {
        console.log(props);
        const [localState, setLocalState] = useState({});
        const handleChange = (event) => {
            const target = event.target ? event.target : event.currentTarget;
            setLocalState(prevState => ({ ...prevState, [target.value]: target.checked }))
            console.log({[target.value]: target.checked}, props);

        }

        useEffect(() => {
            props.onChange({
                target: {
                    type: 'checkbox',
                    name: props.name,
                    value: localState,
                }
            });
        }, [localState])

        useEffect(() => {
            if (!isObject(value)) {
                let lState = {};
                for (let option of options) {
                    lState[option.value] = value;
                }
                setLocalState(lState);
            } else {
                setLocalState(value);
            }
        }, [])

        return <div className="wprf-checkbox-wrapper wprf-control">
            <Row>
                {options.map(item => {
                    return (
                        <Column key={item.value} column={styles.column}>
                            <GenericCheckbox
                                {...{
                                    ...item,
                                    context: props?.context,
                                    id: item.value,
                                    checked: typeof localState[item.value] === 'undefined' ? true : (localState?.[item.value] ? value : !!localState?.[item.value]),
                                    type: 'checkbox',
                                    onChange: handleChange,
                                    style: styles
                                }}
                            />
                        </Column>
                    )
                })}
            </Row>
        </div>
    }

    return <GenericInput {...{...props, type: 'checkbox'}} />;
}

export default withLabel(Checkbox);