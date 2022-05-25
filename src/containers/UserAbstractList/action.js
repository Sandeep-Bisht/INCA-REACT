import * as CONSTANTS from './constant';

export const getUserAbstractList = (id) =>{
    return{
        type:CONSTANTS.USER_ABSTRACT_LIST,
        id
    }
}


