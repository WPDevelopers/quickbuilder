import React from "react";
import classNames from "classnames";
import { Label } from "../../../../core";
import Input from "../Input/Input";

const Toggle = ({ label, name, value: checked, styles, ...rest }) => {
	const componentClasses = classNames(
		"wprf-toggle-wrap",
		`wprf-${styles.type}`,
		{
			"wprf-checked": checked,
			[`wprf-label-position-${styles?.label?.position}`]: styles?.label
				?.position,
		},
		rest?.classes
	);

	return (
		<div className={componentClasses}>
			{styles?.label?.position === "left" && <span>{label}</span>}
			<Input
				{...{
					id: rest?.id,
					checked,
					name,
					disabled: rest?.disabled,
					onChange: (evt) => rest.setChecked(evt.target.checked),
				}}
				type="checkbox"
			/>
			<Label htmlFor={name} />
			{styles?.label?.position === "right" && <span>{label}</span>}
		</div>
	);
};

export default Toggle;
