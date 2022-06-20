import * as CONSTANTS from "./constant";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { GetHeaders } from "../../utils";

export function* getUserAbstractList(action) {
 
  let url = `http://144.91.110.221:4801/api/getabstractpaper/${action.id}`;
  //let url = `http://localhost:4801/api/getabstractpaper/${action.id}`;

  try {
    const response = yield call(axios.get, url, GetHeaders());
    yield put({
      type: CONSTANTS.USER_ABSTRACT_LIST_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.USER_ABSTRACT_LIST_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* UserAbstractListByIdSaga() {
  yield takeLatest(CONSTANTS.USER_ABSTRACT_LIST, getUserAbstractList);
}
