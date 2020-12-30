import React, { useState } from "react";
import { RangeControl, Button } from "@wordpress/components";
import "./slider.scss";

function Index({ label, name, min, max, value }) {
	const [fvalue, setValue] = useState(value);
	return (
		<>
			<div className={`wprf-slider-wrap`}>
				<label htmlFor={name} className={`wprf-slider-label`}>
					{label}
				</label>
				<div className={`wprf-slider-control`}>
					<RangeControl
                        min={min}
                        max={max}
						value={fvalue}
						onChange={(fvalue) => setValue(fvalue)}
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
