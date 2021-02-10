import React from "react";
import { useInstanceId } from "@wordpress/compose";
import withConditionedFields from "../../../../Hooks/withConditionedFields";
import withFields from "../../../../Hooks/withFields";
import classNames from "classnames";

import Input from "../Input/Input";
import { Label, Row, Column } from "../../../../core";

import "./radio-card.scss";

function Index(props) {
	const { name, label, options, onChange, savedValue } = props;
	const instanceId = useInstanceId(Index);

	const componentClasses = classNames([
		"wprf-radio-card",
		"wprf-input-radio-set-wrap",
		props?.className,
	]);

	return (
		<>
			<h4 class="wprf-control-label">{label}</h4>
			<div className={componentClasses}>
				<Row>
					{options.map(
						({ label, value, icon, is_pro, trigger }, index) => (
							<Column column="4">
								<div
									className={classNames(
										"wprf-input-radio-option",
										{
											"wprf-option-selected":
												value === savedValue,
										}
									)}
									key={index}
								>
									<Input
										type="radio"
										checked={value === savedValue}
										unique_id={`${instanceId}-${index}`}
										value={value}
										name={name}
										onChange={(event) =>
											props.setValue({
												value: event.target.value,
												is_pro,
												trigger,
											})
										}
									/>
									<Label
										className={classNames({
											"wprf-label-has-image":
												icon ?? false,
										})}
										htmlFor={`wprf-input-radio-${instanceId}-${index}`}
										src={icon}
									>
										{label}
									</Label>
								</div>
							</Column>
						)
					)}
				</Row>
			</div>
		</>
	);
}

export default withConditionedFields(Index);
