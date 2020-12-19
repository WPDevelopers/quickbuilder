const DEFAULT_STATE = {
	depends_on: {
		message: {
			target: "is_checked",
			value: true,
		},
	},
	formState: {
		last_name: "Mukul",
	},
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
		getInputState(state, name) {
			return state.formState.hasOwnProperty(name)
				? state.formState[name]
				: null;
		},
		inputCanVisible(state, current) {
			if (!state.depends_on.hasOwnProperty(current)) {
				return true;
			}

			return (
				state.depends_on.hasOwnProperty(current) &&
				state.formState.hasOwnProperty(
					state.depends_on[current].target
				) &&
				state.depends_on[current].value ===
					state.formState[state.depends_on[current].target]
			);
		},
	},
};

export default store;
