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
				label: "Label First Name",
				name: "first_name",
				type: "text",
				classes: "input-field",
				// value: "Priyo",
				placeholder: "First Name",
				validation_rules: {
					required: "Field should not be empty.",
					"min:20": "Value has to 20 character in length",
				},
			},
			{
				label: "Last Name",
				name: "last_name",
				type: "text",
				classes: "input-field",
				value: "Mukul",
				placeholder: "Last Name",
				validation_rules: {
					required: "Field should not be empty.",
					"min:2": "Value has to 2 character in length",
				},
			},
			{
				label: "Comments",
				name: "comments",
				type: "textarea",
				classes: "inputdd-field",
				value: "blah blah",
				max: 30,
			},
			{
				label: "Are you sure?",
				name: "consent",
				type: "checkbox",
				classes: "inputdd-field",
				value: true,
				lala: "lala",
				max: 30,
			},
			// {
			// 	label: "Gender",
			// 	name: "genderrr",
			// 	type: "radio-basic",
			// 	classes: "input-field",
			// 	value: "male",
			// 	options: [
			// 		{ label: "Male", value: "male" },
			// 		{ label: "Female", value: "female" },
			// 		{ label: "Others", value: "others" },
			// 	],
			// },
			{
				label: "Heading Color",
				name: "heading_color_large",
				type: "colorpicker",
				css_class: "input-field",
				value: "red",
			},
			// {
			// 	label: "Message",
			// 	name: "message",
			// 	type: "textarea",
			// 	css_class: "input-field",
			// 	value: "blah blah",
			// 	depends_on: "is_checked",
			// 	depended_value: true,
			// },
			{
				label: "Notification Type",
				name: "notification_type",
				type: "radio-card",
				css_class: "notifications-type",
				style: "style-card",
				options : [
					{ label: "Sales Notification", value: "sales-notification" },
					{ label: "Comments", value: "comments" },
					{ label: "Reviews", value: "reviews" },
					{ label: "Download Stats", value: "download-stats" },
					{ label: "Donations", value: "donations" },
				]
			},
			// {
			// 	label: "User type",
			// 	name: "header_size",
			// 	type: "slider",
			// 	min: 2,
			// 	max: 100
			// },
			// {
			// 	label: "User type",
			// 	name: "header_size",
			// 	type: "colorpicker"
			// },
			// {
			// 	label: "More",
			// 	name: "more_excerpt",
			// 	type: "icon-button",
			// 	icon: "ellipsis"
			// },
			// {
			// 	label: "Switch",
			// 	name: "switch_control",
			// 	type: "toggle",
			// },
			// {
			// 	label: "Birthday",
			// 	name: "birthday",
			// 	type: "date",
			// },
		],
	},
	{
		label: "Tab 2",
		key: "tab_2",
		icon: "",
		fields: [
			{
				label: "First Name New",
				name: "first_name_new",
				type: "text",
				css_class: "input-field",
				placeholder: "blah blah",
			},
			{
				label: "Last Name New",
				name: "last_name_new",
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
		// onSubmit: (e) => {
		// 	e.preventDefault();
		// 	// this is for custom submit
		// 	console.log("from builder obj", e);
		// },
	},
};
const App = () => <WPReactForm config={builder} />;
ReactDOM.render(<App />, document.getElementById("root"));
