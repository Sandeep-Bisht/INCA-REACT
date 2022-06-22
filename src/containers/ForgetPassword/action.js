import * as CONSTANTS from './constant';

export function ForgotPassword(userEmail){   
    return {
        type : CONSTANTS.FORGOT_PASSWORD,
        userEmail,        
    }
}
export function resetToInitialState() {
    return {
      type: CONSTANTS.RESET_TO_INITIAL_STATE,
    };
  }