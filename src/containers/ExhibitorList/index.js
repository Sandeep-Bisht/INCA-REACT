import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { baseUrl } from "../../utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";

const ExhibitorList = () => {
  const [exhibitorList, setExhibitorList] = useState();
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  const columns = [
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "mobile", header: "Mobile No" },
    { field: "companyName", header: "Company Name" },
    { field: "exhibitorType", header: "Exhibition Type" },
    { field: "amount", header: "Exhibition Fee" },
  ];

  useEffect(() => {
    getExhibitorFormData();
  }, []);

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
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
 
  const header1 = renderHeader1();



  let getExhibitorFormData = async () => {
    //setLoading(true)
    let url = `${baseUrl}getexhibitor`;
    try {
      let response = await axios.get(url);
      setExhibitorList(response.data);
      setIsLoading(false);
      initFilters1();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card">
        <DataTable
          loading={isLoading}
          paginator
          rows={10}
          dataKey="id"
          filters={filters1}
          filterDisplay="menu"
          value={exhibitorList}
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header1}
        >
          {dynamicColumns}
          
        </DataTable>
      </div>
    </>
  );
};

export default ExhibitorList;
