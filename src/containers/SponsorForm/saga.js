import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";


export function* sponsorForm(action) {
  let url = "http://144.91.110.221:4801/api/savesponsor";
  // let url = "http://localhost:4801/api/savesponsor";
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