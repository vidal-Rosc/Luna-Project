const registrationReducer = (state = {}, action) => {
    switch (action.type){
        case "register":
            return {
                ...state,
                email: action.payload,
                error:null,
            }
        case "error":
            return {
                ...state,
                email: null,
                error:action.payload,
            }
        default:
            return state
    }
}

export default registrationReducer;