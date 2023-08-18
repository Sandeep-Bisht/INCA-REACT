import React, { useEffect, useState } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { Link, useLocation, useNavigate, useParams  } from "react-router-dom";
import "../../css/register.css";
import axios from "axios";
import { GetHeaders, baseUrl } from "../../utils";

const ResetPassword = () => {

  let [password, setPassword] = useState(undefined);
  let [confirmPassword, setConfirmPassword] = useState(undefined);
  let [passwordValidationError, setPasswordValidationError] = useState("")
  let [isDisabled, setIsDisabled] = useState(false);
  let [token, setToken] = useState(useParams())
  let navigate = useNavigate()
  let location = useLocation();
  let [successMsg, setSuccessMsg] = useState();
  
  let [forgotPassowrdMessage, setForgotPassowrdMessage] = useState('')





  let passwordOnChangeHandler = (e) => {
    e.preventDefault();
      if(e.target.id == "password"){
        setPasswordValidationError("")        
          setPassword(e.target.value)
      } else {
        setPasswordValidationError("")        
            setConfirmPassword(e.target.value)
       
      }
  }

  let passwordValidation = (password) => {   
      if(!password || confirmPassword || password == "") {
        setPasswordValidationError("Password is required")
        return false
      }
      return true
  }

  let forgotPasswordHandler = async (e) => {
    e.preventDefault();
    if(password && confirmPassword){
        if(password == confirmPassword){
        setIsDisabled(true);
        
        try {
            let payload = {
                token : token,
                password : password
            }
            let url = `${baseUrl}reset-password`
            let response = await axios.post(url, payload, GetHeaders)
            if(response){
                setIsDisabled()
                setConfirmPassword()
                setPassword()
                setSuccessMsg(response.data.message)
            }            
        } catch (error) {
            console.log(error)
        }
       
        }else{
            setPasswordValidationError("Password are not same")
        }
    }  else{        
        passwordValidation(password)
    }
    
  };

  const onClickRedirectToLogin = () => {
    setSuccessMsg(undefined)
    navigate("/login")
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
                        Reset Password
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          onChange={(e) => passwordOnChangeHandler(e)}
                          type="password"
                          id="password"
                          className="form-control mb-3"
                        />
                        <label>
                          <i className="fa-solid fa-envelope me-2"></i>New Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          onChange={(e) => passwordOnChangeHandler(e)}
                          type="password"
                          id="confirmPassword"
                          className="form-control mb-3"
                        />
                        <label>
                          <i className="fa-solid fa-envelope me-2"></i>Confirm New Password
                        </label>
                      </div>
                      {passwordValidationError && <p className="text-center text-danger mt-2">{passwordValidationError}</p>}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="btn-wrapper">
                        { !successMsg ? 
                      <button 
                      type="submit" 
                      className=" form-submit"
                       disabled={isDisabled} >
                       { isDisabled ?  "Reseting" :  "Reset" }
                      </button> :
                       <button 
                       type="button" 
                       className=" form-submit"
                       onClick={()=>(onClickRedirectToLogin())}
                       >
                        Login
                       </button>
                    }
                      <p className="text-success">{successMsg && successMsg} </p>
                      {forgotPassowrdMessage  && <p className={`mt-2 ${forgotPassowrdMessage == "Please send the registred email address" ? "text-danger" : "text-success"}`}>{forgotPassowrdMessage}</p>}
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

export default ResetPassword;