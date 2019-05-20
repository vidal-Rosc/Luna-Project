const initialState = {};

const restaurantReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getRestaurantReviews": {
        return ({
            ...state,
            reviews: action.payload,
            error: null
        })
    }
    default:
      return state;
  }
};
export default restaurantReviewReducer;