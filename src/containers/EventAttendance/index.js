import React, { useEffect, useState } from "react";
import * as ACTIONS from "./action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../css/eventAttendance.css";

const EventAttendance = () => {
  let param = useParams();
  useEffect(() => {}, []);

  const dispatch = useDispatch();
  const [attendance, setAttendance] = useState([]);
  const [message, setMessage] = useState("");
  const [markAttendance, setMarkAttendance] = useState({});

  const state = useSelector((state) => state.UserAttendanceReducer);

  //console.log(param.id,"from event Attend")

  useEffect(() => {
    dispatch(ACTIONS.getUserInformation("626cd86113327e34781a4340"));
  }, []);

  useEffect(() => {
    if (
      state &&
      state.userAttendanceSuccess &&
      state.userAttendanceSuccess.length > 0
    ) {
      console.log("inside use state", state.userAttendanceSuccess);
      setAttendance(state.userAttendanceSuccess[0]);
    }
  }, [state.userAttendanceSuccess]);

  useEffect(() => {
    if(state && state.markAttendanceSuccess){
      console.log("from mark Attendance",state.markAttendanceSuccess)
      setMessage(state.markAttendanceSuccess.message)
    }
  }, [state.markAttendanceSuccess])

  const onChangeHandler = (e) => {
    // e.preventDefault()
    let markAttendanceCopy = {...markAttendance};
    markAttendanceCopy[e.target.id] = e.target.value;
    setMarkAttendance(markAttendanceCopy)
  }
   console.log("after on Change",markAttendance)

  const onClickHandler = () => {    
    markAttendance.id = attendance._id;
    //console.log("after on click",markAttendance)
    dispatch(ACTIONS.markAttendance(markAttendance))
  }
  

  // console.log("attendence", attendance);
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
