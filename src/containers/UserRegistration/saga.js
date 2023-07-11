import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANT from "./constant";
import axios from "axios";
import { baseUrl } from "../../utils";

export function* appRegistrationHandler(action) {

  let url = `${baseUrl}signup`;
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
