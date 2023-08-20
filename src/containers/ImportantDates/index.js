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
      <td className='imp-table-date'>Last date for submission of abstract</td>
      <td className='d-flex justify-content-end'>       
        <div className='dates'>
            25/August/2023
        </div>
        </td>
    </tr>
    <tr>
      <td className='imp-table-date'>Intimation of acceptance of abstract</td>
      <td className='d-flex justify-content-end'><div className='dates'>15/September/2023</div></td>
    </tr>
    <tr>
      <td className='imp-table-date'>Last date for submission of full paper</td>
      <td className='d-flex justify-content-end'><div className='dates'>15/October/2023</div></td>
    </tr>
    <tr>
      <td className='imp-table-date'>Payment of registration fee</td>
      <td className='d-flex justify-content-end'><div className='dates'>30/September/2023</div></td>
    </tr>
    <tr>
      <td className='imp-table-date'>E-mail address for query, if any</td>
      <td className='d-flex justify-content-end'><div className='dates'>info@43inca.org</div></td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='note-imp-date'>
            <span>Note :</span> <span className='common-para'>No Abstract will be published in Abstract volume without the receipt of the registration fee. </span>
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