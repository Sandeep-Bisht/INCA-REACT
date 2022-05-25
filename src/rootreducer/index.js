 import { combineReducers } from "redux";
 import RegisterReducer from "../containers/UserRegistration/reducer"
 import LoginReducer from '../containers/Login/reducer'
 import AllUsersReducer from  '../containers/RegistredUsers/reducer'
 import GetUserRegistrationInfoReducer from '../containers/AllRegistration/reducer'
 import RegisteredUserInfoReducer from '../containers/Create/reducer'
 import SponsorUserReducer from '../containers/SponsorForm/reducer'
 import AllSponsorReducer from '../containers/AllSponsor/reducer'
 import DashboardCounterReducer from '../containers/Dashboard/reducer'
 import AbstractUploadReducer from '../containers/AbstractUpload/reducer'
 import AbstractListReducer from '../containers/AbstractDocumentList/reducer'
 import AttendenceStatusReducer from "../containers/AttendanceStatus/reducer";
 import UserAttendanceReducer from "../containers/EventAttendance/reducer";
 import UserAbstractListReducer from "../containers/UserAbstractList/reducer";

const rootReducer = combineReducers({
    RegisterReducer,
    LoginReducer,
    AllUsersReducer,
    GetUserRegistrationInfoReducer,
    RegisteredUserInfoReducer,
    SponsorUserReducer,
    AllSponsorReducer,
    DashboardCounterReducer,
    AbstractUploadReducer,
    AbstractListReducer,
    AttendenceStatusReducer,
    UserAttendanceReducer,
    UserAbstractListReducer
});
export default rootReducer;