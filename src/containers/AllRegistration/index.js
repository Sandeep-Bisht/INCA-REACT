import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import  QRCode  from 'qrcode.react';
import axios from 'axios';
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import * as ACTIONS from "./action";
import "../../css/registred.css";
import { baseUrl } from "../../utils";

const AllRegistration = () => {
  const navigate = useNavigate();
  let [usersInfo, setUsersInfo] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [qrCodeText, setQRCodeText] = useState('');

  const state = useSelector((state) => state.GetUserRegistrationInfoReducer);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.getUserRegistrationInfo());
  }, []);

  let sendDownloadCertificateEmailToUser = async (id) => {
    let url = `${baseUrl}sendemailtodownloadcertificate/${id}`;
    try {
      let response = await axios.get(url);

    } catch (error) {
      console.log(error);
    }
  }

  const downloadQRCode = (node) => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  let sendEmailToUsers = async(email) => {
    let url = `${baseUrl}sendEmailToAllUsers/${email}`;
    try {
        let response = await axios.get(url);
        //setUserInfo(response.data[0])
    } catch (error) {
        console.log(error);
    }
  }

  let generateUserQrCode = (node) => {
    // let url = "https://www.google.com/"
    let url = `http://42inca.org/userdetails/${node.email}`
    setQRCodeText(url)
  }

  const actionBodyTemplate = (node, column) => {
    return (
      <>
        <div className="d-flex">
          {/* <div>
        <button className="action-btn" onClick={() => { sendEmailToUsers(node.email) }}>
              Send General email
            </button>
            </div> */}
          <div className="ps-2">

            <button className="action-btn" onClick={() => redirectToCretePage(node, "edit")}>
              <i className="fa-solid fa-pen text-white"></i>
            </button>
          </div>

          <div >
            <button className="action-btn" onClick={() => redirectToCretePage(node, "view")}>
              <i className="fa-solid fa-eye "></i>
            </button>

          </div>

          <div className="ps-2">
            <div>

            </div>
            <button className="action-btn" onClick={() => { sendDownloadCertificateEmailToUser(node.registrationNumber) }}>
              Send Email
            </button>

          </div>

          {/* <div className="ps-2">
            <button className="action-btn" onClick={() => { generateUserQrCode(node) }}>
              Generate Qr
            </button>

          </div> */}
            
          {/* <div className="ps-2">
        <button className="action-btn" onClick={() => { sendEmailToUsers(node.email) }}>
              Send General email
            </button>
            </div> */}
        </div>
      </>
    );
  };

  const attendanceBodyTemplate = (node, column) => {
    return (
      <>
        <div className="d-flex">
          <p>{node.attendanceStatus ? "Present" : "Absent"}</p>
        </div>
      </>
    );
  };

  const paymentBodyTemplate = (node, column) => {
    return (
      <>
        <div className="d-flex">
          <p>{node.mannualPaymentStatus ? node.mannualPaymentStatus : "Unpaid"}</p>
        </div>
      </>
    );
  };

  // const emailActionBodyTemplate = (node, column) => {
  //   return (
  //     <>
  //       <div className="d-flex">
  //         <p>{node.mannualPaymentStatus ? node.mannualPaymentStatus : "Unpaid"}</p>
  //       </div>
  //     </>
  //   );
  // }

  useEffect(() => {
    if (state && state.userRegistrationInfoSuccess) {
      setIsLoading(false);
      setUsersInfo(state.userRegistrationInfoSuccess);
      initFilters1();
    }
  }, [state.userRegistrationInfoSuccess]);

  let redirectToCretePage = (item, from) => {
    item.mode = from;
    navigate("/dashboard/create", { state: item });
  };

  let downloadStudentDataExcel = () => {
    try {
       axios({
        url: `${baseUrl}downloadexcel`,
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

  let downloadUserInfoExcel = () => {
    try {
      axios({
        url: `${baseUrl}userexcel`,
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'registreduserinfo.xlsx');
        document.body.appendChild(link);
        link.click();
      });
    } catch (error) {
    }
  }

  const columns = [
    { field: "registrationNumber", header: "Registration Number" },
    { field: "name", header: "Name" },
    // { field: "mannualPaymentStatus", header: "Payment Status" },
    // { field: "attendanceStatus", header: "Attendance" },
    { field: "email", header: "E-mail" },
    { field: "designation", header: "Designation" },
    { field: "participationType", header: "Participation Type" },
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
      designation: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      participationType: {
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
      <div>
        <div className="moving-box mb-2">
        <div >
           
          </div>
          <button onClick={() => downloadUserInfoExcel()}  >DownLoad User Information</button>
          <button onClick={() => downloadStudentDataExcel()}  >Download Excel</button>
        </div>
        {qrCodeText &&
          <><QRCode
            id="qrCodeEl"
            size={150}
            value={qrCodeText}
          />
            <button onClick={() => downloadQRCode()}>Download Qr</button>

          </>
        }
        <div className="card">
          <DataTable
            loading={isLoading}
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
              field=""
              header="Attendance"
              body={attendanceBodyTemplate}
            ></Column>
            <Column
              field=""
              header="Payment Status"
              body={paymentBodyTemplate}
            ></Column>
            <Column
              field="Actions"
              header="Actions"
              body={actionBodyTemplate}
            ></Column>
            
          </DataTable>
        </div>
      </div>
    </>
  );
};
export default AllRegistration;
