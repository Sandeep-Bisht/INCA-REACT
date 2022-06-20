import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { GetHeaders } from "../../utils";

export function* saveRegisterUserData(action) {
  let url = "http://144.91.110.221:4801/api/saveregistreduser";
  //let url = "http://localhost:4801/api/saveregistreduser";
   
  
  try {    
    const response = yield call(axios.post, url, action.payload, GetHeaders());
    yield put({
      type: CONSTANTS.SAVE_REGISTER_USER_DATA_SUCCESS,
      response: response.data,
      
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.SAVE_REGISTER_USER_DATA_FAILURE,
      error: error.response.data,
    });
  }
}

export function* updateRegisteredUser(action) {
  let url = `http://144.91.110.221:4801/api/updateregisteruserinfo/${action.id}`;
  // let url = "http://localhost:4801/api/saveregistreduser";
  try {
    const response = yield call(axios.put, url, action.payload, GetHeaders());
    yield put({
      type: CONSTANTS.UPDATE_REGISTERED_USER_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.UPDATE_REGISTERED_USER_FAILURE,
      error: error.response.data,
    });
  }
}

export function* getLoggedInUser(action) {
  
  let url = `http://144.91.110.221:4801/api/getsaveregistreduserinfo/${action.id}`;
  try {
    const response = yield call(axios.get, url, GetHeaders());
    yield put({
      type: CONSTANTS.GET_LOGGEDID_USER_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_LOGGEDID_USER_FAILURE,
      error: error.response.data,
    });
  }
}

export default function* CreateSaga() {
  yield takeLatest(CONSTANTS.SAVE_REGISTER_USER_DATA, saveRegisterUserData);
  yield takeLatest(CONSTANTS.GET_LOGGEDID_USER, getLoggedInUser);
  yield takeLatest(CONSTANTS.UPDATE_REGISTERED_USER, updateRegisteredUser);
}
