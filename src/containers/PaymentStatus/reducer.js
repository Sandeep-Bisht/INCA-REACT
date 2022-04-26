import * as CONSTANTS from './constant'
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANTS.GET_PAYMENT_STATUS_SUCCESS :
            return {
                ...state,
                getPaymentStatusSuccess: action.response,
              };
        
            case CONSTANTS.GET_PAYMENT_STATUS_FAILURE:
              return {
                ...state,
                getPaymentStatusFailure: action.error,
              };
        
            default:
              return state;
          }
        };