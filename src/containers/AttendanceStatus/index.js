import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from "primereact/datatable";
import * as ACTIONS from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Navigate } from 'react-router-dom';
import '../../css/attendance.css'

const AttendanceStatus = () => {

  let [isLoading, setIsLoading] = useState(true);
  const [attendanceStatus, setAttendanceStatus] = useState([])
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState(null);
  const [checkTrue , setCheckedTrue] = useState('');
  const [nodeId, setNodeId] = useState('')
  //const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const columns = [
    // {field: 'code', header: 'S.no'},
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "phoneNumber", header: "Mobile No" },
    { field: "participationType", header: "Participation Type" },
    { field: "registrationFee", header: "Registration Fee" },
  ];

  let dispatch = useDispatch();
  const state = useSelector((state) => state.AttendenceStatusReducer);

  useEffect(() => {
    dispatch(ACTIONS.getAttendanceStatus());
  }, []);

  useEffect(() => {
    
    if (state && state.getAttendanceStatusSuccess) {
      if(state && state.getAttendanceStatusSuccess.length > 0) {
        var res = state.getAttendanceStatusSuccess.map((item, i) => {
          if(!item.hasOwnProperty('attendanceStatus')){
            item.attendanceStatus = false 
          }
          return item
        })
      }
      setIsLoading(false);
      setAttendanceStatus(state.getAttendanceStatusSuccess);
      initFilters1();
    }
  }, [state.getAttendanceStatusSuccess, attendanceStatus]);




  let markAttendanceStatus = (e, node) => {
    console.log(e.target.checked, node, 'node value')
    if(e.target.checked){
      setNodeId(node._id)
     dispatch(ACTIONS.markUserAttendance(node._id))
      navigate("/dashboard");
    }
    // else {
    //   setNodeId("")
    // }
    
    
    
  }

  const dynamicColumns = columns.map((col, i) => {

    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });



  const actionBodyTemplate = (node, column) => {
    console.log(node, 'nodeeeee')
   // let checkBoxId = Math.random();
    return (
      <>
      <div className='toggle-btn'>
          <label class="switch">
            <input type="checkbox" checked ={ node.attendanceStatus ||  nodeId == node._id }  disabled={node.attendanceStatus } onChange={(e) => markAttendanceStatus(e, node)}/>
            <span class="slider round"></span>
          </label>
         
        </div>   
       </>
    );
  };



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
    <div>

      <div className="card">
        <DataTable
          loading={isLoading}
          paginator
          rows={10}
          dataKey="id"
          filters={filters1}
          filterDisplay="menu"
          value={attendanceStatus}
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
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
  )
}

export default AttendanceStatus