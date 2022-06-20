import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import * as ACTIONS from "./action";
import { Header } from "../../components/Header";
import "../../css/register.css";

const Login = () => {
  const [loginPayload, setLoginPayload] = useState({
    userEmail: "",
    password: "",
  });

  const [message, setLoginMessage] = useState('')
  const [loginLoder, setLoginLoder] = useState(false)

  const state = useSelector((state) => state.LoginReducer);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let loginOnChangeHandler = (e) => {
    let loginPayloadCopy = { ...loginPayload };
    if (e.target.id == "userEmail") {
      loginPayloadCopy[e.target.id] = e.target.value.toLowerCase();
    }
    else {
      loginPayloadCopy[e.target.id] = e.target.value;
    }
    setLoginMessage("")
    setLoginPayload(loginPayloadCopy);
  };

  useEffect(() => {
    if (state && state.userLoginSuccess && state.userLoginSuccess.token) {
      localStorage.setItem("token", state.userLoginSuccess.token);
      navigate("/dashboard");
      setLoginLoder(false)
      dispatch(ACTIONS.resetToInitialState());
    }
    else {
      if (state && state.userLoginSuccess && state.userLoginSuccess.token == "") {
        setLoginLoder(false)
        setLoginMessage(state.userLoginSuccess.message)
      }
    }
  }, [state.userLoginSuccess]);

  useEffect(() => {
    if (state.userLoginFailure) {
      setLoginLoder(false)
      setLoginMessage(state.userLoginFailure.message)
    }
  }, [state.userLoginFailure])


  let validateLoginForm = () => {
    const isEmpty = Object.values(loginPayload).some((x) => x === "");
    return isEmpty;
  };

  // setTimeout(() => {
  //   setLoginMessage('')
  // }, 10000)

  let onSubmitLoginRequest = (e) => {
    e.preventDefault();
    setLoginLoder(true)
    dispatch(ACTIONS.appLogin(loginPayload));
  };



  return (
    <>
      <Header></Header>

      <section className="register-form">

        <form className="login-form" onSubmit={(e) => onSubmitLoginRequest(e)}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto form-wrapper">
                <div className="row actual-form-1">
                  <div className="col-md-12">
                    <div className="rgstr">
                      <p className="common-form-heading ">Login</p>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="email"
                          id="userEmail"
                          //required
                          className="form-control"
                          onChange={(e) => loginOnChangeHandler(e)}
                        />
                        <label>
                          <i className="fa-solid fa-envelope me-2"></i>E-mail
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="password"
                          //required
                          className="form-control"
                          id="password"
                          onChange={(e) => loginOnChangeHandler(e)}
                        />
                        <label>
                          <i className="fa-solid far fa-eye-slash me-2"></i>
                          Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="frgt-pw">
                      <Link
                        to="/forgot"
                        className="ms-2 common-yellow-color text-decoration-none f2"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="btn-wrapper">
                      <button
                        type="submit"
                        className=" form-submit "
                        disabled={validateLoginForm()}

                      >
                        {loginLoder ? "verifying" : "Login"}
                      </button>
                    </div>
                  </div>

                  {message && <p className="text-danger">{message}</p>}


                  <div className="end-wrap mt-3">
                    <p className="common-para">
                      Not register yet?
                      <Link
                        to="/register"
                        className="ms-2 common-yellow-color f2 text-decoration-none"
                      >
                        Register now
                      </Link>
                    </p>
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

export default Login;
