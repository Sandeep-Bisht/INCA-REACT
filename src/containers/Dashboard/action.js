import * as CONSTANTS from './constant'

export const getUsersCounters = () => {
    console.log('inside this dashboard api')
    return{
        type:CONSTANTS.GET_COUNTERS
    }
} 