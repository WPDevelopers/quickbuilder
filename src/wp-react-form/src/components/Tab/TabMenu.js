import React from "react";
import classNames from "classnames";

const TabMenu = (props) => {
	if (props?.config?.tabs === undefined) {
		throw Error("There are no tabs defined!");
	}

	const { config, activeTab, setActiveTab } = props;

	const componentClasses = classNames(
		"wprf-tab-menu-wrapper",
		props?.className,
		{ "wprf-tab-menu-sidebar": config?.tabConfig?.sidebar }
	);

	return (
		<div className={componentClasses}>
			<ul className="wprf-tab-nav">
				{config.tabs.map((tab) => (
					<li
						className={classNames("wprf-tab-nav-item", {
							[`${tab.classes}`]: tab.classes,
							"wprf-active-nav": activeTab === tab.id,
						})}
						data-key={tab.id}
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.label}
					</li>
				))}
			</ul>
		</div>
	);
};
export default TabMenu;
