import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { GetHeaders, baseUrl } from "../../utils";

export function* uploadFullPaperFile(action) {  
  let url = `${baseUrl}uploadfullPaperdocument`;
  try {
    const response = yield call(axios.post, url, action.payload, GetHeaders());
    yield put({
      type: CONSTANTS.UPLOAD_FULL_PAPER_FILE_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.UPLOAD_FULL_PAPER_FILE_FAILURE,
      error: error.response.data,
    });
  }
}

export function* saveFullPaperData(action) {  
  //let url = "http://localhost:4801/api/fullPaperSubmition";
  let url = `${baseUrl}fullPaperSubmition`;
  try {
    const response = yield call(axios.post, url, action.fullPaperData, GetHeaders());
    yield put({
      type: CONSTANTS.FULL_PAPER_DATA_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.FULL_PAPER_DATA_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* fullPaperUploadFile() {
  yield takeLatest(CONSTANTS.UPLOAD_FULL_PAPER_FILE, uploadFullPaperFile);
  yield takeLatest(CONSTANTS.FULL_PAPER_DATA, saveFullPaperData);
}
