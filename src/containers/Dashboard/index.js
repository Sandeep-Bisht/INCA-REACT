import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Dashlogo from "../../images/logo.png";
import { Outlet } from "react-router-dom";
import User from "../../images/user-profile.png";
import "../../css/dashboard.css";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      setLoggedInUser(decodedToken.user.user);
    }
  }, []);

  let logoutUser = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="dash-wrapper">
        <header className="dashboard-header ">
          <nav className="navbar navbar-expand-lg py-0">
            <div className="container-fluid">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img src={Dashlogo} className="img-fluid w-75" />
                <h1 className="dashboard-title ms-2">
                  <span></span>INCA
                </h1>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <form className="d-flex">
                  <div className="nav-item dropdown">
                    <a
                      className="text-decoration-none dropdown-toggle p-0 d-user-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={User}
                        className="img-fluid  me-3 dash-user-pic"
                      />
                      <span className="user-text me-2">
                        {loggedInUser.userEmail}
                      </span>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      {/* <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li> */}
                      <li>
                        <button
                          onClick={() => logoutUser()}
                          className="dropdown-item"
                          to="/"
                        >
                          LogOut
                        </button>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <section className="dash-body">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-md-3 left-part col-lg-2 px-0">
                <aside>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button common-blue btn mb-0"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Registration
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse "
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body p-0">
                          <ul className="ps-0 list-unstyled ">
                            <li>
                              <button
                                className="common-blue btn"
                                onClick={() => navigate("/dashboard/create")}
                              >
                                New Registration
                              </button>
                            </li>
                            {loggedInUser.role == "admin" && (
                              <li>
                                <button
                                  className="common-blue btn"
                                  onClick={() => navigate("/dashboard/allRegistration")}
                                >
                                  All Registration
                                </button>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="ps-0 list-unstyled mt-4">
                    {loggedInUser.role == "admin" && (
                      <>
                        <li>
                          <button
                            className="common-blue btn"
                            onClick={() => navigate("/dashboard/allSponsor")}
                          >
                            Sponsors
                          </button>
                        </li>
                      </>
                    )}

                    {loggedInUser.role == "admin" && (
                      <>
                        <li>
                                <button
                                  className="common-blue btn"
                                  onClick={() =>
                                    navigate("/dashboard/users")
                                  }
                                >
                                   Users
                                </button>
                              </li>
                      </>
                    )}
                  </ul>
                  
                </aside>
              </div>
              <div className="col-md-9 col-lg-10 right-part">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Dashboard;
