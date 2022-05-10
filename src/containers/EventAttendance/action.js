import * as CONSTANTS from './constant';

export function getUserInformation(id){    
    return {
        type : CONSTANTS.GET_USER_DATA_FOR_ATTENDANCE,
        id        
    }
}

export function markAttendance(payload){
    return {
        type : CONSTANTS.MARK_USER_ATTENDANCE,
        payload
    }
}