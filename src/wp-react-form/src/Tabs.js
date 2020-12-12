import React from "react";
import { withSelect, withDispatch, select, dispatch } from "@wordpress/data";
import Tab from "./Tab";

const Tabs = ({ items, price }) => {
	// console.log(dispatch("wp-react-form-store").setPrice(1000));
	console.log("price", price);
	return (
		<ul className={`wrf-tab-nav`}>
			{items.map((tab) => (
				<li
					className={`wrf-tab-nav-item${
						tab.classes !== undefined ? ` ${tab.classes}` : ""
					}`}
					data-key={tab.key}
					key={tab.key}
				>
					{tab.label}
				</li>
			))}
		</ul>
	);
};

export default withDispatch((dispatch) => {
	dispatch("wp-react-form-store").setPrice(1000);
})(
	withSelect((select) => {
		return {
			price: select("wp-react-form-store").getPrice(),
		};
	})(Tabs)
);
