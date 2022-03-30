import { Header } from '../../components/Header'

import '../../css/sponser.css'


const SponserForm = () => {
    return (
        <>
            <Header />
            <section className="sponser-form">
            <form className="submit-form"  >
            <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto form-wrapper-1">
                            <div className="row actual-form-1">

                                <div className="col-md-12">
                                    <div className="rgstr">
                                    
                                        <p className='common-form-heading '>Become A Sponser</p>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="text" className="form-control " id="userName" required placeholder='Your Name..'/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="email" className="form-control " id="userEmail" required placeholder='Your Email..'/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="text" className="form-control " maxLength="10" id="mobileNumber"  required placeholder='Your Mobile Number..'/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="text" className="form-control " maxLength="10" id="mobileNumber" required placeholder='Your Company Name..'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-12'>
                                    <div className='form-wrap'>
                                <select class="form-select" aria-label="Default select example" id="SelectCountry">
                                <option selected>Sponsership Types</option> 
                                <option value="1">Strategic Sponser</option>                               
                                <option value="2">Platinium Sponser</option>
                                <option value="3">Gold Sponser</option>
                                <option value="4">Silver Sponser</option>
                                
                              </select>
                              </div>
                              </div>

                                <div className="col-md-12">
                                    <div className="btn-wrapper mt-3">
                                        <button type="submit" className=" form-submit ">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
                
            </section>

        </>
    )
}

export default SponserForm