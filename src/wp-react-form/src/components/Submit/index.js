import React from "react";
import { Button } from "@wordpress/components";
import { select } from "@wordpress/data";
const Submit = ({ config }) => {
	/**
	 * This is default submit function
	 */
	const onSubmit = (evt) => {
		console.log("on confirm validation: form validation");
		if (!config.hasOwnProperty("onSubmit")) {
			console.log("form has no onsubmit, run default one");
			console.log("values", select("wprf-store").getValues());
			console.log("event", evt);
		} else {
			console.log("form has an onsubmit func implemented, run thats one");
			config.onSubmit(evt);
		}
	};

	return <Button onClick={(evt) => onSubmit(evt)}>{config.label}</Button>;
};
export default Submit;
