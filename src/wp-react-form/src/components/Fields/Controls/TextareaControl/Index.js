import React from "react";
import Label from "../../../../core/Label";
import Input from "../Input/Input";
import classNames from "classnames";

import "./textarea.scss";

function Index({ name, label, onChange, ...rest }) {
	return (
		<>
			<Label htmlFor={name}>{label}</Label>
			<Input
				type="textarea"
				{...{
					id: name,
					name,
					size: "large",
					rows: 5,
					className: classNames(rest?.className, {
						"resize-none": rest?.resize === false,
					}),
					onChange: (event) => onChange(event.target.value),
					...rest,
				}}
			/>
		</>
	);
}

export default Index;
