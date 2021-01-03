import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Dashicon, RangeControl } from "@wordpress/components";
import Select from "react-select";

import { FONTS, TRANSFORMS } from "./Fonts";
import "./typography.scss";

const handleValue = (prev, size, property) => {
	if (!property) {
		throw "Third Param css property-name should be given!";
	}
	let prevState = { ...prev };
	prevState = {
		...prevState,
		[property]: `${size.value}${size.unit}`,
	};
	return prevState;
};

function Index({ label, onChange, value }) {
	const [show, setShow] = useState(false);
	const [typographyValue, setTypographyValue] = useState(value);
	const [savedValue, setSavedValue] = useState({});

	const textTransforms = useMemo(() => TRANSFORMS, []);

	const typographySavedVal = (key) => {
		return typographyValue?.[key];
	};

	let fonts = [
		{ value: "", label: "Default" },
		{ value: "Arial", label: "Arial" },
		{ value: "Helvetica", label: "Helvetica" },
		{ value: "Times New Roman", label: "Times New Roman" },
		{ value: "Georgia", label: "Georgia" },
	];

	//Add Google Fonts
	Object.keys(FONTS).map((k) => {
		fonts.push({ value: k, label: k });
	});

	useEffect(() => {
		let selectedFonts = fonts.filter(
			(font) => font.value === typographySavedVal("font-family")
		);

		if (selectedFonts.length > 0) {
			setSavedValue((prev) => ({
				...prev,
				"font-family": selectedFonts?.[0],
			}));
		}

		let selectedFontsWeight = FONTS[typographySavedVal("font-family")]?.weight.filter( (weight) => weight.value === typographySavedVal("font-weight") );

		if (selectedFontsWeight?.length > 0) {
			setSavedValue((prev) => ({
				...prev,
				"font-weight": selectedFontsWeight?.[0],
			}));
		}

	}, [typographyValue]);

	// useEffect(() => {
	// 	if (show) {
	// 		onChange(typographyValue);
	// 	}
	// }, [typographyValue]);

	const onReset = useCallback(
		(name) => {
			let values = { ...typographyValue };
			if (values?.[name]) {
				delete values[name];
				setTypographyValue(values);
			}
		},
		[typographyValue]
	);

	return (
		<>
			<div className={`wprf-typography-wrap`}>
				{show && (
					<div className="wprf-typography-modal">
						<div className="wprf-typography-header">
							<h4>Typography</h4>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-font-family">
							<h5>Font Family</h5>
							<Select
								classNamePrefix="wprf-typography-select"
								isSearchable={true}
								name={`font-family`}
								isMulti={false}
								placeholder="Select Font Family"
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"font-family": option.value,
									}))
								}
								value={savedValue["font-family"]}
								options={fonts}
							/>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-font-size">
							<RangeControl
								label="Font Size"
								// units={["px", "%", "em"]}
								allowReset={true}
								max={100}
								// onChange={(size) =>
								// 	setTypographyValue((prev) =>
								// 		handleValue(prev, size, "font-size")
								// 	)
								// }
							/>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-font-weight">
							<h5>Font Weight</h5>
							<Select
								classNamePrefix="wprf-typography-select"
								isSearchable={true}
								name={`font-weight`}
								isMulti={false}
								placeholder="Select Font Weight"
								value={savedValue?.["font-weight"]}
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"font-weight": option.value,
									}))
								}
								options={
									FONTS[typographySavedVal("font-family")]
										?.weight
								}
							/>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-text-transform">
							<h5>Text Transform</h5>
							<Select
								classNamePrefix="wprf-typography-select"
								isSearchable={true}
								name={`text-transform`}
								isMulti={false}
								placeholder="Select Text Transform"
								value={typographySavedVal('text-transform')}
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"text-transform": option,
									}))
								}
								options={textTransforms}
							/>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-text-decoration">
							<h5>Text Decoration</h5>

							<Select
								classNamePrefix="wprf-typography-select"
								isSearchable={true}
								name={`text-decoration`}
								isMulti={false}
								placeholder="Select Text Decoration"
								value={typographySavedVal('text-decoration')}
								options={[
									{ label: "Initial", value: "initial" },
									{ label: "Overline", value: "overline" },
									{
										label: "Line through",
										value: "line-through",
									},
									{ label: "Underline", value: "underline" },
								]}
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"text-decoration": option,
									}))
								}
							/>
						</div>

						<div className="wprf-fieldset-control wprf-fieldset-letter-spacing">
							{/* <h5>Letter Spacing</h5> */}
							<RangeControl
								label="Letter Spacing"
								allowReset={true}
								max={100}
								// onReset={(name) => onReset("letter-spacing")}
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"letter-spacing": option,
									}))
								}
							/>
						</div>

						<div className="wprf-fieldset-control wprf-fieldset-line-height">
							<RangeControl
								label="Line Height"
								allowReset={true}
								max={100}
								onReset={(name) => onReset("line-height")}
								// onChange={(size) =>
								// 	setTypographyValue((prev) =>
								// 		handleValue(prev, size, "line-height")
								// 	)
								// }
							/>
						</div>
					</div>
				)}
				<div className="wprf-typography-trigger">
					{label}{" "}
					<button onClick={() => setShow(!show)}>
						<Dashicon icon="edit" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Index;
