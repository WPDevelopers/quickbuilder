import React from "react";
import Tabs from "./src/Tabs";
/**
 * Registering a store.
 */
import { registerStore } from "@wordpress/data";
import store from "./src/store";
registerStore("wp-react-form-store", store);

const WPReactForm = ({ items }) => {
	return (
		<div className={`wp-react-form wrf-tabs-wrapper`}>
			<Tabs items={items} />
		</div>
	);
};

export default WPReactForm;
