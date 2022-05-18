import * as CONSTANTS from "./constant";
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.GET_ABSTRACT_DATA_SUCCESS:
      return {
        ...state,
        getAbstractDocSuccess: action.response,
      };

    case CONSTANTS.GET_ABSTRACT_DATA_FAILURE:
      return {
        ...state,
        getAbstractDocFailure: action.error,
      };
    default:
      return state;
  }
};
