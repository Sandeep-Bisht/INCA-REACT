import React, {} from 'react'
import { Routes, Route } from "react-router-dom";
import { Header } from '../components/Header'
import { HomePage } from '../conatiners/HomePage'
import { Login } from '../conatiners/Login';
import { UserRegistration } from "../conatiners/UserRegistration"
import { Dashboard } from '../conatiners/Dashboard'
import { Footer } from '../components/Footer';

export const ApplicationRoutes = () => {
    return(
        <>
        <Header></Header>
        <Routes>
            <Route path = "/" element={<HomePage />} />
            <Route path = "/register" element={<UserRegistration />} />
            <Route path = "/login" element={<Login />} />
            <Route path = "/dashboard" element={<Dashboard />} />
         </Routes>
         <Footer/>
        </>
    )
}