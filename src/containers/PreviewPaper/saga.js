import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";

export function* approveFileSubmission(action) {
    let url = "http://144.91.110.221:4801/api/approvefilesubmission";
//let url = "http://localhost:4801/api/approvefilesubmission";
  try {
    const response = yield call(axios.put, url, action.payload);
    yield put({
      type: CONSTANTS.GET_USER_ABSTRACT_PAPER_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_USER_ABSTRACT_PAPER_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* ApproveFileSubmissionSaga() {
  yield takeLatest(CONSTANTS.GET_USER_ABSTRACT_PAPER, approveFileSubmission);
}