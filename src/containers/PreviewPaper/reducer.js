import * as CONSTANTS from "./constant";
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.GET_USER_ABSTRACT_PAPER_SUCCESS:
      return {
        ...state,
        userAbstractPaperSuccess: action.response,
      };

    case CONSTANTS.GET_USER_ABSTRACT_PAPER_FAILURE:
      return {
        ...state,
        userAbstractPaperFailure: action.error,
      };

    default:
      return state;
  }
};
