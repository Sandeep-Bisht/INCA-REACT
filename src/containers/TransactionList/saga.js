import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { GetHeaders } from "../../utils";

export function* getUserTransactionList(action) { 
    let url="http://144.91.110.221:4801/api/transaction";
    //let url="http://localhost:4801/api/transaction";
    try {    
      const response = yield call(axios.get, url, GetHeaders());
      yield put({
        type: CONSTANTS.GET_USER_TRANSACTION_LIST_SUCCESS,
        response: response.data,
        
      });
    } catch (error) {
      yield put({
        type: CONSTANTS.GET_USER_TRANSACTION_LIST_FAILURE,
        error: error.response.data,
      });
    }
  }

  export default function* GetTransactionListSaga() {
    yield takeLatest(CONSTANTS.GET_USER_TRANSACTION_LIST, getUserTransactionList);
  }