import classNames from "classnames";
import React from "react";
import { useBuilderContext } from "../hooks";

const BadgeComp = ({ componentClasses, label }) => {
	return (
		<div className="wprf-badge">
			<span className="wprf-badge-icon">
				<i className="btd-icon btd-crown"></i>
			</span>
			<span className={componentClasses}>{label}</span>
		</div>
	);
};

const Badge = (props) => {
	const builderContext = useBuilderContext();
	let {
		label,
		active,
		position = "right",
		renderLabel,
		renderComponent,
	} = props;
	if (label === undefined) {
		label = "Pro";
	}

	const componentClasses = classNames("wprf-badge-item", {
		"wprf-badge-active": active,
	});

	let componentProps = {};

	if (!builderContext.is_pro_active) {
		componentProps = {
			onClick: (e) => {
				e.preventDefault();
				builderContext.alerts.pro_alert(props?.popup).fire();
			},
		};
	}

	return (
		<div
			className={classNames("wprf-badge-wrapper", {
				"pro-deactivated": !builderContext.is_pro_active,
			})}
			{...componentProps}
		>
			{position === "left" && label.length > 0 && (
				<>
					{renderLabel(
						<BadgeComp
							componentClasses={componentClasses}
							label={label}
						/>,
						"left"
					)}
				</>
			)}
			{position === "right" && label.length > 0 && (
				<>
					{renderLabel(
						<BadgeComp
							componentClasses={componentClasses}
							label={label}
						/>,
						"right"
					)}
					{/* <div className="wprf-badge">
                        <sup className={componentClasses}>{label}</sup>
                    </div> */}
				</>
			)}
			{renderComponent()}
		</div>
	);
};

export default Badge;
