import {fork, all} from "redux-saga/effects";
import RegistrationPageSaga from '../containers/UserRegistration/saga'
import LoginSaga from '../containers/Login/saga'
import AllUsersSaga from '../containers/RegistredUsers/saga'
import  GetUserRegistrationInfoSaga from '../containers/Test/saga'
// import deviceManagementSaga from "./DeviceManagement/Saga"
// import ClusterSaga  from "./Cluster/ClusterSaga";
// import IAM_Saga from "./IAM/IAM_Saga";

// import EventListPageSaga from "../Components/EventsListingPage/saga"
// import RulesSaga from '../Components/Rules/saga'
export function* rootSaga () {
    yield all([
        fork(RegistrationPageSaga),
        fork(LoginSaga),
        fork(AllUsersSaga),
        fork(GetUserRegistrationInfoSaga)
    ]);
}