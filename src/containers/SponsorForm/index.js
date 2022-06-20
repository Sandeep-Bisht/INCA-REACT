import { Header } from "../../components/Header";
import * as ACTIONS from "./action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../css/sponsor.css";
import { Navigate, useNavigate } from "react-router-dom";

const errorObj = {
  name: "",
  email: "",
  companyName: "",
  sponsorType: "",
  amount: "",
};
const SponsorForm = () => {
  const [sponsorForm, setSponsorForm] = useState({
    name: "",
    email: "",
    companyName: "",
    sponsorType: "",
    amount: "",
    isError: errorObj,
  });

  const [loginLoder, setLoginLoder] = useState(false);
  const navigate = useNavigate()
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SponsorUserReducer);
  const [greet, setGreet] = useState(undefined);
  const { name, email, companyName, sponsorType, amount } = sponsorForm;

  useEffect(() => {
    if (state.sponsorUserSuccess) {
      setLoginLoder(false);
      emptySponsorForm();
      setGreet(
        "Your details are registered for sponsor(provisionally) and will be reviewed by managing committiee. Once confirmed, committie will communicate with you on your registered email. "
      );      
      emptyMessage();
      
     
    }
  }, [state.sponsorUserSuccess]);

  let emptyMessage = () => {
    setTimeout(() => {
      setGreet(undefined);
      //navigate("/");
    }, 5000);
    
  };
  // useEffect(() => {
  //   if(greet != ""){
  //     setGreet(undefined)
  //     //navigate("/");
  //   }
  // }, [])



  const emptySponsorForm = () => {
    setMobile('+91')
    setSponsorForm({
      name: "",
      email: "",
      companyName: "",
      sponsorType: "",
      amount: "",
      isError : errorObj
    });
  };

  const regExp = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const nameRegExp = RegExp(/^[A-Za-z ]+$/);
  const phoneRegExp = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  );
  const { isError } = sponsorForm;

  const validateForm = () => {
    let formIsValid = true;

    if (!sponsorForm?.name) {
      formIsValid = false;
    }
    // if (!userInformation?.phoneNumber) {
    //   formIsValid = false;
    // }

    if (!sponsorForm?.email) {
      formIsValid = false;
    } else if (typeof sponsorForm?.email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(sponsorForm?.email)) {
        formIsValid = false;
      }

      if (!sponsorForm?.companyName) {
        formIsValid = false;
      }

      if (!sponsorForm?.sponsorType) {
        formIsValid = false;
      }
    }

    return formIsValid;
  };

  const checkValidation = () => {
    
    let sponsorFormCopy = { ...sponsorForm };
    Object.keys(sponsorFormCopy).map((item) => {
      switch (item) {
        case "name":
          sponsorFormCopy.isError.name = sponsorFormCopy.name
            ? ""
            : "Field is Required";
          break;

        // case "phoneNumber":
        //   userInformationCopy.isError.phoneNumber =
        //     userInformationCopy.phoneNumber ? "" : " Field is required";
        //   break;
        case "email":
          sponsorFormCopy.isError.email = sponsorFormCopy.email
            ? ""
            : "Field is required";
          break;

        case "companyName":
          sponsorFormCopy.isError.companyName = sponsorFormCopy.companyName
            ? ""
            : "Field is Required";
          break;

        case "sponsorType":
          sponsorFormCopy.isError.sponsorType = sponsorFormCopy.sponsorType
            ? ""
            : "Field is Required";
          break;

        default:
          break;
      }
    });

    setSponsorForm(sponsorFormCopy);
  };

  const onSubmitSponsorForm = (e) => {
    e.preventDefault();
    checkValidation();
    if (validateForm()) {
      sponsorForm.mobile = mobile;
      delete sponsorForm.isError;
      setLoginLoder(true);
      
      dispatch(ACTIONS.createSponsorUser(sponsorForm));
    }
  };

  const onInputChange = (e) => {
    // const { name, email, mobile, companyName, sponsorType, amount } = e.target;
    let sponsorFormCopy = { ...sponsorForm };
    if (e.target.value == "Strategic Sponsor") {
      sponsorFormCopy.amount =
        "₹7.5 lakhs (with free registration of 7 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
    } else if (e.target.value == "Platinum Sponsor") {
      sponsorFormCopy.amount =
        "₹5.0 lakhs (with free registration of 5 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
    } else if (e.target.value == "Gold Sponsor") {
      sponsorFormCopy.amount =
        "₹3.5 lakhs (with free registration of 3 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
    } else {
      sponsorFormCopy.amount =
        "₹2.5 lakhs (with free registration of 2 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
    }

    const { name, value } = e.target;
    sponsorFormCopy[name] = value;
    setSponsorForm(sponsorFormCopy);
    if (e.target.name == "email") {
      sponsorFormCopy[e.target.name] = e.target.value.toLowerCase();
    }
    switch (name) {
      case "name":
        sponsorFormCopy.isError.name = nameRegExp.test(value)
          ? ""
          : "Name should be in correct form";

          setSponsorForm(sponsorFormCopy);
        break;

      case "email":
        sponsorFormCopy.isError.email = regExp.test(value)
          ? ""
          : "Email address is invalid";
          setSponsorForm(sponsorFormCopy);
        break;

      case "mobile":
        sponsorFormCopy.isError.mobile = phoneRegExp.test(value)
          ? ""
          : "Mobile Number  is invalid";
          setSponsorForm(sponsorFormCopy);
        break;
        case "companyName":
          sponsorFormCopy.isError.companyName =
            value.length < 0 ? "Company Name is Required " : "";
            
            setSponsorForm(sponsorFormCopy);
          break;

          case "sponsorType":
            sponsorFormCopy.isError.sponsorType =
          value.length < 0 ? "Sponsor Type is Required " : "";
          
          setSponsorForm(sponsorFormCopy);
        break;

      default:
        break;
    }

    setSponsorForm(sponsorFormCopy);
  };

  let phoneNumberInputHandler = (mobile) => {
    setMobile(mobile);
  };
  
  
  return (
    <>
      <Header />

      <section className="sponsor-form register-form">
        <form
          className="submit-form  pt-0"
          onSubmit={(e) => onSubmitSponsorForm(e)}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto form-wrapper-1">
                <div className="row actual-form-1">
                  <div className="col-md-12">
                    <div className="rgstr">
                      <p className="common-form-heading ">Become A Sponsor</p>
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
                          placeholder="Your Name.."
                          onChange={(e) => onInputChange(e)}
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
                          placeholder="Your Email.."
                          onChange={(e) => onInputChange(e)}
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
                      className="country-flag-input"
                      onChange={(phone) => phoneNumberInputHandler(phone)}
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
                          name="companyName"
                          value={companyName}
                          placeholder="Your Company Name.."
                          onChange={(e) => onInputChange(e)}
                        />
                        {isError && isError.companyName && (
                  <p className="text-danger">{isError.companyName}</p>
                )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <select
                        className={
                          isError && isError.sponsorType.length > 0
                            ? "is-invalid form-control"
                            : "form-select"
                        }
                        aria-label="Default select example"
                        name="sponsorType"
                        value={sponsorType}
                        onChange={(e) => onInputChange(e)}
                      >
                        <option defaultValue hidden>
                          Select Sponsorship Types
                        </option>
                        <option value="Strategic Sponsor">
                          Strategic Sponsor
                        </option>
                        <option value="Platinum Sponsor">
                          Platinum Sponsor
                        </option>
                        <option value="Gold Sponsor">Gold Sponsor</option>
                        <option value="Silver Sponsor">Silver Sponsor</option>
                      </select>
                      {isError && isError.sponsorType && (
                  <p className="text-danger">{isError.sponsorType}</p>
                )}
                    </div>
                  </div>

                  {sponsorForm.sponsorType !== "" && (
                    <>
                      <div className="col-md-12">
                        <div className="form-wrap">
                          <div className="input-wrap">
                            <textarea
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

                  <div className="col-md-12">
                    <div className="btn-wrapper mt-3">
                      <button type="submit" className="form-submit">
                      {loginLoder ? "verifying" : "Submit"}
                      </button>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        {/* <div className="register-form"> */}
                        <div>
                          <p className="text-success">{greet}</p>
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
  );
};

export default SponsorForm;
