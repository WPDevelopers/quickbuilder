import React, { useState, useEffect, useMemo } from "react";
import { __experimentalUnitControl as UnitControl } from "@wordpress/components";

const Slider = (props) => {
	const [value, setValue] = useState(props?.value);

	useEffect(() => {
		props?.setSliderValue({ [props?.name]: value });
	}, [value]);

	const units = useMemo(
		() => [
			{ value: "px", label: "px", default: 14 },
			{ value: "%", label: "%", default: 100 },
			{ value: "em", label: "em", default: 1 },
		],
		[]
	);

	return (
		<UnitControl
			label="Font Size"
			labelPosition="side"
			units={units}
			value={value}
			onChange={setValue}
		/>
	);
};

export default Slider;
