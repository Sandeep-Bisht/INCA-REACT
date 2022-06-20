import * as CONSTANTS from "./constant";

export function approveFileSubmission(payload) {
  return {
    type: CONSTANTS.GET_USER_ABSTRACT_PAPER,
    payload,
  };
}