import React from "react";
import Label from "../../../../core/Label";
import Input from "../Input/Input";

function Index({ name, label, onChange, value, ...rest }) {
	return (
		<>
			<Label htmlFor={name}>{label}</Label>
			<Input
				type="number"
				name={name}
				onChange={(event) => onChange(+event.target.value)}
				value={value}
				{...rest}
			/>
		</>
	);
}

export default Index;
