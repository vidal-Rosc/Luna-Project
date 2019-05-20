const initialState = {};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getRestaurants": {
      const newState = { ...state, restaurants: action.payload, error: null };
      return newState;
    }
    case 'addRestaurant': {
      const newState = {...state, restaurant: action.payload}
      return newState;
  }
    default:
      return state;
  }
};

export default restaurantReducer;
