import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { GetHeaders } from "../../utils";

export function* getUserRegistrationInfo(action) {
  // let url = "http://144.91.110.221:4801/api/getuserregistrationinfo";
  let url = "http://localhost:4801/api/getuserregistrationinfo";
  try {
    const response = yield call(axios.get, url, GetHeaders());

    yield put({
      type: CONSTANTS.GET_USER_REGISTRATION_INFO_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_USER_REGISTRATION_INFO_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* GetUserRegistrationInfoSaga() {
  yield takeLatest(
    CONSTANTS.GET_USER_REGISTRATION_INFO,
    getUserRegistrationInfo
  );
}
