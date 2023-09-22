import React, {useState, useEffect} from 'react'
import { Header } from '../Header'
import FileViewer from 'react-file-viewer';
import filePath from "../../SampleFiles/Template_43inca_manuscript.docx"

const FullPaperInstruction = () => {
    const [viewPdf, setViewPdf] = useState('');

    useEffect(() => {       
      setViewPdf(filePath);    
      }, []);

    
  return (
    <>
     
        <div>FullPaperInstruction</div>
        <FileViewer
          fileType="docx"
          filePath={viewPdf}
          
        />

    </>
  )
}

export default FullPaperInstruction