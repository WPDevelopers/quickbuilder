import React from 'react'

const Input = (props) => {
    // console.log("Input Props: ", props);

    return React.createElement('input', { ...props })
}

Input.defaultProps = {
    type: 'text'
}

export default Input;