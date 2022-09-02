import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as ACTIONS from "./action";
import jwt_decode from "jwt-decode";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "primereact/button";
import * as Loader from "react-loader-spinner";
import "../../css/registred.css";

const FullPaperList = () => {
  const state = useSelector((state) => state.GetFullPaperListReducer);

  const [fullPaperList, setFullPaperList] = useState([]);
  const [userFullPaperList, setUserFullPaperList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null)

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const columns = [
    { field: "registrationNumber", header: "Registration No" },
    { field: "userName", header: "Author Name" },
    { field: "fullPaperName", header: "Author Title" },
    { field: "themeType", header: "Theme" },
    // { field: "createdAt", header: "Date of Submission" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });

  useEffect(() => {    
    if (localStorage.getItem("token")) {
      let token = jwt_decode(localStorage.getItem("token"));
      if(token.user.user.role == "admin"){
        setRole(token.user.user.role);
        dispatch(ACTIONS.getFullPaperList());
      }  else{
        dispatch(ACTIONS.getUserFullPaperList(token.user.user._id));
        setUserId(token.user.user._id);
      }    
    }
  }, []);


  useEffect(() => {
    if (state && state.getFullPaperListSuccess) {
        setIsLoading(false);
        setFullPaperList(state.getFullPaperListSuccess);
        initFilters1();      
    }
  }, [state.getFullPaperListSuccess ]);

  useEffect(() => {
    if (state && state.getUserFullPaperListSuccess ) {
        setIsLoading(false);
        setUserFullPaperList(state.getUserFullPaperListSuccess.data);
        initFilters1();      
    }
  }, [state.getUserFullPaperListSuccess]);

  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState(null);
  const [filters2, setFilters2] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  const clearFilter1 = () => {
    initFilters1();
  };

  const onGlobalFilterChange1 = (e) => {
    const value = e.target.value;
    let _filters1 = { ...filters1 };
    _filters1["global"].value = value;

    setFilters1(_filters1);
    setGlobalFilterValue1(value);
  };

  const initFilters1 = () => {
    setFilters1({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      abstractPaperName: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
    });
    setGlobalFilterValue1("");
  };

  const renderHeader1 = () => {
    return (
      <div className="d-flex justify-content-between">
        <div>
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="Clear"
            className="p-button-outlined"
            onClick={clearFilter1}
          />
        </div>

        <div>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={globalFilterValue1}
              onChange={onGlobalFilterChange1}
              placeholder="Keyword Search"
            />
          </span>
        </div>
      </div>
    );
  };

  let redirectToFullPaperPreviewPage = (item) => {
    navigate("/dashboard/fullPaperpreview", { state: item });
  };

  const actionBodyTemplate = (node, column) => {
    return (
      <>
        <button
          className="action-btn"
          onClick={() => redirectToFullPaperPreviewPage(node)}
        >
          <i className="fa-solid fa-file-pdf"></i>
        </button>
      </>
    );
  };

//   const statusBodyTemplate = (node) => {
//     return (
//       <>
//         {node.paperApproveStatus
//           ? "Approved"
//           : node.paperApproveStatus == null
//           ? "Pending"
//           : "Reject"}
//       </>
//     );
//   };

  const header1 = renderHeader1();

  let downloadFullPaperDataExcel = () => {
    try {
       axios({
        url: 'http://localhost:4801/api/download_fullPaper_list',        
        method: 'GET',
        responseType: 'blob', 
      }).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'fullPaperList.xlsx'); 
         document.body.appendChild(link);
         link.click();
      });
    } catch (error) {
    }         
  }

  return (
    <>
    { role == "admin" ? (
        <>
         <div className="moving-box mb-2">
        <button onClick={() => downloadFullPaperDataExcel()} >Download Excel</button>
        </div>
        <div className="card">
        <DataTable
          loading={isLoading}
          paginator
          rows={10}
          dataKey="id"
          filters={filters1}
          filterDisplay="menu"
          value={fullPaperList}
          responsiveLayout="scroll"
          globalFilterFields={["fullPaperName"]}
          header={header1}
        >
          {dynamicColumns}
           <Column
            field="Actions"
            header="Document"
            body={actionBodyTemplate}
          ></Column>         
        </DataTable>
      </div>
        </>
    ) :
      <div className="card">
        <DataTable
          loading={isLoading}
          paginator
          rows={10}
          dataKey="id"
          filters={filters1}
          filterDisplay="menu"
          value={userFullPaperList}
          responsiveLayout="scroll"
          globalFilterFields={["fullPaperName"]}
          header={header1}
        >
          {dynamicColumns}
           <Column
            field="Actions"
            header="Document"
            body={actionBodyTemplate}
          ></Column>         
        </DataTable>
      </div>
    }
    </>
  );
};

export default FullPaperList;
