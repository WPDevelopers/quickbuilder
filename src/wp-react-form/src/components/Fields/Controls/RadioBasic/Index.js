import React from "react";
import { useInstanceId } from "@wordpress/compose";
import Input from "../Input/Input";
import Label from "../../../../core/Label";

import "./radio-basic.scss";

function Index({ name, label, options, onChange, value }) {
	let savedValue = value;

	const instanceID = useInstanceId(Index);

	return (
		<>
			<h4 class="wprf-input-label">{label}</h4>
			<div className="wprf-input-radio-set-wrap">
				{options.map(({ label, value }, index) => (
					<div className="wprf-input-radio-set" key={index}>
						<Input
							type="radio"
							checked={value === savedValue}
							unique_id={`${instanceID}-${index}`}
							value={value}
							name={name}
							onChange={(event) => onChange(event.target.value)}
						/>
						<Label
							htmlFor={`wprf-input-radio-${instanceID}-${index}`}
							label={label}
						/>
					</div>
				))}
			</div>
		</>
	);
}

export default Index;
