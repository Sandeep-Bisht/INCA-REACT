import React from "react";
import "../../css/paymentInfo.css";

const PaymentInfo = () => {
  return (
    <>
      <div className="payment-info">
        <div className="container">
          <div className="col-md-12">
            <div className="payment-info-box">
              <h1>
                Payment to be made on the account details provided as follows
              </h1>
            </div>
          </div>
          <div className="col-md-8 mx-auto">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <th scope="row">Bank Name</th>
                  </td>
                  <td><b>State Bank of India</b></td>
                </tr>
                <tr>
                  <td>
                    <th scope="row">Branch Name</th>
                  </td>
                  <td><b>New Cantt Road, Dehradun</b></td>
                </tr>
                <tr>
                  <td>
                    <th scope="row">Name of Account Holder</th>
                  </td>
                  <td><b>42<sup>nd</sup> INCA International Congress</b></td>
                </tr>
                <tr>
                  <td>
                    <th scope="row">Account No</th>
                  </td>
                  <td><b>36759239449</b></td>
                </tr>
                <tr>
                  <td>
                    <th scope="row">IFSC Code</th>
                  </td>
                  <td><b>SBIN0060432</b></td>
                </tr>
                <tr>
                  <td>
                    <th scope="row">MICR No</th>
                  </td>
                  <td><b>248002038</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
