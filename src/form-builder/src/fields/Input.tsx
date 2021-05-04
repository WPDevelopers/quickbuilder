import React, { useCallback } from 'react'
import { withLabel } from '../core/hooks';
import { validFieldProps } from '../core/utils';

const Input = (props) => {
    // console.log("Input", props);

    const validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context']);
    const handleChange = useCallback((event) => validProps.onChange(event, { isPro: !!props.is_pro }), [validProps?.value]);
    return React.createElement('input', { ...validProps, onChange: handleChange })
}

Input.defaultProps = {
    type: 'text'
}

export const GenericInput = React.memo(Input);
export default withLabel(React.memo(Input));