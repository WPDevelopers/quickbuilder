import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { TabProps } from "./types";
import { isString, isObject, isVisible } from "../core/utils";

const Menu: React.FC<TabProps> = (props) => {
    if (props.tabs === undefined) {
        throw new Error("There are no tabs defined!");
    }

    const { active, setActive, tabs, config, context } = props;

    const [tabsFields, setTabsFields] = useState([]);

    useEffect(() => {

        const filteredTabs = tabs.filter(tab => isVisible(context?.values, tab));
        setTabsFields(filteredTabs);

    }, [tabs, context?.values?.source])

    const componentClasses = classNames(
        "wprf-tab-menu-wrapper",
        props?.className,
        { "wprf-tab-menu-sidebar": config?.sidebar },
        context?.values?.source
    );

    const currentTabIndex = tabsFields.findIndex((tab: any) => tab.id === active);

    return (
        <div className={componentClasses}>
            <ul className="wprf-tab-nav">
                {
                    tabsFields.map((tab, index) => (
                        <li
                            className={classNames("wprf-tab-nav-item", {
                                [`${tab.classes}`]: tab.classes,
                                "wprf-active-nav": active === tab.id,
                                "wprf-tab-complete": config?.completionTrack ? (index <= currentTabIndex) : false
                            })}
                            data-key={tab.id}
                            key={tab.id}
                            onClick={() => (config?.clickable ?? true) && setActive(tab.id)}
                        >
                            {
                                tab?.icon && (
                                    (isString(tab.icon) && !isObject(tab.icon)) ? <img src={tab.icon} alt={tab?.label} /> : (isObject(tab.icon) ? context?.icons?.[tab?.icon?.type]?.[tab?.icon?.name] : '')
                                )
                            }
                            <span>{tab.label}</span>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
};

export default Menu;
