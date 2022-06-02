import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as ACTIONS from "./action";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import * as Loader from "react-loader-spinner";

const AbstractDocumentList = () => {
  const state = useSelector((state) => state.AbstractListReducer);

  const [abstractList, setAbstractList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const columns = [
    { field: "abstractPaperName", header: "Name" },
    { field: "abstractPaperDescription", header: "Description" },
  ];

  const dynamicColumns = columns.map((col, i) => {
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
    navigate("/dashboard/previewPaper", { state: item });
  };

  const actionBodyTemplate = (node, column) => {
    return (
      <>
        {/* <button onClick={() =>navigate("/dashboard/previewPaper")}> */}

        <button  onClick={() => redirectToPaperPreviewPage(node)}>
          <i className="fa-solid fa-file-pdf"></i>
        </button> 
      </>
    );
  };
  const header1 = renderHeader1();

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
          value={abstractList}
          responsiveLayout="scroll"
          globalFilterFields={["abstractPaperName"]}
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
    </>
  );
};

export default AbstractDocumentList;
