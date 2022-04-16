import * as CONSTANTS from "./constant";
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CONSTANTS.GET_LOGGEDID_USER_SUCCESS :
      return {
        ...state,
        loggedInUserSuccess: action.response,
      }

      case CONSTANTS.GET_LOGGEDID_USER_FAILURE :
        return {
          ...state,
          loggedInUserFailure: action.response, 
        }

      case CONSTANTS.UPDATE_REGISTERED_USER_SUCCESS :
        return {
          ...state,
          updateUserInfoSuccess : action.response,
        }

        case CONSTANTS.UPDATE_REGISTERED_USER_FAILURE :
        return {
          ...state,
          updateUserInfoFailure : action.response,
        }


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
    case CONSTANTS.RESET_TO_INITIAL_STATE:
      return {
        saveRegisterUserInfoSuccess: "",
      };
      break;
    default:
      return state;
  }
};
