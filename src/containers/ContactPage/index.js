import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../css/contact.css";
import {useForm} from "react-hook-form";
import Captcha from "../Captcha";
import address from "../../images/rrsc_addres.png"
import axios from "axios";
import { baseUrl, GetHeaders } from "../../utils";


const Contact = () => {
  const [verified, setVerified] = useState(false);
  const [setContactMsg, setSetContactMsg] = useState()
  const {
    register, 
    formState:{errors},
    handleSubmit,
    reset
  }
     =useForm({
      firstName:"",
      email:"",
      phoneNumber:"",
      message:"",
      subject:"",
      
     });

  const onSubmit = async (data) =>{
    // doSubmit(data)
    console.log(data, "data")
    let url = `${baseUrl}contact-us`

    try {    
      const response = await axios.post(url, data, GetHeaders());
      if(response && response?.data?.emailSendStatus){
        console.log(response.data, "responseee");
        reset()
        setSetContactMsg(response?.data?.message)
        removeContactMsg()
        
      }else{
        reset();
        setSetContactMsg(response?.data?.message)
        removeContactMsg()
        
      }
    } catch (error) {
       console.log(error)
    }
  }

  const removeContactMsg = () => {
    setTimeout(()=> {
      setSetContactMsg("")
    }, 3000)
  }
 
  return (
    <>
      <Header></Header>
      <div className="common-redirect-banner">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center">
              <p className="common-redirect-banner-title">Contact US</p>
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding contact-single1">
        <div className="container">
          <div className="row align-items-center pb-4 mb-3">
            <div className="col-md-6">
              <p className="common-pre-heading">GET IN TOUCH</p>
              <h2 className="common-heading">
                CONTACT US FOR FURTHER INFORMATION!
              </h2>
            </div>
            <div className="col-md-6">
              {/* <p className="common-para">
                Magnam corporis rem commodi dolore possimus varius justo litora
                ipsum suspendisse dignissimos. Odit, dolor, minima. Diam
                facilisis dignissimos metus, id delectus fuga doloribus qui,
                explicabo.{" "}
              </p> */}
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="boxes">
                <div className="box-1">
              
                  <i className="fa-solid fa-house-chimney"></i>
                  
                  <h3 className="h2">ADDRESS</h3>
                  <p className="common-para">
                  <b>{" "} <h5 className="right-text">Regional Remote Sensing Centre (RRSC)-West</h5> National Remote
                      Sensing Centre (NRSC)<br/>
                      Indian Space Research organisation (ISRO)<br/>
                      Bypass Road, Sector 9<br/> Kudi Bhagtasani Housing Board (KBHB) </b> {" "}<br />
                     <b>Jodhpur – 342005,</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="boxes">
                <div className="box-2">
                  <i className="fa-solid fa-file-lines"></i>
                  <h3 className="h2">CONTACT</h3>
                  <p className="common-para">
                    <b>Phone No: +91 291 2796395 </b><br /> <b>Email: info@43inca.org</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="boxes">
                <div className="box-1">
                  <i className="fa-solid fa-house-chimney"></i>
                  <h3 className="h2">EVENT DETAILS</h3>
                  <p className="common-para">
                    <b>06 November - 08 November 2023 Starts 09:00 am to 06:00 pm</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-single2 section-padding pt-3">
        <div className="container">
          <div className="row">
          
            <div className="col-md-7">
              <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-8 mx-0">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="text"
                          name="firstName"
                          placeholder="Your Name.."
                         {...register("firstName", { required: true })}
                        />
                        {errors.firstName  && <p className="text-danger">First name is required</p>}

                      </div>

                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="email"
                          name="email"
                          placeholder="Your Email.."
                          {...register("email", { required: "Email Address is required" })} 

                        />
                        {errors.email  && <p className="text-danger">email is required</p>}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="number"
                          placeholder="Your Number.."
                          {...register("phoneNumber", { required: true })}
                          />
                          {errors.phoneNumber  && <p className="text-danger">Phone Number is required</p>}
                        
                      </div>

                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="text"
                          placeholder="Your Subject.."
                          {...register("subject", { required: true })}
                          />
                          {errors.subject  && <p className="text-danger">This feild is required</p>}
                        
                      </div>
                      
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <textarea
                          className="form-movement"
                          cols="30"
                          rows="7"
                          placeholder="Enter Message.."
                        ></textarea>
                      </div>
                    </div>

                    {/* <div className="col mt-3">
                       <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
                   </div> */}
                   <div className="pb-2">
                    <Captcha captchaLength={6} setVerified ={setVerified}/>
                    </div>

                    <div className="row mt-2">
                      <div className="col-md-12 pb-3">
                        <button disabled={!verified} className="common-btn">SUBMIT MESSAGE</button>
                      </div>
                    </div>

                    <div className="mt-2 mb-2">
                        <p className="text-dark">{setContactMsg}</p>
                      </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56474.94761311179!2d72.97284353692041!3d26.230592923325176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418bb0afd5bef9%3A0xaea174d001879fea!2sRegional%20Remote%20Sensing%20Centre%20-%20West!5e0!3m2!1sen!2sin!4v1689144860809!5m2!1sen!2sin"
                width="100%"
                height="430" className="pt-3"
              ></iframe>
            </div>
            <div className="mt-3">
              <img src={address} className="img-fluid" width="30%" height="60"

              />
            </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default Contact;
