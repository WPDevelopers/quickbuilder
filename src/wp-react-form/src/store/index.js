import { isArray } from "../core/functions";

const DEFAULT_STATE = {
	// conditions: { // Optional, we are checking condition from field props itself.
	// 	message: {
	// 		consent: true,
	// 		is_checked: true,
	// 	},
	// 	group_control: {
	// 		notification_type: "comments",
	// 	},
	// },
	savedValues: {},
	values: {
		content_typography: {
			"font-family": "Arial",
		},
		"notification-type": "conversions",
		source: "woocommerce",
		// notification_select: ["sales"],
	},
	touched: {},
	errors: {},
};

const actions = {
	setFieldValue({ name, value }) {
		return {
			type: "FIELD_VALUE",
			name,
			payload: value,
		};
	},
	resetFieldValue(payload) {
		return {
			type: "RESET_FIELD_VALUE",
			payload,
		};
	},
	setFieldTouched(payload) {
		return {
			type: "FIELD_TOUCHED",
			payload,
		};
	},
	setError(payload) {
		return {
			type: "FIELD_ERROR",
			payload,
		};
	},
	removeError(payload) {
		return {
			type: "REMOVE_FIELD_ERROR",
			payload,
		};
	},
};

const store = {
	reducer(state = DEFAULT_STATE, action) {
		switch (action.type) {
			case "FIELD_VALUE": {
				let updatedState = { ...state };
				const { payload, name } = action;
				// console.log("payload", payload);
				// if (
				// 	updatedState?.values?.[name] &&
				// 	typeof updatedState?.values?.[name] === "object"
				// ) {
				// 	let newValues;
				// 	if (
				// 		isArray(updatedState?.values?.[name]) &&
				// 		isArray(payload?.[name])
				// 	) {
				// 		newValues = [
				// 			...updatedState?.values?.[name],
				// 			...payload[name],
				// 		];
				// 	} else {
				// 		newValues = {
				// 			...updatedState?.values?.[name],
				// 			...payload,
				// 		};
				// 	}

				// 	updatedState = {
				// 		...updatedState,
				// 		values: { ...updatedState.values, [name]: newValues },
				// 	};
				// } else {
				// 	updatedState = {
				// 		...updatedState,
				// 		values: { ...updatedState?.values, ...payload },
				// 	};
				// }
				updatedState = {
					...updatedState,
					values: { ...updatedState?.values, ...payload },
				};

				return updatedState;
			}
			case "RESET_FIELD_VALUE": {
				let updatedState = { ...state };
				if (updatedState.values?.[action.payload]) {
					delete updatedState.values[action.payload];
					if (updatedState.savedValues?.[action.payload]) {
						updatedState.values[action.payload] =
							updatedState.savedValues[action.payload];
					}
				}
				return updatedState;
			}
			case "FIELD_ERROR":
				return {
					...state,
					errors: { ...state.errors, ...action.payload },
				};
			case "REMOVE_FIELD_ERROR":
				let updatedState = { ...state };
				delete updatedState.errors[action.payload];
				return updatedState;
			case "FIELD_TOUCHED":
				return {
					...state,
					touched: { ...state.touched, ...action.payload },
				};
		}

		return state;
	},

	actions,

	selectors: {
		getValues(state) {
			return state.values;
		},
		getFieldValue(state, name) {
			return state.values?.[name];
		},
		isTouched(state, current) {
			return state.touched?.[current];
		},
		getError(state, current) {
			return state.errors?.[current];
		},
		isVisible(state, props, parentValue) {
			if (!props.condition) {
				return true;
			}
			let isTrue = true;

			Object.keys(props.condition).map((condition) => {
				if (!isArray(props.condition[condition])) {
					isTrue = !(
						(state.values?.[condition] ?? false) !==
						props.condition[condition]
					);
				} else {
					isTrue = props.condition[condition].includes(
						state.values?.[condition]
					);
				}
			});
			return isTrue;
		},
	},
};

export default store;
