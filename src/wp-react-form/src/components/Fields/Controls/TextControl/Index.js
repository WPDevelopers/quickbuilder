import { withSelect } from "@wordpress/data";
import React from "react";
import "./text.scss";

function Index({ id, name, label, value, onChange, ...rest }) {
	return (
		<>
			<label class="wprf-input-label" htmlFor={id}>
				{label}
			</label>
			<input
				{...rest}
				type="text"
				id={id}
				className="wprf-input-field wprf-input-text-field"
				name={name}
				onChange={(event) => onChange(event.target.value, name)}
				value={value}
			/>
		</>
	);
}

export default Index;
