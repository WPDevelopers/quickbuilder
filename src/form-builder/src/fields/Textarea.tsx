import React, { useCallback } from 'react'
import { withLabel } from '../core/hooks';
import { validFieldProps } from '../core/utils';

const Textarea = (props) => {
    // console.log("Input", props);

    const validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context']);
    const handleChange = useCallback((event) => validProps.onChange(event, { isPro: !!props.is_pro }), [validProps?.value]);
    return React.createElement('textarea', { ...validProps, onChange: handleChange })
}


export const GenericInput = React.memo(Textarea);
export default withLabel(React.memo(Textarea));