import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as Loader from "react-loader-spinner";
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
    console.log(item, 'value')
    item.mode = from;
    navigate("/dashboard/create", { state: item });
  };

  const columns = [
    // {field: 'code', header: 'S.no'},
    { field: "name", header: "Name" },
    { field: "email", header: "E-mail" },
    { field: "designation", header: "Designation" },
    { field: "participationType", header: "Participation Type" },
    // {field: actionBodyTemplate(), header:"Actions"}
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
    console.log("I am value", value);
    let _filters1 = { ...filters1 };
    console.log("I am _filters1", _filters1);
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

      // 'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      // 'representative': { value: null, matchMode: FilterMatchMode.IN },
      // 'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
      // 'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      // 'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      // 'activity': { value: null, matchMode: FilterMatchMode.BETWEEN },
      // 'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    setGlobalFilterValue1("");
  };

  // useEffect(() => {
  //   customerService.getCustomersLarge().then(data => { setCustomers1(getCustomers(data)); setLoading1(false) });
  //   customerService.getCustomersLarge().then(data => { setCustomers2(getCustomers(data)); setLoading2(false) });
  //   initFilters1();
  // }, []);

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
        <div className="card">
          <DataTable
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

      {/* <section className="users-lists">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>S.no.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Participation Type</th>
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
                  ) : usersInfo.length > 0 ? (
                    usersInfo.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.designation}</td>
                          <td>{item.participationType}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.email}</td>
                          <td>
                            <button
                              onClick={() => redirectToCretePage(item, "edit")}                             
                              
                            >
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className="icons">
                              <i className="fa-solid fa-trash-can icon"></i>
                            </button>
                            <button
                              onClick={() => redirectToCretePage(item, "view")                               
                              }
                            >
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
      </section> */}
    </>
  );
};
export default AllRegistration;
