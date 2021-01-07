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
								value: "reviews",
								label: "Reviews",
								is_pro: false,
							},
						],
						validation_rules: {
							required: true,
							label: "Type",
						},
					},
					{
						label: "Source",
						name: "source",
						parent: "notification-type",
						type: "radio-card",
						options: [
							{
								condition: {
									"notification-type": ["form"],
								},
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
								condition: {
									"notification-type": ["custom"],
								},
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
								condition: {
									"notification-type": ["form"],
								},
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
								condition: {
									"notification-type": ["form"],
								},
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
								condition: {
									"notification-type": ["reviews"],
								},
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
								condition: {
									"notification-type": ["form"],
								},
								label: "WPForms",
								icon: "",
								value: "wpf",
							},
							{
								condition: {
									"notification-type": [
										"conversions",
										"reviews",
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
								condition: {
									"notification-type": ["reviews"],
								},
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
						validation_rules: {
							required: true,
							label: "Source",
						},
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
								label: "reviews_total-rated",
								value: "reviews_total-rated",
								is_pro: null,
								icon:
									"https://nx.alim.dev/wp-content/plugins/notificationx-new/assets/admin/images/extensions/themes/wporg/total-rated.png",
								trigger: {
									"notification-template": {
										first_param: "tag_rated",
										custom_first_param: "Someone",
										second_param: "people rated",
										third_param: "tag_plugin_name",
										fourth_param: "tag_rating",
										custom_fourth_param: "Some time ago",
									},
								},
								condition: {
									"notification-type": [
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
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
								trigger: {
									"notification-template": {
										first_param: "tag_username",
										custom_first_param: "Someone",
										second_param: "just reviewed",
										third_param: "tag_plugin_name",
										fourth_param: "tag_rating",
										custom_fourth_param: "Some time ago",
									},
								},
								condition: {
									"notification-type": [
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
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
								trigger: {
									"notification-template": {
										first_param: "tag_username",
										custom_first_param: "Someone",
										second_param: "saying",
										third_param: "tag_title",
										fourth_param: "about",
										fifth_param: "tag_plugin_name",
										sixth_param: "tag_plugin_name_text",
									},
								},
								condition: {
									"notification-type": [
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
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
								trigger: {
									"notification-template": {
										first_param: "tag_username",
										custom_first_param: "Someone",
										second_param: "just reviewed",
										third_param: "tag_plugin_review",
										fourth_param: "tag_rating",
										custom_fourth_param: "Some time ago",
									},
								},
								condition: {
									"notification-type": [
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
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
								trigger: {
									"notification-template": {
										first_param: "tag_username",
										custom_first_param: "Someone",
										second_param: "just reviewed",
										third_param: "tag_plugin_review",
										fourth_param: "tag_rating",
										custom_fourth_param: "Some time ago",
									},
								},
								condition: {
									"notification-type": [
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
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
								trigger: {
									"notification-template": {
										first_param: "tag_username",
										custom_first_param: "Someone",
										second_param: "just reviewed",
										third_param: "tag_plugin_review",
										fourth_param: "tag_time",
										custom_fourth_param: "Some time ago",
									},
								},
								condition: {
									"notification-type": [
										"reviews",
										"reviews",
										"reviews",
										"reviews",
									],
									source: [
										"freemius",
										"reviewx",
										"woocommerce",
										"wp_reviews",
									],
								},
							},
						],
						validation_rules: {
							required: true,
							label: "Theme",
						},
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
						display: "inline",
						fields: [
							{
								// label: "First Parameter",
								name: "first_param",
								type: "select",
								priority: 1,
								default: "tag_name",
								options: [
									{
										value: "tag_custom",
										label: "Custom",
									},
									{
										value: "tag_username",
										label: "Username",
										condition: {
											themes: [
												"reviews_total-rated",
												"reviews_reviewed",
												"reviews_review-comment",
												"reviews_review-comment-2",
												"reviews_review-comment-3",
												"reviews_review_saying",
											],
										},
									},
									{
										value: "tag_rated",
										label: "Rated",
										condition: {
											themes: [
												"reviews_total-rated",
												"reviews_reviewed",
												"reviews_review-comment",
												"reviews_review-comment-2",
												"reviews_review-comment-3",
											],
										},
									},
								],
							},
							{
								// label: "Custom First Parameter",
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
								// label: "Second Param",
								name: "second_param",
								type: "text",
								priority: 10,
								default: "recently purchased",
							},
							{
								// label: "Third Parameter",
								name: "third_param",
								type: "select",
								priority: 20,
								default: "tag_title",
								options: [
									{
										value: "tag_custom",
										label: "Custom",
									},
									{
										value: "tag_plugin_name",
										label: "Plugin Name",
										condition: {
											themes: [
												"reviews_total-rated",
												"reviews_reviewed",
												"reviews_review-comment",
												"reviews_review-comment-2",
												"reviews_review-comment-3",
											],
										},
									},
									{
										value: "tag_plugin_review",
										label: "Review",
										condition: {
											themes: [
												"reviews_total-rated",
												"reviews_reviewed",
												"reviews_review-comment",
												"reviews_review-comment-2",
												"reviews_review-comment-3",
											],
										},
									},
									{
										value: "tag_anonymous_title",
										label: "Anonymous Title",
										condition: {
											themes: [
												"reviews_total-rated",
												"reviews_reviewed",
												"reviews_review-comment",
												"reviews_review-comment-2",
												"reviews_review-comment-3",
												"reviews_review_saying",
											],
										},
									},
									{
										value: "tag_title",
										label: "Review Title",
										condition: {
											themes: ["reviews_review_saying"],
										},
									},
								],
							},
							{
								// label: "Custom Third Param",
								name: "custom_third_param",
								type: "text",
								priority: 25,
								default: "Some time ago",
								parent: "notification-template[third_param]",
								condition: {
									"notification-template[third_param]":
										"tag_custom",
								},
							},
							{
								// label: "Fourth Parameter",
								name: "fourth_param",
								type: "select",
								priority: 30,
								default: "tag_time",
								options: [
									{
										value: "tag_custom",
										label: "Custom",
									},
									{
										value: "tag_rating",
										label: "Rating",
										condition: {
											themes: [
												"reviews_total-rated",
												"reviews_reviewed",
												"reviews_review-comment",
												"reviews_review-comment-2",
												"reviews_review-comment-3",
											],
										},
									},
									{
										value: "tag_time",
										label: "Definite Time",
										condition: {
											themes: [
												"reviews_total-rated",
												"reviews_reviewed",
												"reviews_review-comment",
												"reviews_review-comment-2",
												"reviews_review-comment-3",
											],
										},
									},
									{
										value: "tag_sometime",
										label: "Some time ago",
										condition: {
											themes: [
												"reviews_total-rated",
												"reviews_reviewed",
												"reviews_review-comment",
												"reviews_review-comment-2",
												"reviews_review-comment-3",
											],
										},
									},
									{
										value: "tag_title",
										label: "Review Title",
										condition: {
											themes: ["reviews_review_saying"],
										},
									},
									{
										value: "tag_anonymous_title",
										label: "Anonymous Title",
										condition: {
											themes: ["reviews_review_saying"],
										},
									},
								],
							},
							{
								// label: "Custom Fourth Parameter",
								name: "custom_fourth_param",
								type: "text",
								priority: 35,
								default: "Some time ago",
								parent: "notification-template[fourth_param]",
								condition: {
									"notification-template[fourth_param]":
										"tag_custom",
								},
							},
							{
								// label: "Fifth Parameter",
								name: "fifth_param",
								type: "select",
								priority: 40,
								options: [
									{
										value: "tag_custom",
										label: "Custom",
									},
									{
										value: "tag_plugin_name",
										label: "Plugin Name",
										condition: {
											themes: ["reviews_review_saying"],
										},
									},
								],
							},
							{
								// label: "Custom Fifth Parameter",
								name: "custom_fifth_param",
								type: "text",
								priority: 45,
								parent: "notification-template[fifth_param]",
								condition: {
									"notification-template[fifth_param]":
										"tag_custom",
								},
							},
							{
								// label: "Sixth Parameter",
								name: "sixth_param",
								type: "select",
								priority: 50,
								default: "tag_custom",
								parent: "themes",
								options: [
									{
										value: "tag_custom",
										label: "Custom",
									},
									{
										value: "tag_plugin_name_text",
										label: "Try it now",
										condition: {
											themes: ["reviews_review_saying"],
										},
									},
								],
							},
							{
								// label: "Custom Sixth Parameter",
								name: "custom_sixth_param",
								type: "text",
								priority: 55,
								parent: "notification-template[sixth_param]",
								condition: {
									"notification-template[sixth_param]":
										"tag_custom",
								},
							},
							{
								// label: "Review Fourth Parameter",
								name: "review_fourth_param",
								type: "text",
								priority: 27,
								default: "About",
								parent: "themes",
								condition: {
									themes: ["reviews_review_saying"],
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
						value: "",
						options: [
							{
								value: "everywhere",
								label: "Show Everywhere",
							},
							{
								value: "on_selected",
								label: "Show On Selected",
							},
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
						value: "",
						parent: "show_on",
						multiple: true,
						condition: {
							show_on: ["on_selected", "hide_on_selected"],
						},
						options: [
							{
								value: "is_front_page",
								label: "Front page",
							},
							{
								value: "is_home",
								label: "Blog page",
							},
							{
								value: "is_singular",
								label: "All posts, pages and custom post types",
							},
							{
								value: "is_single",
								label: "All posts",
							},
							{
								value: "is_page",
								label: "All pages",
							},
							{
								value: "is_attachment",
								label: "All attachments",
							},
							{
								value: "is_search",
								label: "Search results",
							},
							{
								value: "is_404",
								label: "404 error page",
							},
							{
								value: "is_archive",
								label: "All archives",
							},
							{
								value: "is_category",
								label: "All category archives",
							},
							{
								value: "is_tag",
								label: "All tag archives",
							},
						],
					},
					{
						label: "Display For",
						name: "show_on_display",
						type: "select",
						value: "",
						options: [
							{
								value: "always",
								label: "Everyone",
							},
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
						condition: {
							show_default_image: true,
						},
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
						condition: {
							show_default_image: true,
						},
					},
					{
						label: "Image",
						name: "show_notification_image",
						type: "select",
						value: "",
						parent: "show_default_image",
						condition: {
							show_default_image: false,
						},
						options: [
							{
								value: "product_image",
								label: "Featured Image",
							},
							{
								value: "gravatar",
								label: "Gravatar",
							},
							{
								value: "none",
								label: "None",
							},
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
								condition: {
									"notification-type": "press_bar",
								},
							},
							{
								label: "Bottom",
								value: "bottom",
								condition: {
									"notification-type": "press_bar",
								},
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
				condition: {
					global_queue_active: false,
				},
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
						condition: {
							auto_hide: true,
						},
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
