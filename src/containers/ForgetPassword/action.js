import * as CONSTANTS from './constant';

export function ForgotPassword(userEmail){   
    return {
        type : CONSTANTS.FORGOT_PASSWORD,
        userEmail,        
    }
}