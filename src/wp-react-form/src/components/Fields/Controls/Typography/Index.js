import React, { useState, useEffect, useCallback } from "react";
import { Dashicon, RangeControl } from "@wordpress/components";
import Select from "react-select";

import "./typography.scss";

/**
 * TODO: This control have to rewrite.
 */

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

// const selectStyle = {
// 	control: (style) => ({ ...style, minHeight: "auto", height: "auto" }),
// 	option: (style) => ({ ...style, minHeight: "auto", height: "auto" }),
// 	input: (style) => ({ ...style, minHeight: "auto", height: "auto" }),
// 	indicator: (style) => ({ ...style, minHeight: "auto", height: "auto" }),
// 	placeholder: (style) => ({ ...style, minHeight: "auto", height: "auto" }),
// 	singleValue: (style) => ({ ...style, minHeight: "auto", height: "auto" }),
// };

function Index({ label, onChange, value }) {
	const [show, setShow] = useState(false);
	const [typographyValue, setTypographyValue] = useState(value);
	const [savedValue, setSavedValue] = useState({});

	useEffect(() => {
		if (show) {
			onChange(typographyValue);
		}
		console.log("typographyValue", typographyValue);
	}, [typographyValue]);

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
									console.log("option", option)
								}
								// value={value}
								options={[
									{ label: "Male", value: "male" },
									{ label: "Female", value: "female" },
									{ label: "Others", value: "others" },
								]}
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
								value={{ label: "Normal", value: "normal" }}
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"font-weight": option,
									}))
								}
								options={[
									{ label: "Lighter", value: "lighter" },
									{ label: "Normal", value: "normal" },
									{ label: "Bold", value: "bold" },
									{ label: "Bolder", value: "bolder" },
								]}
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
								value={{ label: "None", value: "none" }}
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"text-transform": option,
									}))
								}
								options={[
									{ label: "None", value: "none" },
									{
										label: "Capitalize",
										value: "capitalize",
									},
									{
										label: "Upper Case",
										value: "upper-case",
									},
									{
										label: "Lower Case",
										value: "lower-case",
									},
								]}
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
								value={{ label: "Initial", value: "initial" }}
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
					<button onClick={() => setShow(!show)}>
						<Dashicon icon="edit" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Index;
