import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../css/home.css";
import reg2 from "../../images/reg2.png";
import reg4 from "../../images/reg4.png";
import comittee1 from "../../images/Raj1.jpg";
import comittee2 from "../../images/CH-Adhir-Arora.png";
import comittee3 from "../../images/bkramprasad.jpg";
import comittee4 from "../../images/raprasad.jpg";
import comittee5 from "../../images/capt-kuldeep-singh.jpg";
import comittee6 from "../../images/cmde-puesh-pawsey.jpg";
import comittee7 from "../../images/ls-pathania.jpg";
import gallary1 from "../../images/gallery-1.jpg";
import gallary2 from "../../images/gallery-2.jpg";
import gallary3 from "../../images/gallery-3.jpg";
import gallary4 from "../../images/gallery-4.jpg";
import gallary5 from "../../images/gallery-5.jpg";
import Event_2 from "../../SampleFiles/firstscreen.png";
import inca1 from "../../images/inca-image-1.JPG";
import inca2 from "../../images/inca-image-2.JPG";
import inca3 from "../../images/inca-image-3.JPG";
import inca4 from "../../images/inca-image-4.JPG";
import inca5 from "../../images/inca-image-5.JPG";
import inca6 from "../../images/inca-image-6.JPG";
import inca7 from "../../images/inca-image-7.JPG";
import inca8 from "../../images/inca-image-8.JPG";
import inca9 from "../../images/inca-image-9.jpg";
import SecondSercular from "../../SampleFiles/42thINCA-First Circular-09_Jul 22.pdf";
import ThirdSercular from '../../SampleFiles/Second circular_20 sep 22.pdf';

const HomePage = () => {
  const [showEvents, setShowEvents] = useState("1nov");

  const [countdownDays, setCountdownDays] = useState("00");
  const [countdownHours, setCountdownHours] = useState("00");
  const [countdownMinutes, setCountdownMinutes] = useState("00");
  const [countdownSec, setCountdownSec] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("nov 9, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // Stop the timer
        clearInterval(interval.current);
      } else {
        //Continue Timer
        setCountdownDays(days);
        setCountdownHours(hours);
        setCountdownMinutes(minutes);
        setCountdownSec(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const navigation = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const deviceType = "desktop";

  return (
    <>
      <Header></Header>
      <div className="home-banner">
        <div className="container">
          <div className="row pb-md-5">
            <div className="col-md-5">
              <div className="left"></div>
            </div>
            <div className="col-md-7">
              <div className="right text-center">
                <p className="banner-title f1 text-white">
                  <span className="banner-small text-white">
                    42<sup>nd</sup> INCA International Congress
                  </span>

                  <span className="theme-color">
                    Theme : "Digital Cartography To Harness Blue Economy"
                  </span>

                  {/* <span className="banner-last">Event-2022</span> */}
                </p>
                <div className="banner-bottom"></div>
                {/* <p className="common-para text-white mt-3">
                  Animi ab libero! Blanditiis, luctus morbi eget esse,
                  ridiculus. Quos laborum sunt facere primis magni cumque.
                </p> */}
                <div className="banner-btn-box pt-2">
                  <button
                    className=" common-btn"
                    onClick={() => navigation("/register")}
                  >
                    Register
                  </button>
                  <button
                    className="common-btn-transparent ms-3 home-schedule-desk"
                    onClick={() => navigation("/abstractpage")}
                  >
                    Full Paper Submission
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="count">
                <div className="counter-wrapper">
                  <p id="day" className="common-timer-box common-yellow-color">
                    {countdownDays}
                  </p>
                  <p className="timer-detail">Days</p>
                </div>
                <div className="counter-wrapper">
                  <p
                    id="hours"
                    className="common-timer-box common-yellow-color"
                  >
                    {countdownHours}
                  </p>
                  <p className="timer-detail">Hours</p>
                </div>
                <div className="counter-wrapper">
                  <p
                    id="minutes"
                    className="common-timer-box common-yellow-color"
                  >
                    {countdownMinutes}
                  </p>
                  <p className="timer-detail">Minutes</p>
                </div>
                <div className="counter-wrapper">
                  <p
                    id="seconds"
                    className="common-timer-box common-yellow-color"
                  >
                    {countdownSec}
                  </p>
                  <p className="timer-detail">Seconds</p>
                </div>
              </div>
            </div>
          </div>
          <section className="abstract-date">
  <div className="container-fluid">
  <div className="row">
            <div className="col-md-12">
              <div className="abstract-submission-date">
            <marquee><p><b>"The Full paper Submission Date for 42nd INCA Conference is 30<sup>th</sup> September 2022"</b></p></marquee>
            </div>
            </div>
          </div>
  </div>
</section>
        </div>
      </div>

      <div className="Welcome-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-none">
              <div className="adhir-arora-image">
                <div className="adhir-pic">
                  <img src={comittee2} alt="" className="img-fluid" />
                </div>
                <div className="adhir-image-title">
                  <p className="common-para">
                    {" "}
                    Vice Admiral Adhir Arora , NM{" "}
                  </p>
                  <p className="common-para">
                    Chief Hydrographer to the Govt. of India & President INCA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="welcome-text pt-4">
                <p className="common-para text-justify">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The National Hydrographic Office,  Dehradun, India, has the honour of inviting all professionals interested in the field of Cartography/GIS and allied subjects as well as various disciplines of their application viz. Hydrography, Geography, Geology, Geophysics, Oceanography, Geo- informatics, Artificial intelligence, Hydro-meteorology, Marine Geomorphology, Coastal Resource Management and Environmental Planning etc. to participate in the forthcoming 42nd International Conference of Indian National Cartographic Association (INCA), being held at Dehradun, Uttarakhand, during 09 -11 November 2022.
Renowned national and international scholars, scientists, academicians, planners are expected to take part in this conference. It shall be profoundly advantageous for all participants including students by gaining from enriched experience of the eminent speakers from various fields of specialisations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding home-about pb-lg-0 without-carousel ">
        <div className="container">
          <div className="row py-4 mt-3">
            <div className="col-lg-4">
              <div className="home-about-event-card">
                <div className="left">
                  <span className="first common-yellow-bg">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                </div>
                <div className="right">
                  <h2 className="h2">Where is the Event</h2>
                  <p className="common-para">
                    <b> National Hydrographic Office </b> <br />
                    107-A, Rajpur Rd, <br />
                    Post Box – 75,
                    <br /> Dehradun – 248001, Uttarakhand, India
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home-about-event-card">
                <div className="left">
                  <span className="second common-blue-bg">
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                </div>
                <div className="right">
                  <h2 className="h2">When is the Event</h2>
                  <p className="common-para">
                    09 November 2022 <br /> 10 November 2022 <br /> 11 November
                    2022
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home-about-event-card">
                <div className="left">
                  <span className="second common-blue-bg">
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                </div>
                <div className="right">
                  <h2 className="h2">Schedule of the Event</h2>
                  <Link className="common-para pb-3" to="/importantdates">
                    Click here to know details.
                  </Link>
                  {/* <p className="common-para">
                    Last date for submitting the abstracts
                  </p>
                  <p className="common-para">
                    Acceptance of paper will be notified by
                  </p>
                  <p className="common-para">
                    Last date for submission of full paper
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------with carousel--------- */}
      <section className="section-padding home-about pb-lg-0 with-carousel">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="home-about-event-card">
                <div className="left">
                  <span className="first common-yellow-bg">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                </div>
                <div className="right">
                  <h2 className="h2">Where is the Event:</h2>
                  <p className="common-para">
                    <b> National Hydrographic Office </b> <br />
                    107-A, Rajpur Rd, <br />Post Box – 75,
                    <br /> Dehradun – 248001, Uttarakhand, India
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home-about-event-card">
                <div className="left">
                  <span className="second common-blue-bg">
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                </div>
                <div className="right">
                  <h2 className="h2">When is the Event:</h2>
                  <p className="common-para">
                    09 November 2022 <br /> 10 November 2022 <br /> 11 November 2022
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home-about-event-card">
                <div className="left">
                  <span className="second common-blue-bg">
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                </div>
                <div className="right">
                  <h2 className="h2">Schedule of the Event</h2>
                  <Link className="common-para pb-3" to="/importantdates">
                    Click here to know details.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------with carousel----------- */}
      {/* <section className="section-padding home-counter">
        <div className="container pt-md-5">
          <div className="row pt-md-5">
            <div className="col-lg-3 py-4 col-3">
              <div className="counter-card">
                <h2 className="counter-heading">500+</h2>
                <span className="counter-title">Visitors</span>
              </div>
            </div>
            <div className="col-lg-3 py-4 col-3">
              <div className="counter-card">
                <h2 className="counter-heading">50+</h2>
                <span className="counter-title f2">EVENT SPEAKERS</span>
              </div>
            </div>
            <div className="col-lg-3 py-4 col-3">
              <div className="counter-card">
                <h2 className="counter-heading">25+</h2>
                <span className="counter-title f2">EVENT SESSIONS</span>
              </div>
            </div>
            <div className="col-lg-3 py-4 col-3">
              <div className="counter-card border-0">
                <h2 className="counter-heading">15+</h2>
                <span className="counter-title f2">SPONSORS</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="section-padding home-attend-event with-carousel">
        <div className="container">
          <div className="row position-relative">
            <div className="col-md-8 mx-auto text-center">
              <p className="common-pre-heading">Introduction</p>
              <h2 className="common-heading text-white">
                WHY ATTEND INCA 2022 EVENT?
              </h2>
              <p className="common-para text-white position-relative">
                Quam amet tristique adipisicing incididunt arcu, excepturi
                molestie turpis deserunt ducimus malesuada minus mauris veniam.
              </p>
            </div>
          </div>
          <div className="row position-relative mt-lg-5">
            <Carousel
              swipeable={true}
              arrows={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              ShowArrows={false}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              transitionDuration={500}
              itemClass="carousel-item-padding-40-px"
            >
              <div className="why-attend">
                <div className="attend-card">
                  <div className="upper">
                    <div className="event-icon">
                      <img src={attend1} alt="" className="img-fluid" />
                    </div>
                    <div className="event-number f1 ">01.</div>
                  </div>
                  <div className="lower">
                    <h3 className="attend-card-heading">
                      In Person Networking
                    </h3>
                    <p className="common-para">
                      Nemo cubilia non, exercitationem ridiculus modi faucibus
                      nullam animi suspendie in porttitor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="why-attend">
                <div className="attend-card">
                  <div className="upper">
                    <div className="event-icon">
                      <img src={attend2} alt="" className="img-fluid" />
                    </div>
                    <div className="event-number f1 ">02.</div>
                  </div>
                  <div className="lower">
                    <h3 className="attend-card-heading">BOOST CREATIVITY</h3>
                    <p className="common-para">
                      Nemo cubilia non, exercitationem ridiculus modi faucibus
                      nullam animi suspendie in porttitor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="why-attend">
                <div className="attend-card">
                  <div className="upper">
                    <div className="event-icon">
                      <img src={attend3} alt="" className="img-fluid" />
                    </div>
                    <div className="event-number f1 ">03.</div>
                  </div>
                  <div className="lower">
                    <h3 className="attend-card-heading">AFTER PARTY EVENT</h3>
                    <p className="common-para">
                      Nemo cubilia non, exercitationem ridiculus modi faucibus
                      nullam animi suspendie in porttitor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="why-attend">
                <div className="attend-card">
                  <div className="upper">
                    <div className="event-icon">
                      <img src={attend4} alt="" className="img-fluid" />
                    </div>
                    <div className="event-number f1 ">04.</div>
                  </div>
                  <div className="lower">
                    <h3 className="attend-card-heading">SPARK CREATIVITY</h3>
                    <p className="common-para">
                      Nemo cubilia non, exercitationem ridiculus modi faucibus
                      nullam animi suspendie in porttitor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="why-attend">
                <div className="attend-card">
                  <div className="upper">
                    <div className="event-icon">
                      <img src={attend5} alt="" className="img-fluid" />
                    </div>
                    <div className="event-number f1 ">05.</div>
                  </div>
                  <div className="lower">
                    <h3 className="attend-card-heading">TOP SPEAKERS</h3>
                    <p className="common-para">
                      Nemo cubilia non, exercitationem ridiculus modi faucibus
                      nullam animi suspendie in porttitor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="why-attend">
                <div className="attend-card">
                  <div className="upper">
                    <div className="event-icon">
                      <img src={attend6} alt="" className="img-fluid" />
                    </div>
                    <div className="event-number f1 ">06.</div>
                  </div>
                  <div className="lower">
                    <h3 className="attend-card-heading">POTENTIAL CLIENTS</h3>
                    <p className="common-para">
                      Nemo cubilia non, exercitationem ridiculus modi faucibus
                      nullam animi suspendie in porttitor.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
            ;
          </div>
        </div>
      </section> */}
      {/* ----without carousel---- */}
      {/* <section className="section-padding home-attend-event without-carousel">
        <div className="container">
          <div className="row position-relative">
            <div className="col-md-8 mx-auto text-center">
              <p className="common-pre-heading">Introduction</p>
              <h2 className="common-heading text-white">
                WHY ATTEND INCA 2022 EVENT?
              </h2>
              <p className="common-para text-white position-relative">
                Quam amet tristique adipisicing incididunt arcu, excepturi
                molestie turpis deserunt ducimus malesuada minus mauris veniam.
              </p>
            </div>
          </div>
          <div className="row position-relative mt-lg-5">
            <div className="col-lg-4">
              <div className="attend-card">
                <div className="upper">
                  <div className="event-icon">
                    <img src={attend1} alt="" className="img-fluid" />
                  </div>
                  <div className="event-number f1 ">01.</div>
                </div>
                <div className="lower">
                  <h3 className="attend-card-heading">In Person Networking</h3>
                  <p className="common-para">
                    Nemo cubilia non, exercitationem ridiculus modi faucibus
                    nullam animi suspendie in porttitor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="attend-card">
                <div className="upper">
                  <div className="event-icon">
                    <img src={attend2} alt="" className="img-fluid" />
                  </div>
                  <div className="event-number f1 ">02.</div>
                </div>
                <div className="lower">
                  <h3 className="attend-card-heading">BOOST CREATIVITY</h3>
                  <p className="common-para">
                    Nemo cubilia non, exercitationem ridiculus modi faucibus
                    nullam animi suspendie in porttitor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="attend-card">
                <div className="upper">
                  <div className="event-icon">
                    <img src={attend3} alt="" className="img-fluid" />
                  </div>
                  <div className="event-number f1 ">03.</div>
                </div>
                <div className="lower">
                  <h3 className="attend-card-heading">AFTER PARTY EVENT</h3>
                  <p className="common-para">
                    Nemo cubilia non, exercitationem ridiculus modi faucibus
                    nullam animi suspendie in porttitor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="attend-card">
                <div className="upper">
                  <div className="event-icon">
                    <img src={attend4} alt="" className="img-fluid" />
                  </div>
                  <div className="event-number f1 ">04.</div>
                </div>
                <div className="lower">
                  <h3 className="attend-card-heading">SPARK CREATIVITY</h3>
                  <p className="common-para">
                    Nemo cubilia non, exercitationem ridiculus modi faucibus
                    nullam animi suspendie in porttitor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="attend-card">
                <div className="upper">
                  <div className="event-icon">
                    <img src={attend5} alt="" className="img-fluid" />
                  </div>
                  <div className="event-number f1 ">05.</div>
                </div>
                <div className="lower">
                  <h3 className="attend-card-heading">TOP SPEAKERS</h3>
                  <p className="common-para">
                    Nemo cubilia non, exercitationem ridiculus modi faucibus
                    nullam animi suspendie in porttitor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="attend-card">
                <div className="upper">
                  <div className="event-icon">
                    <img src={attend6} alt="" className="img-fluid" />
                  </div>
                  <div className="event-number f1 ">06.</div>
                </div>
                <div className="lower">
                  <h3 className="attend-card-heading">POTENTIAL CLIENTS</h3>
                  <p className="common-para">
                    Nemo cubilia non, exercitationem ridiculus modi faucibus
                    nullam animi suspendie in porttitor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ----without carousel---- */}
      <section
        className="section-padding home-speakers with-carousel"
        id="home-speaker"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              {/* <p className="common-pre-heading">Organising committee</p> */}
              <h2 className="common-heading ">Our Organising Committee</h2>
              {/* <p className="common-para ">
                Quam amet tristique adipisicing incididunt arcu, excepturi
                molestie turpis deserunt ducimus malesuada minus mauris veniam.
              </p> */}
            </div>
          </div>
          <div className="row mt-md-3 mt-lg-5">
            <Carousel
              // swipeable={true}
              arrows={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              // ssr={true}
              // infinite={true}
              autoPlay={false}
              autoPlaySpeed={50000}
              // keyBoardControl={true}
              // transitionDuration={500}
            >
              <div className="member-profile">
                <div className="speaker-card">
                  {/* <div className="speaker-pic">
                    <img src={comittee2} className="img-fluid" alt="" />
                  </div> */}
                  <div className="speaker-detail">
                    <div className="upper">
                      <h3 className="speaker-title">
                        Vice Admiral <br /> Adhir Arora , NM
                      </h3>
                      <span className="speaker-post">PRESIDENT, INCA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-profile">
                <div className="speaker-card">
                  {/* <div className="speaker-pic">
                    <img src={comittee7} className="img-fluid" alt="" />
                  </div> */}
                  <div className="speaker-detail">
                    <div className="upper">
                      <h3 className="speaker-title">
                        Rear Admiral <br /> Lochan Singh Pathania
                      </h3>
                      <span className="speaker-post">PATRON</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-profile">
                <div className="speaker-card">
                  {/* <div className="speaker-pic">
                    <img src={comittee6} className="img-fluid" alt="" />
                  </div> */}
                  <div className="speaker-detail">
                    <div className="upper">
                      <h3 className="speaker-title">
                        Cmde Peush Pawsey
                      </h3>
                      <span className="speaker-post">CHAIRMAN</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-profile">
                <div className="speaker-card">
                  {/* <div className="speaker-pic">
                    <img src={comittee5} className="img-fluid" alt="" />
                  </div> */}
                  <div className="speaker-detail">
                    <div className="upper">
                      <h3 className="speaker-title">
                        Captain Kuldeep Singh
                      </h3>
                      <span className="speaker-post">ORGANISING SECRETARY</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-profile">
                <div className="speaker-card">
                  {/* <div className="speaker-pic">
                    <img src={comittee1} className="img-fluid" alt="" />
                  </div> */}
                  <div className="speaker-detail">
                    <div className="upper">
                      <h3 className="speaker-title">
                        Rajesh Kumar Khatri
                      </h3>
                      <span className="speaker-post">LOC MEMBER</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-profile">
                <div className="speaker-card">
                  {/* <div className="speaker-pic">
                    <img src={comittee4} className="img-fluid" alt="" />
                  </div> */}
                  <div className="speaker-detail">
                    <div className="upper">
                      <h3 className="speaker-title">
                        Dr. R A Prasad
                      </h3>
                      <span className="speaker-post">LOC MEMBER</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-profile">
                <div className="speaker-card">
                  {/* <div className="speaker-pic">
                    <img src={comittee3} className="img-fluid" alt="" />
                  </div> */}
                  <div className="speaker-detail">
                    <div className="upper">
                      <h3 className="speaker-title">
                        Dr. B K Ramprasad
                      </h3>
                      <span className="speaker-post">LOC MEMBER</span>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="row mt-md-2 mt-lg-5">
            <div className="col-md-12 mt-5 text-center">
              {/* <button className=" common-btn">View All Members</button> */}
            </div>
          </div>
        </div>
      </section>
      {/* ------ without carousel----*/}
      {/* <section className="section-padding home-speakers without-carousel ">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <p className="common-pre-heading">Organising committee</p>
              <h2 className="common-heading ">OUR ORGANISING COMMITTEE</h2>
              <p className="common-para ">
                Quam amet tristique adipisicing incididunt arcu, excepturi
                molestie turpis deserunt ducimus malesuada minus mauris veniam.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="speaker-card">
                <div className="speaker-pic">
                  <img src={comittee2} className="img-fluid" alt="" />
                </div>
                <div className="speaker-detail">
                  <div className="upper">
                    <h3 className="speaker-title">
                      Vice Admiral Adhir Arora, NM ,C H to GoI
                    </h3>
                    <span className="speaker-post">
                      Chief Hydrographer & President INCA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="speaker-card">
                <div className="speaker-pic">
                  <img src={idelimage} className="img-fluid" alt="" />
                </div>
                <div className="speaker-detail">
                  <div className="upper">
                    <h3 className="speaker-title">
                      Retired Admiral Lochan singh pathania
                    </h3>
                    <span className="speaker-post">JCH / Patron</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="speaker-card">
                <div className="speaker-pic">
                  <img src={idelimage} className="img-fluid" alt="" />
                </div>
                <div className="speaker-detail">
                  <div className="upper">
                    <h3 className="speaker-title">
                      Chairman-cmde Peush Pawsey
                    </h3>
                    <span className="speaker-post">CMDE (H) - CB & Press</span>
                  </div>
                </div>
                <div className="speaker-detail">
                  <div className="upper">
                    <h3 className="speaker-title">
                      Capt. Kuldeep Singh capt (H)-HP
                    </h3>
                    <span className="speaker-post">Organising Secretary</span>
                  </div>
                </div>
                <div className="speaker-detail">
                  <div className="upper">
                    <h3 className="speaker-title">Dr. RA Prasad 
                    DYCCHO</h3>
                    <span className="speaker-post">Chief Coordinator</span>
                  </div>
                </div>
                <div className="speaker-detail">
                  <div className="upper">
                    <h3 className="speaker-title">Dr. BK Ram Prasad ACCHO</h3>
                    <span className="speaker-post">Editor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 mt-5 text-center">
              <button className=" common-btn">View All Members</button>
            </div>
          </div>
        </div>
      </section> */}

      {/* -----without carousel----- */}
      {/* <section
        className="section-padding home-schedule without-carousel"
        id="home-schedule-desk"
      > */}
      {/* <div className="container"> */}
      {/* <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="common-pre-heading">SCHEDULE DETAILS</p>
              <h2 className="common-heading ">
                SCHEDULE WILL BE PUBLISHED ONCE FINALISED
              </h2>
              <p className="common-para ">
                Quam amet tristique adipisicing incididunt arcu, excepturi
                molestie turpis deserunt ducimus malesuada minus mauris veniam.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="schedule-circles ">
                <div
                  className={`${
                    showEvents === "9nov"
                      ? "common-circle  circleactive"
                      : "common-circle "
                  }`}
                  onClick={() => showEventsByDate("9nov")}
                >
                  <p className="c-heading f1">09 Nov </p>
                  <p className="shedule-day f1">Wednesday</p>
                </div>
                <div className="before-line"></div>
                <div
                  className={`${
                    showEvents === "10nov"
                      ? "common-circle  circleactive"
                      : "common-circle "
                  }`}
                  onClick={() => showEventsByDate("10nov")}
                >
                  <p className="c-heading f1">10 Nov </p>
                  <p className="shedule-day f1">Thursday</p>
                </div>

                <div className="before-line"></div>
                <div
                  className={`${
                    showEvents === "11nov"
                      ? "common-circle  circleactive"
                      : "common-circle "
                  }`}
                  onClick={() => showEventsByDate("11nov")}
                >
                  <p className="c-heading f1">11 Nov </p>
                  <p className="shedule-day f1">Friday</p>
                </div>
              </div>
            </div>
          </div> */}
      <div className="row mt-lg-5 ">
        {showEvents == "9nov" && (
          <>
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left light">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info1</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>
                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser3} />
                              </div>
                              <div className="pic">
                                <img src={organiser4} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left ">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>
                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser1} />
                              </div>
                              <div className="pic">
                                <img src={organiser2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left light">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>
                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser3} />
                              </div>
                              <div className="pic">
                                <img src={organiser4} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left ">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>

                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser1} />
                              </div>
                              <div className="pic">
                                <img src={organiser2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
          </>
        )}
        {/* ----copy----- */}
        {showEvents == "10nov" && (
          <>
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left light">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info 2</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>
                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser3} />
                              </div>
                              <div className="pic">
                                <img src={organiser4} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left ">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>
                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser1} />
                              </div>
                              <div className="pic">
                                <img src={organiser2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left light">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>
                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser3} />
                              </div>
                              <div className="pic">
                                <img src={organiser4} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left ">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>

                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser1} />
                              </div>
                              <div className="pic">
                                <img src={organiser2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
          </>
        )}
        {/* -----paste----
            ----copy----- */}
        {showEvents == "11nov" && (
          <>
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left light">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info 3</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>
                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser3} />
                              </div>
                              <div className="pic">
                                <img src={organiser4} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left ">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>
                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser1} />
                              </div>
                              <div className="pic">
                                <img src={organiser2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left light">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>
                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser3} />
                              </div>
                              <div className="pic">
                                <img src={organiser4} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="col-md-12">
                  <div className="schedule-long-card">
                    <div className="row ">
                      <div className="col-lg-4">
                        <div className="left ">
                          <p className="timing f2">From 9:30 to 11:30</p>
                          <p className="name f1">BUSINESS LECTURE</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 right">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="organiser-info">
                              <h3>Business Managment Info</h3>
                              <p className="common-para">
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus
                                malesuada minus mauris veniam.
                              </p>

                              <a href="#" className="common-learn-more">
                                Learn More...
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="schedule-pic-box">
                              <div className="pic">
                                <img src={organiser1} />
                              </div>
                              <div className="pic">
                                <img src={organiser2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
          </>
        )}
        {/* -----paste---- */}
      </div>
      {/* </div> */}
      {/* </section> */}
      {/* ------ without carousel---- */}
      <section
        className="section-padding home-schedule with-carousel"
        id="home-schedule-mob"
      >
        <div className="container">
          {/* <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="common-pre-heading">SCHEDULE DETAILS</p>
              <h2 className="common-heading ">
                INFORMATION OF EVENT SCHEDULE !
              </h2>
              <p className="common-para ">
                Quam amet tristique adipisicing incididunt arcu, excepturi
                molestie turpis deserunt ducimus malesuada minus mauris veniam.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="schedule-circles">
                <div
                  className={`${
                    showEvents === "9nov"
                      ? "common-circle  circleactive"
                      : "common-circle "
                  }`}
                  onClick={() => showEventsByDate("9nov")}
                >
                  <p className="c-heading f1">09 Nov </p>
                  <p className="shedule-day f1">Tuesday</p>
                </div>
                <div className="before-line"></div>
                <div
                  className={`${
                    showEvents === "10nov"
                      ? "common-circle  circleactive"
                      : "common-circle "
                  }`}
                  onClick={() => showEventsByDate("10nov")}
                >
                  <p className="c-heading f1">10 Nov </p>
                  <p className="shedule-day f1">Wednesday</p>
                </div>

                <div className="before-line"></div>
                <div
                  className={`${
                    showEvents === "11nov"
                      ? "common-circle  circleactive"
                      : "common-circle "
                  }`}
                  onClick={() => showEventsByDate("11nov")}
                >
                  <p className="c-heading f1">11 Nov </p>
                  <p className="shedule-day f1">Thursday</p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row ">
            {showEvents == "9nov" && (
              <>
                {/* <Carousel
                  swipeable={true}
                  arrows={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  ShowArrows={false}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  transitionDuration={500}
                  itemClass="carousel-item-padding-40-px"
                >
                  <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left light">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info1</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>
                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser3} />
                                </div>
                                <div className="pic">
                                  <img src={organiser4} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left ">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>
                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser1} />
                                </div>
                                <div className="pic">
                                  <img src={organiser2} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left light">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>
                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser3} />
                                </div>
                                <div className="pic">
                                  <img src={organiser4} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left ">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>

                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser1} />
                                </div>
                                <div className="pic">
                                  <img src={organiser2} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel> */}
              </>
            )}
            {/* ----copy----- */}
            {showEvents == "10nov" && (
              <>
                <Carousel
                  swipeable={true}
                  arrows={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  ShowArrows={false}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  transitionDuration={500}
                  itemClass="carousel-item-padding-40-px"
                >
                  {/* <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left light">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info 2</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>
                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser3} />
                                </div>
                                <div className="pic">
                                  <img src={organiser4} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left ">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>
                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser1} />
                                </div>
                                <div className="pic">
                                  <img src={organiser2} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left light">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>
                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser3} />
                                </div>
                                <div className="pic">
                                  <img src={organiser4} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left ">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>

                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser1} />
                                </div>
                                <div className="pic">
                                  <img src={organiser2} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </Carousel>
              </>
            )}
            {/* -----paste---- */}
            {/* ----copy----- */}
            {showEvents == "11nov" && (
              <>
                <Carousel
                  swipeable={true}
                  arrows={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  ShowArrows={false}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  transitionDuration={500}
                  itemClass="carousel-item-padding-40-px"
                >
                  {/* <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left light">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info 3</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>
                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser3} />
                                </div>
                                <div className="pic">
                                  <img src={organiser4} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left ">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>
                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser1} />
                                </div>
                                <div className="pic">
                                  <img src={organiser2} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left light">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>
                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser3} />
                                </div>
                                <div className="pic">
                                  <img src={organiser4} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-12">
                    <div className="schedule-long-card">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="left ">
                            <p className="timing f2">From 9:30 to 11:30</p>
                            <p className="name f1">BUSINESS LECTURE</p>
                          </div>
                        </div>
                        <div className="col-lg-8 p-5 right">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="organiser-info">
                                <h3>Business Managment Info</h3>
                                <p className="common-para">
                                  Quam amet tristique adipisicing incididunt
                                  arcu, excepturi molestie turpis deserunt
                                  ducimus malesuada minus mauris veniam.
                                </p>

                                <a href="#" className="common-learn-more">
                                  Learn More...
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="schedule-pic-box">
                                <div className="pic">
                                  <img src={organiser1} />
                                </div>
                                <div className="pic">
                                  <img src={organiser2} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </Carousel>
              </>
            )}
            {/* -----paste---- */}
          </div>
        </div>
      </section>
      {/* ------ without carousel----*/}

      <section className="section-padding home-register-step">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="common-heading">Quick Links</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <ul className="ps-0 list-unstyled">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <li>
                      <div className="reg-icon-box">
                        <div>
                          <img src={reg2} className="img-fluid" alt="" />
                        </div>
                        <div className="ps-5">
                          <h3> Sponsorship </h3>
                          {/* <p> Become a Sponsor</p> */}
                          <button
                            className="common-btn"
                            onClick={() => navigation("/sponsorForm")}
                          >
                            Be a sponsor
                          </button>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <li>
                      {" "}
                      <div className="reg-icon-box">
                        <div>
                          <img src={reg4} className="img-fluid" alt="" />
                        </div>
                        <div className="ps-5">
                          <h3>Exhibitor</h3>
                          {/* <p> Become a Exhibitor </p> */}
                          <button
                            className=" common-btn"
                            onClick={() => navigation("/exhibitor")}
                          >
                            Be a Exhibitor
                          </button>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <li>
                      {" "}
                      <div className="reg-icon-box">
                        <div>
                          <img src={reg4} className="img-fluid" alt="" />
                        </div>
                        <div className="ps-5">
                          <h3> Delegate </h3>
                          {/* <p> Get your Conference Pass </p> */}
                          <button
                            className=" common-btn"
                            onClick={() => navigation("/register")}
                          >
                            Registration
                          </button>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding home-about pb-lg-5 mb-lg-4 without-carousel ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="home-about-left">
                <div className="row pt-5">
                  <div className="col-lg-7 col-6 ">
                    <div className="one text-end set-img">
                      <img
                        src={gallary1}
                        className="img-fluid"
                        width={215}
                        height={150}
                      />
                    </div>
                    <div className="two py-3 set-img">
                      <img src={gallary2} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-6">
                    <div className="four  set-img">
                      <img src={gallary4} className="img-fluid w-75" />
                    </div>

                    <div className="five pt-3 set-img">
                      <img src={gallary5} className="img-fluid" />
                    </div>
                  </div>
                  <div className="row p-0">
                    <div className="col-lg-12 ps-4 pe-0">
                      <div className="three text-end set-img">
                        <img src={gallary3} className="img-fluid w-75 h-25" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-about-right pt-lg-5 mt-lg-5 ps-md-5">
                <h1 className="common-heading pt-4">
                  About INCA (Indian National Cartographic Association)
                </h1>
                <p className="common-para text-justify">
                  INCA as an association provides an interface between academia,
                  particularly geographers, geologists, earth scientists,
                  technologists etc., and government institutions and
                  geo-spatial industries involved in manufacturing of mapping
                  and surveying tools and software, mapping and geo-spatial
                  analysis.
                </p>
              </div>
              <div className="signature-box">
                <div className="upper-box">
                  <ul className="list-unstyled">
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>

                      <span>
                        To foster cartographic research in the country , To
                        co-operate with professional organisations of cognate
                        disciplines and to promote academic interaction within
                        an inter-disciplinary frame.
                      </span>
                    </li>
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>

                      <span>
                        To co-operate with international organisations with
                        similar objectives , To improve the teaching of
                        cartography at all levels.
                      </span>
                    </li>

                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>

                      <span>
                        To foster co-operation between Government and
                        Quasi-Government organisations, Research Institutions
                        for the advancement of cartography , To hold a National
                        Cartographic Conference, ordinarily, once in a year.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding home-about pb-lg-0 with-carousel">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="home-about-left">
                <div className="row">
                  <Carousel
                    swipeable={true}
                    arrows={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    ShowArrows={false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    itemClass="carousel-item-padding-40-px"
                  >
                    <div className="col-md-12">
                      <img src={gallary1} className="img-fluid" />
                    </div>
                    <div className="col-md-12">
                      <img src={gallary2} className="img-fluid" />
                    </div>
                    <div className="col-md-12">
                      <img src={gallary3} className="img-fluid " />
                    </div>
                    <div className="col-md-12">
                      <img src={gallary4} className="img-fluid " />
                    </div>
                    <div className="col-md-12">
                      <img src={gallary5} className="img-fluid" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-about-right pt-lg-5 mt-lg-5 ps-md-5">
                <h1 className="common-heading pt-4">
                  About INCA (Indian National Cartographic Association)
                </h1>
                <p className="common-para">
                  INCA as an association provides an interface between academia,
                  particularly geographers, geologists, earth scientists,
                  technologists etc., and government institutions and
                  geo-spatial industries involved in manufacturing of mapping
                  and surveying tools and software, mapping and geo-spatial
                  analysis.
                </p>
              </div>
              <div className="signature-box">
                <div className="upper-box">
                  <ul className="list-unstyled">
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>
                      <span>
                        To foster cartographic research in the country , To
                        co-operate with professional organisations of cognate
                        disciplines and to promote academic interaction within
                        an inter-disciplinary frame.
                      </span>
                    </li>
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>
                      <span>
                        To co-operate with international organisations with
                        similar objectives , To improve the teaching of
                        cartography at all levels.
                      </span>
                    </li>
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>
                      <span>
                        To foster co-operation between Government and
                        Quasi-Government organisations, Research Institutions
                        for the advancement of cartography , To hold a National
                        Cartographic Conference, ordinarily, once in a year.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors-area">
        <div className="container">
          <div className="row position-relative">
            <div className="col-md-7 mx-auto text-center">
              <h2>SPONSOR</h2>
            </div>
          </div>
          <div className="sponsor-btn-temp">
            <button
              className="common-btn"
              type="button"
              onClick={() => navigation("/sponsorForm")}
            >
              BE A SPONSOR
            </button>
          </div>
        </div>
      </section>

      <section className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="common-heading">Announcements</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="blog-card">
                
                <a target="_blank" href={SecondSercular}>
                  <div className="blog-card-pic">
                    <img src={Event_2} alt="Second-Circular"></img>
                  </div>
                </a>
                <div className="blog-card-content">
                  <h3>
                    42<sup>nd</sup> INCA International Congress-First Circular
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-card">
                
                <a target="_blank" href={ThirdSercular}>
                  <div className="blog-card-pic">
                    <img src={Event_2} alt="Second-Circular"></img>
                  </div>
                </a>
                <div className="blog-card-content">
                  <h3>
                    42<sup>nd</sup> INCA International Congress-Second Circular
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="contact-text">
                  <input type="text" placeholder="Your Name.." />
                </div>
                <div className="contact-email">
                  <input type="email" placeholder="Your Email.." />
                </div>
                <div className="contact-textarea">
                  <textarea
                    className="w-100"
                    rows="10"
                    cols="51"
                    placeholder="Enter Message.."
                  ></textarea>
                </div>
                <div className="contact-btn">
                  <button className="common-btn mb-3">Send Message</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact-move">
                {/* <p className="common-pre-heading">GET IN TOUCH</p> */}
                <h2 className="common-heading">
                  You Can Reach Us With Following Details
                </h2>
                {/* <p className="common-para my-4">
                  Quam amet tristique adipisicing incididunt arcu, excepturi
                  molestie turpis deserunt ducimus malesuada minus mauris
                  veniam.
                </p> */}
                <div className="icon-text-movement">
                  <div className="contact-icon">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div className="contact-venue">
                    <h3>EVENT VENUE :</h3>
                    <p className="common-para mb-0">
                      <b> National Hydrographic Office </b> <br />
                      107-A, Rajpur Rd, Post Box – 75,
                      <br /> Dehradun – 248001, Uttarakhand, India
                    </p>
                  </div>
                </div>

                <div className="icon-text-movement">
                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contact-venue">
                    <h3>Email :</h3>
                    <p className="common-para mb-0">info@42inca.org</p>
                  </div>
                </div>

                <div className="icon-text-movement">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-venue">
                    <h3>Phone number :</h3>
                    <p className="common-para mb-0">+91 135 2746290</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="owl-slider d-none">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* -----copy------- */}

              {/* ------paste----- */}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding home-gallery mb-5 without-carousel">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* <p className="common-pre-heading">INCA Events</p> */}
              <h2 className="common-heading ">
                Gallery of previous INCA Congress
              </h2>
            </div>
            <div className="col-md-6">
              {/* <p className="common-para">
                        Founded on 7th August 1979 at Hyderabad, the Indian National
                        Cartographic Association (INCA) has evolved into one of the
                        world's most prominent professional associations of its kind.
                        From a modest beginning with 79 members on its role initially,
                        today it is a professional body with more than 3000 Life Members
                        and 84 Institutional Life Members. It has branches functioning
                        at Bengaluru, Mumbai, Kolkata, Chandigarh, Dehra Dun, Delhi,
                        Gujarat, Hyderabad, Indore, Jodhpur, Kerala, Odisha and Tamil
                        Nadu.
                      </p> */}
            </div>
          </div>
          <div className="row mt-lg-5 ">
            <div className="col-md-12">
              <div className="gallery-wrapper mt-5 row d-none">
                <div className="gallery-box col-lg-3">
                  <img src={inca1} alt="" className="img-fluid" />
                </div>

                <div className="gallery-box col-lg-3">
                  <img src={inca2} alt="" className="img-fluid" />
                </div>

                <div className="gallery-box col-lg-3">
                  <img src={inca3} alt="" className="img-fluid" />
                </div>

                <div className="gallery-box col-lg-3">
                  <img src={inca9} alt="" className="img-fluid" />
                </div>
                <div className="gallery-box col-lg-3">
                  <img src={inca5} alt="" className="img-fluid" />
                </div>
                <div className="gallery-box col-lg-3">
                  <img src={inca6} alt="" className="img-fluid" />
                </div>
                <div className="gallery-box col-lg-3">
                  <img src={inca7} alt="" className="img-fluid" />
                </div>
                <div className="gallery-box col-lg-3">
                  <img src={inca8} alt="" className="img-fluid" />
                </div>
              </div>
              {/* -------GALLERY------ */}
              <div className="grid-wrapper">
                <div className="tall">
                  <img src={inca3} alt="" className="img-fluid" />
                </div>
                <div>
                  <img src={inca2} alt="" className="img-fluid" />
                </div>
                <div className="wide">
                  <img src={inca4} alt="" className="img-fluid" />
                </div>
                <div>
                  <img src={inca5} alt="" className="img-fluid" />
                </div>

                <div>
                  <img src={inca1} alt="" className="img-fluid" />
                </div>
                <div className="tall">
                  <img src={inca8} alt="" className="img-fluid" />
                </div>
                <div className="big">
                  <img src={inca7} alt="" className="img-fluid" />
                </div>
                <div className="wide">
                  <img src={inca6} alt="" className="img-fluid" />
                </div>
              </div>
              {/* ------GALLERY-------- */}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding home-gallery with-carousel">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="home-about-right pt-lg-5 mt-lg-5 ps-md-5">
                {/* <p className="common-pre-heading">Introduction</p> */}
                <h1 className="common-heading pt-4">
                  About INCA (Indian National Cartographic Association)
                </h1>
              </div>
            </div>
            <div className="col-md-12">
              <div className="home-about-left pb-4">
                <div className="row">
                  <Carousel
                    swipeable={true}
                    arrows={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    ShowArrows={false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    itemClass="carousel-item-padding-40-px"
                  >
                    <div className="col-md-12">
                      <img src={inca3} alt="gallerypic" className="img-fluid" />
                    </div>
                    <div className="col-md-12">
                      <img src={inca2} alt="gallerypic" className="img-fluid" />
                    </div>
                    <div className="col-md-12">
                      <img src={inca4} alt="gallerypic" className="img-fluid" />
                    </div>
                    <div className="col-md-12">
                      <img src={inca5} alt="gallerypic" className="img-fluid" />
                    </div>

                    <div className="col-md-12">
                      <img src={inca1} alt="gallerypic" className="img-fluid" />
                    </div>
                    <div className="col-md-12">
                      <img src={inca8} alt="gallerypic" className="img-fluid" />
                    </div>
                    <div className="col-md-12">
                      <img src={inca7} alt="gallerypic" className="img-fluid" />
                    </div>
                    <div className="col-md-12">
                      <img src={inca6} alt="gallerypic" className="img-fluid" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
