import {fork, all} from "redux-saga/effects";
import RegistrationPageSaga from '../containers/UserRegistration/saga'
import LoginSaga from '../containers/Login/saga'
import AllUsersSaga from '../containers/RegistredUsers/saga'
import  GetUserRegistrationInfoSaga from '../containers/AllRegistration/saga'
// import deviceManagementSaga from "./DeviceManagement/Sag
import CreateSaga from "../containers/Create/saga"
import SponsorSaga from '../containers/SponsorForm/saga'
import AllSponsorSaga from "../containers/AllSponsor/saga";
import Countersaga from '../containers/Dashboard/saga';
import abstractUploadFile from '../containers/AbstractUpload/saga'

export function* rootSaga () {
    yield all([
        fork(RegistrationPageSaga),
        fork(LoginSaga),
        fork(AllUsersSaga),
        fork(GetUserRegistrationInfoSaga),
        fork(CreateSaga),
        fork(SponsorSaga),
        fork(AllSponsorSaga),
        fork(Countersaga),
        fork(abstractUploadFile)
    ]);
}