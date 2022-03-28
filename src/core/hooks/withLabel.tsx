import React from "react";
import classNames from "classnames";
import { validFieldProps } from "../utils";
import { Badge, ControlField, ControlLabel } from "../components";

// import { useInstanceId } from "@wordpress/compose";

const withLabel = (WrappedComponent) => {
	const WithLabel = (props) => {
		let {
			label,
			id,
			name,
			type,
			style: prevStyle,
			is_pro,
			badge,
			...rest
		} = props;
		// const instanceId = useInstanceId(withLabel);

		if (id == undefined) {
			id = name;
		}

		const styles = {
			description: {
				position: "right",
			},
			...prevStyle,
		};

		const styleClasses = classNames({
			[`wprf-style-${styles?.type}`]: styles?.type || false,
			"wprf-label-none":
				label === undefined || label === "" || label.length === 0,
			[`wprf-${styles?.label?.position || "inline"}-label`]:
				(styles?.label?.position ?? true) && label != undefined,
		});

		if (type === "hidden") {
			return <WrappedComponent {...props} id={id} />;
		}

		const validProps = validFieldProps(props, [
			"description",
			"label",
			"help",
			"style",
		]);
		const componentClasses = classNames(
			"wprf-control-wrapper",
			`wprf-type-${type}`,
			styleClasses,
			props?.classes,
			{
				[`wprf-name-${name}`]: name,
			}
		);


		return (
			<div className={componentClasses}>
				{is_pro == true && (
					<>
						<Badge
							{...badge}
							{...rest}
							renderLabel={(badge, position) => (
								<ControlLabel
									{...validProps}
									context={rest?.context}
									id={id}
									label={label}
									badge={badge}
									badgePosition={position}
								/>
							)}
							renderComponent={() => (
								<ControlField
									help={null}
									description={props?.description}
									position={styles?.description?.position}
									renderComponent={() => (
										<WrappedComponent
											{...validProps}
											disable={true}
											id={id}
										/>
									)}
								/>
							)}
						/>
						{props?.help && (
							<div className="wprf-badge-wrapper">
								<div className="wprf-control-label" />
								<div className="wprf-control-field">
									<p
										className="wprf-help"
										dangerouslySetInnerHTML={{
											__html: props.help,
										}}
									></p>
								</div>
							</div>
						)}
					</>
				)}
				{(is_pro == false || is_pro == undefined) && (
					<>
						{label && label.length > 0 && (
							<ControlLabel
								{...validProps}
								context={rest?.context}
								label={label}
								id={id}
							/>
						)}
						<ControlField
							help={props?.help}
							description={props?.description}
							position={styles?.description?.position}
							renderComponent={() => (
								<WrappedComponent {...validProps} id={id} />
							)}
						/>
					</>
				)}
			</div>
		);
	};

	return WithLabel;
};

export default withLabel;
