import React from "react";
import classNames from "classnames";

import TabBuilder from "./src/components/Tab";
/**
 * Registering a store.
 */
import { registerStore } from "@wordpress/data";
import store from "./src/store";
registerStore("wprf-store", store);

const WPReactForm = ({ config, ...rest }) => {
	const componentClasses = classNames(
		"wp-react-form wprf-tabs-wrapper",
		rest?.className,
		{
			"wprf-tab-menu-as-sidebar": config?.tabConfig?.sidebar,
		}
	);

	return (
		<div className={componentClasses}>
			<TabBuilder config={config} />
		</div>
	);
};

export default WPReactForm;
