 import { combineReducers } from "redux";
 import RegisterReducer from "../containers/UserRegistration/reducer"
 import LoginReducer from '../containers/Login/reducer'
 import AllUsersReducer from  '../containers/RegistredUsers/reducer'

const rootReducer = combineReducers({
    RegisterReducer,
    LoginReducer,
    AllUsersReducer
});
export default rootReducer;