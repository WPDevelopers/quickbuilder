import React from "react";
import Label from "../../../../core/Label";
import Input from "../Input/Input";
import "./checkbox.scss";

function Index({ label, onChange, value, ...rest }) {
	return (
		<>
			<Label htmlFor={rest?.id}>
				<Input
					type="checkbox"
					onChange={(event) => onChange(event.target.checked)}
					checked={value}
					{...rest}
				/>
				<span>{label}</span>
			</Label>
		</>
	);
}

export default Index;
