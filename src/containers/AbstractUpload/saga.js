import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from './constant'
import axios from "axios";
import { GetHeaders, baseUrl } from "../../utils";

export function* uploadAbstractFile(action) {
  let url =`${baseUrl}uploaddocument`;
  try {
    const response = yield call(axios.post, url, action.payload, GetHeaders());
    yield put({
      type: CONSTANTS.UPLOAD_ABSTRACT_FILE_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.UPLOAD_ABSTRACT_FILE_FAILURE,
      error: error.response.data,
    });
  }
}

export function* saveAbstractData(action) {
     let url = `${baseUrl}saveabstractpaper`;
    // let url = "http://localhost:4801/api/saveabstractpaper";
    try {
      const response = yield call(axios.post, url, action.payload, GetHeaders());
      yield put({
        type: CONSTANTS.ABSTRACT_DATA_SUCCESS,
        response: response.data,
      });
    } catch (error) {
      yield put({
        type: CONSTANTS.ABSTRACT_DATA_FAILURE,
        error: error.response.data,
      });
    }
  }

export default function* abstractUploadFile() {
  yield takeLatest(
    CONSTANTS.UPLOAD_ABSTRACT_FILE,
    uploadAbstractFile
  );
  yield takeLatest(
    CONSTANTS.ABSTRACT_DATA,
    saveAbstractData
  );
}
