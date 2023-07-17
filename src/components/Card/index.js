import React, { } from 'react'
import '../../css/card.css'

export const Card = (props) => {
    const { data } = props
    return (
        <>
            <div className="default-dashboard-view">
                <div className="container">
                    <div className="row">

                        {
                            data && data.length > 0 &&
                            data.slice(0,3).map((item, i) => {
                                return (
                                    <div className="col-md-4">
                                        {/* <div className=" "> */}
                                        <div className={`${item.type == "user" ? "conter-card one" : item.type === "sponser" ? "conter-card two" : item.type === "registred" ? "conter-card three" : "conter-card four"}`}>
                                            <div className="left"><i className={`${item.type == "user" ? "fa-solid fa-users" : item.type === "sponser" ? "fa-brands fa-elementor" : item.type === "registred" ? "fa-solid fa-user-check" : "fa-solid fa-file-export"}`}></i></div>
                                            <div className="right">
                                                <p className="counter-card-number">{item.counter}</p>
                                                <p className="counter-card-title">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
                                            </div>
                                        </div>
                                     </div>
                                )
                            }) 
                        }
                    

                    </div>



                </div>
            </div>
        </>
    );
}