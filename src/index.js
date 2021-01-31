import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { __ } from "@wordpress/i18n";
import WPReactForm from "./wp-react-form";
// import axios from "axios";
import { priyo as builder } from "./wp-react-form/config";

(function () {
    const App = () => {
        // const [tabs, setTabs] = useState([]);
        // useEffect(() => {
        // 	fetch(
        // 		"https://cors-anywhere.herokuapp.com/https://nx.alim.dev/wp-admin/admin-ajax.php?action=nx",
        // 		{
        // 			headers: {
        // 				"no-cors": true,
        // 			},
        // 		}
        // 	)
        // 		.then((res) => res.json())
        // 		.then((res) => {
        // 			console.log(res);
        // 			setTabs(res);
        // 		});
        // }, []);

        // builder.tabs = tabs;

        console.log("notificationxTabs", notificationxTabs);

        return <WPReactForm config={notificationxTabs} />;
    };
    ReactDOM.render(<App />, document.getElementById("root"));
})();
