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
	{
		type: "textarea",
		label: "TextArea Control",
		name: "textarea_control",
		placeholder: "Textarea Control Placeholder",
		value: "Textarea Control Value",
		rows: 30, // default : 10
		resize: false, // default: true,
		// validation_rules: {
		// 	required: "This is required",
		// 	"min:3": "Has to be min 3 char long.",
		// },
	},
	{
		label: "Toggle List",
		type: "toggle",
		multiple: true, // default false
		classes: "", // default empty, you can provide your class name if needed
		name: "toggle-list",
		style: {
			type: "card", // default empty
			column: 3, // default 4,
			label: {
				position: "right", // default
			},
		},
		// if multiple is true, you should provide valid options like below
		options: [
			{
				label: "test",
				value: "test",
			},
		],
	},
];

export { fields };
