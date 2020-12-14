const DEFAULT_STATE = {
	formState: {},
};

const actions = {
	setFormState(formState) {
		return {
			type: "SET_FORM_STATE",
			payload: formState,
		};
	},
};

const store = {
	reducer(state = DEFAULT_STATE, action) {
		switch (action.type) {
			case "SET_FORM_STATE":
				return {
					...state,
					formState: action.payload,
				};
		}

		return state;
	},

	actions,

	selectors: {
		getFormState(state) {
			return state.formState;
		},
	},
};

export default store;
