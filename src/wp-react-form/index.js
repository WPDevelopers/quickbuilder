import React from "react";
import Tabs from "./src/components/Tab";

/**
 * Registering a store.
 */
import { registerStore } from "@wordpress/data";
import store from "./src/store";
registerStore("wprf-store", store);

const WPReactForm = ({ config }) => {
	return (
		<div className={`wp-react-form wrf-tabs-wrapper`}>
			<Tabs config={config} />
		</div>
	);
};

export default WPReactForm;
