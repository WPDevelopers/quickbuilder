import React, { useState, useEffect } from "react";
import { RangeControl, Button } from "@wordpress/components";
import "./slider.scss";
import Label from "../../../../core/Label";

function Index({
	label,
	name,
	units,
	defaults,
	onChange,
	onReset,
	tooltip,
	reset,
	value,
	...rest
}) {
	const { unit } = defaults || {};
	const [isValue, setValue] = useState(value ?? rest?.min ?? 0);
	const [sunit, setSunit] = useState(unit || "px");

	useEffect(() => {
		if (isValue >= 0) {
			units
				? onChange({ value: isValue, unit: sunit })
				: onChange(isValue);
		}
		if (isValue === undefined && (reset ?? true)) {
			onReset(name);
		}
	}, [isValue]);

	return (
		<>
			<div className={`wprf-slider-wrap`}>
				<div className="wprf-slider-control-head">
					<Label htmlFor={name} label={label} />
					{typeof units === "object" && units.length > 0 && (
						<div className="wprf-slider-units">
							{units.map((unit, index) => (
								<Button
									key={index}
									isSmall
									isPrimary
									onClick={() => setSunit(unit)}
									className={
										unit == sunit ? "unit-active" : ""
									}
								>
									{unit}
								</Button>
							))}
						</div>
					)}
				</div>
				<div className={`wprf-slider-control`}>
					<RangeControl
						{...rest}
						allowReset={reset ?? true}
						value={isValue}
						showTooltip={tooltip ?? false}
						onChange={(value) => setValue(value)}
					/>
				</div>
			</div>
		</>
	);
}

export default Index;
