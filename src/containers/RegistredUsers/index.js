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
  let [password, setPassword] = useState();
  let [isLoading, setIsLoading] = useState(true);
  let [showModal, setShowModal] = useState(false);

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

  let editHandler = (id) => {
    setShowModal(true);
  };

  const passwordOnChangeHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  let createPopModal = () => {
    return (
      <div className="modal d-block " tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Password</h5>
              {/* <button type="button" className="btn-close">
                X
              </button> */}
            </div>
            <div className="modal-body">
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter New Password"
                  onChange={(e) => passwordOnChangeHandler(e)}
                  value={password}
                  id="password"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
// const actionBodyTemplate = () => {
//   return<button  > <i className="fa-solid fa-pen"></i> </button>
// }
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
      {/* <section className="users-lists">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>S.no.</th>
                    <th>Member Name</th>
                    <th>Mobile No.</th>
                    <th>E-mail</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {isLoading ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                      }}
                    >
                      <Loader.ThreeDots />
                    </div>
                  ) : users.length > 0 ? (
                    users.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{item.userName}</td>
                          <td>{item.mobileNumber}</td>
                          <td>{item.userEmail}</td>
                          <td>
                            <button onClick={() => editHandler(item._id)}>
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className="icons">
                              <i className="fa-solid fa-trash-can icon"></i>
                            </button>
                            <button>
                              <i className="fa-solid fa-eye"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    "No data item"
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {showModal && createPopModal()} */}
    </>
  );
};

export default RegisteredUser;
