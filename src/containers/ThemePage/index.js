import React from "react";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import "../../css/theme.css";
import "../../css/contact.css";

function Theme() {
  let navgate = useNavigate();
  return (
    <>
      <Header />
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
                <h1 className="h1 pt-2">
                  <u>Main Theme</u>
                </h1>
              </div>
            </div>
            <div className="col-md-10">
              <div className="paragraph-box">
                <p className="common-para">
                  “Emerging Trends in Digital Cartography for Sustainable
                  Ecosystems and Geospatial Economy”
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-2">
              <div className="sub-theme-box">
                <h2 className="h1">
                  <u>Sub Themes</u>
                </h2>
              </div>
            </div>
            <div className="col-md-10">
              <div className="paragraph-boxes">
                <div className="row">
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                          Advances in cartography, geospatial technology and
                          thematic mapping for management of natural resources
                          and smart governance
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                          Geospatial technologies for fostering sustainable
                          agriculture, food security and green economies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                          Geospatial technologies for sustainable water
                          resources management
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
                          Geospatial technologies for environment and energy
                          security
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                          Geospatial technologies for urban studies and
                          infrastructure planning & development
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                          Geospatial technologies for meteorology and climate
                          change studies
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
                          Geospatial technologies for building disaster
                          resilience and emergency management
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                        Hydrographic surveys and geospatial technologies for coastal zone management
and oceanography
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                        Drone/UAV based novel applications for sustainable economies
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
                        Emerging trends in AI/ML for cartography and geospatial applications
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                        New geospatial and space policies for enhancing entrepreneurship and
geospatial economy
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
