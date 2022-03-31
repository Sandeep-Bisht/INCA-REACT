import * as CONSTANTS from './constant'
export const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case CONSTANTS.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                allUserSuccess: action.response,
            };

        case CONSTANTS.GET_ALL_USERS_FAILURE:
            return {
                ...state,
                allUserFailure: action.error,
            };   
        default:
            return state
    }
}     