import * as CONSTANTS from "./constant";

export function transactionDetailsHandler(payload) {
    return {
        type: CONSTANTS.USER_TRANSACTION_DETAILS,
        payload
    }
}


