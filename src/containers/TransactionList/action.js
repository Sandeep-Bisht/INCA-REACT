import * as CONSTANTS from "./constant";

export function getUserTransactionList() {
    return {
        type : CONSTANTS.GET_USER_TRANSACTION_LIST,
    }
}