/**
 * Please Add Fields ( Once ) Here to Test In Last Moment.
 * Make sure you gave all supported parameters.
 */
const fields = [
	{
		type: "text", // Required
		name: "text_control", // Required
		label: "Text Control",
		placeholder: "Text Control Placeholder",
		value: "Test Control Saved Value", // String
		default: "Test Control Default Value", // not implemented [ i will do it, lots of things need to changes ]
		validation_rules: {
			required: "This Fields is Required", // Message
			"min:20": "Your Input is too short. Make it 20Character Bigger.",
		},
		// if the field is dependent on other fields.
		// condition: {
		// 	other_field_name: true, // value will be the one which has to meet for the field visibility
		// 	another_field_name: "string_value", // value will be the one which has to meet for the field visibility
		// },
	},
	{
		type: "checkbox", // Required
		name: "checkbox_control", // Required
		label: "Checkbox Control",
		placeholder: "Checkbox Control Placeholder",
		value: false, // Boolean
		default: false, // not implemented [ i will do it, lots of things need to changes ]
		validation_rules: {
			required: "This Fields is Required", // Message
			"min:20": "Your Input is too short. Make it 20Character Bigger.",
		},
	},
	{
		type: "radio-basic", // Required
		name: "radio_basic", // Required
		label: "Radio Basic Control",
		placeholder: "Radio Basic Control Placeholder",
		options: [
			{ label: "One", value: "one" },
			{ label: "Two", value: "two" },
			{ label: "Three", value: "three" },
		],
		value: "one",
		default: false, // not implemented [ i will do it, lots of things need to changes ]
		validation_rules: {
			required: "This Fields is Required", // Message
			"min:20": "Your Input is too short. Make it 20Character Bigger.",
		},
	},
];

export { fields };
