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
            <div className="col-md-3 col-6">
              <div className="box-1">
                <h2>Inca</h2>
                <p className="f1">
                  The Indian National Cartographic Association (INCA) has
                  evolved into one of the world's most prominent professional
                  associations of its kind.
                </p>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="col-md-3 col-6">
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
                  {/* <li>
                    <Link className="nav-link text-white ps-0" to="/">
                      Event Details
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/">
                      News & Articles
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-5">
              <div className="box-3">
                <h5>Other Pages</h5>
                <ul>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/">
                      Parent Community
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white ps-0" to="/">
                      Organiser
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-7">
              <div className="box-4">
                <div className="box-wrap">
                  <h5>OUR TECHNOLOGY PARTNER</h5>
                  <img src={giksfooterlogo} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="box-6">
                <span>PRIVACY POLICY</span>
                <span className="move">TERMS & CONDITION</span>
                <span>SUPPORT</span>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box-7">
                <span>Copyright © 2022 INCA. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
