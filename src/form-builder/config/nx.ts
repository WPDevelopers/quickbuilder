const nxBuilder = {
    "id": "notificationx_metabox_wrapper",
    "title": "NotificationX",
    "object_types": [
        "notificationx"
    ],
    "context": "normal",
    "priority": "high",
    "show_header": "",
    "tabnumber": "1",
    "layout": "horizontal",
    "is_pro_active": "",
    "config": {
        "active": "source_tab",
        "sidebar": false
    },
    "submit": {
        "show": true
    },
    "tabs": [
        {
            "label": "Source",
            "id": "source_tab",
            "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/icons/database.svg",
            "classes": "source_tab",
            "fields": [
                {
                    "label": "Select Source",
                    "name": "source_tab",
                    "type": "section",
                    "fields": [
                        {
                            "label": "Notification Type",
                            "name": "type",
                            "type": "radio-card",
                            "default": "conversions",
                            "options": [
                                {
                                    "value": "form",
                                    "label": "Contact Form",
                                    "is_pro": false
                                },
                                {
                                    "value": "email_subscription",
                                    "label": "Email Subscription",
                                    "is_pro": false
                                },
                                {
                                    "value": "custom",
                                    "label": "Custom Notification",
                                    "is_pro": false
                                },
                                {
                                    "value": "conversions",
                                    "label": "Sales Notification",
                                    "is_pro": false
                                },
                                {
                                    "value": "reviews",
                                    "label": "Reviews",
                                    "is_pro": false
                                },
                                {
                                    "value": "download_stats",
                                    "label": "Download Stats",
                                    "is_pro": false
                                },
                                {
                                    "value": "donation",
                                    "label": "Donations",
                                    "is_pro": false
                                },
                                {
                                    "value": "page_analytics",
                                    "label": "Page Analytics",
                                    "is_pro": false
                                },
                                {
                                    "value": "elearning",
                                    "label": "eLearning",
                                    "is_pro": false
                                },
                                {
                                    "value": "notification_bar",
                                    "label": "Notification Bar",
                                    "is_pro": false
                                },
                                {
                                    "value": "comments",
                                    "label": "Comments",
                                    "is_pro": false
                                }
                            ],
                            "validation_rules": {
                                "required": true,
                                "label": "Type"
                            },
                            "trigger": {
                                "defaults": {
                                    "form": "@source:cf7",
                                    "email_subscription": "@source:mailchimp",
                                    "custom": "@source:custom_notification",
                                    "conversions": "@source:woocommerce",
                                    "reviews": "@source:wp_reviews",
                                    "download_stats": "@source:wp_stats",
                                    "donation": "@source:give",
                                    "page_analytics": "@source:google",
                                    "elearning": "@source:tutor",
                                    "notification_bar": "@source:press_bar",
                                    "comments": "@source:wp_comments"
                                }
                            }
                        },
                        {
                            "label": "Source",
                            "name": "source",
                            "type": "radio-card",
                            "options": [
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "form"
                                    ],
                                    "label": "Contact Form 7",
                                    "icon": "",
                                    "value": "cf7"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "email_subscription"
                                    ],
                                    "label": "ConvertKit",
                                    "icon": "",
                                    "value": "convertkit"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "custom"
                                    ],
                                    "label": "Custom Notification",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/custom.jpg",
                                    "value": "custom_notification"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "conversions"
                                    ],
                                    "label": "Custom Notification",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/custom.jpg",
                                    "value": "custom_notification"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "conversions"
                                    ],
                                    "label": "Easy Digital Downloads",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/edd.jpg",
                                    "value": "edd"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "conversions"
                                    ],
                                    "label": "Envato",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/envato.png",
                                    "value": "envato"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "conversions"
                                    ],
                                    "label": "Freemius",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/freemius.jpg",
                                    "value": "freemius_conversions"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "reviews"
                                    ],
                                    "label": "Freemius",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/freemius.jpg",
                                    "value": "freemius_reviews"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "download_stats"
                                    ],
                                    "label": "Freemius",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/freemius.jpg",
                                    "value": "freemius_stats"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "form"
                                    ],
                                    "label": "Gravity Forms",
                                    "icon": "",
                                    "value": "grvf"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "donation"
                                    ],
                                    "label": "Give",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/give.png",
                                    "value": "give"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "page_analytics"
                                    ],
                                    "label": "Google Analytics",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/google-analytics.jpg",
                                    "value": "google"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "email_subscription"
                                    ],
                                    "label": "IFTTT",
                                    "icon": "",
                                    "value": "ifttt"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "elearning"
                                    ],
                                    "label": "LearnDash",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/learndash.png",
                                    "value": "learndash"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "email_subscription"
                                    ],
                                    "label": "MailChimp",
                                    "icon": "",
                                    "value": "mailchimp"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "form"
                                    ],
                                    "label": "Ninja Forms",
                                    "icon": "",
                                    "value": "njf"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "notification_bar"
                                    ],
                                    "label": "Press Bar",
                                    "icon": "",
                                    "value": "press_bar"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "elearning"
                                    ],
                                    "label": "Tutor",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/tutor.png",
                                    "value": "tutor"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "form"
                                    ],
                                    "label": "WPForms",
                                    "icon": "",
                                    "value": "wpf"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "reviews"
                                    ],
                                    "label": "ReviewX",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/reviewx.png",
                                    "value": "reviewx"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "conversions"
                                    ],
                                    "label": "WooCommerce",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/woocommerce.jpg",
                                    "value": "woocommerce"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "reviews"
                                    ],
                                    "label": "WooCommerce",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/woocommerce.jpg",
                                    "value": "woo_reviews"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "comments"
                                    ],
                                    "label": "WP Comments",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/wordpress.jpg",
                                    "value": "wp_comments"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "reviews"
                                    ],
                                    "label": "WP.Org Reviews",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/wordpress.jpg",
                                    "value": "wp_reviews"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "download_stats"
                                    ],
                                    "label": "WP.Org Stats",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/wordpress.jpg",
                                    "value": "wp_stats"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "conversions"
                                    ],
                                    "label": "Zapier",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/zapier.png",
                                    "value": "zapier"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "email_subscription"
                                    ],
                                    "label": "Zapier",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/zapier.png",
                                    "value": "zapier"
                                },
                                {
                                    "rules": [
                                        "is",
                                        "type",
                                        "reviews"
                                    ],
                                    "label": "Zapier",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/zapier.png",
                                    "value": "zapier"
                                }
                            ],
                            "default": "woocommerce",
                            "validation_rules": {
                                "required": true,
                                "label": "Source"
                            },
                            "trigger": {
                                "defaults": {
                                    "cf7": "@themes:form_theme-one",
                                    "convertkit": "@themes:",
                                    "custom_notification": "@themes:conversions_theme-one",
                                    "edd": "@themes:conversions_theme-one",
                                    "envato": "@themes:conversions_theme-one",
                                    "freemius_conversions": "@themes:conversions_theme-one",
                                    "freemius_reviews": "@themes:page_analytics_total-rated",
                                    "freemius_stats": "@themes:download_stats_today-download",
                                    "grvf": "@themes:form_theme-one",
                                    "give": "@themes:donation_theme-one",
                                    "google": "@themes:",
                                    "ifttt": "@themes:",
                                    "learndash": "@themes:elearning_theme-one",
                                    "mailchimp": "@themes:",
                                    "njf": "@themes:form_theme-one",
                                    "press_bar": "@themes:press_bar_theme-one",
                                    "tutor": "@themes:elearning_theme-one",
                                    "wpf": "@themes:form_theme-one",
                                    "reviewx": "@themes:page_analytics_total-rated",
                                    "woocommerce": "@themes:conversions_theme-one",
                                    "woo_reviews": "@themes:page_analytics_total-rated",
                                    "wp_comments": "@themes:comments_theme-one",
                                    "wp_reviews": "@themes:page_analytics_total-rated",
                                    "wp_stats": "@themes:download_stats_today-download",
                                    "zapier": "@themes:page_analytics_total-rated"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            "label": "Design",
            "id": "design_tab",
            "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/icons/magic-wand.svg",
            "classes": "design_tab",
            "fields": [
                {
                    "label": "Themes",
                    "name": "themes",
                    "type": "section",
                    "fields": [
                        {
                            "label": "Themes",
                            "name": "themes",
                            "type": "radio-card",
                            "default": "conversions_theme-one",
                            "options": [
                                {
                                    "label": "form_theme-one",
                                    "value": "form_theme-one",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/form/cf7-theme-two.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "cf7",
                                            "grvf",
                                            "njf",
                                            "wpf"
                                        ]
                                    ]
                                },
                                {
                                    "label": "form_theme-two",
                                    "value": "form_theme-two",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/form/cf7-theme-one.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "cf7",
                                            "grvf",
                                            "njf",
                                            "wpf"
                                        ]
                                    ]
                                },
                                {
                                    "label": "form_theme-three",
                                    "value": "form_theme-three",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/form/cf7-theme-three.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "cf7",
                                            "grvf",
                                            "njf",
                                            "wpf"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_theme-one",
                                    "value": "conversions_theme-one",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-conv-theme-2.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_theme-two",
                                    "value": "conversions_theme-two",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-conv-theme-1.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_theme-three",
                                    "value": "conversions_theme-three",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-conv-theme-3.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_theme-four",
                                    "value": "conversions_theme-four",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/nx-conv-theme-four.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_theme-five",
                                    "value": "conversions_theme-five",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/nx-conv-theme-five.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_conv-theme-six",
                                    "value": "conversions_conv-theme-six",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/nx-conv-theme-6.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_maps_theme",
                                    "value": "conversions_maps_theme",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/maps-theme.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_conv-theme-seven",
                                    "value": "conversions_conv-theme-seven",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/nx-conv-theme-7.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_conv-theme-eight",
                                    "value": "conversions_conv-theme-eight",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/nx-conv-theme-8.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "conversions_conv-theme-nine",
                                    "value": "conversions_conv-theme-nine",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/nx-conv-theme-9.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "freemius_conversions",
                                            "woocommerce",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "reviews_total-rated",
                                    "value": "reviews_total-rated",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/total-rated.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_reviews",
                                            "reviewx",
                                            "woo_reviews",
                                            "wp_reviews",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "reviews_reviewed",
                                    "value": "reviews_reviewed",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/reviewed.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_reviews",
                                            "reviewx",
                                            "woo_reviews",
                                            "wp_reviews",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "reviews_saying",
                                    "value": "reviews_saying",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/saying-review.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_reviews",
                                            "reviewx",
                                            "woo_reviews",
                                            "wp_reviews",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "reviews_comment",
                                    "value": "reviews_comment",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/review-with-comment.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_reviews",
                                            "reviewx",
                                            "woo_reviews",
                                            "wp_reviews",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "reviews_comment-2",
                                    "value": "reviews_comment-2",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/review-with-comment-2.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_reviews",
                                            "reviewx",
                                            "woo_reviews",
                                            "wp_reviews",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "reviews_comment-3",
                                    "value": "reviews_comment-3",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/review-with-comment-3.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_reviews",
                                            "reviewx",
                                            "woo_reviews",
                                            "wp_reviews",
                                            "zapier"
                                        ]
                                    ]
                                },
                                {
                                    "label": "download_stats_today-download",
                                    "value": "download_stats_today-download",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/today-download.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_stats",
                                            "wp_stats"
                                        ]
                                    ]
                                },
                                {
                                    "label": "download_stats_7day-download",
                                    "value": "download_stats_7day-download",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/7day-download.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_stats",
                                            "wp_stats"
                                        ]
                                    ]
                                },
                                {
                                    "label": "download_stats_actively_using",
                                    "value": "download_stats_actively_using",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/actively-using.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_stats",
                                            "wp_stats"
                                        ]
                                    ]
                                },
                                {
                                    "label": "download_stats_total-download",
                                    "value": "download_stats_total-download",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/wporg/total-download.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "freemius_stats",
                                            "wp_stats"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_theme-one",
                                    "value": "donation_theme-one",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/donation-theme-1.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_theme-two",
                                    "value": "donation_theme-two",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/donation-theme-2.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_theme-three",
                                    "value": "donation_theme-three",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/donation-theme-3.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_theme-four",
                                    "value": "donation_theme-four",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/donation-theme-4.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_theme-five",
                                    "value": "donation_theme-five",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/donation-theme-5.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_conv-theme-six",
                                    "value": "donation_conv-theme-six",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/donation-theme-6.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_maps_theme",
                                    "value": "donation_maps_theme",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/maps-theme.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_conv-theme-seven",
                                    "value": "donation_conv-theme-seven",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/donation-theme-7.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_conv-theme-eight",
                                    "value": "donation_conv-theme-eight",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/donation-theme-8.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "donation_conv-theme-nine",
                                    "value": "donation_conv-theme-nine",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/donation/donation-theme-9.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "give"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_theme-one",
                                    "value": "elearning_theme-one",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/elearning-theme-1.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_theme-two",
                                    "value": "elearning_theme-two",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/elearning-theme-2.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_theme-three",
                                    "value": "elearning_theme-three",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/elearning-theme-3.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_theme-four",
                                    "value": "elearning_theme-four",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/elearning-theme-4.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_theme-five",
                                    "value": "elearning_theme-five",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/elearning-theme-5.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_conv-theme-six",
                                    "value": "elearning_conv-theme-six",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/elearning-theme-6.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_maps_theme",
                                    "value": "elearning_maps_theme",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/maps-theme.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_conv-theme-seven",
                                    "value": "elearning_conv-theme-seven",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/elearning-theme-7.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_conv-theme-eight",
                                    "value": "elearning_conv-theme-eight",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/elearning-theme-8.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "elearning_conv-theme-nine",
                                    "value": "elearning_conv-theme-nine",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/elearning/elearning-theme-9.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "learndash",
                                            "tutor"
                                        ]
                                    ]
                                },
                                {
                                    "label": "notification_bar_theme-one",
                                    "value": "notification_bar_theme-one",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-bar-theme-one.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "press_bar"
                                        ]
                                    ]
                                },
                                {
                                    "label": "notification_bar_theme-two",
                                    "value": "notification_bar_theme-two",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-bar-theme-two.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "press_bar"
                                        ]
                                    ]
                                },
                                {
                                    "label": "notification_bar_theme-three",
                                    "value": "notification_bar_theme-three",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-bar-theme-three.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "press_bar"
                                        ]
                                    ]
                                },
                                {
                                    "label": "comments_theme-one",
                                    "value": "comments_theme-one",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-comment-theme-2.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "wp_comments"
                                        ]
                                    ]
                                },
                                {
                                    "label": "comments_theme-two",
                                    "value": "comments_theme-two",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-comment-theme-1.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "wp_comments"
                                        ]
                                    ]
                                },
                                {
                                    "label": "comments_theme-three",
                                    "value": "comments_theme-three",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-comment-theme-3.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "wp_comments"
                                        ]
                                    ]
                                },
                                {
                                    "label": "comments_theme-six-free",
                                    "value": "comments_theme-six-free",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-comment-theme-4.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "wp_comments"
                                        ]
                                    ]
                                },
                                {
                                    "label": "comments_theme-seven-free",
                                    "value": "comments_theme-seven-free",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-comment-theme-5.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "wp_comments"
                                        ]
                                    ]
                                },
                                {
                                    "label": "comments_theme-eight-free",
                                    "value": "comments_theme-eight-free",
                                    "is_pro": null,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/nx-comment-theme-6.jpg",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "wp_comments"
                                        ]
                                    ]
                                },
                                {
                                    "label": "comments_theme-four",
                                    "value": "comments_theme-four",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/nx-comment-theme-four.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "wp_comments"
                                        ]
                                    ]
                                },
                                {
                                    "label": "comments_theme-five",
                                    "value": "comments_theme-five",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/nx-comment-theme-five.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "wp_comments"
                                        ]
                                    ]
                                },
                                {
                                    "label": "comments_maps_theme",
                                    "value": "comments_maps_theme",
                                    "is_pro": true,
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/extensions/themes/pro/maps-theme-comments.png",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "wp_comments"
                                        ]
                                    ]
                                }
                            ],
                            "validation_rules": {
                                "required": true,
                                "label": "Theme"
                            }
                        },
                        {
                            "label": "Advanced Design",
                            "name": "advance_edit",
                            "type": "toggle",
                            "default": false
                        }
                    ]
                },
                {
                    "label": "Design",
                    "name": "design",
                    "type": "section",
                    "rules": [
                        "and",
                        [
                            "is",
                            "advance_edit",
                            true
                        ],
                        [
                            "!is",
                            "source",
                            "press_bar"
                        ]
                    ],
                    "fields": [
                        {
                            "label": "Background Color",
                            "name": "bg_color",
                            "type": "colorpicker"
                        },
                        {
                            "label": "Text Color",
                            "name": "text_color",
                            "type": "colorpicker"
                        },
                        {
                            "label": "Want Border?",
                            "name": "border",
                            "type": "checkbox",
                            "default": 0
                        },
                        {
                            "label": "Border Size",
                            "name": "border_size",
                            "type": "number",
                            "default": "1",
                            "rules": [
                                "is",
                                "border",
                                true
                            ]
                        },
                        {
                            "label": "Border Style",
                            "name": "border_style",
                            "type": "select",
                            "default": "solid",
                            "options": [
                                {
                                    "value": "solid",
                                    "label": "Solid"
                                },
                                {
                                    "value": "dashed",
                                    "label": "Dashed"
                                },
                                {
                                    "value": "dotted",
                                    "label": "Dotted"
                                }
                            ],
                            "rules": [
                                "is",
                                "border",
                                true
                            ]
                        },
                        {
                            "label": "Border Color",
                            "name": "border_color",
                            "type": "colorpicker",
                            "rules": [
                                "is",
                                "border",
                                true
                            ]
                        }
                    ]
                },
                {
                    "label": "Typography",
                    "name": "typography",
                    "type": "section",
                    "rules": [
                        "and",
                        [
                            "is",
                            "advance_edit",
                            true
                        ],
                        [
                            "!is",
                            "source",
                            "press_bar"
                        ]
                    ],
                    "fields": [
                        {
                            "label": "Font Size",
                            "name": "first_font_size",
                            "type": "number",
                            "default": "13",
                            "description": "px",
                            "help": "This font size will be applied for <mark>first</mark> row"
                        },
                        {
                            "label": "Font Size",
                            "name": "second_font_size",
                            "type": "number",
                            "default": "14",
                            "description": "px",
                            "help": "This font size will be applied for <mark>second</mark> row"
                        },
                        {
                            "label": "Font Size",
                            "name": "third_font_size",
                            "type": "number",
                            "default": "11",
                            "description": "px",
                            "help": "This font size will be applied for <mark>third</mark> row"
                        }
                    ]
                },
                {
                    "label": "Image Appearance",
                    "name": "image-appearance",
                    "type": "section",
                    "rules": [
                        "and",
                        [
                            "is",
                            "advance_edit",
                            true
                        ],
                        [
                            "!is",
                            "source",
                            "press_bar"
                        ]
                    ],
                    "fields": [
                        {
                            "label": "Image Shape",
                            "name": "image_shape",
                            "type": "select",
                            "default": "circle",
                            "options": [
                                {
                                    "value": "circle",
                                    "label": "Circle"
                                },
                                {
                                    "value": "rounded",
                                    "label": "Rounded"
                                },
                                {
                                    "value": "square",
                                    "label": "Square"
                                }
                            ]
                        },
                        {
                            "label": "Position",
                            "name": "image_position",
                            "type": "select",
                            "default": "left",
                            "options": [
                                {
                                    "value": "left",
                                    "label": "Left"
                                },
                                {
                                    "value": "right",
                                    "label": "Right"
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "Design",
                    "name": "bar_design",
                    "type": "section",
                    "rules": [
                        "and",
                        [
                            "is",
                            "source",
                            "press_bar"
                        ],
                        [
                            "is",
                            "advance_edit",
                            true
                        ]
                    ],
                    "fields": [
                        {
                            "label": "Background Color",
                            "name": "bar_bg_color",
                            "type": "colorpicker"
                        },
                        {
                            "label": "Text Color",
                            "name": "bar_text_color",
                            "type": "colorpicker"
                        },
                        {
                            "label": "Button Background Color",
                            "name": "bar_btn_bg",
                            "type": "colorpicker"
                        },
                        {
                            "label": "Button Text Color",
                            "name": "bar_btn_text_color",
                            "type": "colorpicker"
                        },
                        {
                            "label": "Countdown Background Color",
                            "name": "bar_counter_bg",
                            "type": "colorpicker"
                        },
                        {
                            "label": "Countdown Text Color",
                            "name": "bar_counter_text_color",
                            "type": "colorpicker"
                        },
                        {
                            "label": "Close Button Color",
                            "name": "bar_close_color",
                            "type": "colorpicker"
                        },
                        {
                            "label": "Close Button Position",
                            "name": "bar_close_position",
                            "type": "select",
                            "value": "right",
                            "options": [
                                {
                                    "value": "left",
                                    "label": "Left"
                                },
                                {
                                    "value": "right",
                                    "label": "Right"
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "Typography",
                    "name": "bar_typography",
                    "type": "section",
                    "rules": [
                        "and",
                        [
                            "is",
                            "source",
                            "press_bar"
                        ],
                        [
                            "is",
                            "advance_edit",
                            true
                        ]
                    ],
                    "fields": [
                        {
                            "label": "Font Size",
                            "name": "bar_font_size",
                            "type": "number",
                            "value": "13",
                            "priority": 5,
                            "description": "px",
                            "help": "This font size will be applied for <mark>first</mark> row"
                        }
                    ]
                }
            ]
        },
        {
            "label": "Content",
            "id": "content_tab",
            "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/icons/pencil.svg",
            "classes": "content_tab",
            "fields": [
                {
                    "label": "Content",
                    "name": "content",
                    "type": "section",
                    "priority": 90,
                    "fields": [
                        {
                            "label": "Notification Template",
                            "name": "notification-template",
                            "type": "group",
                            "display": "inline",
                            "priority": 90,
                            "fields": [
                                {
                                    "name": "first_param",
                                    "type": "select",
                                    "priority": 3,
                                    "default": "tag_name",
                                    "options": [
                                        {
                                            "value": "tag_custom",
                                            "label": "Custom"
                                        },
                                        {
                                            "value": "select_a_tag",
                                            "label": "Select A Tag",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "form_theme-one",
                                                    "form_theme-two",
                                                    "form_theme-three"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_name",
                                            "label": "Full Name",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "conversions_theme-one",
                                                    "conversions_theme-two",
                                                    "conversions_theme-three",
                                                    "conversions_theme-four",
                                                    "conversions_theme-five",
                                                    "conversions_conv-theme-six",
                                                    "conversions_conv-theme-seven",
                                                    "conversions_conv-theme-eight",
                                                    "conversions_conv-theme-nine",
                                                    "donation_theme-one",
                                                    "donation_theme-two",
                                                    "donation_theme-three",
                                                    "donation_theme-four",
                                                    "donation_theme-five",
                                                    "donation_conv-theme-six",
                                                    "donation_maps_theme",
                                                    "donation_conv-theme-seven",
                                                    "donation_conv-theme-eight",
                                                    "donation_conv-theme-nine",
                                                    "elearning_theme-one",
                                                    "elearning_theme-two",
                                                    "elearning_theme-three",
                                                    "elearning_theme-four",
                                                    "elearning_theme-five",
                                                    "elearning_conv-theme-seven",
                                                    "elearning_conv-theme-eight",
                                                    "elearning_conv-theme-nine",
                                                    "comments_theme-one",
                                                    "comments_theme-two",
                                                    "comments_theme-three",
                                                    "comments_theme-six-free",
                                                    "comments_theme-seven-free",
                                                    "comments_theme-eight-free",
                                                    "comments_theme-four",
                                                    "comments_theme-five"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_first_name",
                                            "label": "First Name",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "conversions_theme-one",
                                                    "conversions_theme-two",
                                                    "conversions_theme-three",
                                                    "conversions_theme-four",
                                                    "conversions_theme-five",
                                                    "conversions_conv-theme-six",
                                                    "conversions_conv-theme-seven",
                                                    "conversions_conv-theme-eight",
                                                    "conversions_conv-theme-nine",
                                                    "donation_theme-one",
                                                    "donation_theme-two",
                                                    "donation_theme-three",
                                                    "donation_theme-four",
                                                    "donation_theme-five",
                                                    "donation_conv-theme-six",
                                                    "donation_maps_theme",
                                                    "donation_conv-theme-seven",
                                                    "donation_conv-theme-eight",
                                                    "donation_conv-theme-nine",
                                                    "elearning_theme-one",
                                                    "elearning_theme-two",
                                                    "elearning_theme-three",
                                                    "elearning_theme-four",
                                                    "elearning_theme-five",
                                                    "elearning_conv-theme-seven",
                                                    "elearning_conv-theme-eight",
                                                    "elearning_conv-theme-nine",
                                                    "comments_theme-one",
                                                    "comments_theme-two",
                                                    "comments_theme-three",
                                                    "comments_theme-six-free",
                                                    "comments_theme-seven-free",
                                                    "comments_theme-eight-free",
                                                    "comments_theme-four",
                                                    "comments_theme-five"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_last_name",
                                            "label": "Last Name",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "conversions_theme-one",
                                                    "conversions_theme-two",
                                                    "conversions_theme-three",
                                                    "conversions_theme-four",
                                                    "conversions_theme-five",
                                                    "conversions_conv-theme-six",
                                                    "conversions_conv-theme-seven",
                                                    "conversions_conv-theme-eight",
                                                    "conversions_conv-theme-nine",
                                                    "donation_theme-one",
                                                    "donation_theme-two",
                                                    "donation_theme-three",
                                                    "donation_theme-four",
                                                    "donation_theme-five",
                                                    "donation_conv-theme-six",
                                                    "donation_maps_theme",
                                                    "donation_conv-theme-seven",
                                                    "donation_conv-theme-eight",
                                                    "donation_conv-theme-nine",
                                                    "elearning_theme-one",
                                                    "elearning_theme-two",
                                                    "elearning_theme-three",
                                                    "elearning_theme-four",
                                                    "elearning_theme-five",
                                                    "elearning_conv-theme-seven",
                                                    "elearning_conv-theme-eight",
                                                    "elearning_conv-theme-nine",
                                                    "comments_theme-one",
                                                    "comments_theme-two",
                                                    "comments_theme-three",
                                                    "comments_theme-six-free",
                                                    "comments_theme-seven-free",
                                                    "comments_theme-eight-free",
                                                    "comments_theme-four",
                                                    "comments_theme-five"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_username",
                                            "label": "Username",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "reviews_total-rated",
                                                    "reviews_reviewed",
                                                    "reviews_review-comment",
                                                    "reviews_review-comment-2",
                                                    "reviews_review-comment-3",
                                                    "reviews_review_saying"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_rated",
                                            "label": "Rated",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "reviews_total-rated",
                                                    "reviews_reviewed",
                                                    "reviews_review-comment",
                                                    "reviews_review-comment-2",
                                                    "reviews_review-comment-3"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_plugin_theme_name",
                                            "label": "Plugin/Theme Name",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_today-download",
                                                    "download_stats_7day-download",
                                                    "download_stats_total-download"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_today",
                                            "label": "Today",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_actively_using"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_last_week",
                                            "label": "In last 7 days",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_actively_using"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_all_time",
                                            "label": "Total",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_actively_using"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_active_installs",
                                            "label": "Total Active Install",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_actively_using"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_display_name",
                                            "label": "Display Name",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "comments_theme-one",
                                                    "comments_theme-two",
                                                    "comments_theme-three",
                                                    "comments_theme-six-free",
                                                    "comments_theme-seven-free",
                                                    "comments_theme-eight-free",
                                                    "comments_theme-four",
                                                    "comments_theme-five"
                                                ]
                                            ]
                                        }
                                    ],
                                    "rules": [
                                        "includes",
                                        "themes",
                                        [
                                            "form_theme-one",
                                            "form_theme-two",
                                            "form_theme-three",
                                            "conversions_theme-one",
                                            "conversions_theme-two",
                                            "conversions_theme-three",
                                            "conversions_theme-four",
                                            "conversions_theme-five",
                                            "reviews_total-rated",
                                            "reviews_reviewed",
                                            "reviews_saying",
                                            "reviews_comment",
                                            "reviews_comment-2",
                                            "reviews_comment-3",
                                            "download_stats_today-download",
                                            "download_stats_7day-download",
                                            "download_stats_actively_using",
                                            "download_stats_total-download",
                                            "donation_theme-one",
                                            "donation_theme-two",
                                            "donation_theme-three",
                                            "donation_theme-four",
                                            "donation_theme-five",
                                            "donation_conv-theme-seven",
                                            "donation_conv-theme-eight",
                                            "donation_conv-theme-nine",
                                            "elearning_theme-one",
                                            "elearning_theme-two",
                                            "elearning_theme-three",
                                            "comments_theme-one",
                                            "comments_theme-two",
                                            "comments_theme-three",
                                            "comments_theme-six-free",
                                            "comments_theme-seven-free",
                                            "comments_theme-eight-free",
                                            "comments_theme-four",
                                            "comments_theme-five"
                                        ]
                                    ]
                                },
                                {
                                    "name": "custom_first_param",
                                    "type": "text",
                                    "priority": 5,
                                    "default": "Someone",
                                    "rules": [
                                        "is",
                                        "notification-template.first_param",
                                        "tag_custom"
                                    ]
                                },
                                {
                                    "name": "second_param",
                                    "type": "text",
                                    "priority": 10,
                                    "default": "recently purchased",
                                    "rules": [
                                        "includes",
                                        "themes",
                                        [
                                            "form_theme-one",
                                            "form_theme-two",
                                            "form_theme-three",
                                            "conversions_theme-one",
                                            "conversions_theme-two",
                                            "conversions_theme-three",
                                            "conversions_theme-four",
                                            "conversions_theme-five",
                                            "reviews_total-rated",
                                            "reviews_reviewed",
                                            "reviews_saying",
                                            "reviews_comment",
                                            "reviews_comment-2",
                                            "reviews_comment-3",
                                            "download_stats_actively_using",
                                            "donation_theme-one",
                                            "donation_theme-two",
                                            "donation_theme-three",
                                            "donation_theme-four",
                                            "donation_theme-five",
                                            "donation_conv-theme-seven",
                                            "donation_conv-theme-eight",
                                            "donation_conv-theme-nine",
                                            "elearning_theme-one",
                                            "elearning_theme-two",
                                            "elearning_theme-three",
                                            "comments_theme-one",
                                            "comments_theme-two",
                                            "comments_theme-three",
                                            "comments_theme-six-free",
                                            "comments_theme-seven-free",
                                            "comments_theme-eight-free",
                                            "comments_theme-four",
                                            "comments_theme-five"
                                        ]
                                    ]
                                },
                                {
                                    "name": "third_param",
                                    "type": "select",
                                    "priority": 20,
                                    "default": "tag_title",
                                    "options": [
                                        {
                                            "value": "tag_custom",
                                            "label": "Custom"
                                        },
                                        {
                                            "value": "tag_title",
                                            "label": "Form Title",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "form_theme-one",
                                                    "form_theme-two",
                                                    "form_theme-three",
                                                    "conversions_theme-one",
                                                    "conversions_theme-two",
                                                    "conversions_theme-three",
                                                    "conversions_theme-four",
                                                    "conversions_theme-five",
                                                    "conversions_conv-theme-six",
                                                    "conversions_conv-theme-seven",
                                                    "conversions_conv-theme-eight",
                                                    "conversions_conv-theme-nine",
                                                    "reviews_review_saying"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_custom_form_title",
                                            "label": "Custom Title",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "form_theme-one",
                                                    "form_theme-two",
                                                    "form_theme-three"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_plugin_name",
                                            "label": "Plugin Name",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "reviews_total-rated",
                                                    "reviews_reviewed",
                                                    "reviews_review-comment",
                                                    "reviews_review-comment-2",
                                                    "reviews_review-comment-3"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_plugin_review",
                                            "label": "Review",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "reviews_total-rated",
                                                    "reviews_reviewed",
                                                    "reviews_review-comment",
                                                    "reviews_review-comment-2",
                                                    "reviews_review-comment-3"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_anonymous_title",
                                            "label": "Anonymous Title",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "reviews_total-rated",
                                                    "reviews_reviewed",
                                                    "reviews_review-comment",
                                                    "reviews_review-comment-2",
                                                    "reviews_review-comment-3",
                                                    "reviews_review_saying"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_today",
                                            "label": "Today",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_today-download",
                                                    "download_stats_7day-download",
                                                    "download_stats_total-download"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_last_week",
                                            "label": "In last 7 days",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_today-download",
                                                    "download_stats_7day-download",
                                                    "download_stats_total-download"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_all_time",
                                            "label": "Total",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_today-download",
                                                    "download_stats_7day-download",
                                                    "download_stats_total-download"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_active_installs",
                                            "label": "Total Active Install",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_today-download",
                                                    "download_stats_7day-download",
                                                    "download_stats_total-download"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_name",
                                            "label": "Plugin/Theme Name",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_actively_using"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_amount",
                                            "label": "Donation Amount",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "donation_theme-one",
                                                    "donation_theme-two",
                                                    "donation_theme-three",
                                                    "donation_theme-four",
                                                    "donation_theme-five",
                                                    "donation_conv-theme-six",
                                                    "donation_maps_theme",
                                                    "donation_conv-theme-seven",
                                                    "donation_conv-theme-eight",
                                                    "donation_conv-theme-nine"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_none",
                                            "label": "None",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "donation_theme-one",
                                                    "donation_theme-two",
                                                    "donation_theme-three",
                                                    "donation_theme-four",
                                                    "donation_theme-five",
                                                    "donation_conv-theme-six",
                                                    "donation_maps_theme",
                                                    "donation_conv-theme-seven",
                                                    "donation_conv-theme-eight",
                                                    "donation_conv-theme-nine"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "course_title",
                                            "label": "Course Title",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "elearning_theme-one",
                                                    "elearning_theme-two",
                                                    "elearning_theme-three",
                                                    "elearning_theme-four",
                                                    "elearning_theme-five",
                                                    "elearning_conv-theme-seven",
                                                    "elearning_conv-theme-eight",
                                                    "elearning_conv-theme-nine"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_post_title",
                                            "label": "Post Title",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "comments_theme-one",
                                                    "comments_theme-two",
                                                    "comments_theme-three",
                                                    "comments_theme-six-free",
                                                    "comments_theme-seven-free",
                                                    "comments_theme-eight-free",
                                                    "comments_theme-four",
                                                    "comments_theme-five"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_post_comment",
                                            "label": "Post Comment",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "comments_theme-one",
                                                    "comments_theme-two",
                                                    "comments_theme-three",
                                                    "comments_theme-six-free",
                                                    "comments_theme-seven-free",
                                                    "comments_theme-eight-free",
                                                    "comments_theme-four",
                                                    "comments_theme-five"
                                                ]
                                            ]
                                        }
                                    ],
                                    "rules": [
                                        "includes",
                                        "themes",
                                        [
                                            "form_theme-one",
                                            "form_theme-two",
                                            "form_theme-three",
                                            "conversions_theme-one",
                                            "conversions_theme-two",
                                            "conversions_theme-three",
                                            "conversions_theme-four",
                                            "conversions_theme-five",
                                            "reviews_total-rated",
                                            "reviews_reviewed",
                                            "reviews_saying",
                                            "reviews_comment",
                                            "reviews_comment-2",
                                            "reviews_comment-3",
                                            "download_stats_today-download",
                                            "download_stats_7day-download",
                                            "download_stats_actively_using",
                                            "download_stats_total-download",
                                            "donation_theme-one",
                                            "donation_theme-two",
                                            "donation_theme-three",
                                            "donation_theme-four",
                                            "donation_theme-five",
                                            "donation_conv-theme-seven",
                                            "donation_conv-theme-eight",
                                            "donation_conv-theme-nine",
                                            "elearning_theme-one",
                                            "elearning_theme-two",
                                            "elearning_theme-three",
                                            "comments_theme-one",
                                            "comments_theme-two",
                                            "comments_theme-three",
                                            "comments_theme-six-free",
                                            "comments_theme-seven-free",
                                            "comments_theme-eight-free",
                                            "comments_theme-four",
                                            "comments_theme-five"
                                        ]
                                    ]
                                },
                                {
                                    "name": "custom_third_param",
                                    "type": "text",
                                    "priority": 25,
                                    "default": "Some time ago",
                                    "rules": [
                                        "is",
                                        "notification-template.third_param",
                                        "tag_custom"
                                    ]
                                },
                                {
                                    "name": "fourth_param",
                                    "type": "select",
                                    "priority": 30,
                                    "default": "tag_time",
                                    "options": [
                                        {
                                            "value": "tag_custom",
                                            "label": "Custom"
                                        },
                                        {
                                            "value": "tag_time",
                                            "label": "Definite Time",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "form_theme-one",
                                                    "form_theme-two",
                                                    "form_theme-three",
                                                    "conversions_theme-one",
                                                    "conversions_theme-two",
                                                    "conversions_theme-three",
                                                    "conversions_theme-four",
                                                    "conversions_theme-five",
                                                    "conversions_conv-theme-six",
                                                    "conversions_conv-theme-seven",
                                                    "conversions_conv-theme-eight",
                                                    "conversions_conv-theme-nine",
                                                    "reviews_total-rated",
                                                    "reviews_reviewed",
                                                    "reviews_review-comment",
                                                    "reviews_review-comment-2",
                                                    "reviews_review-comment-3",
                                                    "elearning_theme-one",
                                                    "elearning_theme-two",
                                                    "elearning_theme-three",
                                                    "elearning_theme-four",
                                                    "elearning_theme-five",
                                                    "elearning_conv-theme-seven",
                                                    "elearning_conv-theme-eight",
                                                    "elearning_conv-theme-nine",
                                                    "comments_theme-one",
                                                    "comments_theme-two",
                                                    "comments_theme-three",
                                                    "comments_theme-six-free",
                                                    "comments_theme-seven-free",
                                                    "comments_theme-eight-free",
                                                    "comments_theme-four",
                                                    "comments_theme-five"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_rating",
                                            "label": "Rating",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "reviews_total-rated",
                                                    "reviews_reviewed",
                                                    "reviews_review-comment",
                                                    "reviews_review-comment-2",
                                                    "reviews_review-comment-3"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_today_text",
                                            "label": "today. Try it out",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_today-download",
                                                    "download_stats_7day-download",
                                                    "download_stats_total-download"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_last_week_text",
                                            "label": "in last 7 days",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_today-download",
                                                    "download_stats_7day-download",
                                                    "download_stats_total-download"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_all_time_text",
                                            "label": "in total",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_today-download",
                                                    "download_stats_7day-download",
                                                    "download_stats_total-download"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_active_installs_text",
                                            "label": "in total active",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "download_stats_today-download",
                                                    "download_stats_7day-download",
                                                    "download_stats_total-download"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_title",
                                            "label": "Donation For Title",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "donation_theme-one",
                                                    "donation_theme-two",
                                                    "donation_theme-three",
                                                    "donation_theme-four",
                                                    "donation_theme-five",
                                                    "donation_conv-theme-six",
                                                    "donation_maps_theme",
                                                    "donation_conv-theme-seven",
                                                    "donation_conv-theme-eight",
                                                    "donation_conv-theme-nine"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_anonymous_title",
                                            "label": "Anonymous Title",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "donation_theme-one",
                                                    "donation_theme-two",
                                                    "donation_theme-three",
                                                    "donation_theme-four",
                                                    "donation_theme-five",
                                                    "donation_conv-theme-six",
                                                    "donation_maps_theme",
                                                    "donation_conv-theme-seven",
                                                    "donation_conv-theme-eight",
                                                    "donation_conv-theme-nine"
                                                ]
                                            ]
                                        }
                                    ],
                                    "rules": [
                                        "includes",
                                        "themes",
                                        [
                                            "form_theme-one",
                                            "form_theme-two",
                                            "form_theme-three",
                                            "conversions_theme-one",
                                            "conversions_theme-two",
                                            "conversions_theme-three",
                                            "conversions_theme-four",
                                            "conversions_theme-five",
                                            "reviews_total-rated",
                                            "reviews_reviewed",
                                            "reviews_comment",
                                            "reviews_comment-2",
                                            "reviews_comment-3",
                                            "download_stats_today-download",
                                            "download_stats_7day-download",
                                            "download_stats_total-download",
                                            "donation_theme-one",
                                            "donation_theme-two",
                                            "donation_theme-three",
                                            "donation_theme-four",
                                            "donation_theme-five",
                                            "donation_conv-theme-seven",
                                            "donation_conv-theme-eight",
                                            "donation_conv-theme-nine",
                                            "elearning_theme-one",
                                            "elearning_theme-two",
                                            "elearning_theme-three",
                                            "comments_theme-one",
                                            "comments_theme-two",
                                            "comments_theme-three",
                                            "comments_theme-six-free",
                                            "comments_theme-seven-free",
                                            "comments_theme-eight-free",
                                            "comments_theme-four",
                                            "comments_theme-five"
                                        ]
                                    ]
                                },
                                {
                                    "name": "custom_fourth_param",
                                    "type": "text",
                                    "priority": 35,
                                    "default": "Some time ago",
                                    "rules": [
                                        "is",
                                        "notification-template.fourth_param",
                                        "tag_custom"
                                    ]
                                },
                                {
                                    "name": "fifth_param",
                                    "type": "select",
                                    "priority": 40,
                                    "options": [
                                        {
                                            "value": "tag_custom",
                                            "label": "Custom"
                                        },
                                        {
                                            "value": "tag_plugin_name",
                                            "label": "Plugin Name",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "reviews_review_saying"
                                                ]
                                            ]
                                        },
                                        {
                                            "value": "tag_time",
                                            "label": "Definite Time",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "donation_theme-one",
                                                    "donation_theme-two",
                                                    "donation_theme-three",
                                                    "donation_theme-four",
                                                    "donation_theme-five",
                                                    "donation_conv-theme-six",
                                                    "donation_maps_theme",
                                                    "donation_conv-theme-seven",
                                                    "donation_conv-theme-eight",
                                                    "donation_conv-theme-nine"
                                                ]
                                            ]
                                        }
                                    ],
                                    "rules": [
                                        "includes",
                                        "themes",
                                        [
                                            "reviews_saying",
                                            "donation_theme-one",
                                            "donation_theme-two",
                                            "donation_theme-three",
                                            "donation_theme-four",
                                            "donation_theme-five"
                                        ]
                                    ]
                                },
                                {
                                    "name": "custom_fifth_param",
                                    "type": "text",
                                    "priority": 45,
                                    "rules": [
                                        "is",
                                        "notification-template.fifth_param",
                                        "tag_custom"
                                    ]
                                },
                                {
                                    "name": "sixth_param",
                                    "type": "select",
                                    "priority": 50,
                                    "default": "tag_custom",
                                    "options": [
                                        {
                                            "value": "tag_custom",
                                            "label": "Custom"
                                        },
                                        {
                                            "value": "tag_plugin_name_text",
                                            "label": "Try it now",
                                            "rules": [
                                                "includes",
                                                "themes",
                                                [
                                                    "reviews_review_saying"
                                                ]
                                            ]
                                        }
                                    ],
                                    "rules": [
                                        "includes",
                                        "themes",
                                        [
                                            "reviews_saying"
                                        ]
                                    ]
                                },
                                {
                                    "name": "custom_sixth_param",
                                    "type": "text",
                                    "priority": 55,
                                    "rules": [
                                        "is",
                                        "notification-template.sixth_param",
                                        "tag_custom"
                                    ]
                                },
                                {
                                    "name": "review_fourth_param",
                                    "type": "text",
                                    "priority": 27,
                                    "value": "About",
                                    "rules": [
                                        "includes",
                                        "themes",
                                        [
                                            "reviews_review_saying",
                                            "reviews_saying"
                                        ]
                                    ]
                                }
                            ],
                            "rules": [
                                "includes",
                                "source",
                                [
                                    "cf7",
                                    "custom_notification",
                                    "edd",
                                    "envato",
                                    "freemius_conversions",
                                    "freemius_reviews",
                                    "freemius_stats",
                                    "grvf",
                                    "give",
                                    "learndash",
                                    "njf",
                                    "tutor",
                                    "wpf",
                                    "reviewx",
                                    "woocommerce",
                                    "woo_reviews",
                                    "wp_comments",
                                    "wp_reviews",
                                    "wp_stats",
                                    "zapier",
                                    "zapier"
                                ]
                            ]
                        },
                        {
                            "label": "custom",
                            "name": "custom",
                            "type": "repeater",
                            "button": {
                                "label": "Add New"
                            },
                            "priority": 100,
                            "fields": [
                                {
                                    "name": "first_param",
                                    "type": "select",
                                    "priority": 3,
                                    "default": "tag_name",
                                    "options": [
                                        {
                                            "value": "tag_custom",
                                            "label": "Custom"
                                        }
                                    ]
                                },
                                {
                                    "name": "second_param",
                                    "type": "text",
                                    "priority": 10,
                                    "default": "recently purchased"
                                },
                                {
                                    "name": "third_param",
                                    "type": "select",
                                    "priority": 20,
                                    "default": "tag_title",
                                    "options": [
                                        {
                                            "value": "tag_custom",
                                            "label": "Custom"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "select",
                            "name": "form_list",
                            "label": "Select a Form",
                            "options": [
                                {
                                    "value": 11,
                                    "label": "Contact Form One",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "cf7"
                                        ]
                                    ]
                                }
                            ],
                            "priority": 89,
                            "ajax": {
                                "on": "click",
                                "api": "/notificationx/v1/get-data",
                                "data": {
                                    "type": "ContactForm",
                                    "form_type": "@source",
                                    "form_id": "@form_list"
                                },
                                "target": "notification-template[first_param]"
                            },
                            "rules": [
                                "is",
                                "type",
                                "form"
                            ]
                        },
                        {
                            "name": "press_content",
                            "type": "editor",
                            "label": "Content",
                            "priority": 50,
                            "rules": [
                                "is",
                                "source",
                                "press_bar"
                            ]
                        },
                        {
                            "name": "button_text",
                            "type": "text",
                            "label": "Button Text",
                            "priority": 60,
                            "rules": [
                                "is",
                                "source",
                                "press_bar"
                            ]
                        },
                        {
                            "name": "button_url",
                            "type": "text",
                            "label": "Button URL",
                            "priority": 70,
                            "rules": [
                                "is",
                                "source",
                                "press_bar"
                            ]
                        },
                        {
                            "label": "Product Type",
                            "name": "wp_reviews_product_type",
                            "type": "select",
                            "priority": 79,
                            "options": [
                                {
                                    "value": "plugin",
                                    "label": "Plugin"
                                }
                            ],
                            "rules": [
                                "is",
                                "source",
                                "wp_reviews"
                            ]
                        },
                        {
                            "label": "Slug",
                            "name": "wp_reviews_slug",
                            "type": "text",
                            "priority": 80,
                            "rules": [
                                "is",
                                "source",
                                "wp_reviews"
                            ]
                        },
                        {
                            "label": "Combine Multi Order",
                            "name": "combine_multiorder",
                            "type": "checkbox",
                            "priority": 100,
                            "default": true,
                            "description": "Combine order like, 2 more products. <span data-swal=\"true\" class=\"nx-cmo-conf\">Configure</span>",
                            "rules": [
                                "and",
                                [
                                    "is",
                                    "type",
                                    "conversions"
                                ],
                                [
                                    "includes",
                                    "source",
                                    [
                                        "woocommerce",
                                        "edd"
                                    ]
                                ]
                            ]
                        },
                        {
                            "name": "wp_stats_product_type",
                            "type": "select",
                            "label": "Product Type",
                            "priority": 79,
                            "options": [
                                {
                                    "value": "plugin",
                                    "label": "Plugin"
                                },
                                {
                                    "value": "theme",
                                    "label": "Theme"
                                }
                            ],
                            "rules": [
                                "is",
                                "source",
                                "wp_stats"
                            ]
                        },
                        {
                            "name": "wp_stats_slug",
                            "type": "text",
                            "label": "Slug",
                            "priority": 80,
                            "rules": [
                                "is",
                                "source",
                                "wp_stats"
                            ]
                        }
                    ]
                },
                {
                    "label": "Link Options",
                    "name": "link_options",
                    "type": "section",
                    "priority": 95,
                    "fields": [
                        {
                            "label": "Link Type",
                            "name": "link_type",
                            "type": "select",
                            "default": "none",
                            "options": [
                                {
                                    "value": "none",
                                    "label": "None"
                                },
                                {
                                    "value": "review_page",
                                    "label": "Product Page",
                                    "rules": [
                                        "includes",
                                        "type",
                                        [
                                            "reviews"
                                        ]
                                    ]
                                },
                                {
                                    "value": "comment_url",
                                    "label": "Comment URL",
                                    "rules": [
                                        "includes",
                                        "type",
                                        [
                                            "comments"
                                        ]
                                    ]
                                },
                                {
                                    "value": "product_image",
                                    "label": "Product Image",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "edd"
                                        ]
                                    ]
                                },
                                {
                                    "value": "stats_page",
                                    "label": "Product Page",
                                    "rules": [
                                        "includes",
                                        "type",
                                        [
                                            "download_stats"
                                        ]
                                    ]
                                },
                                {
                                    "value": "donation_page",
                                    "label": "Donation Form Page",
                                    "rules": [
                                        "includes",
                                        "type",
                                        [
                                            "donation"
                                        ]
                                    ]
                                },
                                {
                                    "value": "course_page",
                                    "label": "Course Page",
                                    "rules": [
                                        "includes",
                                        "type",
                                        [
                                            "elearning"
                                        ]
                                    ]
                                },
                                {
                                    "value": "product_page",
                                    "label": "Product Page",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "woocommerce"
                                        ]
                                    ]
                                }
                            ]
                        }
                    ],
                    "rules": [
                        "includes",
                        "source",
                        [
                            "edd",
                            "freemius_reviews",
                            "freemius_stats",
                            "give",
                            "learndash",
                            "tutor",
                            "reviewx",
                            "woocommerce",
                            "woo_reviews",
                            "wp_comments",
                            "wp_reviews",
                            "wp_stats",
                            "zapier"
                        ]
                    ]
                },
                {
                    "name": "countdown_timer",
                    "label": "Countdown Timer",
                    "type": "section",
                    "priority": 95,
                    "fields": [
                        {
                            "name": "enable_countdown",
                            "label": "Enable Countdown",
                            "type": "checkbox"
                        },
                        {
                            "name": "evergreen_timer",
                            "label": "Evergreen Timer",
                            "type": "checkbox",
                            "is_pro": true,
                            "switch": true,
                            "description": "To configure Evergreen Timer, <a target=\"_blank\" href=\"https://notificationx.com/docs/evergreen-timer/\">check out this doc</a>",
                            "rules": [
                                "is",
                                "enable_countdown",
                                true
                            ]
                        },
                        {
                            "name": "countdown_text",
                            "label": "Countdown Text",
                            "type": "text",
                            "rules": [
                                "is",
                                "enable_countdown",
                                true
                            ]
                        },
                        {
                            "name": "countdown_expired_text",
                            "label": "Expired Text",
                            "type": "text",
                            "value": "Expired",
                            "rules": [
                                "and",
                                [
                                    "is",
                                    "evergreen_timer",
                                    false
                                ],
                                [
                                    "is",
                                    "enable_countdown",
                                    true
                                ]
                            ]
                        },
                        {
                            "name": "countdown_start_date",
                            "label": "Start Date",
                            "type": "datepicker",
                            "rules": [
                                "and",
                                [
                                    "is",
                                    "evergreen_timer",
                                    false
                                ],
                                [
                                    "is",
                                    "enable_countdown",
                                    true
                                ]
                            ]
                        },
                        {
                            "name": "countdown_end_date",
                            "label": "End Date",
                            "type": "datepicker",
                            "rules": [
                                "and",
                                [
                                    "is",
                                    "evergreen_timer",
                                    false
                                ],
                                [
                                    "is",
                                    "enable_countdown",
                                    true
                                ]
                            ]
                        },
                        {
                            "name": "time_rotation",
                            "label": "Time Rotation",
                            "type": "text",
                            "description": "hours",
                            "rules": [
                                "and",
                                [
                                    "is",
                                    "evergreen_timer",
                                    true
                                ],
                                [
                                    "is",
                                    "enable_countdown",
                                    true
                                ],
                                [
                                    "is",
                                    "time_randomize",
                                    false
                                ]
                            ]
                        },
                        {
                            "name": "time_randomize",
                            "label": "Randomize",
                            "type": "checkbox",
                            "rules": [
                                "and",
                                [
                                    "is",
                                    "evergreen_timer",
                                    true
                                ],
                                [
                                    "is",
                                    "enable_countdown",
                                    true
                                ]
                            ]
                        },
                        {
                            "name": "time_randomize_between",
                            "label": "Time Between",
                            "type": "datepicker",
                            "multiple": true,
                            "fields": [
                                {
                                    "type": "number",
                                    "only": "timepicker",
                                    "label": "Start Time",
                                    "priority": 0,
                                    "value": 6
                                },
                                {
                                    "type": "number",
                                    "only": "timepicker",
                                    "label": "End Time",
                                    "priority": 1,
                                    "value": 12
                                }
                            ],
                            "rules": [
                                "is",
                                "time_randomize",
                                true
                            ]
                        },
                        {
                            "name": "time_reset",
                            "label": "Daily Time Reset",
                            "type": "checkbox",
                            "rules": [
                                "and",
                                [
                                    "is",
                                    "evergreen_timer",
                                    true
                                ],
                                [
                                    "is",
                                    "enable_countdown",
                                    true
                                ]
                            ]
                        },
                        {
                            "name": "close_forever",
                            "label": "Permanent Close",
                            "type": "checkbox"
                        }
                    ],
                    "rules": [
                        "is",
                        "source",
                        "press_bar"
                    ]
                }
            ]
        },
        {
            "label": "Display",
            "id": "display_tab",
            "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/icons/screen.svg",
            "classes": "display_tab",
            "fields": [
                {
                    "label": "IMAGE",
                    "name": "image",
                    "type": "section",
                    "fields": [
                        {
                            "label": "Show Default Image",
                            "name": "show_default_image",
                            "type": "checkbox",
                            "default": false
                        },
                        {
                            "label": "Choose an Image",
                            "name": "default_avatar",
                            "type": "radio-card",
                            "default": "",
                            "description": "If checked, this will show in notifications.",
                            "rules": [
                                "is",
                                "show_default_image",
                                true
                            ],
                            "options": [
                                {
                                    "value": "verified.svg",
                                    "label": "Verified",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/public/image/icons/verified.svg"
                                },
                                {
                                    "value": "flames.svg",
                                    "label": "Flames",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/public/image/icons/flames.svg"
                                },
                                {
                                    "value": "flames.gif",
                                    "label": "Flames GIF",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/public/image/icons/flames.gif"
                                },
                                {
                                    "value": "pink-face-looped.gif",
                                    "label": "Pink Face",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/public/image/icons/pink-face-looped.gif"
                                },
                                {
                                    "value": "blue-face-non-looped.gif",
                                    "label": "Blue Face",
                                    "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/public/image/icons/blue-face-non-looped.gif"
                                }
                            ]
                        },
                        {
                            "label": "Upload an Image",
                            "name": "image_url",
                            "type": "media",
                            "value": "",
                            "rules": [
                                "is",
                                "show_default_image",
                                true
                            ]
                        },
                        {
                            "label": "Image",
                            "name": "show_notification_image",
                            "type": "select",
                            "value": "none",
                            "rules": [
                                "includes",
                                "source",
                                [
                                    "cf7",
                                    "custom_notification",
                                    "edd",
                                    "envato",
                                    "grvf",
                                    "give",
                                    "ifttt",
                                    "learndash",
                                    "njf",
                                    "tutor",
                                    "wpf",
                                    "reviewx",
                                    "woocommerce",
                                    "woo_reviews",
                                    "wp_comments",
                                    "wp_reviews",
                                    "zapier"
                                ]
                            ],
                            "options": [
                                {
                                    "value": "none",
                                    "label": "None"
                                },
                                {
                                    "value": "featured_image",
                                    "label": "Featured Image",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "cf7",
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "grvf",
                                            "give",
                                            "ifttt",
                                            "learndash",
                                            "njf",
                                            "tutor",
                                            "wpf",
                                            "reviewx",
                                            "woocommerce",
                                            "woo_reviews",
                                            "wp_reviews"
                                        ]
                                    ]
                                },
                                {
                                    "value": "gravatar",
                                    "label": "Gravatar",
                                    "rules": [
                                        "includes",
                                        "source",
                                        [
                                            "cf7",
                                            "custom_notification",
                                            "edd",
                                            "envato",
                                            "grvf",
                                            "give",
                                            "ifttt",
                                            "learndash",
                                            "njf",
                                            "tutor",
                                            "wpf",
                                            "reviewx",
                                            "woocommerce",
                                            "woo_reviews",
                                            "wp_comments",
                                            "wp_reviews",
                                            "zapier"
                                        ]
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "Visibility",
                    "name": "visibility",
                    "type": "section",
                    "fields": [
                        {
                            "label": "Show On",
                            "name": "show_on",
                            "type": "select",
                            "default": "everywhere",
                            "priority": 5,
                            "options": [
                                {
                                    "value": "everywhere",
                                    "label": "Show Everywhere"
                                },
                                {
                                    "value": "on_selected",
                                    "label": "Show On Selected"
                                },
                                {
                                    "value": "hide_on_selected",
                                    "label": "Hide On Selected"
                                }
                            ]
                        },
                        {
                            "label": "Locations",
                            "name": "all_locations",
                            "type": "select",
                            "default": "",
                            "multiple": true,
                            "priority": 10,
                            "rules": [
                                "includes",
                                "show_on",
                                [
                                    "on_selected",
                                    "hide_on_selected"
                                ]
                            ],
                            "options": [
                                {
                                    "value": "is_front_page",
                                    "label": "Front page"
                                },
                                {
                                    "value": "is_home",
                                    "label": "Blog page"
                                },
                                {
                                    "value": "is_singular",
                                    "label": "All posts, pages and custom post types"
                                },
                                {
                                    "value": "is_single",
                                    "label": "All posts"
                                },
                                {
                                    "value": "is_page",
                                    "label": "All pages"
                                },
                                {
                                    "value": "is_attachment",
                                    "label": "All attachments"
                                },
                                {
                                    "value": "is_search",
                                    "label": "Search results"
                                },
                                {
                                    "value": "is_404",
                                    "label": "404 error page"
                                },
                                {
                                    "value": "is_archive",
                                    "label": "All archives"
                                },
                                {
                                    "value": "is_category",
                                    "label": "All category archives"
                                },
                                {
                                    "value": "is_tag",
                                    "label": "All tag archives"
                                }
                            ]
                        },
                        {
                            "label": "Display For",
                            "name": "show_on_display",
                            "type": "select",
                            "default": "always",
                            "priority": 15,
                            "options": [
                                {
                                    "value": "always",
                                    "label": "Everyone"
                                },
                                {
                                    "value": "logged_out_user",
                                    "label": "Logged Out User"
                                },
                                {
                                    "value": "logged_in_user",
                                    "label": "Logged In User"
                                }
                            ],
                            "help": "<a target=\"_blank\" rel=\"nofollow\" href=\"https://notificationx.com/in/pro-display-control\">More Control in Pro</a>"
                        }
                    ]
                }
            ]
        },
        {
            "label": "Customize",
            "id": "customize_tab",
            "icon": "https://newnx.test/wp-content/plugins/notificationx/assets/admin/images/icons/cog.svg",
            "classes": "customize_tab",
            "fields": [
                {
                    "label": "Appearance",
                    "name": "appearance",
                    "type": "section",
                    "fields": [
                        {
                            "label": "Position",
                            "name": "position",
                            "type": "select",
                            "default": "bottom_left",
                            "priority": 50,
                            "options": [
                                {
                                    "label": "Bottom Left",
                                    "value": "bottom_left"
                                },
                                {
                                    "label": "Bottom Right",
                                    "value": "bottom_right"
                                },
                                {
                                    "label": "Top",
                                    "value": "top",
                                    "rules": [
                                        "is",
                                        "source",
                                        "press_bar"
                                    ]
                                },
                                {
                                    "label": "Bottom",
                                    "value": "bottom",
                                    "rules": [
                                        "is",
                                        "source",
                                        "press_bar"
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Notification Size",
                            "name": "size",
                            "type": "number",
                            "default": 500,
                            "priority": 51,
                            "help": "Set a max width for notification."
                        },
                        {
                            "label": "Sticky Bar?",
                            "name": "sticky_bar",
                            "type": "checkbox",
                            "default": 0,
                            "priority": 60,
                            "description": "If checked, this will fixed Notification Bar at top or bottom."
                        },
                        {
                            "label": "Display Overlapping",
                            "name": "display_overlapping",
                            "type": "checkbox",
                            "default": 0,
                            "priority": 61,
                            "description": "Show Notification Bar overlapping content instead of pushing."
                        },
                        {
                            "label": "Display Close Option",
                            "name": "close_button",
                            "type": "checkbox",
                            "default": 1,
                            "priority": 70,
                            "description": "Display a close button."
                        },
                        {
                            "label": "Mobile Visibility",
                            "name": "hide_on_mobile",
                            "type": "checkbox",
                            "default": 1,
                            "priority": 200,
                            "description": "Hide NotificationX on mobile."
                        }
                    ]
                },
                {
                    "label": "Queue Management",
                    "name": "queue_management",
                    "type": "section",
                    "priority": 150,
                    "is_pro": true,
                    "fields": [
                        {
                            "label": "Enable Global Queue",
                            "name": "global_queue",
                            "type": "checkbox",
                            "priority": 0,
                            "default": 0,
                            "is_pro": true
                        }
                    ]
                },
                {
                    "label": "Timing",
                    "name": "timing",
                    "type": "section",
                    "priority": 200,
                    "rules": [
                        "!is",
                        "global_queue",
                        true
                    ],
                    "fields": [
                        {
                            "label": "Delay Before First Notification",
                            "name": "delay_before",
                            "type": "number",
                            "priority": 40,
                            "value": 5,
                            "help": "Initial Delay",
                            "description": "seconds"
                        },
                        {
                            "label": "Auto Hide",
                            "name": "auto_hide",
                            "type": "checkbox",
                            "priority": 50,
                            "default": false,
                            "description": "If checked, notification bar will be hidden after the time set below."
                        },
                        {
                            "label": "Hide After",
                            "name": "hide_after",
                            "type": "number",
                            "priority": 55,
                            "value": 60,
                            "description": "seconds",
                            "help": "Hide after 60 seconds",
                            "rules": [
                                "is",
                                "auto_hide",
                                true
                            ]
                        },
                        {
                            "name": "display_for",
                            "type": "number",
                            "label": "Display For",
                            "description": "seconds",
                            "help": "Display each notification for * seconds",
                            "priority": 60,
                            "value": 5
                        },
                        {
                            "name": "delay_between",
                            "type": "number",
                            "label": "Delay Between",
                            "description": "seconds",
                            "help": "Delay between each notification",
                            "priority": 70,
                            "value": 5
                        }
                    ]
                },
                {
                    "label": "Behaviour",
                    "name": "behaviour",
                    "type": "section",
                    "priority": 300,
                    "collapsable": true,
                    "fields": [
                        {
                            "name": "display_last",
                            "type": "number",
                            "label": "Display The Last",
                            "description": "conversions",
                            "default": 20,
                            "priority": 40,
                            "max": 20
                        },
                        {
                            "name": "display_from",
                            "type": "number",
                            "label": "Display From The Last",
                            "priority": 45,
                            "default": 2,
                            "description": "days"
                        },
                        {
                            "name": "loop",
                            "type": "checkbox",
                            "label": "Loop Notification",
                            "priority": 50,
                            "default": true
                        },
                        {
                            "name": "link_open",
                            "type": "checkbox",
                            "label": "Open Link In New Tab",
                            "priority": 60,
                            "default": false
                        }
                    ]
                }
            ]
        }
    ],
    "instructions": {
        "form": {
            "cf7": "<p>Make sure that you have <a target=\"_blank\" href=\"https://wordpress.org/plugins/contact-form-7/\">Contact Form 7 installed & configured</a> to use its campaign & form subscriptions data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/contact-form-submission-alert/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://youtu.be/SP9NXMioIK8\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/contact-form-7/\">Integration with Contact Form 7</a></p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 Hacks to Increase Your <a target=\"_blank\" href=\"https://notificationx.com/blog/wordpress-contact-forms/\">WordPress Contact Forms Submission Rate</a> Using NotificationX</p>",
            "grvf": "<p>Make sure that you have <a target=\"_blank\" href=\"https://www.gravityforms.com/\">Gravity Forms installed & configured</a>, to use its campaign & form subscriptions data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/gravity-forms/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=1Gl3XRd1TxY\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/gravity-forms/\">Integration with Ninja Forms</a></p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥Hacks to Increase Your <a target=\"_blank\" href=\"https://notificationx.com/blog/wordpress-contact-forms/\">WordPress Contact Forms Submission Rate</a> Using NotificationX</p>",
            "njf": "<p>Make sure that you have <a target=\"_blank\" href=\"https://wordpress.org/plugins/ninja-forms/\">Ninja Forms installed & configured</a> to use its campaign & form subscriptions data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/ninja-forms/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=Ibv84iGcBHE\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>⭐ Check how it looks in <a target=\"_blank\" href=\"https://demo.notificationx.com/woocommerce/\">LIVE Demo</a></p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/ninja-forms/\">Integration with Ninja Forms</a></p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 Hacks to Increase Your <a target=\"_blank\" href=\"https://notificationx.com/blog/wordpress-contact-forms/\">WordPress Contact Forms Submission Rate</a> Using NotificationX</p>",
            "wpf": "<p>Make sure that you have <a target=\"_blank\" href=\"https://wordpress.org/plugins/wpforms-lite/\">WPForms installed & configured</a>  to use its campaign & form subscriptions data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/wpforms/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=8tk7_ZawJN8\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/wpforms/\">Integration with WPForms</a></p>\n\t\t<p><strong>Recommended Blogs:</strong></p>\n\t\t<p>🔥Hacks to Increase Your <a target=\"_blank\" href=\"https://notificationx.com/blog/wordpress-contact-forms/\">WordPress Contact Forms Submission Rate</a> Using NotificationX</p>"
        },
        "email_subscription": {
            "convertkit": "<p>Make sure that you have <a target=\"_blank\" href=\"https://app.convertkit.com/users/login\">signed in & retrieved your API key from ConvertKit account</a> to use its campaign & email subscriptions data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/convertkit-alert/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://youtu.be/lk_KMSBkEbY\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/convertkit/\">Integration with ConvertKit</a></p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 Connect <a target=\"_blank\" href=\"https://wpdeveloper.net/convertkit-social-proof/\">NotificationX With ConvertKit</a>: Grow Your Audience By Leveraging Social Proof</p>",
            "mailchimp": "<p>Make sure that you have <a target=\"_blank\" href=\"https://mailchimp.com/help/about-api-keys/\">signed in & retrieved API key from MailChimp account</a> to use its campaign & email subscriptions data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/mailchimp-email-subscription-alert/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://youtu.be/WvX8feM5DBw\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/mailchimp/\">Integration with MailChimp</a></p>\n\t\t<p><strong>Recommended Blogs:</strong></p>\n\t\t<p>🔥 How To Improve Your <a target=\"_blank\" href=\"https://wpdeveloper.net/email-marketing-social-proof/\">Email Marketing Strategy</a> With Social Proof</p>\n\t\t<p>🚀 Hacks To Grow Your <a target=\"_blank\" href=\"https://wpdeveloper.net/email-subscription-list-wordpress/\">Email Subscription List</a> On WordPress Website</p>"
        },
        "custom": {
            "custom_notification": "<p>You can make custom notification for its all types of campaign. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/custom-notification/\">documentation</a>.</p>\n\t\t<p>🎦 Watch <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=OuTmDZ0_TEw\">video tutorial</a> to learn quickly</p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 How to <a target=\"_blank\" href=\"https://wpdeveloper.net/custom-notificationx-alert-fomo/\">Display Custom Notification Alerts</a> On Your Website Using NotificationX</p>"
        },
        "conversions": {
            "custom_notification": "<p>You can make custom notification for its all types of campaign. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/custom-notification/\">documentation</a>.</p>\n\t\t<p>🎦 Watch <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=OuTmDZ0_TEw\">video tutorial</a> to learn quickly</p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 How to <a target=\"_blank\" href=\"https://wpdeveloper.net/custom-notificationx-alert-fomo/\">Display Custom Notification Alerts</a> On Your Website Using NotificationX</p>",
            "edd": "<p>Make sure that you have <a href=\"https://wordpress.org/plugins/easy-digital-downloads/\" target=\"_blank\">Easy Digital Downloads installed & activated</a> to use its campaign & product sales data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/notificationx-easy-digital-downloads/\">documentation</a>.</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/easy-digital-downloads/\">Integration with Easy Digital Downloads</a></p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 How Does <a target=\"_blank\" href=\"https://wpdeveloper.net/notificationx-increase-sales-wordpress/\">NotificationX Increase Sales on WordPress</a> Websites?</p>",
            "envato": "<p>Make sure that you have <a target=\"_blank\" href=\"https://account.envato.com/sign_in?to=envato-api\">created & signed in to Envato account</a> to use its campaign & product sales data.  For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/envato-sales-notification/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://youtu.be/-df_6KHgr7I\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/envato/\">Integration with Envato</a></p>",
            "freemius_conversions": "<p>Make sure that you have <a target=\"_blank\" href=\"https://dashboard.freemius.com/login/\">created & signed in to Freemius account</a> to use its campaign & product sales data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/freemius-sales-notification/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://youtu.be/0uANsOSFmtw\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/freemius/\">Integration with Freemius</a></p>",
            "woocommerce": "<p>Make sure that you have <a target=\"_blank\" href=\"https://wordpress.org/plugins/woocommerce/\">WooCommerce installed & activated</a> to use this campaign. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/woocommerce-sales-notifications/\">documentation</a>.</p>\n\t\t<p>🎦 <a href=\"https://www.youtube.com/watch?v=dVthd36hJ-E&t=1s\" target=\"_blank\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>⭐ NotificationX Integration with WooCommerce</p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 Why NotificationX is The <a target=\"_blank\" href=\"https://notificationx.com/integrations/woocommerce/\">Best FOMO and Social Proof Plugin</a> for WooCommerce?</p>\n\t\t<p>🚀 How to <a target=\"_blank\" href=\"https://notificationx.com/blog/best-fomo-and-social-proof-plugin-for-woocommerce/\">boost WooCommerce Sales</a> Using NotificationX</p>"
        },
        "reviews": {
            "freemius_reviews": "<p>Make sure that you have <a target=\"_blank\" href=\"https://dashboard.freemius.com/login/\">created & signed in to Freemius account</a> to use its campaign & product sales data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/freemius-sales-notification/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://youtu.be/0uANsOSFmtw\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/freemius/\">Integration with Freemius</a></p>",
            "reviewx": "<p>Make sure that you have <a target=\"_blank\" href=\"https://wordpress.org/plugins/woocommerce/\">WooCommerce</a> & <a target=\"_blank\" href=\"https://wordpress.org/plugins/reviewx/\">ReviewX</a> installed & activated to use this campaign. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/reviewx-notification-alerts\">documentation</a>.</p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🚀 How to <a target=\"_blank\" href=\"https://wpdeveloper.net/ecommerce-sales-social-proof/\">boost WooCommerce Sales</a> Using NotificationX</p>",
            "woo_reviews": "<p>Make sure that you have <a target=\"_blank\" href=\"https://wordpress.org/plugins/woocommerce/\">WooCommerce installed & activated</a> to use this campaign. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/woocommerce-product-reviews/\">documentation</a>.</p>\n\t\t<p>🎦 Watch <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=bHuaOs9JWvI\">video tutorial</a> to learn quickly</p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🚀 How to <a target=\"_blank\" href=\"https://wpdeveloper.net/ecommerce-sales-social-proof/\">boost WooCommerce Sales</a> Using NotificationX</p>",
            "wp_reviews": "<p>Make sure that you have a <a target=\"_blank\" href=\"https://wordpress.org/\">wordpress.org</a> account to use its campaign on blog comments, reviews and download stats data. For further assistance, check out our step by step documentation on <a target=\"_blank\" href=\"https://notificationx.com/docs/wordpress-comment-popup-alert/\">comments popup</a>, <a target=\"_blank\" href=\"https://notificationx.com/docs/wordpress-plugin-review-notificationx/\">plugin reviews</a> & <a target=\"_blank\" href=\"https://notificationx.com/docs/wordpress-plugin-download-stats/\">downloads stats</a>.</p>\n\t\t<p>🎦 Watch video tutorial on <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=wZKAUKH9XQY\">blog comments</a>, <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=wZKAUKH9XQY\">reviews</a> & <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=wZKAUKH9XQY\">downloads stats</a> to learn quickly</p>\n\t\t<p><strong>Recommended Blogs:</strong></p>\n\t\t<p>🔥 Proven Hacks To <a target=\"_blank\" href=\"https://notificationx.com/blog/hacks-to-get-more-comments-wordpress/\">Get More Comments on Your WordPress Blog</a> Posts</p>\n\t\t<p>🚀 How To Increase <a target=\"_blank\" href=\"https://wpdeveloper.net/wordpress-plugin-download/\">WordPress Plugin Download Rates & Increase Sales</a> in 2020</p>"
        },
        "download_stats": {
            "freemius_stats": "<p>Make sure that you have <a target=\"_blank\" href=\"https://dashboard.freemius.com/login/\">created & signed in to Freemius account</a> to use its campaign & product sales data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/freemius-sales-notification/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://youtu.be/0uANsOSFmtw\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/freemius/\">Integration with Freemius</a></p>",
            "wp_stats": "<p>Make sure that you have a <a target=\"_blank\" href=\"https://wordpress.org/\">wordpress.org</a> account to use its campaign on blog comments, reviews and download stats data. For further assistance, check out our step by step documentation on <a target=\"_blank\" href=\"https://notificationx.com/docs/wordpress-comment-popup-alert/\">comments popup</a>, <a target=\"_blank\" href=\"https://notificationx.com/docs/wordpress-plugin-review-notificationx/\">plugin reviews</a> & <a target=\"_blank\" href=\"https://notificationx.com/docs/wordpress-plugin-download-stats/\">downloads stats</a>.</p>\n\t\t<p>🎦 Watch video tutorial on <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=wZKAUKH9XQY\">blog comments</a>, <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=wZKAUKH9XQY\">reviews</a> & <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=wZKAUKH9XQY\">downloads stats</a> to learn quickly</p>\n\t\t<p><strong>Recommended Blogs:</strong></p>\n\t\t<p>🔥 Proven Hacks To <a target=\"_blank\" href=\"https://notificationx.com/blog/hacks-to-get-more-comments-wordpress/\">Get More Comments on Your WordPress Blog</a> Posts</p>\n\t\t<p>🚀 How To Increase <a target=\"_blank\" href=\"https://wpdeveloper.net/wordpress-plugin-download/\">WordPress Plugin Download Rates & Increase Sales</a> in 2020</p>"
        },
        "donation": {
            "give": "<p>Make sure that you have <a target=\"_blank\" href=\"https://wordpress.org/plugins/give/\">GiveWP installed & configured</a> to use its campaign & donars data. For further assistance, check out our step by step <a href=\"https://notificationx.com/docs/givewp-donation-alert/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=8EFgHSA8mOg\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/givewp/\">Integration with GiveWP</a></p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 How Does <a target=\"_blank\" href=\"https://wpdeveloper.net/notificationx-increase-sales-wordpress/\">NotificationX Increase Sales on WordPress</a> Websites?\"</p>"
        },
        "page_analytics": {
            "google": "<p>Make sure that you have <a target=\"_blank\" href=\"https://analytics.google.com/analytics/web/\">signed in to Google Analytics site</a>, to use its campaign & page analytics data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/google-analytics/\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=zZPF5nJD4mo\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉NotificationX <a target=\"_blank\" href=\"https://notificationx.com/docs/google-analytics/\">Integration with Google Analytics</a></p>"
        },
        "elearning": {
            "learndash": "<p>Make sure that you have <a target=\"_blank\" href=\"https://www.learndash.com/\">LearnDash installed & configured</a> to use its campaign & course selling data.  For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/how-to-display-learndash-course-enrollment-alert-using-notificationx\">documentation</a>.</p>\n\t\t<p>🎦 <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=sTbBt2DVsIA\">Watch video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/learndash/\">Integration with LearnDash</a> </p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 How to Increase Your <a target=\"_blank\" href=\"https://wpdeveloper.net/learndash-course-enrollment-rate-notificationx/\">LearnDash Course Enrollment Rates</a> With NotificationX</p>",
            "tutor": "<p>Make sure that you have <a href=\"https://wordpress.org/plugins/tutor/\" target=\"_blank\">Tutor LMS installed & configured</a> to use its campaign & course selling data. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/tutor-lms/\">documentation</a>.</p>\n\t\t<p>🎦 Watch <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=EMrjLfL563Q\">video tutorial</a> to learn quickly</p>\n\t\t<p>👉 NotificationX <a target=\"_blank\" href=\"https://notificationx.com/integrations/tutor-lms/\">Integration with Tutor LMS</a></p>"
        },
        "notification_bar": {
            "press_bar": "<p>You can showcase the notification bar to do instant popup campaign on WordPress site. For further assistance, check out our step by step <a target=\"_blank\" href=\"https://notificationx.com/docs/notification-bar/\">documentation</a>.</p>\n\t\t<p>🎦 Watch <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=l7s9FXgzbEM\">video tutorial</a> to learn quickly</p>\n\t\t<p><strong>Recommended Blog:</strong></p>\n\t\t<p>🔥 Introducing NotificationX: <a target=\"_blank\" href=\"https://wpdeveloper.net/notificationx-social-proof-fomo/\">Social Proof & FOMO Marketing Solution</a> for WordPress</p>\n\t\t<p>🔥 How to <a href=\"https://notificationx.com/docs/notification-bar-with-elementor/\" target=\"_blank\">design Notification Bar with Elementor Page Builder</a>.</p>"
        },
        "comments": {
            "wp_comments": "<p>Make sure that you have a <a target=\"_blank\" href=\"https://wordpress.org/\">wordpress.org</a> account to use its campaign on blog comments, reviews and download stats data. For further assistance, check out our step by step documentation on <a target=\"_blank\" href=\"https://notificationx.com/docs/wordpress-comment-popup-alert/\">comments popup</a>, <a target=\"_blank\" href=\"https://notificationx.com/docs/wordpress-plugin-review-notificationx/\">plugin reviews</a> & <a target=\"_blank\" href=\"https://notificationx.com/docs/wordpress-plugin-download-stats/\">downloads stats</a>.</p>\n\t\t<p>🎦 Watch video tutorial on <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=wZKAUKH9XQY\">blog comments</a>, <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=wZKAUKH9XQY\">reviews</a> & <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=wZKAUKH9XQY\">downloads stats</a> to learn quickly</p>\n\t\t<p><strong>Recommended Blogs:</strong></p>\n\t\t<p>🔥 Proven Hacks To <a target=\"_blank\" href=\"https://notificationx.com/blog/hacks-to-get-more-comments-wordpress/\">Get More Comments on Your WordPress Blog</a> Posts</p>\n\t\t<p>🚀 How To Increase <a target=\"_blank\" href=\"https://wpdeveloper.net/wordpress-plugin-download/\">WordPress Plugin Download Rates & Increase Sales</a> in 2020</p>"
        }
    },
    "rest": {
        "root": "https://newnx.test/index.php?rest_route=/",
        "namespace": "notificationx/v1",
        "nonce": "593281fcf1"
    },
    "current_page": "add-nx",
    "values": {},
    "savedValues": {},
    "errors": {},
    "touched": {},
    "isSubmitting": false
}

export default nxBuilder;