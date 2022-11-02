import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "../../css/userqrcomponentdetails.css";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
let UserDetails = () => {
  const [userQrInfo, setUserQrInfo] = useState()
  let param = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (param.id) {
      getUserInfoByqrCode(param.id)
    }
  }, [param.id])

  let getUserInfoByqrCode = async (id) => {
    let url = `http://144.91.110.221:4801/api/getuserinfo/${id}`;
    try {
      let response = await axios.get(url);
      setUserQrInfo(response.data[0])
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>

      {userQrInfo &&
        <section class="border">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10">
                <div class="box">
                  <h2><u>User Information Info</u></h2>
                  <div class="information">
                    <p>Name :-</p><span> {userQrInfo.name}</span>
                  </div>
                  {/* <div class="information">
                    <p>Designation:-</p><span> {userQrInfo.designation} </span>
                  </div> */}
                  <div class="information">
                    <p>Registration No:-</p><span> {userQrInfo.registrationNumber}</span>
                  </div>
                  {/* <div class="information">
                    <p>Email:-</p><span> {userQrInfo.email} </span>
                  </div> */}
                  {/* <div class="information">
                    <p>Country:-</p><span>{userQrInfo.country} </span>
                  </div> */}
                  {/* <div class="information">
                    <p>ConferenceMode:-</p><span>{userQrInfo.conferenceMode} </span>
                  </div>
                  <div class="information">
                    <p>Phone Number:-</p><span> {userQrInfo.phoneNumber}</span>
                  </div> */}
                  <div class="information">
                    <p>Participation Type:-</p><span> {userQrInfo.participationType} </span>
                  </div>
                  {/* <div class="information">
                    <p>Payment Status:-</p><span> {userQrInfo.mannualPaymentStatus} </span>
                  </div> */}
                  {/* <div class="information">
                    <p>Address:-</p><span> {userQrInfo.address} </span>
                  </div> */}
                 
                </div>
              </div>
            </div>
          </div>

        </section>}

    </>

  )
}

export default UserDetails