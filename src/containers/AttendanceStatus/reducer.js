import * as CONSTANTS from './constant'
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANTS.GET_ATTENDANCE_STATUS_SUCCESS :
            return {
                ...state,
                getAttendanceStatusSuccess: action.response,
              };
        
            case CONSTANTS.GET_ATTENDANCE_STATUS_FAILURE:
              return {
                ...state,
                getAttendanceStatusFailure: action.error,
              };
        
            default:
              return state;
          }
        };