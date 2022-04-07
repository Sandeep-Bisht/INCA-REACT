import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Loader from "react-loader-spinner";
import * as ACTIONS from "./action";
import "../../css/registred.css";

let AllSponsor = () => {
  let [sponsor, setSponsor] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  // let [showModal, setShowModal] = useState(false);

  const state = useSelector((state) => state.AllSponsorReducer);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.getSponsorUser());
  }, []);

  useEffect(() => {
    if (state && state.getSponsorUserSuccess) {
      setIsLoading(false);
      setSponsor(state.getSponsorUserSuccess);
    }
  }, [state.getSponsorUserSuccess]);

  // let editHandler = (id) => {
  //   setShowModal(true);
  // };

  // let createPopModal = () => {
  //   return (
  //     <div className="modal d-block " tabindex="-1">
  //       <div className="modal-dialog">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h5 className="modal-title">Modal title</h5>
  //             <button type="button" className="btn-close">
  //               X
  //             </button>
  //           </div>
  //           <div className="modal-body">
  //             <p>Modal body text goes here.</p>
  //           </div>
  //           <div className="modal-footer">
  //             <button
  //               type="button"
  //               className="btn btn-secondary"
  //               data-bs-dismiss="modal"
  //               onClick={() => setShowModal(false)}
  //             >
  //               Close
  //             </button>
  //             <button type="button" className="btn btn-primary">
  //               Save changes
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <>
      <section className="users-lists">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>S.no.</th>
                    <th>Sponsor Name</th>
                    <th>Mobile No.</th>
                    <th>E-mail</th>
                    <th>companyName</th>
                    <th>sponsorType</th>
                    <th>amount</th>
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
                  ) : sponsor.length > 0 ? (
                    sponsor.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.mobile}</td>
                          <td>{item.email}</td>
                          <td>{item.companyName}</td>
                          <td>{item.sponsorType}</td>
                          <td>{item.amount}</td>
                          <td>
                            <button >
                              <i class="fa-solid fa-pen"></i>
                            </button>
                            <button className="icons">
                              <i className="fa-solid fa-trash-can icon"></i>
                            </button>
                            <button>
                              <i class="fa-solid fa-eye"></i>
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
      {/* {showModal && createPopModal()} */}
    </>
  );
};

export default AllSponsor;
