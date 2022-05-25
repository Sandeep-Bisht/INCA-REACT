import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "../../css/theme.css";
import "../../css/contact.css";

function Theme() {
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
                <h1 className="h1"><u>Main Theme</u></h1>
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
                  <div className="col-md-3">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                        Trends in Cartography – Past, Present and Future
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Modern Surveying Techniques and Tools for Higher Precision 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Geospatial solution for sustainable water resource management
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Hydrographic surveys and mapping for coastal zone management 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                        GIS application for Climate Change and Environmental Protection
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Mapping solutions for risk assessment, mitigation measures and disaster management
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Application of Artificial Intelligence tools for Urban planning and resource management
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Emerging trends in farming, livelihood and ‘food safety & security’ in rural India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <div className="cards">
                      <div className="box-1">
                        <p>
                        Digital Cartographic Solutions for promoting Indian Heritage, Culture and Tourism
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Geoinformatics including AI (Artificial Intelligence) Solutions for Border management and National security.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-3">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vel facere nisi nobis soluta quis.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-3">
                  <div className="cards">
                      <div className="box-1">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vel facere nisi nobis soluta quis.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
                  <div className="col-md-12">
                    <div className="register-btn d-flex justify-content-center pt-3">
                      <button className="common-btn">Register</button>
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
