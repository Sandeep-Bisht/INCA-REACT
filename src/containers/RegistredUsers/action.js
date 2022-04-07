import * as CONSTANTS from './constant'

export function getUsers() {
    return {
      type: CONSTANTS.GET_ALL_USERS,
    };
  }