import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import axios from 'axios';
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
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

  const actionBodyTemplate = (node, column) => {
    return (
      <>
        <button onClick={() => redirectToCretePage(node, "edit")}>
          <i className="fa-solid fa-pen"></i>
        </button>
        
        <button onClick={() => redirectToCretePage(node, "view")}>
          <i className="fa-solid fa-eye"></i>
        </button>
      </>
    );
  };

  useEffect(() => {
    if (state && state.userRegistrationInfoSuccess) {
      setIsLoading(false);
      setUsersInfo(state.userRegistrationInfoSuccess);
      initFilters1();
    }
  }, [state.userRegistrationInfoSuccess]);

  let redirectToCretePage = (item, from) => {
    item.mode = from;
    navigate("/dashboard/create", { state: item });
  };

  let downloadStudentDataExcel = () => {
    try {
       axios({
        url: 'http://localhost:4801/api/downloadexcel',
        method: 'GET',
        responseType: 'blob', 
      }).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'registreduser.xlsx'); 
         document.body.appendChild(link);
         link.click();
      });
    } catch (error) {
        console.error(error);
    }         
  }

  const columns = [
    { field: "name", header: "Name" },
    { field: "email", header: "E-mail" },
    { field: "designation", header: "Designation" },
    { field: "participationType", header: "Participation Type" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header}  sortable />
    );
  });

  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState(null);
  const [filters2, setFilters2] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    designation: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    participationType: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
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
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      email: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      designation: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      participationType: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
    });
    setGlobalFilterValue1("");
  };

  const renderHeader1 = () => {
    return (
      <div className="flex justify-content-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear"
          className="p-button-outlined"
          onClick={clearFilter1}
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue1}
            onChange={onGlobalFilterChange1}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };
 
  const header1 = renderHeader1();

  return (
    <>
      <div>
        <button onClick={() => downloadStudentDataExcel()} >Download</button>
        <div className="card">
          <DataTable
          loading={isLoading}
            paginator
            rows={10}
            dataKey="id"
            filters={filters1}
            filterDisplay="menu"
            value={usersInfo}
            responsiveLayout="scroll"
            globalFilterFields={[
              "name",
              "email",
              "designation",
              "participationType",
            ]}
            header={header1}
          >
            {dynamicColumns}
            <Column
              field="Actions"
              header="Actions"
              body={actionBodyTemplate}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};
export default AllRegistration;
