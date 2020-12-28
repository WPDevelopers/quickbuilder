import React from "react";
import "./checkbox.scss";

function Index({ id, name, label, onChange, value, ...rest }) {
	return (
		<>
			<label class="wprf-input-label" htmlFor={id}>
				<input
					{...rest}
					type="checkbox"
					id={id}
					className="wprf-input-field wprf-input-checkbox"
					name={name}
					onChange={(event) => onChange(event.target.checked)}
					checked={value}
				/>
				&nbsp;
				{label}
			</label>
		</>
	);
}

export default Index;
