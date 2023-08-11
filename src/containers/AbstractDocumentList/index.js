import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as ACTIONS from "./action";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { GetHeaders, baseUrl } from '../../utils'
import { Button } from "primereact/button";
import * as Loader from "react-loader-spinner";
import "../../css/registred.css";
import axios from "axios";

const AbstractDocumentList = () => {
  const state = useSelector((state) => state.AbstractListReducer);

  const [abstractList, setAbstractList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const columns = [
    {field:"registrationNumber",header:"Registration No"}, 
    { field: "abstractNumber", header: "Abstract Number"},
    {field:"authorFirstName",header:"Author Name"},    
    { field: "abstractPaperName", header: "Abstract Title" },
    
    // { field: "createdAt", header: "Date of Submission"},
    // { field: "themeType", header: "Theme" },    
  ];

  const dynamicColumns = columns.map((col) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });

  useEffect(() => {
    dispatch(ACTIONS.getAbstractData());
  }, []);

  useEffect(() => {
    if (state && state.getAbstractDocSuccess) {
      setIsLoading(false);
      setAbstractList(state.getAbstractDocSuccess);
      initFilters1();
    }
  }, [state.getAbstractDocSuccess]);

  

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

  let redirectToPaperPreviewPage = (item) => {
    item.mode = "preview"
    navigate("/dashboard/upload", { state: item });
  };

  const actionBodyTemplate = (node) => {
    return (      <>
        
        <div >
        {/* {node.abstract} */}
            <button className="action-btn" onClick={() => redirectToPaperPreviewPage(node, "view")}>
              <i className="fa-solid fa-eye "></i>
            </button>

          </div>
      </>
    );
  };

  const dateBodyTemplate = (node) => {
    const date = new Date(node.createdAt);
      const formatedDate =  date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return formatedDate;
  };
  const statusBodyTemplate = (node) => {
    return (
      <>
        {node.paperApproveStatus ? "Approved" : node.paperApproveStatus == null ? "Pending" : "Reject"}
      </>
    );
  };

  const header1 = renderHeader1();

  let downloadAbstractDataExcel = () => {
    try {
       axios({
        url: `${baseUrl}download_abstarct_list`,
        method: 'GET',
        responseType: 'blob', 
      }).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'abstractlist.xlsx'); 
         document.body.appendChild(link);
         link.click();
      });
    } catch (error) {
    }         
  }

  return (
    <>
     <div className="moving-box mb-2">
        <button onClick={() => downloadAbstractDataExcel()} >Download Excel</button>
        </div>
      <div className="card">
        <DataTable
          loading={isLoading}
          paginator
          rows={10}
          dataKey="id"
          filters={filters1}
          filterDisplay="menu"
          value={abstractList}
          responsiveLayout="scroll"
          globalFilterFields={[
            "abstractPaperName",
            "authorFirstName",
            "registrationNumber",
            "abstractNumber"

          ]}
          header={header1}
        >
          
          {dynamicColumns}
          <Column
            field="Date of Submission"
            header="Date of Submission"
            body={dateBodyTemplate}
          ></Column>
          <Column
            field="createdAt"
            header="Action"
            body={actionBodyTemplate}
          ></Column>
          
          <Column
            field="Status"
            header="Status"
            body={statusBodyTemplate}
          ></Column>
        </DataTable>
      </div>
    </>
  );
};

export default AbstractDocumentList;
