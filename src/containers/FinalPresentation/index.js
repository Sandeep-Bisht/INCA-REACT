import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Viewer } from "@react-pdf-viewer/core"; // install this library
import "@react-pdf-viewer/core/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
import * as ACTIONS from "./action";
import jwt_decode from "jwt-decode";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "primereact/button";
import * as Loader from "react-loader-spinner";
import "../../css/registred.css";
import { baseUrl } from "../../utils";

const FinalPresentation = () => {
  const state = useSelector((state) => state.GetFullPaperListReducer);

  const [fullPaperList, setFullPaperList] = useState([]);
  const [userFullPaperList, setUserFullPaperList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null);
  const [viewPdf, setViewPdf] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const columns = [
    { field: "registrationNumber", header: "Registration No" },
    // { field: "fullPaperNumber", header: "Fullpaper No"},
    // { field: "userName", header: "Author Name" },
    { field: "filename", header: "File Title" },
    // { field: "themeType", header: "Theme" },
    // { field: "createdAt", header: "Date of Submission" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let token = jwt_decode(localStorage.getItem("token"));
      if (token.user.user.role == "admin") {
        setRole(token.user.user.role);
        getFinalPresentationList()
      }
      else{
        setUserId(token.user.user._id);
        console.log(token.user.user.role,'role in not admin')
      }
    }
  }, []);

  // useEffect(() => {
  //   if (state && state.getFullPaperListSuccess) {
  //     setIsLoading(false);
  //     setFullPaperList(state.getFullPaperListSuccess);
  //     initFilters1();
  //   }
  // }, [state.getFullPaperListSuccess]);

  // useEffect(() => {
  //   if (state && state.getUserFullPaperListSuccess) {
  //     setIsLoading(false);
  //     setUserFullPaperList(state.getUserFullPaperListSuccess.data);
  //     initFilters1();
  //   }
  // }, [state.getUserFullPaperListSuccess]);

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


  const getFinalPresentationList = async () =>{
    try{
      let response = await axios.get(`${baseUrl}getFinalPresentationList`);
      console.log(response,'data found successfully.')
      setFullPaperList(response.data);
      setIsLoading(false)
    }
    catch(err){
      console.log(err,'error finding data list')
      setIsLoading(false)
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


  let openPdf = (item) => {
    if (item) {
      let filePath = `http://43inca.org/${item.path}`;
      filePath = filePath.replace("\\", "/");

      setViewPdf(filePath);
    }
  };

  let redirectToFullPaperPreviewPage = (item) => {
    navigate("/dashboard/fullPaperpreview", { state: item });
  };

  const actionBodyTemplate = (node, column) => {
    
    return (
      <>
        <button className="action-btn" onClick={()=>handleDownload(node.path)}>Download File</button>
        
      </>
    );
  };

  const handleDownload = (fileUrl) => {
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    // link.href = `http://localhost:4801/${fileUrl}`
    link.href = `https://43inca.org/app//${fileUrl}`
    // link.target = '_blank'; // Optional: Open the link in a new tab
    // link.download =  `http://localhost:4801/${fileUrl}`;  // Customize the downloaded file name (optional)
    link.download = `https://43inca.org/app//${fileUrl}`
    console.log(link,'link is this.')
    link.click();
  };

  const viewBodyTemplate = (node) => {
    console.log(node ,'node is this')
    return(
      <>
      <button
          className="action-btn d-contents"
          onClick={() => redirectToFullPaperPreviewPage({...node,fullPaperFileUrl:node.path})}
        >
          <i className="fa-solid fa-file-pdf  fs-4"></i>
        </button>
      </>
    )
  }

  const header1 = renderHeader1();

  let downloadFullPaperDataExcel = () => {
    try {
      axios({
        url: `${baseUrl}download_fullPaper_list`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "finalPagperList.xlsx");
        document.body.appendChild(link);
        link.click();
      });
    } catch (error) {}
  };

  const dateBodyTemplate = (node) => {
    const date = new Date(node.createdAt);
      const formatedDate =  date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return formatedDate;
  };
  console.log(fullPaperList,'full paper list is this')

  return (
    <>
      {role == "admin" ? (
        <>
          {/* <div className="moving-box mb-2">
            <button onClick={() => downloadFullPaperDataExcel()}>
              Download Excel
            </button>
          </div> */}
          <div className="card">
            <DataTable
              loading={isLoading}
              paginator
              rows={10}
              dataKey="id"
              filters={filters1}
              filterDisplay="menu"
              value={fullPaperList}
              responsiveLayout="scroll"
              globalFilterFields={[
                "registrationNumber",
            ]}
              header={header1}
            >
              {dynamicColumns}
              <Column
                field="Actions"
                header="Document"
                body={actionBodyTemplate}
              ></Column>
              <Column
                field="View"
                header="View"
                body={viewBodyTemplate}
              ></Column>
            </DataTable>
          </div>
        </>
      ) : (
        <div className="card">
            401 unauthorized
        </div>
      )}
    </>
  );
};

export default FinalPresentation;
