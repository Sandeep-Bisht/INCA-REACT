import React, { useEffect } from 'react'
import '../../css/home.css'


export const HomePage = () => {
    useEffect(() => {
        let nav = document.querySelector(".header-wrapper");
        window.onscroll = function () {
            if (document.documentElement.scrollTop > 20) {
                nav.classList.add("header-scrolled");
            }
            else {
                nav.classList.remove("header-scrolled");
            }
        }
    }, [])

    return (
        <>
            <div className='home-banner'>
                <div className='container'>
                    <div className='row'>
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
                </div>
            </div>

        </>
    )
}