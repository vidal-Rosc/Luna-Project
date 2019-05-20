import axios from 'axios'

export const validationDispatch = (data) => {
    return {
        type: 'register',
        payload: data
    }
}

export const errorValidationDispatch = (error) => {
    return {
        type: 'error',
        payload: error
    }
}

export const ValidationAction = validationSentData => (dispatch, getState) => {
    return axios.post('https://aries.propulsion-learn.ch/app/api/registration/validation/', validationSentData)
        .then(response => {
            dispatch(validationDispatch(response.data))
            return response;
        }).catch(error => {
            dispatch(errorValidationDispatch(error))
        })
}