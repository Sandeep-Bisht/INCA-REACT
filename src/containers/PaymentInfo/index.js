import React from "react";
import "../../css/paymentInfo.css";

const PaymentInfo = () => {
  return (
    <>
      <div className="payment-info">
        <div className="container">
          <div className="col-md-12">
            <div className="payment-info-box pt-5">
              <p>
                <strong>
                Payment to be made on the account details provided as follows
                </strong>
              </p>
            </div>
          </div>
          <div className="col-md-12">
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
                  <td><b>43<sup>rd</sup> INCA International Congress</b></td>
                </tr>
                <tr>
                  <td>
                    <th scope="row">Account No</th>
                  </td>
                  <td><b>40853837369</b></td>
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
        <div className="row">
          <div className="col-md-12">
            <strong>
              Note
            </strong>
            <p>
              Transation details are to be shared with organising secretary on the email : info@43inca.org
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
