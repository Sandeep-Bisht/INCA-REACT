import React from 'react'
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

function AbstractPage() {
  return (
    <>
    <Header/>
    <div className="common-redirect-banner">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center">
              <p className="common-redirect-banner-title">Abstract</p>
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
</>
  )
}

export default AbstractPage