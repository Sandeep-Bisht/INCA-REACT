import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { baseUrl } from "../../utils/index"

export function* appLoginHandler(action) {
 let url = `${baseUrl}login`;
  try {
    const response = yield call(axios.post, url, action.payload);
    yield put({ type: CONSTANTS.APP_LOGIN_SUCCESS, 
    response: response.data });
  } catch (error) {
    yield put({
      type: CONSTANTS.APP_LOGIN_FAILURE,
      error: error.response?.data,
    });
  }
}

export default function* LoginSaga() {
  yield takeLatest(CONSTANTS.APP_LOGIN, appLoginHandler);
}
