import * as CONSTANTS from './constant'
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANTS.GET_SPONSOR_USER_SUCCESS :
            return {
                ...state,
                getSponsorUserSuccess: action.response,
              };
        
            case CONSTANTS.GET_SPONSOR_USER_FAILURE:
              return {
                ...state,
                getSponsorUserFailure: action.error,
              };
        
            default:
              return state;
          }
        };
