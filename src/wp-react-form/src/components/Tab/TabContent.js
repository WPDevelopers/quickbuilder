import { withSelect } from "@wordpress/data";
import React, { useEffect, useState } from "react";
import Fields from "../Fields";
import Submit from "./../Submit";

const TabContent = ({ activeTab, config }) => {
	if (config.tabs == undefined) {
		return "";
	}

	return (
		<div className={`wrf-tab-content-wrap`}>
			{console.log("activeTab tab-content", activeTab)}
			{config.tabs.map(({ key, fields }) => (
				<div
					className={`wrf-tab-content ${key}${
						key === activeTab ? " active-tab" : ""
					}`}
					key={key}
				>
					{console.log("tab-content", key)}
					<div className={`wrf-tab-content-inner`}>
						<Fields fields={fields} />
					</div>
				</div>
			))}
			{config.submit && <Submit config={config.submit} />}
		</div>
	);
};

export default React.memo(
	TabContent
	// withSelect((select) => {
	// 	return {
	// 		formState: select("wprf-store").getFormState(),
	// 	};
	// })(TabContent)
);
