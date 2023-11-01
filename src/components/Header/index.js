import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import ISROlogo from "../../images/nrsc_logo.png";
import G20 from "../../images/G20_100_70.png";
import azadi from "../../images/azadi.png";
import jwt_decode from "jwt-decode";


export const Header = () => {

  let [token, setToken] = useState(undefined)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      setToken(decodedToken)
    }
  }, [])

  // useEffect(() => {   
    
  //   let nav = document.querySelector(".header-wrapper");
  //   let link = document.querySelector(".nav-link");
  //   window.onscroll = function () {
      
  //     if (document.documentElement.scrollTop > 20) {
  //       nav.classList.add("header-scrolled");
  //       link.classList.add("scrolled-link");
  //     } else {
  //       nav.classList.remove("header-scrolled");
  //       link.classList.remove("scrolled-link");
  //     }
  //   };
  // }, []);


  return (
    <>
      <header className="header-wrapper header-scrolled ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand p-0 m-0" to="/">
                  <img src={logo} className="img-fluid" />
                  {/* <span className="logo-text f2">Inca 2023</span> */}
                </Link>
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
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/importantdates">
                       Schedule
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Theme">
                        Theme
                      </Link>
                    </li>
                    <li className="nav-item d-none">
                      <Link className="nav-link" to="/sponsorship">
                        Sponsorship
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                    { !token ? (
                      <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li> */}
                    </>
                    ) : (
                      <li className="nav-item">
                      <Link className="nav-link" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    ) }
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
