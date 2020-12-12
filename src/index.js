import React from "react";
import ReactDOM from "react-dom";
import { __ } from "@wordpress/i18n";
import WPReactForm from "./wp-react-form";

const items = [
	{
		label: "Tab 1",
		key: "tab_1",
		icon: "",
		classes: "wrf-menu",
		action: "blahblah",
		fields: [
			{
				name: "first_name",
				type: "text",
				css_class: "input-field",
				placeholder: "blah blah",
			},
			{
				name: "last_name",
				type: "text",
				css_class: "input-field",
				value: "blah blah",
			},
			{
				name: "message",
				type: "textarea",
				css_class: "input-field",
				value: "blah blah",
			},
		],
	},
	{
		label: "Tab 2",
		key: "tab_2",
		icon: "",
		action: "blahblah",
		fields: [
			{
				name: "first_name",
				type: "text",
				css_class: "input-field",
				placeholder: "blah blah",
			},
			{
				name: "last_name",
				type: "text",
				css_class: "input-field",
				value: "blah blah",
			},
			{
				name: "message",
				type: "textarea",
				css_class: "input-field",
				value: "blah blah",
			},
		],
	},
];

const App = () => {
	return <WPReactForm items={items} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
