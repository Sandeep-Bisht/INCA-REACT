import * as CONSTANTS from './constant'
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANTS.SPONSOR_USER_SUCCESS :
            return {
                ...state,
                sponsorUserSuccess: action.response,
              };
        
            case CONSTANTS.SPONSOR_USER_FAILURE:
              return {
                ...state,
                sponsorUserFailure: action.error,
              };
        
            default:
              return state;
          }
        };


