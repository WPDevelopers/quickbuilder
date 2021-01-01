import React, { useState, useEffect } from "react";
import TabMenu from "./TabMenu";
import TabContent from "./TabContent";
import "./tab.scss";

const TabBuilder = ({ config }) => {
	const [activeTab, setActiveTab] = useState(config?.tabConfig?.active);
	const [tabs, setTab] = useState({});

	useEffect(() => {
		if (activeTab) {
			let currentTabs = config?.tabs.filter(
				(tab) => tab.id === activeTab
			);
			setTab(currentTabs?.[0]);
		}
	}, [activeTab]);

	return (
		<>
			<TabMenu {...{ config, activeTab, setActiveTab }} />
			<TabContent tabs={tabs} submit={config?.submit} />
		</>
	);
};
export default TabBuilder;
