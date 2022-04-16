import React, { useState, useEffect } from "react";

const AbstractUpload = () => {
  const [abstract, setAbstract] = useState({});

  const paperUploadHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    let abstractCopy = { ...abstract };
  };

  return (
    <>
      <section className="abstract-form">
        <form onSubmit={(e) => paperUploadHandler(e)}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label for="inputName" className="form-label">
                    Paper Name
                  </label>
                  <input
                    onChange={(e) => onChangeHandler(e)}
                    type="text"
                    className="form-control"
                    id="inputName"
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
                    id="inputFile"
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
                    onChange={(e) => onChangeHandler(e)}
                    className="form-control"
                    id="validationTextarea"
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

export default AbstractUpload;
