import React from "react";
import { useInstanceId } from "@wordpress/compose";
import withConditionedFields from "../../../../Hooks/withConditionedFields";
import Field from "../../../../core/Field";

import "./radio-card.scss";

function Index(props) {
	const { name, label, options, onChange, savedValue } = props;
	const instanceId = useInstanceId(Index);

	return (
		<>
			<h4 class="wprf-input-label">{label}</h4>
			<div className="wprf-input-radio-set-wrap wprf-radio-card">
				{options.map(({ label, value, icon, is_pro }, index) => (
					<div className="wprf-input-radio-set" key={index}>
						<Field
							type="radio"
							checked={value === savedValue}
							unique_id={`${instanceId}-${index}`}
							value={value}
							name={name}
							onChange={(event) =>
								onChange(event?.target?.value, { is_pro })
							}
						/>
						{/* <input
							type="radio"
							checked={value === savedValue}
							id={`wprf-input-radio-${instanceId}-${index}`}
							className="wprf-input-field wprf-input-radio"
							value={value}
							name={name}
							onChange={(event) =>
								onChange(event.target.value, { is_pro })
							}
						/> */}
						<label
							className={`wprf-input-radio-label ${
								icon ? "with-wprf-radio-card-image" : ""
							}`}
							htmlFor={`wprf-input-radio-${instanceId}-${index}`}
						>
							{icon ? <Image src={icon} alt={label} /> : label}
						</label>
					</div>
				))}
			</div>
		</>
	);
}

export default withConditionedFields(Index);
