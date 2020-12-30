import React from "react";
import Label from "../../../../core/Label";
import Input from "../Input/Input";
import "./checkbox.scss";

function Index({ id, name, label, onChange, value, ...rest }) {
	return (
		<>
			<Label htmlFor={id} right label={label}>
				<Input
					type="checkbox"
					id={id}
					name={name}
					onChange={(event) => onChange(event.target.checked)}
					checked={value}
				/>
			</Label>
		</>
	);
}

export default Index;
