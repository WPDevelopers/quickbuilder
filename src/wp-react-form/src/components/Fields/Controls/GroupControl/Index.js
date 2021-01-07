import React from "react";
import classNames from "classnames";
import Field from "../../Field";

import "./group.scss";

function Index({ name, fields, label, value, onChange, display, ...rest }) {
	return (
		<>
			<div
				className={classNames("wprf-group-control", {
					"wprf-inline": display,
				})}
			>
				{label}
				{fields.map((item) => {
					const modifiedName = `${name}[${item.name}]`;
					const modifiedID = `${name}-${item.name}`;
					let singleProps = {
						...item,
						name: modifiedName,
						id: modifiedID,
						onChange: (value) => {
							onChange(value, modifiedName);
						},
					};
					return <Field {...singleProps} />;
				})}
			</div>
		</>
	);
}

export default Index;
