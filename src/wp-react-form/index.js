import React from "react";
import Tabs from "./src/components/Tab";
import MyTextControl from './src/MyTextControl';

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
			{/* <MyTextControl ddd="mmmm" /> */}
		</div>
	);
};

export default WPReactForm;
