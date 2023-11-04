import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import * as Loader from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import EventBlog from "../containers/EventBlog";
import ExhibitorList from "../containers/ExhibitorList";
import FullPaperPreview from "../FullPaperPreview";
import ResetPassword from "../containers/ResetPassword";
import FullPaperInstruction from "../components/FullPaperInstruction/FullPaperInstruction";
import Presentation from "../containers/Presentation";
import ViewPresentation from "../containers/ViewPresentation";
import FinalPresentation from "../containers/FinalPresentation/index.js";
// import RegistrationDetails from "../components/RegistrationDetails/RegistrationDetails";

const PreviewPaper = lazy(() => import("../containers/PreviewPaper"))
const AbstractPage = lazy(() => import("../containers/AbstractPage"))
const HomePage = lazy(() => import("../containers/HomePage"));
const UserRegistration = lazy(() => import("../containers/UserRegistration"));
const Login = lazy(() => import("../containers/Login"));
const ForgotPassword = lazy(() => import("../containers/ForgetPassword"));
const Dashboard = lazy(() => import("../containers/Dashboard"));
const CreateForm = lazy(() => import("../containers/Create"));
const AllRegistration = lazy(() => import("../containers/AllRegistration"));
const AttendanceStatus = lazy(() => import("../containers/AttendanceStatus"));
const EventAttendance = lazy(() => import("../containers/EventAttendance"));
const Contact = lazy(() => import("../containers/ContactPage"));
const About = lazy(() => import("../containers/AboutPage"));
const Error = lazy(() => import("../containers/Error"));
const SponsorForm = lazy(() => import("../containers/SponsorForm"));
const ExhibitorForm = lazy(() => import("../containers/ExhibitorForm"));
const RegisteredUser = lazy(() => import("../containers/RegistredUsers"));
const AllSponsor = lazy(() => import("../containers/AllSponsor"));
const AbstractUpload = lazy(() => import("../containers/AbstractUpload"))
const FullPaper = lazy(() => import("../containers/FullPaper"))
const FullPaperList = lazy(() => import("../containers/FullpaperList"))
const AbstractDocumentList = lazy(() => import('../containers/AbstractDocumentList'))
const UserAbstractList = lazy(() => import('../containers/UserAbstractList'))
const Theme = lazy(() => import('../containers/ThemePage'))
const ImportantDates = lazy(() => import('../containers/ImportantDates'))
const TransactionDetails = lazy(()=> import('../containers/TransactionDetails'));
const TransactionList = lazy(()=> import('../containers/TransactionList'));
const BoardList = lazy (()=> import('../components/BoardProgramme'));
const UserQrInfoComponent = lazy(() => import('../containers/UserQrInfoComponent'));

const UserDetails = lazy(() => import('../containers/UserDetails'));
const Accommodation = lazy(()=> import('../components/Accommodation/Accommodation.js'))
const Certificate = lazy(() => import('../containers/Certificate'));
// Certificate

export const ApplicationRoutes = ({ path }) => {
  const [loggedInUser, setLoggedInUser] = useState({});

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      setLoggedInUser(decodedToken.user.user);
    }
    else if(location.pathname.includes('/eventattendance')){
      navigate("/eventattendance");
    }
    else {
      navigate(`${location.pathname}`);
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
          <Route path="/accommodation-details" element={<Accommodation/>} />
          <Route path="/fullpaper-submission-guide" element={<FullPaperInstruction/>} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/importantdates" element={<ImportantDates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />  
          <Route path="/reset-password/:id" element={<ResetPassword />} />  
          <Route path="/eventattendance/:id" element={<EventAttendance />} />                
          <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/create" element={<CreateForm />} />        
          <Route path="/dashboard/allRegistration" element={<AllRegistration />} />
              <Route path="/dashboard/users" element={<RegisteredUser />} />
              <Route path="/dashboard/transaction_details" element={<TransactionDetails />} />
              <Route path="/dashboard/transaction_list" element={<TransactionList />} />
              <Route path="/dashboard/attendancestatus" element={<AttendanceStatus />} />
              <Route path="/dashboard/allSponsor" element={<AllSponsor />} />
              <Route path="/dashboard/upload" element={<AbstractUpload />} />
              <Route path= "/dashboard/abstract" element={<AbstractDocumentList />} /> 
              <Route path="/dashboard/userabstractlist" element={<UserAbstractList />} />
              <Route path="/dashboard/previewPaper" element={<PreviewPaper />} />  
              <Route path="/dashboard/fullPaperpreview" element={<FullPaperPreview />} />
              <Route path="/dashboard/fullPaper" element={<FullPaper />} /> 
              <Route path="/dashboard/fullPaperList" element={<FullPaperList />} />
              <Route path ="/dashboard/exhibitorlist" element={<ExhibitorList />}/>  
              <Route path ="/dashboard/presentation" element={<Presentation />} />   
              <Route path ="/dashboard/view-presentation" element={<ViewPresentation />} />   
              <Route path ="/dashboard/final-presentation" element={<FinalPresentation />} />   
              {/* <Route path="/dashboard/registration-details" element={< RegistrationDetails />} /> */}
                   
            
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/abstractpage" element={<AbstractPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsorForm" element={<SponsorForm />} />
          <Route path="/exhibitor" element={<ExhibitorForm />} />
          <Route path="/eventblog" element={<EventBlog />} />
          <Route path="/userinfo/:id" element={<UserQrInfoComponent />} />
          <Route path="/certificate/:id" element={<Certificate />} />
          <Route path="/userdetails/:id" element={<UserDetails />} />
          <Route path="/boardlists" element={<BoardList />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="TEST" element={<Test />}/> */}

        </Routes>
      </Suspense>
    </>
  );
};