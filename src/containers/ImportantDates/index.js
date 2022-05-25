import React from 'react'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import '../../css/important.css';
import "../../css/contact.css";

function ImportantDates() {
  return (
    <>
    <Header/>
    <div className="common-redirect-banner">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center">
              <p className="common-redirect-banner-title">Important Dates</p>
            </div>
          </div>
        </div>
      </div>
      <div className='important-dates-section'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <table className="table table-striped">
  <tbody>
    <tr>
      <td className='imp-table-date'>Last date for submitting the abstracts</td>
      <td className='d-flex justify-content-end'><div className='dates'>15 Jul 2022</div></td>
    </tr>
    <tr>
      <td className='imp-table-date'>Acceptance of paper will be notified by</td>
      <td className='d-flex justify-content-end'><div className='dates'>15 Aug 2022</div></td>
    </tr>
    <tr>
      <td className='imp-table-date'>Last date for submission of full paper</td>
      <td className='d-flex justify-content-end'><div className='dates'>15 Sep 2022</div></td>
    </tr>
    <tr>
      <td className='imp-table-date'>E-Mail Address for queries</td>
      <td className='d-flex justify-content-end'><div className='dates'>42incanho@gmail.com</div></td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='note-imp-date'>
            <span>Note :</span> <span className='common-para'>No Abstract will be published in Abstract volume without the receipt of the registration fee before DD-MM-YYYY </span>
            </div>
          </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ImportantDates