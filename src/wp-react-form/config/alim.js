const tabs = [
	{
		label: "Source",
		id: "tab-source",
		icon:
			"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/icons/database.svg",
		classes: "tab-source",
		fields: [
			{
				label: "Select Source",
				name: "select-source",
				type: "section",
				fields: [
					{
						label: "Notification Type",
						name: "notification-type",
						type: "radio-card",
						value: "conversions",
						options: [
							{
								value: "form",
								label: "Contact Form",
								is_pro: false,
							},
							{
								value: "email_subscription",
								label: "Email Subscription",
								is_pro: false,
							},
							{
								value: "custom",
								label: "Custom Notification",
								is_pro: false,
							},
							{
								value: "conversions",
								label: "Sales Notification",
								is_pro: false,
							},
							{
								value: "reviews",
								label: "Reviews",
								is_pro: false,
							},
							{
								value: "download_stats",
								label: "Download Stats",
								is_pro: false,
							},
							{
								value: "donation",
								label: "Donations",
								is_pro: false,
							},
							{
								value: "page_analytics",
								label: "Page Analytics",
								is_pro: false,
							},
							{
								value: "elearning",
								label: "eLearning",
								is_pro: false,
							},
							{
								value: "press_bar",
								label: "Notification Bar",
								is_pro: false,
							},
							{
								value: "comments",
								label: "Comments",
								is_pro: false,
							},
						],
						validation_rules: { required: true, label: "Type" },
					},
					{
						label: "Source",
						name: "source",
						parent: "notification-type",
						type: "radio-card",
						options: [
							{
								condition: { "notification-type": ["form"] },
								label: "Contact Form 7",
								icon: "",
								value: "cf7",
							},
							{
								condition: {
									"notification-type": ["email_subscription"],
								},
								label: "ConvertKit",
								icon: "",
								value: "convertkit",
							},
							{
								condition: { "notification-type": ["custom"] },
								label: "Custom Notification",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/custom.jpg",
								value: "custom_notification",
							},
							{
								condition: {
									"notification-type": ["conversions"],
								},
								label: "Easy Digital Downloads",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/edd.jpg",
								value: "edd",
							},
							{
								condition: {
									"notification-type": ["email_subscription"],
								},
								label: "Envato",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/envato.png",
								value: "envato",
							},
							{
								condition: {
									"notification-type": [
										"reviews",
										"download_stats",
										"conversions",
									],
								},
								label: "Freemius",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/freemius.jpg",
								value: "freemius",
							},
							{
								condition: { "notification-type": ["form"] },
								label: "Gravity Forms",
								icon: "",
								value: "grvf",
							},
							{
								condition: {
									"notification-type": ["donation"],
								},
								label: "Give",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/give.png",
								value: "give",
							},
							{
								condition: {
									"notification-type": ["page_analytics"],
								},
								label: "Google Analytics",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/google-analytics.jpg",
								value: "google",
							},
							{
								condition: {
									"notification-type": ["email_subscription"],
								},
								label: "IFTTT",
								icon: "",
								value: "ifttt",
							},
							{
								condition: {
									"notification-type": ["elearning"],
								},
								label: "LearnDash",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/learndash.png",
								value: "learndash",
							},
							{
								condition: {
									"notification-type": ["email_subscription"],
								},
								label: "MailChimp",
								icon: "",
								value: "mailchimp",
							},
							{
								condition: { "notification-type": ["form"] },
								label: "Ninja Forms",
								icon: "",
								value: "njf",
							},
							{
								condition: {
									"notification-type": ["press_bar"],
								},
								label: "Press Bar",
								icon: "",
								value: "press_bar",
							},
							{
								condition: { "notification-type": ["reviews"] },
								label: "ReviewX",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/reviewx.png",
								value: "reviewx",
							},
							{
								condition: {
									"notification-type": ["elearning"],
								},
								label: "Tutor",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/tutor.png",
								value: "tutor",
							},
							{
								condition: { "notification-type": ["form"] },
								label: "WPForms",
								icon: "",
								value: "wpf",
							},
							{
								condition: {
									"notification-type": [
										"conversions",
										"reviews",
										"comments",
									],
								},
								label: "WooCommerce",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/woocommerce.jpg",
								value: "woocommerce",
							},
							{
								condition: {
									"notification-type": ["comments"],
								},
								label: "WP Comments",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/wordpress.jpg",
								value: "wp_comments",
							},
							{
								condition: { "notification-type": ["reviews"] },
								label: "WP.Org Reviews",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/wordpress.jpg",
								value: "wp_reviews",
							},
							{
								condition: {
									"notification-type": ["download_stats"],
								},
								label: "WP.Org Stats",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/wordpress.jpg",
								value: "wp_stats",
							},
							{
								condition: {
									"notification-type": ["email_subscription"],
								},
								label: "Zapier",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/sources/zapier.png",
								value: "zapier",
							},
						],
						validation_rules: { required: true, label: "Source" },
					},
				],
			},
		],
	},
	{
		label: "Design",
		id: "tab-design",
		icon:
			"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/icons/magic-wand.svg",
		classes: "tab-design",
		fields: [
			{
				label: "Themes",
				name: "themes",
				type: "section",
				fields: [
					{
						label: "Themes",
						name: "themes",
						type: "radio-card",
						value: "",
						parent: ["notification-type", "source"],
						options: [
							{
								label: "form_theme-one",
								value: "form_theme-one",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/form/cf7-theme-two.jpg",
								condition: {
									"notification-type": [
										"form",
										"custom",
										"form",
										"form",
										"form",
									],
									source: [
										"cf7",
										"custom_notification",
										"grvf",
										"njf",
										"wpf",
									],
								},
							},
							{
								label: "form_theme-two",
								value: "form_theme-two",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/form/cf7-theme-one.jpg",
								condition: {
									"notification-type": [
										"form",
										"custom",
										"form",
										"form",
										"form",
									],
									source: [
										"cf7",
										"custom_notification",
										"grvf",
										"njf",
										"wpf",
									],
								},
							},
							{
								label: "form_theme-three",
								value: "form_theme-three",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/form/cf7-theme-three.jpg",
								condition: {
									"notification-type": [
										"form",
										"custom",
										"form",
										"form",
										"form",
									],
									source: [
										"cf7",
										"custom_notification",
										"grvf",
										"njf",
										"wpf",
									],
								},
							},
							{
								label: "conversions_theme-one",
								value: "conversions_theme-one",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-conv-theme-2.jpg",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "conversions_theme-two",
								value: "conversions_theme-two",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-conv-theme-1.jpg",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "conversions_theme-three",
								value: "conversions_theme-three",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-conv-theme-3.jpg",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "conversions_theme-four",
								value: "conversions_theme-four",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/nx-conv-theme-four.png",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "conversions_theme-five",
								value: "conversions_theme-five",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/nx-conv-theme-five.png",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "conversions_conv-theme-six",
								value: "conversions_conv-theme-six",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/nx-conv-theme-6.jpg",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "conversions_maps_theme",
								value: "conversions_maps_theme",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/maps-theme.png",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "conversions_conv-theme-seven",
								value: "conversions_conv-theme-seven",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/nx-conv-theme-7.png",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "conversions_conv-theme-eight",
								value: "conversions_conv-theme-eight",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/nx-conv-theme-8.png",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "conversions_conv-theme-nine",
								value: "conversions_conv-theme-nine",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/nx-conv-theme-9.png",
								condition: {
									"notification-type": [
										"custom",
										"conversions",
										"conversions",
										"conversions",
									],
									source: [
										"custom_notification",
										"edd",
										"freemius",
										"woocommerce",
									],
								},
							},
							{
								label: "reviews_total-rated",
								value: "reviews_total-rated",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/total-rated.png",
								condition: {
									"notification-type": [
										"custom",
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
										"custom_notification",
										"freemius",
										"reviewx",
										"woocommerce",
										"wp_reviews",
									],
								},
							},
							{
								label: "reviews_reviewed",
								value: "reviews_reviewed",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/reviewed.png",
								condition: {
									"notification-type": [
										"custom",
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
										"custom_notification",
										"freemius",
										"reviewx",
										"woocommerce",
										"wp_reviews",
									],
								},
							},
							{
								label: "reviews_review_saying",
								value: "reviews_review_saying",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/saying-review.png",
								condition: {
									"notification-type": [
										"custom",
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
										"custom_notification",
										"freemius",
										"reviewx",
										"woocommerce",
										"wp_reviews",
									],
								},
							},
							{
								label: "reviews_review-comment",
								value: "reviews_review-comment",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/review-with-comment.jpg",
								condition: {
									"notification-type": [
										"custom",
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
										"custom_notification",
										"freemius",
										"reviewx",
										"woocommerce",
										"wp_reviews",
									],
								},
							},
							{
								label: "reviews_review-comment-2",
								value: "reviews_review-comment-2",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/review-with-comment-2.jpg",
								condition: {
									"notification-type": [
										"custom",
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
										"custom_notification",
										"freemius",
										"reviewx",
										"woocommerce",
										"wp_reviews",
									],
								},
							},
							{
								label: "reviews_review-comment-3",
								value: "reviews_review-comment-3",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/review-with-comment-3.jpg",
								condition: {
									"notification-type": [
										"custom",
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
										"custom_notification",
										"freemius",
										"reviewx",
										"woocommerce",
										"wp_reviews",
									],
								},
							},
							{
								label: "download_stats_today-download",
								value: "download_stats_today-download",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/today-download.png",
								condition: {
									"notification-type": [
										"custom",
										"download_stats",
										"download_stats",
									],
									source: [
										"custom_notification",
										"freemius",
										"wp_stats",
									],
								},
							},
							{
								label: "download_stats_7day-download",
								value: "download_stats_7day-download",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/7day-download.png",
								condition: {
									"notification-type": [
										"custom",
										"download_stats",
										"download_stats",
									],
									source: [
										"custom_notification",
										"freemius",
										"wp_stats",
									],
								},
							},
							{
								label: "download_stats_actively_using",
								value: "download_stats_actively_using",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/actively-using.png",
								condition: {
									"notification-type": [
										"custom",
										"download_stats",
										"download_stats",
									],
									source: [
										"custom_notification",
										"freemius",
										"wp_stats",
									],
								},
							},
							{
								label: "download_stats_total-download",
								value: "download_stats_total-download",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/total-download.png",
								condition: {
									"notification-type": [
										"custom",
										"download_stats",
										"download_stats",
									],
									source: [
										"custom_notification",
										"freemius",
										"wp_stats",
									],
								},
							},
							{
								label: "donation_theme-one",
								value: "donation_theme-one",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/donation-theme-1.jpg",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "donation_theme-two",
								value: "donation_theme-two",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/donation-theme-2.jpg",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "donation_theme-three",
								value: "donation_theme-three",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/donation-theme-3.jpg",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "donation_theme-four",
								value: "donation_theme-four",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/donation-theme-4.png",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "donation_theme-five",
								value: "donation_theme-five",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/donation-theme-5.png",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "donation_conv-theme-six",
								value: "donation_conv-theme-six",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/donation-theme-6.jpg",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "donation_maps_theme",
								value: "donation_maps_theme",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/maps-theme.png",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "donation_conv-theme-seven",
								value: "donation_conv-theme-seven",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/donation-theme-7.png",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "donation_conv-theme-eight",
								value: "donation_conv-theme-eight",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/donation-theme-8.png",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "donation_conv-theme-nine",
								value: "donation_conv-theme-nine",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/donation/donation-theme-9.png",
								condition: {
									"notification-type": ["custom", "donation"],
									source: ["custom_notification", "give"],
								},
							},
							{
								label: "elearning_theme-one",
								value: "elearning_theme-one",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/elearning-theme-1.jpg",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "elearning_theme-two",
								value: "elearning_theme-two",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/elearning-theme-2.jpg",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "elearning_theme-three",
								value: "elearning_theme-three",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/elearning-theme-3.jpg",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "elearning_theme-four",
								value: "elearning_theme-four",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/elearning-theme-4.png",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "elearning_theme-five",
								value: "elearning_theme-five",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/elearning-theme-5.png",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "elearning_conv-theme-six",
								value: "elearning_conv-theme-six",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/elearning-theme-6.png",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "elearning_maps_theme",
								value: "elearning_maps_theme",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/maps-theme.png",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "elearning_conv-theme-seven",
								value: "elearning_conv-theme-seven",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/elearning-theme-7.png",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "elearning_conv-theme-eight",
								value: "elearning_conv-theme-eight",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/elearning-theme-8.png",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "elearning_conv-theme-nine",
								value: "elearning_conv-theme-nine",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/elearning/elearning-theme-9.png",
								condition: {
									"notification-type": [
										"custom",
										"elearning",
										"elearning",
									],
									source: [
										"custom_notification",
										"learndash",
										"tutor",
									],
								},
							},
							{
								label: "press_bar_theme-one",
								value: "press_bar_theme-one",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-bar-theme-one.jpg",
								condition: {
									"notification-type": [
										"custom",
										"press_bar",
									],
									source: [
										"custom_notification",
										"press_bar",
									],
								},
							},
							{
								label: "press_bar_theme-two",
								value: "press_bar_theme-two",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-bar-theme-two.jpg",
								condition: {
									"notification-type": [
										"custom",
										"press_bar",
									],
									source: [
										"custom_notification",
										"press_bar",
									],
								},
							},
							{
								label: "press_bar_theme-three",
								value: "press_bar_theme-three",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-bar-theme-three.jpg",
								condition: {
									"notification-type": [
										"custom",
										"press_bar",
									],
									source: [
										"custom_notification",
										"press_bar",
									],
								},
							},
							{
								label: "comments_theme-one",
								value: "comments_theme-one",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-comment-theme-2.jpg",
								condition: {
									"notification-type": [
										"custom",
										"comments",
										"comments",
									],
									source: [
										"custom_notification",
										"woocommerce",
										"wp_comments",
									],
								},
							},
							{
								label: "comments_theme-two",
								value: "comments_theme-two",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-comment-theme-1.jpg",
								condition: {
									"notification-type": [
										"custom",
										"comments",
										"comments",
									],
									source: [
										"custom_notification",
										"woocommerce",
										"wp_comments",
									],
								},
							},
							{
								label: "comments_theme-three",
								value: "comments_theme-three",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-comment-theme-3.jpg",
								condition: {
									"notification-type": [
										"custom",
										"comments",
										"comments",
									],
									source: [
										"custom_notification",
										"woocommerce",
										"wp_comments",
									],
								},
							},
							{
								label: "comments_theme-six-free",
								value: "comments_theme-six-free",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-comment-theme-4.jpg",
								condition: {
									"notification-type": [
										"custom",
										"comments",
										"comments",
									],
									source: [
										"custom_notification",
										"woocommerce",
										"wp_comments",
									],
								},
							},
							{
								label: "comments_theme-seven-free",
								value: "comments_theme-seven-free",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-comment-theme-5.jpg",
								condition: {
									"notification-type": [
										"custom",
										"comments",
										"comments",
									],
									source: [
										"custom_notification",
										"woocommerce",
										"wp_comments",
									],
								},
							},
							{
								label: "comments_theme-eight-free",
								value: "comments_theme-eight-free",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/nx-comment-theme-6.jpg",
								condition: {
									"notification-type": [
										"custom",
										"comments",
										"comments",
									],
									source: [
										"custom_notification",
										"woocommerce",
										"wp_comments",
									],
								},
							},
							{
								label: "comments_theme-four",
								value: "comments_theme-four",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/nx-comment-theme-four.png",
								condition: {
									"notification-type": [
										"custom",
										"comments",
										"comments",
									],
									source: [
										"custom_notification",
										"woocommerce",
										"wp_comments",
									],
								},
							},
							{
								label: "comments_theme-five",
								value: "comments_theme-five",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/nx-comment-theme-five.png",
								condition: {
									"notification-type": [
										"custom",
										"comments",
										"comments",
									],
									source: [
										"custom_notification",
										"woocommerce",
										"wp_comments",
									],
								},
							},
							{
								label: "comments_maps_theme",
								value: "comments_maps_theme",
								is_pro: true,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/pro/maps-theme-comments.png",
								condition: {
									"notification-type": [
										"custom",
										"comments",
										"comments",
									],
									source: [
										"custom_notification",
										"woocommerce",
										"wp_comments",
									],
								},
							},
						],
						validation_rules: { required: true, label: "Theme" },
					},
				],
			},
		],
	},
	{
		label: "Content",
		id: "tab-content",
		icon:
			"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/icons/pencil.svg",
		classes: "tab-content",
		fields: [
			{
				label: "Content",
				name: "content",
				type: "section",
				priority: 90,
				fields: [
					{
						label: "Notification Template",
						name: "notification-template",
						type: "group",
						fields: [
							{
								label: "First Parameter",
								name: "first_param",
								type: "select",
								priority: 1,
								default: "tag_name",
								options: [
									{ value: "tag_custom", label: "Custom" },
								],
							},
							{
								label: "Custom First Parameter",
								name: "custom_first_param",
								type: "text",
								priority: 5,
								default: "Someone",
								parent: "notification-template[first_param]",
								condition: {
									"notification-template[first_param]":
										"tag_custom",
								},
							},
							{
								label: "Second Param",
								name: "second_param",
								type: "text",
								priority: 10,
								default: "recently purchased",
							},
							{
								label: "Third Parameter",
								name: "third_param",
								type: "select",
								priority: 15,
								default: "tag_title",
								options: [
									{ value: "tag_custom", label: "Custom" },
								],
							},
							{
								label: "Custom Third Param",
								name: "custom_third_param",
								type: "text",
								priority: 20,
								default: "Some time ago",
								parent: "notification-template[third_param]",
								condition: {
									"notification-template[third_param]":
										"tag_custom",
								},
							},
							{
								label: "Fourth Parameter",
								name: "fourth_param",
								type: "select",
								priority: 25,
								default: "tag_time",
								options: [
									{
										value: "tag_time",
										label: "Definite Time",
									},
									{
										value: "tag_sometime",
										label: "Some time ago",
									},
								],
							},
							{
								label: "Custom Fourth Parameter",
								name: "custom_fourth_param",
								type: "text",
								priority: 30,
								default: "Some time ago",
								parent: "notification-template[fourth_param]",
								condition: {
									"notification-template[fourth_param]":
										"tag_sometime",
								},
							},
						],
					},
				],
			},
		],
	},
	{
		label: "Display",
		id: "tab-display",
		icon:
			"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/icons/screen.svg",
		classes: "tab-display",
		fields: [
			{
				label: "Visibility",
				name: "visibility",
				type: "section",
				fields: [
					{
						label: "Show On",
						name: "show_on",
						type: "select",
						value: "on_selected",
						options: [
							{ value: "everywhere", label: "Show Everywhere" },
							{ value: "on_selected", label: "Show On Selected" },
							{
								value: "hide_on_selected",
								label: "Hide On Selected",
							},
						],
					},
					{
						label: "Locations",
						name: "all_locations",
						type: "select",
						// value: ["is_front_page", "is_home"],
						multiple: true,
						// parent: "show_on",
						condition: {
							show_on: ["on_selected", "hide_on_selected"],
						},
						options: [
							{ value: "is_front_page", label: "Front page" },
							{ value: "is_home", label: "Blog page" },
							{
								value: "is_singular",
								label: "All posts, pages and custom post types",
							},
							{ value: "is_single", label: "All posts" },
							{ value: "is_page", label: "All pages" },
							{
								value: "is_attachment",
								label: "All attachments",
							},
							{ value: "is_search", label: "Search results" },
							{ value: "is_404", label: "404 error page" },
							{ value: "is_archive", label: "All archives" },
							{
								value: "is_category",
								label: "All category archives",
							},
							{ value: "is_tag", label: "All tag archives" },
						],
					},
					{
						label: "Display For",
						name: "show_on_display",
						type: "select",
						value: "",
						options: [
							{ value: "always", label: "Everyone" },
							{
								value: "logged_out_user",
								label: "Logged Out User",
							},
							{
								value: "logged_in_user",
								label: "Logged In User",
							},
						],
						help:
							'<a target="_blank" rel="nofollow" href="https://notificationx.com/in/pro-display-control">More Control in Pro</a>',
					},
				],
			},
			{
				label: "IMAGE",
				name: "image",
				type: "section",
				fields: [
					{
						label: "Show Default Image",
						name: "show_default_image",
						type: "checkbox",
						value: false,
					},
					{
						label: "Choose an Image",
						name: "default_avatar",
						type: "radio-card",
						value: "",
						description:
							"If checked, this will show in notifications.",
						parent: "show_default_image",
						condition: { show_default_image: true },
						options: [
							{
								value: "verified.svg",
								label: "Verified",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/public/image/icons/verified.svg",
							},
							{
								value: "flames.svg",
								label: "Flames",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/public/image/icons/flames.svg",
							},
							{
								value: "flames.gif",
								label: "Flames GIF",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/public/image/icons/flames.gif",
							},
							{
								value: "pink-face-looped.gif",
								label: "Pink Face",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/public/image/icons/pink-face-looped.gif",
							},
							{
								value: "blue-face-non-looped.gif",
								label: "Blue Face",
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/public/image/icons/blue-face-non-looped.gif",
							},
						],
					},
					{
						label: "Upload an Image",
						name: "image_url",
						type: "media",
						value: "",
						parent: "show_default_image",
						condition: { show_default_image: true },
					},
					{
						label: "Image",
						name: "show_notification_image",
						type: "select",
						value: "",
						parent: "show_default_image",
						condition: { show_default_image: false },
						options: [
							{ value: "product_image", label: "Featured Image" },
							{ value: "gravatar", label: "Gravatar" },
							{ value: "none", label: "None" },
						],
					},
				],
			},
		],
	},
	{
		label: "Customize",
		id: "tab-customize",
		icon:
			"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/icons/cog.svg",
		classes: "tab-customize",
		fields: [
			{
				label: "Appearance",
				name: "appearance",
				type: "section",
				fields: [
					{
						label: "Position",
						name: "position",
						type: "select",
						value: "",
						priority: 50,
						parent: "notification-type",
						options: [
							{
								label: "Top",
								value: "top",
								condition: { "notification-type": "press_bar" },
							},
							{
								label: "Bottom",
								value: "bottom",
								condition: { "notification-type": "press_bar" },
							},
							{
								label: "Bottom Left",
								value: "bottom_left",
								condition: {
									"notification-type": "!press_bar",
								},
							},
							{
								label: "Bottom Right",
								value: "bottom_right",
								condition: {
									"notification-type": "!press_bar",
								},
							},
						],
					},
					{
						label: "Notification Size",
						name: "size",
						type: "number",
						default: 500,
						priority: 51,
						help: "Set a max width for notification.",
					},
					{
						label: "Sticky Bar?",
						name: "sticky_bar",
						type: "checkbox",
						default: 0,
						priority: 60,
						description:
							"If checked, this will fixed Notification Bar at top or bottom.",
					},
					{
						label: "Display Overlapping",
						name: "display_overlapping",
						type: "checkbox",
						default: 0,
						priority: 61,
						description:
							"Show Notification Bar overlapping content instead of pushing.",
					},
					{
						label: "Display Close Option",
						name: "close_button",
						type: "checkbox",
						default: 1,
						priority: 70,
						description: "Display a close button.",
					},
					{
						label: "Mobile Visibility",
						name: "hide_on_mobile",
						type: "checkbox",
						default: 1,
						priority: 200,
						description: "Hide NotificationX on mobile.",
					},
				],
			},
			{
				label: "Queue Management",
				name: "queue_management",
				type: "section",
				priority: 150,
				fields: [
					{
						label: "Enable Global Queue",
						name: "global_queue_active",
						type: "checkbox",
						value: "",
						priority: 0,
						default: 0,
						is_pro: true,
					},
				],
			},
			{
				label: "Timing",
				name: "timing",
				type: "section",
				priority: 200,
				parent: "global_queue_active",
				condition: { global_queue_active: false },
				fields: [
					{
						label: "Delay Before First Notification",
						name: "delay_before",
						type: "number",
						value: "",
						priority: 40,
						default: 5,
						help: "Initial Delay",
						description: "seconds",
					},
					{
						label: "Auto Hide",
						name: "auto_hide",
						type: "checkbox",
						value: "",
						priority: 50,
						default: false,
						description:
							"If checked, notification bar will be hidden after the time set below.",
					},
					{
						label: "Hide After",
						name: "hide_after",
						type: "number",
						priority: 55,
						default: 60,
						description: "seconds",
						help: "Hide after 60 seconds",
						parent: "auto_hide",
						condition: { auto_hide: true },
					},
					{
						name: "display_for",
						type: "number",
						label: "Display For",
						description: "seconds",
						help: "Display each notification for * seconds",
						priority: 60,
						default: 5,
					},
					{
						name: "delay_between",
						type: "number",
						label: "Delay Between",
						description: "seconds",
						help: "Delay between each notification",
						priority: 70,
						default: 5,
					},
				],
			},
			{
				label: "Behaviour",
				name: "behaviour",
				type: "section",
				priority: 300,
				collapsable: true,
				fields: [
					{
						name: "display_last",
						type: "number",
						label: "Display The Last",
						description: "conversions",
						default: 20,
						priority: 40,
						max: 20,
					},
					{
						name: "display_from",
						type: "number",
						label: "Display From The Last",
						priority: 45,
						default: 2,
						description: "days",
					},
					{
						name: "loop",
						type: "checkbox",
						label: "Loop Notification",
						priority: 50,
						default: true,
					},
					{
						name: "link_open",
						type: "checkbox",
						label: "Open Link In New Tab",
						priority: 60,
						default: false,
					},
				],
			},
		],
	},
	{
		label: "Modules",
		id: "modules",
		icon:
			"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/icons/pencil.svg",
		classes: "tab-modules",
		fields: [
			{
				label: "Modules",
				name: "modules",
				type: "radio-card",
				value: "conversions",
				options: [
					{
						value: "modules_cf7",
						label: "Contact Form 7",
						link:
							"https://notificationx.com/docs/contact-form-submission-alert/",
					},
					{
						value: "modules_convertkit",
						label: "ConvertKit",
						link:
							"https://notificationx.com/docs/contact-form-submission-alert/",
					},
					{
						value: "modules_custom_notification",
						label: "Custom Notification",
						link: "",
					},
					{
						value: "modules_edd",
						label: "Easy Digital Downloads",
						link:
							"https://notificationx.com/docs/notificationx-easy-digital-downloads/",
					},
					{
						value: "modules_envato",
						label: "Envato",
						link:
							"https://notificationx.com/docs/envato-sales-notification",
					},
					{
						value: "modules_freemius",
						label: "Freemius",
						link:
							"https://notificationx.com/docs/freemius-sales-notification/",
					},
					{
						value: "modules_grvf",
						label: "Gravity Forms",
						link:
							"https://notificationx.com/docs/contact-form-submission-alert/",
					},
					{
						value: "modules_give",
						label: "Give",
						link:
							"https://notificationx.com/docs/givewp-donation-alert/",
					},
					{
						value: "modules_google_analytics",
						label: "Google Analytics",
						link:
							"https://notificationx.com/docs/google-analytics/",
					},
					{
						value: "modules_ifttt",
						label: "IFTTT",
						link:
							"https://notificationx.com/docs/ifttt-notification-alert/",
					},
					{
						value: "modules_learndash",
						label: "LearnDash",
						link:
							"https://notificationx.com/docs/how-to-display-learndash-course-enrollment-alert-using-notificationx/",
					},
					{
						value: "modules_mailchimp",
						label: "MailChimp",
						link:
							"https://notificationx.com/docs/mailchimp-email-subscription-alert/",
					},
					{
						value: "modules_njf",
						label: "Ninja Forms",
						link:
							"https://notificationx.com/docs/contact-form-submission-alert/",
					},
					{
						value: "modules_bar",
						label: "Notification Bar",
						link:
							"https://notificationx.com/docs/notification-bar/",
					},
					{
						value: "modules_reviewx",
						label: "ReviewX",
						link:
							"https://notificationx.com/docs/reviewx-notification-alerts/",
					},
					{
						value: "modules_tutor",
						label: "Tutor",
						link: "https://notificationx.com/docs/tutor-lms/",
					},
					{
						value: "modules_wpf",
						label: "WPForms",
						link:
							"https://notificationx.com/docs/contact-form-submission-alert/",
					},
					{
						value: "modules_woocommerce",
						label: "WooCommerce",
						link:
							"https://notificationx.com/docs/woocommerce-sales-notifications/",
					},
					{
						value: "modules_wordpress",
						label: "WordPress",
						link:
							"https://notificationx.com/docs-category/configurations/",
					},
					{
						value: "modules_zapier",
						label: "Zapier",
						link:
							"https://notificationx.com/docs/zapier-notification-alert/",
					},
				],
			},
		],
	},
];

export default tabs;
