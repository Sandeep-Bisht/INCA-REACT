import * as CONSTANTS from './constant'
export const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case CONSTANTS.SAVE_REGISTER_USER_DATA_SUCCESS:
            return {
                ...state,
                saveRegisterUserInfoSuccess: action.response,
            };

        case CONSTANTS.SAVE_REGISTER_USER_DATA_FAILURE:
            return {
                ...state,
                saveRegisterUserInfoFailure: action.error,
            };   
        default:
            return state
    }
}     