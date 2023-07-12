import React, { } from 'react'
import Pdf from "react-to-pdf";
import '../../css/certificatepageui.css'
import leftbar  from '../../images/leftbar.png'
import rightbar  from '../../images/rightbar.png'
import certificateborder from '../../images/certificateborder.png'
import certificate_logo from '../../images/certificate_logo.jpg'
import INCA from '../../images/INCA.jpg'


export let CertificatePageUi = () => {
    return (
        <>
            <section class="border-line">
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <div class="first-logo text-center">
                              <img src={certificate_logo} width="100px" height="120px"/> 
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="heading">
                                <h1 class="text-center">Certificate</h1>
                                <span class="d-flex justify-content-center">OF PARTICIPATION</span>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="last-logo">
                                 <img src={INCA}/> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="frame">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                             <img src={certificateborder} width="100%" height="100%"/> 
                        </div>
                    </div>
                </div>
            </section>
            <section class="middle-text mt-5">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-12">
                            <h4>Presented To</h4>
                        </div>
                        <div class="col-md-12">
                            <div class="candidate-name">
                                <h1>Capt.Kuldeep Singh</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-12">
                            <div class="text-area">
                                <p>This Certificate is for the participation in INCA 43rd Internation <br />Congress held at National
                                    Hydrographic office,Dehradun on 11th <br />November 2023 to 13th November 2023. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="last-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-5">
                            <div class="signature text-center">
                                <p>Cmde.Peush Pawsey</p>
                            </div>
                        </div>
                        <div class="col-md-7 col-7">
                            <div class="signature text-center">
                                <p>Vice Admiral Adhir Arora,NM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="side-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img src={leftbar} width="60%" height="80%"/> 
                        </div>
                        <div class="col-md-6 text-end">
                          <img src={rightbar} width="60%" height="80%"/> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

