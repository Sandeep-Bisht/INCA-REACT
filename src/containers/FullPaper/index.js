import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MultiSelect } from "primereact/multiselect";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "./action";
import jwt_decode from "jwt-decode";
import "../../css/abstractUpload.css"

const FullPaper = () => {
  let obj = {
    authorSaluation: "",
    authorFirstName: "",
    authorMiddleName: "",
    authorLastName: "",
    authorEmail: "",
    authorAffiliation: "",
    coAuthorDetails: [],
    fullPaperName: "",
    mimetype: "",
    fullPaperFileUrl: "",
    themeType: [],
    paperPresentationType: "",
  };

  let location = useLocation();
  let ref = useRef();
  let dispatch = useDispatch();
  const state = useSelector((state) => state.FullPaperUploadReducer);
  const [loading, setLoading] = useState(false);
  const [fullPaperDataSavedMessage, setFullPaperDataSavedMessage] =
    useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let [fullPaperName, setFullPaperName] = useState();
  let [themeType, setThemeType] = useState();
  let [fullPaperPayload, setFullPaperPayload] = useState(obj);
  const [otherAuthor, setOtherAuthor] = useState(false);
  const [selectedThemes, setSelectedThemes] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [coAuthor, setCoAuthor] = useState({
    coAuthorSaluation: "",
    coAuthorFirstName: "",
    coAuthorMiddleName: "",
    coAuthorLastName: "",
    coAuthorEmail: "",
    coAuthorAffilation: "",
  });
  const [fullPaperError, setFullPaperError] = useState(undefined);
  let navigate = useNavigate()

  

  useEffect(() => {
    if (location && location.state) {
      setFullPaperName(location.state.abstractPaperName);
      setThemeType(location.state.themeType);
    }
  }, [location]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      fullPaperPayload.userId = decodedToken.user.user._id;
      fullPaperPayload.userName = decodedToken.user.user.userName;
      fullPaperPayload.userEmail = decodedToken.user.user.userEmail;
    }
  }, []);

  function getFileExtensionToLowerCase(filename) {
    return filename.split(".").pop().toLowerCase();
  }

  const fullPaperOnChangeHandler = async (e) => {
    let fullPaperPayloadCopy = { ...fullPaperPayload };
    if (e.target.id == "file") {
      const allowedExtensions = ["doc", "docx"];
      const fileExtension = await getFileExtensionToLowerCase(
        e.target.files[0].name
      );
      if (!allowedExtensions.includes(fileExtension)) {
        emptyFormUploadField();
        setErrorMessage("Please upload word file only.");
      } else {
        if (e.target.files[0].size <= 20000000) {
          let formData = new FormData();
          formData.append("file", e.target.files[0]);
          fullPaperPayloadCopy.fullPaperFileUrl = e.target.files[0].name;
          setFullPaperPayload(fullPaperPayloadCopy);
          setErrorMessage("");
          dispatch(ACTIONS.fullPaperFileUpload(formData));
        } else {        
          setErrorMessage("File size should not be more than 10Mb");
        }
      }
    } else if (e.target.id == "fullPaperName") {
      let userInput = e.target.value;
      const words = userInput.split(" ");
      if (words.length <= 25) {
        fullPaperPayloadCopy.fullPaperName = e.target.value;
        setFullPaperPayload(fullPaperPayloadCopy);
        setFullPaperError("");
      } else {
        alert(`Please enter under 25 words, you have entered ${words.length}`);
        setFullPaperError("Please enter under 25 words");
      }
    } else {
      fullPaperPayloadCopy[e.target.id] = e.target.value;
      setFullPaperPayload(fullPaperPayloadCopy);
    }
  };

  let fullPaperSubmitHandler = (e) => {
    e.preventDefault();
    if (selectedThemes == [] || selectedThemes === null) {
      alert("Please select at least one sub-theme.");
    } else {
      setLoading(true);
      if (localStorage.getItem("token")) {
        let decodedToken = jwt_decode(localStorage.getItem("token"));
        // fullPaperPayload.fullPaperName = fullPaperName;
        // fullPaperPayload.themeType = themeType;
        fullPaperPayload.themeType.push(selectedThemes);
        fullPaperPayload.userId = decodedToken.user.user._id;
        fullPaperPayload.userName = decodedToken.user.user.userName;
        fullPaperPayload.userEmail = decodedToken.user.user.userEmail;
        console.log("full papper data before submit", fullPaperPayload)
         dispatch(ACTIONS.saveFullPaperData(fullPaperPayload));
      }
    }
  };

  let emptyFormUploadField = () => {
    let fullPaperPayloadCopy = { ...fullPaperPayload };
    ref.current.value = "";
    fullPaperPayloadCopy.filename = "";
    setFullPaperPayload(fullPaperPayloadCopy);
  };

  let getFileExtension = (fileName) => {
    return fileName.split(".").pop();
  };

  useEffect(() => {
    if (
      state.fullPaperFileUploadSuccess &&
      state.fullPaperFileUploadSuccess.data
    ) {
      setIsDisabled(false)
      let fullPaperPayloadCopy = { ...fullPaperPayload };
      fullPaperPayloadCopy.mimetype =
        state.fullPaperFileUploadSuccess.data.mimetype;
      fullPaperPayloadCopy.fullPaperFileUrl =
        state.fullPaperFileUploadSuccess.data.path;
      setFullPaperPayload(fullPaperPayloadCopy);
    }
  }, [state.fullPaperFileUploadSuccess]);

  let emptyFormField = () => {
    let fullPaperPayloadCopy = { ...fullPaperPayload };
    ref.current.value = "";
    fullPaperPayloadCopy.fullPaperFileUrl = "";
    fullPaperPayloadCopy.filename = "";
    fullPaperPayloadCopy.abstractPaperName = "";
    fullPaperPayloadCopy.themeType = "";
    setFullPaperPayload(fullPaperPayloadCopy);
  };

  useEffect(() => {
    if (state && state?.fullPaperDataSaveSuccess) {
      setLoading(false);
      emptyFormField();
      setFullPaperDataSavedMessage(
        "Your file submitted successfully. We will update you on email after verification"
      );
      setTimeout(() => {
        setFullPaperDataSavedMessage("");
        dispatch(ACTIONS.resetFullPaperDataToInitialState())
        navigate("/dashboard/fullPaperList")
      }, 4000);
    }
  }, [state.fullPaperDataSaveSuccess]);

  let deleteCoAuthor = (index) => {
    let fullPaperPayloadCopy = { ...fullPaperPayload };
    let coAuthorPayloadCopy = [...fullPaperPayload.coAuthorDetails];

    let result = coAuthorPayloadCopy.filter((item, i) => i !== index);
    fullPaperPayloadCopy.coAuthorDetails = result;
    setFullPaperPayload(fullPaperPayloadCopy);
  };

  let addCoAuthor = () => {
    if (coAuthor.coAuthorFirstName) {
      let fullPaperPayloadCopy = { ...fullPaperPayload };
      let coAuthorPayloadCopy = [...fullPaperPayload.coAuthorDetails];
      coAuthorPayloadCopy.push(coAuthor);
      fullPaperPayloadCopy.coAuthorDetails = coAuthorPayloadCopy;
      setFullPaperPayload(fullPaperPayloadCopy);
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
        <form onSubmit={(e) => fullPaperSubmitHandler(e)}>
          <div className="container px-0">
            <div className="row">
              <div className="col-md-12 mb-2">
                <b>Author</b>
              </div>
              <div className="col-lg-10 col-md-12 col-sm-12 d-flex">
                <div className="row">
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-2">
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
                      value={fullPaperPayload.authorSaluation}
                      onChange={(e) => fullPaperOnChangeHandler(e)}
                    >
                      <option selected>Select Saluation</option>
                      <option defaultValue="Dr."> Dr. </option>
                      <option defaultValue="Mr."> Mr. </option>
                      <option defaultValue="Ms."> Ms. </option>
                      <option defaultValue="Mrs."> Mrs. </option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-2">
                    <label
                      htmlFor="authorFirstName"
                      className="form-label asterisk"
                    >
                      First Name
                    </label>
                    <input
                      onChange={(e) => fullPaperOnChangeHandler(e)}
                      type="text"
                      className="form-control"
                      id="authorFirstName"
                      defaultValue={fullPaperPayload?.authorFirstName}
                      required
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-2">
                    <label htmlFor="authorMiddleName" className="form-label">
                      Middle Name
                    </label>
                    <input
                      onChange={(e) => fullPaperOnChangeHandler(e)}
                      type="text"
                      className="form-control"
                      id="authorMiddleName"
                      defaultValue={fullPaperPayload?.authorMiddleName}
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-2">
                    <label htmlFor="authorLastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      onChange={(e) => fullPaperOnChangeHandler(e)}
                      type="text"
                      className="form-control"
                      id="authorLastName"
                      defaultValue={fullPaperPayload?.authorLastName}
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
                      onChange={(e) => fullPaperOnChangeHandler(e)}
                      type="text"
                      className="form-control"
                      id="authorEmail"
                      defaultValue={fullPaperPayload?.authorEmail}
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
                      onChange={(e) => fullPaperOnChangeHandler(e)}
                      type="text"
                      className="form-control"
                      id="authorAffiliation"
                      defaultValue={fullPaperPayload?.authorAffiliation}
                      required
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-4 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button"
              >
                {/* <button
                type="button"
                  className="common-btn add-and-remove-button w-100"
                  onClick={() => setOtherAuthor(!otherAuthor)}
                >
                  Add Co-Author
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
            </div>

            <div className="row">
              {fullPaperPayload &&
                fullPaperPayload?.coAuthorDetails.length > 0 &&
                fullPaperPayload?.coAuthorDetails.map((item, index) => {
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
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* {otherAuthor && (
              <div className="row">
                <div className="col-12 mb-2">
                  <b>Co-Author</b>
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12 d-flex">
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
                      <label htmlFor="coAuthorLastName" className="form-label">
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
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
                      <div className="mb-3">
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
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                <div
                  className="col-lg-2 col-md-4 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button"
                >
                  <button
                    className="common-btn add-and-remove-button w-100"
                    id="coAuthor"
                    type="button"
                    onClick={(e) => addCoAuthor(e)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            )} */}

            {/* {fullPaperPayload.coAuthorDetails.length > 0 &&
              fullPaperPayload.coAuthorDetails.map((item, index) => {
                return (
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
                      <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 relation-box-1">
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
                      </div>
                    </div>
                    <div
                      className="col-lg-2 col-md-4 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button"
                    >
                      <button
                        className="common-btn add-and-remove-button w-100"
                        id="accompanningPerson"
                        type="button"
                        onClick={(e) => deleteCoAuthor(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })} */}

            <div className="row">
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
                    value={fullPaperPayload.paperPresentationType}
                    onChange={(e) => fullPaperOnChangeHandler(e)}
                  >
                    <option selected>Select Mode of Paper Presentation</option>
                    <option defaultValue="Oral">Oral</option>
                    <option defaultValue="Poster">Poster</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="paperPresentationType"
                  className="form-label asterisk"
                >
                  Select Sub-Themes
                </label>
              </div>

              <div className="col-md-12">
                <div className="card flex mb-3">
                  <MultiSelect
                    value={selectedThemes && selectedThemes}
                    onChange={handleSelectedSubThemesChange} // Update the onChange handler
                    options={subThems}
                    optionLabel="name"
                    // disabled={isDisabled}
                    placeholder="Select Sub-Themes (You can select upto 3)"
                    maxSelectedLabels={1}
                    className="w-full md:w-20rem"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label asterisk">
                    Title of the Paper (25 words limit)
                  </label>
                  <textarea
                    value={fullPaperPayload?.fullPaperName}
                    onChange={(e) => fullPaperOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="fullPaperName"
                    required
                  />
                </div>
                {fullPaperError && (
                  <p className="text-danger">{fullPaperError}</p>
                )}
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="mb-3">
                  <label htmlFor="inputFile" className="form-label asterisk">
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
                  {errorMessage && (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <div className="mb-3">
                        <button
                          type="button"
                          className="ms-3 common-btn add-button"
                          data-bs-toggle="modal"                          
                          data-bs-target="#previewModal"
                        >
                          Preview
                        </button>
                      {/* <button
                        className="common-btn add-button"
                        type="submit"
                        disabled={isDisabled}
                      >
                        {loading ? "uploading" : "Submit"}
                      </button> */}
                    </div>
                  </div>
                </div>
                {fullPaperDataSavedMessage && (
                  <p className="text-success">{fullPaperDataSavedMessage}</p>
                )}
              </div>
            </div>
          </div>

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
                  {fullPaperPayload && (
                    <>
                      <ul>
                        <b>Author</b>
                        <li>
                          {fullPaperPayload.authorSaluation +
                            " " +
                            fullPaperPayload.authorFirstName +
                            " " +
                            fullPaperPayload?.authorMiddleName +
                            " " +
                            fullPaperPayload.authorLastName}
                        </li>
                        <li>
                          {fullPaperPayload.authorEmail}
                        </li>
                        <li>
                          {fullPaperPayload.authorAffiliation}
                        </li>
                      </ul>
                      <ul>
                        {/* {abstractDocumentPayload?.coAuthorDetails?.length >
                          0 && <b>Co-Author</b>} */}
                        {fullPaperPayload?.coAuthorDetails?.length > 0 &&
                          fullPaperPayload.coAuthorDetails.map(
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
                          {fullPaperPayload.paperPresentationType}
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
                          {fullPaperPayload.fullPaperName}
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

                  {fullPaperPayload &&
                    fullPaperPayload.authorFirstName &&
                    fullPaperPayload.paperPresentationType &&
                    fullPaperPayload.fullPaperName &&
                    fullPaperPayload.fullPaperFileUrl &&
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
      </section>
    </>
  );
};

export default FullPaper;
