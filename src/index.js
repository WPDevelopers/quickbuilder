import React from "react";
import ReactDOM from "react-dom";
import { __ } from "@wordpress/i18n";
import WPReactForm from "./wp-react-form";

const tabs = [
	{
		label: "Tab 1",
		key: "tab_1",
		icon: "",
		classes: "wrf-menu",
		fields: [
			{
				label: "First Name",
				name: "first_name",
				type: "text",
				css_class: "input-field",
				placeholder: "blah blah",
			},
			{
				label: "Last Name",
				name: "last_name",
				type: "text",
				css_class: "input-field",
				value: "blah blah",
			},
			{
				label: "Message",
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
		fields: [
			{
				label: "First Name",
				name: "first_name",
				type: "text",
				css_class: "input-field",
				placeholder: "blah blah",
			},
			{
				label: "Last Name",
				name: "message",
				type: "textarea",
				css_class: "input-field",
				value: "blah blah",
			},
		],
	},
];

const App = () => <WPReactForm tabs={tabs} />;

ReactDOM.render(<App />, document.getElementById("root"));
