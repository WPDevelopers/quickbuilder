import React from "react";
import classNames from "classnames";
/**
 * Registering a store.
 */
import { registerStore } from "@wordpress/data";
import store from "./store";
registerStore("formbuilder", store);

import { BuilderProps } from "./types/Builder";
import Tab from "./fields/Tab";
import { useBuilderContext } from "./core/hooks";
import { TabProps } from "./types/Tabs";


const FormBuilder: React.FC<BuilderProps | TabProps> = (props) => {
	const builderContext = useBuilderContext();
	let tabs = props.tabs;

	if (!tabs?.type) {
		tabs = {
			...props.config,
			value: props?.config?.active,
			fields: props.tabs,
			tabs: undefined,
			submit: props?.submit,
			onChange: (event) => {
				builderContext.setActiveTab(event?.target?.value);
			},
		};
	}
	return (
		<>
			<Tab {...tabs} />
		</>
	);
};

export default FormBuilder;
