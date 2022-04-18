import * as CONSTANTS from './constant'

export const abstratcFileUpload = (payload) => {
    return{
        type:CONSTANTS.UPLOAD_ABSTRACT_FILE,
        payload
    }
}

export const saveAbstractData = (payload) => {
    return{
        type:CONSTANTS.ABSTRACT_DATA,
        payload
    }
}

