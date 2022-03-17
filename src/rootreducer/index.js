 import { combineReducers } from "redux";
 import RegisterReducer from "../conatiners/UserRegistration/reducer"
 import LoginReducer from '../conatiners/Login/reducer'

const rootReducer = combineReducers({
    RegisterReducer,
    LoginReducer
});
export default rootReducer;