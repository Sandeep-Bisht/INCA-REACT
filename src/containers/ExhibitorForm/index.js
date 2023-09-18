import React, {useEffect, useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";
import { Header } from '../../components/Header';
import axios from "axios"
import "../../css/sponsor.css";
import { baseUrl } from '../../utils';
import Captcha from '../Captcha';

function ExhibitorForm() {

  const errorObj = {
    name: "",
    email: "",
    companyName: "",
    exhibitorType: "",
    amount: "",
  };
  const [exhibitorPayload, setExhibitorPayload] = useState({
    name: "",
    email: "",
    companyName: "",
    exhibitorType: "",
    amount: "",
    isError: errorObj,
  })

  const { name, email, companyName, exhibitorType, amount, isError } = exhibitorPayload;
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [verified, setVerified] = useState(false);

  // let exibitionOnChangeHandler = (e) => {
  //     let exhibitorPayloadCopy = {...exhibitorPayload}
  //     exhibitorPayloadCopy[e.target.name] = e.target.value
  //     setExhibitorPayload(exhibitorPayloadCopy)
  // }

  let phoneNumberInputHandler = (mobile) => {
    setMobile(mobile);
  };

  let saveExhibitorFormData = async(e) => {
    setLoading(true)
    e.preventDefault()
    checkValidation();
    if (validateForm()) {
    exhibitorPayload.mobile = mobile;
    // console.log("before api ", exhibitorPayload)
    delete exhibitorPayload.isError;
    // console.log("exhibitorPayload exhibitorPayload", exhibitorPayload)
    let url = `${baseUrl}exhibitor`
        try {
          let response = await axios.post(url, exhibitorPayload);
          setMessage(response.data.message)
          setLoading(false)
        } catch (error) {
          setLoading(false)
        }
    }
  }

  const regExp = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const nameRegExp = RegExp(/^[A-Za-z ]+$/);
  const phoneRegExp = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  );

  const onInputChange = (e) => {
    // const { name, email, mobile, companyName, exhibitorType, amount } = e.target;
        let exhibitorPayloadCopy = { ...exhibitorPayload };
    if (e.target.value == "One stall") {
      exhibitorPayloadCopy.amount =
        "Rs. 1 lakh + 18% GST";
        exhibitorPayloadCopy[e.target.name] = e.target.value;
    } else if (e.target.value == "Two stalls") {
      exhibitorPayloadCopy.amount =
        "Rs. 1.75 lakh + 18% GST";
        exhibitorPayloadCopy[e.target.name] = e.target.value;
    }  else {
      exhibitorPayloadCopy.amount =
        "Rs. 2.5 lakh + 18% GST";
        exhibitorPayloadCopy[e.target.name] = e.target.value;
    }

    const { name, value } = e.target;
    exhibitorPayloadCopy[name] = value;
    setExhibitorPayload(exhibitorPayloadCopy);
    if (e.target.name == "email") {
      exhibitorPayloadCopy[e.target.name] = e.target.value.toLowerCase();
    }
    switch (name) {
      case "name":
        exhibitorPayloadCopy.isError.name = nameRegExp.test(value)
          ? ""
          : "Name should be in correct form";

          setExhibitorPayload(exhibitorPayloadCopy);
        break;

      case "email":
        exhibitorPayloadCopy.isError.email = regExp.test(value)
          ? ""
          : "Email address is invalid";
          setExhibitorPayload(exhibitorPayloadCopy);
        break;

      case "mobile":
        exhibitorPayloadCopy.isError.mobile = phoneRegExp.test(value)
          ? ""
          : "Mobile Number  is invalid";
          setExhibitorPayload(exhibitorPayloadCopy);
        break;
        case "companyName":
          exhibitorPayloadCopy.isError.companyName =
            value.length < 0 ? "Company Name is Required " : "";
            
            setExhibitorPayload(exhibitorPayloadCopy);
          break;

          case "exhibitorType":
            exhibitorPayloadCopy.isError.exhibitorType =
          value.length < 0 ? "Sponsor Type is Required " : "";
          
          setExhibitorPayload(exhibitorPayloadCopy);
        break;

      default:
        break;
    }

    setExhibitorPayload(exhibitorPayloadCopy);
  };

  const checkValidation = () => {
    
    let exhibitorPayloadCopy = { ...exhibitorPayload };
    Object.keys(exhibitorPayloadCopy).map((item) => {
      switch (item) {
        case "name":
          exhibitorPayloadCopy.isError.name = exhibitorPayloadCopy.name
            ? ""
            : "Field is Required";
          break;

        // case "phoneNumber":
        //   userInformationCopy.isError.phoneNumber =
        //     userInformationCopy.phoneNumber ? "" : " Field is required";
        //   break;
        case "email":
          exhibitorPayloadCopy.isError.email = exhibitorPayloadCopy.email
            ? ""
            : "Field is required";
          break;

        case "companyName":
          exhibitorPayloadCopy.isError.companyName = exhibitorPayloadCopy.companyName
            ? ""
            : "Field is Required";
          break;

        case "sponsorType":
          exhibitorPayloadCopy.isError.exhibitorType = exhibitorPayloadCopy.exhibitorType
            ? ""
            : "Field is Required";
          break;

        default:
          break;
      }
    });

    setExhibitorPayload(exhibitorPayloadCopy);
  };

  const validateForm = () => {
    let formIsValid = true;

    if (!exhibitorPayload?.name) {
      formIsValid = false;
    }
    // if (!userInformation?.phoneNumber) {
    //   formIsValid = false;
    // }

    if (!exhibitorPayload?.email) {
      formIsValid = false;
    } else if (typeof exhibitorPayload?.email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(exhibitorPayload?.email)) {
        formIsValid = false;
      }

      if (!exhibitorPayload?.companyName) {
        formIsValid = false;
      }

      if (!exhibitorPayload?.exhibitorType) {
        formIsValid = false;
      }
    }

    return formIsValid;
  };

  


  return (
    <>
    <Header/>
     <section className="sponsor-form register-form">
        <form onSubmit={(e) => saveExhibitorFormData(e)}
          className="submit-form  pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto form-wrapper-1">
                <div className="row actual-form-1">
                  <div className="col-md-12">
                    <div className="rgstr">
                      <p className="common-form-heading ">Become A Exhibitor</p>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="text" 
                          className={
                            isError && isError.name.length > 0
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          name="name"
                          value={name}
                          onChange={(e) => onInputChange(e)}
                          placeholder="Your Name.."
                          />
                           {isError && isError.name && (
                  <p className="text-danger">{isError.name}</p>
                )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="email"
                          className={
                            isError && isError.email.length > 0
                              ? "is-invalid form-control"
                              : "form-control"
                          } 
                          name="email"
                          value={email}
                          onChange={(e) => onInputChange(e)}
                          placeholder="Your Email.."
                          />
                           {isError && isError.email && (
                  <p className="text-danger">{isError.email}</p>
                )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                      <PhoneInput
                      country={"in"}
                      value={mobile}
                      onChange={(phone) => phoneNumberInputHandler(phone)}
                      className="country-flag-input"
                      />

                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="text"
                          className={
                            isError && isError.companyName.length > 0
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          value={companyName}
                          name="companyName"
                          placeholder="Your Company Name.."
                          onChange={(e) => onInputChange(e)}
                        />
                        {isError && isError.companyName && (
                  <p className="text-danger">{isError.companyName}</p>
                )}
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                      <div className='asterisk-exhibitor'>
                          </div>
                        <input
                          type="text"  placeholder="Exhibitor Fee" value={`${exhibitorPayload?.exhibitionFee}`}/>
                          
                      </div>
                    </div>
                  </div> */}
                   <div className="col-md-12">
                    <div className="form-wrap">
                      <select
                        className={
                          isError && isError.exhibitorType.length > 0
                            ? "is-invalid form-control"
                            : "form-select"
                        }
                        aria-label="Default select example"
                        name="exhibitorType"
                        value={exhibitorType}
                        onChange={(e) => onInputChange(e)}
                      >
                        <option defaultValue hidden>
                          Select Exhibitor Types
                        </option>
                        <option value="One stall">
                        3m X 3m (One stall) 
                        </option>
                        <option value="Two stalls">
                        6m X 3m (Two stalls) 
                        </option>
                        <option value="Three stalls">9m X 3m (Three stalls) </option>
                      </select>
                      {/* {isError && isError.exhibitorType && (
                  <p className="text-danger">{isError.exhibitorType}</p>
                )} */}
                    </div>
                  </div>


                  {exhibitorPayload.exhibitorType !== "" && (
                    <>
                      <div className="col-md-12">
                        <div className="form-wrap">
                          <div className="input-wrap">
                            <input
                              type="text"
                              className="form-control "
                              name="amount"
                              value={amount}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className='contact-text'>
                  <Captcha captchaLength={6} setVerified ={setVerified}/>
                  </div>

                  <div className="col-md-12">
                    <div className="btn-wrapper mt-3">
                      <button type="submit" className="form-submit" disabled={!verified}>
                    Submit
                      </button>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        {/* <div className="register-form"> */}
                        <div>
                         {message && <p className="text-success">{message}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default ExhibitorForm