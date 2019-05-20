import axios from "axios";

export const getAllUsers = users => {
    return {
        type: "getUsers",
        payload: users,
    }
};

//Fetch all the users from the remote database
export const getUsersAction = () => (dispatch, getState) => {
    /*const token = getState().authReducer.token;
    console.log(token);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };*/
    const remoteUrl = "https://aries.propulsion-learn.ch/app/api/users/list/"
    //const localUrl = "http://localhost:8000/app/api/users/list/"

    return axios
        .get(remoteUrl)
        .then(response => {
            dispatch(getAllUsers(response.data));
            return response
        })
        .catch(err => err);
};