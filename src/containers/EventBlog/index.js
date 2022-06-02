import React,{ useState } from 'react'
import { Button, Viewer } from "@react-pdf-viewer/core"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
//import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
//import pdfPath from "../../PDF/sample.pdf";
//import pdfPath from '../../files/1653493014230--Sandeep Bisht Offer Letter.pdf'
import Announcement from "../../PDF/announcement.pdf";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const EventBlog = () => {
  const [viewPdf, setViewPdf] = useState(Announcement);
  return (
    <>   
    {viewPdf && (
        <>
          <Header />
          <div className='container-fluid pt-10'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer fileUrl={viewPdf}/>
          </Worker>
          </div>
          <Footer />
        </>
      )}
</>
  )
}

export default EventBlog