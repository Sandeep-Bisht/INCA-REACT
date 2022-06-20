import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import axios from 'axios';
import "react-phone-input-2/lib/style.css";
import { QRCodeSVG } from 'qrcode.react';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
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
  conferenceMode: "",
  participationType: "",
  title: "",
  registrationCategory: "",
  //registrationFee: "",
  //transactionId: "",
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
  const [show , setShow] = useState(false)
  const [value, setValue] = useState(undefined);
  const [systemRole, setSystemRole] = useState('')
  const state = useSelector((state) => state.RegisteredUserInfoReducer);  

  const [phoneNumber, setPhoneNumber] = useState('')
  const [loggedInUser, setLoggedInUser] = useState(false)
  let [qrInfo, setQrInfo] = useState(undefined)  

  let dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      
      let logedInId = decodedToken.user.user._id;
      if (decodedToken.user.user.role !== "admin") {
        setLoggedInUser(true)
        let userInformationCopy = { ...userInformation };
        userInformationCopy.name = decodedToken.user.user.userName;
        userInformationCopy.email = decodedToken.user.user.userEmail;
        userInformationCopy.userId = decodedToken.user.user._id;
        setUserInformation(userInformationCopy);
        setPhoneNumber(decodedToken.user.user.mobileNumber);
        dispatch(ACTIONS.getLoggedInUser(logedInId));
      }
      else {
        setSystemRole(decodedToken.user.user.role )
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
          setIsHidden(true);
          setMessage("Your information saved successfully");
        } else {
          if(state.saveRegisterUserInfoSuccess.message === "User is already registred with this mail."){
            setMessage(state.saveRegisterUserInfoSuccess.message)
          }
         else {          
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
        conferenceMode: "",
        participationType: "",
        title: "",        
        registrationCategory: "",
        registrationFee: "",
        transactionId: "",
    
    }
      userId = location.state._id;
      setUserInformation(location.state);
      setPhoneNumber(location.state.phoneNumber.toString());
      setIsDisabled(false);
      setMode(location.state.mode);
    }
  }, []);

 

  const getRegistrationFee = () => {
    let userInformationCopy = { ...userInformation };
    if (
      userInformationCopy.conferenceMode === "online" &&
      userInformationCopy.registrationCategory ==="Life Members"
    ) {
      return "1000";
    }
    if (
      userInformationCopy.conferenceMode === "offline" &&
      userInformationCopy.registrationCategory === "Life Members"
    ) {
      return "2500";
    }

    if (
      userInformationCopy.conferenceMode === "online" &&
      userInformationCopy.registrationCategory === "For Students (Indian) "
    ) {
      return "500";
    }
    if (
      userInformationCopy.conferenceMode === "offline" &&
      userInformationCopy.registrationCategory === "For Students (Indian) "
    ) {
      return "1500";
    }

    if (
      userInformationCopy.conferenceMode === "online" &&
      userInformationCopy.registrationCategory ===
      "Others (participants/delegates/members)"
    ) {
      return "1500";
    }
    if (
      userInformationCopy.conferenceMode === "offline" &&
      userInformationCopy.registrationCategory ===
      "Others (participants/delegates/members)"
    ) {
      return "3000";
    }
  };

  const buttonState = {
           button: 0
            };
  const regExp = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const nameRegExp = RegExp(/^[A-Za-z ]+$/);
  const phoneRegExp = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
  // const pinCode = RegExp();
  const { isError } = userInformation;

  const userInformationOnchangeHandler = (e) => {
    let userInformationCopy = { ...userInformation };
    const { id, value } = e.target;
    // if(e.target.id == "country"){
    //   let res = value.split(' ')
    //    userInformationCopy[id] = res[1];
    //    setPhoneNumber(res[0])
    // }  

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
      case "conferenceMode":
        userInformationCopy.isError.conferenceMode =
          value.length < 0 ? "Conference Mode is Required" : "";
        setUserInformation(userInformationCopy);
        break;
      case "participationType":
        userInformationCopy.isError.participationType =
          value.length < 0 ? "Participation Type is Required" : "";
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

    if (!userInformation?.conferenceMode) {
      formIsValid = false;
    }

    if (!userInformation?.registrationCategory) {
      formIsValid = false;
    }
    

    return formIsValid;
  };

  let submitRegisterUserInformation = (e) => {
    e.preventDefault();   
    if(systemRole == "admin"){
      userInformation.systemRole = systemRole
    }
    if (buttonState.button == 1) {          
      checkValidation();
    if (validateForm()) {
      userInformation.registrationFee = value;
      userInformation.phoneNumber = phoneNumber;
      delete userInformation.isError;
     dispatch(ACTIONS.saveRegisterdUserData(userInformation));
    }
    else{
      let userInformationCopy = {...userInformation}
      //userInformationCopy.isError.email = "Email is invalid"
      setUserInformation(userInformationCopy)
    }
    }
    if (buttonState.button == 2) {
      checkValidation();
      if (validateForm()) {
       // makePayment();       
      }
      else{
        let userInformationCopy = {...userInformation}
      //userInformationCopy.isError.email = "Email is invalid"
      setUserInformation(userInformationCopy)
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
        conferenceMode: "",
        participationType: "",
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
        case "conferenceMode":
          userInformationCopy.isError.conferenceMode =
            userInformationCopy.conferenceMode ? "" : " Field is required";
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
  
  }

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
    let url = "http://localhost:4801/api/payments"
    let data = await axios.post(url);
    
    
    var options = {
      key: "rzp_test_fXDarHzcgxICzG", // Enter the Key ID generated from the Dashboard
      name: "42 inca ",
      currency: data.currency,
      amount: 1500*100,
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
                  //disabled={isDisabled}
               disabled={loggedInUser && userInformation && userInformation.name}
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
                {/* {
                  isError  && isError.designation && <p className="text-danger">{isError.designation }</p>
                } */}
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
                {/* {
                  isError  && isError.affilation && <p className="text-danger">{isError.affilation }</p>
                } */}
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
                    <label htmlFor="InputPincode" className="form-label asterisk">
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
                    <label htmlFor="SelectCountry" className="form-label asterisk">
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
                       disabled={loggedInUser && userInformation && userInformation.email}
                      //disabled={isDisabled}
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
                      <option defaultValue hidden>
                        Please Select The Mode
                      </option>
                      {/* <option value="online">Online</option> */}
                      <option value="offline">Physical</option>
                    </select>
                    {isError && isError.conferenceMode && (
                      <p className="text-danger">{isError.conferenceMode}</p>
                    )}
                  </div>

            {/* Registration Category */}

            <div className="col-md-12">
                    <label htmlFor="SelectCategory" className="form-label asterisk">
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
                      <option value="For Students (Indian) ">For Students (Indian)</option>
                      <option value="Others (participants/delegates/members)">Others (participants/delegates/members)</option>
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
                      <option value="deligate">
                      Deligate
                      </option>
                      <option value="Research Paper Presentation">
                        Research Paper Presentation
                      </option>
                      <option value="Poster Presentation">
                        Poster Presentation
                      </option>
                      <option value="Both">Both</option>
                    </select>
                    {isError && isError.participationType && (
                      <p className="text-danger">{isError.participationType}</p>
                    )}
                  </div>
                  <div className="col-md-12">
                    {isDisabled && (
                      <>
                        <label htmlFor="InputFee" className="form-label">
                          Registration Fee
                        </label>
                        <input
                          disabled={isDisabled}
                          className="form-control"
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
                  className={
                    isError && isError.title.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                ></textarea>                
              </div>
            </div>            

            {message && <p className="text-danger">{message}</p>}

            <div className="row">
              <div className="col-md-12 text-end">
                <button className="mx-3" name="save" show value ="save" type="submit" onClick={() => (buttonState.button = 1) } hidden={isHidden}>
                  {location && location.state && location.state.mode === "edit"
                    ? "Update"
                    : "Save"}
                </button>

                <button type="submit" name="saveAndPay"  value= "saveAndPay" onClick={() => generateQr()}>Save & Pay</button>
              </div>
            </div>
           {  qrInfo !== undefined  ?  <QRCodeSVG value={qrInfo} /> : "" }
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateForm;
