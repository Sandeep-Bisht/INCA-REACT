import React, { useEffect } from 'react'
import '../../css/footer.css'

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae id repellat,
                            distinctio
                            sint voluptate! Aperiam?</p>
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
                            <li>Event Details</li>
                            <li>News & Articles</li>
                            <li>Credits</li>
                            <li>Legal Notice</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="box-3">
                        <h5>Other Pages</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Parent Community</li>
                            <li>Organiser</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="box-4">
                        <div className="box-wrap">
                            <h5>JOIN OUR NEWSLETTER</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <input type="email" placeholder="Your Email.."/>
                            <button>SUBSCRIBE NOW</button>
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