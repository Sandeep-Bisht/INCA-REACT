import React from 'react'
import { Header } from '../../components/Header'

const ForgotPassword = () => {
  return (
      <>
      <Header></Header>
        <section class="register-form">
            <form className="login-form" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto form-wrapper">
                            <div className="row actual-form-1">
                                <div className="col-md-12">
                                    <div className="rgstr">
                                    <p className='common-form-heading '>Forgot Password</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="email" id="userEmail" required className="form-control" />
                                            <label><i className="fa-solid fa-envelope me-2"></i>E-mail</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="btn-wrapper">
                                        <button type="submit" className=" form-submit " >Send</button>
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

export default ForgotPassword