const DEFAULT_STATE = {
	price: 0,
	discountPercent: 0,
};

const actions = {
	setPrice(price) {
		return {
			type: "SET_PRICE",
			payload: price,
		};
	},
};

const store = {
	reducer(state = DEFAULT_STATE, action) {
		switch (action.type) {
			case "SET_PRICE":
				return {
					...state,
					price: action.payload,
				};
		}

		return state;
	},

	actions,

	selectors: {
		getPrice(state) {
			const { price, discountPercent } = state;
			return price;
		},
		// setPrice(price) {
		// 	// const { price, discountPercent } = state;
		// 	return actions.setPrice(price);
		// },
	},
};

export default store;
