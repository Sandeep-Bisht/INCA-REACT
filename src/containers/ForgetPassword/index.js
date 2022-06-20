import React, { useEffect, useState } from "react";
import { useDispatch,  useSelector } from "react-redux";
import * as ACTIONS from "./action";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import "../../css/register.css";

const ForgotPassword = () => {
  const emailRegExp = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  let [userEmail, setUserEmail] = useState('');
  let [userEmailValidationError, setUserEmailValidationError] = useState('')
  let [isDisabled, setIsDisabled] = useState(false)
  
  let [forgotPassowrdMessage, setForgotPassowrdMessage] = useState('')

  const state = useSelector((state) => state.UserForgotPasswordReducer);

  useEffect(() => {
      if(state.userForgotPasswordSuccess){
        setUserEmail("")
        setIsDisabled(false)
        setForgotPassowrdMessage(state.userForgotPasswordSuccess.message)
      }
  }, [state.userForgotPasswordSuccess])

  useEffect(() => {
    if(state.userForgotPasswordFailure){
      setIsDisabled(false)
      setForgotPassowrdMessage(state.userForgotPasswordFailure.message)
    }
}, [state.userForgotPasswordFailure])


  let dispatch = useDispatch()

  let emailOnChangeHandler = (e) => {
      if(e.target.id == "userEmail"){
        if(emptyFormAndEmailValidationFunc(e.target.value)){
          setUserEmailValidationError('')
          setUserEmail(e.target.value)
        }
      }
  }

  let emptyFormAndEmailValidationFunc = (userEmail) => {
      if(userEmail && !emailRegExp.test(userEmail)){
        setUserEmailValidationError("Invalid Email Format")
        return false
      }
      else if(userEmail == "") {
        setUserEmailValidationError("Email is required")
        return false
      }
      return true
  }

  let forgotPasswordHandler = (e) => {
    e.preventDefault()
    if(emptyFormAndEmailValidationFunc(userEmail)){
      setIsDisabled(true)
      dispatch(ACTIONS.ForgotPassword(userEmail))
    }
  }
  return (
    <>
      <Header></Header>
      <section className="register-form">
        <form className="login-form" onSubmit={(e) => forgotPasswordHandler(e)}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto form-wrapper">
                <div className="row actual-form-1">
                  <div className="col-md-12">
                    <div className="rgstr d-flex justify-content-center position-relative align-items-center mb-4">
                      
                      <Link
                        to="/login"
                        className="ms-2 forget-back text-decoration-underline position-absolute start-0"
                      >
                       <i className="fa-solid fa-arrow-left "></i>
                      </Link>
                      <p className="common-form-heading mb-0">
                        Forgot Password
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          onChange={(e) => emailOnChangeHandler(e)}
                          type="email"
                          id="userEmail"
                          className="form-control mb-3"
                        />
                        <label>
                          <i className="fa-solid fa-envelope me-2"></i>E-mail
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="btn-wrapper">
                      <button type="submit" className=" form-submit " disabled={isDisabled} >
                       { isDisabled ?  "Requesting" :  "Send" }
                      </button>
                      {userEmailValidationError && <p className="text-danger">{userEmailValidationError}</p>}
                      {forgotPassowrdMessage && <p className="text-success">{forgotPassowrdMessage}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ForgotPassword;