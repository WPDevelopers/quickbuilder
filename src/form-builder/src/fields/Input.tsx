import React from 'react'
import { executeChange } from '../core/utils';

const Input = (props) => {
    return React.createElement('input', { ...props })
}

Input.defaultProps = {
    type: 'text'
}

export default Input;