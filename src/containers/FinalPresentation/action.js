import * as CONSTANTS from './constant';

export const getFullPaperList = () => {
    return{
        type : CONSTANTS.GET_FULL_PAPER_LIST,
    }
}

export const getUserFullPaperList = (id) => {
    return {
        type : CONSTANTS.GET_USER_FULL_PAPER_LIST,
        id
    }
}