import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import * as ACTIONS from "./action";
import { Card } from "../../components/Card";
import { PieChart } from "../../components/PieChart";
import CreateForm from "../Create";
import Dashlogo from "../../images/logo.png";
import { Outlet } from "react-router-dom";
import "../../css/dashboard.css";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState({});
  let [data, setData] = useState([]);

  const state = useSelector((state) => state.DashboardCounterReducer);

  let dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      setLoggedInUser(decodedToken.user.user);
    }
  }, []);

  useEffect(() => {
    dispatch(ACTIONS.getUsersCounters());
  }, []);

  useEffect(() => {
    if (state && state.counterSuccess) {
      setData(state.counterSuccess.response);
    }
  }, [state.counterSuccess]);

  const goToDashbaord = () => {
    const origin = window.location.origin;
    window.location.href = `${origin}/dashboard`
  }

  const location = useLocation();

  let logoutUser = () => {
    localStorage.removeItem("token");
    navigate('/')
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
                      <span className="user-icon">
                        <i className="fa-solid fa-user"></i>
                      </span>

                      {/* <img
                        src={User}
                        className="img-fluid  me-3 dash-user-pic"
                      /> */}
                      <span className="user-text me-2">
                        {loggedInUser.userName}
                      </span>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <button
                          onClick={() => logoutUser()}
                          className="dropdown-item logout-btn"
                        >
                          Logout
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
                  <ul className="ps-0 list-unstyled ">
                    {loggedInUser.role === "admin" && (
                      <>
                        <li>
                          <button
                            className="common-blue btn"
                            onClick={() => goToDashbaord()}
                          >
                            <span className="me-2">
                              <i className="fa-solid fa-house"></i>
                            </span>
                            Dashboard
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                  {loggedInUser.role !== "admin" && (
                    <ul className="ps-0 list-unstyled">
                      <li>
                        <button
                          className="common-blue btn"
                          onClick={() => navigate("/dashboard")}
                        >
                          <span className="me-2">
                            <i className="fa-solid fa-user-plus"></i>
                          </span>
                          New Registration
                        </button>
                      </li>
                      <li>
                        <button
                          className="common-blue btn"
                          onClick={() => navigate("/dashboard/transaction_details")}
                        >
                          <span className="me-2">
                            <i className="fa-solid fa-user-plus"></i>
                          </span>
                          Transaction Details
                        </button>
                      </li>
                    </ul>
                  )}
                  {loggedInUser.role == "admin" && (
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button common-blue btn mb-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <span className="me-2">
                              <i className="fa-solid fa-user"></i>
                            </span>{" "}
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
                              <li className="ps-3">
                                <button
                                  className="common-blue btn"
                                  onClick={() => navigate("/dashboard/create")}
                                >
                                  <span className="me-2">
                                    <i className="fa-solid fa-user-plus"></i>
                                  </span>{" "}
                                  New Registration
                                </button>
                              </li>
                              {loggedInUser.role == "admin" && (
                                <li className="ps-3">
                                  <button
                                    className="common-blue btn"
                                    onClick={() =>
                                      navigate("/dashboard/allRegistration")
                                    }
                                  >
                                    <span className="me-2">
                                      <i className="fa-solid fa-user-group"></i>
                                    </span>{" "}
                                    All Registration
                                  </button>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <ul className="ps-0 list-unstyled mt-4">
                    {loggedInUser.role == "admin" && (
                      <>
                      <li>
                          <button
                            className="common-blue btn"
                            onClick={() => navigate("/dashboard/transaction_list")}
                          >
                            <span className="me-2">
                              <i className="fa-brands fa-elementor"></i>
                            </span>{" "}
                            Transaction List
                          </button>
                        </li>
                        <li>
                          <button
                            className="common-blue btn"
                            onClick={() => navigate("/dashboard/exhibitorlist")}
                          >
                            <span className="me-2">
                              <i className="fa-brands fa-elementor"></i>
                            </span>{" "}
                            Exhibitor List
                          </button>
                        </li>
                        <li>
                          <button
                            className="common-blue btn"
                            onClick={() => navigate("/dashboard/allSponsor")}
                          >
                            <span className="me-2">
                              <i className="fa-brands fa-elementor"></i>
                            </span>{" "}
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
                            onClick={() => navigate("/dashboard/users")}
                          >
                            <span className="me-2">
                              <i className="fa-solid fa-users"></i>
                            </span>
                            Users
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
                              navigate("/dashboard/attendancestatus")
                            }
                          >
                            <span className="me-2">
                              <i className="fa-solid fa-users"></i>
                            </span>
                            Attendance Status
                          </button>
                        </li>
                      </>
                    )}

                    {loggedInUser.role !== "admin" && (
                      <>
                        <li>
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button common-blue btn mb-0"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="false"
                                  aria-controls="collapseOne"
                                >
                                  <span className="me-2 ">
                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                  </span>
                                  Paper Submisson
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
                                    <li className="ps-3">
                                      <button
                                        className="common-blue btn"
                                        onClick={() =>
                                          navigate("/dashboard/upload")
                                        }
                                      >
                                        <span className="me-2">
                                          <i className="fa-solid fa-file-export"></i>
                                        </span>
                                        Abstract
                                      </button>
                                    </li>

                                    <li className="ps-3">
                                      <button
                                        className="common-blue btn"
                                        onClick={() =>
                                          navigate("/dashboard/userabstractlist")
                                        }
                                      >
                                        <span className="me-2">
                                          <i className="fa-solid fa-file-export"></i>
                                        </span>
                                        Abstract List
                                      </button>
                                    </li>

                                    <li className="ps-3">
                                      <button
                                        className="common-blue btn"
                                        onClick={() =>
                                          navigate("/dashboard/fullPaper")
                                        }
                                      >
                                        <span className="me-2">
                                          <i className="fa-solid fa-file-export"></i>
                                        </span>
                                        Full Papers
                                      </button>
                                    </li>                                    
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    )}
                    {loggedInUser.role == "admin" && (
                      <li>
                        <button
                          className="common-blue btn"
                          onClick={() => navigate("/dashboard/abstract")
                          }
                        >
                          <span className="me-2">
                            <i className="fa-solid fa-file-export"></i>
                          </span>
                          Abstracts
                        </button>
                      </li>
                    )}
                  </ul>
                </aside>
              </div>
              <div className="col-md-9 col-lg-10 right-part">
                {loggedInUser.role == "admin" &&
                  location.pathname === "/dashboard" && <Card data={data} />}
                {loggedInUser.role == "admin" &&
                  location.pathname === "/dashboard" && (
                    <PieChart data={data} />
                  )}
                {loggedInUser.role !== "admin" &&
                  location.pathname === "/dashboard" && <CreateForm />}

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
