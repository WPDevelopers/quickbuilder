import React from "react";
import Field from "../../Field";

function Index({ name, fields, label, value, onChange, ...rest }) {
	return (
		<>
			<div className="wprf-group-control">
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
