import { Header } from "../../components/Header";
import * as ACTIONS from "./action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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

  const dispatch = useDispatch();
  const state = useSelector((state) => state.SponsorUserReducer);
  const [greet, setGreet] = useState();
  const { name, email, mobile, companyName, sponsorType, amount } = sponsorForm;

  useEffect(() => {
    if (state.sponsorUserSuccess) {
      // navigate("/dashboard/allRegistration");
      // dispatch(ACTIONS.resetToInitialState()); // it will empty the state
      // console.log("response",state.sponsorUserSuccess);
      emptySponsorForm();      
      setGreet(
        "Your details are registered for sponsor(provisionally) and will be reviewed by managing committie. Once confirmed, committie will communicate with you on your registered email. "
      );
      emptyMessage();
    }
  }, [state.sponsorUserSuccess]);

  const onSubmitSponsorForm = (e) => {
    e.preventDefault();    
    dispatch(ACTIONS.createSponsorUser(sponsorForm))    

  };

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
      sponsorType:"",
      amount:""
    })
  }

  const onInputChange = (e) => {
    let sponsorFormCopy = { ...sponsorForm };
    //console.log(e.target.value)
    if (e.target.value == "Strategic Sponsor") {
      sponsorFormCopy.amount = "₹7.5 lakhs (with free registration of 7 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
      //  setSponsorForm({ ...sponsorForm, [e.target.name]: e.target.value });
    } else if (e.target.value == "Platinium Sponsor") {
      sponsorFormCopy.amount = "₹5.0 lakhs (with free registration of 5 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;

      //  setSponsorForm({ ...sponsorForm, [e.target.name]: e.target.value });
    } else if (e.target.value == "Gold Sponsor") {
      sponsorFormCopy.valamountues = "₹3.5 lakhs (with free registration of 3 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;

      //  setSponsorForm({ ...sponsorForm, [e.target.name]: e.target.value });
    } else {
      sponsorFormCopy.amount = "₹2.5 lakhs (with free registration of 2 delegates & Logo display)";
      sponsorFormCopy[e.target.name] = e.target.value;
    }

    setSponsorForm(sponsorFormCopy);

    //setSponsorForm({ ...sponsorForm, [e.target.name]: e.target.value }); // using spread opretar for holding the previous values
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
                          className="form-control "
                          name="name"
                          value={name}
                          required
                          placeholder="Your Name.."
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="email"
                          className="form-control "
                          name="email"
                          value={email}
                          required
                          placeholder="Your Email.."
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>

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

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="text"
                          className="form-control "
                          maxLength="10"
                          name="companyName"
                          value={companyName}
                          required
                          placeholder="Your Company Name.."
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="sponsorType"
                        required
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
    </>
  );
};

export default SponsorForm;
