import * as CONSTANTS from './constant'
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANTS.GET_USER_TRANSACTION_LIST_SUCCESS :
            return {
                ...state,
                getUserTransactionListSuccess: action.response,
              };
        
            case CONSTANTS.GET_USER_TRANSACTION_LIST_FAILURE:
              return {
                ...state,
                getUserTransactionListFailure: action.error,
              };
        
            default:
              return state;
          }
        };