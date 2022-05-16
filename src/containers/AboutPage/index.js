import React, { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../css/contact.css";
import "../../css/about.css";
import about1 from "../../images/about1.jpeg";
import about4 from "../../images/about4.jpeg";
import aboutsingle from "../../images/aboutsingle.png";
import buddhaTemple from "../../images/buddha-temple.jpg";
import clockTower from "../../images/clock-tower.jpg";
import doonAirport from "../../images/doon-airport.png";
import doonFri from "../../images/doon-fri.jpg";
import doonStadium from "../../images/doon-stadium.jpg";
import doonWeather1 from "../../images/weather-1.jpg";
import doonWeather2 from "../../images/weather-2.jpg";
import doonWeather3 from "../../images/weather-3.jpg";
import hotel1 from "../../images/sarovar-portico-dehradun.jpg";
import hotel2 from "../../images/marbella.jpg";
import hotel3 from "../../images/hotel-madhuban.jpg";
import hotel4 from "../../images/hotel-boulevard.jpg";

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
              <h2 className="pb-2">ABOUT DEHRADUN</h2>
              <p className="common-para">
                <b>Dehradun</b> is the largest and most populated city in the
                Indian state of Uttarakhand.The city is noted for its
                picturesque landscape and slightly milder climate and provides a
                gateway to the surrounding region. It is well connected and in
                proximity to Himalayan tourist destinations such as Mussoorie,
                Dhanaulti, Chakrata, New Tehri, Uttarkashi, Harsil,
                Chopta-Tungnath, Auli, and famous summer and winter hiking
                destinations like the Valley of Flowers at Dodital, Dayara
                Bugyal, Kedarkantha, Har Ki Dun and Hemkunt Sahib for camping
                and Himalayan panoramic views. The Hindu holy cities of Haridwar
                and Rishikesh, along with the Himalayan pilgrimage circuit of
                Chota Char Dham, viz. Yamunotri, Gangotri, Kedarnath and
                Badrinath, are also primarily accessed via Dehradun, with it
                being the closest major city. Dehradun is also known for its
                Basmati rice and bakery products.
              </p>

              <p className="common-para">
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
              <p className="common-para">
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

      <div className="doon-hotels">
        <div className="container">
          <div className="row">
            <h3 className="pb-3">Nearby Hotels</h3>
            <div className="col-md-3">
              <div className="hotel-details">
                <div class="card" >
                  <img src={hotel1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Sarovar Portico Hotel</h5>
                    {/* <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
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
                    {/* <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
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
                    {/* <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
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
                    {/* <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
                     <button type="button" className="common-btn"><a href="#">
                      Visit the Website
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <h3 className="h2">WHAT WE DO?</h3>
                  <p className="common-para">
                    Habitant porta viverra voluptatum facilisi. Dolor mi sit!
                    Recusandae, nisl, habitasse justo architecto viverra volupt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxes">
                <div className="box-2">
                  <i className="fa-solid fa-user-plus"></i>
                  <h3 className="h2">WHAT WE ARE?</h3>
                  <p className="common-para">
                    Habitant porta viverra voluptatum facilisi. Dolor mi sit!
                    Recusandae, nisl, habitasse justo architecto viverra volupt.
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
                    Habitant porta viverra voluptatum facilisi. Dolor mi sit!
                    Recusandae, nisl, habitasse justo architecto viverra volupt.
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
