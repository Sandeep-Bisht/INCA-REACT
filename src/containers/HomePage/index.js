import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, GetHeaders } from "../../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import "../../css/home.css";
import reg2 from "../../images/reg2.png";
import reg4 from "../../images/reg4.png";
import gallary1 from "../../images/gallery-1.jpg";
import gallary2 from "../../images/gallery-2.jpg";
import gallary3 from "../../images/gallery-3.jpg";
import gallary4 from "../../images/gallery-4.jpg";
import gallary5 from "../../images/gallery-5.jpg";
import Event_2 from "../../images/Capture.png";
import inca1 from "../../images/award.jpeg";
import inca2 from "../../images/41stINCA.png";
import inca3 from "../../images/chandighar.jpeg";
import inca4 from "../../images/JSS (2).jpeg";
import inca5 from "../../images/GUJARAT.png";
import inca6 from "../../images/DS.jpeg";
import inca7 from "../../images/2612.jpeg";
import inca8 from "../../images/DSC_0006.jpeg";
import inca9 from "../../images/inca-image-9.jpg";
import FinalSercular from "../../images/INCA_43rd_First_Circular (2).pdf";
import FirstCircular from "../../SampleFiles/INCA_43rd_First_Circular_28072023_230731_190021.pdf"
import Captcha from "../Captcha";
import homepageBackgroundVideo from '../../video/INCA-video.mp4'


const HomePage = () => {
  const [showEvents, setShowEvents] = useState("1nov");

  const [countdownDays, setCountdownDays] = useState("00");
  const [countdownHours, setCountdownHours] = useState("00");
  const [countdownMinutes, setCountdownMinutes] = useState("00");
  const [countdownSec, setCountdownSec] = useState("00");
  const [verified, setVerified] = useState(false);
  const [setContactMsg, setSetContactMsg] = useState()


  const navigation = useNavigate();
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("nov 06, 2023 00:00:00").getTime();

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

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    firstName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message:""
  });

  const onSubmit = async (data) =>{
    // doSubmit(data)
    console.log(data, "data")
    let url = `${baseUrl}contact-us`

    try {    
      const response = await axios.post(url, data, GetHeaders());
      if(response && response?.data?.emailSendStatus){
        console.log(response.data, "responseee");
        reset()
        setSetContactMsg(response?.data?.message)
        removeContactMsg()
        
      }else{
        reset();
        setSetContactMsg(response?.data?.message)
        removeContactMsg()
        
      }
    } catch (error) {
       console.log(error)
    }
  }

  const removeContactMsg = () => {
    setTimeout(()=> {
      setSetContactMsg("")
    }, 3000)
  }

  

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
        <div className="homepage-video-section">
          <video
            className="w-100"
             src={homepageBackgroundVideo}
            autoPlay
            muted
            loop
          />
        </div>
        <div className="container-home">
          <div className="row pb-md-5 h-100 m-0">
            <div className="col-md-5"></div>
            <div className="col-md-7 d-flex flex-column justify-content-center">
              <div className="right text-center">
                <p className="banner-title f1 text-white">
                  <span className="banner-small text-white">
                    43<sup>rd</sup> INCA International Congress <br />
                    on
                  </span>

                  <p className="head-text">
                    Emerging Trends in Digital 
                  </p>
                  <p className="head-text">
                  Cartography For Sustainable  
                  </p>
                  <p className="head-text">
                  Ecosystems and  Geospatial
                  </p>
                  <p className="head-text">
                   Economy
                  </p>
                  
                  {/* <span className="banner-last">Event-2023</span> */}
                </p>
                <div className="banner-bottom"></div>
                {/* <p className="common-para text-white mt-3">
                  Animi ab libero! Blanditiis, luctus morbi eget esse,
                  ridiculus. Quos laborum sunt facere primis magni cumque.
                </p> */}
                <div className="banner-btn-box pt-2">
                  <button
                    className=" common-btn register-home-btn"
                    onClick={() => navigation("/register")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    REGISTER/SUBMIT ABSTRACT
                  </button>
                  {/* <button
                    className="common-btn-transparent ms-3 home-schedule-desk"
                    onClick={() => navigation("/abstractpage")}
                  >
                    Full Paper Submission
                  </button> */}
                </div>
                <div className="banner-btn-box pt-2">
                  <button
                    className=" common-btn register-home-btn"
                    // onClick={() => navigation("/register")}
                  >
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   <a target="_blank" href={FirstCircular}>
                   First Circular 
                   </a>
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
            <marquee><p><b>"Last date for Abstract Submission: 10<sup>th</sup> August, 2023"</b></p></marquee>
            {/* <marquee><p><b>"The Full paper Submission Date for 42nd INCA Conference is  (Extended) 10<sup>th</sup>October 2023"</b></p></marquee> */}
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
            <div className="col-md-8 mx-auto text-center">
              <h2 className="common-heading">National Remote Sensing centre</h2>
            </div>
            <div className="col-md-12 text-center">
              <div className="welcome-text pt-4">
                <p className="common-para text-justify">
                  National Remote Sensing Centre
                   (NRSC), a key functionary of
                  Indian Space Research Organisation (ISRO), is striving to
                  realize the Indian Space Vision through Earth Observation. It
                  is responsible for the ground segment of Remote Sensing
                  Programme through satellite data acquisition, archival,
                  processing, dissemination, remote sensing applications,
                  training and capacity building. It also provides aerial
                  services in the civilian sector for the country. NRSC has five
                  Regional Centres located at Bangalore, Nagpur, Kolkata, New
                  Delhi and Jodhpur to address region/area specific remote
                  sensing application needs. NRSC is continuously exploring the
                  practical use of remote sensing for societal applications and
                  disaster management through multilevel initiatives,
                  development of value-added data services and remote sensing
                  applications.
                </p>
                <p className="common-para text-justify">
                  Regional Remote Sensing Centre-West (RRSC-West), Jodhpur is
                  one of the regional centres of NRSC. It was established in
                  1987 under the aegis of National Natural Resources Management
                  System (NNRMS) of ISRO to cater to the needs of different user
                  agencies of North-West India. The centre is acting as a hub of
                  space technology applications in the region since last three
                  and half decades, with its current focus on issues related to
                  sustainable arid ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding home-about pb-lg-0 without-carousel event-bg ">
        <div className="container">
          <div className="row py-4 mt-3">
             <div className="col-lg-4">
              <div className="home-about-event-card">
                <div className="left">
                  <span className="first common-yellow-bg">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                </div>
                <div className="right mt-3">
                  <h2 className="h2">Where is the Event</h2>
                  <p className="common-para">
                    <b>
                      {" "}
                      <h5 className="right-text">Regional Remote Sensing Centre (RRSC)-West</h5> National Remote
                      Sensing Centre (NRSC)<br/>
                      Indian Space Research organisation (ISRO)<br/>
                      Bypass Road, Sector 9<br/>
                      Kudi Bhagtasani Housing Board (KBHB)
                    </b>{" "}
                    <br />
                    <b>Jodhpur – 342005</b>
                  </p>
                </div>
              </div></div> 
            

            <div className="col-lg-4">
              <div className="home-about-event-card">
                <div className="left">
                  <span className="second common-blue-bg">
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                </div>
                <div className="right mt-3">
                  <h2 className="h2">When is the Event</h2>
                  <p className="common-para">
                    <b>06 November 2023</b> <br /> <b>07 November 2023</b>{" "}
                    <br /> <b>08 November 2023</b>
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
                <div className="right mt-3">
                  <h2 className="h2">Schedule of the Event</h2>
                  <Link className="common-para pb-3" to="/importantdates">
                    <b>Click here to know details.</b>
                   
                  </Link><br/>
                  <p className="common-para mb-0">
                    <b>Last date for submission of abstract</b></p>
                  <p className="common-para pb-3">
                    <b>10/August/2023</b></p> 
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
      {/* --------with carousel---------  MOBILE */}
      <section className="section-padding home-about pb-lg-0 with-carousel event-bg">
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
                    <b>
                      {" "}
                      <h5 className="right-text">Regional Remote Sensing Centre (RRSC)-West</h5> National Remote
                      Sensing Centre (NRSC)<br/>
                      Indian Space Research organisation (ISRO)<br/>
                      Bypass Road, Sector 9<br/>
                      Kudi Bhagtasani Housing Board (KBHB)
                    </b>{" "}
                    <br />
                    <b>Jodhpur – 342005</b>
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
                    06 November 2023 <br /> 07 November 2023 <br /> 08 November
                    2023
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
                WHY ATTEND INCA 2023 EVENT?
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
                WHY ATTEND INCA 2023 EVENT?
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
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
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
                        Dr. Prakash Chauhan, <br /> NRSC/ISRO
                      </h3>
                      <span className="speaker-post">Patron</span>
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
                        Dr. S. K. Srivastav, <br /> NRSC/ISRO
                      </h3>
                      <span className="speaker-post">Chairman</span>
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
                        Dr. A. K. Bera, RRSC-West, NRSC/ISRO
                      </h3>
                      <span className="speaker-post">Organising Secretary</span>
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
                        Dr. P. C. Moharana, ICAR-CAZRI
                      </h3>
                      <span className="speaker-post">
                        Co-Organising Secretary
                      </span>
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
                        Shri Sagar S. Salunkhe, RRSC-West, NRSC/ISRO
                      </h3>
                      <span className="speaker-post">Treasurer</span>
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
                        Dr. Dandabathula Giribabu, RRSC-West, NRSC/ISRO
                      </h3>
                      <span className="speaker-post">Editor</span>
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
                        Shri Gaurav Kumar, RRSC-West, NRSC/ISRO
                      </h3>
                      <span className="speaker-post">
                        Event Secretariat Focal Point
                      </span>
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
      <div className="">
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

      <section className="section-padding home-register-step event-bg">
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
                        <div className="ps-4">
                          <h3> Sponsorship </h3>
                          {/* <p> Become a Sponsor</p> */}
                          <button
                            className="common-btn ms-2"
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
                        <div className="ps-4">
                          <h3 className="ps-3">Exhibitor</h3>
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
                        <div className="ps-4">
                          <h3 className="ps-2"> Delegate </h3>
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
                <div className="row pt-3">
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
              <div className="home-about-right pt-lg-4 mt-lg-4 ps-md-5">
                <h1 className="common-heading pt-4">The Congress</h1>
                <p className="common-para text-justify">
                  The INCA, established in 1979, is a non-profit making
                  professional body. It is an inter-disciplinary institution
                  originally between Geographers and Cartographers which is now
                  shared by a host of premier public and private bodies. Today,
                  Cartography along with Geoinformatics is a multifaceted and
                  highly complex domain involving several disciplines to enhance
                  the understanding, creation, analysis, and use of maps as well
                  as geographic information in order to support effective
                  decision making and, thus, improving the quality of life. The
                  aims of the association are as follows:
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
                        To foster cartographic research in the country
                      </span>
                    </li>
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>

                      <span>
                        To co-operate with professional organisations of cognate
                        disciplines and to promote interaction within an
                        inter-disciplinary frame.
                      </span>
                    </li>

                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>

                      <span>
                        To co-operate with international organisations with
                        similar objectives.
                      </span>
                    </li>

                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>

                      <span>
                        To foster co-operation between government and
                        quasi-government organisations, research institutions
                        engaged in cartographic activities and their
                        applications.
                      </span>
                    </li>

                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>

                      <span>
                        To hold an annual cartographic congress at the national
                        or international level.
                      </span>
                    </li>

                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>

                      <span>
                        To take such measures as may help secure cartography its
                        legitimate place in national life and enhance a sense of
                        national responsibility and professional efficacy among
                        all the professionals and academic people engaged in
                        cartographic activities in its broad sense.
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
                <h1 className="common-heading pt-4">The Congress</h1>
                <p className="common-para">
                  The INCA, established in 1979, is a non-profit making
                  professional body. It is an inter-disciplinary institution
                  originally between Geographers and Cartographers which is now
                  shared by a host of premier public and private bodies. Today,
                  Cartography along with Geoinformatics is a multifaceted and
                  highly complex domain involving several disciplines to enhance
                  the understanding, creation, analysis, and use of maps as well
                  as geographic information in order to support effective
                  decision making and, thus, improving the quality of life. The
                  aims of the association are as follows:
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
                        To foster cartographic research in the country
                      </span>
                    </li>
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>
                      <span>
                        To co-operate with professional organisations of cognate
                        disciplines and to promote interaction within an
                        inter-disciplinary frame.
                      </span>
                    </li>
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>
                      <span>
                        To co-operate with international organisations with
                        similar objectives.
                      </span>
                    </li>
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>
                      <span>
                        To foster co-operation between government and
                        quasi-government organisations, research institutions
                        engaged in cartographic activities and their
                        applications.
                      </span>
                    </li>
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>
                      <span>
                        To hold an annual cartographic congress at the national
                        or international level.
                      </span>
                    </li>
                    <li className="my-2 py-2">
                      <span className="me-2">
                        <i className="fa-solid fa-circle-check common-yellow-color"></i>
                      </span>
                      <span>
                        To take such measures as may help secure cartography its
                        legitimate place in national life and enhance a sense of
                        national responsibility and professional efficacy among
                        all the professionals and academic people engaged in
                        cartographic activities in its broad sense.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors-area event-bg">
        <div className="container">
          <div className="row position-relative">
            <div className="col-md-7 mx-auto text-center">
              <h2>SPONSOR & EXHIBITOR</h2>
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
            <button
              className="common-btn ms-4"
              type="button"
              onClick={() => navigation("/exhibitor")}
            >
              BE A EXHIBITOR
            </button>
          </div>
          {/* <div className="sponsor-btn-temp bt">
          </div> */}
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
            <div className="col-lg-3">
              <div className="blog-card">
                <a target="_blank" href={FirstCircular}>
                  <div className="blog-card-pic">
                    <img src={Event_2} alt="Second-Circular"></img>
                  </div>
                </a>
                <div className="blog-card-content">
                  <h3>
                    43<sup>rd</sup> INCA International Congress-first Circular
                  </h3>
                </div>
              </div>
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

      <section className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="col-md-6">
                <div className="contact-text">
                  <input
                    // className="form-movement"
                    type="text"
                    name="firstName"
                    placeholder="Your Name.."
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName  && (
                    <p className="text-danger">First name is required</p>
                  )}
                </div>
                </div>
                <div className="col-md-6">
                <div className="contact-email">
                  <input
                    // className="form-movement"
                    type="email"
                    name="email"
                    placeholder="Your Email.."
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                  />
                  {errors.email && <p className="text-danger">Email is required</p>}
                </div>
              </div>
                <div className="col-md-6">
                <div className="contact-text">
                  <input
                    // className="form-movement"
                    type="number"
                    placeholder="Your Number.."
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors.phoneNumber  && (
                    <p className="text-danger">Phone Number is required</p>
                  )}
                </div>
                </div>
                <div className="col-md-6">
                <div className="contact-text">
                  <input
                    // className="form-movement"
                    type="subject"
                    placeholder="Subject.."
                    {...register("subject", { required: true })}
                  />
                  {errors.subject && <p className="text-danger">Subject is required</p>}
                </div>
                </div>
                </div>

                <div className="contact-textarea">
                  <textarea
                    className="w-90"
                    rows="5"
                    cols="51"
                    placeholder="Enter Message.."
                  ></textarea>
                </div>
                <div className="contact-text"> 
                <Captcha captchaLength={6} setVerified ={setVerified}/>
                </div>
               
                      
                <div className="contact-btn">
                  <button disabled={!verified} className="common-btn mb-3">Send Message</button>
                </div>

                <div className="mt-2 mb-2">
                        <p className="text-dark">{setContactMsg}</p>
                      </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact-move">
                {/* <p className="common-pre-heading">GET IN TOUCH</p> */}
                <h2 className="common-heading">
                  You Can Reach Us With Following Details
                </h2>                
                <div className="icon-text-movement">
                  <div className="contact-icon">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div className="contact-venue">
                    <h3>EVENT VENUE :</h3>
                    <p className="common-para mb-0">
                      <b>
                        {" "}
                        Regional Remote Sensing Centre-west <br /> National
                        Remote Sensing Centre (NRSC),ISRO{" "}
                      </b>{" "}
                      <br />
                      <b>Jodhpur– 342005</b>
                    </p>
                  </div>
                </div>

                <div className="icon-text-movement">
                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contact-venue">
                    <h3>Email :</h3>
                    <p className="common-para mb-0">
                      <b>info@43inca.org</b>
                    </p>
                  </div>
                </div>

                <div className="icon-text-movement">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-venue">
                    <h3>Phone number :</h3>
                    <p className="common-para mb-0">
                      <b>+91 2912796395</b>
                    </p>
                  </div>
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
