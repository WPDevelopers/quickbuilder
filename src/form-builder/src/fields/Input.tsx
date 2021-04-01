import React, { useCallback } from 'react'
import { withLabel } from '../core/hooks';
import { validFieldProps } from '../core/utils';

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


    const validProps = validFieldProps(props, ['is_pro']);
    const handleChange = useCallback((event) => validProps.onChange(event, { isPro: !!props.is_pro }), [validProps?.value]);
    return React.createElement('input', { ...validProps, onChange: handleChange })
}

Input.defaultProps = {
    type: 'text'
}

export default withLabel(React.memo(Input));