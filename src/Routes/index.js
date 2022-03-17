import React, {} from 'react'
import { Routes, Route } from "react-router-dom";
import { Header } from '../components/Header'
import { HomePage } from '../conatiners/HomePage'
import { Contact } from '../conatiners/ContactPage'
import { Login } from '../conatiners/Login';
import { UserRegistration } from "../conatiners/UserRegistration"
import { Dashboard } from '../conatiners/Dashboard'
import { Footer } from '../components/Footer';
import {CreateForm} from '../conatiners/Create';
import {Test} from '../conatiners/Test';

export const ApplicationRoutes = () => {
    return(
        <>
        {/* <Header></Header> */}
        <Routes>
            <Route path = "/" element={<HomePage />} />
            <Route path = "/register" element={<UserRegistration />} />
            <Route path = "/login" element={<Login />} />
            <Route path = "/dashboard" element={<Dashboard />} >
                <Route path = "/dashboard/create" element={<CreateForm />} />
                <Route path = "/dashboard/test" element={<Test />} />
            </Route>
            <Route path = "/contact" element={<Contact />} />
         </Routes>
         {/* <Footer/> */}
        </>
    )
}