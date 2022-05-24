import * as CONSTANTS from "./constant";

export function approveFileSubmission(payload) {
    console.log("hii from action", payload)
  return {
    type: CONSTANTS.GET_USER_ABSTRACT_PAPER,
    payload,
  };
}