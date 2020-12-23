const DEFAULT_STATE = {
	depends_on: {
		message: {
			target: "is_checked",
			value: true,
		},
	},
	values: {},
	touched: {},
};

const actions = {
	setFieldValue(payload) {
		return {
			type: "SET_FIELD_VALUE",
			payload,
		};
	},
	setFieldTouched(payload) {
		return {
			type: "FIELD_TOUCHED",
			payload,
		};
	},
};

const store = {
	reducer(state = DEFAULT_STATE, action) {
		switch (action.type) {
			case "SET_FIELD_VALUE":
				return {
					...state,
					values: { ...state.values, ...action.payload },
				};
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
		getFieldValu(state, name) {
			return state.values.hasOwnProperty(name)
				? state.values[name]
				: null;
		},
		isTouched(state, current) {
			return (
				state.touched.hasOwnProperty(current) && state.touched[current]
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
