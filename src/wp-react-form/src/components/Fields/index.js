import React, { useState, useEffect } from "react";
import { TextControl, TextareaControl } from "@wordpress/components";
import { withSelect, dispatch } from "@wordpress/data";

const Fields = ({ fields, savedFormState }) => {
	const [formState, setFormState] = useState(savedFormState);

	useEffect(() => {
		dispatch("wprf-store").setFormState(formState);
	}, [formState]);

	const handleChange = (value, name) => {
		setFormState((oldFormState) => ({ ...oldFormState, [name]: value }));
	};
	const allFields = fields.map(
		({ css_class, name, type, value, placeholder, label }) => {
			switch (type) {
				case "text":
					return (
						<TextControl
							label={label}
							placeholder={placeholder ? placeholder : ""}
							className={css_class}
							name={name}
							value={formState[name]}
							onChange={(val) => handleChange(val, name)}
						/>
					);
				case "textarea":
					return (
						<TextareaControl
							label={label}
							placeholder={placeholder ? placeholder : ""}
							className={css_class}
							name={name}
							value={formState[name]}
							onChange={(e) => handleChange(e, name)}
						/>
					);
				default:
					return <div></div>;
			}
		}
	);

	return <>{allFields}</>;
};

export default withSelect((select) => {
	return {
		savedFormState: select("wprf-store").getFormState(),
	};
})(Fields);
