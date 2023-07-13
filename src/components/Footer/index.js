import React from "react";
import "../../css/footer.css";
import giksfooterlogo from "../../images/giks-footer-logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="foot-wrapper">
        <div className="container">
          <div className="row brdr">
            <div className="col-md-4 col-6">
              <div className="box-1">
                <h2>INCA</h2>
                <p className="f1">
                  The Indian National Cartographic Association (INCA) has
                  evolved into one of the world's most prominent professional
                  associations of its kind.
                </p>               
              </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center col-6">
              <div className="box-2">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <a className="nav-link text-white ps-0" target="_blank" href="https://www.incaindia.org/">
                      INCA Official Website
                    </a>
                  </li>
                  <li>
                    <a className="nav-link text-white ps-0" target="_blank" href = "https://www.nrsc.gov.in/aboutus_campus_nrscrc/rrsc_west?language_content_entity=en">
                      RRSC Official Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 d-flex justify-content-end col-5">
              <div className="box-3">
                <h5>Other Pages</h5>
                <ul>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/register">
                      Delegate Registration
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/sponsorForm">
                      Sponsor Registration
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/exhibitor">
                      Exhibitor Registration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 d-none col-7">
              <div className="box-4">
                <div className="box-wrap">
                  <h5>OUR TECHNOLOGY PARTNER</h5>
                  <img src={giksfooterlogo} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
           <div className="col-md-12">
              <div className="box-7">
                <div className="giks-copyright d-flex pe-4">
                <img src={giksfooterlogo} alt="" className="img-fluid" />
                    <p>Our Technology Partner</p>
                    </div>
                 <div className="inca-copyright">
                <p>Copyright © 2023 INCA. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
