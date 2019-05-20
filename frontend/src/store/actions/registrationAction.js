import axios from 'axios'

export const registrationDispatch = (code) => {
    return {
        type: 'register',
        payload: code
    }
}

export const errorRegistrationDispatch = (error) => {
    return {
        type: 'error',
        payload: error
    }
}

export const registrationAction = ({ email }) => (dispatch, getState) => {
    return axios.post('https://aries.propulsion-learn.ch/app/api/registration/', { email })
        .then(response => { console.log(Response)
            dispatch(registrationDispatch(response.data))
            return response;
        }).catch(error => {
            dispatch(errorRegistrationDispatch(error))
        })
}