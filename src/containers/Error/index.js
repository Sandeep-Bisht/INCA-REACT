import React, { useEffect } from 'react'

import { Header } from '../../components/Header'
import '../../css/error.css'

const Error = () => {
    return (
        <>
            <Header></Header>
            <section className='section-padding error-page'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-8 text-center'>
                            <h1 className='error-number'>4<span>0</span>4</h1>
                        </div>
                        <div className="col-md-4">
                            <span className='error-msg'>The page you are looking for is currently unavailable,or you are trying to access
                                unauthorized resource</span>
                        </div>
                    </div>
                </div>
            
        </section>
           
            
        </>
    )
}

export default Error
