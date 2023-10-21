import React from "react";
import { Link } from "react-router-dom";
import "../../css/session.css";

const SessionCard = () => {
    return (
        <>
        
   <section className="chart-area">
  <div className="container">
    <div className="row">
        <div className="col-lg-12">
             <div className="row mb-lg-4 pb-lg-2">
                <div className="col-md-6 text-center">
                    <button className=" common-btn">
                    download Oral Presentation Template 
                    </button>
                </div>
                <div className="col-md-6 text-center">
                <button className=" common-btn">
                Poster presentation template
                    </button>
                </div>
             </div>
        </div>
      <div className="col-lg-12">
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
                          <Link className="ts-card-link" to="/" > 
                          (Day1_TechSess1_A.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Modern Technologies in Cartography &amp; Geospatial Appl.
                          </p>
                          <Link className="ts-card-link" to="/" > 
                          (Day1_TechSess1_B.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Smart Governance
                          </p>
                          <Link className="ts-card-link" to="/" > 
                          (Day1 TechSess1_C.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Community Health
                          </p>
                          <Link className="ts-card-link" to="/" > 
                          (Day1_TechSess1_D.pdf)
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                 
                <div className="row">
                  <div className="col-lg-3">
                  </div>
                  
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
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess2_A.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Sustainable Agriculture
                          </p>
                         
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess2_B.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Water Resources Mgmt.-I
                          </p>
                         
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess2_C.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Environment &amp; Ecology
                          </p>
                          
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess2_D.pdf)
                          </Link>
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
                         
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess3_A.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Coastal Studies &amp; Oceanography
                          </p>
                         
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess3_B.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Meteorology &amp; Climate Change
                          </p>
                          
                          <Link className="ts-card-link" to="/" > 
                          Studies (Day2_TechSess3_C.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Energy Security
                          </p>
                       
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess3_D.pdf)
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                  </div>
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
                         
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess4_A.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Contemporary Earth Science Studies
                          </p>
                         
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess4_B.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Urban Studies
                          </p>
                         
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess4_C.pdf)
                          </Link>
                        </li>
                        <li>
                          <p className="ts-innner-heading">
                            Greenspaces &amp; Green/Blue Economy
                          </p>
                          
                          <Link className="ts-card-link" to="/" > 
                          (Day2_TechSess4_D.pdf)
                          </Link>
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
                            
                            <Link className="ts-card-link" to="/" > 
                            (Day3 TechSess5_A.pdf)
                            </Link>
                          </li>
                          <li>
                            <p className="ts-innner-heading">
                              UAV Appls. &amp; Advances in DIP
                            </p>
                           
                            <Link className="ts-card-link" to="/" > 
                            (Day3_TechSess5_B.pdf)
                            </Link>
                          </li>
                          <li>
                            <p className="ts-innner-heading">
                              Water Resources Mgmt. - II
                            </p>
                           
                            <Link className="ts-card-link" to="/" > 
                            (Day3_TechSess5_C.pdf)
                            </Link>
                          </li>
                          <li>
                            <p className="ts-innner-heading">
                              Entrepreneurship &amp; Geospatial Economy
                            </p>
                          
                            <Link className="ts-card-link" to="/" > 
                            (Day3_TechSess5_D.pdf)
                            </Link>
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
                    <div className="col-lg-3">
                    </div>
                    <div className="col-lg-9">
                      
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                    </div>
                    <div className="col-lg-9">
                      <div className="ts-card">
                        <ul className>
                          <li>
                            
                            <Link className="ts-card-link" to="/" > 
                            (Posters_43INCA.pdf)
                            </Link>
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
      </div>
    </div>
  </div></section>

        
        </>

    )
}

export default SessionCard;