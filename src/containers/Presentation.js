import React, { useEffect, useState } from "react";
import { baseUrl, GetHeaders } from "../utils";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Presentation = () => {

    const [presentationFile, setPresentationFile] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [userdetail, setUserDetail] = useState(null)
    const [ successMsg, setSuccessMsg] = useState(null)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      getRegistredUserData(decodedToken.user.user._id);
      getUserPresentationData(decodedToken.user.user._id)
    }
  }, []);

  const getRegistredUserData = async (userId) => {
    let url = `${baseUrl}getsaveregistreduserinfo/${userId}`;
    try {
      const response = await axios.get(url, GetHeaders());
      if (response) {
        console.log(response.data, "response");
        setUserDetail(response.data)
      }
    } catch (error) {
      console.log(error, "eror");
    }
  };

  const handleFOrmSubmit = async(e) => {
    e.preventDefault();   
    const formData = new FormData();
    formData.append('registrationNumber', userdetail[0].registrationNumber)
    formData.append('userName', userdetail[0].name)
    formData.append('userId', userdetail[0].userId)
    formData.append('file', presentationFile); // Add the file to the FormData
    
   if(presentationFile){
    let url = `${baseUrl}uploadPresentationFile`
    try {
        const response = await axios.post(url, formData,{
            headers: {
                'Content-Type': 'multipart/form-data', // Set the correct content type
              },
        });
        // const response = await axios.post(url, presentationFile);
        if(response){
            console.log(response,"resposneeee");
            setSuccessMsg("Presentation File Submitted Successfully");
            emptySuccessMsg();
        }        
    } catch (error) {
        
    }
   }else{
    setErrorMsg("Please Upload the file")
   }
  }

  const handleChange = (e) => {
    setErrorMsg(null)
    const selectedFile = e.target.files[0];

    if (selectedFile) {
        if (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/vnd.ms-powerpoint' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
          // Valid file type (PDF or PPTX)
          // You can upload or process the file here
          console.log("selectedFileselectedFile", selectedFile)
          setPresentationFile(selectedFile)
        } else {
          // Invalid file type
          setErrorMsg('Upload only PDF and PPTX files');
          // You can reset the input field or display an error message
          e.target.value = '';
        }
      }
  }

  const getUserPresentationData = async(userId) =>{
    try {
        let url = `${baseUrl}getPresentationById/${userId}`;
        let response = await axios.get(url);
        if(response){
            console.log("conso ka response", response)
        }
        
    } catch (error) {
        
    }
  }

  const emptySuccessMsg = () => {
    setTimeout(() => {
        setSuccessMsg(null)
      }, 3000);
  }

  

  return (
    <section className="presentation-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>Submit Your Presentation</div>
          </div>
        </div>
        <div className="row mt-5 ">
            <div className="col-md-8">
                <form onSubmit={(e)=>handleFOrmSubmit(e)}>
                    <div className="">                        
                        <input 
                        onChange={(e) => handleChange(e)}
                        className="form-control"
                        type="file" 
                        accept=".pdf,.pptx"
                        name="presentationFile"
                        />
                        <span>Please upload only Pdf or Pptx format file</span>
                    </div>
                    {errorMsg && <p className="text-danger">{errorMsg}</p> }
                    {successMsg && <p className="text-success">{successMsg}</p> }
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
