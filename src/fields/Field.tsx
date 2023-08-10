import React from "react";
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";

import { withProps } from "../core/hooks";
import Action from "./Action";
import Tab from "./Tab";
// import Section from "./Section";
// import DefaultInput from "./Input";
// import Group from "./Group";

const Field = (props) => {
	if (!props.type || props.type.length === 0) {
		console.error(props);
		throw new Error(
			__("Field must have a #type. see documentation.", "notificationx")
		);
	}

	switch (props.type) {
		case "action":
			return <Action {...props} />;
		case "tab":
			return <Tab {...props} />;
		// case "section":
		// 	return <Section {...props} />;
		// // case "group":
		// // 	return <Group {...props} />;
		// case "input":
		// case "number":
		// case "text":
		// 	return <DefaultInput {...props} />;
		default:
			const customField = applyFilters(
				"custom_field",
				"",
				props.type,
				props
			);
			if(!customField) {
				console.error('No custom field found for type: ', props.type, props);
			}

			return <>{customField}</>;
	}
};

export const GenericField = withProps(Field, true);
export default withProps(Field);
