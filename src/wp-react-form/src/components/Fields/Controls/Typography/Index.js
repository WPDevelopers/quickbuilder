import React, { useState, useEffect, useCallback } from "react";
import { Dashicon } from "@wordpress/components";

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
						<h5>{label}</h5>
						<div className="wprf-fieldset-control wprf-fieldset-font-family">
							<Field
								label="Font Family"
								type="select"
								onChange={(option) =>
									console.log("option", option)
								}
								value={value}
								options={[
									{ label: "Male", value: "male" },
									{ label: "Female", value: "female" },
									{ label: "Others", value: "others" },
								]}
							/>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-font-size">
							<Field
								label="Font Size"
								type="slider"
								reset={false}
								units={["px", "%", "em"]}
								onChange={(size) =>
									setTypographyValue((prev) =>
										handleValue(prev, size, "font-size")
									)
								}
								max={100}
							/>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-font-weight">
							<Field
								label="Font Weight"
								type="select"
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"font-weight": option,
									}))
								}
								value={{ label: "Normal", value: "normal" }}
								options={[
									{ label: "Lighter", value: "lighter" },
									{ label: "Normal", value: "normal" },
									{ label: "Bold", value: "bold" },
									{ label: "Bolder", value: "bolder" },
								]}
							/>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-text-transform">
							<Field
								label="Text Transform"
								type="select"
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"text-transform": option,
									}))
								}
								value={{ label: "None", value: "none" }}
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
							<Field
								label="Text Decoration"
								type="select"
								onChange={(option) =>
									setTypographyValue((old) => ({
										...old,
										"text-decoration": option,
									}))
								}
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
							/>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-letter-spacing">
							<Field
								label="Letter Spacing"
								type="slider"
								units={["px", "%", "em"]}
								onReset={(name) => onReset("letter-spacing")}
								onChange={(size) =>
									setTypographyValue((prev) =>
										handleValue(
											prev,
											size,
											"letter-spacing"
										)
									)
								}
								max={100}
							/>
						</div>
						<div className="wprf-fieldset-control wprf-fieldset-line-height">
							<Field
								label="Line Height"
								type="slider"
								units={["px", "%", "em"]}
								onReset={(name) => onReset("line-height")}
								onChange={(size) =>
									setTypographyValue((prev) =>
										handleValue(prev, size, "line-height")
									)
								}
								max={100}
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
