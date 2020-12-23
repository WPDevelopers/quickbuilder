import React from "react";
import './checkbox.scss';

function Index({ classes, name, label, checked, onChange }) {
	return (
		<div className={`wprf-control ${classes}`}>
			<label class="wprf-input-label" htmlFor={name}><input type="checkbox" id={name} className="wprf-input-field wprf-input-checkbox" name={name} onChange={onChange} checked={checked} /> {label}</label>
		</div>
	);
}

export default Index;