 import { combineReducers } from "redux";
 import RegisterReducer from "../containers/UserRegistration/reducer"
 import LoginReducer from '../containers/Login/reducer'
 import AllUsersReducer from  '../containers/RegistredUsers/reducer'
 import RegisteredUserInfoReducer from '../containers/Create/reducer'

const rootReducer = combineReducers({
    RegisterReducer,
    LoginReducer,
    AllUsersReducer,
    RegisteredUserInfoReducer
});
export default rootReducer;