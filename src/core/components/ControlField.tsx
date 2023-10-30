import { __ } from "@wordpress/i18n";
import React, { useEffect, useState } from "react";
const ControlField = ({
	position,
	description,
	renderComponent,
	help,
	enableDisableActive = false,
	type = undefined,
	value = false,
}) => {
	const [descriptionText, setDescriptionText] = useState("");

	// console.log(enableDisableActive);

	useEffect(() => {
		if (type === "toggle") {
			if (value) {
				setDescriptionText(__(`Disable`, "quickbuilder"));
			} else {
				setDescriptionText(__(`Enable`, "quickbuilder"));
			}
		}
	}, [value]);

	return (
		<div className="wprf-control-field">
			{position === "left" && description && (
				<p
					className="wprf-description"
					dangerouslySetInnerHTML={{
						__html: enableDisableActive
							? `${descriptionText} ${description}`
							: description,
					}}
				></p>
			)}
			{renderComponent()}
			{position === "right" && description && (
				<p
					className="wprf-description"
					dangerouslySetInnerHTML={{
						__html: enableDisableActive
							? `${descriptionText} ${description}`
							: description,
					}}
				></p>
			)}
			{help && (
				<p
					className="wprf-help"
					dangerouslySetInnerHTML={{ __html: help }}
				></p>
			)}
		</div>
	);
};
export default ControlField;
