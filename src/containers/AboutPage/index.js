import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
// import LiaDownloadSolid from "re"
import "../../css/contact.css";
import "../../css/about.css";
import buddhaTemple from "../../images/mehrangarh-fort.jpeg";
import clockTower from "../../images/clock-tower.jpg";
import doonAirport from "../../images/doon-airport.jpg";
import doonFri from "../../images/india-2895905_640.jpeg";
import doonStadium from "../../images/stadium.jpeg";
import doonWeather1 from "../../images/weather-1.jpg";
import doonWeather2 from "../../images/weather-2.jpg";
import doonWeather3 from "../../images/weather-3.jpg";
import NHOBuilding from "../../images/RCW_Building.jpg";
import Accommodation from "../../SampleFiles/Details of Hotel Accommodation for 43 INCA.docx"

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
              <h2 className="pb-2">ABOUT NRSC</h2>
              <p className="common-para text-justify">
                National Remote Sensing Centre (NRSC), a key functionary of
                Indian Space Research Organisation (ISRO), is striving to
                realize the Indian Space Vision through Earth Observation. It is
                responsible for the ground segment of Remote Sensing Programme
                through satellite data acquisition, archival, processing,
                dissemination, remote sensing applications, training and
                capacity building. It also provides aerial services in the
                civilian sector for the country. NRSC has five Regional Centres
                located at Bangalore, Nagpur, Kolkata, New Delhi and Jodhpur to
                address region/area specific remote sensing application needs.
                NRSC is continuously exploring the practical use of remote
                sensing for societal applications and disaster management
                through multilevel initiatives, development of value-added data
                services and remote sensing applications.
              </p>
              <p className="common-para text-justify">
                Regional Remote Sensing Centre - West (RRSC-West), Jodhpur was
                established in 1987 under the aegis of National Natural
                Resources Management System (NNRMS) of ISRO to cater to the
                needs of different user agencies of North-West India. The centre
                is acting as a hub of space technology applications in the
                region during the last three and half decades, with current
                focus on sustainable arid ecosystems having major emphasis on
                desertification and water resources management.
              </p>
            </div>
            <div className="col-md-4">
              <div className="nho-pics d-flex align-items-center h-100">
                <img src={NHOBuilding} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-doon">
        <div className="container">
          <div className="row">
            <div className="col-md-8 pe-4">
              <h2 className="pb-2">ABOUT JODHPUR </h2>
              <p className="common-para text-justify">
                Jodhpur traditionally known as the “Sun City” was founded by Rao
                Jodha, a chief of Rathore clan, in 1459. It is the second
                largest city in Rajasthan and a very popular tourist
                destination. Jodhpur is best known for Mehrangarh Majestic Fort,
                Umaid Bhawan Palace, Mandore Garden and Clock Tower. Jodhpur is
                famous for its traditional sweets and spicy food. The lifestyle
                in Jodhpur is quite fascinating and colourful. Lending a
                cultural aura to Jodhpur, are its exquisite handicrafts, folk
                dances, folk music and the brightly attired people. The desert
                people are quite affable. Jodhpur has emerged as Centre for
                Academic Excellence where apart from ISRO, a number of
                institutions like ICAR-CAZRI, IIT, AIIMS, ONGC, DRDO, AFRI,
                National Law University, Ayurvedic University, Police & Forensic
                Science University, BSI, ZSI and NIFT are located. Famous Osian
                sand dunes are just 65 km away from the city. The weather during
                November month will be pleasant as the temperature ranges from
                20-35 degree Celsius. Jodhpur city is well connected with the
                national capital and other Indian cities through Air, Rail and
                Road transport. The congress venue is located within 15 km of
                the respective terminals. Jodhpur is about 600 km away from
                Delhi, 300 km from Jaipur, 450 km from Ahmedabad and 280 km from
                Udaipur.
              </p>

              <h2 className="pb-2">HOW TO REACH</h2>
              <p className="common-para text-justify">
                Jodhpur Airport is a domestic airport located at about 12 km
                away from RRSC-West/NRSC Regional Centre. Taxi cabs are
                available from the airport to Centre. The airport operates daily
                flights to all major cities of India. Jodhpur has a railway
                station well connected to all major cities in the country. All
                nearby cities are also connected to Jodhpur by bus service. The
                venue for the conference is the RRSC-West/NRSC Regional Centre
                which is about 10 km away from the Jodhpur railway station.
              </p>

              <h2 className="pb-2">ACCOMMODATION</h2>
              <p className="common-para text-justify">
                The registration fee does not include accommodation. Jodhpur has
                large number of hotels ranging from budget to luxury/heritage
                hotels. The accommodation charges may vary from Rs. 1000/- to
                Rs. 5000/- and more for luxury/heritage hotels. The above rates
                are only indicative and may vary. Limited guest house
                accommodation will be available on payment (tariff as per
                respective institution’s rule) and on first-come-first-serve
                basis. List of hotels with their indicative tariff and contact
                number will be available shortly on website
                https://www.43inca.org. Participants should book their
                accommodation in advance to avoid last minute rush. Transport
                will be provided from the hotels/ guest houses identified by the
                organisers to the conference venue.
              </p>
              <div className="banner-btn-box pt-2">                 

<button
  className=" common-btn"
>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <a target="_blank" href="/accommodation" className="text-decoration-none text-white">
  Accommodation Information

  <svg className="ms-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M 15 4 L 15 20.5625 L 9.71875 15.28125 L 8.28125 16.71875 L 15.28125 23.71875 L 16 24.40625 L 16.71875 23.71875 L 23.71875 16.71875 L 22.28125 15.28125 L 17 20.5625 L 17 4 Z M 7 26 L 7 28 L 25 28 L 25 26 Z"></path></svg>

 </a>
  
</button>
</div>
            </div>
            <div className="col-md-4">
              <div className="doon-pics mt-5">
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
              <h2>JODHPUR CLIMATE</h2>
              <p className="common-para text-justify">
                November is considered to be one of the best months to visit
                Jodhpur as the weather during this time is pleasant. The
                temperature during the day usually ranges between 25-30°C.
                However, it is advisable to carry a light jacket or sweater for
                the evening and early morning hours as the temperature can drop.
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
                <div className="card" >
                  <img src={hotel1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Sarovar Portico Hotel</h5>
                    <button type="button" className="common-btn"><a href="#">
                      Visit the Website
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="hotel-details">
                <div className="card" >
                  <img src={hotel2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Marbella Hotel</h5>
                     <button type="button" className="common-btn"><a href="#">
                      Visit the Website
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="hotel-details">
                <div className="card" >
                  <img src={hotel3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Hotel Madhuban</h5>
                     <button type="button" className="common-btn"><a href="#">
                      Visit the Website
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="hotel-details">
                <div className="card" >
                  <img src={hotel4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Hotel Boulevard</h5>
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
                    Founded on 7th August, 1979 at Hyderabad, the Indian
                    National Cartographic Association (INCA) has evolved into
                    one of the biggest organizations of its kind in the world.
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
                    In order to achieve the above objectives, INCA organizes
                    several programmes. It has so far conducted Twenty five
                    National / International conferences at various places in
                    India.
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
                    To foster cartographic research in the country. To improve
                    the teaching of cartography at all levels. To co-operate
                    with international organizations with similar objectives.
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
