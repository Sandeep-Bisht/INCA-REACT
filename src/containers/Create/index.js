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
import { countries } from "../../utils";
import * as ACTIONS from "./action";

const obj = {
  name: "",
  designation: "",
  affilation: "",
  address: "",
  pinCode: "",
  country: "",
  //phoneNumber: "",
  email: "",
  conferenceMode: "offline",
  participationType: "",
  nationality:"",
  title: "",
  registrationCategory: "",
  //registrationFee: "",
  //transactionId: "",
  accompanningPerson:[],
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
    nationality:"",
    title: "",
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
  //const [accompanningPerson, setAccompanningPerson] = useState([]);
  //const [addPerson, setAddPerson] = useState(false)
  const [anotherPerson, setAnotherPerson] = useState(false);
  const [anotherPersonPayload, setAnotherPersonPayload] = useState([]);
  const [anotherPersonDetails, setAnotherPersonDetails] = useState({
    relation_name : '',
    relation_type : ''
  });
  const state = useSelector((state) => state.RegisteredUserInfoReducer);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);
  let [qrInfo, setQrInfo] = useState(undefined);

  let dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();
  console.log("userIndo on loaduing", anotherPersonPayload, userInformation)

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
    console.log("inside registration fee")
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

      // userId = state.loggedInUserSuccess[0]._id;
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
    //let anotherPersonPayloadCopy =  ...anotherPersonPayload }
    let accompanningPersonLength = anotherPersonPayload.length
    //console.log("get resistration fee accp length",accompanningPersonLength )
  
    if (      
      userInformationCopy.registrationCategory === "Life Members" &&
      userInformationCopy.nationality === "indian"  && accompanningPersonLength >= 0    
    ) {
      let totalFee = (accompanningPersonLength * 2360) + 2950
      return `₹ ${totalFee}`
    }

    if (      
      userInformationCopy.registrationCategory === "Life Members" &&
      userInformationCopy.nationality === "foreigner" && accompanningPersonLength >= 0 
    ) {
      let totalFee = (accompanningPersonLength * 100) + 125
      return `USD$ ${totalFee}`
    }

    if (
      userInformationCopy.conferenceMode === "offline" &&
      userInformationCopy.registrationCategory === "For Students" &&
      userInformationCopy.nationality === "indian"
    ) {
      return "1770";
    }

    if (
      userInformationCopy.conferenceMode === "offline" &&
      userInformationCopy.registrationCategory === "For Students" &&
      userInformationCopy.nationality === "foreigner"
    ) {
      return "US$100";
    }

    if (
      userInformationCopy.conferenceMode === "offline" &&
      userInformationCopy.registrationCategory ===
        "Others (participants/delegates/members)" && 
        userInformationCopy.nationality === "indian"
    ) {
      return "3540";
    }

    if (
      userInformationCopy.conferenceMode === "offline" &&
      userInformationCopy.registrationCategory ===
        "Others (participants/delegates/members)" && 
        userInformationCopy.nationality === "foreigner"
    ) {
      return "US$125";
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

  console.log(userInformation,'user info here')
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
    //userInformation.accompanningPerson = anotherPersonPayload;
    //console.log("submit button clicked", userInformation)
    if (buttonState.button == 1) {
      checkValidation();
      if (validateForm()) {
        userInformation.registrationFee = value;
        userInformation.phoneNumber = phoneNumber;
        //userInformation.accompanningPerson.push(anotherPersonPayload);
        delete userInformation.isError;
        //console.log("userINfo", userInformation)
        dispatch(ACTIONS.saveRegisterdUserData(userInformation));
      } else {
        console.log("nothing happened")
        let userInformationCopy = { ...userInformation };
        //userInformationCopy.isError.email = "Email is invalid"
        setUserInformation(userInformationCopy);
      }
    }
    if (buttonState.button == 2) {
      checkValidation();
      if (validateForm()) {
        // makePayment();
      } else {
        let userInformationCopy = { ...userInformation };        
        //userInformationCopy.isError.email = "Email is invalid"
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
    let url = "http://144.91.110.221:4801/api/payments";
    let data = await axios.post(url);

    var options = {
      key: "rzp_test_fXDarHzcgxICzG", // Enter the Key ID generated from the Dashboard
      name: "42 inca ",
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

  let anotherPersonHandleChange = (e) =>{

    let anotherPersonDetailsCopy = {...anotherPersonDetails}
    anotherPersonDetailsCopy[e.target.id] = e.target.value
    setAnotherPersonDetails(anotherPersonDetailsCopy)
  }

  let addAccompanningPerson = () => { 
    if(anotherPersonDetails.relation_name !== "") {
        
    //setAddPerson(true);
    // setAccompanningPerson(e.target.value);
    
    let anotherPersonPayloadCopy = [...anotherPersonPayload]
    anotherPersonPayloadCopy.push(anotherPersonDetails)
    setAnotherPersonPayload(anotherPersonPayloadCopy)
    userInformation.accompanningPerson = anotherPersonPayloadCopy;
    setAnotherPersonDetails({
      relation_name : '',
      relation_type : ''
    })
    } else {
      alert("Please mention the person details")
    }
  }
    console.log("payl;oad ",userInformation)

  let deleteAccompanningPerson = (index) =>{
    let anotherPersonPayloadCopy = [...anotherPersonPayload]
    let result = anotherPersonPayloadCopy.filter((item, i) => i !== index)
    setAnotherPersonPayload(result)
  }

  let anotherPersonHandler = (e) => {
    //console.log("button clicked ",e)
    if(e === true) {
      setAnotherPerson(e)
    } else {
      setAnotherPersonPayload([]);
      setAnotherPerson(e)
      userInformation.accompanningPerson = [];
      
    }
    

  }

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
            <div className="row mt-5 mb-5">
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

                    <div className="col-md-12 mb-4">
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
                    </select>
                    {/* {isError && isError.conferenceMode && (
                      <p className="text-danger">{isError.conferenceMode}</p>
                    )} */}
                  </div>

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
                      <option value="delegate">Delegate</option>
                      <option value="For Students">
                        For Students
                      </option>
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
                        value="indian"
                        onChange={(e) => userInformationOnchangeHandler(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              { userInformation.participationType !== "" && userInformation.participationType !== "delegate" &&
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
            }
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="accompany-box d-flex pb-2">
                  <div className="accompany-box-1 pt-1">
                    <h6 className="form-label m-0">Accompanying Person :</h6>
                  </div>
                  <div className="accompany-box-2 d-flex">
                    <label className="ps-4 pe-1" for="yes">
                      Yes
                    </label>
                    <input type="radio" id="yes" name="add" value="yes" onClick={(e)=>anotherPersonHandler(true)} />
                    <label className="ps-4 pe-1" for="no">
                      No
                    </label>
                    <input type="radio" id="no" name="add" value="no" onClick={(e)=>anotherPersonHandler(false)} />
                  </div>               
                  </div>

                {/* {anotherPerson && (
                  
                )} */}
                
                {anotherPerson && anotherPersonPayload.length < 3 && (
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
                        onChange={(e)=>anotherPersonHandleChange(e)}
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
                        onChange={(e)=>anotherPersonHandleChange(e)}
                      />
                    </div>
                    
                    <div className="relation-delete-box ps-3">
                    <button className="create-btn" id="accompanningPerson" type="button" onClick={(e)=>addAccompanningPerson(e)}>
                    ADD
                  </button>
                    </div>
                  </div>

                )
                }

                {anotherPersonPayload.length > 0 && (anotherPersonPayload.map((item,index) =>{
                  return (<div className="exhibitor-relation d-flex mt-3">
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
                  
                  <div className="relation-delete-box ps-3">
                  <i class="fa-solid fa-trash-can ps-3" onClick={()=>deleteAccompanningPerson(index)}></i>
                  </div>
                </div>
                  )
                })
                )}
                
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

<div className="payment-section">
        <form>
          <div className="row">
            <div className="col-md-12">
              <PaymentInfo />
            </div>
          </div>
        </form>
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
            {qrInfo !== undefined ? <QRCodeSVG value={qrInfo} /> : ""}
          </div>
        </form>
      </div>

      
    </div>
  );
};
export default CreateForm;
