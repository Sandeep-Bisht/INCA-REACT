import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import "../../css/transaction.css";
import * as ACTIONS from "../Create/action";
import * as TRANSACTIONACTIONS from "./action";
import { useNavigate } from "react-router-dom";

function TransactionDetails() {
  const [transactionDetails, setTransactionDetails] = useState({
    email: "",
  });
  let navigate = useNavigate()
  const [message, setMessage] = useState();
  const [loggedInUser, setLoggedInUser] = useState({});
  const [registrationFeeData, setRegistrationFeeData] = useState();
  const [isChecked, setIsChecked] = useState(false);
  //const [userInformation, setUserInformation] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.RegisteredUserInfoReducer);
  const transactionState = useSelector(
    (state) => state.TransactionDetailsReducer
  );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwt_decode(localStorage.getItem("token"));
      setLoggedInUser(decodedToken.user.user);
      dispatch(ACTIONS.getLoggedInUser(decodedToken.user.user._id));
    }
  }, []);

  useEffect(() => {
    if (transactionState && transactionState.transactionDetailSuccess) {
      emptyFormField();
      setMessage(transactionState.transactionDetailSuccess.message);
    }
  }, [transactionState.transactionDetailSuccess]);

  const emptyMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const emptyFormField = () => {
    let transactionDetailsCopy = { ...transactionDetails };
    Object.keys(transactionDetailsCopy).map((item, i) => {
      transactionDetailsCopy[item] = "";
    });
    setTransactionDetails(transactionDetailsCopy);
  };

  useEffect(() => {
    emptyMessage();
  }, [message]);

  useEffect(() => {
    if (
      state &&
      state.loggedInUserSuccess &&
      state.loggedInUserSuccess.length > 0
    ) {
      let transactionDetailsCopy = { ...transactionDetails };
      transactionDetailsCopy.email = state.loggedInUserSuccess[0].email;
      transactionDetailsCopy.registrationNumber =
        state.loggedInUserSuccess[0].registrationNumber;
      transactionDetailsCopy.userId = state.loggedInUserSuccess[0]._id;
      setTransactionDetails(transactionDetailsCopy);
      setRegistrationFeeData(state.loggedInUserSuccess[0]);
      //   setIsDisabled(true);
      //   setUserInformation(state.loggedInUserSuccess[0]);
    }
  }, [state.loggedInUserSuccess]);

  

  const transactionDetailHandler = (e) => {
    let transactionDetailsCopy = { ...transactionDetails };
    transactionDetailsCopy[e.target.name] = e.target.value;
    setTransactionDetails(transactionDetailsCopy);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(TRANSACTIONACTIONS.transactionDetailsHandler(transactionDetails));
  };


  const handlePaynow = async () => {
    if(isChecked){
      // navigate("https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=5687220")
      const newTab = window.open("https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=5687220", '_blank');
      newTab.focus();
    } else{
      alert("Please agree the terms")
    }
  }
  return (
    <>
      {/* <section className="transaction-section">
        <div className="container">
            <form onSubmit={(e)=>onSubmitHandler(e)}>
          <div className="row">
            <div className="col-md-7 mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <div className="registration-number">
                    <span>Registeration number</span>
                    <input
                      className="form-control"
                      isDisabled={
                        transactionDetails && transactionDetails.registrationNumber
                      }
                      value={
                        transactionDetails && transactionDetails.registrationNumber
                      }
                      name="registrationNumber"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="email-address">
                    <span>E-mail</span>
                    <input
                      className="form-control"
                      isDisabled={ transactionDetails && transactionDetails.email}
                      value={transactionDetails && transactionDetails.email}
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="bank-box">
                    <span>Bank Name</span>
                    <input className="form-control" required name="bankName"  value={transactionDetails && transactionDetails.bankName} onChange={(e)=>transactionDetailHandler(e)} type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="account-number">
                    <span>Account number</span>
                    <input className="form-control" required value={transactionDetails && transactionDetails.accountNumber}  name="accountNumber" onChange={(e)=>transactionDetailHandler(e)} type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="account-name">
                    <span>Account Type</span>
                    <input className="form-control" required name="accountHolderName" value={transactionDetails && transactionDetails.accountHolderName} onChange={(e)=>transactionDetailHandler(e)} type="text" />
                  </div>
                </div>             
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="transaction-date">
                    <span>Transaction Number</span>
                    <input className="form-control" required name="transactionNumber" value={transactionDetails && transactionDetails.transactionNumber} onChange={(e)=>transactionDetailHandler(e)} type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="reference-number">
                    <span>Reference number</span>
                    <input className="form-control" required name="referenceNumber" value={transactionDetails && transactionDetails.referenceNumber} onChange={(e)=>transactionDetailHandler(e)} type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 pt-3">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
              <div>
                {message}
              </div>
            </div>
          </div>
          </form>
        </div>
      </section> */}
      {/* <section className="transaction-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5>Payment page will be available soon</h5>
            </div>
          </div>
        </div>
      </section> */}
      <section className="transaction-section">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <h3 className="text-center">Registration Fee for 43<sup>rd</sup> INCA</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h5>Please follow the instruction given below</h5>
              <ul>
                <li>
                  You will be redirected to SBI collect platform, please select
                  correct category in SBI collect.
                </li>
                <li>
                  Please select the correct category of your registration.
                </li>
                <li>
                  Please enter same details as submitted in registration.
                </li>
                <li>
                  Use the same email Id in payment options.
                </li>
              </ul>
              <div className="row">
                <div className="col-md-4 agree-condition">
                  <div>
                    <input onChange={()=>setIsChecked(!isChecked)} type="checkbox" name="agree" />
                  </div>
                  <div className="ms-3">I agree and confirm</div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                    <p>You have Pay</p>
                    Rs { registrationFeeData?.registrationFee  }
                    </div>
                    <div className="col-md-6 d-flex align-items-end">
                      <button 
                      className="btn btn-success"
                      type="button"
                      onClick={()=> handlePaynow()}

                        >
                        Pay Now
                      </button>
                    </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TransactionDetails;
