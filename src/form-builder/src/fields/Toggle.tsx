import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { Column, Row } from '../..';
import { isObject } from '../core/utils';
import { GenericToggle } from './helpers'

export const Toggle = (props) => {
    const { options, value, multiple, style: prevStyles } = props;
    let styles = {
        column: 4,
        ...prevStyles,
    };


    if (multiple) {
        console.log("props toggles", props);

        const [localState, setLocalState] = useState({});
        const handleChange = (event) => {
            const target = event.target ? event.target : event.currentTarget;
            setLocalState(prevState => ({ ...prevState, [target.value]: target.checked }))
        }

        useEffect(() => {
            props.onChange({
                target: {
                    type: 'toggle',
                    name: props.name,
                    value: localState,
                    multiple: true,
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

        return <div className="wprf-toggle-wrapper wprf-control">
            <Row>
                {options.map(item => {
                    return (
                        <Column key={item.value} column={styles.column}>
                            <GenericToggle
                                {...{
                                    ...item,
                                    id: item.value,
                                    checked: localState?.[item.value] ? value : !!localState?.[item.value],
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

    return <GenericToggle {...props} />
}

export default Toggle;