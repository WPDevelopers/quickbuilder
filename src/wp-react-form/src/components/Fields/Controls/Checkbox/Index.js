import React from "react";
import Label from "../../../../core/Label";
import Input from "../Input/Input";
import "./checkbox.scss";

function Index({ id, name, label, onChange, value, ...rest }) {
	return (
		<>
			<Label htmlFor={id}>
				<Input
					type="checkbox"
					id={id}
					name={name}
					onChange={(event) => onChange(event.target.checked)}
					checked={value}
					{...rest}
				/>
				{label}
			</Label>
		</>
	);
}

export default Index;
