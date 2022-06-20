import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";

export function* userForgotPassword(action) {
 // let url = "http://144.91.110.221:4801/api/login";
 let url = "http://144.91.110.221:4801/api/forgot";
  try {
    const response = yield call(axios.put, url, {userEmail:action.userEmail});
    yield put({ type: CONSTANTS.FORGOT_PASSWORD_SUCCESS, 
    response: response.data });
  } catch (error) {
    yield put({
      type: CONSTANTS.FORGOT_PASSWORD_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* UserForgotPasswordSaga() {
  yield takeLatest(CONSTANTS.FORGOT_PASSWORD, userForgotPassword);
}
