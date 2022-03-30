import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
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
                                            <input type="text" className="form-control " id="userName" placeholder='Your Name..'/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="email" className="form-control " id="userEmail" placeholder='Your Email..'/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="text" className="form-control " maxLength="10" id="mobileNumber" required placeholder='Your Mobile Number..'/>
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
                                <option value="1">Diamond</option>
                                <option value="1">Platinium</option>
                                <option value="1">Gold</option>
                                <option value="2">Silver</option>
                                <option value="3">Bronze</option>
                              </select>
                              </div>
                              </div>

                                <div className="col-md-12">
                                    <div className="btn-wrapper mt-3">
                                        <button type="submit" className=" form-submit " >Submit</button>
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