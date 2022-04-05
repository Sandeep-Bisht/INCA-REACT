import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import * as Loader from "react-loader-spinner";
import * as ACTIONS from './action'
import "../../css/registred.css";


let RegisteredUser = () => {
    let [users, setUsers] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    const state = useSelector((state) => state.AllUsersReducer);


    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(ACTIONS.getUsers())
    }, [])


    useEffect(() => {
        if(state && state.allUserSuccess){
            setIsLoading(false)
            setUsers(state.allUserSuccess)
        }
    }, [state.allUserSuccess])
    



    return (
        <>
            <section className="users-lists">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>S.no.</th>
                                        <th>Member Name</th>
                                        <th>Mobile No.</th>
                                        <th>E-mail</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        isLoading ? <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}><Loader.ThreeDots /></div> :
                                        users.length > 0 ? 
                                        users.map((item, i) => {
                                            return(
                                                <tr>
                                                    <td>{i+1}</td>
                                                    <td>{item.userName}</td>
                                                    <td>{item.mobileNumber}</td>
                                                    <td>{item.userEmail}</td>
                                                    <td><button><i class="fa-solid fa-pen"></i></button>
                                                        <button className="icons"><i className="fa-solid fa-trash-can icon"></i></button>
                                                        <button><i class="fa-solid fa-eye"></i></button></td>
                                                </tr>
                                            )
                                        }) : "No data item"
                                    }
                                    

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisteredUser