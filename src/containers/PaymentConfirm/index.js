import React, { useState } from "react";
import axios from "axios";
import { GetHeaders } from "../../utils";
import { useNavigate } from "react-router-dom";

const PaymentConfirm = (props) => {
  let navigate = useNavigate();

  const {
    registrationNumber,
    bankName,
    accountHolderName,
    accountNumber,
    transactionNumber,
    referenceNumber,
    email,
    mannualPaymentStatus,
    userId
  } = props.userInformation;

  let paymentHandler = async (registrationNumber) => {
   let url = `http://144.91.110.221:4801/api/update_transction_details/${registrationNumber}`;
   //let url = `http://localhost:4801/api/update_transction_details/${registrationNumber}`;
    try {
      let response = await axios.get(url, GetHeaders());
      if(response && response.data && response.data.message){
        navigate("/dashboard/allRegistration");
      }
    } catch (error) {
      console.log(error, "err");
    }
  };

  let sendQrOnEmailToUser = async(userId) => {
    let url = `http://144.91.110.221:4801/api/generateqrcode/${userId}`;
    try {
      let response = await axios.get(url, GetHeaders());
    } catch (error) {
      console.log(error, "err");
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="payment-info-box pt-5">
            <p className="text-center">
              <strong>Confirm Payment</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Registration Number</b>
                </td>
                <td>
                  <b>{registrationNumber}</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Registration Number</b>
                </td>
                <td>
                  <b>{bankName}</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Account Holder Name</b>
                </td>
                <td>
                  <b>{accountHolderName}</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Account Number</b>
                </td>
                <td>
                  <b>{accountNumber}</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Transaction Number</b>
                </td>
                <td>
                  <b>{transactionNumber}</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Reference Number</b>
                </td>
                <td>
                  <b>{referenceNumber}</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>email</b>
                </td>
                <td>
                  <b>{email}</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Payment Status</b>
                </td>
                <td>
                  <b>{mannualPaymentStatus}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-12 ">
          <div className="qr-btns">
          <button
            className="btn-success"
            disabled={mannualPaymentStatus == "paid"}
            onClick={() => paymentHandler(registrationNumber)}
          >
            Confirm
          </button>
          <button
            className="btn-success"
            onClick={() => sendQrOnEmailToUser(userId)}
          >
            Send QR
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirm;
