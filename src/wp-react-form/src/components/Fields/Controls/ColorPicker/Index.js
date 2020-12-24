import React, { useState, useEffect, useRef } from "react";
import { ColorPicker } from "@wordpress/components";
import "./colorpicker.scss";
import "./wp.scss";

function Index({ name, label, onChange, value }) {
	const [showPicker, setShowPicker] = useState(false);
	const [defaultValue] = useState(value);
	const closeRef = useRef(null);

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
		onChange(value);
	}, [value]);

	handleCloseRef(closeRef);

	return (
		<>
			<label htmlFor={name}>{label}</label>
			<div className="wprf-colorpicker-wrap" ref={closeRef}>
				<input type="hidden" value={value} name={name} id={name} />
				<span
					className="wprf-picker-display"
					style={{ backgroundColor: value, borderColor: value }}
					onClick={() => setShowPicker(!showPicker)}
				></span>
				{showPicker && (
					<>
						<button
							className="wprf-colorpicker-reset"
							onClick={(e) => {
								e.preventDefault();
								setShowPicker(false);
								onChange(defaultValue);
							}}
						>
							Reset
						</button>
						<ColorPicker
							color={value}
							onChangeComplete={(event) => onChange(event.hex)}
						/>
					</>
				)}
			</div>
		</>
	);
}

export default Index;
