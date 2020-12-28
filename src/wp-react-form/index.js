import React from "react";
import TabBuilder from "./src/components/Tab";
import Field from "./src/components/Fields/Field";

/**
 * Registering a store.
 */
import { registerStore } from "@wordpress/data";
import store from "./src/store";
registerStore("wprf-store", store);

const WPReactForm = ({ config }) => {
	return (
		<div className={`wp-react-form wrf-tabs-wrapper`}>
			<TabBuilder config={config} />
		</div>
	);
};

export default WPReactForm;
