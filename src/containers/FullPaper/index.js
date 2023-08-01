import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MultiSelect } from "primereact/multiselect";
import { useDispatch, useSelector } from 'react-redux';
import * as ACTIONS from './action'
import jwt_decode from "jwt-decode";


const FullPaper = () => {
  let obj = {
    authorSaluation: "",
    authorFirstName: "",
    authorMiddleName :"",
    authorLastName :"",
    authorEmail:"",
    authorAffiliation:"",
    coAuthorDetails: [],
    fullPaperName: "",     
    mimetype: "",
    fullPaperFileUrl: "",
    themeType: [],
    paperPresentationType:""
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
  let [fullPaperPayload, setFullPaperPayload] = useState(obj);
  const [otherAuthor, setOtherAuthor] = useState(false);
  const [selectedThemes, setSelectedThemes] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [coAuthor, setCoAuthor] = useState({
    coAuthorSaluation: "",
    coAuthorFirstName: "",
    coAuthorMiddleName: "",
    coAuthorLastName: "",
    coAuthorEmail: "",
    coAuthorAffilation: ""
  });
  const [fullPaperError, setFullPaperError] = useState(undefined)

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


  function getFileExtensionToLowerCase(filename) {
    return filename.split('.').pop().toLowerCase();
  }

  const fullPaperOnChangeHandler = async (e) => {    
    let fullPaperPayloadCopy = { ...fullPaperPayload };
    if (e.target.id == 'file') {
      const allowedExtensions = ['doc', 'docx'];
      const fileExtension = await getFileExtensionToLowerCase(e.target.files[0].name);
      if (!allowedExtensions.includes(fileExtension)) {
        emptyFormUploadField();
        setErrorMessage("Please upload word file only.")
      } else{
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
    } else if (e.target.id == "fullPaperName") {
      let userInput = e.target.value;
      const words = userInput.split(' ');
      if (words.length <= 25) {
        fullPaperPayloadCopy.fullPaperName = e.target.value;
        setFullPaperPayload(fullPaperPayloadCopy);
        setFullPaperError("");
      } else {
        setFullPaperError("Please enter under 25 words")
      }
    }
    else {
      fullPaperPayloadCopy[e.target.id] = e.target.value
      setFullPaperPayload(fullPaperPayloadCopy)
    }

  };

  let fullPaperSubmitHandler = (e) => {
    e.preventDefault();
    if (selectedThemes == [] || selectedThemes === null) {
      alert('Please select at least one sub-theme.');
    }else{
    setLoading(true)
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      // fullPaperPayload.fullPaperName = fullPaperName;
      // fullPaperPayload.themeType = themeType;
      fullPaperPayload.themeType.push(selectedThemes);
      fullPaperPayload.userId = decodedToken.user.user._id;
      fullPaperPayload.userName = decodedToken.user.user.userName;
      fullPaperPayload.userEmail = decodedToken.user.user.userEmail;
      console.log("full paper fullPaperPayload ", fullPaperPayload)
      dispatch(ACTIONS.saveFullPaperData(fullPaperPayload))
    }
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
      <div className="container">
      <div className="row">
              <div className="col-md-12 mb-2">
                <b>
                Author
                </b>
                  
              </div>
            <div className="col-lg-10 col-md-10 col-sm-12 d-flex">
            <div className="row"> 
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <label htmlFor="authorSaluation" className="form-label asterisk">
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
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <label htmlFor="authorFirstName" className="form-label asterisk">
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
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
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
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <label htmlFor="authorLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    onChange={(e) => fullPaperOnChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="authorLastName"
                    defaultValue={fullPaperPayload?.authorLastName}
                    required
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <label htmlFor="authorEmail" className="form-label asterisk">
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
                <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-2">
                  <label htmlFor="authorAffiliation" className="form-label asterisk">
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
                <div className="col-lg-2 col-md-2 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button">
                <button className="common-btn add-and-remove-button" onClick={()=>setOtherAuthor(!otherAuthor)}>Add Co-Author</button>
              </div>
              </div>


              { otherAuthor && (
             <div className="row">
             <div className="col-12 mb-2">
              <b>
              Co-Author
              </b>
                    
                  </div>
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
                 <div className="mb-3">
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
               </div>
               <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
                   <label htmlFor="coAuthorAffiliation" className="form-label asterisk">
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
                 <div className="col-lg-2 col-md-2 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button">
                        <button
                          className="common-btn add-and-remove-button"
                          id="coAuthor"
                          type="button"
                          onClick={(e) => addCoAuthor(e)}
                        >
                          ADD
                        </button>
                    </div>
               </div>
            )}

                {fullPaperPayload.coAuthorDetails.length > 0 &&
                  fullPaperPayload.coAuthorDetails.map((item, index) => {
                    return (
                      <div className="row">
                      <div className="col-lg-10 col-md-10 col-sm-12 d-flex">
                        <div className='row'>
                      <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
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
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 relation-box-1">
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
                      <div className="col-lg-2 col-md-2 col-sm-4  col-6 d-flex justify-content-lg-center 
                justify-content-md-center justify-content-sm-center  justify-content-start add-co-author-button">
                          <button
                            className="common-btn add-and-remove-button"
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
        <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="paperPresentationType" className="form-label asterisk">
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
                  <label htmlFor="paperPresentationType" className="form-label asterisk">
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
                      disabled={isDisabled}
                      placeholder="Select Sub-Themes"
                      maxSelectedLabels={1}
                      className="w-full md:w-20rem"
                    />
                  </div>
              </div>
              <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label asterisk">
              Title of the  Paper (25 words limit)
              </label>
              <textarea 
              value={fullPaperPayload?.fullPaperName}
              onChange={(e) => fullPaperOnChangeHandler(e)}               
                type="text"
                className="form-control"
                id="fullPaperName"                
              />
            </div>
            {fullPaperError && (
                  <p className="text-danger">
                    {fullPaperError}
                  </p>
                )}
          </div>
          <div className="col-md-8">
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
                  {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </div>
              </div>
               <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
              <div className="mb-3">
                    <button className="common-btn add-button" type="submit" disabled={loading}>
                      {loading ? "uploading" : "Submit"}
                    </button>
                  </div>
              </div>
            </div>
            {fullPaperDataSavedMessage && <p className="text-success">{fullPaperDataSavedMessage}</p>}
          </div>
          
        </div>
      </div>
    </form>
  </section>
  </>
  )
}

export default FullPaper