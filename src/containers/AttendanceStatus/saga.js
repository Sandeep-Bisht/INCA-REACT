import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { GetHeaders } from "../../utils";
import { markUserAttendance } from "./action";

export function* getPaymentStatus(action) {
  let url = "http://144.91.110.221:4801/api/getregistreduserinfo";
  try {
    const response = yield call(axios.get, url, GetHeaders());

    yield put({
      type: CONSTANTS.GET_PAYMENT_STATUS_SUCCESS,
      response: response.data,
      
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_PAYMENT_STATUS_FAILURE,
      error: error.response.data,
    });
  }
}

export function* userAttendance(action) {
  let url = `http://localhost:4801/api/attendance/${action.id}`;
  try {
    const response = yield call(axios.post, url, {}, GetHeaders());
    yield put({
      type: CONSTANTS.MARK_ATTENDANCE_SUCCESS,
      response: response.data,
      
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.MARK_ATTENDANCE_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* PaymentStatusSaga() {
    yield takeLatest(CONSTANTS.GET_PAYMENT_STATUS, getPaymentStatus);
    yield takeLatest(CONSTANTS.MARK_ATTENDANCE, userAttendance);
  }