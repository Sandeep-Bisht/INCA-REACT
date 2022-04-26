import * as CONSTANTS from "./constant";
export function getPaymentStatus() {
  console.log("i am from Action")
    return {
      type: CONSTANTS.GET_PAYMENT_STATUS,
      
    };
  }