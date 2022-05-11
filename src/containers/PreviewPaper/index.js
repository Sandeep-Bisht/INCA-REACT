import React from 'react'
import { useState } from 'react';

// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import pdfPath from '../../PDF/sample.pdf';


const PreviewPaper = () => {
   // Create new plugin instance
  


  // for submit event
  const [viewPdf, setViewPdf]=useState(pdfPath);



  return (
    <>
    {/* show pdf conditionally (if we have one)  */}
    {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            />
      </Worker></>}

      {/* if we dont have pdf or viewPdf state is null */}
      {!viewPdf&&<>No pdf file selected</>}
    </>
  )
}

export default PreviewPaper