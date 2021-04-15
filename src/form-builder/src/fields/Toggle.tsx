import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { Column, Row } from '../..';
import { withStyles } from '../core/hooks';
import { GenericToggle } from './helpers'

export const Toggle = (props) => {
    const { options, value, multiple, style: prevStyles } = props;
    let styles = {
        column: 4,
        ...prevStyles,
    };


    if (multiple) {
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
                }
            });
        }, [localState])

        useEffect(() => {
            setLocalState(value);
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
                                    checked: !!localState?.[item.value],
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