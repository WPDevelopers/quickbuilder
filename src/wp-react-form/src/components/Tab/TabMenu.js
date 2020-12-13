import React from "react";
const TabMenu = ({ tabs, activeTab, setActiveTab }) => {
	if (tabs == undefined) {
		return "";
	}

	return (
		<ul className={`wrf-tab-nav`}>
			{tabs.map((tab) => (
				<li
					className={`wrf-tab-nav-item${
						tab.classes !== undefined ? ` ${tab.classes}` : ""
					}${activeTab === tab.key ? " active-tab" : ""}`}
					data-key={tab.key}
					key={tab.key}
					onClick={() => setActiveTab(tab.key)}
				>
					{tab.label}
				</li>
			))}
		</ul>
	);
};
export default TabMenu;
