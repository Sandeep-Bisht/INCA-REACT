import React from "react";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import "../../css/theme.css";
import "../../css/contact.css";


function Theme() {
  let navgate = useNavigate()
  return (
    <>
      <Header/>
      <div className="common-redirect-banner">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center">
              <p className="common-redirect-banner-title">Theme</p>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-section">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="main-theme-box">
                <h1 className="h1 pt-2"><u>Main Theme</u></h1>
              </div>
            </div>
            <div className="col-md-10">
              <div className="paragraph-box">
                <p className="common-para">
                “Digital Cartography to Harness Blue Economy”
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-2">
              <div className="sub-theme-box">
                <h2 className="h1"><u>Sub Theme</u></h2>
              </div>
            </div>
            <div className="col-md-10">
              <div className="paragraph-boxes">
                <div className="row">
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                        Trending Cartography – Past, Present and Future
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Modern Precision Surveying & Mapping Tool 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Geospatial solution for sustainable water resource management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                        GIS application for Climate Change and Environmental studies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Mapping solutions for risk assessment, mitigation measures and disaster management
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Application of Artificial Intelligence tools for Urban planning and resource management
                        </p>
                      </div>
                    </div>
                  </div>
                 
                </div>

                <div className="row">
                <div className="col-md-4">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Hydrographic surveys and mapping for coastal zone management 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
                  <div className="col-md-12">
                    <div className="register-btn d-flex justify-content-center pt-3">
                    <button
                    className=" common-btn"
                    onClick={() => navgate("/register")}
                  >
                    Register
                  </button>
                    </div>
                  </div>
                </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Theme;
