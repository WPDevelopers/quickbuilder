import React, { useEffect, useState } from "react";
import { TextControl, TextareaControl } from "@wordpress/components";

const GenerateForm = ({ fields }) => {
	const allFields = fields.map(
		({ css_class, name, type, value, placeholder, label }) => {
			switch (type) {
				case "text":
					return (
						<TextControl
							placeholder={placeholder ? placeholder : ""}
							className={css_class}
							name={name}
							value={value}
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
						/>
					);
				default:
					return <div></div>;
			}
		}
	);

	return <>{allFields}</>;
};

export default GenerateForm;
