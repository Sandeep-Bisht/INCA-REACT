import * as CONSTANTS from './constant'
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANTS.USER_TRANSACTION_DETAILS_SUCCESS :
            return {
                ...state,
                transactionDetailSuccess: action.response,
              };
        
            case CONSTANTS.USER_TRANSACTION_DETAILS_FAILURE:
              return {
                ...state,
                transactionDetailFailure: action.error,
              };
        
            default:
              return state;
          }
        };