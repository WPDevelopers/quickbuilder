import React, { useState } from "react";
import { TextControl, TextareaControl } from "@wordpress/components";



const Fields = ({ fields }) => {

	const [formState, setFormState] = useState({});

	const handleChange = (e, name) => {
		console.log( e );
		console.log( name );
	}
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
							value={value}
							onChange={(e) => handleChange(e, name)}
						/>
					);
				case "textarea":
					return (
						<TextareaControl
							label={label}
							placeholder={placeholder ? placeholder : ""}
							className={css_class}
							name={name}
							value={value}
							onChange={(e) => handleChange(e)}
						/>
					);
				default:
					return <div></div>;
			}
		}
	);

	return <>{allFields}</>;
};

export default Fields;
