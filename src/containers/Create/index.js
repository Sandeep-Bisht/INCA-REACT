import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import { QRCodeSVG } from "qrcode.react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import PaymentInfo from "../PaymentInfo";
import PaymentConfirm from "../PaymentConfirm";
import { baseUrl, countries } from "../../utils";
import * as ACTIONS from "./action";

const obj = {
  name: "",
  designation: "",
  affilation: "",
  address: "",
  pinCode: "",
  country: "",
  email: "",
  conferenceMode: "offline",
  participationType: "",
  nationality: "",
  title: "",
  theme:"",
  registrationCategory: "",
  accompanningPerson: [],
  isError: {
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
    nationality: "",
    title: "",
    theme:"",
    registrationCategory: "",
    registrationFee: "",
    transactionId: "",
  },
};
let userId;
const CreateForm = (props) => {
  const [userInformation, setUserInformation] = useState(obj);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("");
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(undefined);
  const [systemRole, setSystemRole] = useState("");
  const [anotherPerson, setAnotherPerson] = useState(false);
  const [anotherPersonPayload, setAnotherPersonPayload] = useState([]);
  const [anotherPersonDetails, setAnotherPersonDetails] = useState({
    relation_name: "",
    relation_type: "",
  });
  const state = useSelector((state) => state.RegisteredUserInfoReducer);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);
  let [qrInfo, setQrInfo] = useState(undefined);

  let dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));

      let logedInId = decodedToken.user.user._id;
      if (decodedToken.user.user.role !== "admin") {
        setLoggedInUser(true);
        let userInformationCopy = { ...userInformation };
        userInformationCopy.name = decodedToken.user.user.userName;
        userInformationCopy.email = decodedToken.user.user.userEmail;
        userInformationCopy.userId = decodedToken.user.user._id;
        setUserInformation(userInformationCopy);
        setPhoneNumber(decodedToken.user.user.mobileNumber);
        dispatch(ACTIONS.getLoggedInUser(logedInId));
      } else {
        setSystemRole(decodedToken.user.user.role);
      }
    }
  }, []);

  // useEffect(() => {
  //   //const origin = window.location.origin;  `${origin}/dashboard`;
  //   window.location.href = "/dashboard"
  // }, [])
  useEffect(() => {
    setValue(getRegistrationFee());
  }, [userInformation, anotherPersonPayload]);

  useEffect(() => {
    if (state.saveRegisterUserInfoSuccess) {
      if (localStorage.getItem("token")) {
        let decodedToken = jwt_decode(localStorage.getItem("token"));
        if (decodedToken.user.user.role !== "admin") {
          setIsHidden(true);
          setMessage("Your information saved successfully");
        } else {
          if (
            state.saveRegisterUserInfoSuccess.message ===
            "User is already registred with this mail."
          ) {
            setMessage(state.saveRegisterUserInfoSuccess.message);
          } else {
            navigate("/dashboard/allRegistration");
          }
          dispatch(ACTIONS.resetToInitialState());
        }
      }
    }
  }, [state.saveRegisterUserInfoSuccess]);

  useEffect(() => {
    if (state.updateUserInfoSuccess) {
      // if (localStorage.getItem("token")) {
      //   let decodedToken = jwt_decode(localStorage.getItem("token"));
      //   if (decodedToken.user.user.role !== "admin") {
      //     setMessage("your information saved successfully");
      //   } else {
      navigate("/dashboard/allRegistration");
      dispatch(ACTIONS.resetToInitialState());
      // }
      // }
    }
  }, [state.updateUserInfoSuccess]);

  useEffect(() => {
    if (
      state &&
      state.loggedInUserSuccess &&
      state.loggedInUserSuccess.length > 0
    ) {
      setIsDisabled(true);
      setIsHidden(true);
      setUserInformation(state.loggedInUserSuccess[0]);
    }
  }, [state.loggedInUserSuccess]);

  useEffect(() => {
    if (location && location.state && location.state.mode === "view") {
      setUserInformation(location.state);
      setPhoneNumber(location.state.phoneNumber.toString());
      setMode(location.state.mode);
      setIsDisabled(true);
      setIsHidden(true);
    } else if (location && location.state && location.state.mode === "edit") {
      location.state.isError = {
        name: "",
        designation: "",
        affilation: "",
        address: "",
        pinCode: "",
        country: "",
        phoneNumber: "",
        email: "",
        conferenceMode: "offline",
        participationType: "",
        nationality: "",
        title: "",
        theme: "",
        registrationCategory: "",
        registrationFee: "",
        transactionId: "",
      };
      userId = location.state._id;
      setUserInformation(location.state);
      setPhoneNumber(location.state.phoneNumber.toString());
      setIsDisabled(false);
      setMode(location.state.mode);
    }
  }, []);

  const getRegistrationFee = () => {
    let userInformationCopy = { ...userInformation };
    let accompanningPersonLength = userInformation.accompanningPerson.length;

    if (
      userInformationCopy.registrationCategory === "Life Members" &&
      userInformationCopy.nationality === "indian" &&
      accompanningPersonLength >= 0
    ) {
      let totalFee = accompanningPersonLength * 2360 + 2950;
      return `₹ ${totalFee} including 18% GST`;
    }

    if (
      userInformationCopy.registrationCategory === "Life Members" &&
      userInformationCopy.nationality === "foreigner" &&
      accompanningPersonLength >= 0
    ) {
      let totalFee = accompanningPersonLength * 100 + 125;
      return `US$ ${totalFee} `;
    }

    if (
      userInformationCopy.registrationCategory === "For Students" &&
      userInformationCopy.nationality === "indian" &&
      accompanningPersonLength >= 0
    ) {
      let totalFee = accompanningPersonLength * 2360 + 1770;
      return `₹ ${totalFee} including 18% GST`;
    }

    if (
      userInformationCopy.registrationCategory === "For Students" &&
      userInformationCopy.nationality === "foreigner" &&
      accompanningPersonLength >= 0
    ) {
      let totalFee = accompanningPersonLength * 100 + 100;
      return `US$ ${totalFee}`;
    }

    if (
      userInformationCopy.registrationCategory ===
        "Others (participants/delegates/members)" &&
      userInformationCopy.nationality === "indian" &&
      accompanningPersonLength >= 0
    ) {
      let totalFee = accompanningPersonLength * 2360 + 3540;
      return `₹ ${totalFee} including 18% GST`;
    }

    if (
      userInformationCopy.registrationCategory ===
        "Others (participants/delegates/members)" &&
      userInformationCopy.nationality === "foreigner" &&
      accompanningPersonLength >= 0
    ) {
      let totalFee = accompanningPersonLength * 100 + 125;
      return `US$ ${totalFee}`;
    }
  };

  const buttonState = {
    button: 0,
  };
  const regExp = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const nameRegExp = RegExp(/^[A-Za-z ]+$/);
  const phoneRegExp = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  );
  // const pinCode = RegExp();
  const { isError } = userInformation;

  const userInformationOnchangeHandler = (e) => {
    let userInformationCopy = { ...userInformation };
    const { id, value } = e.target;

    userInformationCopy[id] = value;
    setUserInformation(userInformationCopy);
    if (e.target.id == "email") {
      userInformationCopy[e.target.id] = e.target.value.toLowerCase();
    }
    switch (id) {
      case "name":
        userInformationCopy.isError.name = nameRegExp.test(value)
          ? ""
          : "Name should be in correct form";
        setUserInformation(userInformationCopy);
        break;
      case "address":
        userInformationCopy.isError.address =
          value.length < 0 ? "Address is Required " : "";

        setUserInformation(userInformationCopy);
        break;
      case "pinCode":
        userInformationCopy.isError.pinCode =
          value.length <= 5 ? "Atleast 6 characaters Required" : "";
        setUserInformation(userInformationCopy);
        break;
      case "country":
        userInformationCopy.isError.country =
          value.length < 0 ? "Country Field is required" : "";
        setUserInformation(userInformationCopy);
        break;
      case "phoneNumber":
        userInformationCopy.isError.phoneNumber = phoneRegExp.test(value)
          ? ""
          : "phoneNumber  is invalid";
        setUserInformation(userInformationCopy);
        break;
      case "email":
        userInformationCopy.isError.email = regExp.test(value)
          ? ""
          : "Email address is invalid";
        setUserInformation(userInformationCopy);
        break;
      // case "conferenceMode":
      //   userInformationCopy.isError.conferenceMode =
      //     value.length < 0 ? "Conference Mode is Required" : "";
      //   setUserInformation(userInformationCopy);
      //   break;
      case "participationType":
        userInformationCopy.isError.participationType =
          value.length < 0 ? "Participation Type is Required" : "";
        setUserInformation(userInformationCopy);
        break;

      case "nationality":
        userInformationCopy.isError.nationality =
          value.length < 0 ? "Mention nationality type" : "";
        setUserInformation(userInformationCopy);
        break;

        case "theme" : 
        userInformationCopy.isError.theme =
        value.length < 0 ? "Theme is Required" : "";
      setUserInformation(userInformationCopy);
      break;

      case "registrationCategory":
        userInformationCopy.isError.registrationCategory =
          value.length < 0 ? "Registration Category is Required" : "";
        setUserInformation(userInformationCopy);
        break;
      // case "transactionId":
      //   userInformationCopy.isError.transactionId = value.length < 4 ? "Atleast 4 characaters required" : "";
      //   break;

      default:
        break;
    }
  };

  const validateForm = () => {
    let formIsValid = true;

    if (!userInformation?.name) {
      formIsValid = false;
    }

    if (!userInformation?.pinCode) {
      formIsValid = false;
    }

    if (!userInformation?.country) {
      formIsValid = false;
    }

    if (!userInformation?.address) {
      formIsValid = false;
    }

    if (!userInformation?.email) {
      formIsValid = false;
    } else if (typeof userInformation?.email !== "undefined") {
      var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      if (!pattern.test(userInformation?.email)) {
        formIsValid = false;
      }
    }

    if (!userInformation?.nationality) {
      formIsValid = false;
    }

    if (!userInformation?.theme) {
      formIsValid = false;
    }

    if (!userInformation?.registrationCategory) {
      formIsValid = false;
    }

    return formIsValid;
  };

  let submitRegisterUserInformation = (e) => {
    e.preventDefault();
    if (systemRole == "admin") {
      userInformation.systemRole = systemRole;
    }
    if (buttonState.button == 1) {
      checkValidation();
      if (validateForm()) {
        userInformation.registrationFee = value;
        userInformation.phoneNumber = phoneNumber;
        delete userInformation.isError;
        dispatch(ACTIONS.saveRegisterdUserData(userInformation));
      } else {
        let userInformationCopy = { ...userInformation };
        setUserInformation(userInformationCopy);
      }
    }
    if (buttonState.button == 2) {
      checkValidation();
      if (validateForm()) {
      } else {
        let userInformationCopy = { ...userInformation };
        setUserInformation(userInformationCopy);
      }
    }
  };

  const checkValidation = () => {
    let userInformationCopy = { ...userInformation };

    if (mode == "edit") {
      userInformationCopy.isError = {
        name: "",
        designation: "",
        affilation: "",
        address: "",
        pinCode: "",
        country: "",
        phoneNumber: "",
        email: "",
        conferenceMode: "offline",
        participationType: "",
        nationality: "",
        title: "",
        registrationCategory: "",
        registrationFee: "",
        transactionId: "",
      };
    }
    Object.keys(userInformationCopy).map((item) => {
      switch (item) {
        case "name":
          userInformationCopy.isError.name = userInformationCopy.name
            ? ""
            : "Field is Required";
          break;
        case "address":
          userInformationCopy.isError.address = userInformationCopy.address
            ? ""
            : "  Field is required ";
          break;
        case "pinCode":
          userInformationCopy.isError.pinCode = userInformationCopy.pinCode
            ? ""
            : " Field is required";
          break;
        case "country":
          userInformationCopy.isError.country = userInformationCopy.country
            ? ""
            : " Field is required";
          break;

        case "email":
          userInformationCopy.isError.email = userInformationCopy.email
            ? ""
            : "Field is required";
          break;
        case "nationality":
          userInformationCopy.isError.nationality =
            userInformationCopy.nationality ? "" : " Field is required";
          break;
        case "participationType":
          userInformationCopy.isError.participationType =
            userInformationCopy.participationType ? "" : "Field is required";
          break;
        case "registrationCategory":
          userInformationCopy.isError.registrationCategory =
            userInformationCopy.registrationCategory ? "" : "Field is required";
          break;

        default:
          break;
      }
    });
    // userInformation.registrationFee = value;

    setUserInformation(userInformationCopy);
  };

  let updateRegisterUserInfo = (e) => {
    e.preventDefault();
    checkValidation();

    if (validateForm()) {
      let id = location.state._id;
      userInformation.registrationFee = value;
      userInformation.phoneNumber = phoneNumber;
      delete userInformation.isError;
      dispatch(ACTIONS.updateRegistredUser(userInformation, id));
    }
  };

  let phoneNumberInputHandler = (phone) => {
    setPhoneNumber(phone);
  };

  let generateQr = () => {
    buttonState.button = 2;
    makePayment();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    let url = `${baseUrl}payments`;
    let data = await axios.post(url);

    var options = {
      key: "rzp_test_fXDarHzcgxICzG", // Enter the Key ID generated from the Dashboard
      name: "43 inca ",
      currency: data.currency,
      amount: 1500 * 100,
      order_id: data.id,
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  let anotherPersonHandleChange = (e) => {
    let anotherPersonDetailsCopy = { ...anotherPersonDetails };
    anotherPersonDetailsCopy[e.target.id] = e.target.value;
    setAnotherPersonDetails(anotherPersonDetailsCopy);
  };

  let addAccompanningPerson = () => {
    if (anotherPersonDetails.relation_name !== "") {
      //setAddPerson(true);
      // setAccompanningPerson(e.target.value);
      let userInformationCopy = { ...userInformation };
      let anotherPersonPayloadCopy = [...userInformation.accompanningPerson];
      anotherPersonPayloadCopy.push(anotherPersonDetails);
      // userInformation.accompanningPerson = anotherPersonPayloadCopy
      // setAnotherPersonPayload(anotherPersonPayloadCopy);
      //userInformation.accompanningPerson = anotherPersonPayloadCopy;
      userInformationCopy.accompanningPerson = anotherPersonPayloadCopy;
      setUserInformation(userInformationCopy);
      setAnotherPersonDetails({
        relation_name: "",
        relation_type: "",
      });
    } else {
      alert("Please mention the person details");
    }
  };

  let deleteAccompanningPerson = (index) => {
    let userInformationCopy = { ...userInformation };
    let anotherPersonPayloadCopy = [...userInformation.accompanningPerson];

    let result = anotherPersonPayloadCopy.filter((item, i) => i !== index);
    userInformationCopy.accompanningPerson = result;
    setUserInformation(userInformationCopy);
  };

  let anotherPersonHandler = (e) => {
    if (e === true) {
      setAnotherPerson(e);
    } else {
      setAnotherPersonPayload([]);
      setAnotherPerson(e);
      userInformation.accompanningPerson = [];
    }
  };

  return (
    <div className="main">
      <div className="form-section">
        <form
          onSubmit={(e) => {
            location && location.state && location.state.mode === "edit"
              ? updateRegisterUserInfo(e)
              : submitRegisterUserInformation(e);
          }}
          noValidate
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 pt-3">
                <label htmlFor="InputName" className="form-label">
                  Registration No : &nbsp;
                  <span>
                    {userInformation && userInformation.registrationNumber}
                  </span>
                </label>
              </div>
              {/* <div className="col-md-6"></div>
            
              <div className="col-md-3">
                <div>
              <label htmlFor="SelectWish" className="form-label">
                      Payment Status
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={
                        userInformation && userInformation.paymentStatus
                      }
                      disabled={isDisabled}
                      id="paymentStatus"
                    >
                      <option defaultValue hidden>
                        Please Select Payment Status
                      </option>
                      <option value="unpaid">Unpaid</option>
                      <option value="paid">Paid</option>                     
                    </select>
                    </div>
              </div> */}
            </div>
            <div className="row mt-2 mb-5">
              <div className="col-md-4">
                <label htmlFor="InputName" className="form-label asterisk">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  className={
                    isError && isError.name.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  value={userInformation && userInformation.name}
                  disabled={
                    loggedInUser && userInformation && userInformation.name
                  }
                  id="name"
                />
                {isError && isError.name && (
                  <p className="text-danger">{isError.name}</p>
                )}
              </div>
              <div className="col-md-4">
                <label htmlFor="InputPosition" className="form-label">
                  Designation/Position
                </label>
                <input
                  type="text"
                  className={"form-control"}
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
                  className={"form-control"}
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  value={userInformation && userInformation.affilation}
                  disabled={isDisabled}
                  id="affilation"
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4">
                <label htmlFor="InputAddress" className="form-label asterisk">
                  Address
                </label>
                <textarea
                  className={
                    isError && isError.address.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  onChange={(e) => userInformationOnchangeHandler(e)}
                  value={userInformation && userInformation.address}
                  disabled={isDisabled}
                  id="address"
                ></textarea>
                {isError && isError.address && (
                  <p className="text-danger">{isError.address}</p>
                )}
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label
                      htmlFor="InputPincode"
                      className="form-label asterisk"
                    >
                      PIN Code
                    </label>
                    <input
                      type="text"
                      className={
                        isError && isError.pinCode.length > 0
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      value={userInformation && userInformation.pinCode}
                      disabled={isDisabled}
                      id="pinCode"
                    />
                    {isError && isError.pinCode && (
                      <p className="text-danger">{isError.pinCode}</p>
                    )}
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="InputPhone" className="form-label">
                      Phone
                    </label>
                    <PhoneInput
                      country="in"
                      value={phoneNumber}
                      disabled={loggedInUser && userInformation && phoneNumber}
                      placeholder=""
                      onChange={(phone) => phoneNumberInputHandler(phone)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label
                      htmlFor="SelectCountry"
                      className="form-label asterisk"
                    >
                      Country
                    </label>
                    <select
                      className={
                        isError && isError.country.length > 0
                          ? "is-invalid form-control"
                          : "form-control"
                      }
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
                    {isError && isError.country && (
                      <p className="text-danger">{isError.country}</p>
                    )}
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="InputEmail" className="form-label asterisk">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      disabled={
                        loggedInUser && userInformation && userInformation.email
                      }
                      value={userInformation && userInformation.email}
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      className={
                        isError && isError.email.length > 0
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                    />
                    {isError && isError.email && (
                      <p className="text-danger">{isError.email}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <label
                      htmlFor="SelectCategory"
                      className="form-label asterisk"
                    >
                      Theme
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      aria-label="Default select example"
                      value={
                        userInformation && userInformation.theme
                      }
                      disabled={isDisabled}
                      id="theme"
                    >
                      <option defaultValue hidden>
                        Please Select
                      </option>
                      <option
                        value="Advances in cartography, geospatial technology and thematic mapping for
management of natural resources and smart governance"
                      >
                        Advances in cartography, geospatial technology and
                        thematic mapping for management of natural resources and
                        smart governance
                      </option>
                      {/* <option value="delegate">Delegate</option> */}
                      <option
                        value="Geospatial technologies for fostering sustainable agriculture, food security and green economies"
                      >
                        Geospatial technologies for fostering sustainable
                        agriculture, food security and green economies
                      </option>
                      <option value="Geospatial technologies for sustainable water resources management">
                        Geospatial technologies for sustainable water resources
                        management
                      </option>
                      <option value="Geospatial technologies for environment and energy security">
                        Geospatial technologies for environment and energy
                        security
                      </option>
                      <option
                        value="Geospatial technologies for urban studies and infrastructure planning & development"
                      >
                        Geospatial technologies for urban studies and
                        infrastructure planning & development
                      </option>
                      <option value="Geospatial technologies for meteorology and climate change studies">
                        Geospatial technologies for meteorology and climate
                        change studies
                      </option>
                      <option
                        value="Geospatial technologies for building disaster resilience and emergency management"
                      >
                        Geospatial technologies for building disaster resilience
                        and emergency management
                      </option>
                      <option
                        value=" Hydrographic surveys and geospatial technologies for coastal zone management and oceanography"
                      >
                        Hydrographic surveys and geospatial technologies for
                        coastal zone management and oceanography
                      </option>
                      <option value="Drone/UAV based novel applications for sustainable economies">
                        Drone/UAV based novel applications for sustainable
                        economies
                      </option>
                      <option value="Emerging trends in AI/ML for cartography and geospatial applications">
                        Emerging trends in AI/ML for cartography and geospatial
                        applications
                      </option>
                      <option
                        value="New geospatial and space policies for enhancing entrepreneurship and geospatial economy">
                        New geospatial and space policies for enhancing
                        entrepreneurship and geospatial economy
                      </option>
                    </select>
                    {isError && isError.registrationCategory && (
                      <p className="text-danger">
                        {isError.registrationCategory}
                      </p>
                    )}
                  </div>
                  {/* <div className="col-md-12 mb-4">
                    <label htmlFor="SelectMode" className="form-label asterisk">
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
                     
                      <option value="offline">Physical</option>
                    </select>
                    {isError && isError.conferenceMode && (
                      <p className="text-danger">{isError.conferenceMode}</p>
                    )}
                  </div> */}

                  {/* <div className="col-md-12 mb-4">
                    <label htmlFor="SelectMode" className="form-label asterisk">
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
                      <option value="offline">Physical</option>
                      {/* <option value="offline">Physical</option>
                      <option value="offline">Physical</option> */}
                  {/* </select> */}
                  {/* {isError && isError.conferenceMode && (
                      <p className="text-danger">{isError.conferenceMode}</p>
                    )} 
                  </div> */}

                  {/* Registration Category */}

                  <div className="col-md-12">
                    <label
                      htmlFor="SelectCategory"
                      className="form-label asterisk"
                    >
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
                      {/* <option value="delegate">Delegate</option> */}
                      <option value="For Students">For Students</option>
                      <option value="Others (participants/delegates/members)">
                        Others (Participants/Delegates/Members)
                      </option>
                    </select>
                    {isError && isError.registrationCategory && (
                      <p className="text-danger">
                        {isError.registrationCategory}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label htmlFor="SelectWish" className="form-label asterisk">
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
                      <option value="delegate">Delegate</option>
                      <option value="Research Paper Presentation">
                        Research Paper Presentation
                      </option>
                      <option value="Poster Presentation">
                        Poster Presentation
                      </option>
                      <option value="Both">
                        Research Paper & Poster Presentation
                      </option>
                    </select>
                    {isError && isError.participationType && (
                      <p className="text-danger">{isError.participationType}</p>
                    )}
                  </div>
                  <div className="col-md-12 mt-2">
                    <div>
                      <p className="form-label">Nationality :</p>
                    </div>
                    <div className="radio-button-box d-flex">
                      <label className="pe-2" for="foreigner">
                        Foreign
                      </label>
                      <input
                        type="radio"
                        id="nationality"
                        className="w-auto"
                        name="nationality"
                        checked={userInformation.nationality === "foreigner"}
                        disabled={isDisabled}
                        value="foreigner"
                        onChange={(e) => userInformationOnchangeHandler(e)}
                      />
                      <label className="ps-4 pe-1" for="Indian">
                        Indian
                      </label>
                      <input
                        type="radio"
                        id="nationality"
                        className="w-auto"
                        name="nationality"
                        checked={userInformation.nationality === "indian"}
                        disabled={isDisabled}
                        value="indian"
                        onChange={(e) => userInformationOnchangeHandler(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {userInformation.participationType !== "" &&
                userInformation.participationType !== "delegate" && (
                  <div className="col-md-4">
                    <label htmlFor="InputTitle" className="form-label">
                      Title of the paper/poster
                    </label>
                    <textarea
                      id="title"
                      value={userInformation && userInformation.title}
                      disabled={isDisabled}
                      onChange={(e) => userInformationOnchangeHandler(e)}
                      className={
                        isError && isError.title.length > 0
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                    ></textarea>
                  </div>
                )}
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="accompany-box d-flex pb-2">
                  <div className="accompany-box-1 pt-1">
                    <h6 className="form-label m-0">Accompanying Person :</h6>
                  </div>

                  {location &&
                  location.state &&
                  location.state.mode === "view" ? (
                    ""
                  ) : (
                    <div className="accompany-box-2 d-flex">
                      <label className="ps-4 pe-1" for="yes">
                        Yes
                      </label>
                      <input
                        type="radio"
                        id="yes"
                        name="add"
                        value="yes"
                        disabled={isDisabled}
                        onClick={(e) => anotherPersonHandler(true)}
                      />
                      <label className="ps-4 pe-1" for="no">
                        No
                      </label>
                      <input
                        type="radio"
                        id="no"
                        name="add"
                        value="no"
                        disabled={isDisabled}
                        onClick={(e) => anotherPersonHandler(false)}
                      />
                    </div>
                  )}
                </div>

                {location &&
                location.state &&
                location.state.mode === "view" ? (
                  ""
                ) : (
                  <small>(max. of 3 persons are allowed.)</small>
                )}

                {anotherPerson &&
                  userInformation.accompanningPerson.length < 3 && (
                    <div className="exhibitor-relation d-flex mt-3">
                      <div className="relation-box-1">
                        <label className="form-label" for="relation-name">
                          Full Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="relation_name"
                          value={anotherPersonDetails.relation_name}
                          onChange={(e) => anotherPersonHandleChange(e)}
                        />
                      </div>
                      <div className="ms-2 relation-box-2">
                        <label className="form-label" for="relation_type">
                          Relation
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="relation_type"
                          value={anotherPersonDetails.relation_type}
                          onChange={(e) => anotherPersonHandleChange(e)}
                        />
                      </div>

                      <div className="relation-delete-box ps-3">
                        <button
                          className="create-btn"
                          id="accompanningPerson"
                          type="button"
                          onClick={(e) => addAccompanningPerson(e)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  )}

                {userInformation.accompanningPerson.length > 0 &&
                  userInformation.accompanningPerson.map((item, index) => {
                    return (
                      <div className="exhibitor-relation d-flex mt-3">
                        <div className="relation-box-1">
                          <label className="form-label" for="relation-name">
                            Full Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={item.relation_name}
                            disabled
                          />
                        </div>
                        <div className="ms-2 relation-box-2">
                          <label className="form-label" for="relation-type">
                            Relation
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={item.relation_type}
                            disabled
                          />
                        </div>
                        {location &&
                          location.state &&
                          location.state.mode === "edit" && (
                            <div className="relation-delete-box ps-3">
                              <i
                                class="fa-solid fa-trash-can ps-3"
                                onClick={() => deleteAccompanningPerson(index)}
                              ></i>
                            </div>
                          )}
                      </div>
                    );
                  })}
              </div>
              <div className="col-md-4">
                {isDisabled && (
                  <>
                    <label htmlFor="InputFee" className="form-label">
                      Registration Fee
                    </label>
                    <input
                      disabled={isDisabled}
                      className="form-control"
                      value={userInformation && userInformation.registrationFee}
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

            <div className="payment-section">
              <div className="row">
                <div className="col-md-6">
                  <PaymentInfo />
                </div>
                <div className="col-md-6">
                  {location &&
                    location.state &&
                    location.state.mode == "view" && (
                      <PaymentConfirm userInformation={userInformation} />
                    )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <button
                  className="mx-3"
                  name="save"
                  show
                  value="save"
                  type="submit"
                  onClick={() => (buttonState.button = 1)}
                  hidden={isHidden}
                >
                  {location && location.state && location.state.mode === "edit"
                    ? "Update"
                    : "Submit"}
                </button>

                {/* <button
                  type="submit"
                  name="saveAndPay"
                  value="saveAndPay"
                  onClick={() => generateQr()}
                >
                  Save & Pay
                </button> */}
              </div>
            </div>

            {message && (
              <p
                className={`${
                  message == "Your information saved successfully"
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {message}
              </p>
            )}
            {qrInfo !== undefined ? <QRCodeSVG value={qrInfo} /> : ""}
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateForm;
