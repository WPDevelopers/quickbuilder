import React from "react";
import "./text.scss";

function Index({ name, label, value, onChange, ...rest }) {
	return (
		<>
			<label class="wprf-input-label" htmlFor={name}>
				{label}
			</label>
			<input
				{...rest}
				type="text"
				id={name}
				className="wprf-input-field wprf-input-text-field"
				name={name}
				onChange={(event) => onChange(event.target.value)}
				value={value}
			/>
		</>
	);
}

export default Index;
