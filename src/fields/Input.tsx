import { Button } from "@wordpress/components";
import copy from "copy-to-clipboard";
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useBuilderContext, withLabel } from '../core/hooks';
import { validFieldProps } from '../core/utils';
const Input = (props, ref?) => {
	const type = props.type ? props.type : 'text';
	const validProps = validFieldProps({...props, type}, ['is_pro', 'visible', 'trigger', 'copyOnClick', 'disable', 'parentIndex', 'context', 'badge', 'popup', 'tags']);
	const handleChange = (event) => validProps.onChange(event, { popup: props?.popup, isPro: !!props.is_pro });
	const localRef = useRef(null);
	const inputRef = ref?.current ? ref : localRef;
	const builderContext = useBuilderContext();

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

	const handleNumSuggestion = useCallback((e) => {
		const value = e?.target?.getAttribute("data-num-sug");
		builderContext.setFieldValue( validProps.name, value);
	}, [validProps]);



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

	return <span>
		{React.createElement('input', {
			...validProps, onChange: handleChange, ref: inputRef
		})}
		{validProps?.suggestions && validProps?.suggestions.length > 0 &&
			<div className="wprf-num-suggestions">
				{validProps?.suggestions?.map((item, index) => {
					return <span onClick={handleNumSuggestion} data-num-sug={item.value}>{item.value + ' ' + item.unit}</span>
				})}
			</div>
		}
	</span>;
}


export const GenericInput = React.memo(React.forwardRef(Input));
export default withLabel(React.memo(Input));
