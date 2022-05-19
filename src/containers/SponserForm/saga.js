import * as CONSTANTS from './constant'
import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects';


export function* sponserFormCopy(payload){
    
    let url = "http://localhost:4801/api/savesponsor";
    try{
        const response = yield call(axios.post, url, payload);
        yield put({     
            type: CONSTANTS.SEND_SPONSOR_USER_SUCCESS,
            response:response.data,
        });
    }catch(error){
        yield put({     
            type: CONSTANTS.SEND_SPONSOR_USER_FAILURE,
            error: error.response.data,
        });
    }

}

export default function* SponserSaga(){
    yield takeLatest(CONSTANTS.SEND_SPONSOR_USER,sponserFormCopy)
}








