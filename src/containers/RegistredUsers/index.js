import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import * as Loader from "react-loader-spinner";
import * as ACTIONS from "./action";
import { baseUrl } from "../../utils";
import { ConfirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";
import "../../css/user.css"

import "../../css/registred.css";
import axios from "axios";

let RegisteredUser = () => {
  let [users, setUsers] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const buttonEl = useRef(null);
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);

  const state = useSelector((state) => state.AllUsersReducer);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.getUsers());
  }, []);

  // const accept = (id) => {
  //   console.log(id, "inside accept")
  //   // deleteUser(id);
  // };

  // const reject = () => {
  //   toast.current.show({
  //     severity: "warn",
  //     summary: "Rejected",
  //     detail: "Delete Cancelled",
  //     life: 5000,
  //   });
  // };



  useEffect(() => {
    if (state && state.allUserSuccess) {
      setIsLoading(false);
      setUsers(state.allUserSuccess);
      initFilters1();
    }
  }, [state.allUserSuccess]);

  const columns = [
    { field: "userName", header: "Member Name" },
    { field: "userEmail", header: "Email" },
    { field: "mobileNumber", header: "Mobile No" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });

  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState(null);
  const [filters2, setFilters2] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    userName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    userEmail: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
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
      userName: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      userEmail: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      mobileNumber: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
    });
    setGlobalFilterValue1("");
  };

  const actionBodyTemplate = (node) => {
    return (
      // <>
      //   <Toast ref={toast} />
      //   <ConfirmPopup
      //     target={buttonEl.current}
      //     visible={visible}
      //     onHide={() => setVisible(false)}
      //     message="Are you sure you want to delete User?"
      //     icon="pi pi-exclamation-triangle"
      //     accept={() => accept(node._id)}
      //     reject={reject}
      //   />
      //   <i
      //     ref={buttonEl}
      //     onClick={() => setVisible(true)}
      //     className="fa fa-trash"
      //     aria-hidden="true"
      //   ></i>
      // </>
       <>
      {
  node.status === false ? (
    <button className="activate-user" type="button" onClick={()=>activateUser(node._id)}>Activate</button>
  ) : (
    <button className = "deactivate-user" type="button" onClick={() => deActivateUser(node._id)}>
      De-Activate
    </button>
  )
}
      
          </>
    );
  };

  const deActivateUser = async (userId) => {
    console.log("inisde delete", userId)
    try {
      let url = `${baseUrl}delete_user_by_id/${userId}`;
      let response = await axios.delete(url);
      if (response) {
        dispatch(ACTIONS.getUsers());
        // toast.current.show({
        //   severity: "info",
        //   summary: "Confirmed",
        //   detail: "User Deleted",
        //   life: 4000,
        // });
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  const activateUser = async (userId) => {
     try {
      let url = `${baseUrl}activate_user_by_id/${userId}`;
      let response = await axios.put(url);
      if (response) {
        dispatch(ACTIONS.getUsers());
        // toast.current.show({
        //   severity: "info",
        //   summary: "Confirmed",
        //   detail: "User Deleted",
        //   life: 4000,
        // });
       
      }
    } catch (error) {
      console.log(error);
    }
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
    );
  };
  const header1 = renderHeader1();

  

  let downloadExcel = () => {
    try {
       axios({
        url: `${baseUrl}downloadUserexcel`,
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
    }
  }

  return (
    <>
      <div>
      <div className="moving-box mb-2">
        <div >
           
          </div>
          <button onClick={() => downloadExcel()}  >Download Excel</button>
        </div>
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
            <Column
              field="ACTION"
              header="Action"
              body={actionBodyTemplate}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default RegisteredUser;
