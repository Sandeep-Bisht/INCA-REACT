import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from './constant'
import axios from "axios";
import { GetHeaders, baseUrl } from "../../utils";

export function* getAllAbstractData(action) {

     let url = `${baseUrl}getabstractpaper`;
    try {
      const response = yield call(axios.get, url, GetHeaders());
      yield put({
        type: CONSTANTS.GET_ABSTRACT_DATA_SUCCESS,
        response: response.data,
      });
    } catch (error) {
      yield put({
        type: CONSTANTS.GET_ABSTRACT_DATA_FAILURE,
        error: error.response.data,
      });
    }
  }

export default function* getAbstractData() {
  yield takeLatest(
    CONSTANTS.GET_ABSTRACT_DATA,
    getAllAbstractData
  );
 
}
