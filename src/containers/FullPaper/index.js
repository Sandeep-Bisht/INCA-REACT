import React from 'react'

const FullPaper = () => {
  return (
    <>
    <section className="abstract-form">
    <form>
      <div className="container">
        <div className='row'>
          <div className='col-md-6'>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label for="inputName" className="form-label">
                Paper Name
              </label>
              <input                
                type="text"
                className="form-control"
                id="abstractPaperName"                
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label for="inputFile" className="form-label">
                Abstract Upload
              </label>
             <input                 
                type="file"
                className="form-control"                
                aria-label="file example"
                id="file"                
                required             
              />              
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label for="validationTextarea" className="form-label">
                Brief Description
              </label>
              <textarea                
                className="form-control"
                id="abstractPaperDescription"
                placeholder="Required description.."
                required                
              ></textarea>
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label for="inputFile" className="form-label">
                Paper Upload
              </label>
             <input                 
                type="file"
                className="form-control"                
                aria-label="file example"
                id="paper"                
                required             
              />              
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <button className="btn btn-primary" type="submit" >
                  upload                
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </div>
      </div>
    </form>
  </section>
  </>
  )
}

export default FullPaper