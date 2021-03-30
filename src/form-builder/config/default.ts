const builder = {
	storeName: "formbuilder",
	config: {
		active: 'tab_1',
		sidebar: false,
	},
	tabs: [
		{
			label: "Tab 1",
			id: "tab_1",
			icon: "",
			fields: [
				{
					type: "text", // Required
					name: "text_control", // Required
					label: "Text Control",
					default: 'Hello World',
					placeholder: "Text Control Placeholder",
					// value: "Test Control Saved Value", // String
					// default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
					validation_rules: {
						required: "This Fields is Required", // Message
						"min:20": "Your Input is too short. Make it 20Character Bigger.",
					},
				},
				{
					"label": "Notification Template",
					"name": "notification-template",
					"type": "group",
					"display": "inline",
					"priority": 90,
					"fields": [
						{
							type: "text", // Required
							name: "text_control", // Required
							label: "Text Control",
							default: 'Hello World',
							placeholder: "Text Control Placeholder",
							// value: "Test Control Saved Value", // String
							// default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
							validation_rules: {
								required: "This Fields is Required", // Message
								"min:20": "Your Input is too short. Make it 20Character Bigger.",
							},
						},
					]
				}
				// {
				// 	type: "repeater", // Required
				// 	name: "repeater_control", // Required
				// 	label: "Repeater Control",
				// 	button: {
				// 		label: 'Add New'
				// 	},
				// 	fields: [
				// 		{
				// 			type: 'text',
				// 		},
				// 		{
				// 			type: 'select',
				// 			options: [
				// 				{
				// 					label: 'One',
				// 					value: 'one'
				// 				},
				// 				{
				// 					label: 'Two',
				// 					value: 'two'
				// 				},
				// 			]
				// 		},
				// 	]
				// },
			]
		},
		// {
		// 	label: "Tab 2",
		// 	id: "tab_2",
		// 	icon: "",
		// 	fields: [
		// 		{
		// 			type: "checkbox", // Required
		// 			name: "checkbox_control", // Required
		// 			label: "Text Control",
		// 			default: true,
		// 			// placeholder: "Text Control Placeholder",
		// 			// value: "Test Control Saved Value", // String
		// 			// default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		// 			validation_rules: {
		// 				required: "This Fields is Required", // Message
		// 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 			},
		// 		},
		// 		{
		// 			type: "colorpicker", // Required
		// 			name: "color", // Required
		// 			label: "Color Control",
		// 			default: '#FF0000',
		// 			validation_rules: {
		// 				required: "This Fields is Required", // Message
		// 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 			},
		// 		},
		// 		{
		// 			type: "slider", // Required
		// 			name: "slider", // Required
		// 			label: "Slider Control",
		// 			default: '10',
		// 			// unit: 'px',
		// 			units: [ 'px', 'em' ],
		// 			validation_rules: {
		// 				required: "This Fields is Required", // Message
		// 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 			},
		// 		},
		// 		{
		// 			type: "select", // Required
		// 			name: "select", // Required
		// 			label: "Color Control",
		// 			multiple: true,
		// 			options: [
		// 				{ label: 'MKL', value: 'mkl' },
		// 				{ label: 'PRIYO', value: 'priyo' },
		// 			]
		// 			// default: '#FF0000',
		// 			// validation_rules: {
		// 			// 	required: "This Fields is Required", // Message
		// 			// 	"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 			// },
		// 		},
		// 		{
		// 			type: "text", // Required
		// 			name: "text_control_3", // Required
		// 			label: "Text Control",
		// 			placeholder: "Text Control Placeholder",
		// 			value: "Test Control Saved Value", // String
		// 			default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		// 			validation_rules: {
		// 				required: "This Fields is Required", // Message
		// 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 			},
		// 			// rules: [ 'is', 'checkbox_control', true ]
		// 		},
		// 		{
		// 			type: "radio-card", // Required
		// 			name: "radio_control_3", // Required
		// 			label: "Text Control",
		// 			default: 'option_one',
		// 			options: [
		// 				{
		// 					label: "Option One",
		// 					value: 'option_one'
		// 				},
		// 				{
		// 					label: "Option Two",
		// 					value: 'option_two'
		// 				},
		// 				{
		// 					label: "Option Two",
		// 					value: 'option_three',
		// 					rules: ['is', 'checkbox_control', false ]
		// 				},
		// 			],
		// 			// placeholder: "Text Control Placeholder",
		// 			// value: "Test Control Saved Value", // String
		// 			// default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		// 			validation_rules: {
		// 				required: "This Fields is Required", // Message
		// 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 			},
		// 		},
		// 		{
		// 			type: 'date',
		// 			name: 'date',
		// 		},
		// 		{
		// 			type: 'toggle',
		// 			name: 'toggle',
		// 			label: 'Toggle',
		// 			multiple: true,
		// 			default: {
		// 				one: true,
		// 				three: true,
		// 			},
		// 			options: [
		// 				{
		// 					label: 'One',
		// 					value: 'one'
		// 				},
		// 				{
		// 					label: 'Two',
		// 					value: 'two'
		// 				},
		// 				{
		// 					label: 'Three',
		// 					value: 'three'
		// 				}
		// 			]
		// 		},
		// 		// {
		// 		// 	type: 'repeater',
		// 		// 	name: 'repeater',
		// 		// 	label: 'Repeater',
		// 		// 	button: {
		// 		// 		label: 'Add New',
		// 		// 	},
		// 		// 	fields: [
		// 		// 		{
		// 		// 			type: 'text',
		// 		// 			placeholder: 'Repeater Text',
		// 		// 			name: 'repeater_text',
		// 		// 		},
		// 		// 		{
		// 		// 			type: 'text',
		// 		// 			placeholder: 'Repeater Text',
		// 		// 			name: 'repeater_text_one',
		// 		// 		},
		// 		// 	]
		// 		// },
		// 		{
		// 			type: 'section',
		// 			label: 'Section Test',
		// 			name: 'section',
		// 			fields: [
		// 				{
		// 					type: "group", // Required
		// 					name: "group_control", // Required
		// 					label: "Group Control",
		// 					default: {
		// 						name: 'Mukul',
		// 						email: 'mukul@ar.com.bd'
		// 					},
		// 					fields: [
		// 						{
		// 							type: "text", // Required
		// 							name: "name", // Required
		// 							label: "Username",
		// 							placeholder: "Text Control Placeholder",
		// 							value: "Test Control Saved Value", // String
		// 							default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		// 							validation_rules: {
		// 								required: "This Fields is Required", // Message
		// 								"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 							},
		// 						},
		// 						{
		// 							type: "email", // Required
		// 							name: "email", // Required
		// 							label: "Email",
		// 							placeholder: "Text Control Placeholder",
		// 							value: "Test Control Saved Value", // String
		// 							default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		// 							validation_rules: {
		// 								required: "This Fields is Required", // Message
		// 								"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 							},
		// 						},
		// 					],
		// 					// placeholder: "Text Control Placeholder",
		// 					// value: "Test Control Saved Value", // String
		// 					// default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		// 					// validation_rules: {
		// 					// 	required: "This Fields is Required", // Message
		// 					// 	"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 					// },
		// 				}
		// 			]
		// 		},
		// 		// {
		// 		// 	type: "group", // Required
		// 		// 	name: "group_control", // Required
		// 		// 	label: "Group Control",
		// 		// 	default: {
		// 		// 		name: 'Mukul',
		// 		// 		email: 'mukul@ar.com.bd'
		// 		// 	},
		// 		// 	fields: [
		// 		// 		{
		// 		// 			type: "text", // Required
		// 		// 			name: "name", // Required
		// 		// 			label: "Username",
		// 		// 			placeholder: "Text Control Placeholder",
		// 		// 			value: "Test Control Saved Value", // String
		// 		// 			default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		// 		// 			validation_rules: {
		// 		// 				required: "This Fields is Required", // Message
		// 		// 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 		// 			},
		// 		// 		},
		// 		// 		{
		// 		// 			type: "email", // Required
		// 		// 			name: "email", // Required
		// 		// 			label: "Email",
		// 		// 			placeholder: "Text Control Placeholder",
		// 		// 			value: "Test Control Saved Value", // String
		// 		// 			default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		// 		// 			validation_rules: {
		// 		// 				required: "This Fields is Required", // Message
		// 		// 				"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 		// 			},
		// 		// 		},
		// 		// 	],
		// 		// 	// placeholder: "Text Control Placeholder",
		// 		// 	// value: "Test Control Saved Value", // String
		// 		// 	// default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		// 		// 	// validation_rules: {
		// 		// 	// 	required: "This Fields is Required", // Message
		// 		// 	// 	"min:20": "Your Input is too short. Make it 20Character Bigger.",
		// 		// 	// },
		// 		// },
		// 	]
		// },
	]
};

const storeName = builder.storeName;
export { storeName };

export default builder;
