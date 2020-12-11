import React from "react";
import GenerateForm from "./GenerateForm";

const Tab = ({ tab }) => {
	const { action, fields, icon, key, label } = tab;

	return (
		<div className={key} key={key}>
			<div className={`wrf-tab-title`}>
				<i className={icon} />
				<h4>{label}</h4>
			</div>
			<div className={`wrf-tab-content`}>
				{action ? (
					<form action={action}>
						<GenerateForm fields={fields} />
					</form>
				) : (
					<GenerateForm fields={fields} />
				)}
			</div>
		</div>
	);
};

export default Tab;
