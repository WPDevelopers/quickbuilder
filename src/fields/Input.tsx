import { Button } from "@wordpress/components";
import copy from "copy-to-clipboard";
import React, { useCallback, useEffect, useState } from 'react';
import { addFilter } from "@wordpress/hooks";
import { withLabel } from '../core/hooks';
import { validFieldProps } from '../core/utils';

const _Input = (props, ref?) => {
	const type = props.type ? props.type : 'text';
	const validProps = validFieldProps({...props, type}, ['is_pro', 'visible', 'trigger', 'copyOnClick', 'disable', 'parentIndex', 'context', 'badge', 'popup', 'tags']);
	const handleChange = (event) => {
		console.log(props);

		return validProps.onChange(event, { popup: props?.popup, isPro: !!props.is_pro })
	};

	if (validProps.type === 'checkbox') {
		if (validProps?.name) {
			validProps.checked = validProps?.checked || validProps?.value;
		}
	}

	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		let  CopyInterval;
		if (isCopied) {
			CopyInterval = setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		}
		return () => CopyInterval && clearTimeout(CopyInterval);
	}, [isCopied])




	if (!props.is_pro && props?.copyOnClick && props?.value) {
		const copyMessage = props?.copyMessage || "Click To Copy!";
		const copiedMessage = props?.copiedMessage || "Copied!";
		const handleCopy = () => {
			copy(props.value, {
				format: 'text/plain',
				onCopy: () => {
					setIsCopied(true);
				},
			});
		};

		return <span className="wprf-clipboard-wrapper">
			{React.createElement("input", { ...validProps, onChange: handleChange })}
			<span className="wprf-clipboard-tooltip">
				<span className="wprf-clipboard-tooltip-text">{isCopied ? copiedMessage : copyMessage}</span>
			<Button className="wprf-copy-icon" onClick={() => handleCopy()}>Copy</Button>
			</span>
		</span>;
	}


	return React.createElement('input', {
		...validProps, onChange: handleChange
	})
}

_Input.defaultProps = {
	type: 'text'
}

export const GenericInput = React.memo(_Input);
const Input = withLabel(React.memo(_Input));
export default Input;

addFilter('custom_field', 'wprf', (field, type, props) => {
	if (type === 'text' || type === 'radio' || type === 'email' || type === 'range' || type === 'number' || type === 'hidden') {
		return <Input {...props} />
	}
	return field;
});
