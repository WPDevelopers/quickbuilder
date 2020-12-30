import React, { useState } from "react";
import { RangeControl, Button } from "@wordpress/components";
import "./slider.scss";

function Index({ label, name, min, max, units, defaults }) {
	const { value, unit } = defaults || {};
	const [svalue, setValue] = useState(value || 0);
	const [sunit, setSunit] = useState(unit || "");

	return (
		<>
			<div className={`wprf-slider-wrap`}>
				<div className="wprf-slider-control-head">
					<label htmlFor={name} className={`wprf-slider-label`}>
						{label}
					</label>
					{units && (
						<div className="wprf-slider-units">
							{units.map((unit) => (
								<button
									onClick={() => setSunit(unit)}
									className={
										unit == sunit ? "unit-active" : ""
									}
								>
									{unit}
								</button>
							))}
						</div>
					)}
				</div>
				<div className={`wprf-slider-control`}>
					<RangeControl
						min={min}
						max={max}
						value={svalue}
						onChange={(svalue) => setValue(svalue)}
					/>
					<button
						className="wprf-slider-control-reset-button"
						onClick={() => setValue(0)}
					>
						Reset
					</button>
				</div>
			</div>
		</>
	);
}

export default Index;
