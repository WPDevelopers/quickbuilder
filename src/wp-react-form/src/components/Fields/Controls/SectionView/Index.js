import React, { useState } from "react";
import { Icon } from "@wordpress/components";
import Field from "../../Field";
import "./section.scss";

function Index({ fields, label, collapsible, collapsed }) {
	const [isCollapse, setCollapse] = useState(collapsed ?? false);
	const allFields = fields.map((item) => {
		return <Field {...item} />;
	});
	return (
		<div
			className={`wprf-control-section ${
				collapsible ? (isCollapse ? "wprf-section-collapsed" : "") : ""
			}`}
		>
			<div className="wprf-section-title">
				<h4>{label}</h4>
				{collapsible && (
					<button onClick={() => setCollapse(!isCollapse)}>
						<Icon
							icon={`arrow-${isCollapse ? "down" : "up"}-alt2`}
						/>
					</button>
				)}
			</div>
			<div className="wprf-section-fields">{allFields}</div>
		</div>
	);
}

export default Index;
