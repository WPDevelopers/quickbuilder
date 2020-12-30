import React from "react";
import { useInstanceId } from "@wordpress/compose";
import withConditionedFields from "../../../../Hooks/withConditionedFields";
import Input from "../Input/Input";
import Label from "../../../../core/Label";

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
						<Input
							type="radio"
							checked={value === savedValue}
							unique_id={`${instanceId}-${index}`}
							value={value}
							name={name}
							onChange={(event) =>
								onChange(event?.target?.value, { is_pro })
							}
						/>
						<Label
							className={icon ? "with-wprf-radio-card-image" : ""}
							htmlFor={`wprf-input-radio-${instanceId}-${index}`}
							label={label}
							src={icon}
						/>
					</div>
				))}
			</div>
		</>
	);
}

export default withConditionedFields(Index);
