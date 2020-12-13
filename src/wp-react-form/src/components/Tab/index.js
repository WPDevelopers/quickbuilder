import React, { useState } from "react";
import TabMenu from "./TabMenu";
import TabContent from "./TabContent";
import "./tab.scss";

const Tabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState("tab_1");

	return (
		<>
			<TabMenu
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<TabContent tabs={tabs} activeTab={activeTab} />
		</>
	);
};
export default Tabs;
