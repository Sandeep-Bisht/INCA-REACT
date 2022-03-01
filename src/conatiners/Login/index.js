import React, {useState, useEffect} from "react";
import * as ACTIONS from './action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
           // setSuccessResponse(state.userLoginSuccess)   
            //dispatch(ACTIONS.resetToInitialState())
        }
    }, [state.userLoginSuccess])

    let onSubmitLoginRequest = (e) => {
        e.preventDefault()
        dispatch(ACTIONS.appLogin(loginPayload))

    }

    return (
        <>
            <form className="login-form" onSubmit={(e) => onSubmitLoginRequest(e)}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto form-wrapper">
                            <div className="row actual-form">

                                <div className="col-md-12">
                                    <div className="lgn">
                                        <h4>Login</h4>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="emai" id="userEmail" onChange={(e) => loginOnChangeHandler(e)} required />
                                            <label><i className="fa-solid fa-envelope me-2"></i>E-mail</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <div className="input-wrap">
                                            <input type="password" id="password" onChange={(e) => loginOnChangeHandler(e)} required />
                                            <label><i className="fa-solid far fa-eye-slash me-2"></i>Password</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="frgt-pw">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="btn-wrapper">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </div>

                                <div className="end-wrap mt-2">
                                    <p>Not a member yet? <a href="#">Register now</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}