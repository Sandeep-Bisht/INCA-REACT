import React from 'react'
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";
import { Header } from '../../components/Header';
import "../../css/sponsor.css";

function ExhibitorForm() {
  return (
    <>
    <Header/>
     <section className="sponsor-form register-form">
        <form
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
                          type="text" name="name" placeholder="Your Name.."/>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="email" name="email"
                          
                          placeholder="Your Email.."/>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                      <PhoneInput
                      country={"in"}
                      
                      className="country-flag-input"/>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="text"
                          name="companyName"
                          
                          placeholder="Your Company Name.."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                      <div className='asterisk-exhibitor'>
                          </div>
                        <input
                          type="text" name="name" placeholder="Exhibitor Fee" value={`1,00,000`}/>
                          
                      </div>
                    </div>
                  </div>

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
                        {/* <div className="register-form"> */}
                        <div>
                          <p className="text-success"></p>
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