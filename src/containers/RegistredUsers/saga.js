import { call, put, takeLatest } from 'redux-saga/effects';
import * as CONSTANTS from "./constant"
import axios from 'axios';


export function* getAllUsers(action) {
    let url = "http://localhost:4801/api/users";
    try {
      const response = yield call(axios.get, url);
      yield put({ type: CONSTANTS.GET_ALL_USERS_SUCCESS, response: response.data});
    }
    catch (error) {
      yield put({ type: CONSTANTS.GET_ALL_USERS_FAILURE, error: error.response.data });
    }
  }

export default function* AllUsersSaga() {
    yield takeLatest(CONSTANTS.GET_ALL_USERS, getAllUsers);
  }