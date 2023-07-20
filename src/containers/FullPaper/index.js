import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as ACTIONS from './action'
import jwt_decode from "jwt-decode";


const FullPaper = () => {
  let obj = {
    fullPaperName: "",
    userName: "",
    mimetype: "",
    fullPaperFileUrl: "",
    themeType:"",
  }

  let location = useLocation();
  let ref = useRef();
  let dispatch = useDispatch()
  const state = useSelector((state) => state.FullPaperUploadReducer);
  const [loading, setLoading] = useState(false)
  const [fullPaperDataSavedMessage, setFullPaperDataSavedMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  let [fullPaperName, setFullPaperName] = useState();
  let [themeType, setThemeType] = useState();
  let [fullPaperPayload, setFullPaperPayload] = useState(obj)

  useEffect(() => {
    if(location && location.state) {
      setFullPaperName(location.state.abstractPaperName)
      setThemeType(location.state.themeType)

    }
  }, [location])

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      fullPaperPayload.userId = decodedToken.user.user._id;
      fullPaperPayload.userName = decodedToken.user.user.userName;
      fullPaperPayload.userEmail = decodedToken.user.user.userEmail;
    }
  },[])

  const fullPaperOnChangeHandler = (e) => {    
    let fullPaperPayloadCopy = { ...fullPaperPayload };
    if (e.target.id == 'file') {
      if (getFileExtension(e.target.files[0].name) === "pdf") {
        if(e.target.files[0].size <= 20000000 ){
          let formData = new FormData();
          formData.append('file', e.target.files[0])
          fullPaperPayloadCopy.fullPaperFileUrl = e.target.files[0].name
          setFullPaperPayload(fullPaperPayloadCopy)
          setErrorMessage("")
          dispatch(ACTIONS.fullPaperFileUpload(formData))
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
      fullPaperPayloadCopy[e.target.id] = e.target.value
      setFullPaperPayload(fullPaperPayloadCopy)
    }

  };

  let fullPaperSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true)
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      fullPaperPayload.fullPaperName = fullPaperName;
      fullPaperPayload.themeType = themeType;
      fullPaperPayload.userId = decodedToken.user.user._id;
      fullPaperPayload.userName = decodedToken.user.user.userName;
      fullPaperPayload.userEmail = decodedToken.user.user.userEmail;
      dispatch(ACTIONS.saveFullPaperData(fullPaperPayload))
    }
  }

  let emptyFormUploadField = () => {
    let fullPaperPayloadCopy = { ...fullPaperPayload }
    ref.current.value = "";
    fullPaperPayloadCopy.filename = ""
    setFullPaperPayload(fullPaperPayloadCopy)
  }

  let getFileExtension = (fileName) => {
    return fileName.split('.').pop()
  }
  
  useEffect(() => {
    if (state.fullPaperFileUploadSuccess && state.fullPaperFileUploadSuccess.data) {
      let fullPaperPayloadCopy = { ...fullPaperPayload };
      fullPaperPayloadCopy.mimetype = state.fullPaperFileUploadSuccess.data.mimetype;
      fullPaperPayloadCopy.fullPaperFileUrl = state.fullPaperFileUploadSuccess.data.path;
      setFullPaperPayload(fullPaperPayloadCopy)
    }
  }, [state.fullPaperFileUploadSuccess])

  let emptyFormField = () => {
    let fullPaperPayloadCopy = { ...fullPaperPayload }
    ref.current.value = "";
    fullPaperPayloadCopy.fullPaperFileUrl = ""
    fullPaperPayloadCopy.filename = ""
    fullPaperPayloadCopy.abstractPaperName = ""
    fullPaperPayloadCopy.themeType = ""
    setFullPaperPayload(fullPaperPayloadCopy)
  }

  useEffect(() => {
    if (state && state.fullPaperDataSaveSuccess) {
      setLoading(false)
      emptyFormField()
      setFullPaperDataSavedMessage("Your file submitted successfully. we will update you on email after verification")
      setTimeout(() => {
        setFullPaperDataSavedMessage('')
      }, 10000)
    }
  }, [state.fullPaperDataSaveSuccess])
  
  return (
    <>
    <section className="abstract-form">
    <form onSubmit={(e) => fullPaperSubmitHandler(e)}>
      <div className="container">
        <div className='row'>
          <div className='col-md-6'>
        <div className="row">
        <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Author Name
              </label>
              <input 
              value={fullPaperPayload && fullPaperPayload.userName}
              onChange={(e) => fullPaperOnChangeHandler(e)}               
                type="text"
                className="form-control"
                id="userName"                
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Paper Name
              </label>
              <input 
              value={fullPaperName && fullPaperName}
              onChange={(e) => fullPaperOnChangeHandler(e)}               
                type="text"
                className="form-control"
                id="fullPaperName"                
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Paper Theme
              </label>
              <input 
              //value={themeType && themeType}
              onChange={(e) => fullPaperOnChangeHandler(e)}               
                type="text"
                value={themeType && themeType}
                className="form-control"
                id="themeType"                
              />
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="inputFile" className="form-label">
                Abstract Upload
              </label>
             <input                 
                type="file"
                className="form-control"                
                aria-label="file example"
                id="file"                
                required             
              />              
            </div>
          </div> */}
          {/* <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">
                Brief Description
              </label>
              <textarea                
                className="form-control"
                id="abstractPaperDescription"
                placeholder="Required description.."
                required                
              ></textarea>
            </div>
          </div> */}
          {/* <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="inputFile" className="form-label">
                Paper Upload
              </label>
             <input                 
                type="file"
                className="form-control"                
                aria-label="file example"
                id="paper"                
                required             
              />              
            </div>
          </div> */}
          <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="inputFile" className="form-label">
                  Full Paper Upload (File size should not be more 20mb )
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => fullPaperOnChangeHandler(e)}
                    aria-label="file example"
                    id="file"
                    ref={ref}
                    required
                  />
                  {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </div>
              </div>

          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
              <div className="mb-3">
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                      {loading ? "uploading" : "Submit"}
                    </button>
                  </div>
              </div>
            </div>
            {fullPaperDataSavedMessage && <p className="text-success">{fullPaperDataSavedMessage}</p>}
          </div>
          
        </div>
      </div>
      </div>
      </div>
    </form>
  </section>
  </>
  )
}

export default FullPaper