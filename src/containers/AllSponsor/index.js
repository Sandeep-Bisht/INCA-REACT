import React, { useState, useEffect } from "react";
// import DataTable from 'react-data-table-component'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from "react-redux";
import * as Loader from "react-loader-spinner";
import * as ACTIONS from "./action";

import "../../css/registred.css";

let AllSponsor = () => {
  let [sponsor, setSponsor] = useState([]);
  let [isLoading, setIsLoading] = useState(true); 

  const columns = [
    {field: 'code', header: 'S.no'},
    {field: 'name', header: 'Name'},
    {field: 'email', header: 'Email'},
    {field: 'mobile', header: 'Mobile No'},
    {field: 'companyName', header: 'Company Name'},
    {field: 'sponsorType', header: 'Sponsor Type'},
    {field: 'amount', header: 'Amount'},
    {field: '', header: 'Action'},
];

const dynamicColumns = columns.map((col,i) => {
  return <Column key={col.field} field={col.field} header={col.header}  filter sortable gridlines/>;
});

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
  

  return (
    <>
      <div>
            <div className="card">
                <DataTable value={sponsor} responsiveLayout="scroll" >
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>


    {/* <h1>React Table</h1> */}
      {/* <section className="users-lists">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>S.no.</th>
                    <th>Sponsor Name</th>
                    <th>Mobile No.</th>
                    <th>E-mail</th>
                    <th>company Name</th>
                    <th>Sponsor Type</th>
                    <th>Amount</th>
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
                  ) : sponsor.length > 0 ? (
                    sponsor.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.mobile}</td>
                          <td>{item.email}</td>
                          <td>{item.companyName}</td>
                          <td>{item.sponsorType}</td>
                          <td>{item.amount}</td>
                          <td>
                            <button  >
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className="icons">
                              <i className="fa-solid fa-trash-can icon"></i>
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
      </section> */}
      {/* {showModal && createPopModal()} */}
    </>
  );
};

export default AllSponsor;
