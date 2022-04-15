import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../../utils";
import * as ACTIONS from "./action";

let obj = {
  name: "",
  designation: "",
  affilation: "",
  address: "",
  pinCode: "",
  country: "",
  phoneNumber: "",
  email: "",
  conferenceMode: "",
  participationType: "",
  title: "",
  journeyMode: "",
  arrivalDate: "",
  departureDate: "",
  accompanyingPerson: "",
  accomodationDetail: "",
  registrationCategory: "",
  registrationFee: "",
  transactionId: "",
};

const CreateForm = (props) => {
  const [userInformation, setUserInformation] = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(undefined);
  const state = useSelector((state) => state.RegisteredUserInfoReducer);

  let dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      let logedInId = decodedToken.user.user._id;
      if (decodedToken.user.user.role !== "admin") {
        let userInformationCopy = { ...userInformation };
        userInformationCopy.name = decodedToken.user.user.userName;
        userInformationCopy.email = decodedToken.user.user.userEmail;
        userInformationCopy.phoneNumber = decodedToken.user.user.mobileNumber;
        userInformationCopy.userId = decodedToken.user.user._id;
        setUserInformation(userInformationCopy);
        dispatch(ACTIONS.getLoggedInUser(logedInId));
        // setIsDisabled(true);
      }
    }
  }, []);

  useEffect(() => {
    setValue(getRegistrationFee());
  }, [userInformation]);

  useEffect(() => {
    if (state.saveRegisterUserInfoSuccess) {
      if (localStorage.getItem("token")) {
        let decodedToken = jwt_decode(localStorage.getItem("token"));
        if (decodedToken.user.user.role !== "admin") {
          setMessage("your information saved successfully");
        } else {
          navigate("/dashboard/allRegistration");
          dispatch(ACTIONS.resetToInitialState());
        }
      }
    }
  }, [state.saveRegisterUserInfoSuccess]);

  useEffect(() => {
    if (state && state.loggedInUserSuccess) {
      setIsDisabled(true);
      setIsHidden(true);
      setUserInformation(state.loggedInUserSuccess[0]);
    }
  }, [state.loggedInUserSuccess]);

  useEffect(() => {
    if (location && location.state && location.state.mode === "view") {
      setUserInformation(location.state);
      setIsDisabled(true);
    } else if (location && location.state && location.state.mode === "edit") {
      setUserInformation(location.state);
      setIsDisabled(false);
    }
  }, []);

  let userInformationOnchangeHandler = (e) => {
    let userInformationCopy = { ...userInformation };
    userInformationCopy[e.target.id] = e.target.value;
    setUserInformation(userInformationCopy);
  };

  const getRegistrationFee = () => {
    let userInformationCopy = { ...userInformation };
    if (
      userInformationCopy.conferenceMode == "online" &&
      userInformationCopy.registrationCategory == "Life Members"
    ) {
      return "1000";
    }
    if (
      userInformationCopy.conferenceMode == "offline" &&
      userInformationCopy.registrationCategory == "Life Members"
    ) {
      return "2500";
    }

    if (
      userInformationCopy.conferenceMode == "online" &&
      userInformationCopy.registrationCategory == "For Students (Indian) "
    ) {
      return "500";
    }
    if (
      userInformationCopy.conferenceMode == "offline" &&
      userInformationCopy.registrationCategory == "For Students (Indian) "
    ) {
      return "1500";
    }

    if (
      userInformationCopy.conferenceMode == "online" &&
      userInformationCopy.registrationCategory ==
        "Others (participants/delegates/members)"
    ) {
      return "1500";
    }
    if (
      userInformationCopy.conferenceMode == "offline" &&
      userInformationCopy.registrationCategory ==
        "Others (participants/delegates/members)"
    ) {
      return "3000";
    }
  };

  let submitRegisterUserInformation = (e) => {
    e.preventDefault();
    userInformation.registrationFee = value;
    dispatch(ACTIONS.saveRegisterdUserData(userInformation));
  };

  return (
    <div className="main ">
      <div className="form-section">
        <form onSubmit={(e) => submitRegisterUserInformation(e)}>
          <div className="container">
            <div className="row mt-5 mb-5">
              <div className="col-md-4">
                <label htmlFor="InputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  className="form-control"
                  value={userInformation && userInformation.name}
                  disabled={isDisabled}
                  id="name"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="InputPosition" className="form-label">
                  Designation/Position
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  value={userInformation && userInformation.designation}
                  disabled={isDisabled}
                  id="designation"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="InputAffiliation" className="form-label">
                  Affiliation
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  value={userInformation && userInformation.affilation}
                  disabled={isDisabled}
                  id="affilation"
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4">
                <label htmlFor="InputAddress" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  value={userInformation && userInformation.address}
                  disabled={isDisabled}
                  id="address"
                ></textarea>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label htmlFor="InputPincode" className="form-label">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      value={userInformation && userInformation.pinCode}
                      disabled={isDisabled}
                      id="pinCode"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="InputPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      disabled={isDisabled}
                      value={userInformation && userInformation.phoneNumber}
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label htmlFor="SelectCountry" className="form-label">
                      Country
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={userInformation && userInformation.country}
                      disabled={isDisabled}
                      id="country"
                    >
                      <option defaultValue hidden>
                        Please Select
                      </option>
                      {countries.map((country, i) => (
                        <option key={i} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="InputEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      disabled={isDisabled}
                      value={userInformation && userInformation.email}
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label htmlFor="SelectMode" className="form-label">
                      Mode of attending the conference
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={userInformation && userInformation.conferenceMode}
                      disabled={isDisabled}
                      id="conferenceMode"
                    >
                      <option defaultValue hidden>
                        Please Select The Mode
                      </option>
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="SelectCategory" className="form-label">
                      Registration Category
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={
                        userInformation && userInformation.registrationCategory
                      }
                      disabled={isDisabled}
                      id="registrationCategory"
                    >
                      <option defaultValue hidden>
                        Please Select
                      </option>
                      <option value="Life Members">Life Members</option>
                      <option value="For Students (Indian) ">
                        For Students (Indian){" "}
                      </option>
                      <option value="Others (participants/delegates/members)">
                        Others (participants/delegates/members)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label htmlFor="SelectWish" className="form-label">
                      I wish to participate in the conference for
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={
                        userInformation && userInformation.participationType
                      }
                      disabled={isDisabled}
                      id="participationType"
                    >
                      <option defaultValue hidden>
                        Please Select
                      </option>
                      <option value="Research Paper Presentation">
                        Research Paper Presentation
                      </option>
                      <option value="Poster Presentation">
                        Poster Presentation
                      </option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    {isDisabled && (
                      <>
                        <label htmlFor="InputFee" className="form-label">
                          Registration Fee
                        </label>
                        <input
                          disabled={isDisabled}
                          value={
                            userInformation && userInformation.registrationFee
                          }
                        />{" "}
                      </>
                    )}
                    {!isDisabled && value && (
                      <>
                        <label htmlFor="InputFee" className="form-label">
                          Registration Fee
                        </label>{" "}
                        <input
                          disabled={value}
                          value={value}
                          className="form-control"
                        />{" "}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="InputTitle" className="form-label">
                  Title of the paper/poster
                </label>
                <textarea
                  id="title"
                  value={userInformation && userInformation.title}
                  disabled={isDisabled}
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            {userInformation && userInformation.conferenceMode == "offline" && (
              <>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label htmlFor="InputArrival" className="form-label">
                      Date of Arrival
                    </label>
                    <input
                      type="date"
                      value={userInformation && userInformation.arrivalDate}
                      disabled={isDisabled}
                      id="arrivalDate"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="InputDeparture" className="form-label">
                      Date of Departure
                    </label>
                    <input
                      type="date"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      value={userInformation && userInformation.departureDate}
                      disabled={isDisabled}
                      id="departureDate"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="SelectJourney" className="form-label">
                      Journey Mode
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      disabled={isDisabled}
                      value={userInformation && userInformation.journeyMode}
                      id="journeyMode"
                    >
                      <option defaultValue hidden>
                        Please Select
                      </option>
                      <option value="1">Cab</option>
                      <option value="2">Train</option>
                      <option value="3">Flight</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="InputAccompanying" className="form-label">
                      Accompanying Person, if any
                    </label>
                    <input
                      type="text"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      value={
                        userInformation && userInformation.accompanyingPerson
                      }
                      disabled={isDisabled}
                      id="accompanyingPerson"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="SelectAccomodation" className="form-label">
                      Accomodation details
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={
                        userInformation && userInformation.accomodationDetail
                      }
                      disabled={isDisabled}
                      id="accomodationDetail"
                    >
                      <option defaultValue hidden>
                        Please Select
                      </option>
                      <option value="1">Hotel</option>
                      <option value="2">Hostel</option>
                      <option value="3">Guest House</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div className="row mb-5 d-none">
              <div className="col-md-4">
                <label htmlFor="SelectCategory" className="form-label">
                  Registration Category
                </label>
                <select
                  className="form-select"
                  disabled={isDisabled}
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  aria-label="Default select example"
                  value={
                    userInformation && userInformation.registrationCategory
                  }
                  id="registrationCategory"
                >
                  <option>Please Select</option>
                  <option value="1">INCA-Life-Member</option>
                  <option value="2">Student</option>
                  <option value="3">Foreign Delegate</option>
                  <option value="4">Others</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="InputFee" className="form-label">
                  Registration Fee
                </label>
                <input
                  type="text"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  disabled={isDisabled}
                  id="registrationFee"
                  className="form-control"
                />
              </div>
            </div>
            {message && <p>{message}</p>}
            <div className="row">
              <div className="col-md-12 text-end">
                <button className="mx-3" type="submit" hidden={isHidden}>
                  Save
                </button>
                <button className="mx-3" type="submit" hidden={isHidden}>
                  Update
                </button>
                <button>Save & Pay</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateForm;
