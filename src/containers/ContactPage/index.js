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
              <p className="common-para">
                Magnam corporis rem commodi dolore possimus varius justo litora
                ipsum suspendisse dignissimos. Odit, dolor, minima. Diam
                facilisis dignissimos metus, id delectus fuga doloribus qui,
                explicabo.{" "}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="boxes">
                <div className="box-1">
                  <i className="fa-solid fa-house-chimney"></i>
                  <h3 className="h2">CONFERENCE HALL</h3>
                  <p clclassNameass="common-para">
                    Riverside Building, County Hall London Eye, London, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="boxes">
                <div className="box-2">
                  <i className="fa-solid fa-file-lines"></i>
                  <h3 className="h2">TICKET BOOKING</h3>
                  <p className="common-para">
                    Phone No: 002-345-9870 Email: event@yourmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="boxes">
                <div className="box-1">
                  <i className="fa-solid fa-house-chimney"></i>
                  <h3 className="h2">EVENT SCHEDULES</h3>
                  <p className="common-para">
                    Sept 12 - 14 Sept 2021 Starts 09:00am to 06:00 pm
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
                    <div className="col-md-12">
                      <button className="common-btn">SUBMIT MESSAGE</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">             
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7614.448732548774!2d78.560421!3d17.401017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x34ec55b0dbdd28dd!2sIndian%20National%20Cartographic%20Association!5e0!3m2!1sen!2sin!4v1648559358781!5m2!1sen!2sin" width="450" height="300"  ></iframe>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
