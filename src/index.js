import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { __ } from "@wordpress/i18n";
import WPReactForm from "./wp-react-form";

(function () {
	const tabs = [
		{
			label: "Tab 1",
			key: "tab_1",
			icon: "",
			classes: "wrf-menu",
			fields: [
				// {
				// 	type: "section",
				// 	label: "Select Source",
				// 	collapsible: true,
				// 	fields: [
				// 		{
				// 			label: "Label First Name",
				// 			name: "first_name",
				// 			type: "text",
				// 			classes: "input-field",
				// 			// value: "Priyo",
				// 			placeholder: "First Name",
				// 			validation_rules: {
				// 				required: "Field should not be empty.",
				// 				"min:20": "Value has to 20 character in length",
				// 			},
				// 		},
				// 		{
				// 			label: "Last Name",
				// 			name: "last_name",
				// 			type: "text",
				// 			classes: "input-field",
				// 			value: "Mukul",
				// 			placeholder: "Last Name",
				// 			validation_rules: {
				// 				required: "Field should not be empty.",
				// 				"min:2": "Value has to 2 character in length",
				// 			},
				// 		},
				// 		{
				// 			label: "Comments",
				// 			name: "comments",
				// 			type: "textarea",
				// 			classes: "inputdd-field",
				// 			value: "blah blah",
				// 			max: 30,
				// 		},
				// 		{
				// 			label: "Are you sure?",
				// 			name: "consent",
				// 			type: "checkbox",
				// 			classes: "inputdd-field",
				// 			value: true,
				// 			lala: "lala",
				// 			max: 30,
				// 		},
				// 		{
				// 			label: "Gender",
				// 			name: "gender",
				// 			type: "radio-basic",
				// 			classes: "input-field",
				// 			value: "male",
				// 			options: [
				// 				{ label: "Male", value: "male" },
				// 				{ label: "Female", value: "female" },
				// 				{ label: "Others", value: "others" },
				// 			],
				// 		},
				// 	],
				// },
				// {
				// 	type: "section",
				// 	label: "Select Source",
				// 	collapsible: true,
				// 	collapsed: true,
				// 	fields: [
				// 		{
				// 			label: "Heading Color",
				// 			name: "heading_color_large",
				// 			type: "colorpicker",
				// 			css_class: "input-field",
				// 			value: "red",
				// 		},
				// 		{
				// 			label: "Is Checked?",
				// 			name: "is_checked",
				// 			type: "checkbox",
				// 		},
				// 		{
				// 			label: "Message",
				// 			name: "message",
				// 			type: "textarea",
				// 			css_class: "input-field",
				// 			value: "Hello World",
				// 			condition: {
				// 				is_checked: true,
				// 				consent: true,
				// 			},
				// 		},
				// 	],
				// },

				{
					label: "Notification Type",
					name: "notification_type",
					type: "radio-card",
					css_class: "notifications-type",
					style: "style-card",
					value: "sales",
					options: [
						{
							label: "Sales Notification",
							value: "sales",
							// icon:
							// "https://notificationx.test/wp-content/plugins/notificationx/admin/assets/img/sources/woocommerce.jpg",
						},
						{ label: "Comments", value: "comments" },
						{ label: "Reviews", value: "reviews" },
						{ label: "Download Stats", value: "download-stats" },
						{
							label: "Donations",
							value: "donations",
							is_pro: true,
						},
					],
				},
				{
					label: "Source",
					name: "source",
					type: "radio-card",
					css_class: "notifications-type",
					parent: "notification_type",
					options: [
						{
							label: "WooCommerce",
							value: "woocommerce",
							dependency: ["sales", "comments"],
						},
						{
							label: "EDD",
							value: "edd",
							dependency: "sales",
						},
						{
							label: "WordPress",
							value: "wp",
							dependency: "comments",
						},
					],
					// options: {
					// 	sales: [
					// 		{
					// 			label: "WooCommerce",
					// 			value: "woocommerce",
					// 			default: true,
					// 		},
					// 		{ label: "EDD", value: "edd" },
					// 	],
					// 	comments: [
					// 		{ label: "WordPress.org", value: "wordpress" },
					// 		{ label: "WordPress C", value: "new_c" },
					// 	],
					// 	reviews: [
					// 		{
					// 			label: "WordPress.org Reviews",
					// 			value: "wordpress",
					// 			default: true,
					// 		},
					// 		{
					// 			label: "WooCommerce Reviews",
					// 			value: "woo",
					// 		},
					// 	],
					// 	"download-stats": [
					// 		{
					// 			label: "WordPress.org Stats",
					// 			value: "wordpress",
					// 		},
					// 		{
					// 			label: "Freemius Stats",
					// 			value: "freemius",
					// 		},
					// 	],
					// 	donations: [
					// 		{ label: "GiveWP", value: "give" },
					// 		{ label: "NewG", value: "newg" },
					// 	],
					// },
					// condition: {
					// 	notification_type: "sales",
					// },
				},
				// {
				// 	label: "Group Control",
				// 	name: "group_control",
				// 	type: "group",
				// 	fields: [
				// 		{
				// 			label: "First Name",
				// 			name: "first_name",
				// 			type: "text",
				// 			value: "hello",
				// 			validation_rules: {
				// 				required: null,
				// 				label: "First Name", // FIXME: this label has to be taken from field label dynamically.
				// 				"min:3": "Has to be minimum 3 character long.",
				// 			},
				// 		},
				// 		{
				// 			label: "Last Name",
				// 			name: "last_name",
				// 			type: "text",
				// 			validation_rules: {
				// 				required: "Last name can not be empty",
				// 				"min:3": "Has to be minimum 3 character long.",
				// 			},
				// 		},
				// 	],
				// },
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
				// {
				// 	label: "First Name New",
				// 	name: "first_name_new",
				// 	type: "text",
				// 	css_class: "input-field",
				// 	placeholder: "blah blah",
				// },
				// {
				// 	label: "Last Name New",
				// 	name: "last_name_new",
				// 	type: "textarea",
				// 	css_class: "input-field",
				// 	value: "blah blah",
				// },
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

		return <WPReactForm config={builder} />;
	};
	ReactDOM.render(<App />, document.getElementById("root"));
})();
