import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import ISROlogo from "../../images/nrsc_logo.png";
import G20 from "../../images/G20_100_70.png";
import azadi from "../../images/azadi.png";

export const Header = () => {
  useEffect(() => {   
    
    let nav = document.querySelector(".header-wrapper");
    let link = document.querySelector(".nav-link");
    window.onscroll = function () {
      
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
        link.classList.add("scrolled-link");
      } else {
        nav.classList.remove("header-scrolled");
        link.classList.remove("scrolled-link");
      }
    };
  }, []);

  return (
    <>
      <header className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand p-0 m-0" href="/">
                  <img src={logo} className="img-fluid" />
                  {/* <span className="logo-text f2">Inca 2023</span> */}
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarNav"
                >
                  <ul className="navbar-nav menu-navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/importantdates">
                       Schedule
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Theme">
                        Theme
                      </a>
                    </li>
                    <li className="nav-item d-none">
                      <a className="nav-link" href="/sponsorship">
                        Sponsorship
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/register">
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-display-1">
                <a className="navbar-brand p-0 m-0" href="">
                  <img src={azadi} className="img-fluid" />
                </a>
                </div>
                <div className="nav-display-1">
                <a className="navbar-brand p-0 m-0" href="">
                  <img src={G20} className="img-fluid" />
                </a>
                </div>
                <div className="nav-display">
                <a className="navbar-brand p-0 m-0" href="">
                  <img src={ISROlogo} className="img-fluid" />
                </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
