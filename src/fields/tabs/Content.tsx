import { applyFilters } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useBuilderContext } from "../../core/hooks";
import { isArray, isVisible } from "../../core/utils";
import when from "../../core/when";
import { Field } from "../../fields";
import { Fields, TabContentConfig } from "../../types/Tabs";
import InnerContent from "./InnerContent";
import SteppedButton from "./SteppedButton";
import Submit from "./Submit";

const Content: React.FC<TabContentConfig> = ({
	fields: tabs,
	active,
	setActive,
	submit,
	...rest
}) => {
	if (tabs === undefined) {
		throw new Error(
			__("There are no #tabs args defined in props.", "betterdocs")
		);
	}

	const builderContext = useBuilderContext();
	const parentIndex = rest.parentIndex || [];

	if (!isArray(tabs)) {
		throw new Error(__("Not an array.", "betterdocs"));
	}

	const [tabsFields, setTabsFields] = useState<Fields>([]);

	useEffect(() => {
		const filteredTabs = tabs.filter((tab) =>
			isVisible(builderContext?.values, tab)
		);
		setTabsFields(filteredTabs);
	}, [tabs, builderContext?.values?.source]);

	return (
		<div
			className={classNames(
				"wprf-tab-content-wrapper",
				builderContext?.values?.source,
				builderContext?.values?.themes
			)}
		>
			<div className="wprf-tab-flex">
				<div className="wprf-tab-contents">
					{tabs.map((tab, index) => {
						if (!isVisible(builderContext?.values, tab)) {
							return "";
						}
						const componentClasses = classNames(
							"wprf-tab-content",
							`wprf-tab-${tab?.id}`,
							{
								"wprf-active": active === tab.id,
							}
						);

						return (
							<div
								id={tab?.id}
								className={componentClasses}
								key={tab?.id}
							>
								<div className="wprf-tab-heading-wrapper">
									{tab?.label && (rest?.title ?? true) && (
										<h4>{tab.label}</h4>
									)}
									<div>
										{rest?.content_heading &&
											Object.keys(
												rest.content_heading
											).map((button, index) => {
												return (
													<React.Fragment
														key={`button_${button}_${index}`}
													>
														<Field
															{...rest
																.content_heading[
																button
															]}
														/>
													</React.Fragment>
												);
											})}
									</div>
								</div>
								<InnerContent
									context={builderContext}
									fields={tab?.fields}
									parentIndex={[...parentIndex, index]}
								/>
							</div>
						);
					})}
				</div>
				{applyFilters("wprf_tab_content", "", rest)}
			</div>
			{rest?.step?.show && (
				<SteppedButton
					fields={tabsFields}
					active={active}
					setActive={setActive}
					config={rest.step ?? { show: false }}
				/>
			)}
			{(submit?.show ?? true) &&
				(submit?.rules
					? when(submit?.rules, { rest, config: { active } })
					: true) && <Submit {...submit} />}
		</div>
	);
};

export default Content;
