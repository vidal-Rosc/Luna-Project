import axios from 'axios'

export const reviewsDispatch = (code) => {
    return {
        type: 'createReview',
        payload: code
    }
}

export const errorReviewDispatch = (error) => {
    return {
        type: 'error',
        payload: error
    }
}

export const reviewsActions = ( review, id ) => (dispatch, getState) => {
    return axios.post(`https://aries.propulsion-learn.ch/app/api/reviews/new/${id}`, { review })
        .then(response => { console.log(Response)
            dispatch(reviewsDispatch(response.data))
            return response;
        }).catch(error => {
            dispatch(errorReviewDispatch(error))
        })
}