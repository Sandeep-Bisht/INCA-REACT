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
            <section className="border-line">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="first-logo text-center">
                              <img src={certificate_logo} width="100px" height="120px"/> 
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="heading">
                                <h1 className="text-center">Certificate</h1>
                                <span className="d-flex justify-content-center">OF PARTICIPATION</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="last-logo">
                                 <img src={INCA}/> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="frame">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                             <img src={certificateborder} width="100%" height="100%"/> 
                        </div>
                    </div>
                </div>
            </section>
            <section className="middle-text mt-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h4>Presented To</h4>
                        </div>
                        <div className="col-md-12">
                            <div className="candidate-name">
                                <h1>Capt.Kuldeep Singh</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <div className="text-area">
                                <p>This Certificate is for the participation in INCA 43rd Internation <br />Congress held at National
                                    Hydrographic office,Dehradun on 11th <br />November 2023 to 13th November 2023. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="last-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-5">
                            <div className="signature text-center">
                                <p>Cmde.Peush Pawsey</p>
                            </div>
                        </div>
                        <div className="col-md-7 col-7">
                            <div className="signature text-center">
                                <p>Vice Admiral Adhir Arora,NM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="side-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={leftbar} width="60%" height="80%"/> 
                        </div>
                        <div className="col-md-6 text-end">
                          <img src={rightbar} width="60%" height="80%"/> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

