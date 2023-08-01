import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { MultiSelect } from "primereact/multiselect";
import * as ACTIONS from "./action";
import { useLocation, useNavigate } from "react-router-dom";
import PreviewPaper from "../PreviewPaper";

let obj = {
  authorSaluation: "",
  authorFirstName: "",
  authorMiddleName: "",
  authorLastName: "",
  authorEmail: "",
  authorAffiliation: "",
  coAuthorDetails: [],
  abstractPaperName: "",
  mimetype: "",
  abstract: "",
  paperApproveStatus: null,
  themeType: [],
  paperPresentationType: "",
};

const AbstractUpload = () => {
  const [abstractDocumentPayload, setAbstractDocumentPayload] = useState(obj);
  const [abstractDataSavedMessage, setAbstractDataSavemessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [userdetails, setUserDetails] = useState();
  const [isHidden, setIsHidden] = useState(false);
  const [mode, setMode] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [abstractTitleError, setAbstractTitleError] = useState("");
  const [abstractError, setAbstractError] = useState("");
  const [otherAuthor, setOtherAuthor] = useState(false);
  const [selectedThemes, setSelectedThemes] = useState(null);
  const [coAuthor, setCoAuthor] = useState({
    coAuthorSaluation: "",
    coAuthorFirstName: "",
    coAuthorMiddleName: "",
    coAuthorLastName: "",
    coAuthorEmail: "",
    coAuthorAffilation: "",
  });

  const state = useSelector((state) => state.AbstractUploadReducer);

  let dispatch = useDispatch();
  const ref = useRef();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location && location.state && location.state.mode === "preview") {
      console.log(location, "locationnn");
      setAbstractDocumentPayload(location.state);
      // setPhoneNumber(location.state.phoneNumber.toString());
      setMode(location.state.mode);
      // setSelectedThemes(location.state.themeType)
      setSelectedThemes(location?.state?.themeType[0]);
      setIsDisabled(true);
      setIsHidden(true);
    }
  }, []);

 
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
    if (state && state?.abstractDataSaveSuccess) {
      setLoading(false);
      emptyFormField();
      setAbstractDataSavemessage(
        "Your file submitted successfully. We will update you on email after verification"
      );
      setTimeout(() => {
        setAbstractDataSavemessage("");
        dispatch(ACTIONS.resetAbstractDataToInitialState())
        navigate("/dashboard/userabstractlist")
      }, 3000);
    }
  }, [state.abstractDataSaveSuccess]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage?.getItem("token"));
      let user = decodedToken?.user.user;
      setUserDetails(user);
      abstractDocumentPayload.userId = decodedToken.user.user._id;

      abstractDocumentPayload.userName = decodedToken.user.user.userName;
      abstractDocumentPayload.authorEmail = decodedToken.user.user.userEmail;
    }
  }, []);

  let getFileExtension = (fileName) => {
    return fileName.split(".").pop();
  };

  // let emptyFormUploadField = () => {
  //   let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
  //   ref.current.value = "";
  //   abstractDocumentPayloadCopy.filename = "";
  //   setAbstractDocumentPayload(abstractDocumentPayloadCopy);
  // };

  const abstarctOnChangeHandler = (e) => {
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
    if (e.target.id == "abstractPaperName") {
      let userInput = e.target.value;
      const words = userInput.split(" ");
      if (words.length <= 25) {
        abstractDocumentPayloadCopy.abstractPaperName = e.target.value;
        setAbstractDocumentPayload(abstractDocumentPayloadCopy);
        setAbstractTitleError("");
      } else {
        setAbstractTitleError("Please enter under 25 words");
      }
    } else if (e.target.id == "abstract") {
      let userInput = e.target.value;
      const words = userInput.split(" ");
      if (words.length <= 300) {
        abstractDocumentPayloadCopy.abstract = e.target.value;
        setAbstractDocumentPayload(abstractDocumentPayloadCopy);
        setAbstractError("");
      } else {
        setAbstractError("Please enter under 300 words");
      }
    } else {
      abstractDocumentPayloadCopy[e.target.id] = e.target.value;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy);
    }
  };

  let abstractPaperSubmitHandler = (e) => {
    e.preventDefault();
    if (selectedThemes == [] || selectedThemes === null) {
      alert('Please select at least one sub-theme.');
    }else{
      setLoading(true);
    abstractDocumentPayload.themeType.push(selectedThemes);
    console.log("before api hit", abstractDocumentPayload);
    dispatch(ACTIONS.saveAbstractData(abstractDocumentPayload));
    }
    
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
        coAuthorMiddleName: "",
        coAuthorLastName: "",
        coAuthorEmail: "",
        coAuthorAffilation: "",
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

  

  const subThems = [
    {
      name: "Advances in cartography, geospatial technology and thematic mapping for management of natural resources and smart governance",
      code: "Advances in cartography, geospatial technology and thematic mapping for management of natural resources and smart governance",
    },
    {
      name: "Geospatial technologies for fostering sustainable agriculture, food security and green economies",
      code: "Geospatial technologies for fostering sustainable agriculture, food security and green economies",
    },
    {
      name: "Geospatial technologies for sustainable water resources management",
      code: "Geospatial technologies for sustainable water resources management",
    },
    {
      name: "Geospatial technologies for environment and energy security",
      code: "Geospatial technologies for environment and energy security",
    },
    {
      name: "Geospatial technologies for urban studies and infrastructure planning & development",
      code: "Geospatial technologies for urban studies and infrastructure planning & development",
    },
    {
      name: "Geospatial technologies for meteorology and climate change studies",
      code: "Geospatial technologies for meteorology and climate change studies",
    },
    {
      name: "Geospatial technologies for building disaster resilience and emergency management",
      code: "Geospatial technologies for building disaster resilience and emergency management",
    },
    {
      name: "Hydrographic surveys and geospatial technologies for coastal zone management and oceanography",
      code: "Hydrographic surveys and geospatial technologies for coastal zone management and oceanography",
    },
    {
      name: "Drone/UAV based novel applications for sustainable economies",
      code: "Drone/UAV based novel applications for sustainable economies",
    },
    {
      name: "Emerging trends in AI/ML for cartography and geospatial applications",
      code: "Emerging trends in AI/ML for cartography and geospatial applications",
    },
    {
      name: "New geospatial and space policies for enhancing entrepreneurship and geospatial economy",
      code: "New geospatial and space policies for enhancing entrepreneurship and geospatial economy",
    },
  ];

  const handleSelectedSubThemesChange = (e) => {
    // Check if the selected values exceed the limit (3 in this case)
    let value = "";
    if (e.value.length <= 3) {
      setSelectedThemes(e.value);
      value = e.value;
    }
  };


  return (
    <>
      <section className="abstract-form">
        <form onSubmit={(e) => abstractPaperSubmitHandler(e)}>
          <div className="container">
            <div className="row">
              <div className="col-12 mb-2">
                <b>
                Author
                  </b>
                  </div>
              <div className="col-lg-10 col-md-10 col-sm-12 d-flex">
                <div className="row"> 
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
                  <label htmlFor="authorSaluation" className="form-label asterisk">
                    Saluation
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="authorSaluation"
                    disabled={isDisabled}
                    required
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
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <div className="mb-3">
                    <label htmlFor="authorFirstName" className="form-label asterisk">
                      First Name
                    </label>
                    <input
                      onChange={(e) => abstarctOnChangeHandler(e)}
                      type="text"
                      className="form-control"
                      disabled={isDisabled}
                      id="authorFirstName"
                      defaultValue={abstractDocumentPayload?.authorFirstName}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <label htmlFor="authorMiddleName" className="form-label">
                    Middle Name
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    disabled={isDisabled}
                    id="authorMiddleName"
                    defaultValue={abstractDocumentPayload?.authorMiddleName}
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <label htmlFor="authorLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    disabled={isDisabled}
                    required
                    id="authorLastName"
                    defaultValue={abstractDocumentPayload?.authorLastName}
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <label htmlFor="authorEmail" className="form-label asterisk">
                    email
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    disabled={isDisabled}
                    id="authorEmail"
                    defaultValue={abstractDocumentPayload?.authorEmail}
                    required
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <label htmlFor="authorAffiliation" className="form-label asterisk">
                    Affiliation
                  </label>
                  <input
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    disabled={isDisabled}
                    id="authorAffiliation"
                    defaultValue={abstractDocumentPayload?.authorAffiliation}
                    required
                  />
                </div></div>
              </div>
              {!mode && (
                
                <div className="col-lg-2 col-md-2 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button">
                  <button
                    className="common-btn add-and-remove-button"
                    onClick={() => setOtherAuthor(!otherAuthor)}
                  >
                    Add Co-Author
                  </button>
                </div>
              )}
            </div>

            {otherAuthor && (
              <div className="row">
                <div className="col-12 mb-2"><b>Co-Author</b></div>
                <div className="col-lg-10 col-md-10 col-sm-12 d-flex">
                  <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
                    <label htmlFor="coAuthorSaluation" className="form-label asterisk">
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
                  <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
                    <label htmlFor="coAuthorFirstName" className="form-label asterisk">
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
                  <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
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
                  <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
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

                  <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
                    <label htmlFor="coAuthorEmail" className="form-label asterisk">
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

                  <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
                    <div className="mb-3">
                      <label
                        htmlFor="coAuthorAffiliation"
                        className="form-label asterisk"
                      >
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
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button">
                  <button
                    className="common-btn add-and-remove-button"
                    id="coAuthor"
                    type="button"
                    onClick={(e) => addCoAuthor(e)}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}

            {abstractDocumentPayload.coAuthorDetails.length > 0 &&
              abstractDocumentPayload.coAuthorDetails.map((item, index) => {
                return (
                  <div className="row">
                    <div className="col-12 ">
                      <div className="row"> 
                      <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
                        <label className="form-label" htmlFor="relation-name">
                          Saluation
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          disabled={isDisabled}
                          value={item.coAuthorSaluation}
                        />
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">                        <label className="form-label" htmlFor="relation-type">
                          First Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={item.coAuthorFirstName}
                          disabled={isDisabled}
                        />
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">                        <label className="form-label" htmlFor="relation-type">
                          Middle Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={item.coAuthorMiddleName}
                          disabled={isDisabled}
                        />
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">                        <label className="form-label" htmlFor="relation-type">
                          Last Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={item.coAuthorLastName}
                          disabled={isDisabled}
                        />
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">                        <label className="form-label" htmlFor="relation-type">
                          Email
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={item.coAuthorEmail}
                          disabled={isDisabled}
                        />
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">                        <label className="form-label" htmlFor="relation-type">
                          Affiliation
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={item.coAuthorAffilation}
                          disabled={isDisabled}
                        />
                      </div>
                    </div></div>
                    { !mode && (
                      <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-4 d-flex justify-content-center add-co-author-button">
                      <button
                        className="common-btn add-and-remove-button"
                        id="accompanningPerson"
                        type="button"
                        onClick={(e) => deleteCoAuthor(index)}
                      >
                        Delete
                      </button>
                    </div></div>
                    ) }
                  </div>
                    
                );
              })}

            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="paperPresentationType" className="form-label asterisk">
                    Intended Mode of Paper Presentation
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="paperPresentationType"
                    value={abstractDocumentPayload?.paperPresentationType}
                    disabled={isDisabled}
                    onChange={(e) => abstarctOnChangeHandler(e)}
                  >
                    <option selected>Select Mode of Paper Presentation</option>
                    <option defaultValue="Oral">Oral</option>
                    <option defaultValue="Poster">Poster</option>
                  </select>
                </div>
              </div>

              { mode != "preview" ? (
                <>
                <div>
                  <label htmlFor="paperPresentationType" className="form-label asterisk">
                    Select Sub-Themes
                  </label>
                  </div>
              
                <div className="col-md-12 ">
                  <div className="card flex mb-3">
                    <MultiSelect
                      value={selectedThemes && selectedThemes}
                      onChange={handleSelectedSubThemesChange} // Update the onChange handler
                      options={subThems}
                      optionLabel="name"
                      disabled={isDisabled}
                      placeholder="Select Sub-Themes (You can select upto 3)"
                      maxSelectedLabels={1}
                      className="w-full md:w-20rem"
                    />
                  </div>
                </div>
                </>
              
              ) : (
                <div className=" col-12 ms-1 relation-box-2" >
                <div className="mb-3">
                  <label htmlFor="authorFirstName" className="form-label">
                    Selected Themes
                  </label>
                  {selectedThemes?.length > 0 && selectedThemes.map((item, i)=>{
                    return(
                      <input
                      key={i}
                        onChange={(e) => abstarctOnChangeHandler(e)}
                        type="text"
                        className="form-control"
                        disabled={isDisabled}
                        defaultValue={item.name}
                        required
                      />
                    )                   
                 
                  } ) }
                </div>
              </div>
             
               
              )
              }

              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label asterisk">
                    Title of the Paper (25 words limit)
                  </label>
                  <textarea
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="abstractPaperName"
                    disabled={isDisabled}
                    value={abstractDocumentPayload.abstractPaperName}
                    required
                  ></textarea>
                </div>
                {abstractTitleError && (
                  <p className="text-danger">{abstractTitleError}</p>
                )}
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="abstract" className="form-label asterisk">
                    Abstract (300 words only)
                  </label>
                  <textarea
                    onChange={(e) => abstarctOnChangeHandler(e)}
                    type="text"
                    disabled={isDisabled}
                    placeholder="You can copy paste abstract here"
                    className="form-control text-area-abtract"
                    id="abstract"
                    value={abstractDocumentPayload.abstract}
                    required
                  ></textarea>
                </div>
                {abstractError && (
                  <p className="text-danger">{abstractError}</p>
                )}
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    {!mode && (
                      <>
                        <button
                          className="common-btn add-button"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "uploading..." : "Submit"}
                        </button>

                        <p className="pt-3 fs-6">
                          <b>Note</b>: Kindly, Fill the registeration form
                          before uploading abstracts. For technical support in
                          uploading of Abstracts please contact at
                          info@43inca.org
                        </p>
                      </>
                    )}
                    {userdetails?.role == "admin" && <PreviewPaper />}
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
