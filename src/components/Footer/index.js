import React, { useEffect } from 'react'
import '../../css/footer.css'
import giksfooterlogo from '../../images/giks-footer-logo.png';

export const Footer = () =>
{
    return(
        <>
            <footer className="foot-wrapper">
        <div className="container">
            <div className="row brdr">
                <div className="col-md-3">
                    <div className="box-1">
                        <h2>Inca</h2>
                        <p>The Indian National Cartographic Association
(INCA) has evolved into one of the world's most prominent professional associations of its
kind.</p>
                        <a href="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="box-2">
                        <h5>Quick Links</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Event Details</li>
                            <li>News & Articles</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="box-3">
                        <h5>Other Pages</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>FAQ</li>
                            <li>Parent Community</li>
                            <li>Organiser</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="box-4">
                        <div className="box-wrap">
                            <h5>OUR TECHNOLOGY PARTNER</h5>
                            <img src={giksfooterlogo} alt='' className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className='box-6'>
                    <span>PRIVACY POLICY</span>
                    <span className='move'>TERMS & CONDITION</span>
                    <span>SUPPORT</span>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className='box-7'>
                    <span>Copyright © 2022 INCA. All rights reserved.</span>
                </div>
                </div>
            </div>


        </div>
    </footer>
        </>
    )
}