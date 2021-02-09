import when from "../core/when";

const DEFAULT_STATE = {
    savedValues: {},
    values: {},
    touched: {},
    errors: {},
};

const actions = {
    setSavedValues(payload) {
        return {
            type: "SET_SAVED_VALUES",
            payload,
        };
    },
    setFieldValue({ name, value }) {
        return {
            type: "FIELD_VALUE",
            name,
            payload: value,
        };
    },
    removeFieldValue(payload) {
        return {
            type: "REMOVE_FIELD_VALUE",
            payload,
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
        window.state = state;
        switch (action.type) {
            case "SET_SAVED_VALUES": {
                let updatedState = { ...state };
                updatedState = { ...updatedState, values: action.payload };
                return updatedState;
            }
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
            case "REMOVE_FIELD_VALUE": {
                let updatedState = { ...state };
                const { payload } = action;

                if (updatedState.values?.[payload]) {
                    delete updatedState.values[payload];
                }
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
        isVisible(state, props) {
            if (!props.rules) {
                return true;
            }
            let whenVar = when(props.rules, state.values);
            return Boolean(whenVar);
        },
    },
};
export default store;
