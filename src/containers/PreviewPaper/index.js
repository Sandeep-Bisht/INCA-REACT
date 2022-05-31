import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as ACTIONS from './action';
import jwt_decode from "jwt-decode";

// Import the main component
import { Button, Viewer } from "@react-pdf-viewer/core"; // install this library

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
import pdfPath from "../../PDF/sample.pdf";

const PreviewPaper = () => {
  // Create new plugin instance

  // for submit event
  const [viewPdf, setViewPdf] = useState("1653493014230--Sandeep Bisht Offer Letter.pdf");
  const [approveDocs, setApproveDocs] = useState({
    paperApproveStatus : null,
    userId : "",
    docsId : ""
  })

  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if(location && location.state){ 
      console.log(location.state,"location state")
      setViewPdf(location.state.abstractFileUrl)
      approveDocs.userId = location.state.userId;
      approveDocs.docsId = location.state._id;      
      setApproveDocs(approveDocs);
    }
  }, [location])  
  

  const approvefilesubmissionHandler = (status) => {   
    approveDocs.paperApproveStatus = status;  
    dispatch(ACTIONS.approveFileSubmission(approveDocs));
    
  }

  console.log(viewPdf, 'fileurl inside view')

  return (
    <>
      {/* show pdf conditionally (if we have one)  */}
      {viewPdf && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer fileUrl={viewPdf} />
          </Worker>
        </>
      )}

      {/* if we dont have pdf or viewPdf state is null */}
      {!viewPdf && <>No pdf file selected</>}
      <div className="row">
        <div className="col-md-1">
          <button type="button" className="btn btn-success" onClick={() => approvefilesubmissionHandler(true)}>
            Accept
          </button>
        </div>
        <div className="col-md-1">
          <button type="button" className="btn btn-danger" onClick={() => approvefilesubmissionHandler(false)}>
            Reject
          </button>
        </div>
      </div>
    </>
  );
};

export default PreviewPaper;
