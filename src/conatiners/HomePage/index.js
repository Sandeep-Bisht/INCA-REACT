import React, { useEffect } from 'react'
import '../../css/home.css'


export const HomePage = () => {

    useEffect(() => {
        let nav = document.querySelector(".header-wrapper");
        window.onscroll = function () {
            if (document.documentElement.scrollTop > 20) {
                return nav.classList.add("header-scrolled");
            }
            nav.classList.remove("header-scrolled");
        }
    }, [])
    useEffect(() => {
        var dest = new Date("nov 3, 2022 10:00:00").getTime();

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
            <section className='section-padding home-about'>
                <div className='container'>
                    <div className='row'>
                      <div className='col-lg-5'></div>
                      <div cl></div>  
                    </div>
                </div>
            </section>


        </>
    )
}