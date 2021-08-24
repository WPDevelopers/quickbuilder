import React from "react";
import classNames from "classnames";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
            <ToastContainer />
		</div>
	);
};

export default FormBuilder;
