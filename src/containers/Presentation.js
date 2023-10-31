import React, { useEffect, useState } from "react";
import { baseUrl, GetHeaders } from "../utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Presentation = () => {

    const [presentationFile, setPresentationFile] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [userdetail, setUserDetail] = useState(null)
    const [ successMsg, setSuccessMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [filters1, setFilters1] = useState(null);
    const [globalFilterValue1, setGlobalFilterValue1] = useState("");
    const [presentationData, setPresentationData] = useState();
    let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      getRegistredUserData(decodedToken.user.user._id);
      getUserPresentationData(decodedToken.user.user._id);      
    }
  }, []);

  const getRegistredUserData = async (userId) => {
    let url = `${baseUrl}getsaveregistreduserinfo/${userId}`;
    try {
      const response = await axios.get(url, GetHeaders());
      if (response) {
        console.log(response.data, "response");
        setUserDetail(response.data)
      }
    } catch (error) {
      console.log(error, "eror");
    }
  };

  const handleFOrmSubmit = async(e) => {
    e.preventDefault();   
    const formData = new FormData();
    formData.append('registrationNumber', userdetail[0].registrationNumber)
    formData.append('userName', userdetail[0].name)
    formData.append('userId', userdetail[0].userId)
    formData.append('file', presentationFile); // Add the file to the FormData
    
   if(presentationFile){
    let url = `${baseUrl}uploadPresentationFile`
    try {
        const response = await axios.post(url, formData,{
            headers: {
                'Content-Type': 'multipart/form-data', // Set the correct content type
              },
        });
        // const response = await axios.post(url, presentationFile);
        if(response){
            console.log(response,"resposneeee");
            setSuccessMsg("Presentation File Submitted Successfully");
            emptySuccessMsg();
        }        
    } catch (error) {
        
    }
   }else{
    setErrorMsg("Please Upload the file")
   }
  }

  const handleChange = (e) => {
    setErrorMsg(null)
    const selectedFile = e.target.files[0];

    if (selectedFile) {
        if (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/vnd.ms-powerpoint' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
          // Valid file type (PDF or PPTX)
          // You can upload or process the file here
          console.log("selectedFileselectedFile", selectedFile)
          setPresentationFile(selectedFile)
        } else {
          // Invalid file type
          setErrorMsg('Upload only PDF and PPTX files');
          // You can reset the input field or display an error message
          e.target.value = '';
        }
      }
  }

  const getUserPresentationData = async(userId) =>{
    try {
        let url = `${baseUrl}getPresentationById/${userId}`;
        let response = await axios.get(url);
        if(response){
            setPresentationData(response.data.data)
            setIsLoading(false)

        }
        
    } catch (error) {
        
    }
  }

  const emptySuccessMsg = () => {
    setTimeout(() => {
        setSuccessMsg(null)
      }, 3000);
  }

  const columns = [
    { field: "registrationNumber", header: "Registration No" },
    {field: "userName", header : "Name" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });


  const renderHeader1 = () => {
    return (
      <div className="d-flex justify-content-between">
        <div>
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear"
          className="p-button-outlined"
          // onClick={clearFilter1}
        />
        </div>

        <div>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue1}
            // onChange={onGlobalFilterChange1}
            placeholder="Keyword Search"
          />
        </span>
        </div>
      </div>
    );
  };

  const header1 = renderHeader1();

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


    const actionBodyTemplate = (presentationData) => {
    return (
      <>
       {presentationData &&
        <a
        className="abstracts-common-btn"
        href={`https://43inca.org/app/${presentationData.path}`}
        target="_blank"
      >
        View Document
      </a>
          }
      </>
    );
  };

  const dateBodyTemplate = (node) => {
    const date = new Date(node.createdAt);
    const formatedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formatedDate;
  };


  return (
    <>
    <section className="presentation-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>Submit Your Presentation</div>
          </div>
        </div>
        <div className="row mt-5 ">
            <div className="col-md-8">
                <form onSubmit={(e)=>handleFOrmSubmit(e)}>
                    <div className="">                        
                        <input 
                        onChange={(e) => handleChange(e)}
                        className="form-control"
                        type="file" 
                        accept=".pdf,.pptx"
                        name="presentationFile"
                        />
                        <span>Please upload only Pdf or Pptx format file</span>
                    </div>
                    {errorMsg && <p className="text-danger">{errorMsg}</p> }
                    {successMsg && <p className="text-success">{successMsg}</p> }
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>

    {presentationData && presentationData.length > 0 &&

<div className="card">
<DataTable
          loading={isLoading}
          dataKey="id"
          value={presentationData}
        >
           {dynamicColumns}
          
          <Column
            field="Date of Submission"
            header="Date of Submission"
            body={dateBodyTemplate}
          ></Column>
           <Column
            field="View"
            header="View"
            body={actionBodyTemplate}
          ></Column>        

        </DataTable>
</div>
}
</>
  );
};

export default Presentation;
