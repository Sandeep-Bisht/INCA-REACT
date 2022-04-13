import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";

export function* appLoginHandler(action) {
  let url = "http://144.91.110.221:4801/api/login";
  //let url = "http://localhost:4801/api/login";
  try {
    const response = yield call(axios.post, url, action.payload);
    yield put({ type: CONSTANTS.APP_LOGIN_SUCCESS, 
    response: response.data });
  } catch (error) {
    yield put({
      type: CONSTANTS.APP_LOGIN_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* LoginSaga() {
  yield takeLatest(CONSTANTS.APP_LOGIN, appLoginHandler);
}
