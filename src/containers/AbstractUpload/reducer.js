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
    default:
      return state;
  }
};
