import React from "react";
import { withSelect, dispatch } from "@wordpress/data";
const TabMenu = ({ items, price }) => {
	if (items == undefined) {
		return "";
	}
	console.log(price);
	return (
		<ul className={`wrf-tab-nav`}>
			{items.map((tab) => (
				<li
					className={`wrf-tab-nav-item${
						tab.classes !== undefined ? ` ${tab.classes}` : ""
					}`}
					data-key={tab.key}
					key={tab.key}
					onClick={() =>
						dispatch("wp-react-form-store").setPrice(2000)
					}
				>
					{tab.label}
				</li>
			))}
		</ul>
	);
};
export default withSelect((select) => {
	return {
		price: select("wp-react-form-store").getPrice(),
	};
})(TabMenu);
