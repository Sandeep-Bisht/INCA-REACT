import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  conferenceMode: "online",
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
  bank: "",
  dated: "",
};

  const CreateForm = (props) => {
  const [userInformation, setUserInformation] = useState(obj);
  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState(undefined);
  const state = useSelector((state) => state.RegisteredUserInfoReducer);

  let dispatch = useDispatch();

  let userInformationOnchangeHandler = (e) => {
    let userInformationCopy = { ...userInformation };
    userInformationCopy[e.target.id] = e.target.value;
    setUserInformation(userInformationCopy);
  };

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    // Setting value in fields on condition
    if (location.state) {
      setUserInformation(location.state);
      setIsDisabled(true);
    }
  }, []);

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

  useEffect(() => {
    setValue(getRegistrationFee());
  }, [userInformation]);

  useEffect(() => {
    if (state.saveRegisterUserInfoSuccess) {
      navigate("/dashboard/allRegistration");
      dispatch(ACTIONS.resetToInitialState());
    }
  }, [state.saveRegisterUserInfoSuccess]);

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
                <label for="InputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  className="form-control"
                  value={userInformation.name}
                  disabled={isDisabled}
                  id="name"
                />
              </div>
              <div className="col-md-4">
                <label for="InputPosition" className="form-label">
                  Designation/Position
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  value={userInformation.designation}
                  disabled={isDisabled}
                  id="designation"
                />
              </div>
              <div className="col-md-4">
                <label for="InputAffiliation" className="form-label">
                  Affiliation
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  value={userInformation.affilation}
                  disabled={isDisabled}
                  id="affilation"
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4">
                <label for="InputAddress" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  value={userInformation.address}
                  disabled={isDisabled}
                  id="address"
                ></textarea>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label for="InputPincode" className="form-label">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      value={userInformation.pinCode}
                      disabled={isDisabled}
                      id="pinCode"
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="InputPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      disabled={isDisabled}
                      value={userInformation.phoneNumber}
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label for="SelectCountry" className="form-label">
                      Country
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={userInformation.country}
                      disabled={isDisabled}
                      id="country"
                    >
                      <option selected>Please Select</option>
                      {countries.map((country) => (
                        <option value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label for="InputEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      disabled={isDisabled}
                      value={userInformation.email}
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
                    <label for="SelectMode" className="form-label">
                      Mode of attending the conference
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={userInformation.conferenceMode}
                      disabled={isDisabled}
                      id="conferenceMode"
                    >
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label for="SelectCategory" className="form-label">
                      Registration Category
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={userInformation.registrationCategory}
                      disabled={isDisabled}
                      id="registrationCategory"
                    >
                      <option selected>Please Select</option>
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
                    <label for="SelectWish" className="form-label">
                      I wish to participate in the conference for
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={userInformation.participationType}
                      disabled={isDisabled}
                      id="participationType"
                    >
                      <option selected>Please Select</option>
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
                    <label for="InputFee" className="form-label">
                      Registration Fee
                    </label>
                    { isDisabled &&  <input disabled={isDisabled}  value = {  userInformation.registrationFee } /> }
                   {!isDisabled && value && <input disabled={value}  value = {  value } /> }
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <label for="InputTitle" className="form-label">
                  Title of the paper/poster
                </label>
                <textarea
                  id="title"
                  value={userInformation.title}
                  disabled={isDisabled}
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            {userInformation.conferenceMode == "offline" && (
              <>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label for="InputArrival" className="form-label">
                      Date of Arrival
                    </label>
                    <input
                      type="date"
                      value={userInformation.arrivalDate}
                      disabled={isDisabled}
                      id="arrivalDate"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="InputDeparture" className="form-label">
                      Date of Departure
                    </label>
                    <input
                      type="date"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      value={userInformation.departureDate}
                      disabled={isDisabled}
                      id="departureDate"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="SelectJourney" className="form-label">
                      Journey Mode
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      disabled={isDisabled}
                      value={userInformation.journeyMode}
                      id="journeyMode"
                    >
                      <option selected>Please Select</option>
                      <option value="1">Cab</option>
                      <option value="2">Train</option>
                      <option value="3">Flight</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label for="InputAccompanying" className="form-label">
                      Accompanying Person, if any
                    </label>
                    <input
                      type="text"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      value={userInformation.accompanyingPerson}
                      disabled={isDisabled}
                      id="accompanyingPerson"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="SelectAccomodation" className="form-label">
                      Accomodation details
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={userInformation.accomodationCategory}
                      disabled={isDisabled}
                      id="accomodationCategory"
                    >
                      <option selected>Please Select</option>
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
                <label for="SelectCategory" className="form-label">
                  Registration Category
                </label>
                <select
                  className="form-select"
                  disabled={isDisabled}
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  aria-label="Default select example"
                  value={userInformation.registrationCategory}
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
                <label for="InputFee" className="form-label">
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

            <div className="row">
              <div className="col-md-12 text-end">
                <button className="mx-3" type="submit">
                  Save
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
