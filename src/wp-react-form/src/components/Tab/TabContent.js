import { withSelect } from "@wordpress/data";
import React, { useEffect, useState } from "react";
import Fields from "../Fields";
import Submit from "./../Submit";

const TabContent = ({ activeTab, config }) => {
	if (config.tabs == undefined) {
		return "";
	}

	return (
		<div className={`wprf-tab-content-wrapper`}>
			{config.tabs.map(({ key, fields }) => (
				<div
					className={`wprf-tab-content ${key}${
						key === activeTab ? " wprf-active-content" : ""
					}`}
					key={key}
				>
					<div className={`wprf-tab-content-inner`}>
						<Fields fields={fields} />
					</div>
				</div>
			))}
			{config.submit && <Submit config={config.submit} />}
		</div>
	);
};

export default TabContent;
