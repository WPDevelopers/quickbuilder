import React, { useEffect, useState } from "react";
import { applyFilters } from '@wordpress/hooks'
import classNames from "classnames";
import { TabProps } from "./types";
import { isArray } from "../core/utils";
import InnerContent from "./InnerContent";
import Submit from "./Submit";
import SteppedButton from "./SteppedButton";
import { useBuilderContext } from "../core/hooks";


const Content: React.FC<TabProps> = ({ tabs, active, submit, config }) => {
    if (tabs === undefined) {
        throw new Error("There are no #tabs args defined in props.");
    }

    const builderContext = useBuilderContext();

    if (!isArray(tabs)) {
        throw new Error('Not an array.')
    }

    return (
        <div className={classNames("wprf-tab-content-wrapper", builderContext?.values?.source)}>
            <div className="wprf-tab-flex">
                <div className="wprf-tab-contents">
                    {tabs.map((tab, index) => {
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
                {applyFilters('wprf_tab_content')}
            </div>
            {
                config?.step?.show &&
                <SteppedButton tabs={tabs} config={config.step ?? {}} />
            }
            {(submit?.show ?? true) && <Submit {...submit} />}
        </div>
    );
};

export default Content;