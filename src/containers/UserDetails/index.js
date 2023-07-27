import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "../../css/userqrcomponentdetails.css";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils";
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
    let url = `${baseUrl}getuserinfo/${id}`;
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
        <section className="border">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                {/* <div className="box">
                  <h2><u>User Information Info</u></h2>
                  <div className="information">
                    <p>Name :-</p><span> {userQrInfo.name}</span>
                  </div>
                  <div className="information">
                    <p>Registration No:-</p><span> {userQrInfo.registrationNumber}</span>
                  </div>
                  <div className="information">
                    <p>Email:-</p><span> {userQrInfo.email} </span>
                  </div>
                  <div className="information">
                    <p>Country:-</p><span>{userQrInfo.country} </span>
                  </div>
                  <div className="information">
                    <p>ConferenceMode:-</p><span>{userQrInfo.conferenceMode} </span>
                  </div>
                  <div className="information">
                    <p>Phone Number:-</p><span> {userQrInfo.phoneNumber}</span>
                  </div>
                  <div className="information">
                    <p>Participation Type:-</p><span> {userQrInfo.participationType} </span>
                  </div>
                  <div className="information">
                    <p>Payment Status:-</p><span> {userQrInfo.mannualPaymentStatus ? userQrInfo.mannualPaymentStatus  : "unpaid" } </span>
                  </div> 
                   <div className="information">
                    <p>Address:-</p><span> {userQrInfo.address} </span>
                  </div>
                 
                </div> */}

                {/* julesh code */}
                <div className="box">
                  <h2><u>User Information Info</u></h2>
                  <table className="table">
                    <tr className="information">
                        <td>Name</td>
                        <td>{userQrInfo.name}</td>
                    </tr>
                    {/* <tr className="information">
                        <td>Designation</td>
                        <td>{userQrInfo.designation}</td>
                    </tr> */}
                    <tr className="information">
                        <td>Registration Number</td>
                        <td>{userQrInfo.registrationNumber}</td>
                    </tr>
                    <tr className="information">
                        <td>Email</td>
                        <td>{userQrInfo.email}</td>
                    </tr>
                    <tr className="information">
                        <td>Country</td>
                        <td>{userQrInfo.country} </td>
                    </tr>
                    <tr className="information">
                        <td>Conference Mode</td>
                        <td>{userQrInfo.conferenceMode}</td>
                    </tr>
                    <tr className="information">
                        <td>Phone Number</td>
                        <td>{userQrInfo.phoneNumber}</td>
                    </tr>
                    <tr className="information">
                        <td>Participation Type</td>
                        <td>{userQrInfo.participationType}</td>
                    </tr>
                    <tr className="information">
                        <td>Payment Status</td>
                        <td>{userQrInfo.mannualPaymentStatus}</td>
                    </tr>
                    <tr className="information">
                        <td>Address</td>
                        <td>{userQrInfo.address}</td>
                    </tr>
                  </table>
                  {/* <button className="btn btn-primary " onClick={() => redirectToRegistrationPage()} className="btn btn-primary">Go Back</button> */}
</div>
              </div>
            </div>
          </div>

        </section>}

    </>

  )
}

export default UserDetails