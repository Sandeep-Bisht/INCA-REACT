import * as CONSTANTS from "./constant";

export const saveRegisterdUserData = (payload) => {
  return {
    type: CONSTANTS.SAVE_REGISTER_USER_DATA,
    payload,
  };
};

export function resetToInitialState() {
  return {
    type: CONSTANTS.RESET_TO_INITIAL_STATE,
  };
}

export const getLoggedInUser = (id) => {
   return {
    type: CONSTANTS.GET_LOGGEDID_USER,
    id,
  }
}

export const updateRegistredUser = (payload,id) => {
  return {
    type: CONSTANTS.UPDATE_REGISTERED_USER,
    payload,
    id
  }

}