const usersListReducer = (state={}, action) => {
    switch (action.type){
        case "getUsers":
            return{
            ...state,
            listUsers:action.payload,
            error: null
        }
        default:
            return state
    }
}

export default usersListReducer;