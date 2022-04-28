import * as CONSTANTS from "./constant";
export function getPaymentStatus() {
  return {
    type: CONSTANTS.GET_PAYMENT_STATUS,

  };
}


export function markUserAttendance(id) {
  return {
    type: CONSTANTS.MARK_ATTENDANCE,
    id,
  };
}
