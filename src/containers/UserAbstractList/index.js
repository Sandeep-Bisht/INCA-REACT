import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import * as ACTIONS from './action'



const UserAbstractList = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [userAbstractList, setUserAbstractList] = useState([]);
  const state = useSelector((state) => state.UserAbstractListReducer); 

  let dispatch = useDispatch();
 

  useEffect (() => {
    if(localStorage.getItem("token")) {
      let token = jwt_decode(localStorage.getItem("token"))
      dispatch(ACTIONS.getUserAbstractList(token.user.user._id))
    }   

  }, [])

  useEffect (() => {
    if(state && state.getUserAbstractListSuccess ){
      console.log(state && state.getUserAbstractListSuccess, 'state && state.getUserAbstractListSuccessstate && state.getUserAbstractListSuccess')
      setIsLoading(false)
      setUserAbstractList(state.getUserAbstractListSuccess.data)
  }

  }, [state.getUserAbstractListSuccess])

  const columns = [        
    { field: "abstractPaperName", header: "Paper Name" },
    { field: "abstractPaperDescription", header: "Paper Description" }

  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });

  const statusBodyTemplate = (node) => {
    return (
      <>
        <p>{node.paperApproveStatus ? "Approved" : node.paperApproveStatus == null ? "Pending" : "Reject"}</p>
      </>
    );
  };

  const actionBodyTemplate = (node) => {
    return (
      <>
        <button className="btn btn-success" disabled={!node.paperApproveStatus}>
            Payment
        </button>
      </>
    );
  };

 // const header1 = renderHeader1();

  return (
    <>
      <div className="card">
        <DataTable
          loading={isLoading}
          //paginator
          //rows={10}
          dataKey="id"
          //filterDisplay="menu"
          value={userAbstractList}
          //responsiveLayout="scroll"
          //globalFilterFields={["abstractPaperName"]}
          //header={header1}
        >
          {dynamicColumns}
          <Column
            field="Status"
            header="Status"
            body={statusBodyTemplate}
          ></Column>
          <Column
            field="Actions"
            header="Actions"
            body={actionBodyTemplate}
          ></Column>
        </DataTable>
      </div>
    </>
  );
};

export default UserAbstractList;
