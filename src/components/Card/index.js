import React, {} from 'react'
import '../../css/card.css'

export const  Card = () => {
    return (
        <>
            <div className="default-dashboard-view">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="conter-card one">
                                <div className="left"><i class="fa-solid fa-user-check"></i></div>
                                <div className="right">
                                    <p className="counter-card-number">2045</p>
                                    <p className="counter-card-title">Registered User</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="conter-card two">
                                <div className="left"><i class="fa-brands fa-elementor"></i></div>
                                <div className="right">
                                    <p className="counter-card-number">12</p>
                                    <p className="counter-card-title">All Sponsors</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="conter-card three">
                                <div className="left"><i class="fa-solid fa-users"></i></div>
                                <div className="right">
                                    <p className="counter-card-number">4045</p>
                                    <p className="counter-card-title">All Users</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="conter-card four">
                                <div className="left"><i class="fa-solid fa-file-export"></i></div>
                                <div className="right">
                                    <p className="counter-card-number">2500</p>
                                    <p className="counter-card-title">Paper Submission</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                </div>
            </div>
        </>
    );
}