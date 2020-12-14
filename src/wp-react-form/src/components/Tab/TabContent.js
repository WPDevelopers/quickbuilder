import React from "react";
import Fields from "../Fields";
import Submit from "./../Submit";

const TabContent = ({ activeTab, config }) => {
	if (config.tabs == undefined) {
		return "";
	}

	return (
		<div className={`wrf-tab-content-wrap`}>
			{config.tabs.map(({ key, fields }) => (
				<div
					className={`wrf-tab-content ${key}${
						key === activeTab ? " active-tab" : ""
					}`}
					key={key}
				>
					<div className={`wrf-tab-content-inner`}>
						<Fields fields={fields} />
					</div>
				</div>
			))}
			<Submit />
		</div>
	);
};

export default TabContent;
