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
		label: "Notification Type",
		name: "notification_select",
		type: "select",
		parent: "notification_type",
		// value: "comments",
		// search: true,
		// placeholder: "Placeholder Select",
		// multiple: true, // for multi option select
		options: [
			{
				label: "Sales Notification",
				value: "sales",
				condition: {
					notification_type: "sales",
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
		label: "Notification Type",
		name: "notification_select_2",
		type: "select",
		// parent: "notification_select",
		// search: true,
		// placeholder: "Placeholder Select",
		// multiple: true, // for multi option select
		condition: {
			notification_select: "comments",
		},
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
];

const commonFields = [
	{
		type: "checkbox",
		label: "Checkbox Control",
		name: "checkbox_control",
	},
	{
		type: "text",
		label: "Text Control",
		name: "text_control",
		// size: "large", // large: 100%,
		condition: {
			checkbox_control: true,
		},
		validation_rules: {
			required: "This is required",
			"min:3": "Has to be min 3 char long.",
		},
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
];

const tabs = [
	{
		label: "Tab 1",
		key: "tab_1",
		icon: "",
		classes: "wrf-menu",
		fields: [
			// Text Controls
			...commonFields,
			// Radio Card
			...notification_type_source_themes,
			// Select
			// ...select_fields
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
export default builder;
