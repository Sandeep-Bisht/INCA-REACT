import React, { useEffect } from 'react'
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import '../../css/home.css'
import about1 from '../../images/about1.jpg'
import about2 from '../../images/about2.jpg'
import about3 from '../../images/about3.jpg'
import about4 from '../../images/about4.jpg'
import about5 from '../../images/about5.jpg'
import signature from '../../images/signature.png'
import attend1 from '../../images/attend1.png'
import attend2 from '../../images/attend2.png'
import attend3 from '../../images/attend3.png'
import attend4 from '../../images/attend4.png'
import attend5 from '../../images/attend5.png'
import attend6 from '../../images/attend6.png'
import speaker1 from '../../images/speaker1.jpg'
import organiser1 from '../../images/organiser1.jpg'
import organiser2 from '../../images/organiser2.jpg'
import organiser3 from '../../images/organiser3.jpg'
import organiser4 from '../../images/organiser4.jpg'
import gallery1 from '../../images/gallery1.jpg'
import gallery2 from '../../images/gallery2.jpg'
import gallery3 from '../../images/gallery3.jpg'
import gallery4 from '../../images/gallery4.jpg'
import gallery5 from '../../images/gallery5.jpg'
import gallery6 from '../../images/gallery6.jpg'
import gallery7 from '../../images/gallery7.jpg'
import gallery8 from '../../images/gallery8.jpg'
import reg1 from '../../images/reg1.png'
import reg2 from '../../images/reg2.png'
import reg3 from '../../images/reg3.png'
import reg4 from '../../images/reg4.png'
import reg5 from '../../images/reg5.png'
import visitor1 from '../../images/visitor-1.jpg';
import visitor2 from '../../images/visitor-2.jpg';
import visitor3 from '../../images/visitor-3.jpg';
import client1 from '../../images/client-1.png';
import client2 from '../../images/client-2.png';
import client3 from '../../images/client-3.png';
import client4 from '../../images/client-4.png';
import client5 from '../../images/client-5.png';
import client6 from '../../images/client-6.png';
import client7 from '../../images/client-7.png';
import client8 from '../../images/client-8.png';
import client9 from '../../images/client-9.png';
import client10 from '../../images/client-10.png';


export const HomePage = () => {

    useEffect(() => {
        let nav = document.querySelector(".header-wrapper");
        let link = document.querySelector(".nav-link");
        window.onscroll = function () {
            if (document.documentElement.scrollTop > 20) {
                nav.classList.add("header-scrolled");
                link.classList.add("scrolled-link")

            }
            else {
                nav.classList.remove("header-scrolled");
                link.classList.remove("scrolled-link")
            }
        }
    }, [])
    useEffect(() => {
        var dest = new Date("nov 1, 2022 00:00:00").getTime();
        var x = setInterval(function () {

            var now = new Date().getTime();

            var diff = dest - now;

            var days = Math.floor(diff / (1000 * 60 * 60 * 24));

            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            var seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("day").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }, 1000);

    }, [])




    return (
        <>
            <div className='home-banner'>
                <div className='container'>
                    <div className='row pb-5'>
                        <div className='col-md-7'>
                            <div className='left'></div>
                        </div>
                        <div className='col-md-5'>
                            <div className='right text-center'>

                                <p className='banner-title f1 text-white'>
                                    <span className='banner-small text-white'>Inca Annual</span>
                                    <br />
                                    <span className='common-yellow-color'> Conference</span>
                                    <br />
                                    <span className='banner-last'>
                                        Event-2022
                                    </span>
                                </p>
                                <div className='banner-bottom'></div>
                                <p className='common-para text-white mt-3'>
                                    Animi ab libero! Blanditiis, luctus morbi eget esse,
                                    ridiculus. Quos laborum sunt facere primis magni cumque.
                                </p>
                                <div className='banner-btn-box pt-2'>
                                    <button className=' common-btn'>Book Reservation</button>
                                    <button className='common-btn-transparent ms-3'>View Schedule</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <div className="count">
                                <div className='counter-wrapper'>
                                    <p id="day" className="common-timer-box common-yellow-color">245</p>
                                    <p className="timer-detail">Days</p>
                                </div>
                                <div className='counter-wrapper'>
                                    <p id="hours" className="common-timer-box common-yellow-color">20</p>
                                    <p className="timer-detail">Hours</p>
                                </div>
                                <div className='counter-wrapper'>
                                    <p id="minutes" className="common-timer-box common-yellow-color">1</p>
                                    <p className="timer-detail">Minutes</p>
                                </div>
                                <div className='counter-wrapper'>
                                    <p id="seconds" className="common-timer-box common-yellow-color">5</p>
                                    <p className="timer-detail">Seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='section-padding home-about pb-lg-0'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='home-about-left pt-5'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='one text-end'>
                                            <img src={about1} className="img-fluid" width={215}
                                                height={
                                                    150
                                                }

                                            />
                                        </div>
                                        <div className='two py-3'>
                                            <img src={about2} className="img-fluid" /></div>
                                        <div className='three text-end'>
                                            <img src={about3} className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='four mt-3 pt-4'><img src={about4} className="img-fluid" /></div>
                                        <div className='five pt-3'><img src={about5} className="img-fluid" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>

                            <div className='home-about-right pt-lg-5 mt-lg-5'>
                                <p className='common-pre-heading'>Introduction</p>
                                <h1 className='common-heading'>
                                    KNOW MORE ABOUT OUR GRAND EVENT
                                </h1>
                                <p className='common-para'>Consequat sociosqu sem officiis
                                    aute ridiculus repellat in aliquip at, metus sociosqu veritatis cubilia ac soluta? Faucibus ipsam, incidunt cras.</p>
                            </div>
                            <div className='signature-box'>
                                <div className='upper-box'>
                                    <ul className='list-unstyled'>
                                        <li className='my-2 py-2'>
                                            <span className='me-2'>
                                                <i class="fa-solid fa-circle-check common-yellow-color"></i>

                                            </span>

                                            <span>
                                                Lusto tenetur temporibus repellendus aspernatur,
                                                blandit ullam cupidatat quisquam lacinia.</span>
                                        </li>
                                        <li className='my-2 py-2'>
                                            <span className='me-2'><i class="fa-solid fa-circle-check common-yellow-color"></i>

                                            </span>

                                            <span>Lusto tenetur temporibus repellendus
                                                aspernatur, blandit ullam cupidatat quisquam lacinia.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='lower-box'>
                                    <figure class="figure">

                                        <div className='fig-signature-box px-5'>
                                            <img src={signature} class=" img-fluid"
                                                alt="" /></div>

                                        <figcaption>
                                            <p className='event-manager'>MD WILLIAM HOUSTON</p>
                                            <p className='event-name'>Event Organiser</p></figcaption>
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='home-about-event-card'>
                                <div className='left'>
                                    <span className='first common-yellow-bg'><i class="fa-solid fa-location-dot"></i></span>
                                </div>
                                <div className='right'>
                                    <h2 className='h2'>Where is the Event:</h2>
                                    <p className='common-para'>
                                        221B Baker Street, P.O Box 353 Park Road, San Francisco USA - 215431
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='home-about-event-card'>
                                <div className='left'>
                                    <span className='second common-blue-bg'><i class="fa-solid fa-calendar-days"></i></span>
                                </div>
                                <div className='right'>
                                    <h2 className='h2'>Where is the Event:</h2>
                                    <p className='common-para'>
                                        ( Sunday to Wednesday ) 20 January 2022 to 24 January 2022.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-padding home-counter'>
                <div className='container pt-5'>
                    <div className="row pt-5">
                        <div className='col-lg-3 py-4'>
                            <div className='counter-card'>
                                <h2 className='counter-heading'>220+</h2>
                                <span className='counter-title'>Total Journalist</span>
                            </div>
                        </div>
                        <div className='col-lg-3 py-4'>
                            <div className='counter-card'>
                                <h2 className='counter-heading'>35+</h2>
                                <span className='counter-title f2'>EVENT SPEAKERS</span>
                            </div>
                        </div>
                        <div className='col-lg-3 py-4'>
                            <div className='counter-card'>
                                <h2 className='counter-heading'>45+</h2>
                                <span className='counter-title f2'>EVENT SESSIONS</span>
                            </div>
                        </div>
                        <div className='col-lg-3 py-4'>
                            <div className='counter-card border-0'>
                                <h2 className='counter-heading'>25+</h2>
                                <span className='counter-title f2'>SPONSERS & PARTNERS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-padding home-attend-event'>
                <div className='container'>
                    <div className='row position-relative'>
                        <div className='col-md-8 mx-auto text-center'>
                            <p class="common-pre-heading">Introduction</p>
                            <h2 className='common-heading text-white'>
                                WHY ATTEND OUR EVENT?
                            </h2>
                            <p className='common-para text-white position-relative'>
                                Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.
                            </p>
                        </div>
                    </div>
                    <div className='row position-relative mt-lg-5'>
                        <div className='col-lg-4'>
                            <div className='attend-card'>
                                <div className='upper'>
                                    <div className='event-icon'>
                                        <img src={attend1} alt="" className='img-fluid' />
                                    </div>
                                    <div className='event-number f1 '>01.</div>
                                </div>
                                <div className='lower'>
                                    <h3 className='attend-card-heading'>In  Person Networking</h3>
                                    <p className='common-para'>
                                        Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='attend-card'>
                                <div className='upper'>
                                    <div className='event-icon'>
                                        <img src={attend2} alt="" className='img-fluid' />
                                    </div>
                                    <div className='event-number f1 '>02.</div>
                                </div>
                                <div className='lower'>
                                    <h3 className='attend-card-heading'>BOOST CREATIVITY</h3>
                                    <p className='common-para'>
                                        Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='attend-card'>
                                <div className='upper'>
                                    <div className='event-icon'>
                                        <img src={attend3} alt="" className='img-fluid' />
                                    </div>
                                    <div className='event-number f1 '>03.</div>
                                </div>
                                <div className='lower'>
                                    <h3 className='attend-card-heading'>AFTER PARTY EVENT</h3>
                                    <p className='common-para'>
                                        Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='attend-card'>
                                <div className='upper'>
                                    <div className='event-icon'>
                                        <img src={attend4} alt="" className='img-fluid' />
                                    </div>
                                    <div className='event-number f1 '>04.</div>
                                </div>
                                <div className='lower'>
                                    <h3 className='attend-card-heading'>SPARK CREATIVITY</h3>
                                    <p className='common-para'>
                                        Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='attend-card'>
                                <div className='upper'>
                                    <div className='event-icon'>
                                        <img src={attend5} alt="" className='img-fluid' />
                                    </div>
                                    <div className='event-number f1 '>05.</div>
                                </div>
                                <div className='lower'>
                                    <h3 className='attend-card-heading'>TOP SPEAKERS</h3>
                                    <p className='common-para'>
                                        Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='attend-card'>
                                <div className='upper'>
                                    <div className='event-icon'>
                                        <img src={attend6} alt="" className='img-fluid' />
                                    </div>
                                    <div className='event-number f1 '>06.</div>
                                </div>
                                <div className='lower'>
                                    <h3 className='attend-card-heading'>POTENTIAL CLIENTS</h3>
                                    <p className='common-para'>
                                        Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-padding home-speakers'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 mx-auto text-center'>
                            <p class="common-pre-heading">EVENT SPEAKERS</p>
                            <h2 className='common-heading '>
                                OUR EVENT SPEAKERS
                            </h2>
                            <p className='common-para '>
                                Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.
                            </p>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4'>
                            <div className='speaker-card'>
                                <div className='speaker-pic'>
                                    <img src={speaker1} className="img-fluid" alt='' />
                                </div>
                                <div className='speaker-detail'>
                                    <div className='upper'>
                                        <h3 className='speaker-title'>William Hob</h3>
                                        <span className='speaker-post'>Chief Executive Officer</span>
                                    </div>
                                    <div className='lower'>
                                        <ul className='list-unstyled ps-0 d-flex justify-content-center'>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-facebook-f"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-twitter"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-instagram"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-linkedin-in"></i></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='speaker-card'>
                                <div className='speaker-pic'>
                                    <img src={speaker1} className="img-fluid" alt='' />
                                </div>
                                <div className='speaker-detail'>
                                    <div className='upper'>
                                        <h3 className='speaker-title'>William Hob</h3>
                                        <span className='speaker-post'>Chief Executive Officer</span>
                                    </div>
                                    <div className='lower'>
                                        <ul className='list-unstyled ps-0 d-flex justify-content-center'>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-facebook-f"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-twitter"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-instagram"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-linkedin-in"></i></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='speaker-card'>
                                <div className='speaker-pic'>
                                    <img src={speaker1} className="img-fluid" alt='' />
                                </div>
                                <div className='speaker-detail'>
                                    <div className='upper'>
                                        <h3 className='speaker-title'>William Hob</h3>
                                        <span className='speaker-post'>Chief Executive Officer</span>
                                    </div>
                                    <div className='lower'>
                                        <ul className='list-unstyled ps-0 d-flex justify-content-center'>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-facebook-f"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-twitter"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-instagram"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-linkedin-in"></i></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='speaker-card'>
                                <div className='speaker-pic'>
                                    <img src={speaker1} className="img-fluid" alt='' />
                                </div>
                                <div className='speaker-detail'>
                                    <div className='upper'>
                                        <h3 className='speaker-title'>William Hob</h3>
                                        <span className='speaker-post'>Chief Executive Officer</span>
                                    </div>
                                    <div className='lower'>
                                        <ul className='list-unstyled ps-0 d-flex justify-content-center'>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-facebook-f"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-twitter"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-instagram"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-linkedin-in"></i></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='speaker-card'>
                                <div className='speaker-pic'>
                                    <img src={speaker1} className="img-fluid" alt='' />
                                </div>
                                <div className='speaker-detail'>
                                    <div className='upper'>
                                        <h3 className='speaker-title'>William Hob</h3>
                                        <span className='speaker-post'>Chief Executive Officer</span>
                                    </div>
                                    <div className='lower'>
                                        <ul className='list-unstyled ps-0 d-flex justify-content-center'>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-facebook-f"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-twitter"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-instagram"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-linkedin-in"></i></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='speaker-card'>
                                <div className='speaker-pic'>
                                    <img src={speaker1} className="img-fluid" alt='' />
                                </div>
                                <div className='speaker-detail'>
                                    <div className='upper'>
                                        <h3 className='speaker-title'>William Hob</h3>
                                        <span className='speaker-post'>Chief Executive Officer</span>
                                    </div>
                                    <div className='lower'>
                                        <ul className='list-unstyled ps-0 d-flex justify-content-center'>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-facebook-f"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-twitter"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-instagram"></i></span></a></li>
                                            <li className='px-1'><a href='#'><span><i className="fa-brands fa-linkedin-in"></i></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12 text-center'>
                            <button className=' common-btn'>View All Speakers</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-padding home-schedule'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <p className="common-pre-heading">SCHEDULE DETAILS</p>
                            <h2 className="common-heading ">
                                INFORMATION OF EVENT SCHEDULE !
                            </h2>
                            <p className="common-para ">Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.</p>
                        </div>
                        <div className='col-lg-6'>
                            <div className='schedule-circles'>
                                <div className='common-circle one common-yellow-bg'>
                                    <p className='c-heading f1'>3Nov </p>
                                    <p className='shedule-day f1'>Sunday</p>
                                </div>
                                <div className='common-circle two'>
                                    <p className='c-heading f1'>4Nov </p>
                                    <p className='shedule-day f1'>Monday</p>
                                </div>
                                <div className='common-circle three common-blue-bg'>
                                    <p className='c-heading f1'>5Nov </p>
                                    <p className='shedule-day f1'>Tuesday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-lg-5'>
                        <div className='col-md-12'>
                            <div className='schedule-long-card'>
                                <div className='row '>
                                    <div className='col-lg-4'>
                                        <div className='left light'>
                                            <p className='timing f2'>From 9:30 to 11:30</p>
                                            <p className='name f1'>
                                                BUSINESS LECTURE
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-lg-8 p-5 right'>

                                        <div className='row align-items-center'>
                                            <div className='col-lg-8'>
                                                <div className='organiser-info'>
                                                    <h3>Business Managment Info</h3>
                                                    <p className='common-para'>
                                                        Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.
                                                    </p>
                                                    <a href='#' className='common-learn-more'>Learn More...</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='schedule-pic-box'>
                                                    <div className='pic'>
                                                        <img src={organiser3} />
                                                    </div>
                                                    <div className='pic'>
                                                        <img src={organiser4} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='schedule-long-card'>
                                <div className='row '>
                                    <div className='col-lg-4'>
                                        <div className='left '>
                                            <p className='timing f2'>From 9:30 to 11:30</p>
                                            <p className='name f1'>
                                                BUSINESS LECTURE
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-lg-8 p-5 right'>

                                        <div className='row align-items-center'>
                                            <div className='col-lg-8'>
                                                <div className='organiser-info'>
                                                    <h3>Business Managment Info</h3>
                                                    <p className='common-para'>
                                                        Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.
                                                    </p>
                                                    <a href='#' className='common-learn-more'>Learn More...</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='schedule-pic-box'>
                                                    <div className='pic'>
                                                        <img src={organiser1} />
                                                    </div>
                                                    <div className='pic'>
                                                        <img src={organiser2} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='schedule-long-card'>
                                <div className='row '>
                                    <div className='col-lg-4'>
                                        <div className='left light'>
                                            <p className='timing f2'>From 9:30 to 11:30</p>
                                            <p className='name f1'>
                                                BUSINESS LECTURE
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-lg-8 p-5 right'>

                                        <div className='row align-items-center'>
                                            <div className='col-lg-8'>
                                                <div className='organiser-info'>
                                                    <h3>Business Managment Info</h3>
                                                    <p className='common-para'>
                                                        Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.
                                                    </p>
                                                    <a href='#' className='common-learn-more'>Learn More...</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='schedule-pic-box'>
                                                    <div className='pic'>
                                                        <img src={organiser3} />
                                                    </div>
                                                    <div className='pic'>
                                                        <img src={organiser4} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='schedule-long-card'>
                                <div className='row '>
                                    <div className='col-lg-4'>
                                        <div className='left '>
                                            <p className='timing f2'>From 9:30 to 11:30</p>
                                            <p className='name f1'>
                                                BUSINESS LECTURE
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-lg-8 p-5 right'>

                                        <div className='row align-items-center'>
                                            <div className='col-lg-8'>
                                                <div className='organiser-info'>
                                                    <h3>Business Managment Info</h3>
                                                    <p className='common-para'>
                                                        Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.
                                                    </p>

                                                    <a href='#' className='common-learn-more'>Learn More...</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='schedule-pic-box'>
                                                    <div className='pic'>
                                                        <img src={organiser1} />
                                                    </div>
                                                    <div className='pic'>
                                                        <img src={organiser2} />
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
            </section>
            <section className='section-padding home-gallery'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <p class="common-pre-heading">SCHEDULE DETAILS</p>
                            <h2 class="common-heading ">INFORMATION OF EVENT SCHEDULE !</h2>
                        </div>
                        <div className='col-md-6'>
                            <p className='common-para'>Magnam corporis rem commodi dolore
                                possimus varius justo litora ipsum suspendisse dignissimos. Odit,
                                dolor, minima. Diam facilisis dignissimos metus, id delectus fuga doloribus qui, explicabo.</p>
                        </div>
                    </div>
                    <div className='row mt-5 '>
                        <div className='col-md-12'>

                            <div className='gallery-wrapper mt-5 row'>
                                <div className='gallery-box col-lg-3'>
                                    <img src={gallery1} alt="" className='img-fluid' />

                                </div>


                                <div className='gallery-box col-lg-3'>
                                    <img src={gallery2} alt="" className='img-fluid' />
                                </div>


                                <div className='gallery-box col-lg-3'>
                                    <img src={gallery3} alt="" className='img-fluid' />
                                </div>


                                <div className='gallery-box col-lg-3'>
                                    <img src={gallery4} alt="" className='img-fluid' />
                                </div>
                                <div className='gallery-box col-lg-3'>
                                    <img src={gallery5} alt="" className='img-fluid' />
                                </div>
                                <div className='gallery-box col-lg-3'>
                                    <img src={gallery6} alt="" className='img-fluid' />
                                </div>
                                <div className='gallery-box col-lg-3'>
                                    <img src={gallery7} alt="" className='img-fluid' />
                                </div>
                                <div className='gallery-box col-lg-3'>
                                    <img src={gallery8} alt="" className='img-fluid' />
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </section>
            <section className='section-padding home-register-step'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 mx-auto text-center'>
                            <p class="common-pre-heading">Steps to register</p>
                            <h2 class="common-heading ">Follow the steps</h2>
                            <p className='common-para'>
                                Quam amet tristique adipisicing incididunt arcu,
                                excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.
                            </p>

                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <ul className='ps-0 list-unstyled'>
                                <li>
                                    <div className='reg-icon-box'><img src={reg1} className="img-fluid" alt="" /></div>
                                    <h3>Exhibitor</h3>
                                    <p> Exhibit at Convergence</p>
                                    <div className='btn-holder'><button className=" common-btn">Book Reservation</button></div>
                                </li>
                                <li>
                                    <div className='reg-icon-box'><img src={reg2} className="img-fluid" alt="" /></div>
                                    <h3> Sponsorship </h3>
                                    <p> Become a Sponsor / Partner </p>
                                    <div className='btn-holder'><button className=" common-btn">Book Reservation</button></div>
                                </li>
                                <li>  <div className='reg-icon-box'><img src={reg3} className="img-fluid" alt="" /></div>
                                    <h3>  Delegate  </h3>
                                    <p>  Get your Conference Pass  </p>
                                    <div className='btn-holder'><button className=" common-btn">Book Reservation</button></div></li>
                                <li>  <div className='reg-icon-box'><img src={reg4} className="img-fluid" alt="" /></div>
                                    <h3>  Visitor  </h3>
                                    <p>  Register Now for Free Entry  </p>
                                    <div className='btn-holder'>
                                        <button className=" common-btn ">Book Reservation</button></div></li>
                                <li>  <div className='reg-icon-box'><img src={reg5} className="img-fluid" alt="" /></div>
                                    <h3> Media  </h3>
                                    <p>  Be a Media Partner  </p>
                                    <div className='btn-holder'>
                                        <button className=" common-btn ">Book Reservation</button>
                                    </div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------julesh----------- */}
            <section className='testimonial-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mx-auto'>
                            <div id="carouselExampleControls1" className='carousel slide' data-bs-ride="carousel">
                                <div className='carousel-inner'>

                                    <div className='carousel-item active'>
                                        <div className='boxes'>
                                            <div className='upper'>
                                                <p className='common-pre-heading'>Our Testimonial</p>
                                                <h2 className='common-heading'>WHAT OUR VISITOR'S SAY?</h2>
                                                <p className='common-para my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur, eligendi dolorem
                                                    laboriosam voluptatum!</p>
                                            </div>
                                            <div className='middle'>
                                                <div className='image'>
                                                    <img src={visitor1} alt='' />
                                                </div>
                                                <div className='lower'>
                                                    <p className='common-para fst-italic'>
                                                        "Habitant facilisis proident! Modi irure, modi blanditiis culpa! Soluta magnam maiores augue rutrum quia accumsan torquent venenatis. Facilis vel harum aspernatur orci, sit eleifend praesent, cupiditate, dignissimos sit proident, possimus proident distinctio wisi, odio quo."					</p>
                                                    <span className='blk'>Petey Cruiser</span>
                                                    <span className='blk-wht'>Visitor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='carousel-item'>
                                        <div className='boxes'>
                                            <div className='upper'>
                                                <p className='common-pre-heading'>Our Testimonial</p>
                                                <h2 className='common-heading'>WHAT OUR VISITOR'S SAY?</h2>
                                                <p className='common-para my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur, eligendi dolorem
                                                    laboriosam voluptatum!</p>
                                            </div>
                                            <div className='middle'>
                                                <div className='image'>
                                                    <img src={visitor1} alt='' />
                                                </div>
                                                <div className='lower'>
                                                    <p className='common-para fst-italic'>
                                                        "Habitant facilisis proident! Modi irure, modi blanditiis culpa! Soluta magnam maiores augue rutrum quia accumsan torquent venenatis. Facilis vel harum aspernatur orci, sit eleifend praesent, cupiditate, dignissimos sit proident, possimus proident distinctio wisi, odio quo."					</p>
                                                    <span className='blk'>Petey Cruiser</span>
                                                    <span className='blk-wht'>Visitor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='carousel-item'>
                                        <div className='boxes'>
                                            <div className='upper'>
                                                <p className='common-pre-heading'>Our Testimonial</p>
                                                <h2 className='common-heading'>WHAT OUR VISITOR'S SAY?</h2>
                                                <p className='common-para my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur, eligendi dolorem
                                                    laboriosam voluptatum!</p>
                                            </div>
                                            <div className='middle'>
                                                <div className='image'>
                                                    <img src={visitor1} alt='' />
                                                </div>
                                                <div className='lower'>
                                                    <p className='common-para fst-italic'>
                                                        "Habitant facilisis proident! Modi irure, modi blanditiis culpa! Soluta magnam maiores augue rutrum quia accumsan torquent venenatis. Facilis vel harum aspernatur orci, sit eleifend praesent, cupiditate, dignissimos sit proident, possimus proident distinctio wisi, odio quo."					</p>
                                                    <span className='blk'>Petey Cruiser</span>
                                                    <span className='blk-wht'>Visitor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleControls1"
                                    data-bs-slide="prev">
                                    <span className='carousel-control-prev-icon circle' aria-hidden="true">
                                        <i class="fa-solid fa-angle-left"></i>
                                    </span>
                                    <span className='visually-hidden'>Previous</span>
                                </button>
                                <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleControls1"
                                    data-bs-slide="next">
                                    <span className='carousel-control-next-icon circle' aria-hidden="true">
                                        <i class="fa-solid fa-angle-right"></i>
                                    </span>
                                    <span className='visually-hidden'>Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className='sponsers-area'>
                <div className='container'>
                    <div className='row position-relative'>
                        <div className='col-md-7 mx-auto text-center'>
                            <p className='common-pre-heading'>OUR PARTNERS</p>
                            <h2>SPONSERS AND PARTNERS</h2>
                            <p className='mb-5'>Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.</p>
                        </div>
                    </div>

                    <div className='row position-relative'>
                        <div className='col-md-1'></div>
                        <div className='col-md-2 px-0'>
                            <div className='sponser-box-1 common-sponsor-padding'>
                                <img src={client1} alt='' />
                            </div>
                            <div className='sponser-border-1 common-sponsor-padding'>
                                <img src={client6} alt='' />
                            </div>
                        </div>
                        <div className='col-md-2 px-0'>
                            <div className='sponser-box-2 common-sponsor-padding'>
                                <img src={client2} alt='' />
                            </div>
                            <div className='sponser-border-2 common-sponsor-padding'>
                                <img src={client7} alt='' />
                            </div>
                        </div>
                        <div className='col-md-2 px-0'>
                            <div className='sponser-box-3 common-sponsor-padding'>
                                <img src={client3} alt='' />
                            </div>
                            <div className='sponser-border-3 common-sponsor-padding'>
                                <img src={client8} alt='' />
                            </div>
                        </div>
                        <div className='col-md-2 px-0'>
                            <div className='sponser-box-4 common-sponsor-padding'>
                                <img src={client4} alt='' />
                            </div>
                            <div className='sponser-border-4 common-sponsor-padding'>
                                <img src={client9} alt='' />
                            </div>
                        </div>
                        <div className='col-md-2 px-0'>
                            <div className='sponser-box-5 common-sponsor-padding'>
                                <img src={client5} alt='' />
                            </div>
                            <div className='sponser-border-5 common-sponsor-padding'>
                                <img src={client10} alt='' />
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                    </div>

                    <div className='row position-relative'>
                        <div className='col-md-8 mx-auto text-center'>
                            <button className='common-btn my-5'>BECAME A SPONSER</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-area section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <p className='common-pre-heading'>RECENT BLOG</p>
                            <h2 className='common-heading'>LATEST NEWS AND BLOG</h2>
                            <p className='common-para mb-5'>Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='blog-card'>
                                <div className='blog-card-pic'>
                                    <img src={visitor1} alt=''></img>
                                </div>
                                <div className='blog-card-content'>
                                    <h3>MARKETING AND BUSINESS MANAGING LECTURE</h3>
                                    <div className='blog-box'><span>Demoteam </span> <span className='blog-border px-1 mx-1'> January 26, 2022 </span> <span> No Comments</span></div>
                                    <div><a className='common-yellow-color' href='#'>READ MORE</a></div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='blog-card'>
                                <div className='blog-card-pic'>
                                    <img src={visitor2} alt=''></img>
                                </div>
                                <div className='blog-card-content'>
                                    <h3>ICC WALES REPORTS RECORD BREAKING SUMMER</h3>
                                    <div className='blog-box'><span>Demoteam</span> <span className='blog-border px-1 mx-1'>January 24, 2022</span> <span>No Comments</span></div>
                                    <div><a className='common-yellow-color' href='#'>READ MORE</a></div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='blog-card'>
                                <div className='blog-card-pic'>
                                    <img src={visitor3} alt=''></img>
                                </div>
                                <div className='blog-card-content'>
                                    <h3>EVENT TECHNOLOGY AWARD FOR PEOPLE CHOICE</h3>
                                    <div className='blog-box'><span>Demoteam</span> <span className='blog-border px-1 mx-1'>January 24, 2022</span> <span>No Comments</span></div>
                                    <div><a className='common-yellow-color' href='#'>READ MORE</a></div>
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
                                    <textarea className="w-100" rows="10" cols="51" placeholder="Enter Message.."></textarea>
                                </div>
                                <div className="contact-btn">
                                    <button className="common-btn">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-move">
                                <p className="common-pre-heading">GET IN TOUCH</p>
                                <h2 className="common-heading">CONTACT US FOR FURTHER INFORMATION</h2>
                                <p className="common-para my-4">Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.</p>
                                <div className="icon-text-movement">
                                    <div className="contact-icon">
                                        <i className="fa-solid fa-building"></i>
                                    </div>
                                    <div className="contact-venue">
                                        <h3>EVENT VENUE :</h3>
                                        <p className="common-para mb-0">Hollywood Banquet Hall , Riverside Building Area</p>
                                    </div>
                                </div>

                                <div className="icon-text-movement">
                                    <div className="contact-icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="contact-address">
                                        <h3>LOCATION ADDRESS :</h3>
                                        <p className="common-para mb-0">5214 Sunset Blvd, Los Angeles CA 90027, USA</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </>
    )
}