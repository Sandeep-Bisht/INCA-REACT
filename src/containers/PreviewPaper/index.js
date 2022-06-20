import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "./action";

import { Button, Viewer } from "@react-pdf-viewer/core"; // install this library

import "@react-pdf-viewer/core/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

const PreviewPaper = () => {
  const [viewPdf, setViewPdf] = useState("");
  const [message, setMessage] = useState("");
  const [approveLoder, setApproveLoder] = useState(false);
  //let [isLoading, setIsLoading] = useState(false);
  const [approveDocs, setApproveDocs] = useState({
    paperApproveStatus: null,
    userId: "",
    docsId: "",
  });

  let location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PreviewPaperReducer);

  useEffect(() => {
    if (location && location.state) {
      let filePath = `http://144.91.110.221:4801/${location.state.abstractFileUrl}`;
      filePath = filePath.replace("\\", "/");
      setViewPdf(filePath);
      approveDocs.userId = location.state.userId;
      approveDocs.docsId = location.state._id;
      setApproveDocs(approveDocs);
    }
  }, [location]);

  useEffect(() => {
    if (state.userAbstractPaperSuccess) {
      if (
        state.userAbstractPaperSuccess.message ===
        "Email is sent on your registred mail. Please check your email for further process"
      )
        setApproveLoder(false);
      setMessage("Document Approved, Email sent successfully on user email.");
    }
  }, [state.userAbstractPaperSuccess]);

  const approvefilesubmissionHandler = (status) => {
    //isLoading(true)
    setApproveLoder(true);
    approveDocs.paperApproveStatus = status;
    dispatch(ACTIONS.approveFileSubmission(approveDocs));
  };

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
          <button
            type="button"
            disabled={approveLoder}
            className="btn btn-success"
            onClick={() => approvefilesubmissionHandler(true)}
          >
            {approveLoder ? "Accepting" : "Accept"}
          </button>
        </div>
        <div className="col-md-1">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => approvefilesubmissionHandler(false)}
          >
            Reject
          </button>
        </div>
      </div>
      <div>{message && <p className="text-success">{message}</p>}</div>
    </>
  );
};

export default PreviewPaper;
