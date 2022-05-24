import * as CONSTANTS from './constant';
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CONSTANTS.USER_ABSTRACT_LIST_SUCCESS : 
        return {
            ...state,
            getUserAbstractListSuccess : action.response,
        }
        case CONSTANTS.USER_ABSTRACT_LIST_FAILURE :
            return {
                ...state,
                getUserAbstractListFailure : action.error,
            }

            default : return state
    }
}



