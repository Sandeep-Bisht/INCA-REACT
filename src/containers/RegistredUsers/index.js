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
                                    

                                    {/* <tr>
                                        <td>2</td>
                                        <td>Sandeep Bisht</td>
                                        <td>999-999-9999</td>
                                        <td>Dummy@yahoo.com</td>
                                        <td><button><i class="fa-solid fa-pen"></i></button>
                                            <button className="icons"><i className="fa-solid fa-trash-can icon"></i></button>
                                            <button><i class="fa-solid fa-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Kripal Ramola</td>
                                        <td>999-999-9999</td>
                                        <td>Dummy@yahoo.com</td>
                                        <td><button><i class="fa-solid fa-pen"></i></button>
                                            <button className="icons"><i className="fa-solid fa-trash-can icon"></i></button>
                                            <button><i class="fa-solid fa-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Shubham Semwal</td>
                                        <td>999-999-9999</td>
                                        <td>Dummy@yahoo.com</td>
                                        <td><button><i class="fa-solid fa-pen"></i></button>
                                            <button className="icons"><i className="fa-solid fa-trash-can icon"></i></button>
                                            <button><i class="fa-solid fa-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Mayank Gurung</td>
                                        <td>999-999-9999</td>
                                        <td>Dummy@yahoo.com</td>
                                        <td><button><i class="fa-solid fa-pen"></i></button>
                                            <button className="icons"><i className="fa-solid fa-trash-can icon"></i></button>
                                            <button><i class="fa-solid fa-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Julesh Pun</td>
                                        <td>999-999-9999</td>
                                        <td>Dummy@yahoo.com</td>
                                        <td><button><i class="fa-solid fa-pen"></i></button>
                                            <button className="icons"><i className="fa-solid fa-trash-can icon"></i></button>
                                            <button><i class="fa-solid fa-eye"></i></button></td>
                                    </tr> */}
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