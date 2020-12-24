import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";
import "./colorpicker.scss";

function Index({ name, label, onChange, value }) {
	const [color, setColor] = useState(value);
	const [showPicker, setShowPicker] = useState(false);
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
		onChange(color);
    }, [color]);
    
    handleCloseRef(closeRef);

	return (
		<>
			<label htmlFor={name}>{label}</label>
			<div className="wprf-colorpicker-wrap" ref={closeRef}>
				<input type="hidden" value={color} name={name} id={name} />
				<button
					className="wprf-picker-display"
					style={{ backgroundColor: color }}
					onClick={() => setShowPicker(!showPicker)}
				>
					{" "}
				</button>
				{showPicker && (
					<ChromePicker
						color={color}
						onChange={(e) => setColor(e.hex)}
					/>
				)}
			</div>
		</>
	);
}

export default Index;
