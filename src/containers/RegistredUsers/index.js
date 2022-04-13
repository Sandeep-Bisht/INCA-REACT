import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Loader from "react-loader-spinner";
import * as ACTIONS from "./action";
import "../../css/registred.css";

let RegisteredUser = () => {
  let [users, setUsers] = useState([]);
  let [password, setPassword] = useState();
  let [isLoading, setIsLoading] = useState(true);
  let [showModal, setShowModal] = useState(false);

  const state = useSelector((state) => state.AllUsersReducer);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.getUsers());
  }, []);

  useEffect(() => {
    if (state && state.allUserSuccess) {
      setIsLoading(false);
      setUsers(state.allUserSuccess);
    }
  }, [state.allUserSuccess]);

  let editHandler = (id) => {
    setShowModal(true);
  };

  const passwordOnChangeHandler = (e) =>
  {
    e.preventDefault(); 
    setPassword(e.target.value);
  }

  let createPopModal = () => {
    return (
      <div className="modal d-block " tabindex="-1" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Password</h5>
              {/* <button type="button" className="btn-close">
                X
              </button> */}
            </div>
            <div className="modal-body">
            <div className="col-md-12">                
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter New Password"
                  onChange={(e) => passwordOnChangeHandler(e)}
                  value={password}                  
                  id="password"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
               Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
                    <th>Member Name</th>
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
                  ) : users.length > 0 ? (
                    users.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{item.userName}</td>
                          <td>{item.mobileNumber}</td>
                          <td>{item.userEmail}</td>
                          <td>
                            <button onClick={() => editHandler(item._id)}>
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className="icons">
                              <i className="fa-solid fa-trash-can icon"></i>
                            </button>
                            <button>
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
      {showModal && createPopModal()}
    </>
  );
};

export default RegisteredUser;
