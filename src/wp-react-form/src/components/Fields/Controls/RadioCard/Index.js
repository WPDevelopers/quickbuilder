import React from "react";
import "./radio-card.scss";

function Index({ name, label, options, onChange, value }) {
	let savedValue = value;
	return (
		<>
			<h4 class="wprf-input-label">{label}</h4>
			<div className="wprf-input-radio-set-wrap">
				{options.map(({ label, value, icon }, index) => (
					<div className="wprf-input-radio-set" key={index}>
						<input
							type="radio"
							checked={value === savedValue}
							id={`wprf-input-radio-${value}`}
							className="wprf-input-field wprf-input-radio"
							value={value}
							name={name}
							onChange={(event) => onChange(event.target.value)}
						/>
						<label
							className="wprf-input-radio-label"
							htmlFor={`wprf-input-radio-${value}`}
						>
							{icon ? (
								<img
									className={`wprf-radio-card-image`}
									src={icon}
									alt={label}
								/>
							) : (
								label
							)}
						</label>
					</div>
				))}
			</div>
		</>
	);
}

export default Index;
