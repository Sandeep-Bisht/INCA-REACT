import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import * as ACTIONS from "./action";

let obj = {
  abstractPaperName: "",
  userName: "",
  //abstractPaperDescription: "",
  mimetype: "",
  abstractFileUrl: "",
  paperApproveStatus: null,
  themeType: "",
};

const AbstractUpload = () => {
  const [abstractDocumentPayload, setAbstractDocumentPayload] = useState(obj);
  const [abstractDataSavedMessage, setAbstractDataSavemessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const state = useSelector((state) => state.AbstractUploadReducer);

  let dispatch = useDispatch();
  const ref = useRef();


  useEffect(() => {
    if (
      state.abstractFileUploadSuccess &&
      state.abstractFileUploadSuccess.data
    ) {
      let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
      abstractDocumentPayloadCopy.mimetype =
        state.abstractFileUploadSuccess.data.mimetype;
      abstractDocumentPayloadCopy.abstractFileUrl =
        state.abstractFileUploadSuccess.data.path;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy);
    }
  }, [state.abstractFileUploadSuccess]);

  useEffect(() => {
    if (state && state.abstractDataSaveSuccess) {
      setLoading(false);
      emptyFormField();
      setAbstractDataSavemessage(
        "Your file submitted successfully. We will update you on email after verification"
      );
      setTimeout(() => {
        setAbstractDataSavemessage("");
      }, 10000);
    }
  }, [state.abstractDataSaveSuccess]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      abstractDocumentPayload.userId = decodedToken.user.user._id;
      abstractDocumentPayload.userName = decodedToken.user.user.userName;
      abstractDocumentPayload.userEmail = decodedToken.user.user.userEmail;
    }
  },[])

  let getFileExtension = (fileName) => {
    return fileName.split(".").pop();
  };

  let emptyFormUploadField = () => {
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
    ref.current.value = "";
    abstractDocumentPayloadCopy.filename = "";
    setAbstractDocumentPayload(abstractDocumentPayloadCopy);
  };

  const abstarctOnChangeHandler = (e) => {
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
    if (e.target.id == "file") {
      if (getFileExtension(e.target.files[0].name) === "pdf") {
        if (e.target.files[0].size <= 10000000) {
          let formData = new FormData();
          formData.append("file", e.target.files[0]);
          abstractDocumentPayloadCopy.abstractFileUrl = e.target.files[0].name;
          setAbstractDocumentPayload(abstractDocumentPayloadCopy);
          setErrorMessage("");
          dispatch(ACTIONS.abstratcFileUpload(formData));
        } else {
          setErrorMessage("File size should not be more than 10Mb");
        }
      } else {
        emptyFormUploadField();
        setErrorMessage("Please upload Pdf files only.");
      }
    } else {
      abstractDocumentPayloadCopy[e.target.id] = e.target.value;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy);
    }
  };

  let abstractPaperSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
  
      dispatch(ACTIONS.saveAbstractData(abstractDocumentPayload));
    
  };

  let emptyFormField = () => {
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
    ref.current.value = "";
    abstractDocumentPayloadCopy.abstractFileUrl = "";
    abstractDocumentPayloadCopy.filename = "";
    abstractDocumentPayloadCopy.userName = "";
    abstractDocumentPayloadCopy.abstractPaperName = "";
    abstractDocumentPayloadCopy.themeType = "";
    setAbstractDocumentPayload(abstractDocumentPayloadCopy);
  };

  return (
    <>
      <section className="abstract-form">
        <form onSubmit={(e) => abstractPaperSubmitHandler(e)}>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                  First Author
              </div>
            </div>
            <div className="row">
            <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="saluation" className="form-label">
                    Saluation
                  </label>                 
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="saluation"
                    value={abstractDocumentPayload.saluation}
                    onChange={(e) => abstarctOnChangeHandler(e)}
                  >
                    <option selected>Select Saluation</option>
                    <option defaultValue="Dr."> Dr. </option>
                    <option defaultValue="Mr."> Mr. </option>         
                    <option defaultValue="Ms."> Ms. </option>         
                    <option defaultValue="Mrs."> Mrs. </option>       
                    </select>                   
                    
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="firstName"
                    defaultValue={abstractDocumentPayload?.firstName}
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="middleName" className="form-label">
                    Middle Name
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="middleName"
                    defaultValue={abstractDocumentPayload?.middleName}
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="lastName"
                    defaultValue={abstractDocumentPayload?.lastName}
                    required
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                   email
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="email"
                    defaultValue={abstractDocumentPayload?.email}
                    required
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="affiliation" className="form-label">
                   Affiliation
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="affiliation"
                    defaultValue={abstractDocumentPayload?.affiliation}
                    required
                  />
                </div>
              </div>
              </div>

              <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Title of the  Paper (25 words limit)
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

              <div className="col-md-8">
                <div className="mb-3">
                  <label htmlFor="abstract" className="form-label">
                    Paste Abstract (300 words only)
                  </label>
                  <textarea
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="abstract"
                    value={abstractDocumentPayload.abstract}
                    required
                    ></textarea>
                </div>
              </div>

              <div className="col-md-12">
                <div className="mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="themeType"
                    value={abstractDocumentPayload.themeType}
                    onChange={(e) => abstarctOnChangeHandler(e)}
                  >
                    <option selected>Proposed sub-theme</option>
                    <option
                      defaultValue="Advances in cartography, geospatial technology and thematic mapping for management of natural resources and smart governance"
                    >
                      Advances in cartography, geospatial technology and
                      thematic mapping for management of natural resources and
                      smart governance
                    </option>
                    <option
                      defaultValue="Geospatial technologies for fostering sustainable agriculture, food security and green economies"
                    >
                      Geospatial technologies for fostering sustainable
                      agriculture, food security and green economies
                    </option>
                    <option defaultValue="Geospatial technologies for sustainable water resources management">
                      Geospatial technologies for sustainable water resources
                      management
                    </option>
                    <option defaultValue="Geospatial technologies for environment and energy security">
                      Geospatial technologies for environment and energy
                      security
                    </option>
                    <option
                      defaultValue="Geospatial technologies for urban studies and infrastructure planning & development"
                    >
                      Geospatial technologies for urban studies and
                      infrastructure planning & development
                    </option>
                    <option defaultValue="Geospatial technologies for meteorology and climate change studies">
                      Geospatial technologies for meteorology and climate change
                      studies
                    </option>

                    <option
                      defaultValue="Geospatial technologies for building disaster resilience and emergency management"
                    >
                      Geospatial technologies for building disaster resilience
                      and emergency management
                    </option>
                    <option
                      defaultValue="Hydrographic surveys and geospatial technologies for coastal zone management and oceanography"
                    >
                      Hydrographic surveys and geospatial technologies for
                      coastal zone management and oceanography
                    </option>
                    <option
                      defaultValue="Drone/UAV based novel applications for sustainable economies
"
                    >
                      Drone/UAV based novel applications for sustainable
                      economies
                    </option>
                    <option defaultValue="Emerging trends in AI/ML for cartography and geospatial applications">
                      Emerging trends in AI/ML for cartography and geospatial
                      applications
                    </option>
                    <option
                      defaultValue="New geospatial and space policies for enhancing entrepreneurship and geospatial economy"
                    >
                      New geospatial and space policies for enhancing
                      entrepreneurship and geospatial economy
                    </option>
                  </select>
                </div>
              </div>

              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="paperPresentation" className="form-label">
                    Intended mode of paper presentation
                  </label>                 
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="paperPresentation"
                    value={abstractDocumentPayload.saluation}
                    onChange={(e) => abstarctOnChangeHandler(e)}
                  >
                    <option selected>Select Saluation</option>
                    <option defaultValue="Oral">Oral</option>
                    <option defaultValue="Poster">Poster</option>   
                    </select>                   
                    
                </div>
              </div>
             
             
              

              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <button
                      className="common-btn"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "uploading..." : "Submit"}
                    </button>
                    <p className="pt-3 fs-6">
                      <b>Note</b>: Kindly, Fill the registeration form before
                      uploading abstracts. For technical support in uploading of
                      Abstracts please contact at info@43inca.org
                    </p>
                  </div>
                </div>
              </div>
              {abstractDataSavedMessage && (
                <p className="text-success">{abstractDataSavedMessage}</p>
              )}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AbstractUpload;
