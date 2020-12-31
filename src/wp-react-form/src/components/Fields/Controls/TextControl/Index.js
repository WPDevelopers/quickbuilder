import React from "react";
import Label from "../../../../core/Label";
import { Input } from "../../Controls";

import "./text.scss";

function Index({ id, name, label, value, onChange, ...rest }) {
	return (
		<>
			<Label htmlFor={name}>{label}</Label>
			<Input
				type="text"
				id={name}
				name={name}
				onChange={(event) => onChange(event.target.value)}
				value={value}
				{...rest}
			/>
		</>
	);
}

export default Index;
