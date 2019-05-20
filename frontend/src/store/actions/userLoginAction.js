import axios from 'axios';

export const userLoginDispatch = token => {
  return {
    type: "login",
    payload: token
  };
};

export const userLoginError = err => {
  return {
    type: "error",
    payload: err
  };
};

const userLoginAction = ({ username, password }) => (dispatch, getState) => {
  return axios.post('https://aries.propulsion-learn.ch/app/api/auth/token/', { username, password})
  .then( response => {
      dispatch(userLoginDispatch(response.data.access))
      localStorage.setItem('token', response.data.access)
      return response;
  }).catch(err => {
      dispatch(userLoginError(err))
  })
}

export default userLoginAction;




// const userLoginAction = ({ username, password }) => (dispatch, getState) => {
//   const body = JSON.stringify({ username, password });
//   console.log(body)

//   const headers = new Headers({
//   "Content-Type": "application/json",
//   });

//   const config = {
//     method: "POST",
//     headers,
//     body
//   };

//   return fetch("https://aries.propulsion-learn.ch/app/api/auth/token/", config)
//     .then(response => response.json())
//      .then(data => {
//       dispatch(userLoginDispatch(data.token));
//       console.log(data)
//       localStorage.setItem("token", JSON.stringify(data.token));
//       return data;
//     })
//     .catch(err => {
//       dispatch(userLoginError(err)); 
//     })
    
// };

// export default userLoginAction;
