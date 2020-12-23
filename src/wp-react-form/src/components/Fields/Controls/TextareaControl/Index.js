import React from "react";
import './textarea.scss';

function Index({ classes, name, label, value, onChange, ...rest }) {
	return (
		<div className={`wprf-control ${classes}`}>
			<label class="wprf-input-label" htmlFor={name}>{label}</label>
			<textarea type="text" id={name} className="wprf-input-field wprf-textarea-field" name={name} onChange={onChange} {...rest}>{value}</textarea>
		</div>
	);
}

export default Index;