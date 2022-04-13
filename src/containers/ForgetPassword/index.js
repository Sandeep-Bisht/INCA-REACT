import React from "react";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import "../../css/register.css";

const ForgotPassword = () => {
  return (
    <>
      <Header></Header>
      <section className="register-form">
        <form className="login-form">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto form-wrapper">
                <div className="row actual-form-1">
                  <div className="col-md-12">
                    <div className="rgstr d-flex justify-content-center position-relative align-items-center mb-4">
                      <Link
                        to="/login"
                        className="ms-2 forget-back text-decoration-underline position-absolute start-0"
                      >
                        Back
                      </Link>
                      <p className="common-form-heading mb-0">
                        Forgot Password
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-wrap">
                      <div className="input-wrap">
                        <input
                          type="email"
                          id="userEmail"
                          required
                          className="form-control mb-3"
                        />
                        <label>
                          <i className="fa-solid fa-envelope me-2"></i>E-mail
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="btn-wrapper">
                      <button type="submit" className=" form-submit ">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ForgotPassword;
