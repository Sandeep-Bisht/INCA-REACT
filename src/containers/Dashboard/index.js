import React, { useState } from 'react'
 import {useNavigate} from "react-router-dom";
import Dashlogo from '../../images/logo.png';
import { Outlet, Link  } from "react-router-dom";
import User from '../../images/user-profile.png'
import '../../css/dashboard.css'

import { countries }  from '../../utils'

let obj = {
    name:"",
    designation:"",
    affilation:"",
    address:"",
    pinCode:"",
    country:"",
    phoneNumber:"",
    email:"",
    conferenceMode:"",
    participationType:'',
    title:"",
    journeyMode:"",
    arrivalDate:"",
    departureDate:"",
    accompanyingPerson:"",
    accomodationDetail:"",
    registrationCategory:"",
    registrationFee:"",
    transactionId:"",
    bank:"",
    dated:""

}
const Dashboard = (props) => {
    const navigate = useNavigate();
    const [userInformation, setUserInformation] = useState(obj)

    let userInformationOnchangeHandler = (e) => {
        let userInformationCopy = {...userInformation}
        userInformationCopy[e.target.id] = e.target.value
        setUserInformation(userInformationCopy)
        
    }
    return (

        <>
            <div className='dash-wrapper'>
                <header className='dashboard-header '>
                    <nav className="navbar navbar-expand-lg py-0">
                        <div className="container-fluid">
                            <a className="navbar-brand d-flex align-items-center" href="#">
                                <img src={Dashlogo} className="img-fluid w-75" />
                                <h1 className='dashboard-title ms-2'><span>

                                </span>INCA</h1>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <form className="d-flex">
                                    <div className="nav-item dropdown">
                                        <a className="text-decoration-none dropdown-toggle p-0 d-user-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={User} className="img-fluid  me-3 dash-user-pic" />
                                            <span className='user-text me-2'>User name</span>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            
                                            <li>< Link className="dropdown-item" to="/">Log Out</Link></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
                <section className='dash-body'>
                    <div className='container-fluid '>
                        <div className='row'>
                            <div className='col-md-3 left-part col-lg-2 px-0'>
                                <aside>
                                    <ul className='ps-0 list-unstyled mt-4'>
                                        <li className='active-blue'>
                                            <button className='common-blue btn'>
                                                Dashboard</button></li>
                                        <li><button className='common-blue btn' onClick={()=>navigate("/dashboard/create")}>Create</button></li>
                                        
                                        <li onClick={()=>navigate("/dashboard/test")} ><button className='common-blue btn'
                                        >View</button></li>
                                    </ul>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button common-blue btn mb-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    User Managment
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body p-0">
                                                    <ul className='ps-0 list-unstyled '>
                                                        <li ><button className='common-blue btn' onClick={()=>navigate("/dashboard/users")}>View</button></li>
                                                        {/* <li ><button className='common-blue btn'>Category</button></li>
                                                        <li ><button className='common-blue btn'>Sub-Category</button></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className='col-md-9 col-lg-10 right-part'>
                            <Outlet />
                                
                                {/* <div className='main d-none'>
                                    <div className="form-section">
                                        <form>
                                            <div className="container">
                                                <div className="row mt-5 mb-5">
                                                    <div className="col-md-4">
                                                        <label for="InputName" className="form-label">Name</label>
                                                        <input type="text" id="InputName" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control" id="name"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="InputPosition"  className="form-label">Designation/Position</label>
                                                        <input type="text" id="InputPosition" className="form-control" onChange={(e) => userInformationOnchangeHandler(e)} id="designation"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="InputAffiliation" className="form-label">Affiliation</label>
                                                        <input type="text" id="InputAffiliation" className="form-control"  onChange={(e) => userInformationOnchangeHandler(e)}id="affilation"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-5">
                                                    <div className="col-md-4">
                                                        <label for="InputAddress" className="form-label">Address</label>
                                                        <textarea id="InputAddress" className="form-control" onChange={(e) => userInformationOnchangeHandler(e)} id="address"></textarea>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-4">
                                                                <label for="InputPincode" className="form-label">PIN Code</label>
                                                                <input type="text" id="InputPincode" className="form-control" onChange={(e) => userInformationOnchangeHandler(e)} id="pinCode"/>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <label for="InputPhone" className="form-label">Phone</label>
                                                                <input type="text" id="phoneNumber" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-4">
                                                                <label for="SelectCountry" className="form-label">Country</label>
                                                                <select className="form-select" onChange={(e) => userInformationOnchangeHandler(e)} aria-label="Default select example" id="country">
                                                                    <option selected>Please Select</option>
                                                                    {countries.map(country => <option value={country}>{country}</option>)}
                                                                    
                                                                </select>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <label for="InputEmail" className="form-label">Email</label>
                                                                <input type="email" id="email" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mb-5">
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-4">
                                                                <label for="SelectMode" className="form-label">Mode of attending the conference</label>
                                                                <select className="form-select" onChange={(e) => userInformationOnchangeHandler(e)} aria-label="Default select example" id="conferenceMode">
                                                                    <option value="online">Online</option>
                                                                    <option selected value="offline">Offline</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <label for="SelectJourney" className="form-label">Journey Mode</label>
                                                                <select className="form-select" onChange={(e) => userInformationOnchangeHandler(e)} aria-label="Default select example" id="journeyMode">
                                                                    <option selected>Please Select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-4">
                                                                <label for="SelectWish" className="form-label">I wish to participate in the conference for</label>
                                                                <select className="form-select" onChange={(e) => userInformationOnchangeHandler(e)} aria-label="Default select example" id="participationType">
                                                                    <option selected>Please Select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <label for="InputArrival" className="form-label">Date of Arrival</label>
                                                                <input type="date" id="arrivalDate" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="InputTitle" className="form-label">Title of the paper/poster</label>
                                                        <textarea id="title" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control"></textarea>
                                                    </div>
                                                </div>

                                                <div className="row mb-5">
                                                    <div className="col-md-4">
                                                        <label for="InputDeparture" className="form-label">Date of Departure</label>
                                                        <input type="date" onChange={(e) => userInformationOnchangeHandler(e)} id="departureDate" className="form-control"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="InputAccompanying" className="form-label">Accompanying Person, if any</label>
                                                        <input type="text" onChange={(e) => userInformationOnchangeHandler(e)} id="accompanyingPerson" className="form-control"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="SelectAccomodation" className="form-label">Accomodation details</label>
                                                        <select className="form-select" onChange={(e) => userInformationOnchangeHandler(e)} aria-label="Default select example" id="accomodationCategory">
                                                            <option selected>Please Select</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="row mb-5">
                                                    <div className="col-md-4">
                                                        <label for="SelectCategory" className="form-label">Registration Category</label>
                                                        <select className="form-select" onChange={(e) => userInformationOnchangeHandler(e)} aria-label="Default select example" id="registrationCategory">
                                                            <option selected>Please Select</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="InputFee" className="form-label">Registration Fee</label>
                                                        <input type="text" onChange={(e) => userInformationOnchangeHandler(e)} id="registrationFee" className="form-control"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="InputTransaction" className="form-label">Transaction ID</label>
                                                        <input type="text" onChange={(e) => userInformationOnchangeHandler(e)} id="transactionId" className="form-control"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-5">
                                                    <div className="col-md-4">
                                                        <label for="SelectBank" className="form-label">Bank</label>
                                                        <select className="form-select" onChange={(e) => userInformationOnchangeHandler(e)} aria-label="Default select example" id="bank">
                                                            <option selected>Please Select</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="InputDated" className="form-label">Dated</label>
                                                        <input type="date" onChange={(e) => userInformationOnchangeHandler(e)} id="dated" className="form-control"/>
                                                    </div>
                                                    <div className="col-md-4"></div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 text-end">
                                                        <button>Save & Submit</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Dashboard