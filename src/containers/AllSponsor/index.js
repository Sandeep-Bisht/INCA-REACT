import React, { useState, useEffect } from "react";
// import DataTable from 'react-data-table-component'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import * as Loader from "react-loader-spinner";
import * as ACTIONS from "./action";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "../../css/registred.css";

let AllSponsor = () => {
  let [sponsor, setSponsor] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  const columns = [
    // {field: 'code', header: 'S.no'},
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "mobile", header: "Mobile No" },
    { field: "companyName", header: "Company Name" },
    { field: "sponsorType", header: "Sponsor Type" },
    { field: "amount", header: "Amount" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
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
      initFilters1();
    }
  }, [state.getSponsorUserSuccess, sponsor]);

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
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      email: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      companyName: {
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
  // const actionBodyTemplate = () => {
  //   return (
  //     <>
  //       <button>
  //         <i className="fa-solid fa-pen"></i>
  //       </button>
  //       <button className="icons">
  //         <i className="fa-solid fa-trash-can icon"></i>
  //       </button>{" "}
  //     </>
  //   );
  // };
  const header1 = renderHeader1();

  return (
    <>
      <div>
        <div className="card">
          <DataTable
            loading={isLoading}
            paginator
            rows={10}
            dataKey="id"
            filters={filters1}
            filterDisplay="menu"
            value={sponsor}
            responsiveLayout="scroll"
            globalFilterFields={["name"]}
            header={header1}
          >
            {dynamicColumns}
            {/* <Column
              field="Actions"
              header="Actions"
              body={actionBodyTemplate}
            ></Column> */}
          </DataTable>
        </div>
      </div>      
    </>
  );
};

export default AllSponsor;
