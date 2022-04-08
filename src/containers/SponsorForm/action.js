import * as CONSTANTS from "./constant";

export function createSponsorUser(payload) {
  return {
    type: CONSTANTS.SPONSOR_USER,
    payload,
  };
}
