import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { GetHeaders, baseUrl } from "../../utils";

export function* getFullPaperList(action) {
  let url = `${baseUrl}getFullPaperList`;
  try {
    const response = yield call(axios.get, url, GetHeaders());
    yield put({
      type: CONSTANTS.GET_FULL_PAPER_LIST_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_FULL_PAPER_LIST_FAILURE,
      error: error.response.data,
    });
  }
}

export function* getUserFullPaperList(action) {

  let url = `${baseUrl}getFullPaperList/${action.id}`;
  try {
    const response = yield call(axios.get, url, GetHeaders());
    yield put({
      type: CONSTANTS.GET_USER_FULL_PAPER_LIST_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_USER_FULL_PAPER_LIST_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* GetFullPaperListSaga() {
  yield takeLatest(CONSTANTS.GET_FULL_PAPER_LIST, getFullPaperList);
  yield takeLatest(CONSTANTS.GET_USER_FULL_PAPER_LIST, getUserFullPaperList);
}
