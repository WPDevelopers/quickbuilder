const DEFAULT_STATE = {
	depends_on: {
		message: {
			target: "is_checked",
			value: true,
		},
	},
	values: {},
	touched: {},
	errors: {},
};

const actions = {
	setFieldValue(payload) {
		return {
			type: "FIELD_VALUE",
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
			case "FIELD_VALUE":
				return {
					...state,
					values: { ...state.values, ...action.payload },
				};
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
				console.log("state.values", state.values);
				console.log("state.values keys", Object.keys(state.values));

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
			return state.values[name];
		},
		isTouched(state, current) {
			return (
				state.touched.hasOwnProperty(current) && state.touched[current]
			);
		},
		getError(state, current) {
			return (
				state.errors.hasOwnProperty(current) && state.errors[current]
			);
		},
		isVisible(state, current) {
			if (!state.depends_on.hasOwnProperty(current)) {
				return true;
			}

			return (
				state.depends_on.hasOwnProperty(current) &&
				state.values.hasOwnProperty(state.depends_on[current].target) &&
				state.depends_on[current].value ===
					state.values[state.depends_on[current].target]
			);
		},
	},
};

export default store;
