import * as CONSTANTS from "./constant";

export function approveFileSubmission(payload) {
  return {
    type: CONSTANTS.GET_USER_ABSTRACT_PAPER,
    payload,
  };
}

export function resetToInitialState() {
  return {
    type : CONSTANTS.RESET_ABSTRACT_RESPONSE_TO_INITIAL_STATE
  }
}