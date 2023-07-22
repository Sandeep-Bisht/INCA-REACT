import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import * as ACTIONS from "./action";

let obj = {
  authorSaluation: "",
  authorFirstName: "",
  authorMiddleName :"",
  authorLastName :"",
  authorEmail:"",
  authorAffiliation:"",
  coAuthorDetails: [],
  abstractPaperName: "",
  mimetype: "",
  abstract: "",
  paperApproveStatus: null,
  themeType: "",
  paperPresentationType:""
};

const AbstractUpload = () => {
  const [abstractDocumentPayload, setAbstractDocumentPayload] = useState(obj);
  const [abstractDataSavedMessage, setAbstractDataSavemessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [abstractTitleError, setAbstractTitleError] = useState("");
  const [abstractError, setAbstractError] = useState("");
  const [otherAuthor, setOtherAuthor] = useState(false)
  const [coAuthor, setCoAuthor] = useState({
    coAuthorSaluation: "",
    coAuthorFirstName: "",
    coAuthorMiddleName: "",
    coAuthorLastName: "",
    coAuthorEmail: "",
    coAuthorAffilation: ""
  });

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
      // abstractDocumentPayload.userName = decodedToken.user.user.userName;
      abstractDocumentPayload.authorEmail = decodedToken.user.user.userEmail;
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
    if (e.target.id == "abstractPaperName") {
      let userInput = e.target.value;
      const words = userInput.split(' ');
      if (words.length <= 25) {
        abstractDocumentPayloadCopy.abstractPaperName = e.target.value;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy);
      setAbstractTitleError("");
      } else{        
        setAbstractTitleError("Please enter under 25 words")
      }
      
    }
    else if(e.target.id == "abstract"){
      let userInput = e.target.value;
      const words = userInput.split(' ');
      if (words.length <= 300) {
        abstractDocumentPayloadCopy.abstract = e.target.value;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy);
      setAbstractError("");
      } else{
        setAbstractError("Please enter under 300 words")
      }
    }
     else {
      abstractDocumentPayloadCopy[e.target.id] = e.target.value;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy);
    }
  };

  let abstractPaperSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
  console.log("before api hit", abstractDocumentPayload)
      dispatch(ACTIONS.saveAbstractData(abstractDocumentPayload));
    
  };

  let emptyFormField = () => {
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
    // ref.current.value = "";
    abstractDocumentPayloadCopy.abstractFileUrl = "";
    abstractDocumentPayloadCopy.filename = "";
    abstractDocumentPayloadCopy.userName = "";
    abstractDocumentPayloadCopy.abstractPaperName = "";
    abstractDocumentPayloadCopy.themeType = "";
    setAbstractDocumentPayload(abstractDocumentPayloadCopy);
  };

  

  let addCoAuthor = () => {
    if (coAuthor.coAuthorFirstName) {
      let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
      let coAuthorPayloadCopy = [...abstractDocumentPayload.coAuthorDetails];
      coAuthorPayloadCopy.push(coAuthor);
      abstractDocumentPayloadCopy.coAuthorDetails = coAuthorPayloadCopy;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy);
      setCoAuthor({
        coAuthorSaluation: "",
        coAuthorFirstName: "",
        coAuthorMiddleName:"",
        coAuthorLastName:"",
        coAuthorEmail:"",
        coAuthorAffilation:""
      });
    } else {
      alert("Please mention the Co-Author details");
    }
  };

  let coAuthorOnChangeHandler = (e) => {
    let coAuthorPayloadCopy = { ...coAuthor };
    coAuthorPayloadCopy[e.target.id] = e.target.value;
    setCoAuthor(coAuthorPayloadCopy);
  };

  let deleteCoAuthor = (index) => {
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
    let coAuthorPayloadCopy = [...abstractDocumentPayload.coAuthorDetails];

    let result = coAuthorPayloadCopy.filter((item, i) => i !== index);
    abstractDocumentPayloadCopy.coAuthorDetails = result;
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
                  <label htmlFor="authorSaluation" className="form-label">
                    Saluation
                  </label>                 
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="authorSaluation"
                    value={abstractDocumentPayload.authorSaluation}
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
                  <label htmlFor="authorFirstName" className="form-label">
                    First Name
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="authorFirstName"
                    defaultValue={abstractDocumentPayload?.authorFirstName}
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="authorMiddleName" className="form-label">
                    Middle Name
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="authorMiddleName"
                    defaultValue={abstractDocumentPayload?.authorMiddleName}
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="authorLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="authorLastName"
                    defaultValue={abstractDocumentPayload?.authorLastName}
                    required
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="authorEmail" className="form-label">
                   email
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="authorEmail"
                    defaultValue={abstractDocumentPayload?.authorEmail}
                    required
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="authorAffiliation" className="form-label">
                   Affiliation
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="authorAffiliation"
                    defaultValue={abstractDocumentPayload?.authorAffiliation}
                    required
                  />
                </div>
              </div>

              <div className="col-md-3">
                <button className="common-btn" onClick={()=>setOtherAuthor(!otherAuthor)}>Add/Remove Co-Author</button>
              </div>
              </div>

              

            { otherAuthor && (
             <div className="row">
             <div className="col-md-3">
                 <div className="mb-3">
                   <label htmlFor="coAuthorSaluation" className="form-label">
                     Saluation
                   </label>                 
                   <select
                     className="form-select"
                     aria-label="Default select example"
                     id="coAuthorSaluation"
                     value={coAuthor?.coAuthorSaluation}
                     onChange={(e) => coAuthorOnChangeHandler(e)}
                   >
                     <option selected>Select Saluation</option>
                     <option defaultValue="Dr.">Dr.</option>
                     <option defaultValue="Mr.">Mr.</option>         
                     <option defaultValue="Ms.">Ms.</option>         
                     <option defaultValue="Mrs.">Mrs.</option>       
                     </select>                   
                     
                 </div>
               </div>
               <div className="col-md-3">
                 <div className="mb-3">
                   <label htmlFor="coAuthorFirstName" className="form-label">
                     First Name
                   </label>
                   <input
                     onChange={(e) => coAuthorOnChangeHandler(e)}
                     type="text"
                     className="form-control"
                     id="coAuthorFirstName"
                     value={coAuthor?.coAuthorFirstName}
                     
                   />
                 </div>
               </div>
               <div className="col-md-3">
                 <div className="mb-3">
                   <label htmlFor="coAuthorMiddleName" className="form-label">
                     Middle Name
                   </label>
                   <input
                     onChange={(e) => coAuthorOnChangeHandler(e)}
                     type="text"
                     className="form-control"
                     id="coAuthorMiddleName"
                     value={coAuthor?.coAuthorMiddleName}
                     
                   />
                 </div>
               </div>
               <div className="col-md-3">
                 <div className="mb-3">
                   <label htmlFor="coAuthorLastName" className="form-label">
                     Last Name
                   </label>
                   <input
                     onChange={(e) => coAuthorOnChangeHandler(e)}
                     type="text"
                     className="form-control"
                     id="coAuthorLastName"
                     value={coAuthor?.coAuthorLastName}
                     
                   />
                 </div>
               </div>
 
               <div className="col-md-3">
                 <div className="mb-3">
                   <label htmlFor="coAuthorEmail" className="form-label">
                    email
                   </label>
                   <input
                     onChange={(e) => coAuthorOnChangeHandler(e)}
                     type="text"
                     className="form-control"
                     id="coAuthorEmail"
                     value={coAuthor?.coAuthorEmail}
                     
                   />
                 </div>
               </div>
 
               <div className="col-md-3">
                 <div className="mb-3">
                   <label htmlFor="coAuthorAffiliation" className="form-label">
                    Affiliation
                   </label>
                   <input
                     onChange={(e) => coAuthorOnChangeHandler(e)}
                     type="text"
                     className="form-control"
                     id="coAuthorAffilation"
                     value={coAuthor?.coAuthorAffilation}
                     
                   />
                 </div>
               </div>

               <div className="col-md-2">
                        <button
                          className="common-btn"
                          id="coAuthor"
                          type="button"
                          onClick={(e) => addCoAuthor(e)}
                        >
                          ADD
                        </button>
                      </div>
               </div>
            )}

                {abstractDocumentPayload.coAuthorDetails.length > 0 &&
                  abstractDocumentPayload.coAuthorDetails.map((item, index) => {
                    return (
                      <div className="exhibitor-relation d-flex mt-3">
                        <div className="relation-box-1">
                          <label className="form-label" htmlFor="relation-name">
                          Saluation
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={item.coAuthorSaluation}
                            disabled
                          />
                        </div>
                        <div className="ms-2 relation-box-2">
                          <label className="form-label" htmlFor="relation-type">
                            First Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={item.coAuthorFirstName}
                            disabled
                          />
                        </div>
                        <div className="ms-2 relation-box-2">
                          <label className="form-label" htmlFor="relation-type">
                            Middle Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={item.coAuthorMiddleName}
                            disabled
                          />
                        </div>
                        <div className="ms-2 relation-box-2">
                          <label className="form-label" htmlFor="relation-type">
                            Last Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={item.coAuthorLastName}
                            disabled
                          />
                        </div>
                        <div className="ms-2 relation-box-2">
                          <label className="form-label" htmlFor="relation-type">
                            Email
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={item.coAuthorEmail}
                            disabled
                          />
                        </div>
                        <div className="ms-2 relation-box-2">
                          <label className="form-label" htmlFor="relation-type">
                            Affiliation
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={item.coAuthorAffilation}
                            disabled
                          />
                        </div>

                        <div className="relation-delete-box ps-3">
                          <button
                            className="create-btn"
                            id="accompanningPerson"
                            type="button"
                            onClick={(e) => deleteCoAuthor(index)}
                          >
                            Delete
                          </button>
                        </div>

                       
                      </div>
                    );
                  })}

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
                { abstractTitleError && (
                  <p className="text-danger">
                    {abstractTitleError}
                  </p>
                )}
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
                { abstractDocumentPayload.abstract && abstractError && (
                  <p className="text-danger">
                    {abstractError}
                  </p>
                )}
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
                  <label htmlFor="paperPresentationType" className="form-label">
                    Intended mode of paper presentation
                  </label>                 
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="paperPresentationType"
                    value={abstractDocumentPayload.paperPresentationType}
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
