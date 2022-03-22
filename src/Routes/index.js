import React, {Suspense,lazy} from 'react'
import { Routes, Route } from "react-router-dom";
import * as Loader from "react-loader-spinner";
//import { HomePage } from '../containers/HomePage'
import { Contact } from '../containers/ContactPage'
//import { Login } from '../containers/Login';
//import { UserRegistration } from "../containers/UserRegistration"
// import { Dashboard } from '../containers/Dashboard'
// import {CreateForm} from '../containers/Create';
// import {Test} from '../containers/Test';
//import ForgotPassword from '../containers/ForgetPassword';

const HomePage = lazy(() => import('../containers/HomePage'))
const UserRegistration = lazy(() => import('../containers/UserRegistration'))
const Login = lazy(() => import('../containers/Login'))
const ForgotPassword = lazy(() => import('../containers/ForgetPassword'))
const Dashboard  = lazy(() =>  import('../containers/Dashboard'))


export const ApplicationRoutes = ({path}) => {
    
    return(
        <>
         <Suspense fallback={<div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}><Loader.ThreeDots /></div>} >
        <Routes>
           
            <Route path = "/" element={<HomePage />} />
            <Route path = "/register" element={<UserRegistration />} />
            <Route path = "/login" element={<Login />} />
            <Route path='/forgot' element={<ForgotPassword />} />
            <Route path = "/dashboard" element={<Dashboard />} > </Route>
            {/* <Route path = "/dashboard" element={<Dashboard />} >
                <Route path = "/dashboard/create" element={<CreateForm />} />
                <Route path = "/dashboard/test" element={<Test />} />
            </Route>
            <Route path = "/contact" element={<Contact />} />
            <Route path='/forgot' element={<ForgotPassword />} /> */}
         </Routes>
         </Suspense>
        </>
    )
}