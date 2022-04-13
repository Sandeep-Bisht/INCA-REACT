import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Loader from "react-loader-spinner";
import * as ACTIONS from "./action";
import "../../css/registred.css";

  const AllRegistration = () => {
  const navigate = useNavigate();
  let [usersInfo, setUsersInfo] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  const state = useSelector((state) => state.GetUserRegistrationInfoReducer);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.getUserRegistrationInfo());
  }, []);

  useEffect(() => {
    if (state && state.userRegistrationInfoSuccess) {
      setIsLoading(false);
      setUsersInfo(state.userRegistrationInfoSuccess);
    }
  }, [state.userRegistrationInfoSuccess]);
  // console.log(
  //   state && state.userRegistrationInfoSuccess,
  //   "state && state.userRegistrationInfoSuccessstate && state.userRegistrationInfoSuccess"
  // );

  let redirectToCretePage = (item, from) => {
    item.mode = from 
    navigate("/dashboard/create", { state: item } )
  }

  return (
    <>
      <section className="users-lists">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>S.no.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Participation Type</th>
                    <th>Mobile No.</th>
                    <th>E-mail</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {isLoading ? (
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
                  ) : usersInfo.length > 0 ? (
                    usersInfo.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.designation}</td>
                          <td>{item.participationType}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.email}</td>
                          <td>
                            <button
                              onClick={() => redirectToCretePage(item, "edit")}
                              
                              
                            >
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className="icons">
                              <i className="fa-solid fa-trash-can icon"></i>
                            </button>
                            <button
                              onClick={() => redirectToCretePage(item, "view")                               
                              }
                            >
                              <i className="fa-solid fa-eye"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    "No data item"
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AllRegistration;
