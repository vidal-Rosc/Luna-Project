const registrationValidationReducer = (state = {}, action) => {
    switch (action.type){
        case "validate":
            return {
                ...state,
                userData: action.payload,
                error:null,
            }
        case "error":
            return {
                ...state,
                error:action.payload,
            }
        default:
            return state
    }
}

export default registrationValidationReducer;