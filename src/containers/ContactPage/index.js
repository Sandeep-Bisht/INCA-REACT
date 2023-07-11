import React, { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../css/contact.css";

const Contact = () => {
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
                  <b> Regional Remote Sensing Center-West National Remote Sensing Center(NRSC),ISRO </b> <br />
                       Jodhpur – 342005,
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
                    Phone No: +91 291 2796395 <br /> Email: info@43inca.org
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
                    06 November - 08 November 2023 Starts 09:00 am to 06:00 pm
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
            <div className="col-md-8">
              <form>
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="text"
                          placeholder="Your Name.."
                        />
                      </div>

                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="email"
                          placeholder="Your Email.."
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="number"
                          placeholder="Your Number.."
                        />
                      </div>

                      <div className="col-md-6">
                        <input
                          className="form-movement"
                          type="text"
                          placeholder="Your Subject.."
                        />
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
            <div className="col-md-4">             
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.16881580721!2d78.05518931445123!3d30.34615181121301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929d6271a7c35%3A0x2880aa511432cf59!2sNational%20Hydrographic%20Office!5e0!3m2!1sen!2sin!4v1652774657786!5m2!1sen!2sin"
                width="100%"
                height="300"
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
