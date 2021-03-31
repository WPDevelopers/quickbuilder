import React, { useCallback, useEffect } from 'react'
import { executeChange, validFieldProps } from '../core/utils';

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

    if (props.name === 'global_queue') {
        console.log('Input Props', props);
    }

    const validProps = validFieldProps(props, ['is_pro']);
    const handleChange = useCallback((event) => validProps.onChange(event, { isPro: props.is_pro }), []);
    return React.createElement('input', { ...validProps, onChange: handleChange })
}

Input.defaultProps = {
    type: 'text'
}

export default Input;