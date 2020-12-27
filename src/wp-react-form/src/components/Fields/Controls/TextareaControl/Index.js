import React from "react";
import "./textarea.scss";

function Index({ id, name, label, value, onChange, ...rest }) {
	return (
		<>
			<label class="wprf-input-label" htmlFor={id}>
				{label}
			</label>
			<textarea
				type="text"
				id={id}
				className="wprf-input-field wprf-textarea-field"
				name={name}
				onChange={(event) => onChange(event.target.value)}
				{...rest}
			>
				{value}
			</textarea>
		</>
	);
}

export default Index;
