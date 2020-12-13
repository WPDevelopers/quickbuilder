import React from "react";

const TabContent = ({ activeTab, tabs }) => {
	if (tabs == undefined) {
		return "";
	}
	
	return (
		<div className={`wrf-tab-content-wrap`}>
			{tabs.map((tab) => (
				<div
					className={`wrf-tab-content ${tab.key}${
						tab.key === activeTab ? " active-tab" : ""
					}`}
					key={tab.key}
				>
					<div className={`wrf-tab-content-inner`}>
						<h1>Lalal</h1>
						{/* <Fields fields={tab.fields} /> */}
					</div>
				</div>
			))}
		</div>
	);
};

export default TabContent;
