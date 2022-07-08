import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import * as ACTIONS from './action';

const TransactionList = () => {
    const [transactionList, setTransactionList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [globalFilterValue1, setGlobalFilterValue1] = useState("");
    const [filters1, setFilters1] = useState(null);
    let dispatch = useDispatch();
    let state = useSelector((state) =>state.GetUserTransactionListReducer)

    useEffect(()=> {
    dispatch(ACTIONS.getUserTransactionList())
    }, [])

    useEffect(()=>{
        if(state && state.getUserTransactionListSuccess  && state.getUserTransactionListSuccess.response ) {
            let res = state.getUserTransactionListSuccess.response
            setIsLoading(false);
            setTransactionList(res);
        }

    }, [state.getUserTransactionListSuccess])

    const columns = [
        { field: "registrationNumber", header: "Registration No" },
        {field: "accountHolderName", header : "Account Type" },
        { field: "transactionNumber", header: "Transaction No" },
        { field: "bankName", header: "Bank Name" },
        { field: "accountNumber", header: "Account No" },
        { field: "referenceNumber", header: "Reference No" },
        { field: "mannualPaymentStatus", header: "Payment Status" },
      ];

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
            value={transactionList}
            responsiveLayout="scroll"
            globalFilterFields={["name"]}
            header={header1}
          >
            {dynamicColumns}
          </DataTable>
        </div>
    </>
  )
}

export default TransactionList