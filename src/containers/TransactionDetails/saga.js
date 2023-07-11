import { call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from "./constant";
import axios from "axios";
import { GetHeaders, baseUrl } from "../../utils";

export function* transactionDetailsHandler(action) {   
    let url=`${baseUrl}savepaymentdetails`;
    try {    
      const response = yield call(axios.post, url, action.payload, GetHeaders());
      yield put({
        type: CONSTANTS.USER_TRANSACTION_DETAILS_SUCCESS,
        response: response.data,
        
      });
    } catch (error) {
      yield put({
        type: CONSTANTS.USER_TRANSACTION_DETAILS_FAILURE,
        error: error.response.data,
      });
    }
  }

export default function* TransactionDetailsSaga() {
    yield takeLatest(CONSTANTS.USER_TRANSACTION_DETAILS, transactionDetailsHandler);
  }