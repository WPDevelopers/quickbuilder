import React from "react";
import classNames from "classnames";

import Fields from "../Fields";
import Submit from "./../Submit";

const TabContent = ({ tabs, submit }) => {
	if (tabs === undefined || Object.keys(tabs).length === 0) {
		return "";
	}

	if (!tabs?.id) {
		throw Error("Each Tab Must Have an Unique ID. i.e: id: tab_one");
	}

	return (
		<div className="wprf-tab-content-wrapper">
			<div
				id={tabs?.id}
				className={classNames(
					"wprf-tab-content",
					`wprf-tab-${tabs?.id}`
				)}
				key={tabs?.id}
			>
				<div className="wprf-tab-content-inner">
					<Fields fields={tabs?.fields} />
				</div>
			</div>
			{submit && <Submit config={submit} />}
		</div>
	);
};

export default TabContent;
