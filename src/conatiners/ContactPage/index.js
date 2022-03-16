import React, { useEffect } from 'react'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header'
import '../../css/contact.css'



export const Contact = () => {
 return (
        <>
             <Header></Header>
               <div class="common-redirect-banner">
        <div class="container">
            <div class="row ">
                <div class="col-md-12 text-center">
                    <p class="common-redirect-banner-title">Contact US</p>
                    <nav aria-label="breadcrumb">
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <section class="section-padding contact-single1">
        <div class="container">
            <div class="row align-items-center pb-4 mb-3">
                <div class="col-md-6">
                    <p class="common-pre-heading">GET IN TOUCH</p>
                    <h2 class="common-heading">CONTACT US FOR FURTHER INFORMATION!</h2>
                </div>
                <div class="col-md-6">
                    <p class="common-para">Magnam corporis rem commodi dolore possimus varius justo litora ipsum
                        suspendisse dignissimos.
                        Odit, dolor, minima. Diam facilisis dignissimos metus, id delectus fuga doloribus qui,
                        explicabo. </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="boxes">
                        <div class="box-1">
                            <i class="fa-solid fa-house-chimney"></i>
                            <h3 class="h2">CONFERENCE HALL</h3>
                            <p class="common-para">Riverside Building, County Hall London Eye, London, USA</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="boxes">
                        <div class="box-2">
                            <i class="fa-solid fa-file-lines"></i>
                            <h3 class="h2">TICKET BOOKING</h3>
                            <p class="common-para">Phone No: 002-345-9870 Email: event@yourmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="boxes">
                        <div class="box-1">
                            <i class="fa-solid fa-house-chimney"></i>
                            <h3 class="h2">EVENT SCHEDULES</h3>
                            <p class="common-para">Sept 12 - 14 Sept 2021 Starts 09:00am to 06:00 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="contact-single2 section-padding pt-3">
        <div className="container">
            <form>
            <div className="row">
                   <div className="col-md-8 mx-auto">
                       <div className="row">
                        <div className="col-md-6">
                            <input className="form-movement" type="text" 
                            placeholder="Your Name.."/>
                        </div>

                        <div className="col-md-6">
                            <input className="form-movement" type="email" 
                            placeholder="Your Email.."/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <input className="form-movement" type="number" 
                            placeholder="Your Number.."/>
                        </div>

                        <div className="col-md-6">
                            <input className="form-movement" 
                            type="text" placeholder="Your Subject.."/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="form-movement" cols="30" rows="7" placeholder="Enter Message.."></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <button className="common-btn">SUBMIT MESSAGE</button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
        </div>
    </section>
            <Footer/>






        </>
    )
}
