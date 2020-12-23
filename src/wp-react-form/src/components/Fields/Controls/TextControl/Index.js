import React from "react";
import './text.scss';

function Index({ classes, name, label, value, onChange }) {
	return (
		<div className={`wprf-control ${classes}`}>
			<label class="wprf-input-label" htmlFor={name}>{label}</label>
			<input type="text" id={name} className="wprf-input-field wprf-input-text-field" name={name} onChange={onChange} value={value} />
		</div>
	);
}

export default Index;