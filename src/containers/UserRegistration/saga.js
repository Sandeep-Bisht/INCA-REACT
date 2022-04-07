import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANT from "./constant";
import axios from "axios";

export function* appRegistrationHandler(action) {
  let url = "http://144.91.110.221:4801/api/signup";
  //let url = "http://localhost:4801/api/signup";
  try {
    const response = yield call(axios.post, url, action.payload);
    yield put({
      type: CONSTANT.APP_REGISTRATION_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANT.APP_REGISTRATION_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* RegistrationPageSaga() {
  yield takeLatest(CONSTANT.APP_REGISTRATION, appRegistrationHandler);
}
