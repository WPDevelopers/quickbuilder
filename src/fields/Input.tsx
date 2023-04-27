import { Button } from "@wordpress/components";
import copy from "copy-to-clipboard";
import React, { useCallback, useEffect, useState } from 'react';
import { withLabel } from '../core/hooks';
import { validFieldProps } from '../core/utils';
const Input = (props) => {
	const validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'copyOnClick', 'disable', 'parentIndex', 'context', 'badge', 'popup', 'tags']);
	const handleChange = useCallback((event) => validProps.onChange(event, { popup: props?.popup, isPro: !!props.is_pro }), [validProps?.value]);

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

	if (props.tags) {
		const tags: {label: string, value:string}[] = Object.values(props.tags);
		const inputRef = React.useRef(null);

		const clicked = (tag) => {
			const input = inputRef.current;
			const start = input?.selectionStart ?? 0;
			const end = input?.selectionEnd ?? 0;
			const before = props.value.slice(0, start);
			const after = props.value.slice(end);
			const newValue = before.concat(tag.value, after);

			handleChange({
				target: {
					type: 'button',
					name: props.name,
					value: newValue
				}
			});
		};

		return <span className="wprf-tags-wrapper">
		  {React.createElement("input", { ...validProps, onChange: handleChange, ref: inputRef })}
		  {
			tags.map((tag, index) => {
			  return (
				<React.Fragment key={index}>
				  <span
					className="button button-secondary"
					title={tag.label}
					onClick={(e) => clicked(tag)}
				  >{tag.value}</span>
				</React.Fragment>
			  );
			})
		  }
		</span>;

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
