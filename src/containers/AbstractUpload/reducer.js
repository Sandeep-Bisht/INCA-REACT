import * as CONSTANTS from "./constant";
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.UPLOAD_ABSTRACT_FILE_SUCCESS:
      return {
        ...state,
        abstractFileUploadSuccess: action.response,
      };

    case CONSTANTS.UPLOAD_ABSTRACT_FILE_FAILURE:
      return {
        ...state,
        abstractFileUploadFailure: action.error,
      };

    case CONSTANTS.ABSTRACT_DATA_SUCCESS:
      return {
        ...state,
        abstractDataSaveSuccess: action.response,
      };

    case CONSTANTS.ABSTRACT_DATA_FAILURE:
      return {
        ...state,
        abstractDataSaveFailure: action.error,
      };

      case CONSTANTS.UPLOAD_ONLY_ABSTRACT_FILE_SUCCESS:
        return {
          ...state,
          onlyAbstractFileSaveSuccess: action.response,
        };
  
      case CONSTANTS.UPLOAD_ONLY_ABSTRACT_FILE_FAILURE:
        return {
          ...state,
          onlyAbstractFileSaveFailure: action.error,
        };

      case CONSTANTS.RESET_ABSTRACT_DATA_SUCCESS_TO_INITIAL_STATE:
        return {
          ...state,
          abstractDataSaveSuccess: "",
        };

        case CONSTANTS.RESET_ONLY_ABSTRACT_DATA_SUCCESS_TO_INITIAL_STATE:
        return {
          ...state,
          onlyAbstractFileSaveSuccess: "",
        };

    default:
      return state;
  }
};
