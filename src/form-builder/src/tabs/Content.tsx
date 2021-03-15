import React from "react";
import classNames from "classnames";
import { TabProps } from "./types";
import { sortingFields, isArray } from "../core/utils";
import InnerContent from "../core/InnerContent";


const Content: React.FC<TabProps> = ({ tabs, active }) => {
    if (tabs === undefined) {
        throw new Error("There are no #tabs args defined in props.");
    }
    // if (!tabs?.id) {
    // 	throw Error("Each Tab Must Have an Unique ID. i.e: id: tab_one");
    // }

    // if (!tabs?.fields) {
    // 	throw Error("Each tab must have some fields.");
    // }

    // sorting tabs
    const newTabs = sortingFields(tabs);

    if (!isArray(newTabs)) {
        throw new Error('Not an array.')
    }

    return (
        <div className="wprf-tab-content-wrapper">
            {newTabs.map((tab) => {
                const componentClasses = classNames(
                    "wprf-tab-content",
                    `wprf-tab-${tab?.id}`,
                    {
                        "wprf-active": active === tab.id,
                    }
                );

                return (
                    <div id={tab?.id} className={componentClasses} key={tab?.id} >
                        <InnerContent fields={tab?.fields} />
                    </div>
                );
            })}
            {/* {(submit?.show ?? true) && <Submit config={submit} />} */}
        </div>
    );
};

export default Content;