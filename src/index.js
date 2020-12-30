import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { __ } from "@wordpress/i18n";
import WPReactForm from "./wp-react-form";
// import axios from "axios";

(function () {
	const tabs = [
		{
			label: "Tab 1",
			key: "tab_1",
			icon: "",
			classes: "wrf-menu",
			fields: [
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
					value: "woocommerce",
					options: [
						{
							label: "WooCommerce",
							value: "woocommerce",
							condition: {
								notification_type: ["sales"],
							},
						},
						{
							label: "EDD",
							value: "edd",
							// dependency: "sales",
							condition: {
								notification_type: ["edd", "reviews", "sales"],
							},
						},
						{
							label: "WordPress",
							value: "wp",
							// dependency: "comments",
							condition: {
								notification_type: "comments",
							},
						},
						{
							label: "WP.org",
							value: "wporg",
							// dependency: "comments",
							condition: {
								notification_type: "comments",
							},
						},
					],
					validation_rules: {
						required: "This Is Required",
					},
				},
				{
					label: "Themes",
					name: "themes",
					type: "radio-card",
					parent: ["notification_type", "source"],
					value: "theme-one",
					options: [
						{
							label: "Theme One",
							value: "theme-one",
							condition: {
								notification_type: "sales",
							},
						},
						{
							label: "Theme Two",
							value: "theme-two",
							condition: {
								source: "edd",
								notification_type: [
									"sales",
									"comments",
									"reviews",
								],
							},
						},
						{
							label: "Theme Three",
							value: "theme-three",
							condition: {
								notification_type: "sales",
							},
						},
						{
							label: "Theme Four",
							value: "theme-four",
							condition: {
								notification_type: "sales",
							},
						},
						{
							label: "Theme Five",
							value: "theme-five",
							condition: {
								notification_type: "sales",
							},
						},
					],
					validation_rules: {
						required: "This Is Required",
					},
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
	const App = () => {
		return <WPReactForm config={builder} />;
	};
	ReactDOM.render(<App />, document.getElementById("root"));
})();
