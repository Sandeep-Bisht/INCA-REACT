import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { MultiSelect } from "primereact/multiselect";
import * as ACTIONS from "./action";
import { useLocation, useNavigate } from "react-router-dom";
import PreviewPaper from "../PreviewPaper";
import "../../css/abstractUpload.css";

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
let filePayload ={
  userName :"",
  userEmail: "",
  userId : "",
  paperApproveStatus: null,
  mimetype : "",
}

const AbstractUpload = () => {

  const [abstractDocumentPayload, setAbstractDocumentPayload] = useState(obj);
  const [abstractfilePayload, setAbstractfilePayload] = useState(filePayload)
  const [abstractDataSavedMessage, setAbstractDataSavemessage] = useState("");
  const [abstractFileMessage, setAbstractFileMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [userdetails, setUserDetails] = useState();
  const [isHidden, setIsHidden] = useState(false);
  const [mode, setMode] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [abstractTitleError, setAbstractTitleError] = useState("");
  const [abstractError, setAbstractError] = useState("");
  const [otherAuthor, setOtherAuthor] = useState(false);
  const [selectedThemes, setSelectedThemes] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [coAuthor, setCoAuthor] = useState({
    coAuthorSaluation: "",
    coAuthorFirstName: "",
    coAuthorMiddleName: "",
    coAuthorLastName: "",
    coAuthorEmail: "",
    coAuthorAffilation: "",
  });
  const [proceed, setProceed] = useState(false);

  const state = useSelector((state) => state.AbstractUploadReducer);


  let dispatch = useDispatch();
  const ref = useRef();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location && location.state && location.state.mode === "preview") {
      setAbstractDocumentPayload(location.state);
      setMode(location.state.mode);
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
      let abstractfilePayloadCopy = { ...abstractfilePayload };
      abstractfilePayloadCopy.mimetype = state.abstractFileUploadSuccess.data.mimetype;
        abstractfilePayloadCopy.abstractPaperFileUrl = state.abstractFileUploadSuccess.data.path;
        setAbstractfilePayload(abstractfilePayloadCopy);
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
        dispatch(ACTIONS.resetAbstractDataToInitialState());
        navigate("/dashboard/userabstractlist");
      }, 4000);
    }
  }, [state.abstractDataSaveSuccess]);

  // useEffect(() => {
  //   if (state && state?.onlyAbstractFileSaveSuccess) {
  //     console.log("inside onlyAbstractFileSaveSuccess")
  //     setLoading(false);
  //     setAbstractFileMessage(
  //       "Your file submitted successfully. We will update you on email after verification"
  //     );
  //     setTimeout(() => {
  //       setAbstractFileMessage("");
  //       dispatch(ACTIONS.resetOnlyAbstractFileToInitialState());
  //       navigate("/dashboard/userabstractlist");
  //     }, 4000);
  //   }
  // }, [state.onlyAbstractFileSaveSuccess]);

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

  let emptyFormUploadField = () => {
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };
    ref.current.value = "";
    abstractDocumentPayloadCopy.filename = "";
    setAbstractDocumentPayload(abstractDocumentPayloadCopy);
  };

  function getFileExtensionToLowerCase(filename) {
    return filename.split(".").pop().toLowerCase();
  }

  const abstarctOnChangeHandler = async (e) => {
    let abstractDocumentPayloadCopy = { ...abstractDocumentPayload };

     if (e.target.id == "abstractPaperName") {
      let userInput = e.target.value;
      validateAbstractForm();
      const words = userInput.split(" ");
      if (words.length <= 25) {
        abstractDocumentPayloadCopy.abstractPaperName = e.target.value;
        setAbstractDocumentPayload(abstractDocumentPayloadCopy);
        setAbstractTitleError("");
      } else {
        alert(`Please enter under 25 words, you have entered ${words.length}`);
        setAbstractTitleError(
          `Please enter under 25 words, you have entered ${words.length}`
        );
      }
    } else if (e.target.id == "abstract") {
      let userInput = e.target.value;
      const words = userInput.split(" ");
      if (words.length <= 300) {
        abstractDocumentPayloadCopy.abstract = e.target.value;
        setAbstractDocumentPayload(abstractDocumentPayloadCopy);
        setAbstractError("");
      } else {
        alert(
          `Please enter under 300 words, you are trying to paste ${words.length} words.`
        );
        setAbstractError(
          `Please enter under 300 words, you are trying to paste ${words.length} words.`
        );
      }
    } else {
      abstractDocumentPayloadCopy[e.target.id] = e.target.value;
      setAbstractDocumentPayload(abstractDocumentPayloadCopy);
    }
  };

  let abstractPaperSubmitHandler = async (e) => {
    e.preventDefault();
    if (selectedThemes == [] || selectedThemes === null) {
      alert("Please select at least one sub-theme.");
    } else {
      setLoading(true);
      let decodedToken = await jwt_decode(localStorage.getItem("token"));
      abstractDocumentPayload.themeType.push(selectedThemes);
      abstractDocumentPayload.userEmail = decodedToken.user.user.userEmail;
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
  var previewPayload;

  const validateAbstractForm = () => {
    previewPayload = true;

    // debugger;
    if (!abstractDocumentPayload?.authorSaluation) {
      previewPayload = false;
    }
    if (!abstractDocumentPayload?.authorFirstName) {
      previewPayload = false;
    }
    if (!abstractDocumentPayload?.authorLastName) {
      previewPayload = false;
    }
    if (!abstractDocumentPayload?.authorEmail) {
      previewPayload = false;
    }
    if (!abstractDocumentPayload?.authorAffiliation) {
      previewPayload = false;
    }
    if (!abstractDocumentPayload?.abstractPaperName) {
      previewPayload = false;
    }
    if (!abstractDocumentPayload?.abstract) {
      previewPayload = false;
    }
    if (!abstractDocumentPayload?.paperPresentationType) {
      previewPayload = false;
    }
    if (!selectedThemes?.length <= 0) {
      previewPayload = false;
    }

    return previewPayload;

    //else{
    //   return alert(`Please filll   ${previewPayload}`)
    // }
  };

  const submitAbstractFile = async () => {
   
    let decodedToken = await jwt_decode(localStorage.getItem("token"));
    abstractfilePayload.userEmail = decodedToken.user.user.userEmail;
    abstractfilePayload.authorEmail = decodedToken.user.user.userEmail;
    abstractfilePayload.userId = decodedToken.user.user._id;
    abstractfilePayload.userName = decodedToken.user.user.userName;
    console.log("before api abstractfilePayload",abstractfilePayload )
    // dispatch(ACTIONS.saveOnlyAbstractFile(abstractfilePayload));
    dispatch(ACTIONS.saveAbstractData(abstractfilePayload));
  }

  const abstarctFileOnChangeHandler = async (e) => {
    let abstractfilePayloadCopy = { ...abstractfilePayload };
    
    if (e.target.id == "file") {      
      const allowedExtensions = ["doc", "docx"];
      const fileExtension = await getFileExtensionToLowerCase(
        e.target.files[0].name
      );
      if (!allowedExtensions.includes(fileExtension)) {
        emptyFormUploadField();
        setErrorMessage("Please upload word file only.");
      } else {
        if (e.target.files[0].size <= 2000000) {
          let decodedToken = await jwt_decode(localStorage.getItem("token"));
      let userEmail = decodedToken.user.user.userEmail;
          let formData = new FormData();
          formData.append("file", e.target.files[0]);
          formData.append('userEmail', userEmail)
          abstractfilePayloadCopy.abstractPaperFileUrl = e.target.files[0].name;
          // abstractfilePayloadCopy.abstractPaperFile = e.target.files[0].name;

          setAbstractfilePayload(abstractfilePayloadCopy);
          setErrorMessage("");
          
          dispatch(ACTIONS.abstratcFileUpload(formData));
        } else {
          setErrorMessage("File size should not be more than 2 Mb");
        }
      }
    }
  }

  return (
    <>
      <section className="abstract-form">
        <form onSubmit={(e) => abstractPaperSubmitHandler(e)}>
          <div className=" abstract-form-wrapper-container">
            <div className="row">
              <div className="col-12 mb-2">
                <b>Author</b>
              </div>
              <div className="col-lg-10 col-md-12 col-sm-12 d-flex">
                <div className="row">
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
                    <label
                      htmlFor="authorSaluation"
                      className="form-label asterisk"
                    >
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
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-2">
                    <div className="mb-3">
                      <label
                        htmlFor="authorFirstName"
                        className="form-label asterisk"
                      >
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
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-2">
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
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-2">
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
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-2">
                    <label
                      htmlFor="authorEmail"
                      className="form-label asterisk"
                    >
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
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-2">
                    <label
                      htmlFor="authorAffiliation"
                      className="form-label asterisk"
                    >
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
                  </div>
                </div>
              </div>
              {!mode && (
                <div
                  className="col-lg-2 col-md-4 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button"
                >
                  {/* <button
                  type="button"
                    className="common-btn add-and-remove-button w-100"
                    onClick={() => setOtherAuthor(!otherAuthor)}
                  >
                    {otherAuthor && otherAuthor ? "Remove Author" : " Add Co-Author"}
                  </button> */}
                  <button
                    type="button"
                    className="common-btn add-and-remove-button w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Add Co-Author
                  </button>
                </div>
              )}
            </div>         

            <div className="row">
              {abstractDocumentPayload &&
                abstractDocumentPayload?.coAuthorDetails.length > 0 &&
                abstractDocumentPayload?.coAuthorDetails.map((item, index) => {
                  return (
                    <div className="col-md-4 col-6" key={index}>
                      <div className="card">
                        <div className="save-address">
                          <div className="default-add">
                            <span className="default-address">
                              <b>Co-Author: </b>
                            </span>
                            <span className="address-logo">
                              <b>{index + 1}</b>
                            </span>
                          </div>
                          <div className="co-author-detail">
                            <div className="address-selection">
                              <p className="name">
                                Name : {item.coAuthorSaluation}{" "}
                                {item.coAuthorFirstName}{" "}
                                {item.coAuthorMiddleName}{" "}
                                {item.coAuthorLastName}
                              </p>
                            </div>

                            <p className="email">
                              Email : {item.coAuthorEmail}
                            </p>
                            <p className="affiliation">
                              Affiliation : {item.coAuthorAffilation}
                            </p>
                          </div>
                          { !isDisabled &&
                          <div className="">
                            <button
                              className="delete-button w-100"
                              id="accompanningPerson"
                              type="button"
                              onClick={(e) => deleteCoAuthor(index)}
                            >
                              Delete
                            </button>
                          </div>
                }
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

           

            <div className="row mt-2">
              <div className="col-lg-6 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="paperPresentationType"
                    className="form-label asterisk"
                  >
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

              {mode != "preview" ? (
                <>
                  <div>
                    <label
                      htmlFor="paperPresentationType"
                      className="form-label asterisk"
                    >
                      Select Sub-Themes
                    </label>
                  </div>

                  <div className="col-md-12 ">
                    <div className="card flex mb-3 justify-content-center">
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
                <div className=" col-12 ms-1 relation-box-2">
                  <div className="mb-3">
                    <label htmlFor="authorFirstName" className="form-label">
                      Selected Themes
                    </label>
                    {selectedThemes?.length > 0 &&
                      selectedThemes.map((item, i) => {
                        return (
                          <input
                            key={i}
                            onChange={(e) => abstarctOnChangeHandler(e)}
                            type="text"
                            className="form-control"
                            disabled={isDisabled}
                            defaultValue={item.name}
                            required
                          />
                        );
                      })}
                  </div>
                </div>
              )}

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
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="mb-3">
                  {!mode && (
                    <>
                      {!proceed && (
                        <button
                          type="button"
                          className="ms-3 common-btn add-button"
                          data-bs-toggle="modal"                          
                          data-bs-target="#previewModal"
                        >
                          Preview
                        </button>
                      )}                                        

                      <p className="pt-3 fs-6">
                        <b>Note</b>: Kindly, Fill the registeration form before
                        uploading abstracts. For technical support in uploading
                        of Abstracts please contact at info@43inca.org
                      </p>
                    </>
                  )}
                  {userdetails?.role == "admin" && <PreviewPaper data={true} />}
                </div>
              </div>
            </div>
            {abstractDataSavedMessage && (
              <p className="text-success">{abstractDataSavedMessage}</p>
            )}
          </div>

          {/* <!-- Button trigger modal --> */}

          {/* Preiew <!-- Modal --> */}
          <div
            className="modal fade"
            id="previewModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div
                  className="modal-header "
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Abstract Detail
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {abstractDocumentPayload && (
                    <>
                      <ul>
                        <b>Author</b>
                        <li>
                          {abstractDocumentPayload.authorSaluation +
                            " " +
                            abstractDocumentPayload.authorFirstName +
                            " " +
                            abstractDocumentPayload?.authorMiddleName +
                            " " +
                            abstractDocumentPayload.authorLastName}
                        </li>
                        <li>
                          {abstractDocumentPayload.authorEmail}
                        </li>
                        <li>
                          {abstractDocumentPayload.authorAffiliation}
                        </li>
                      </ul>
                      <ul>
                        {/* {abstractDocumentPayload?.coAuthorDetails?.length >
                          0 && <b>Co-Author</b>} */}
                        {abstractDocumentPayload?.coAuthorDetails?.length > 0 &&
                          abstractDocumentPayload.coAuthorDetails.map(
                            (item, index) => {
                              return (
                                <>
                                <b>Co-Author {index + 1}</b>
                                  <li>
                                    {/* <b>Co-Author Name</b>:{" "} */}
                                    {item.coAuthorSaluation +
                                      " " +
                                      item.coAuthorFirstName +
                                      " " +
                                      item?.coAuthorMiddleName +
                                      " " +
                                      item.coAuthorLastName}
                                  </li>
                                  <li>
                                    {/* <b>Co-Author Email</b>: {item.coAuthorEmail} */}
                                    {item.coAuthorEmail}
                                  </li>
                                  <li className="pb-3">
                                    {/* <b>Co-Author Affiliation</b>:{" "} */}
                                    {item.coAuthorAffilation}
                                  </li>
                                </>
                              );
                            }
                          )}
                      </ul>
                      <ul>
                        <li className="mb-2">
                          <b> Intended Mode of Paper Presentation </b>:{" "}
                          {abstractDocumentPayload.paperPresentationType}
                        </li>
                      </ul>
                      <ul>
                        <b>Select Sub-Themess</b>
                        {selectedThemes &&
                          selectedThemes.map((item, ind) => {
                            return <li>{item.name}</li>;
                          })}
                        <li className="mt-2">
                          <b>Title of the Paper </b>:{" "}
                          {abstractDocumentPayload.abstractPaperName}
                        </li>
                        <li className="mt-2">
                          <b>Abstract </b> : {abstractDocumentPayload.abstract}
                        </li>
                      </ul>
                    </>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Edit
                  </button>

                  {abstractDocumentPayload &&
                    abstractDocumentPayload.authorFirstName &&
                    abstractDocumentPayload.paperPresentationType &&
                    abstractDocumentPayload.abstractPaperName &&
                    abstractDocumentPayload.abstract &&
                    selectedThemes?.length > 0 && (
                      // <button type="button" className="common-btn add-button" data-bs-dismiss="modal" onClick={()=>setProceed(!proceed)}>Proceed</button>
                      <button
                        className="ms-3 common-btn add-button"
                        data-bs-dismiss="modal"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "uploading..." : "Submit"}
                      </button>
                    )}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- add Co author Button trigger modal --> */}

          {/* <!-- Add coauthor modal Modal --> */}
          <div
            class="modal fade "
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Add Co-Author
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
                      <div className="row">
                        <div className="col-lg-6 col-md-4 col-sm-4 col-6 relation-box-1">
                          <label
                            htmlFor="coAuthorSaluation"
                            className="form-label asterisk"
                          >
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
                        <div className="col-lg-6 col-md-4 col-sm-4 col-6 relation-box-1">
                          <label
                            htmlFor="coAuthorFirstName"
                            className="form-label asterisk"
                          >
                            First Name
                          </label>
                          <input
                            onChange={(e) => coAuthorOnChangeHandler(e)}
                            type="text"
                            className="form-control"
                            id="coAuthorFirstName"
                            value={coAuthor?.coAuthorFirstName}
                            required={otherAuthor}
                          />
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-4 col-6 relation-box-1">
                          <label
                            htmlFor="coAuthorMiddleName"
                            className="form-label"
                          >
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
                        <div className="col-lg-6 col-md-4 col-sm-4 col-6 relation-box-1">
                          <label
                            htmlFor="coAuthorLastName"
                            className="form-label"
                          >
                            Last Name
                          </label>
                          <input
                            onChange={(e) => coAuthorOnChangeHandler(e)}
                            type="text"
                            className="form-control"
                            id="coAuthorLastName"
                            value={coAuthor?.coAuthorLastName}
                            required={otherAuthor}
                          />
                        </div>

                        <div className="col-lg-6 col-md-4 col-sm-4 col-6 relation-box-1">
                          <label
                            htmlFor="coAuthorEmail"
                            className="form-label asterisk"
                          >
                            email
                          </label>
                          <input
                            onChange={(e) => coAuthorOnChangeHandler(e)}
                            type="text"
                            className="form-control"
                            id="coAuthorEmail"
                            value={coAuthor?.coAuthorEmail}
                            required={otherAuthor}
                          />
                        </div>

                        <div className="col-lg-6 col-md-4 col-sm-4 col-6 relation-box-1">
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
                              required={otherAuthor}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* {abstractDocumentPayload?.coAuthorDetails?.length < 9 &&
                <div className="col-lg-2 col-md-4 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button">
                  <button
                    className="common-btn add-and-remove-button w-100"
                    id="coAuthor"
                    type="button"
                    onClick={(e) => addCoAuthor(e)}
                  >
                    Add
                  </button>
                </div>
} */}
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>

                  <button
                    className="common-btn add-and-remove-button"
                    data-bs-dismiss="modal"
                    id="coAuthor"
                    type="button"
                    onClick={(e) => addCoAuthor(e)}
                    disabled={
                      !coAuthor.coAuthorAffilation ||
                      !coAuthor.coAuthorFirstName ||
                      !coAuthor.coAuthorLastName ||
                      !coAuthor.coAuthorEmail ||
                      !coAuthor.coAuthorSaluation
                    }
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
     {   !isDisabled && (
      <>
      <div className="row">
      <div className="col-md-12 mt-3">
                      <p>
                        If you are unable to submit your abstract using the
                        above form, please upload the abstract in .docx format
                        using the "Upload Document" button given below
                        (optional).
                      </p>
                    </div>  
      <div className="col-lg-6 col-md-10 mt-1">
                      <div className="mb-3">
                        <label
                          htmlFor="inputFile"
                          className="form-label asterisk"
                        >
                          Abstract Upload (File size should not be more 2mb
                          )
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => abstarctFileOnChangeHandler(e)}
                          aria-label="file example"
                          id="file"
                          ref={ref}
                        />
                        {errorMessage && (
                          <p className="text-danger">{errorMessage}</p>
                        )}
                      </div>
                    </div>
                      
                      
                    <div>
                      <button
                      className="common-btn add-button"
                      type="button"
                      onClick={()=>submitAbstractFile()}
                      disabled={errorMessage || !abstractfilePayload.abstractPaperFileUrl || abstractFileMessage}
                      >
                        Submit Abstract File</button>
                    </div>

      </div>
      {abstractDataSavedMessage && (
              <p className="text-success">{abstractDataSavedMessage}</p>
            )}
          </>
     )
      }
      </section>
    </>
  );
};

export default AbstractUpload;  
