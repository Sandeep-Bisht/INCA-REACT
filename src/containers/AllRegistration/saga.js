import { call, put, takeLatest } from 'redux-saga/effects';
import * as CONSTANTS from "./constant"
import axios from 'axios';


export function* getUserRegistrationInfo(action) {
    let url = "http://144.91.110.221:4801/api/getUserRegistrationInfo";
    try {
      const response = yield call(axios.get, url);
      // console.log(response,"response")
      yield put({ type: CONSTANTS.GET_USER_REGISTRATION_INFO_SUCCESS, response: response.data});
    }
    catch (error) {
      console.log(error,"error")
      yield put({ type: CONSTANTS.GET_USER_REGISTRATION_INFO_FAILURE, error: error.response.data });
      
    }
  }

export default function* GetUserRegistrationInfoSaga() {
    yield takeLatest(CONSTANTS.GET_USER_REGISTRATION_INFO,getUserRegistrationInfo);
  }