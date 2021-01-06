import alimTabs from "./alim";

const notification_type_source_themes = [
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
				icon:
					"https://notificationx.test/wp-content/plugins/notificationx/admin/assets/img/sources/woocommerce.jpg",
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
					notification_type: "sales",
				},
			},
			{
				label: "EDD",
				value: "edd",
				condition: {
					notification_type: ["edd", "reviews", "sales"],
				},
			},
			{
				label: "WordPress",
				value: "wp",
				condition: {
					notification_type: "comments",
				},
			},
			{
				label: "WP.org",
				value: "wporg",
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
				icon:
					"https://notificationx.test/wp-content/plugins/notificationx/admin/assets/img/themes/nx-comment-theme-2.jpg",
				condition: {
					notification_type: "sales",
				},
			},
			{
				label: "Theme Two",
				value: "theme-two",
				condition: {
					source: ["edd"],
					notification_type: ["sales", "comments", "reviews"],
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
];

const select_fields = [
	{
		label: "Notification Type Checkbox",
		name: "notification_checkbox",
		type: "checkbox",
	},
	{
		label: "Notification Type Select",
		name: "notification_select",
		type: "select",
		// parent: "notification_type",
		// value: "comments",
		// search: true,
		// placeholder: "Placeholder Select",
		// multiple: true, // for multi option select
		// condition: {
		// 	notification_checkbox: true,
		// },
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
				condition: {
					notification_checkbox: true,
				},
			},
		],
	},
	{
		label: "Notification Type 2",
		name: "notification_select_2",
		type: "select",
		value: "comments",
		// parent: "notification_select",
		// search: true,
		// placeholder: "Placeholder Select",
		// multiple: true, // for multi option select
		condition: {
			notification_select: ["comments"],
		},
		options: [
			{
				label: "Sales Notification",
				value: "sales",
				condition: {
					notification_select: "sales",
				},
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
		label: "Notification Text",
		name: "notification_text",
		type: "text",
		// parent: "notification_select",
		// search: true,
		// placeholder: "Placeholder Select",
		// multiple: true, // for multi option select
		condition: {
			notification_select: "comments",
			notification_select_2: "sales",
		},
	},
];

const commonFields = [
	{
		type: "text",
		label: "Text Control",
		name: "text_control",
		// size: "large", // large: 100%,
		validation_rules: {
			required: "This is required",
			"min:3": "Has to be min 3 char long.",
		},
	},
	{
		label: "Content",
		name: "content_typography",
		type: "typography",
		value: {
			"font-size": "100px",
		},
	},
	{
		label: "Heading Color",
		name: "heading_color_large",
		type: "colorpicker",
		css_class: "input-field",
		value: "red",
	},
	{
		label: "Heading",
		name: "heading_typography",
		type: "typography",
		// value: "lalal",
	},
	{
		type: "number",
		label: "Number Control",
		name: "number_control",
		// validation_rules: {
		// 	required: "This is required",
		// 	"min:3": "Has to be min 3 char long.",
		// },
	},
	{
		type: "slider",
		label: "Slider Control",
		name: "slider_control",
		units: ["px", "em"],
		// validation_rules: {
		// 	required: "This is required",
		// 	"min:3": "Has to be min 3 char long.",
		// },
	},
	{
		type: "textarea",
		label: "TextArea Control",
		name: "textarea_control",
		placeholder: "Textarea Control Placeholder",
		value: "Textarea Control Value",
		// validation_rules: {
		// 	required: "This is required",
		// 	"min:3": "Has to be min 3 char long.",
		// },
	},
	{
		type: "checkbox",
		label: "Checkbox Control",
		name: "checkbox_control",
		// size: "large", // large: 100%,
		validation_rules: {
			required: "This is required",
			"min:3": "Has to be min 3 char long.",
		},
	},
	{
		type: "toggle",
		label: "Toggle Control",
		multiple: true,
		style: {
			label: {
				position: "right",
			},
			option: {
				column: 4, // 2, 3, 4, 6, 12
			},
		},
		options: [
			{
				label: "Option One",
				value: "option_one",
			},
			{
				label: "Option Two",
				disabled: true,
				value: "option_two",
			},
			{
				label: "Option Three",
				value: "option_three",
			},
			{
				label: "Option Four",
				value: "option_four",
			},
		],
		name: "toggle_control",
		value: {
			option_three: true,
		},
		// size: "large", // large: 100%,
		validation_rules: {
			required: "This is required",
			"min:3": "Has to be min 3 char long.",
		},
	},
	{
		type: "toggle",
		label: "Toggle Control 2",
		// multiple: true,
		options: [
			{
				label: "Option One",
				value: "option_one",
			},
			{
				label: "Option Two",
				value: "option_two",
			},
		],
		name: "toggle_control_2",
		// size: "large", // large: 100%,
		validation_rules: {
			required: "This is required",
			"min:3": "Has to be min 3 char long.",
		},
	},
];

const tabs = [
	{
		label: "Tab 1",
		id: "tab-content",
		icon: "",
		fields: [
			// Text Controls
			// ...commonFields,
			// Radio Card
			// ...notification_type_source_themes,
			// Select
			...select_fields,
		],
	},
	{
		label: "Tab 2",
		id: "tab_2",
		icon: "",
		fields: [
			// Text Controls
			...commonFields,
			// Radio Card
			// ...notification_type_source_themes,
			// Select
			// ...select_fields
		],
	},
];

const builder = {
	tabs,
	tabConfig: {
		active: "tab-content",
		sidebar: true,
	},
	is_pro_active: true,
	submit: {
		label: "Save Changes",
		// onSubmit: (e) => {
		// 	e.preventDefault();
		// 	// this is for custom submit
		// 	console.log("from builder obj", e);
		// },
	},
};
export default builder;
