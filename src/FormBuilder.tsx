import React from "react";
/**
 * Registering a store.
 */
import { registerStore } from "@wordpress/data";
import store from "./store";
registerStore("formbuilder", store);

import Tab from "./fields/Tab";
import { useBuilderContext } from "./core/hooks";
import type { BuilderProps } from "./types/Builder";
import type { TabProps } from "./types/Tabs";
import type { TabFieldProps } from "./types";


const FormBuilder: React.FC<BuilderProps | TabProps> = (props) => {
	const builderContext = useBuilderContext();

	// Accept either a ready-made tab config (it already carries `type`), or a
	// bare list of tab fields plus builder config that we assemble into one.
	const tabs: TabFieldProps = props.tabs?.type
		? props.tabs
		: {
			...props.config,
			type: "tab",
			parentIndex: [],
			value: props?.config?.active,
			fields: props.tabs,
			tabs: undefined,
			submit: props?.submit,
			onChange: (event) =>
				builderContext.setActiveTab(event?.target?.value),
		};

	return <Tab {...tabs} />;
};

export default FormBuilder;
