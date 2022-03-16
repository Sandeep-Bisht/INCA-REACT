import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import * as ACTIONS from './action'
import '../../css/register.css'

export const UserRegistration = () => {

    const [registrationPayload, setRegistrationPayload] = useState({
        userName: "",
        userEmail: "",
        mobileNumber: "",
    })

    const state = useSelector((state) => state.RegisterReducer);
    const [successResponse, setSuccessResponse] = useState({})

    let dispatch = useDispatch()
    let navigate = useNavigate()


    let registrationPayloadOnChangeHandler = (e) => {
        let regitrationPayloadCopy = { ...registrationPayload }
        if (e.target.id == 'mobileNumber') {
            const re = /^[0-9\b]+$/;
            if (re.test(e.target.value)) {
                regitrationPayloadCopy[e.target.id] = e.target.value
                setRegistrationPayload(regitrationPayloadCopy)
            }
        }
        else {
            regitrationPayloadCopy[e.target.id] = e.target.value
            setRegistrationPayload(regitrationPayloadCopy)
        }
    }

    let validateRegisterForm= () => {
        const isEmpty = Object.values(registrationPayload).some(x => x === '');
        console.log(isEmpty, 'ASDFSD')
        return isEmpty
    }

    let registrationSubmitRequest = () => {
        dispatch(ACTIONS.appRegistration(registrationPayload))
    }

    useEffect(() => {
        if (state && state.userRegisterSuccess) {
            navigate('/login')
            setSuccessResponse(state.userRegisterSuccess)
            dispatch(ACTIONS.resetToInitialState())
        }
    }, [state.userRegisterSuccess])

    useEffect(() => {
        if (state.userRegisterFailure)
            setSuccessResponse(state.userRegisterFailure)
    }, [state.userRegisterFailure])

    return (
        <>

            <Header></Header>
            <section class="register-form">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mx-auto form-wrapper-1">
                            <div class="row actual-form-1">

                                <div class="col-md-12">
                                    <div class="rgstr">
                                        <p className='common-form-heading '>Register</p>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-wrap">
                                        <div class="input-wrap">
                                            {/* <input type="text" required /> */}
                                            <input type="text" className="form-control " onChange={(e) => registrationPayloadOnChangeHandler(e)} id="userName" value={registrationPayload.userName} required />
                                            <label><i class="fa-solid fa-person me-2"></i>Name</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-wrap">
                                        <div class="input-wrap">
                                            <input type="email" className="form-control " onChange={(e) => registrationPayloadOnChangeHandler(e)} id="userEmail" value={registrationPayload.userEmail} required />
                                            <label><i class="fa-solid far far fa-envelope me-2"></i>E-mail</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-wrap">
                                        <div class="input-wrap">
                                            <input type="text" className="form-control " maxLength="10" value={registrationPayload.mobileNumber} onChange={(e) => registrationPayloadOnChangeHandler(e)} id="mobileNumber" required />
                                            <label><i class="fa-solid far fas fa-phone me-2"></i>Phone Number</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="btn-wrapper mt-3">
                                        <button type="submit" class=" form-submit " onClick={() => registrationSubmitRequest()} disabled={validateRegisterForm()}>Submit</button>
                                    </div>
                                </div>

                                <div class="end-wrap mt-2">
                                    <p className='common-para mb-0 mt-3'>Already have an Account? <Link to="/login" className='ms-2 common-yellow-color fw-bold text-decoration-none'>Login</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}





