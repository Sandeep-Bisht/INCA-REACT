import * as CONSTANT from './constant'


export const saveRegisterdUserData = (payload) => {
    console.log('inside this method', payload)
    return ({
        type: CONSTANT.SAVE_REGISTER_USER_DATA,
        payload
    })
}

