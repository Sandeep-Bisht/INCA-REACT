import * as CONSTANTS from './constant'

export function appLogin(payload) {
    return {
      type: CONSTANTS.APP_LOGIN,
      payload
    };
  }