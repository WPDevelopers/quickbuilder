import React, { useCallback } from 'react'
import { addFilter } from "@wordpress/hooks";
import { withLabel } from '../core/hooks';
import { validFieldProps } from '../core/utils';

const _Textarea = (props) => {
    const validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context']);
    const handleChange = useCallback((event) => validProps.onChange(event, { isPro: !!props.is_pro }), [validProps?.value]);
    return React.createElement('textarea', { ...validProps, onChange: handleChange, rows: 5 })
}


export const GenericTextarea = React.memo(_Textarea);
const Textarea = withLabel(React.memo(_Textarea));
export default Textarea;

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('textarea' === type) {
    return <Textarea {...props} />;
  }
  return field;
});
