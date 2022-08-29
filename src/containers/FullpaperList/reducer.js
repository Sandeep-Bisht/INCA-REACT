import * as CONSTANTS from "./constant";
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.GET_FULL_PAPER_LIST_SUCCESS:
      return {
        ...state,
        getFullPaperListSuccess: action.response,
      };

    case CONSTANTS.GET_FULL_PAPER_LIST_FAILURE:
      return {
        ...state,
        getFullPaperListFailure: action.error,
      };

    case CONSTANTS.GET_USER_FULL_PAPER_LIST_SUCCESS :
      return {
        ...state,
        getUserFullPaperListSuccess: action.response,
      };

    case CONSTANTS.GET_USER_FULL_PAPER_LIST_FAILURE :
      return {
        ...state,
        getUserFullPaperListFailure: action.error,
      };
    default:
      return state;
  }
};
