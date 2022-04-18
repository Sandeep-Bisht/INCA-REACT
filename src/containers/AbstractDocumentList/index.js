import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ACTIONS from './action'
import * as Loader from "react-loader-spinner";

const AbstractDocumentList = () => {
    const state = useSelector((state) => state.AbstractListReducer);
   
    
    let [abstractList, setAbstractList] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    
    let dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(ACTIONS.getAbstractData())
    }, [])

    useEffect(() => {
        if(state && state.getAbstractDocSuccess !== abstractList){
            setIsLoading(false)
           setAbstractList(state.getAbstractDocSuccess)
        }
    }, [ state.getAbstractDocSuccess])

    return(
        <>
        <section className="users-lists">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>S.no.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {isLoading ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                      }}
                    >
                      <Loader.ThreeDots />
                    </div>
                  ) : abstractList && abstractList.length > 0 ? (
                    abstractList.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.abstractPaperName}</td>
                          <td>{item.abstractPaperDescription}</td>
                          
                          <td>
                            <button  >
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className="icons">
                              <i className="fa-solid fa-trash-can icon"></i>
                            </button>                            
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    "No data item"
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

            </>
    )
}

export default AbstractDocumentList