import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Abstract_Template_Pdf from "../../SampleFiles/ABSTRACT_TEMPLATE.pdf";
import Abstract_Template_Docx from '../../SampleFiles/ABSTRACT_TEMPLATE 42inca.docx';
import "../../css/abstract.css";
import "../../css/contact.css";

function AbstractPage() {
  const navigation = useNavigate();
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row ">
          <div className="common-redirect-banner">
            <div className="col-md-12 text-center">
              <p className="common-redirect-banner-title">Abstract</p>
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="abstract-page py-4">
                <h3 className="common-heading">
                  Abstracts to be submitted must adhere to the following
                  specifications:
                </h3>

                <div>
                  <ol className="common-para">
                    <li>
                      Abstracts must pertain to original research works, either
                      self-authored or co-authored, and must not exceed 250
                      words in length.
                    </li>
                    <li>
                      Abstracts must be submitted in the English language.
                    </li>
                    <li>
                      Title of the abstract should be capitalized. The title
                      should clearly explain the subject of the research work.
                      For the abstract body, Times New Roman font with a font
                      size of 12 should be applied.
                    </li>
                    <li>Abstract must contain at least 6 Keywords.</li>
                    <li>
                      Abstracts that are excessively commercial in nature will
                      not be accepted.
                    </li>
                    <li>Submissions may have up to 10 authors.</li>
                    <li>
                      Template for Submission of Abstract and Full Paper are
                      given below :
                    </li>
                  </ol>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="abstract-pdf-file-icon-wrapper">
                        <div className="row">
                          <div className="col-md-6">
                            <a
                              href={Abstract_Template_Pdf}
                              download="Abstract_Template"
                            >
                              <span className="abstract-pdf-file-icon">
                                <i class="fa-solid fa-file-pdf"></i>
                              </span>
                              <span className="abstract-pdf-file-text">
                              Abstract Template
                              </span>
                            </a>
                          </div>
                          {/* <div className="col-md-6">
                            <a
                              href={Fullpaper_Template_Pdf}
                              download="Fullpaper_Template_Pdf"
                            >
                              <span className="abstract-pdf-file-icon">
                                <i class="fa-solid fa-file-pdf"></i>
                              </span>
                              <span className="abstract-pdf-file-text">
                                Fullpaper Template
                              </span>
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="abstract-word-file-icon-wrapper">
                        <div className="row">
                          <div className="col-md-12">
                            <a
                              href={Abstract_Template_Docx}
                              download="Abstract_Template_Docx"
                            >
                              <span className="abstract-word-file-icon">
                                <i class="fa-solid fa-file-word"></i>
                              </span>
                              <span className="abstract-word-file-text">
                               Sample Abstract Template Docx
                              </span>
                            </a>
                          </div>
                          {/* <div className="col-md-6">
                            <a
                              href={Fullpaper_Template_Docs}
                              download="Fullpaper_Template_Docx"
                            >
                              <span className="abstract-word-file-icon">
                                <i class="fa-solid fa-file-word"></i>
                              </span>
                              <span className="abstract-word-file-text">
                                Fullpaper Template
                              </span>
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="common-para">
                    * Please note that submitting an abstract does not imply
                    registration for the 42 <sup>nd</sup> INCA International
                    Conference.
                  </p>
                  <p className="common-para">
                    For abstract submission, you must first generate your login
                    credentials.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 d-flex justify-content-center pb-5">
                <button
                  className="common-btn"
                  onClick={() => navigation("/register")}
                >
                  Submit Abstract
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AbstractPage;
