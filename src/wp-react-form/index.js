import React from "react";
import Tabs from "./src/components/Tab";

/**
 * Registering a store.
 */
import { registerStore } from "@wordpress/data";
import store from "./src/store";
registerStore("wp-react-form-store", store);

const WPReactForm = ({ tabs }) => {
	return (
		<div className={`wp-react-form wrf-tabs-wrapper`}>
			<Tabs tabs={tabs} />
		</div>
	);
};

export default WPReactForm;
