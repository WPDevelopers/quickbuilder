import { Button } from "@wordpress/components";
import copy from "copy-to-clipboard";
import React, { useEffect, useState } from "react";
import { withLabel } from "../core/hooks";
import { validFieldProps } from "../core/utils";

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
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		let CopyInterval;
		if (isCopied) {
			CopyInterval = setTimeout(() => {
				setIsCopied(false);
			}, 1000);
		}
		return () => CopyInterval && clearTimeout(CopyInterval);
	}, [isCopied]);

	const handleCopy = () => {
		copy(props.value, {
			format: "text/plain",
			onCopy: () => {
				setIsCopied(true);
			},
		});
	};

	return (
		<span className="wprf-code-viewer">
			<span className="wprf-code-viewer-header">{props?.label}</span>
			<span className="wprf-code-viewer-body">
				{React.createElement(
					"pre",
					{
						...validProps,
					},
					props?.code ?? (props?.default || props?.value)
				)}
				<span
					className={`wprf-clipboard-tooltip ${
						isCopied ? "active" : ""
					}`}
				>
					<span className="wprf-clipboard-tooltip-text">
						<span>Copied</span>
					</span>
					<Button
						className="wprf-copy-icon"
						onClick={() => handleCopy()}
					>
						<i className="btd-icon btd-duplicate"></i>
					</Button>
				</span>
			</span>
		</span>
	);
};

export const GenericInput = withLabel(React.memo(CodeViewer));
export default React.memo(CodeViewer);
