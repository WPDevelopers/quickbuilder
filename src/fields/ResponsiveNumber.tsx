import React, { useState, useCallback, useEffect } from "react";
import { withLabel } from "../core/hooks";
import { isObject, validFieldProps } from "../core/utils";

const ResponsiveNumber = (props) => {
	const validProps = validFieldProps(props, ['is_pro', 'visible', 'trigger', 'disable', 'parentIndex', 'context', 'badge', 'popup']);
	const [responsive, setResponsive] = useState(Object.keys(props.controls)[0]);

	// backward compatibility
	let value = validProps.value;
	if(!isObject(validProps.value)){
		Object.keys(props.controls).reduce((acc, key) => {
			return {...acc, [key]: validProps.value};
		  }, {});
	}
	const [responsiveSize, setResponsiveSize] = useState(value);


	const handleChange = (event) =>{
		setResponsiveSize({
			...responsiveSize,
			[responsive]: event.target.value,
		});
	}

	useEffect(() => {
		validProps.onChange({
			target: {
				type: 'input',
				name: validProps.name,
				value: responsiveSize,
				checked: null,
				multiple: null,
			},
		});
	}, [responsiveSize])



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
				value: responsiveSize?.[responsive],
				onChange: handleChange,
			})}
			<div style={{ display: "flex", alignItems: "center" }}>
				{Object.keys(props.controls)?.map((key) => (
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
