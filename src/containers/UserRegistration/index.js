import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Header } from "../../components/Header";
import * as ACTIONS from "./action";
import "../../css/register.css";

const UserRegistration = () => {
  const [registrationPayload, setRegistrationPayload] = useState({
    userName: "",
    userEmail: "",
    isError: {
      userName: "",
      userEmail: "",
    },
  });

  const state = useSelector((state) => state.RegisterReducer);
  const [successResponse, setSuccessResponse] = useState({});

  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState(
    "user is already registered with this email"
  );
  const [isHidden, setIsHidden] = useState(false);
  const [loginLoder, setLoginLoder] = useState(false);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const nameRegExp = RegExp(/^[A-Za-z ]+$/);
  const emailRegExp = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const { isError } = registrationPayload;

  useEffect(() => {
    if (state && state.userRegisterSuccess) {
      if(state?.userRegisterSuccess?.message == "Please fill all the fields"){
        setIsHidden(true);
        setLoginLoder(false);
        console.log("inside error",state.userRegisterSuccess.message)
        setMessage(state.userRegisterSuccess.message)
      } else{
        setIsHidden(true);
        console.log("inside else",state.userRegisterSuccess.message)
        setMessage(state.userRegisterSuccess.message);
        setLoginLoder(false);
        dispatch(ACTIONS.resetToInitialState());
      }
     
    }
  }, [state.userRegisterSuccess]);

  useEffect(() => {
    if (state.userRegisterFailure) setLoginLoder(false);
    setSuccessResponse(state.userRegisterFailure);
  }, [state.userRegisterFailure]);

  let registrationPayloadOnChangeHandler = (e) => {
    let regitrationPayloadCopy = { ...registrationPayload };
    const { id, value } = e.target;
    regitrationPayloadCopy[id] = value;
    if (e.target.id == "userEmail") {
      regitrationPayloadCopy[e.target.id] = e.target.value.toLowerCase();
    }
    switch (id) {
      case "userName":
        regitrationPayloadCopy.isError.userName = nameRegExp.test(value)
          ? ""
          : "Name should be in correct form";
        setRegistrationPayload(regitrationPayloadCopy);
        break;
      case "userEmail":
        regitrationPayloadCopy.isError.userEmail = emailRegExp.test(value)
          ? ""
          : "Email address is invalid";
        setRegistrationPayload(regitrationPayloadCopy);
        break;

      default:
        break;
    }
  };

  const checkValidation = () => {
    let regitrationPayloadCopy = { ...registrationPayload };
    Object.keys(regitrationPayloadCopy).map((item) => {
      switch (item) {
        case "userName":
          regitrationPayloadCopy.isError.userName =
            regitrationPayloadCopy.userName ? "" : "Field is Required";
          break;
        case "userEmail":
          regitrationPayloadCopy.isError.userEmail =
            regitrationPayloadCopy.userEmail ? "" : "Field is required";        
          break;
        default:
          break;
      }
    });

    setRegistrationPayload(regitrationPayloadCopy);
  };

  let validateRegisterForm = () => {
    // const isEmpty = Object.values(registrationPayload).some((x) => x === "");
    // return isEmpty;
    let formIsValid = true;

    if (!registrationPayload?.userName) {
      formIsValid = false;
    }

    if (!registrationPayload?.userEmail) {
      formIsValid = false;
    } else if (typeof registrationPayload?.userEmail !== "undefined") {
      var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      if (!pattern.test(registrationPayload?.userEmail)) {
        formIsValid = false;
      }
    }

    return formIsValid;
  };

  let registrationSubmitRequest = (e) => {
    e.preventDefault();
    checkValidation();
    if (validateRegisterForm() ) {
      registrationPayload.mobileNumber = phoneNumber;
      delete registrationPayload.isError;
      setLoginLoder(true);
      dispatch(ACTIONS.appRegistration(registrationPayload));
    } else {
      let registrationPayloadCopy = { ...registrationPayload };
      registrationPayloadCopy.isError.userEmail = "Email is invalid";
      setRegistrationPayload(registrationPayloadCopy);
    }
  };

  let phoneNumberInputHandler = (phone) => {
    setPhoneNumber(phone);
  };

  return (
    <>
      <Header></Header>
      {message == "user is already registered with this email" || message == "Please fill all the fields" ? (
        <section className="register-form">
          <form
            className="login-form"
            onSubmit={(e) => registrationSubmitRequest(e)}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 mx-auto form-wrapper-1">
                  <div className="row actual-form-1">
                    <div className="col-md-12">
                      <div className="rgstr">
                        <p className="common-form-heading ">Register</p>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-wrap">
                        <div className="input-wrap">
                          <input
                            type="text"
                            onChange={(e) =>
                              registrationPayloadOnChangeHandler(e)
                            }
                            className={
                              isError && isError.userName.length > 0
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                            value={
                              registrationPayload &&
                              registrationPayload.userName
                            }
                            id="userName"
                          />
                          {isError && isError.userName && (
                            <p className="text-danger">{isError.userName}</p>
                          )}

                          <label>
                            <i className="fa-solid fa-person me-2"></i>Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-wrap">
                        <div className="input-wrap">
                          <input
                            type="email"
                            id="userEmail"
                            value={
                              registrationPayload &&
                              registrationPayload.userEmail
                            }
                            onChange={(e) =>
                              registrationPayloadOnChangeHandler(e)
                            }
                            className={
                              isError && isError.userEmail.length > 0
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                          />
                          {isError && isError.userEmail && (
                            <p className="text-danger">{isError.userEmail}</p>
                          )}

                          <label>
                            <i className="fa-solid far far fa-envelope me-2"></i>
                            E-mail
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-wrap">
                        <div className="input-wrap">
                          <PhoneInput
                            country={"in"}
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(phone) => phoneNumberInputHandler(phone)}
                            className="padding-left"
                          />
                             
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="btn-wrapper mt-3">
                        <button type="submit" className=" form-submit">
                          {loginLoder ? "verifying" : "Submit"}
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-wrap">
                        <div className="input-wrap">
                          {isHidden && <p className="text-danger">{message}</p>}
                        </div>
                      </div>

                      <div className="end-wrap mt-2">
                        <p className="common-para mb-0 mt-3">
                          Already have an Account?{" "}
                          <Link
                            to="/login"
                            className="ms-2 common-yellow-color f2 text-decoration-none"
                          >
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      ) : (
        <section className="register-form">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto form-wrapper-1">
                <div className="row actual-form-1">
                  <div className="col-md-12">
                    <div className="rgstr">
                      <div className="col-md-12">
                        <div className="form-wrap">
                          <div className="input-wrap">
                            <p className="text-success">{message}</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="btn-wrapper mt-3">
                          <button
                            onClick={() => navigate("/login")}
                            className="form-submit"
                          >
                            Click For Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default UserRegistration;
