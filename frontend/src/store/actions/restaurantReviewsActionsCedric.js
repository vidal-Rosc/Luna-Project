import axios from 'axios';

export const storeRestaurantReviewsAction = reviews => {
    return {
        type: "storeRestaurantReviewsAction",
        payload: reviews
    };
};

const fetchRestaurantReviews = restaurantID => (dispatch, getState) => {
    return axios.get(`https://aries.propulsion-learn.ch/app/api/reviews/restaurant/${restaurantID}`)
        .then(response => {
            const reviews = response.data
            dispatch(storeRestaurantReviewsAction(reviews));
        })
        .catch(error => console.log('ERROR', error))
};

export default fetchRestaurantReviews;
