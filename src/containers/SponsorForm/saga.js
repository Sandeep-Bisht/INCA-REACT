import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { baseUrl } from "../../utils";


export function* sponsorForm(action) {
  let url = `${baseUrl}savesponsor`;
  try {
    const response = yield call(axios.post, url, action.payload);
    yield put({
      type: CONSTANTS.SPONSOR_USER_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.SPONSOR_USER_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* SponsorSaga() {
  yield takeLatest(CONSTANTS.SPONSOR_USER, sponsorForm);
}