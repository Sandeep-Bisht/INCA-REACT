import React, {useState, useEffect} from "react";
import * as ACTIONS from './action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import '../../css/register.css'

export const Login = () => {
    const [loginPayload, setLoginPayload] = useState({
        userEmail: "",
        password: "",
    })

    const state = useSelector((state) => state.LoginReducer);

    let dispatch = useDispatch()
    let navigate = useNavigate()

    let loginOnChangeHandler = (e) => {
        let loginPayloadCopy = { ...loginPayload }
        loginPayloadCopy[e.target.id] = e.target.value
        setLoginPayload(loginPayloadCopy)
    }

    useEffect(() => {
        if(state && state.userLoginSuccess){
            navigate('/dashboard')
        }
    }, [state.userLoginSuccess])

    let validateLoginForm = () => {
        const isEmpty = Object.values(loginPayload).some(x => x === '');
        return isEmpty
    }

    let onSubmitLoginRequest = (e) => {
        e.preventDefault()
        dispatch(ACTIONS.appLogin(loginPayload))
    }

    return (
        <> 
        <Header></Header>
        <section class="register-form">
            <form className="login-form" onSubmit={(e) => onSubmitLoginRequest(e)}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto form-wrapper">
                            <div className="row actual-form-1">

                                <div className="col-md-12">
                                    <div className="rgstr">
                                    <p className='common-form-heading '>Login</p>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="email" id="userEmail" required className="form-control" onChange={(e) => loginOnChangeHandler(e)}  />
                                            <label><i className="fa-solid fa-envelope me-2"></i>E-mail</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="password" required className="form-control" id="password" onChange={(e) => loginOnChangeHandler(e)}  />
                                            <label><i className="fa-solid far fa-eye-slash me-2"></i>Password</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="frgt-pw">
                                        <a href="#" className='ms-2 common-yellow-color text-decoration-none'>Forgot Password?</a>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="btn-wrapper">
                                        <button type="submit" className=" form-submit " disabled={validateLoginForm()}>Login</button>
                                    </div>
                                </div>

                                <div className="end-wrap mt-3">
                                    <p className="common-para">Not a member yet? 
                                    <Link to="/register" className='ms-2 common-yellow-color fw-bold text-decoration-none'>Register now</Link>
                                    </p>
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