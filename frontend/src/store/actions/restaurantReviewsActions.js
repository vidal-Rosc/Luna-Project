import axios from 'axios';

export const getRestaurantReviewsAction = Restaurant_review => {
    return {
        type: 'getRestaurantReviews',
        payload: Restaurant_review
    };
};
//const localUrl = "http://localhost:8000/app/api/reviews/restaurants/";
const url = "https://aries.propulsion-learn.ch/app/api/reviews/restaurants/";

const getRestaurantReviews = () => (dispatch, getState) => {
    return axios.get(url)
        .then(res => {
            dispatch(getRestaurantReviewsAction(res.data));
            return res;
        })
        .catch(error => error)
};
export default getRestaurantReviews;