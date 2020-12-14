import React from "react";
import { Button } from "@wordpress/components";
import { dispatch } from "@wordpress/data";
const Submit = ({ config }) => {
	/**
	 * This is default submit function
	 */
	if (!config.hasOwnProperty("onSubmit")) {
		config.onSubmit = (evt) => {
			console.log("from submit button itself", evt);
		};
	}
	return (
		<Button onClick={(evt) => config.onSubmit(evt)}>{config.label}</Button>
	);
};
export default Submit;
