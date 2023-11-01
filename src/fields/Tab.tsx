import React, { useEffect, useState } from "react";
import { TabConfig } from "../types/Tabs";
import Content from "./tabs/Content";
import Menu from "./tabs/Menu";
// import { BuilderProvider } from '../core/hooks/useBuilderContext';
// import useBuilder from '../core/hooks/useBuilder';

import classNames from "classnames";
import { useBuilderContext } from "../core/hooks";
import "../scss/index.scss";

const Tab: React.FC<TabConfig> = (props) => {
	// const builderContextState = useBuilder(props);

	const builderContext = useBuilderContext();
	const [activeTab, setActiveTab] = useState(props?.value || props?.active);

	useEffect(() => {
		if (props?.save_locally) {
			let locally_saved_data =
				localStorage.getItem("quickbuilder_active_tab") ?? null;
			locally_saved_data && setActiveTab(JSON.parse(locally_saved_data));
		}
	}, []);

	const saveValue = props?.save ?? true;

	const componentClasses = classNames(
		"wp-react-form wprf-tabs-wrapper",
		props?.className,
		{
			"wprf-tab-menu-as-sidebar": props?.sidebar,
		}
	);

	useEffect(() => {
		const _activeTab = props.value ?? props.active;

		if (_activeTab != activeTab) {
			setActiveTab(_activeTab);
		}
	}, [props?.value]);

	useEffect(() => {
		if (props?.save_locally) {
			localStorage.setItem(
				"quickbuilder_active_tab",
				JSON.stringify(activeTab)
			);
		}
	}, [activeTab]);

	useEffect(() => {
		if (props.value !== activeTab && saveValue) {
			props.onChange({
				target: {
					type: "button",
					name: props.name,
					value: activeTab,
				},
			});
		}
	}, [activeTab]);

	return (
		<div className={componentClasses}>
			{/* <BuilderProvider value={builderContextState}> */}
			<Menu
				{...props}
				active={activeTab}
				setActive={(tabId) => setActiveTab(tabId)}
				fields={props.fields}
				context={builderContext}
			/>
			<Content
				{...props}
				fields={props.fields}
				active={activeTab}
				setActive={(tabId) => setActiveTab(tabId)}
				submit={props?.submit}
			/>
			{/* </BuilderProvider> */}
		</div>
	);
};

export default Tab;
