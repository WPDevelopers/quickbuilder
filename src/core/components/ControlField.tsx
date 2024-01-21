import { __ } from "@wordpress/i18n";
import React, { useEffect, useState } from "react";
const ControlField = ({
	position,
	description: descriptionText,
	renderComponent,
	help,
	enableDisableActive = false,
	type = undefined,
	value = false,
}) => {
	const [description, setDescription] = useState(descriptionText);

	useEffect(() => {
		if (type === "toggle" && enableDisableActive) {
			if (value) {
				setDescription(
					`${__(`Enabled`, "betterdocs")} ${descriptionText ?? ""}`
				);
			} else {
				setDescription(
					`${__(`Disabled`, "betterdocs")} ${descriptionText ?? ""}`
				);
			}
		}
	}, [value]);

	return (
		<div className="wprf-control-field">
			{position === "left" && description && (
				<p
					className="wprf-description"
					dangerouslySetInnerHTML={{
						__html: description,
					}}
				></p>
			)}
			{renderComponent()}
			{position === "right" && description && (
				<p
					className="wprf-description"
					dangerouslySetInnerHTML={{
						__html: description,
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
