import { ColorPicker as WPColorPicker } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { useEffect, useRef, useState } from "react";
import { withLabel } from "../core/hooks";

const ColorPicker = (props) => {
	const { value, name, id, onChange } = props;
	const [showPicker, setShowPicker] = useState(false);
	const [color, setColor] = useState(value || null);
	const [defaultColor, setDefaultColor] = useState(value || null);
	const closeRef = useRef(null);

	useEffect(() => {
		if (value) setDefaultColor(value);
		else setDefaultColor("#ffffff00");
	}, []);

	const handleCloseRef = (ref) => {
		useEffect(() => {
			const handleClickOutside = (ev) => {
				if (ref.current && !ref.current.contains(ev.target)) {
					setShowPicker(false);
				}
			};
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	};

	useEffect(() => {
		onChange({
			target: {
				type: "colorpicker",
				name,
				value: color,
			},
		});
	}, [color]);

	handleCloseRef(closeRef);

	return (
		<>
			<div className="wprf-colorpicker-wrap" ref={closeRef}>
				<div
					className="wprf-colorpicker-screen"
					onClick={() => setShowPicker(!showPicker)}
				>
					<input type="hidden" value={value} name={name} id={id} />
					<span className="wprf-picker-code">
						{value || defaultColor}
					</span>
					<span
						className="wprf-picker-display"
						style={{ backgroundColor: value }}
					></span>
				</div>
				{showPicker && (
					<div className="wprf-colorpicker">
						<WPColorPicker
							color={value || defaultColor}
							onChangeComplete={(event) => setColor(event.hex)}
						/>
						<div className="wprf-colorpicker-reset-wrap">
							<button
								className="wprf-colorpicker-reset"
								onClick={(e) => {
									e.preventDefault();
									setColor(defaultColor);
									setShowPicker(false);
								}}
							>
								{props?.reset_text ??
									__("Reset", "betterdocs")}
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default withLabel(ColorPicker);
