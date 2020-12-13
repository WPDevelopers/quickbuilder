import { withSelect } from "@wordpress/data";
import React from "react";

const TabContent = ({ tab, price }) => {
	const { action, fields, icon, key, label } = tab;
	console.log("price price: ", price);
	return (
		<div className={key} key={key}>
			<div className={`wrf-tab-title`}>
				<i className={icon} />
				<h4>{label}</h4>
			</div>
			<div className={`wrf-tab-content`}>
				{action ? (
					<form action={action}>
						<GenerateForm fields={fields} />
					</form>
				) : (
					<GenerateForm fields={fields} />
				)}
			</div>
		</div>
	);
};

export default withSelect((select) => {
	return {
		price: select("wp-react-form-store").getPrice(),
	};
})(TabContent);
