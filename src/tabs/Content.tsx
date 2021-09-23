import React, { useEffect, useState } from "react";
import { applyFilters } from '@wordpress/hooks'
import classNames from "classnames";
import { TabProps } from "./types";
import { isArray, isVisible } from "../core/utils";
import InnerContent from "./InnerContent";
import Submit from "./Submit";
import SteppedButton from "./SteppedButton";
import { useBuilderContext } from "../core/hooks";
import when from "../core/when";
import { __ } from '@wordpress/i18n';


const Content: React.FC<TabProps> = ({ tabs, active, submit, config, ...rest }) => {
    if (tabs === undefined) {
        throw new Error(__("There are no #tabs args defined in props.", 'notificationx'));
    }

    const builderContext = useBuilderContext();

    if (!isArray(tabs)) {
        throw new Error(__('Not an array.', 'notificationx'))
    }

    const [tabsFields, setTabsFields] = useState([]);

    useEffect(() => {

        const filteredTabs = tabs.filter(tab => isVisible(builderContext?.values, tab));
        setTabsFields(filteredTabs);

    }, [tabs, builderContext?.values?.source])

    return (
        <div className={classNames("wprf-tab-content-wrapper", builderContext?.values?.source, builderContext?.values?.themes)}>
            <div className="wprf-tab-flex">
                <div className="wprf-tab-contents">
                    {tabs.map((tab, index) => {
                        if (!isVisible(builderContext?.values, tab)) {
                            return '';
                        }
                        const componentClasses = classNames(
                            "wprf-tab-content",
                            `wprf-tab-${tab?.id}`,
                            {
                                "wprf-active": active === tab.id,
                            }
                        );

                        return (
                            <div id={tab?.id} className={componentClasses} key={tab?.id} >
                                {tab?.label && (config?.title ?? true) && <h4>{tab.label}</h4>}
                                <InnerContent context={builderContext} fields={tab?.fields} parentIndex={index} />
                            </div>
                        );
                    })}
                </div>
                {applyFilters('wprf_tab_content', '', rest)}
            </div>
            {
                config?.step?.show &&
                <SteppedButton tabs={tabsFields} config={config.step ?? {}} />
            }
            {(submit?.show ?? true) && (submit?.rules ? when(submit?.rules, { config }) : true) && <Submit {...submit} />}
        </div>
    );
};

export default Content;