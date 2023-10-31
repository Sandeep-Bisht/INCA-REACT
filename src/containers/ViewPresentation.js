import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import FileViewer from 'react-file-viewer';

const ViewPresentation = () => {

    const [viewPdf, setViewPdf] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location && location.state) {
      // let filePath = `http://localhost:4801/${location.state.fullPaperFileUrl}`;
      console.log("checking location",location.state)
      let filePath = `https://43inca.org/app/${location.state.path}`;
    //   filePath = filePath.replace('\\', '/');
      setViewPdf(filePath);
    }
  }, [location]);


  return (
    <>
    <h1>Presentation</h1>
     {viewPdf && (
        <FileViewer
          fileType="docx"
          filePath={viewPdf}
          
        />
      )}
    </>
  )
}

export default ViewPresentation