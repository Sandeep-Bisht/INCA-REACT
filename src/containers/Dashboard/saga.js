import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { GetHeaders } from "../../utils";

export function* getCounters(action) {
  let url = "http://144.91.110.221:4801/api/counters";
  try {
    const response = yield call(axios.get, url, GetHeaders());
    yield put({ type: CONSTANTS.GET_COUNTERS_SUCCESS, 
    response: response.data });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_COUNTERS_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* Countersaga() {
  yield takeLatest(CONSTANTS.GET_COUNTERS, getCounters);
}