import React from "react";
import classNames from "classnames";

import Fields from "../Fields";
import Submit from "./../Submit";

const TabContent = ({ tabs, submit, activeTab }) => {
	// if (tabs === undefined || Object.keys(tabs).length === 0) {
	// 	return "";
	// }

	// if (!tabs?.id) {
	// 	throw Error("Each Tab Must Have an Unique ID. i.e: id: tab_one");
	// }

	// if (!tabs?.fields) {
	// 	throw Error("Each tab must have some fields.");
	// }

	return (
		<div className="wprf-tab-content-wrapper">
			{tabs?.map((tab) => {
				return (
					<div
						id={tab?.id}
						className={classNames(
							"wprf-tab-content",
							`wprf-tab-${tab?.id}`,
							{
								"wprf-active": activeTab === tab.id,
							}
						)}
						key={tab?.id}
					>
						<Fields fields={tab?.fields} />
					</div>
				);
			})}
			{submit && <Submit config={submit} />}
		</div>
	);
};

export default TabContent;
