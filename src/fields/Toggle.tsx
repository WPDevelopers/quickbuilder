import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { Column, Row } from '../core/components';
import { isObject, sortingFields } from '../core/utils';
import { GenericToggle } from './helpers'

export const Toggle = (props) => {
    const { options: passedOptions, value, multiple, style: prevStyles } = props;
    const options = sortingFields(passedOptions);

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

    return <GenericToggle {...props} />
}

export default Toggle;