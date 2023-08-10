import * as CONSTANTS from "./constant";
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.UPLOAD_FULL_PAPER_FILE_SUCCESS :
      return {
        ...state,
        fullPaperFileUploadSuccess: action.response,
      };

    case CONSTANTS.UPLOAD_FULL_PAPER_FILE_FAILURE:
      return {
        ...state,
        fullPaperFileUploadFailure: action.error,
      };

    case CONSTANTS.FULL_PAPER_DATA_SUCCESS :
      return {
        ...state,
        fullPaperDataSaveSuccess: action.response,
      };

    case CONSTANTS.FULL_PAPER_DATA_FAILURE:
      return {
        ...state,
        fullPaperDataSaveFailure: action.error,
      };

      case CONSTANTS.RESET_FULL_PAPER_DATA_SUCCESS_TO_INITIAL_STATE:
        return {
          ...state,
          fullPaperDataSaveSuccess: "",
        };

    default:
      return state;
  }
};
