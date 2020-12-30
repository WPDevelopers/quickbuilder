import React, { useState } from "react";
import { Dashicon } from "@wordpress/components";
import Field from "../../Field";

import "./typography.scss";

function Index({ label }) {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className={`wprf-typography-wrap`}>
				{show && (
					<div className="wprf-typography-modal">
						<div className="wprf-fieldset-font-family">
							<h5>Font Family</h5>
							<Field
								type="select"
								options={[
									{ label: "Male", value: "male" },
									{ label: "Female", value: "female" },
									{ label: "Others", value: "others" },
								]}
							/>
						</div>
						<div className="wprf-fieldset-font-size">
							<Field
								label="Font Size"
								type="slider"
								units={["px", "%", "em"]}
								max={100}
							/>
						</div>
						<div className="wprf-fieldset-font-weight">
							<h5>Font Weight</h5>
							<Field
								type="select"
								options={[
									{ label: "Lighter", value: "lighter" },
									{ label: "Normal", value: "normal" },
									{ label: "Bold", value: "bold" },
									{ label: "Bolder", value: "bolder" },
								]}
							/>
						</div>
						<div className="wprf-fieldset-text-transform">
							<h5>Text Transform</h5>
							<Field
								type="select"
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

						<div className="wprf-fieldset-text-decoration">
							<h5>Text Decoration</h5>
							<Field
								type="select"
								options={[
									{ label: "Initial", value: "initial" },
									{
										label: "Overline",
										value: "overline",
									},
									{
										label: "Line through",
										value: "line-through",
									},
									{
										label: "Underline",
										value: "underline",
									},
									{
										label: "Underline Overline",
										value: "underline-overline",
									},
								]}
							/>
						</div>

						<div className="wprf-fieldset-letter-spacing">
							<Field
								label="Letter"
								type="slider"
								units={["px", "%", "em"]}
								max={100}
							/>
						</div>

						<div className="wprf-fieldset-line-height">
							<Field
								label="Line Height"
								type="slider"
								units={["px", "%", "em"]}
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
