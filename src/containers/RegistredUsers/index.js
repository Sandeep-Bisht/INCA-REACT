import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import * as Loader from "react-loader-spinner";
import * as ACTIONS from "./action";

import "../../css/registred.css";

let RegisteredUser = () => {
  let [users, setUsers] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  const state = useSelector((state) => state.AllUsersReducer);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.getUsers());
  }, []);

  useEffect(() => {
    if (state && state.allUserSuccess) {
      setIsLoading(false);
      setUsers(state.allUserSuccess);
      initFilters1();
    }
  }, [state.allUserSuccess]);


  const columns = [
    {field: 'userName', header: 'Member Name'},  
    {field: 'userEmail', header: 'Email'},  
    {field: 'mobileNumber', header: 'Mobile No'},
];

const dynamicColumns = columns.map((col,i) => {
  return <Column key={col.field} field={col.field} header={col.header} sortable   />;
});

  const [globalFilterValue1, setGlobalFilterValue1] = useState('');
  const [filters1, setFilters1] = useState(null);
  const [filters2, setFilters2] = useState({ 
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'userName': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'userEmail': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});

  const clearFilter1 = () => {
    initFilters1();
}

const onGlobalFilterChange1 = (e) => {
  const value = e.target.value;
  let _filters1 = { ...filters1 };
  _filters1['global'].value = value;

  setFilters1(_filters1);
  setGlobalFilterValue1(value);
}

const initFilters1 = () => {
  setFilters1({
      'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
      'userName': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      'userEmail': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      'mobileNumber': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      
  });
  setGlobalFilterValue1('');  
}

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
    )
}
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
            value={users}
            responsiveLayout="scroll"
            globalFilterFields={["userName", "userEmail"]}
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

export default RegisteredUser;
