import React from "react";
import Field from "./Field";

const Fields = ({ fields }) => {
	const allFields = fields.map((item) => {
		return <Field {...item} />;
	});
	return <>{allFields}</>;
};

export default Fields;
