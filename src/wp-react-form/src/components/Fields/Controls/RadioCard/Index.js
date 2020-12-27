import React from "react";
import "./radio-card.scss";

function Index({ name, label, options, onChange, value }) {
	let savedValue = value;
	return (
		<>
			<h4 class="wprf-input-label">{label}</h4>
			<div className="wprf-input-radio-set-wrap">
				{options.map(({ label, value }, index) => (
					<div className="wprf-input-radio-set">
						<input
							key={index}
							type="radio"
							checked={value === savedValue}
							id={`wprf-input-radio-${index}`}
							className="wprf-input-field wprf-input-radio"
							value={value}
							name={name}
							onChange={(event) => onChange(event.target.value)}
						/>
						<label
							className="wprf-input-radio-label"
							htmlFor={`wprf-input-radio-${index}`}
						>
							{label}
						</label>
					</div>
				))}
			</div>
		</>
	);
}

export default Index;
