import * as CONSTANTS from './constant'

export function getUsers() {
    console.log('inside get all users actions')
    return {
      type: CONSTANTS.GET_ALL_USERS,
    };
  }