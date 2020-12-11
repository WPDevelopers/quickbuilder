import React from "react";
import Tabs from "./src/Tabs";

const WPReactForm = ({ items }) => {

	return (
        <div className={`wp-react-form wrf-tabs-wrapper`}>
            <Tabs items={items}/>
        </div>
    );

};

export default WPReactForm;
