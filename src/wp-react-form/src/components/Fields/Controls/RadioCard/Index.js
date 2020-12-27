import React, { useEffect, useState } from "react";
import "./radio-card.scss";

function Index(props) {
	const { name, label, options, onChange, value, parentValue } = props;
	let savedValue = value;
	const [fields, setFields] = useState([]);

	useEffect(() => {
		if (options.length) {
			setFields(options);
		}
		if (parentValue && !options?.length) {
			setFields(options?.[parentValue]);
		}
	}, [parentValue]);

	return (
		<>
			<h4 class="wprf-input-label">{label}</h4>
			<div className="wprf-input-radio-set-wrap">
				{fields.map(
					({ label, value, icon, default: d, is_pro }, index) => (
						<div className="wprf-input-radio-set" key={index}>
							<input
								type="radio"
								checked={d ? true : value === savedValue}
								id={`wprf-input-radio-${value}`}
								className="wprf-input-field wprf-input-radio"
								value={value}
								name={name}
								onChange={(event) =>
									onChange(event.target.value, { is_pro })
								}
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
					)
				)}
			</div>
		</>
	);
}

export default Index;
