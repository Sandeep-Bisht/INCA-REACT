import * as CONSTANTS from './constant'

export const fullPaperFileUpload = (payload) => {
    return{
        type:CONSTANTS.UPLOAD_FULL_PAPER_FILE,
        payload
    }
}

export const saveFullPaperData = (fullPaperData) => {
    return{
        type:CONSTANTS.FULL_PAPER_DATA,
        fullPaperData
    }
}