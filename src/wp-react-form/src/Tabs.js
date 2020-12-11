import React from "react";
import Tab from "./Tab";

const Tabs = ({ items }) => {
	return (
        <ul className={`wrf-tab-nav`}>
            {
                items.map((tab) => (
                    <li className={`wrf-tab-nav-item${ tab.classes !== undefined ? ` ${tab.classes}` : '' }`} data-key={tab.key} key={tab.key}>{ tab.label }</li>
                ))
            }
        </ul>
    );
};

export default Tabs;
