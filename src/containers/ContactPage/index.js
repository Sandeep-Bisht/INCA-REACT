import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../css/contact.css";
import {useForm} from "react-hook-form";


const Contact = () => {
  const {
    register, 
    formState:{errors},
    handleSubmit
  }
     =useForm({
      firstName:"",
      email:"",
      phoneNumber:"",
      subject:"",
      
     });

  const onSubmit =(data) =>{
    console.log(data)
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
                  <b> Regional Remote Sensing Center-West National Remote Sensing Center(NRSC), ISRO ISRO Complex, Bypass Road
                    Sector 9, Kudi Bhagtasani Housing Board (KBHB) </b> <br />
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
                        {errors.firstName === 'required' && <p>First name is required</p>}

                      </div>

                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="email"
                          name="email"
                          placeholder="Your Email.."
                          {...register("email", { required: "Email Address is required" })} 

                        />
                        {errors.email=='required' && <p>email is required</p>}
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
                          {errors.phoneNumber === 'required' && <p>Phone Number is required</p>}
                        
                      </div>

                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="text"
                          placeholder="Your Subject.."
                          {...register("subject", { required: true })}
                          />
                          {errors.subject === 'required' && <p>This feild is required</p>}
                        
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

                    <div className="row">
                      <div className="col-md-12 pb-3">
                        <button className="common-btn">SUBMIT MESSAGE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56474.94761311179!2d72.97284353692041!3d26.230592923325176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418bb0afd5bef9%3A0xaea174d001879fea!2sRegional%20Remote%20Sensing%20Centre%20-%20West!5e0!3m2!1sen!2sin!4v1689144860809!5m2!1sen!2sin"
                width="100%"
                height="430" className="pt-3"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default Contact;
