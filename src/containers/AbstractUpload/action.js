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

export const resetAbstractDataToInitialState = () => {
    return{
        type:CONSTANTS.RESET_ABSTRACT_DATA_SUCCESS_TO_INITIAL_STATE,
        
    }
}

