const initialState = {};

const restaurantReviewReducerCedric = (state = initialState, action) => {
    switch (action.type) {
        case "storeRestaurantReviewsAction": {
            const newState = {
                ...state,
                reviews: action.payload,
                error: null
            };
            return newState;
        };
        default:
            return state;
    };
};

export default restaurantReviewReducerCedric;
