import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FileViewer from 'react-file-viewer';

const FullPaperPreview = () => {
  const [viewPdf, setViewPdf] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location && location.state) {
      // let filePath = `http://localhost:4801/${location.state.fullPaperFileUrl}`;
      let filePath = `https://43inca.org/app//${location.state.fullPaperFileUrl}`;
      filePath = filePath.replace('\\', '/');
      setViewPdf(filePath);
      console.log("filePath filePath", filePath)
    }
  }, [location]);

  return (
    <>
      {viewPdf && (
        <FileViewer
          fileType="docx"
          filePath={viewPdf}
          
        />
      )}
    </>
  );
};

export default FullPaperPreview;
