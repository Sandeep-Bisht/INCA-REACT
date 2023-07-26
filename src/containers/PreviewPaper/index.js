import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "./action";
import "../../css/paperPreview.css";

import { Button, Viewer } from "@react-pdf-viewer/core"; // install this library

import "@react-pdf-viewer/core/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

const PreviewPaper = () => {
  const [viewPdf, setViewPdf] = useState("");
  const [message, setMessage] = useState("");
  const [string, setString] = useState("");
  const [acceptLoader, setAcceptLoader] = useState(false);
  const [rejectLoader, setRejectLoader] = useState(false);
  const [rejectionMsg, setRejectionMsg] = useState(null);
  //let [isLoading, setIsLoading] = useState(false);
  const [approveDocs, setApproveDocs] = useState({
    paperApproveStatus: null,
    userId: "",
    docsId: "",
  });

  let location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PreviewPaperReducer);

  // useEffect(() => {
  //   if (location && location.state) {
  //     let filePath = `http://144.91.110.221:4801/${location.state.abstractFileUrl}`;
  //     // let filePath = `http://localhost:4801/${location.state.abstractFileUrl}`;
  //     filePath = filePath.replace("\\", "/");
  //     setViewPdf(filePath);
  //     approveDocs.userId = location.state.userId;
  //     approveDocs.docsId = location.state._id;
  //     setApproveDocs(approveDocs);
  //   }
  // }, [location]);

  useEffect(()=> {
    if(location && location.state) {
      approveDocs.userId = location.state.userId;
       approveDocs.docsId = location.state._id;
    }
  })

  useEffect(() => {
    if (state.userAbstractPaperSuccess) {
      setString(state.userAbstractPaperSuccess.message);
      if (
        state.userAbstractPaperSuccess.status ===
        "Approved"
      ) {
        setAcceptLoader(false);
        setMessage("Document Approved, Email sent successfully on user email.");
      } else {
        setRejectLoader(false);
        setMessage("Document Rejected, Email sent successfully on user email");
      }
    }
  }, [state.userAbstractPaperSuccess]);

  const approvefilesubmissionHandler = (status) => {
    if (approveDocs?.paperApproveStatus == false) {
      setRejectLoader(true);
      approveDocs.rejectionMsg = rejectionMsg;
      dispatch(ACTIONS.approveFileSubmission(approveDocs));
    } else {
      setAcceptLoader(true);
      approveDocs.paperApproveStatus = status;
      
      console.log(approveDocs, "docts accepe")
       dispatch(ACTIONS.approveFileSubmission(approveDocs));
    }
  };

  const onChnageHandler = (e) => {
    setRejectionMsg(e.target.value);
    approveDocs.paperApproveStatus = false;
  };

  return (
    <>
      {/* show pdf conditionally (if we have one)  */}
      {/* {viewPdf && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10">
                  <Viewer fileUrl={viewPdf} />
                </div>
              </div>
            </div>
          </Worker>
        </>
      )} */}

      {/* if we dont have pdf or viewPdf state is null */}
      {/* {!viewPdf && <>No pdf file selected</>} */}
      <div className="row mt-3">
        <div className="col-md-10">
          <button
            type="button"
            //disabled={approveLoder}
            className="btn btn-success ms-5"
            onClick={() => approvefilesubmissionHandler(true)}
          >
            {acceptLoader ? "Accepting..." : "Accept"}
            {/* Accept */}
          </button>

          <button
            type="button"
            className="btn btn-danger ms-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {/* Reject */}
            {rejectLoader ? "Rejecting..." : "Reject"}
          </button>
         
        </div>
      </div>


      <div className="row mt-3">
        <div className="col-md-10">
          {message && message === "Document Approved, Email sent successfully on user email." ? (
            <p
              className={ "text-success"}
            >
              {message}
            </p>
          ) : (
            <p
            className={ "text-danger"}
          >
            {message}
          </p>
          )}
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Reason for Rejection
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <textarea
                placeholder="Enter reason for document rejection..."
                name="rejectionMsg"
                required
                onChange={(e) => {
                  onChnageHandler(e);
                }}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => approvefilesubmissionHandler(false)}
                data-bs-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewPaper;
