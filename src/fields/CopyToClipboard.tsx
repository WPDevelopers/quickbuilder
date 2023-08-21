import { Button } from "@wordpress/components";
import copy from "copy-to-clipboard";
import React, { useCallback, useEffect, useState } from "react";
import { ControlLabel } from "../core/components";
import { withLabel } from "../core/hooks";
import { validFieldProps } from "../core/utils";
const CopyToClipboard = (props) => {
	const validProps = validFieldProps(props, [
		"is_pro",
		"visible",
		"trigger",
		"descriptionCopyable",
		"disable",
		"parentIndex",
		"context",
		"badge",
		"popup",
	]);

	const handleChange = useCallback(
		(event) =>
			validProps.onChange(event, {
				popup: props?.popup,
				isPro: !!props.is_pro,
				originProps: props,
			}),
		[validProps?.value]
	);

	const [isCopied, setIsCopied] = useState(false);
	const [isDescriptionCopied, setIsDescriptionCopied] = useState(false);

	useEffect(() => {
		let CopyInterval;
		if (isCopied) {
			CopyInterval = setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		}
		return () => CopyInterval && clearTimeout(CopyInterval);
	}, [isCopied]);

	useEffect(() => {
		let DescriptionCopyInterval;
		if (isDescriptionCopied) {
			DescriptionCopyInterval = setTimeout(() => {
				setIsDescriptionCopied(false);
			}, 2000);
		}
		return () =>
			DescriptionCopyInterval && clearTimeout(DescriptionCopyInterval);
	}, [isDescriptionCopied]);

	const handleCopy = () => {
		copy(props.value, {
			format: "text/plain",
			onCopy: () => {
				setIsCopied(true);
			},
		});
	};

	const handleDescriptionCopy = () => {
		copy(props.description, {
			format: "text/plain",
			onCopy: () => {
				setIsDescriptionCopied(true);
			},
		});
	};

	return (
		<span className="wprf-copy-to-clipboard-wrapper">
			<div className="wprf-copy-to-clipboard-header">
				<ControlLabel {...props} />
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
						Copy
					</Button>
				</span>
			</div>
			<div className="wprf-copy-to-clipboard-body">
				{React.createElement("input", {
					...validProps,
					onChange: handleChange,
				})}
			</div>
			<div className="wprf-copy-to-clipboard-footer">
				{props?.description && props?.descriptionLabel && (
					<i
						dangerouslySetInnerHTML={{
							__html: props?.descriptionLabel,
						}}
					></i>
				)}
				{props?.description ? (
					props?.descriptionCopyable ? (
						<div
							className={`wprf-clipboard-tooltip ${
								isDescriptionCopied ? "active" : ""
							}`}
						>
							<span className="wprf-clipboard-tooltip-text">
								<span>Copied</span>
							</span>
							<p
								className="wprf-description"
								onClick={() => handleDescriptionCopy()}
								dangerouslySetInnerHTML={{
									__html: props?.description,
								}}
							></p>
						</div>
					) : (
						<p
							className="wprf-description"
							dangerouslySetInnerHTML={{
								__html: props?.description,
							}}
						></p>
					)
				) : (
					""
				)}
			</div>
		</span>
	);
};

export const GenericCopyToClipboard = withLabel(React.memo(CopyToClipboard));
export default React.memo(CopyToClipboard);
