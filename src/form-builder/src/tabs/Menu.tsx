import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { TabProps } from "./types";

const Menu: React.FC<TabProps> = (props) => {
    if (props.tabs === undefined) {
        throw new Error("There are no tabs defined!");
    }

    const { active, setActive, tabs, config } = props;

    const componentClasses = classNames(
        "wprf-tab-menu-wrapper",
        props?.className,
        { "wprf-tab-menu-sidebar": config?.sidebar }
    );

    const currentTabIndex = tabs.findIndex((tab: any) => tab.id === active);

    return (
        <div className={componentClasses}>
            <ul className="wprf-tab-nav">
                {tabs.map((tab, index) => (
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
                        { tab?.icon && <img src={tab.icon} alt={tab?.label} />}
                        <span>{tab.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
