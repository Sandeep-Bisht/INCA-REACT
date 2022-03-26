import React, { useState } from 'react'
import { countries } from '../../utils'


let obj = {
    name: "",
    designation: "",
    affilation: "",
    address: "",
    pinCode: "",
    country: "",
    phoneNumber: "",
    email: "",
    conferenceMode: "online",
    participationType: '',
    title: "",
    journeyMode: "",
    arrivalDate: "",
    departureDate: "",
    accompanyingPerson: "",
    accomodationDetail: "",
    registrationCategory: "",
    registrationFee: "",
    transactionId: "",
    bank: "",
    dated: ""

}


const CreateForm = (props) => {
    const [userInformation, setUserInformation] = useState(obj)
    let userInformationOnchangeHandler = (e) => {
        let userInformationCopy = { ...userInformation }
        userInformationCopy[e.target.id] = e.target.value
        setUserInformation(userInformationCopy);
    }

    return (

        <div className='main '>
            <div className="form-section">
                <form>
                    <div className="container">
                        <div className="row mt-5 mb-5">
                            <div className="col-md-4">
                                <label for="InputName" className="form-label">Name</label>
                                <input type="text" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control" id="name" />
                            </div>
                            <div className="col-md-4">
                                <label for="InputPosition" className="form-label">Designation/Position</label>
                                <input type="text" className="form-control" onChange={(e) => userInformationOnchangeHandler(e)} id="designation" />
                            </div>
                            <div className="col-md-4">
                                <label for="InputAffiliation" className="form-label">Affiliation</label>
                                <input type="text" className="form-control" onChange={(e) => userInformationOnchangeHandler(e)} id="affilation" />
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col-md-4">
                                <label for="InputAddress" className="form-label">Address</label>
                                <textarea className="form-control" onChange={(e) => userInformationOnchangeHandler(e)} id="address"></textarea>
                            </div>

                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <label for="InputPincode" className="form-label">PIN Code</label>
                                        <input type="text" className="form-control" onChange={(e) => userInformationOnchangeHandler(e)} id="pinCode" />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="InputPhone" className="form-label">Phone</label>
                                        <input type="text" id="phoneNumber" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control" />
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
                                        <input type="email" id="email" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control" />
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
                                            <option value="offline">Offline</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                <label for="SelectCategory" className="form-label">Registration Category</label>
                                <select className="form-select" onChange={(e) => userInformationOnchangeHandler(e)} aria-label="Default select example" id="registrationCategory">
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
                                <label for="InputFee" className="form-label">Registration Fee</label>
                                <input type="text" onChange={(e) => userInformationOnchangeHandler(e)} id="registrationFee" className="form-control" />
                            </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label for="InputTitle" className="form-label">Title of the paper/poster</label>
                                <textarea id="title" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control"></textarea>
                            </div>
                        </div>
                        {userInformation.conferenceMode == "offline" &&
                        <>
                            <div className="row mb-5">
                               <div className="col-md-4">
                                        <label for="InputArrival" className="form-label">Date of Arrival</label>
                                        <input type="date" id="arrivalDate" onChange={(e) => userInformationOnchangeHandler(e)} className="form-control" />
                                    </div>
                                <div className="col-md-4">
                                    <label for="InputDeparture" className="form-label">Date of Departure</label>
                                    <input type="date" onChange={(e) => userInformationOnchangeHandler(e)} id="departureDate" className="form-control" />
                                </div>
                                <div className="col-md-4">
                                        <label for="SelectJourney" className="form-label">Journey Mode</label>
                                        <select className="form-select" onChange={(e) => userInformationOnchangeHandler(e)} aria-label="Default select example" id="journeyMode">
                                            <option selected>Please Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                
                            </div>
                            <div className='row'>
                            <div className="col-md-4">
                                    <label for="InputAccompanying" className="form-label">Accompanying Person, if any</label>
                                    <input type="text" onChange={(e) => userInformationOnchangeHandler(e)} id="accompanyingPerson" className="form-control" />
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
                            
                            </>
                            
                            }

                        <div className="row mb-5 d-none">
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
                                <input type="text" onChange={(e) => userInformationOnchangeHandler(e)} id="registrationFee" className="form-control" />
                            </div>
                            {/* <div className="col-md-4">
                                <label for="InputTransaction" className="form-label">Transaction ID</label>
                                <input type="text" onChange={(e) => userInformationOnchangeHandler(e)} id="transactionId" className="form-control" />
                            </div> */}
                        </div>

                        {/* <div className="row mb-5">
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
                                <input type="date" onChange={(e) => userInformationOnchangeHandler(e)} id="dated" className="form-control" />
                            </div>
                            <div className="col-md-4"></div>
                        </div> */}
                        
                        <div className="row">
                            <div className="col-md-12 text-end">
                            <button className='mx-3'>Save</button>
                                <button>Save & Pay</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateForm