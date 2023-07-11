import React, {useEffect, useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";
import { Header } from '../../components/Header';
import axios from "axios"
import "../../css/sponsor.css";
import { baseUrl } from '../../utils';

function ExhibitorForm() {
  const [exhibitorPayload, setExhibitorPayload] = useState(
    {
      exhibitionFee:"1,00,000",
      name:""
    }
  )
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  let exibitionOnChangeHandler = (e) => {
      let exhibitorPayloadCopy = {...exhibitorPayload}
      exhibitorPayloadCopy[e.target.name] = e.target.value
      setExhibitorPayload(exhibitorPayloadCopy)
  }

  let phoneNumberInputHandler = (mobile) => {
    setMobile(mobile);
  };

  let saveExhibitorFormData = async(e) => {
    setLoading(true)
    e.preventDefault()
    exhibitorPayload.mobile = mobile;
    let url = `${baseUrl}exhibitor`
        try {
          let response = await axios.post(url, exhibitorPayload);
          setMessage(response.data.message)
          setLoading(false)
        } catch (error) {
          setLoading(false)
        }
  }

  


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
                          name="name"
                          onChange={(e) => exibitionOnChangeHandler(e)}
                          placeholder="Your Name.."/>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="email" 
                          name="email"
                          onChange={(e) => exibitionOnChangeHandler(e)}
                          placeholder="Your Email.."/>
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
                          onChange={(e) => exibitionOnChangeHandler(e)}
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
                          type="text"  placeholder="Exhibitor Fee" value={`${exhibitorPayload.exhibitionFee}`}/>
                          
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