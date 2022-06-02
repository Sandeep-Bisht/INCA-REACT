import * as CONSTANT from "./constant";
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANT.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        userForgotPasswordSuccess: action.response,
      };

    case CONSTANT.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        userForgotPasswordFailure: action.error,
      };
    
     
    default:
      return state;
  }
};
