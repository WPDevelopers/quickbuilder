import { Button } from "@wordpress/components";
import React, { useEffect, useState } from "react";
import { useBuilderContext } from "../../core/hooks";
import { Field } from "../../fields";
import { SteppedButtonConfig } from "../../types/Tabs";

const SteppedButton: React.FC<SteppedButtonConfig> = (props) => {
	const [nextTab, setNextTab] = useState(undefined);
	const [prevTab, setPrevTab] = useState(undefined);
	const builderContext = useBuilderContext();

	useEffect(() => {
		const tabIds = props.fields.map((tab) => tab.id);
		const currentTabIndex = tabIds.findIndex((tab) => tab === props.active);
		if (currentTabIndex != -1) {
			setPrevTab(tabIds[currentTabIndex - 1]);
		}
		if (currentTabIndex <= tabIds.length) {
			setNextTab(tabIds[currentTabIndex + 1]);
		}
	}, [props.active, props.fields]);

	return (
		<div className="wprf-stepped-button">
			{props.config.buttons &&
				Object.keys(props.config.buttons).map((button, index) => {
					return (
						<React.Fragment key={`button_${button}_${index}`}>
							{/* {console.log(props.config.buttons?.[button]?.type)} */}
							{button === "skip" && nextTab !== undefined && (
								<Button
									className={`wprf-btn wprf-step-btn-${button}`}
									onClick={() => props.setActive(nextTab)}
								>
									{props.config.buttons?.[button]}
								</Button>
							)}
							{((button === "next" && nextTab !== undefined) ||
								(button === "prev" &&
									prevTab !== undefined)) && (
								<Button
									className={`wprf-btn wprf-step-btn-${button}`}
									onClick={() =>
										props.setActive(
											button === "next"
												? nextTab
												: prevTab
										)
									}
								>
									{typeof props.config.buttons?.[button] ===
									"object" ? (
										<>
											{props?.active ===
											props.config.buttons?.[button]
												?.condition
												? props.config.buttons?.[button]
														?.customName
												: props.config.buttons?.[button]
														?.name}
										</>
									) : (
										props.config.buttons?.[button]
									)}
								</Button>
							)}
							{nextTab == undefined &&
								props.config.buttons?.[button]?.type && (
									<Field
										{...props.config.buttons?.[button]}
									/>
								)}
						</React.Fragment>
					);
				})}
		</div>
	);
};

export default React.memo(SteppedButton);
