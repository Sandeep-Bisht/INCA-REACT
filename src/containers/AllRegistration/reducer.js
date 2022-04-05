import * as CONSTANTS from './constant'
export const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case CONSTANTS.GET_USER_REGISTRATION_INFO_SUCCESS:
            return {
                ...state,
                userRegistrationInfoSuccess: action.response,
            };

        case CONSTANTS.GET_USER_REGISTRATION_INFO_FAILURE:
            return {
                ...state,
                userRegistrationInfoFailure: action.error,
            };   
        default:
            return state
    }
} 