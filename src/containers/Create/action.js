import * as CONSTANTS from './constant'


export const saveRegisterdUserData = (payload) => {
    return ({
        type: CONSTANTS.SAVE_REGISTER_USER_DATA,
        payload
    })
}

export function resetToInitialState() {
  return {
    type: CONSTANTS.RESET_TO_INITIAL_STATE,
  };
}

