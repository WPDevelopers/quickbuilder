import React from "react";
import "./radio-basic.scss";

function Index({ classes, name, label, options, onChange }) {
	return (
		<div className={`wprf-control ${classes}`}>
			<h4 class="wprf-input-label">
				{label}
			</h4>
			<div className="wprf-input-radio-set-wrap">
				{options.map(({ label, value }, index) => (
					<div className="wprf-input-radio-set">
						<input
							key={index}
							type="radio"
							id={`wprf-input-radio-${index}`}
                            className="wprf-input-field wprf-input-radio"
                            value={value}
							name={name}
							onChange={onChange}
						/>
						<label className="wprf-input-radio-label" htmlFor={`wprf-input-radio-${index}`}>{label}</label>
					</div>
				))}
			</div>
		</div>
	);
}

export default Index;
