 import { combineReducers } from "redux";
 import RegisterReducer from "../containers/UserRegistration/reducer"
 import LoginReducer from '../containers/Login/reducer'
 import AllUsersReducer from  '../containers/RegistredUsers/reducer'
 import GetUserRegistrationInfoReducer from '../containers/AllRegistration/reducer'
 import RegisteredUserInfoReducer from '../containers/Create/reducer'
 import SponsorUserReducer from '../containers/SponsorForm/reducer'
 import AllSponsorReducer from '../containers/AllSponsor/reducer'

const rootReducer = combineReducers({
    RegisterReducer,
    LoginReducer,
    AllUsersReducer,
    GetUserRegistrationInfoReducer,
    RegisteredUserInfoReducer,
    SponsorUserReducer,
    AllSponsorReducer


});
export default rootReducer;