import * as React from "react";
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

    return (
        <div className={componentClasses}>
            <ul className="wprf-tab-nav">
                {tabs.map((tab) => (
                    <li
                        className={classNames("wprf-tab-nav-item", {
                            [`${tab.classes}`]: tab.classes,
                            "wprf-active-nav": active === tab.id,
                        })}
                        data-key={tab.id}
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
