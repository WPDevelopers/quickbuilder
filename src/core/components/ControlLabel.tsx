import React from "react";
const ControlLabel = (props) => {
	const { id, label, badge, badgePosition, context, ...rest } = props;
	if (!(label && label.length > 0)) {
		return null;
	}

	/**
	 * Icon need to be fixed
	 * context?.icons?.[rest?.icon] through context
	 */

	return (
		<div className="wprf-control-label">
			{badge ? (
				<div className="wprf-label-with-badge">
					{badgePosition == "left" && badge}
					<label htmlFor={id}>{label}</label>
					{badgePosition == "right" && badge}
				</div>
			) : (
				<label htmlFor={id}>{label}</label>
			)}
			{rest?.label_subtitle && (
				<p
					className="wprf-label-subtitle"
					dangerouslySetInnerHTML={{ __html: rest?.label_subtitle }}
				></p>
			)}
			{rest?.link && (
				<a rel="nofollow" target="_blank" href={rest.link}>
					{context?.icons?.link}
				</a>
			)}
		</div>
	);
};
export default ControlLabel;
