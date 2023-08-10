import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import copy from "copy-to-clipboard";
import React, { useCallback } from "react";
import { addFilter } from "@wordpress/hooks";
import { withLabel } from "../core/hooks";
import { validFieldProps } from "../core/utils";

const _CodeViewer = (props) => {
	const validProps = validFieldProps(props, [
		"is_pro",
		"visible",
		"trigger",
		"disable",
		"parentIndex",
		"context",
		"copyOnClick",
	]);
	const handleChange = useCallback(
		(event) => validProps.onChange(event, { isPro: !!props.is_pro }),
		[validProps?.value]
	);

	let extraProps = { onChange: handleChange, rows: 5 };

	if (!props.is_pro && props?.copyOnClick && props?.value) {
		extraProps["onClick"] = () => {
			const successText = props?.success_text ? props.success_text : __(`Copied to Clipboard.`, "notificationx")
			copy(props.value, {
                format: 'text/plain',
				onCopy: () => {
					props.context.alerts.toast("success", successText);
				},
			});
		};
	}

	const ButtonText = props?.button_text ? props.button_text : __("Click to Copy", "notificationx");

	return <span className="wprf-code-viewer">
		{React.createElement("textarea", { ...validProps, ...extraProps })}
		<Button className="wprf-copy-button">{ButtonText}</Button>
		</span>;
};

export const GenericCodeViewer = React.memo(_CodeViewer);
const CodeViewer = withLabel(React.memo(_CodeViewer));
export default CodeViewer;

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('codeviewer' === type) {
    return <CodeViewer {...props} />;
  }
  return field;
});
