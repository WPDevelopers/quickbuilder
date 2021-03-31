import React, { useEffect } from 'react'
import { executeChange } from '../core/utils';

const Input = (props) => {

    // useEffect(() => {
    //     console.log("props.value", props.value, props);
    //     props.onChange({
    //         target: {
    //             type: props.type,
    //             name: props.name,
    //             value: props.value
    //         },
    //     })
    // }, [])

    return React.createElement('input', { ...props })
}

Input.defaultProps = {
    type: 'text'
}

export default Input;