import React from "react";
import classNames from "classnames";
/**
 * Registering a store.
 */
import { registerStore } from "@wordpress/data";
import store from "./store";
registerStore("formbuilder", store);

import { BuilderProps } from "./types/Builder";

import Tab from "./tabs/Tab";

const FormBuilder: React.FC<BuilderProps> = (props) => {
	const componentClasses = classNames(
		"wp-react-form wprf-tabs-wrapper",
		props?.className,
		{
			"wprf-tab-menu-as-sidebar": props.config?.sidebar,
		}
	);

	return (
		<div className={componentClasses}>
			<Tab {...props} />
		</div>
	);
};

export default FormBuilder;
