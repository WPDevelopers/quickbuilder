import React, { useCallback } from 'react'
import { withLabel } from '../core/hooks';
import { validFieldProps } from '../core/utils';

const Input = (props) => {
    const validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context', 'badge']);
    const handleChange = useCallback((event) => validProps.onChange(event, { isPro: !!props.is_pro }), [validProps?.value]);

    if (validProps.type === 'checkbox') {
        validProps.checked = validProps.value;
    }

    return React.createElement('input', {
        ...validProps, onChange: handleChange
    })
}

Input.defaultProps = {
    type: 'text'
}

export const GenericInput = React.memo(Input);
export default withLabel(React.memo(Input));