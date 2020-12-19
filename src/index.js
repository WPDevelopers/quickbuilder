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
				label: "Is Checked?",
				name: "is_checked",
				type: "checkbox",
				css_class: "input-field",
				value: false,
			},
			{
				label: "Message",
				name: "message",
				type: "textarea",
				css_class: "input-field",
				value: "blah blah",
				depends_on: "is_checked",
				depended_value: true,
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

const builder = {
	tabs,
	submit: {
		label: "Save Changes",
		// onSubmit: (e) => { // this is for custom submit
		// 	console.log("from builder obj", e);
		// },
	},
};
const App = () => <WPReactForm config={builder} />;
ReactDOM.render(<App />, document.getElementById("root"));
