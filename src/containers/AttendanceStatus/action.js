import * as CONSTANTS from "./constant";
export function getAttendanceStatus() {
  return {
    type: CONSTANTS.GET_ATTENDANCE_STATUS,

  };
}


export function markUserAttendance(id) {
  return {
    type: CONSTANTS.MARK_ATTENDANCE,
    id,
  };
}
