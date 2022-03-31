import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import * as ACTIONS from './action'


let RegisteredUser = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(ACTIONS.getUsers())  
    }, [])

    return(
        <>
            <h1>All Users</h1>
        </>
    )
}

export default RegisteredUser