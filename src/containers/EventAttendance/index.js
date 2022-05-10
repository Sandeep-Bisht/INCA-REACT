import React, { useEffect, useState } from "react";
import * as ACTIONS from "./action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../css/eventAttendance.css";

const EventAttendance = () => {
  let param = useParams();
  useEffect(() => {}, []);

  const dispatch = useDispatch();
  const [attendance, setAttendance] = useState({});
  const [message, setMessage] = useState("");
  const [markAttendance, setMarkAttendance] = useState({});

  const state = useSelector((state) => state.UserAttendanceReducer);
 

  useEffect(() => {
    dispatch(ACTIONS.getUserInformation(param.id));
  }, []);

  useEffect(() => {
    if (
      state &&
      state.userAttendanceSuccess 
    ) {
      setAttendance(state.userAttendanceSuccess);
    }
  }, [state.userAttendanceSuccess]);
  

  useEffect(() => {
    if(state && state.markAttendanceSuccess){      
      setMessage(state.markAttendanceSuccess.message)
    }
  }, [state.markAttendanceSuccess])

  const onChangeHandler = (e) => {
    // e.preventDefault()
    let markAttendanceCopy = {...markAttendance};
    markAttendanceCopy[e.target.id] = e.target.value;
    setMarkAttendance(markAttendanceCopy)
  }
   

  const onClickHandler = () => {    
    markAttendance.id = attendance._id;
    dispatch(ACTIONS.markAttendance(markAttendance))
  }
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <p className="card-title">
                  <b>Name</b> : {attendance.name}
                </p>
                <p className="card-title">
                  <b>Email</b> : {attendance.email}
                </p>
                <p className="card-title">
                  <b>Contact No.</b> : {attendance.phoneNumber}
                </p>
                <p className="card-title">
                  <b>Participation Type</b> : {attendance.participationType}
                </p>
                <p className="card-title">
                  <b>Registration Category</b> :{" "}
                  {attendance.registrationCategory}
                </p>
                <label htmlFor="password">
                  <b>Enter Password To Confirm</b>
                </label>
                <input type="password" id="password" onChange={(e) => onChangeHandler(e)} />
                <button type="submit" name="present" className="card-title form-control" onClick={() => onClickHandler()}>
                  Present
                </button>
                <div>
                  <p>
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventAttendance;
