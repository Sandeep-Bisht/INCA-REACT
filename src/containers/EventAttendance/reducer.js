import * as CONSTANT from "./constant";
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANT.GET_USER_DATA_FOR_ATTENDANCE_SUCCESS:
      return {
        ...state,
        userAttendanceSuccess: action.response,  
             
      };
      

    case CONSTANT.GET_USER_DATA_FOR_ATTENDANCE_FAILURE:
      return {
        ...state,
        userAttendanceFailure: action.error,
      };

    case CONSTANT.MARK_USER_ATTENDANCE_SUCCESS:
      return {
        ...state,
        markAttendanceSuccess : action.response,
      }
      
      case CONSTANT.GET_USER_DATA_FOR_ATTENDANCE_FAILURE:
      return {
        ...state,
        markAttendanceFailure : action.response,
      }
     
    default:
      return state;
  }
};