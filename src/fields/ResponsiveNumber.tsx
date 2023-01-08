import React, { useState, useCallback } from "react";
import { withLabel } from "../core/hooks";
import { validFieldProps } from "../core/utils";

const ResponsiveNumber = (props) => {
	const validProps = validFieldProps(props, [
		"is_pro",
		"visible",
		"trigger",
		"disable",
		"parentIndex",
		"context",
		"badge",
		"popup",
	]);
	const handleChange = useCallback(
		(event) =>
			validProps.onChange(event, {
				popup: props?.popup,
				isPro: !!props.is_pro,
			}),
		[validProps?.value]
	);

	if (validProps.type === "checkbox") {
		if (validProps?.name) {
			validProps.checked = validProps?.checked || validProps?.value;
		}
	}

	const [responsive, setResponsive] = useState("desktop");

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				rowGap: 5,
				columnGap: 10,
				flexWrap: "wrap",
			}}
		>
			{React.createElement("input", {
				...validProps,
				type: "number",
				onChange: handleChange,
			})}
			<div style={{ display: "flex", alignItems: "center" }}>
				{Object.keys(props?.controls)?.map((key) => (
					<button
						type="button"
						key={key}
						className={`responsive-button ${
							responsive === key ? "active" : ""
						}`}
						onClick={() => setResponsive(key)}
					>
						<img
							src={props.controls[key].icon}
							alt="desktop"
							style={{ width: props.controls[key].size }}
						/>
					</button>
				))}
			</div>
		</div>
	);
};

ResponsiveNumber.defaultProps = {
	type: "number",
};

export const GenericInput = React.memo(ResponsiveNumber);
export default withLabel(React.memo(ResponsiveNumber));
