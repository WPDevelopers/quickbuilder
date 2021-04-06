import React, { useCallback } from 'react'
import { withLabel } from '../core/hooks';
import { validFieldProps } from '../core/utils';

const Input = (props) => {
    const validProps = validFieldProps(props, ['is_pro', 'visible']);
    const handleChange = useCallback((event) => validProps.onChange(event, { isPro: !!props.is_pro }), [validProps?.value]);
    return React.createElement('input', { ...validProps, onChange: handleChange })
}

Input.defaultProps = {
    type: 'text'
}

export default withLabel(React.memo(Input));