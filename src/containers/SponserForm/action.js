import * as CONSTANTS from './constant'

export function setSponsorForm(payload)
{
    return{
        type: CONSTANTS.SEND_SPONSOR_USER,
        payload
    }
}