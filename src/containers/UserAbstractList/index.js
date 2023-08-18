import React, { useEffect, useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { useNavigate } from "react-router-dom";
import { Column } from "primereact/column";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import * as ACTIONS from "./action";
import axios from "axios";
import { baseUrl } from "../../utils";
import { ConfirmPopup } from "primereact/confirmpopup";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const UserAbstractList = () => {
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  const [userAbstractList, setUserAbstractList] = useState([]);
  const [currentId,setCurrentId] = useState()
  // const [approveStatus, setApproveStatus] = useState("false")
  const state = useSelector((state) => state.UserAbstractListReducer);

  let dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);
  const buttonEl = useRef(null);
  const [submitFullPaper, setSubmitFullPaper] = useState(false);

  const accept = () => {
    console.log("this is id", currentId)
    deleteAbstractDetails(currentId);
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "Delete Cancelled",
      life: 5000,
    });
  };

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
      let userAbstractdata = state.getUserAbstractListSuccess.data;
      let submitFullpaper = userAbstractdata.find(
        (item) => item.paperApproveStatus === true
      );
      if (submitFullpaper) {
        setSubmitFullPaper(true);
      }
    }
  }, [state.getUserAbstractListSuccess]);

  const columns = [
    { field: "registrationNumber", header: "Registration No" },
    { field: "abstractNumber", header: "Abstract Id" },
    { field: "abstractPaperName", header: "Abstract Title" },
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
          ? "Review pending"
          : "Reject"}
      </>
    );
  };

  // const actionBodyTemplate = (userAbstractList) => {
  //   return (
  //     <>
  //       {/* <button className="btn btn-success" disabled={!node.paperApproveStatus}>
  //         Payment
  //       </button> */}
  //      {userAbstractList?.paperApproveStatus && <button className="abstracts-common-btn" onClick={() => {
  //         navigate(`/dashboard/fullPaper` , { state : userAbstractList})
  //       }}>Full Paper Submission</button>}
  //       {/* <button className="abstracts-common-btn" onClick={() => {
  //         navigate(`/dashboard/fullPaper` , { state : userAbstractList})
  //       }}>Full Paper Submission</button> */}
  //     </>
  //   );
  // };

  const deleteAbstractTemplate = (node) => {
    // return(
    //   <span onClick={() => {
    //     accept(node._id)
    //   }}>
    //     <i className="fa fa-trash" aria-hidden="true">
        
    //     </i>

    //   </span>
      
      
    // )
    // let id = node._id;
    return (
      <>
        {
          !node?.paperApproveStatus && (
            <>
              
              
              {/* <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" /> */}
              <i
                ref={buttonEl}
                onClick={() => {setVisible(true); setCurrentId(node._id)}}
                className="fa fa-trash"
                aria-hidden="true"
              ></i>
            </>
          )
          //  <span <i className="fa fa-trash" aria-hidden="true"></i></Popconfirm>
          //  className="text-danger cursior-pointer"
          //  onClick={() => {
          //       deleteAbstractDetails(userAbstractList._id)
          //     }}
          //   >

          //  </span>
          //  <button className="abstracts-common-btn" onClick={() => {
          //     deleteAbstractDetails(userAbstractList._id)
          //   }}></button>
        }
      </>
    );
  };

  const deleteAbstractDetails = async (abstractId) => {
    try {
      let url = `${baseUrl}delete_abstract_by_id/${abstractId}`;
      let response = await axios.delete(url);
      if (response) {
        toast.current.show({
          severity: "info",
          summary: "Confirmed",
          detail: "Abstract Deleted",
          life: 4000,
        });
        let token = jwt_decode(localStorage.getItem("token"));
        dispatch(ACTIONS.getUserAbstractList(token.user.user._id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dateBodyTemplate = (node) => {
    const date = new Date(node.createdAt);
    const formatedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formatedDate;
  };

  const emailBodyTemplate = (node) => {
    return node.authorEmail ? node.authorEmail : node.userEmail;
  };

  // const header1 = renderHeader1();

  return (
    <>
    <Toast ref={toast} />
    <ConfirmPopup
                target={buttonEl.current}
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to delete Abstract?"
                icon="pi pi-exclamation-triangle"
                accept={() => accept()}
                reject={reject}
              />
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
            field="Email"
            header="Email"
            body={emailBodyTemplate}
          ></Column>
          <Column
            field="Date of Submission"
            header="Date of Submission"
            body={dateBodyTemplate}
          ></Column>
          <Column
            field="Status"
            header="Status"
            body={statusBodyTemplate}
          ></Column>
          {/* <Column
            field="View"
            header="View"
            body={actionBodyTemplate}
          ></Column>  */}
          <Column
            field="ACTION"
            header="Action"
            body={deleteAbstractTemplate}
          ></Column>
        </DataTable>
      </div>

      {submitFullPaper && (
        <div>
          <button
            className="abstracts-common-btn"
            onClick={() => {
              navigate(`/dashboard/fullPaper`, { state: userAbstractList });
            }}
          >
            Full Paper Submission
          </button>
        </div>
      )}
      <div className="pt-3">
        <p className="pt-3 fs-6">
          <b>Note</b>: Once your Abstract is approved, you can submit your full
          paper. For any technical support please contact at info@43inca.org
        </p>
      </div>
    </>
  );
};

export default UserAbstractList;
