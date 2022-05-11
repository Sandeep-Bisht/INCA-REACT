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
  });

  const state = useSelector((state) => state.RegisterReducer);
  const [successResponse, setSuccessResponse] = useState({});

  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState(undefined);
  const [isHidden, setIsHidden] = useState(true);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let registrationPayloadOnChangeHandler = (e) => {
    let regitrationPayloadCopy = { ...registrationPayload };
    regitrationPayloadCopy[e.target.id] = e.target.value;
    setRegistrationPayload(regitrationPayloadCopy);
  };

  let validateRegisterForm = () => {
    const isEmpty = Object.values(registrationPayload).some((x) => x === "");
    return isEmpty;
  };

  let registrationSubmitRequest = (e) => {
    e.preventDefault();
    registrationPayload.mobileNumber = phoneNumber;
    dispatch(ACTIONS.appRegistration(registrationPayload));
  };

  useEffect(() => {
    if (state && state.userRegisterSuccess) {
      // if(state.userRegisterSuccess.message == "user is already registered with this email"){
      //   setMessage(state.userRegisterSuccess.message)
      // }
      // else{
      //   setIsHidden(false);
      //   setMessage(
      //     "You are Successfully Registred, please check your registred email for Credentials."
      //   );
      // }
        setIsHidden(false);
        setMessage(
          "You are Successfully Registred, please check your registred email for Credentials."
        );
      dispatch(ACTIONS.resetToInitialState());
    }
  }, [state.userRegisterSuccess]);

  useEffect(() => {
    if (state.userRegisterFailure)
      setSuccessResponse(state.userRegisterFailure);
  }, [state.userRegisterFailure]);

  let phoneNumberInputHandler = (phone) => {
    setPhoneNumber(phone);
  };

  return (
    <>
      <Header></Header>
      {isHidden  ?
       
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
                          className="form-control "
                          onChange={(e) =>
                            registrationPayloadOnChangeHandler(e)
                          }
                          id="userName"
                          value={registrationPayload.userName}
                          required
                        />
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
                          className="form-control "
                          onChange={(e) =>
                            registrationPayloadOnChangeHandler(e)
                          }
                          id="userEmail"
                          value={registrationPayload.userEmail}
                          required
                        />
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
                          value={phoneNumber}
                          onChange={(phone) => phoneNumberInputHandler(phone)}
                          className="padding-left"
                        />
                      </div>
                    </div>
                  </div>

                  

                  <div className="col-md-12">
                    <div className="btn-wrapper mt-3">
                      <button
                        type="submit"
                        className=" form-submit "
                        disabled={validateRegisterForm()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <p className="text-danger">{message}</p>
                      </div>
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
        </form>
      </section>
      :
    

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
      
}
    </>
  );
};
export default UserRegistration;
