import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Toggle from "./Toggle";

import "./toggle.scss";
import Multiple from "./Multiple";

function Index(props) {
	const [isChecked, setChecked] = useState(props?.value);
	useEffect(() => {
		props?.onChange(isChecked);
	}, [isChecked]);

	let styles = {
		// type: "card",
		label: {
			position: "right",
		},
		...props?.style,
	};

	if (props?.multiple === true) {
		return (
			<Multiple
				{...props}
				styles={styles}
				setChecked={(response) => setChecked(response)}
			/>
		);
	}

	return (
		<Toggle
			styles={styles}
			setChecked={(response) => setChecked(response)}
			{...props}
		/>
	);
}

export default Index;
