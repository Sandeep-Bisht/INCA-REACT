import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Viewer } from "@react-pdf-viewer/core"; // install this library
import "@react-pdf-viewer/core/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
import SecondSercular from "../SampleFiles/42thINCA-First Circular-09_Jul 22.pdf";

const FullPaperPreview = () => {

 const [viewPdf, setViewPdf] = useState("");
 let location = useLocation();

 useEffect(() => {
    if (location && location.state) {
      let filePath = `http://144.91.110.221:4801/${location.state.fullPaperFileUrl}`;
      //let filePath = `http://localhost:4801/${location.state.fullPaperFileUrl}`;
    // let filePath = location.state.fullPaperFileUrl
      filePath = filePath.replace("\\", "/");
     setViewPdf(filePath);
    }
  }, [location]);
  return (
   <>
   {viewPdf && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10">
                  <Viewer fileUrl={viewPdf} />
                </div>
              </div>
            </div>
          </Worker>
        </>
      )}
      </>
  )
}

export default FullPaperPreview