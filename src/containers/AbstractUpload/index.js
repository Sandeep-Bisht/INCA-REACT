import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import * as ACTIONS from './action'

let obj = {
  abstractPaperName: "",
  //abstractPaperDescription: "",
  mimetype: "",
  abstractFileUrl: "",
  paperApproveStatus: null,
  themeType:"",
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
    if (state.abstractFileUploadSuccess && state.abstractFileUploadSuccess.data) {
      let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
      abstractDocumentPayloadCopy.mimetype = state.abstractFileUploadSuccess.data.mimetype;
      abstractDocumentPayloadCopy.abstractFileUrl = state.abstractFileUploadSuccess.data.path;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy)
    }
  }, [state.abstractFileUploadSuccess])

  useEffect(() => {
    if (state && state.abstractDataSaveSuccess) {
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
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload }
    ref.current.value = "";
    abstractDocumentPayloadCopy.filename = ""
    setAbstractDocumentPayload(abstractDocumentPayloadCopy)
  }

  const abstarctOnChangeHandler = (e) => {    
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
    if (e.target.id == 'file') {

      if (getFileExtension(e.target.files[0].name) === "pdf") {
        if(e.target.files[0].size <= 10000000 ){
          let formData = new FormData();
          formData.append('file', e.target.files[0])
          abstractDocumentPayloadCopy.abstractFileUrl = e.target.files[0].name
          setAbstractDocumentPayload(abstractDocumentPayloadCopy)
          setErrorMessage("")
          dispatch(ACTIONS.abstratcFileUpload(formData))
        }
        else {
          setErrorMessage("File size should not be more than 10Mb")
        }
        
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
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      abstractDocumentPayload.userId = decodedToken.user.user._id;
      abstractDocumentPayload.userName = decodedToken.user.user.userName;
      abstractDocumentPayload.userEmail = decodedToken.user.user.userEmail;

      console.log("abstract upload payload",abstractDocumentPayload )

      //dispatch(ACTIONS.saveAbstractData(abstractDocumentPayload))
    }
  }

  let emptyFormField = () => {
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload }
    ref.current.value = "";
    abstractDocumentPayloadCopy.abstractFileUrl = ""
    abstractDocumentPayloadCopy.filename = ""
    abstractDocumentPayloadCopy.abstractPaperName = ""
   abstractDocumentPayloadCopy.themeType = ""
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
                    Abstract Upload (File size should not be more 10mb )
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
              {/* <div className="col-md-12 d-none">
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
              </div> */}
              <div className="col-md-12">
                <div className="mb-3">
                  <select 
                  class="form-select" 
                  aria-label="Default select example" 
                  id="themeType"
                  value={abstractDocumentPayload.themeType}
                  onChange={(e) => abstarctOnChangeHandler(e)}
                  
                  >
                    <option selected >Select Theme</option>
                    <option value="trending cartography – past, present and future">trending cartography – past, present and future</option>
                    <option value="modern precision surveying & mapping tool">modern precision surveying & mapping tool</option>
                    <option value="geospatial solution for sustainable water resource management">geospatial solution for sustainable water resource management</option>
                    <option value="gis application for climate change and environmental studies">gis application for climate change and environmental studies</option>
                    <option value="mapping solutions for risk assessment, mitigation measures and disaster management">
                    mapping solutions for risk assessment, mitigation measures and disaster management
                    </option>
                    <option value="application of artificial intelligence tools for urban planning and resource management">application of artificial intelligence tools for urban planning and resource management</option>
                    <option value='hydrographic surveys and mapping for coastal zone management'>
                    hydrographic surveys and mapping for coastal zone management
                    </option>
                  </select>
                </div>
              </div>



              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                      {loading ? "uploading" : "Submit"}
                    </button>
                    <p className="pt-3 fs-6"><b>Note</b>: Kindly, Fill the registeration form before uploading abstracts. For technical support in uploading of Abstracts please contact Mr.Julesh at +91-7500872014 on Working Hours 10:00 AM to 6:00 PM</p>
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
