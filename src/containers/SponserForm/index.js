import { Header } from "../../components/Header";
import { useState } from "react";
import "../../css/sponser.css";

const SponsorForm = () => {
  const [sponsorForm, setSponsorForm] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    sponsor: "",
    values: "",
  });

  const [greet, setGreet] = useState();
  const { name, email, number, company, sponsor, values } = sponsorForm;

  const onSubmitForm = (e) => {
    e.preventDefault();
    setGreet(
      "Your details are registered for sponsor(provisionally) and will be reviewed by managing committie. Once confirmed, committie will communicate with you on your registered email. "
    );
    console.log(sponsorForm, "values");
    setSponsorForm({
      name: "",
      email: "",
      number: "",
      company: "",
      sponsor: "",
    });
    emptyMessage();
  };

  let emptyMessage = () => {
    setTimeout(() => {
      setGreet("");
    }, 10000);
  };

  const onInputChange = (e) => {
    let sponserFormCopy = { ...sponsorForm };
    //console.log(e.target.value)
    if (e.target.value == "Strategic Sponsor") {
      sponserFormCopy.values = "7.5 lakh";
      sponserFormCopy[e.target.name] = e.target.value;
      //  setSponsorForm({ ...sponsorForm, [e.target.name]: e.target.value });
    } else if (e.target.value == "Platinium Sponsor") {
      sponserFormCopy.values = "5lakh";
      sponserFormCopy[e.target.name] = e.target.value;

      //  setSponsorForm({ ...sponsorForm, [e.target.name]: e.target.value });
    } else if (e.target.value == "Gold Sponsor") {
      sponserFormCopy.values = "3.5lakh";
      sponserFormCopy[e.target.name] = e.target.value;

      //  setSponsorForm({ ...sponsorForm, [e.target.name]: e.target.value });
    } else {
      sponserFormCopy.values = "2.5lakh";
      sponserFormCopy[e.target.name] = e.target.value;
    }

    setSponsorForm(sponserFormCopy);

    //setSponsorForm({ ...sponsorForm, [e.target.name]: e.target.value }); // using spread opretar for holding the previous values
  };

  return (
    <>
      <Header />
      <section className="sponser-form register-form">
        <form className="submit-form  pt-0" onSubmit={(e) => onSubmitForm(e)}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto form-wrapper-1">
                <div className="row actual-form-1">
                  <div className="col-md-12">
                    <div className="rgstr">
                      <p className="common-form-heading ">Become A Sponser</p>
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
                          className="form-control "
                          maxLength="10"
                          name="number"
                          value={number}
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
                          name="company"
                          value={company}
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
                        name="sponsor"
                        required
                        value={sponsor}
                        onChange={(e) => onInputChange(e)}
                      >
                        <option>Sponsorship Types</option>
                        <option value="Strategic Sponsor">
                          Strategic Sponsor
                        </option>
                        <option value="Platinium Sponsor">
                          Platinium Sponsor
                        </option>
                        <option value="Gold Sponsor">Gold Sponsor</option>
                        <option value="Silver Sponsor">Silver Sponsor</option>
                      </select>
                    </div>
                  </div>

                  {sponsorForm.sponsor !== "" && (
                    <>
                      <div className="col-md-12">
                        <div className="form-wrap">
                          <div className="input-wrap">
                            <input
                              type="text"
                              className="form-control "
                              name="values"
                              value={values}
                              readOnly
                              //  onChange={(e) => onInputChange(e)}
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
