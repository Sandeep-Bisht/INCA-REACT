import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import * as ACTIONS from './action'

let obj = {
  abstractPaperName:"",
  abstractPaperDescription:"",
  mimetype:"",
  abstractFileUrl:"",
  paperApproveStatus: null
}

const AbstractUpload = () => {
  const [abstractDocumentPayload, setAbstractDocumentPayload] = useState(obj);
  const [abstractDataSavedMessage, setAbstractDataSavemessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  const state = useSelector((state) => state.AbstractUploadReducer);

  let dispatch = useDispatch()
  const ref = useRef()


 
  useEffect(() => {
    if(state.abstractFileUploadSuccess && state.abstractFileUploadSuccess.data){
      let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
      abstractDocumentPayloadCopy.mimetype = state.abstractFileUploadSuccess.data.mimetype;
      abstractDocumentPayloadCopy.abstractFileUrl = state.abstractFileUploadSuccess.data.path;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy)
    }
  }, [state.abstractFileUploadSuccess])

  useEffect(() => {
    if(state && state.abstractDataSaveSuccess){  
      setLoading(false)
      emptyFormField()
      setAbstractDataSavemessage("Your file submitted successfully. we will update you on email after verification")
      setTimeout(() => {
        setAbstractDataSavemessage('')
      }, 10000)
    }
  }, [state.abstractDataSaveSuccess])

  let getFileExtension = (fileName) => {
      return fileName.split('.').pop()
  }

  let emptyFormUploadField = () => {
    let abstractDocumentPayloadCopy = {...abstractDocumentPayload}
      ref.current.value = "";
      abstractDocumentPayloadCopy.filename = ""
      setAbstractDocumentPayload(abstractDocumentPayloadCopy)
  }

  const abstarctOnChangeHandler = (e) => {

    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
        if(e.target.id == 'file'){
          if(getFileExtension(e.target.files[0].name) === "pdf"){
          let formData = new FormData();
          formData.append('file', e.target.files[0])
          abstractDocumentPayloadCopy.abstractFileUrl = e.target.files[0].name
          setAbstractDocumentPayload(abstractDocumentPayloadCopy)
          setErrorMessage("")
          dispatch(ACTIONS.abstratcFileUpload(formData)) 
          }
          else { 
            emptyFormUploadField();
            setErrorMessage("Please upload Pdf files only.")
          }
        }
        else {
          abstractDocumentPayloadCopy[e.target.id] = e.target.value
          setAbstractDocumentPayload(abstractDocumentPayloadCopy)
        }
        
  };

  let abstractPaperSubmitHandler = (e) => {
      e.preventDefault();
      setLoading(true)
      if (localStorage.getItem("token")) {
        console.log('inside this block')
        let decodedToken = jwt_decode(localStorage.getItem("token"));
        abstractDocumentPayload.userId = decodedToken.user.user._id;
        abstractDocumentPayload.userName = decodedToken.user.user.userName;
        abstractDocumentPayload.userEmail = decodedToken.user.user.userEmail;
        dispatch(ACTIONS.saveAbstractData(abstractDocumentPayload))
      }
      console.log('inside else', localStorage.getItem("token"))
  }

  let emptyFormField = () => {
    let abstractDocumentPayloadCopy = {...abstractDocumentPayload}
        ref.current.value = "";
        abstractDocumentPayloadCopy.abstractFileUrl = ""
        abstractDocumentPayloadCopy.filename = ""
        abstractDocumentPayloadCopy.abstractPaperName = ""
        abstractDocumentPayloadCopy.abstractPaperDescription = ""
        setAbstractDocumentPayload(abstractDocumentPayloadCopy)
  }
  

  return (
    <>
      <section className="abstract-form">
        <form onSubmit={(e) => abstractPaperSubmitHandler(e)}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Paper Name
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="abstractPaperName"
                    value={abstractDocumentPayload.abstractPaperName}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="inputFile" className="form-label">
                    Abstract Upload
                  </label>
                 <input 
                    
                    type="file"
                    className="form-control"
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    aria-label="file example"
                    id="file"
                    ref={ref}
                    required
                 
                  />
                  {/* {abstractDocumentPayload.abstractFileUrl && <p>{abstractDocumentPayload.abstractFileUrl}</p>} */}
                  {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="validationTextarea" className="form-label">
                    Brief Description
                  </label>
                  <textarea
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    className="form-control"
                    id="abstractPaperDescription"
                    placeholder="Required description.."
                    required
                    value={abstractDocumentPayload.abstractPaperDescription}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <button className="btn btn-primary" type="submit" disabled = {loading}>
                    {loading ? "uploading" :  "Submit"}
                    </button>
                  </div>
                </div>
              </div>
              {abstractDataSavedMessage && <p className="text-success">{abstractDataSavedMessage}</p>}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AbstractUpload;
