import React, { useState, useEffect } from "react";

const ContentChanges = () => {

  return (
    <>
      <section className="content-form">
        <form>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contentName"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="inputFile" className="form-label">
                    Image Upload
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
                  <label htmlFor="validationTextarea" className="form-label">
                    Brief Description
                  </label>
                  <textarea
                    className="form-control"
                    id="contentDescription"
                    placeholder="Required description.."
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContentChanges;