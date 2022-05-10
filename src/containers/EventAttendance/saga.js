import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANT from "./constant";
import axios from "axios";
import { GetHeaders } from "../../utils";


export function* getUserInformation(action) {
  let url =  `http://localhost:4801/api/getuserinfoforattendance/${action.id}`;
  try {
    const response = yield call(axios.get, url, GetHeaders());
    yield put({
      type: CONSTANT.GET_USER_DATA_FOR_ATTENDANCE_SUCCESS,
      response: response.data.data[0],
    });
  } catch (error) {
    yield put({
      type: CONSTANT.GET_USER_DATA_FOR_ATTENDANCE_FAILURE,
      error: error.response.data,
    });
  }
}

export function* markAttendance(action) {
  let url = "http://144.91.110.221:4801/api/markattendances";

  try {
    const response = yield call(axios.post, url, action.payload, GetHeaders());
    yield put({
      type: CONSTANT.MARK_USER_ATTENDANCE_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANT.GET_USER_DATA_FOR_ATTENDANCE_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* UserAttendanceSaga() {
  yield takeLatest(CONSTANT.GET_USER_DATA_FOR_ATTENDANCE, getUserInformation);  
  yield takeLatest(CONSTANT.MARK_USER_ATTENDANCE, markAttendance);
}
