import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import * as ACTIONS from "../../containers/Create/action";
import { useDispatch, useSelector } from "react-redux";

const RegistrationDetails = () => {
  let dispatch = useDispatch();
  const [loggedInUser, setLoggedInUser] = useState({});
  const [registerdedUserInfo, setRegisterdedUserInfo] = useState([]);
  const state = useSelector((state) => state.RegisteredUserInfoReducer);
  let [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      setLoggedInUser(decodedToken.user.user);
      dispatch(ACTIONS.getLoggedInUser(decodedToken.user.user._id));
    }
  }, []);

  useEffect(() => {
    if (
      state &&
      state.loggedInUserSuccess &&
      state.loggedInUserSuccess.length > 0
    ) {
      setRegisterdedUserInfo(state.loggedInUserSuccess[0]);
      //   setIsDisabled(true);
    }
  }, [state.loggedInUserSuccess]);

  return (
    <>
      <section className="registration-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="text-center">Registration Details</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Registration No
              </label>
              <input
                type="text"
                class="form-control"
                id="registrationNumber"
                value={registerdedUserInfo && registerdedUserInfo.registrationNumber}
                disabled={isDisabled}
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Date of registration
              </label>
              <input
                type="text"
                class="form-control"
                id="registrationDate"
                value={registerdedUserInfo && registerdedUserInfo.createdAt}
                disabled={isDisabled}
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                value={registerdedUserInfo && registerdedUserInfo.name}
                disabled={isDisabled}
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Mobile no
              </label>
              <input
                type="text"
                class="form-control"
                id="phoneNumber"
                value={registerdedUserInfo && registerdedUserInfo.phoneNumber}
                disabled={isDisabled}
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Company
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                value={registerdedUserInfo && registerdedUserInfo.affilation}
                disabled={isDisabled}
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Type of registration
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                value={registerdedUserInfo && registerdedUserInfo.participationType}
                disabled={isDisabled}
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Accompaying
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                value={registerdedUserInfo && registerdedUserInfo.accompanningPerson}
                disabled={isDisabled}
              ></input>
            </div>

            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Fee Amount
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                value={registerdedUserInfo && registerdedUserInfo.registrationFee}
                disabled={isDisabled}
              ></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationDetails;
