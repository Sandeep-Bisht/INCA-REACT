import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { GetHeaders } from "../../utils";


export function* getSponsorForm(action) {
    
  let url = "http://144.91.110.221:4801/api/sponsor";
  // let url = "http://localhost:4801/api/sponsor";
  try {
    const response = yield call(axios.get, url, GetHeaders());
    yield put({
      type: CONSTANTS.GET_SPONSOR_USER_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_SPONSOR_USER_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* AllSponsorSaga() {
  yield takeLatest(CONSTANTS.GET_SPONSOR_USER, getSponsorForm);
}