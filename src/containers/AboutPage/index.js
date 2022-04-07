import React, { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../css/contact.css";
import "../../css/about.css";
import about1 from "../../images/about1.jpeg";
import about4 from "../../images/about4.jpeg";
import aboutsingle from "../../images/aboutsingle.png";

const About = () => {
  return (
    <>
      <Header></Header>
      <div class="common-redirect-banner">
        <div class="container">
          <div class="row ">
            <div class="col-md-12 text-center">
              <p class="common-redirect-banner-title">About Us</p>
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding contact-single1 about-single1">
        <div className="container">
          <div className="row pb-4 align-items-center">
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
            <div className="col-md-12">
              <div className="about-grand-event d-flex">
                <div className="grand-event-left-pic">
                  <img src={about1} className="img-fluid" alt="" />
                </div>
                <div className="grand-event-right-pic">
                  <img src={about4} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-md-4">
              <div className="boxes">
                <div className="box-1">
                  <i className="fa-solid fa-lightbulb"></i>
                  <h3 className="h2">WHAT WE DO?</h3>
                  <p className="common-para">
                    Habitant porta viverra voluptatum facilisi. Dolor mi sit!
                    Recusandae, nisl, habitasse justo architecto viverra volupt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxes">
                <div className="box-2">
                  <i className="fa-solid fa-user-plus"></i>
                  <h3 className="h2">WHAT WE ARE?</h3>
                  <p className="common-para">
                    Habitant porta viverra voluptatum facilisi. Dolor mi sit!
                    Recusandae, nisl, habitasse justo architecto viverra volupt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxes">
                <div className="box-1">
                  <i className="fa-solid fa-rocket"></i>
                  <h3 className="h2">OUR AIM & MISSION</h3>
                  <p className="common-para">
                    Habitant porta viverra voluptatum facilisi. Dolor mi sit!
                    Recusandae, nisl, habitasse justo architecto viverra volupt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={aboutsingle} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p className="common-pre-heading">MISSION AND AIM</p>
              <h2 className="common-heading">ABOUT OUR WORKSHOP</h2>
              <p className="common-para">
                Consequat sociosqu sem officiis aute ridiculus repellat in
                aliquip at, metus sociosqu veritatis cubilia ac soluta? Faucibus
                ipsam, incidunt cras.
              </p>

              <div class="aim">
                <h3 class="h2">LEARN FROM THE BEST IN INDUSTRY</h3>
                <p class="common-para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reiciendis impedit doloribus dolorum nemo nesciunt magni
                  aperiam perspiciatis placeat maxime quo!
                </p>
              </div>

              <div class="aim">
                <h3 class="h2">LEARN FROM THE BEST IN INDUSTRY</h3>
                <p class="common-para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reiciendis impedit doloribus dolorum nemo nesciunt magni
                  aperiam perspiciatis placeat maxime quo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
