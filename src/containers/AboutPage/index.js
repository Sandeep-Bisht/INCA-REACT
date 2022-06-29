import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../css/contact.css";
import "../../css/about.css";
import buddhaTemple from "../../images/buddha-temple.jpg";
import clockTower from "../../images/clock-tower.jpg";
import doonAirport from "../../images/doon-airport.png";
import doonFri from "../../images/doon-fri.jpg";
import doonStadium from "../../images/doon-stadium.jpg";
import doonWeather1 from "../../images/weather-1.jpg";
import doonWeather2 from "../../images/weather-2.jpg";
import doonWeather3 from "../../images/weather-3.jpg";
import NHOBuilding from "../../images/NHO-building.jpg";

const About = () => {
  return (
    <>
      <Header></Header>
      <div className="common-redirect-banner">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center">
              <p className="common-redirect-banner-title">About Us</p>
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>

      <div className="about-doon">
        <div className="container">
          <div className="row">
            <div className="col-md-8 pe-4">
              <h2 className="pb-2">ABOUT NHO</h2>
              <p className="common-para text-justify">
              The Indian Naval Hydrographic Department (INHD) functions under the Chief Hydrographer to the Government of India.  The Department, being the nodal agency for Hydrographic surveys and Nautical charting in India, has a very well established organizational setup.  INHD has seven indigenously built modern survey ships including one Catamaran Hull Survey Vessel (CHSV) fitted with state-of-the-art surveying equipment and a well established ‘National Institute of Hydrography’ which is the Centre for imparting training in Hydrography accredited by International Hydrographic Organisation for National and International trainees.<br/>
              The Chief Hydrographer to the Government of India is the NAVAREA VIII coordinator and is also the National Coordinator for NAVTEX services along Indian coast.
              </p>
            </div>
            <div className="col-md-4">
              <div className="nho-pics">
                    <img src={NHOBuilding} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-doon">
        <div className="container">
          <div className="row">
            <div className="col-md-8 pe-4">
              <h2 className="pb-2">ABOUT DEHRADUN</h2>
              <p className="common-para text-justify">
              Dehradun, the capital of the Uttarakhand is visited by
a large number of tourist every year, many of them en-route to Mussoorie. Nestled in the
gorgeous mountain ranges of the Himalayas, the climate of the city is temperate even
during summers. Dehradun is one of the fast emerging modern cities in Northern India.
The city boasts of many National Institutes like the Forest Research Institute (FRI),
Indian Institute of Remote Sensing (IIRS), Rashtriya Indian Military College (RIMC), and
the Indian Military Academy (IMA) besides a host of prestigious public schools.
Dehradun has been one of the best known educational centres in Northern India. The
city is well connected by road, rail and air.
              </p>

              <p className="common-para text-justify">
                Dehradun is a notable academic and research hub and is home to
                the Indian Military Academy, Forest Research Institute, Indira
                Gandhi National Forest Academy, The Doon School, Welham Boys
                School, Welham Girls School, Brightlands School, Rashtriya
                Indian Military College, Uttarakhand Ayurveda University, Wadia
                Institute of Himalayan Geology and the Indian Institute of
                Remote Sensing. It is the headquarters of the Surveyor-General
                of India. According to the combined survey based on health,
                infrastructure, economy, education, and crime, conducted by
                Dainik Jagran and KPMG, Dehradun is one of India's safest
                cities.
              </p>
            </div>
            <div className="col-md-4">
              <div className="doon-pics">
                <div className="row">
                  <div className="col-md-8 p-0">
                    <img src={buddhaTemple} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-4 p-0">
                    <img src={clockTower} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 p-0">
                    <img src={doonAirport} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-8 p-0">
                    <img src={doonFri} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 p-0">
                    <img src={doonStadium} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-doon-climate">
        <div className="container">
          <div className="row">
            <div className="col-md-8 pe-4">
              <h2>DEHRADUN CLIMATE</h2>
              <p className="common-para text-justify">
                The climate of Dehradun is humid subtropical. It varies greatly
                from tropical to severe cold depending upon the altitude of the
                area. The city is in Doon Valley and temperature variations due
                to difference in elevation are considerable. In the hilly
                regions, the summer is pleasant. But in the Doon, the heat is
                often intense and summer temperatures can reach up to 44 °C (111
                °F) for a few days and hot winds (called Loo) blows over North
                India. Winter temperature drops below freezing point and is
                usually between 1 and 20 °C (34 and 68 °F) and fog is quite
                common as in the plains. Although the temperature in Dehradun
                can reach below freezing during severe cold snaps, this is not
                common. The area receives an average annual rainfall of 2,073.3
                mm (81.63 in). Most of the annual rainfall in the city is
                received during the months from June to September, July and
                August being rainiest. During the monsoon season, there is often
                heavy and protracted rainfall.Agriculture benefits from fertile
                alluvial soil, adequate drainage and plentiful rain.
              </p>
            </div>
            <div className="col-md-4">
              <div className="climate-images">
                <div className="row">
                  <div className="col-md-6 p-0">
                    <img src={doonWeather1} alt="" />
                  </div>
                  <div className="col-md-6 p-0">
                    <img src={doonWeather3} alt="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 p-0">
                    <img src={doonWeather2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="doon-hotels">
        <div className="container">
          <div className="row">
            <h3 className="pb-3">Nearby Hotels</h3>
            <div className="col-md-3">
              <div className="hotel-details">
                <div class="card" >
                  <img src={hotel1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Sarovar Portico Hotel</h5>
                    <button type="button" className="common-btn"><a href="#">
                      Visit the Website
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="hotel-details">
                <div class="card" >
                  <img src={hotel2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Marbella Hotel</h5>
                     <button type="button" className="common-btn"><a href="#">
                      Visit the Website
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="hotel-details">
                <div class="card" >
                  <img src={hotel3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Hotel Madhuban</h5>
                     <button type="button" className="common-btn"><a href="#">
                      Visit the Website
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="hotel-details">
                <div class="card" >
                  <img src={hotel4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Hotel Boulevard</h5>
                     <button type="button" className="common-btn"><a href="#">
                      Visit the Website
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="row pb-4 align-items-center">
            <div className="col-md-6">
              <p className="common-pre-heading">GET IN TOUCH</p>
              <h2 className="common-heading">
                CONTACT US FOR FURTHER INFORMATION!
              </h2>
            </div>
            <div className="col-md-6">
              <p className="common-para">
                Magnam corporis rem commodi dolore possimus varius justo litora
                ipsum suspendisse dignissimos. Odit, dolor, minima. Diam
                facilisis dignissimos metus, id delectus fuga doloribus qui,
                explicabo.{" "}
              </p>
            </div>
          </div> */}

      {/* <div className="row">
            <div className="col-md-12">
              <div className="about-grand-event d-flex">
                <div className="grand-event-left-pic">
                  <img src={about1} className="img-fluid" alt="" />
                </div>
                <div className="grand-event-right-pic">
                  <img src={about4} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div> */}
          
      <section className="section-padding contact-single1 about-single1">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-4">
              <div className="boxes">
                <div className="box-1">
                  <i className="fa-solid fa-lightbulb"></i>
                  <h3 className="h2">ABOUT INCA</h3>
                  <p className="common-para">
                  Founded on 7th August, 1979 at Hyderabad, the Indian National Cartographic Association (INCA) has evolved into one of the biggest organizations of its kind in the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxes">
                <div className="box-2">
                  <i className="fa-solid fa-user-plus"></i>
                  <h3 className="h2">OUR ACTIVITIES</h3>
                  <p className="common-para">
                  In order to achieve the above objectives, INCA organizes several programmes. It has so far conducted Twenty five National / International conferences at various places in India.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxes">
                <div className="box-1">
                  <i className="fa-solid fa-rocket"></i>
                  <h3 className="h2">OUR AIM & MISSION</h3>
                  <p className="common-para">
                  To foster cartographic research in the country.
                  To improve the teaching of cartography at all levels.
                  To co-operate with international organizations with similar objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mission">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={aboutsingle} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p className="common-pre-heading">MISSION AND AIM</p>
              <h2 className="common-heading">ABOUT OUR WORKSHOP</h2>
              <p className="common-para">
                Consequat sociosqu sem officiis aute ridiculus repellat in
                aliquip at, metus sociosqu veritatis cubilia ac soluta? Faucibus
                ipsam, incidunt cras.
              </p>

              <div className="aim">
                <h3 className="h2">LEARN FROM THE BEST IN INDUSTRY</h3>
                <p className="common-para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reiciendis impedit doloribus dolorum nemo nesciunt magni
                  aperiam perspiciatis placeat maxime quo!
                </p>
              </div>

              <div className="aim">
                <h3 className="h2">LEARN FROM THE BEST IN INDUSTRY</h3>
                <p className="common-para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reiciendis impedit doloribus dolorum nemo nesciunt magni
                  aperiam perspiciatis placeat maxime quo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default About;
