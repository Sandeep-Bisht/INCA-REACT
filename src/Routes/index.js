import React, {} from 'react'
import { Routes, Route } from "react-router-dom";
import { Header } from '../components/Header'
import { Login } from '../conatiners/Login';
import { UserRegistration } from "../conatiners/UserRegistration"
import { Dashboard } from '../conatiners/Dashboard'

export const ApplicationRoutes = () => {
    return(
        <>
        <Header></Header>
        <Routes>
            <Route path = "/" element={<UserRegistration />} />
            <Route path = "/login" element={<Login />} />
            <Route path = "/dashboard" element={<Dashboard />} />
         </Routes>
        </>
    )
}