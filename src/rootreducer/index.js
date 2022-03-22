 import { combineReducers } from "redux";
 import RegisterReducer from "../containers/UserRegistration/reducer"
 import LoginReducer from '../containers/Login/reducer'

const rootReducer = combineReducers({
    RegisterReducer,
    LoginReducer
});
export default rootReducer;