import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import * as Loader from "react-loader-spinner";

const HomePage = lazy(() => import("../containers/HomePage"));
const UserRegistration = lazy(() => import("../containers/UserRegistration"));
const Login = lazy(() => import("../containers/Login"));
const ForgotPassword = lazy(() => import("../containers/ForgetPassword"));
const Dashboard = lazy(() => import("../containers/Dashboard"));
const CreateForm = lazy(() => import("../containers/Create"));
const AllRegistration = lazy(() => import("../containers/AllRegistration"));
const Contact = lazy(() => import("../containers/ContactPage"));
const About = lazy(() => import("../containers/AboutPage"));
const Error = lazy(() => import("../containers/Error"));
const SponserForm = lazy(() => import("../containers/SponserForm"));
const RegisteredUser = lazy(() => import("../containers/RegistredUsers"));

export const ApplicationRoutes = ({ path }) => {
  const [loggedInUser, setLoggedInUser] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      setLoggedInUser(decodedToken.user.user);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <Loader.ThreeDots />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/create" element={<CreateForm />} />
            <Route
              path="/dashboard/allRegistration"
              element={<AllRegistration />}
            />
            {loggedInUser.role == "admin" && (
              <Route path="/dashboard/users" element={<RegisteredUser />} />
            )}
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponserForm" element={<SponserForm />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
};
