import React from "react";
import { withSelect, withDispatch, select, dispatch } from "@wordpress/data";
import TabMenu from "./Tab/TabMenu";
import TabContent from "./Tab/TabMenu";

const TabBuilder = ({ items, price }) => {
	console.log("price", price);
	return (
		<>
			<TabMenu items={items} />
			<TabContent />
		</>
	);
};
export default withSelect((select) => {
	return {
		price: select("wp-react-form-store").getPrice(),
	};
})(
	withDispatch((dispatch) => {
		dispatch("wp-react-form-store").setPrice(10000);
	})(TabBuilder)
);
