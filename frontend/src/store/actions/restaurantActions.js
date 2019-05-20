import axios from "axios";

export const getAllrestaurants = restaurant => {
  return {
    type: "getRestaurants",
    payload: restaurant
  };
};

const getRestaurants = () => (dispatch, getState) => {
//   const token = getState().authorizationReducer.token;
//   console.log(token);

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   };

  return axios
    .get("https://aries.propulsion-learn.ch/app/api/restaurants/")
    .then(response => {
      dispatch(getAllrestaurants(response.data));
    })
    .catch(err => err);
};

export default getRestaurants;
