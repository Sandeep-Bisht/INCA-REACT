import React from "react";
import { Link } from "react-router-dom";
import "../../css/session.css";
import Oral_Presentation_Template from "../../SampleFiles/43INCA_Oral_presentation_Template.pptx";
import Poster_presentation_template from "../../SampleFiles/43INCA_Poster_Presentation_Template.pptx";
import Day1_TechSess1_A from "../../SampleFiles/Day1_TechSess1_A.pdf";
import Day1_TechSess1_B from "../../SampleFiles/Day1_TechSess1_B.pdf";
import Day1_TechSess1_C from "../../SampleFiles/Day1_TechSess1_C.pdf";
import Day1_TechSess1_D from "../../SampleFiles/Day1_TechSess1_D.pdf";

import Day2_TechSess2_A from "../../SampleFiles/Day2_TechSess2_A.pdf";
import Day2_TechSess2_B from "../../SampleFiles/Day2_TechSess2_B.pdf";
import Day2_TechSess2_C from "../../SampleFiles/Day2_TechSess2_C.pdf";
import Day2_TechSess2_D from "../../SampleFiles/Day2_TechSess2_D.pdf";

import Day2_TechSess3_A from "../../SampleFiles/Day2_TechSess3_A.pdf";
import Day2_TechSess3_B from "../../SampleFiles/Day2_TechSess3_B.pdf";
import Day2_TechSess3_C from "../../SampleFiles/Day2_TechSess3_C.pdf";
import Day2_TechSess3_D from "../../SampleFiles/Day2_TechSess3_D.pdf";

import Day2_TechSess4_A from "../../SampleFiles/Day2_TechSess4_A.pdf";
import Day2_TechSess4_B from "../../SampleFiles/Day2_TechSess4_B.pdf";
import Day2_TechSess4_C from "../../SampleFiles/Day2_TechSess4_C.pdf";
import Day2_TechSess4_D from "../../SampleFiles/Day2_TechSess4_D.pdf";

import Day3_TechSess5_A from "../../SampleFiles/Day3_TechSess5_A.pdf";
import Day3_TechSess5_B from "../../SampleFiles/Day3_TechSess5_B.pdf";
import Day3_TechSess5_C from "../../SampleFiles/Day3_TechSess5_C.pdf";
import Day3_TechSess5_D from "../../SampleFiles/Day3_TechSess5_D.pdf";

import Poster_Presentation from "../../SampleFiles/Posters_43INCA.pdf";

import SessionCardImage from "../../SampleFiles/WhatsApp Image 2023-10-22 at 4.24.37 PM.jpeg";
import ProgramAtGlance from "../../SampleFiles/revised_For_Webste_Program_at_Glance.png"


const SessionCard = () => {
  return (
    <>
      <section className="chart-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row mb-lg-4 pb-lg-2">
                <div className="col-md-6 text-center">
                  <a target="_blank" href={Oral_Presentation_Template}>
                    <button className="common-btn">
                      download Oral Presentation Template
                    </button>
                  </a>
                </div>
                <div className="col-md-6 text-center">
                  <a target="_blank" href={Poster_presentation_template}>
                    <button className="common-btn">
                      Poster presentation template
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
            <div className="">
                <div className="row">
                  </div>
                  <img  src={ProgramAtGlance} alt="SessionCardImage" className="img-fluid"/>
                  </div>

            </div>
            {/* <div className="col-lg-12">
              <div className="chart-box-wrapper" id="session-detail">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="card-heading">
                      <p>Technical Session</p>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="day-card">
                      <div className="row">
                        <div className="col-lg-3">
                          <p className="ts-card-heading">Day1</p>
                        </div>
                        <div className="col-lg-9">
                          <div className="ts-card">
                            <p className="ts-card-heading">
                              Technical Session 1 (Parallel)
                            </p>
                            <ul className>
                              <li>
                                <p className="ts-innner-heading">
                                  Natural Resources Management
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day1_TechSess1_A}
                                >
                                  (Day1_TechSess1_A.pdf)
                                </a>
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Modern Technologies in Cartography &amp;
                                  Geospatial Appl.
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day1_TechSess1_B}
                                >
                                  (Day1_TechSess1_B.pdf)
                                </a>
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Smart Governance
                                </p>

                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day1_TechSess1_C}
                                >
                                  (Day1_TechSess1_C.pdf)
                                </a>
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Community Health
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day1_TechSess1_D}
                                >
                                  (Day1_TechSess1_D.pdf)
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3"></div>

                        <div className="col-lg-9">
                          <div className="ts-card">
                            <p className="ts-card-heading">
                              Technical Session 2
                            </p>
                            <ul className>
                              <li>
                                <p className="ts-innner-heading">
                                  Disaster Resilience &amp; Emergency Mgmt.-1
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess2_A}
                                >
                                  (Day2_TechSess2_A.pdf)
                                </a>
                               
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Sustainable Agriculture
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess2_B}
                                >
                                  (Day2_TechSess2_B.pdf)
                                </a>

                                
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Water Resources Mgmt.-I
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess2_C}
                                >
                                  (Day2_TechSess2_C.pdf)
                                </a>

                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Environment &amp; Ecology
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess2_D}
                                >
                                 (Day2_TechSess2_D.pdf)
                                </a>

                               
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="day-card mt-lg-4">
                      <div className="row">
                        <div className="col-lg-3">
                          <p className="ts-card-heading">Day2</p>
                        </div>
                        <div className="col-lg-9">
                          <div className="ts-card">
                            <p className="ts-card-heading">
                              Technical Session 3
                            </p>
                            <ul className>
                              <li>
                                <p className="ts-innner-heading">
                                  Emerging Trends in Al/ML -I
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess3_A}
                                >
                                    (Day2_TechSess3_A.pdf)
                                </a>

                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Coastal Studies &amp; Oceanography
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess3_B}
                                >
                                    (Day2_TechSess3_B.pdf)
                                </a>
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Meteorology &amp; Climate Change
                                </p>

                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess3_C}
                                >
                                    (Day2_TechSess3_C.pdf)
                                </a>
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Energy Security
                                </p>

                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess3_D}
                                >
                                    (Day2_TechSess3_D.pdf)
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-9">
                          <div className="ts-card">
                            <p className="ts-card-heading">
                              Technical Session 4
                            </p>
                            <ul className>
                              <li>
                                <p className="ts-innner-heading">
                                  Emerging Trends in Al/ML-II
                                </p>
                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess4_A}
                                >
                                    (Day2_TechSess4_A.pdf)
                                </a>

                              
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Contemporary Earth Science Studies
                                </p>

                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess4_B}
                                >
                                    (Day2_TechSess4_B.pdf)
                                </a>
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Urban Studies
                                </p>

                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess4_C}
                                >
                                    (Day2_TechSess4_C.pdf)
                                </a>
                              </li>
                              <li>
                                <p className="ts-innner-heading">
                                  Greenspaces &amp; Green/Blue Economy
                                </p>

                                <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day2_TechSess4_D}
                                >
                                    (Day2_TechSess4_D.pdf)
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="day-card mt-lg-4">
                        <div className="row">
                          <div className="col-lg-3">
                            <p className="ts-card-heading">Day3</p>
                          </div>
                          <div className="col-lg-9">
                            <div className="ts-card">
                              <p className="ts-card-heading">
                                Technical Session 5
                              </p>
                              <ul className>
                                <li>
                                  <p className="ts-innner-heading">
                                    Disaster Resilience &amp; Emergency Mgmt.-II
                                  </p>
                                  <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day3_TechSess5_A}
                                >
                                    (Day3 TechSess5_A.pdf)
                                </a>

                                 
                                </li>
                                <li>
                                  <p className="ts-innner-heading">
                                    UAV Appls. &amp; Advances in DIP
                                  </p>

                                  <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day3_TechSess5_B}
                                >
                                    (Day3 TechSess5_B.pdf)
                                </a>
                                </li>
                                <li>
                                  <p className="ts-innner-heading">
                                    Water Resources Mgmt. - II
                                  </p>

                                  <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day3_TechSess5_C}
                                >
                                    (Day3 TechSess5_C.pdf)
                                </a>
                                </li>
                                <li>
                                  <p className="ts-innner-heading">
                                    Entrepreneurship &amp; Geospatial Economy
                                  </p>

                                  <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Day3_TechSess5_D}
                                >
                                    (Day3 TechSess5_D.pdf)
                                </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-lg-5 border-top pt-lg-5">
                    <div className="col-lg-3">
                      <div className="card-heading">
                        <p>Poster Presentation</p>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="day-card">
                        <div className="row">
                          <div className="col-lg-3"></div>
                          <div className="col-lg-9"></div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3"></div>
                          <div className="col-lg-9">
                            <div className="ts-card">
                              <ul className>
                                <li>
                                  
                                  <a
                                  className="ts-card-link"
                                  target="_blank"
                                  href={Poster_Presentation}
                                >
                                    (Posters_43INCA.pdf)
                                </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SessionCard;
