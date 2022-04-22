import { Header } from "../../components/Header";
import * as ACTIONS from "./action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";

// import { minMaxLength, validEmail} from "validations"
import "../../css/sponsor.css";

const SponsorForm = () => {
  const [sponsorForm, setSponsorForm] = useState({
    name: "",
    email: "",
    mobile: "",
    companyName: "",
    sponsorType: "",
    amount: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  // const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SponsorUserReducer);
  const [greet, setGreet] = useState();
  const { name, email, mobile, companyName, sponsorType, amount } = sponsorForm;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      companyName: "",
      sponsorType: "",
      amount: "",
      accept: false,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.mobile) {
        errors.mobile = "Password is required.";
      }

      if (!data.companyName) {
        errors.companyName = "Name is required.";
      }

      if (!data.sponsorType) {
        errors.sponsorType = "Name is required.";
      }

      if (!data.accept) {
        errors.accept = "You need to agree to the terms and conditions.";
      }

      return errors;
    },

    onSubmit: (sponsorForm) => {
      setSponsorForm(sponsorForm);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  useEffect(() => {
    if (state.sponsorUserSuccess) {
      emptySponsorForm();
      setGreet(
        "Your details are registered for sponsor(provisionally) and will be reviewed by managing committiee. Once confirmed, committie will communicate with you on your registered email. "
      );
      emptyMessage();
    }
  }, [state.sponsorUserSuccess]);

  let emptyMessage = () => {
    setTimeout(() => {
      setGreet("");
    }, 10000);
  };

  const emptySponsorForm = () => {
    setSponsorForm({
      name: "",
      email: "",
      mobile: "",
      companyName: "",
      sponsorType: "",
      amount: "",
    });
  };
  const onSubmitSponsorForm = (e) => {
    e.preventDefault();
    // setFormErrors(validator(sponsorForm))
    setIsSubmit(true);
    dispatch(ACTIONS.createSponsorUser(sponsorForm));
  };

  // useEffect (() =>{
  //   if(Object.keys(formErrors).length === 0 && isSubmit) {

  //   }

  // },[formErrors])

  // const validator = (values) =>{
  //   const errors = {}
  //   const regex = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
  //   if(!values.name) {
  //     errors.name = "Name is Required!"
  //   }
  //   if(!values.email) {
  //     errors.email = "Email is Required!"
  //   }
  //   if(!values.mobile) {
  //     errors.mobile = "Mobile is Required!"
  //   }
  //   if(!values.companyName) {
  //     errors.companyName = "Company Name is Required!"
  //   }
  //   if(!values.sponsorType) {
  //     errors.sponsorType = "Sponsor Type is Required!"
  //   }
  //   return errors;

  // }

  const onInputChange = (e) => {
    // const { name, email, mobile, companyName, sponsorType, amount } = e.target;
    let sponsorFormCopy = { ...sponsorForm };
    if (e.target.value == "Strategic Sponsor") {
      sponsorFormCopy.amount =
        "₹7.5 lakhs (with free registration of 7 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
    } else if (e.target.value == "Platinium Sponsor") {
      sponsorFormCopy.amount =
        "₹5.0 lakhs (with free registration of 5 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
    } else if (e.target.value == "Gold Sponsor") {
      sponsorFormCopy.valamountues =
        "₹3.5 lakhs (with free registration of 3 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
    } else {
      sponsorFormCopy.amount =
        "₹2.5 lakhs (with free registration of 2 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
    }

    setSponsorForm(sponsorFormCopy);

    //setSponsorForm({ ...sponsorForm, [e.target.name]: e.target.value }); // using spread opretar for holding the previous values
  };

  return (
    <>
      <Header />

      <div className="form-demo">
        {/* <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog> */}

        <section className="sponsor-form register-form">
          <form
            className="submit-form  pt-0"
            onSubmit={formik.handleSubmit}
            // onSubmit={(e) => onSubmitSponsorForm(e)}
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
                          <span className="p-float-label">
                            <InputText
                              id="name"
                              name="name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              autoFocus
                              className={classNames({
                                "p-invalid":
                                  isFormFieldValid("name"),
                              })}
                            />
                            <label
                              htmlFor="name"
                              className={classNames({
                                "p-error ": isFormFieldValid("name"),
                              })}
                            >
                               Name*
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-wrap">
                        <div className="input-wrap">
                          <span className="p-float-label">
                            <InputText
                              id="email"
                              name="email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              autoFocus
                              className={classNames({
                                "p-invalid":
                                  isFormFieldValid("email"),
                              })}
                            />
                            <label
                              htmlFor="email"
                              className={classNames({
                                "p-error ": isFormFieldValid("email"),
                              })}
                            >
                              Email*
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>              

                   

                    <div className="col-md-12">
                      <div className="form-wrap">
                        <div className="input-wrap">
                          <span className="p-float-label">
                            <InputText
                              id="mobile"
                              name="mobile"
                              value={formik.values.mobile}
                              onChange={formik.handleChange}
                              autoFocus
                              className={classNames({
                                "p-invalid":
                                  isFormFieldValid("mobile"),
                              })}
                            />
                            <label
                              htmlFor="mobile"
                              className={classNames({
                                "p-error ": isFormFieldValid("mobile"),
                              })}
                            >
                              Mobile*
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-wrap">
                        <div className="input-wrap">
                          <span className="p-float-label">
                            <InputText
                              id="companyName"
                              name="companyName"
                              value={formik.values.companyName}
                              onChange={formik.handleChange}
                              autoFocus
                              className={classNames({
                                "p-invalid , form-control":
                                  isFormFieldValid("companyName"),
                              })}
                            />
                            <label
                              htmlFor="companyName"
                              className={classNames({
                                "p-error ": isFormFieldValid("companyName"),
                              })}
                            >
                              Company Name*
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-wrap">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="sponsorType"
                          value={sponsorType}
                          onChange={(e) => onInputChange(e)}
                        >
                          <option defaultValue hidden>
                            Select Sponsorship Types
                          </option>
                          <option amount="Strategic Sponsor">
                            Strategic Sponsor
                          </option>
                          <option amount="Platinium Sponsor">
                            Platinium Sponsor
                          </option>
                          <option amount="Gold Sponsor">Gold Sponsor</option>
                          <option amount="Silver Sponsor">
                            Silver Sponsor
                          </option>
                        </select>
                      </div>
                    </div>

                    <p style={{ color: "red" }}>{sponsorType}</p>

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
                          Submit
                        </button>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-wrap">
                        <div className="input-wrap">
                          <div className="register-form">
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
      </div>

      {/* <section className="sponsor-form register-form">
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
                          className="form-control "
                          name="name"
                          value={name}                          
                          placeholder="Your Name.."
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <p style={{color :"red"}}>{ name }</p>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="email"
                          className="form-control "
                          name="email"
                          value={email}
                          
                          placeholder="Your Email.."
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <p style={{color :"red"}}>{ email }</p>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          maxLength="12"
                          name="mobile"
                          value={mobile}
                          required                          
                          placeholder="Your Mobile Number.."
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <p style={{color :"red"}}>{ mobile }</p>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="text"
                          className="form-control"                          
                          name="companyName"
                          value={companyName}                          
                          placeholder="Your Company Name.."
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <p style={{color :"red"}}>{ companyName }</p>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="sponsorType"                        
                        value={sponsorType}
                        onChange={(e) => onInputChange(e)}
                      >
                        <option defaultValue hidden>Select Sponsorship Types</option>
                        <option amount="Strategic Sponsor">
                          Strategic Sponsor
                        </option>
                        <option amount="Platinium Sponsor">
                          Platinium Sponsor
                        </option>
                        <option amount="Gold Sponsor">Gold Sponsor</option>
                        <option amount="Silver Sponsor">Silver Sponsor</option>
                      </select>
                    </div>
                  </div>

                  <p style={{color :"red"}}>{ sponsorType}</p>

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
                        Submit
                      </button>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <div className="register-form">
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
      </section> */}
    </>
  );
};

export default SponsorForm;
