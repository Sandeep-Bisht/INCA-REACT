import {fork, all} from "redux-saga/effects";
import RegistrationPageSaga from '../conatiners/UserRegistration/saga'
import LoginSaga from '../conatiners/Login/saga'
// import deviceManagementSaga from "./DeviceManagement/Saga"
// import ClusterSaga  from "./Cluster/ClusterSaga";
// import IAM_Saga from "./IAM/IAM_Saga";

// import EventListPageSaga from "../Components/EventsListingPage/saga"
// import RulesSaga from '../Components/Rules/saga'
export function* rootSaga () {
    yield all([
        fork(RegistrationPageSaga),
        fork(LoginSaga),
        // fork(ClusterSaga),
        // fork(IAM_Saga),
        // fork(EventListPageSaga),
        // fork(RulesSaga)
    ]);
}