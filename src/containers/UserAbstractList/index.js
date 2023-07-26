import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { useNavigate } from "react-router-dom";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import * as ACTIONS from "./action";

const UserAbstractList = () => {
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  const [userAbstractList, setUserAbstractList] = useState([]);
  // const [approveStatus, setApproveStatus] = useState("false")
  const state = useSelector((state) => state.UserAbstractListReducer);

  let dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let token = jwt_decode(localStorage.getItem("token"));
      dispatch(ACTIONS.getUserAbstractList(token.user.user._id));
    }
  }, []);

  useEffect(() => {
    if (state && state.getUserAbstractListSuccess) {
      setIsLoading(false);
      setUserAbstractList(state.getUserAbstractListSuccess.data);
    }
  }, [state.getUserAbstractListSuccess]);

  const columns = [
    { field: "registrationNumber", header: "Registration No" },
    { field: "abstractNumber", header: "Abstract Id"},
    { field: "authorEmail", header: "Email" },
    { field: "abstractPaperName", header: "Abstract Title" },
    // { field: "themeType", header: "Theme" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });

  const statusBodyTemplate = (node) => {
    return (
      <>
        {node.paperApproveStatus
          ? "Approved"
          : node.paperApproveStatus == null
          ? "Pending"
          : "Reject"}
      </>
    );
  };

  const actionBodyTemplate = (userAbstractList) => {
    return (
      <>
        {/* <button className="btn btn-success" disabled={!node.paperApproveStatus}>
          Payment
        </button> */}
       {userAbstractList?.paperApproveStatus && <button className="abstracts-common-btn" onClick={() => {
          navigate(`/dashboard/fullPaper` , { state : userAbstractList})
        }}>Full Paper Submission</button>}
        {/* <button className="abstracts-common-btn" onClick={() => {
          navigate(`/dashboard/fullPaper` , { state : userAbstractList})
        }}>Full Paper Submission</button> */}
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
      <div className="pt-5">
      <p className="pt-3 fs-6">
                          <b>Note</b>: Once your Abstract is approved, you can submit your full paper.
                          For any technical support please contact at
                          info@43inca.org
                        </p>
        </div>   
    </>
  );
};

export default UserAbstractList;
