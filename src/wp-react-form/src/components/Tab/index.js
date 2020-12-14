import React, { useState } from "react";
import TabMenu from "./TabMenu";
import TabContent from "./TabContent";
import "./tab.scss";

const Tabs = ({ config }) => {
	const [activeTab, setActiveTab] = useState("tab_1");

	return (
		<>
			<TabMenu
				tabs={config.tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<TabContent config={config} activeTab={activeTab} />
		</>
	);
};
export default Tabs;
