import React, { useCallback } from "react";
import { withLabel } from "../core/hooks";
import { validFieldProps } from "../core/utils";
import copy from "copy-to-clipboard";
import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";

const CodeViewer = (props) => {
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
			copy(props.value, {
                format: 'text/plain',
				onCopy: () => {
					props.context.alerts.toast(
						"success",
						__(
							`Notification Alert has been copied to Clipboard.`,
							"notificationx"
						)
					);
				},
			});
		};
	}

	const ButtonText = props?.button_text ? props.button_text : "Click to Copy"

	return <span className="wprf-code-viewer">
		{React.createElement("textarea", { ...validProps, ...extraProps })}
		<Button className="wprf-copy-button">{ButtonText}</Button>
		</span>;
};

export const GenericInput = React.memo(CodeViewer);
export default withLabel(React.memo(CodeViewer));
