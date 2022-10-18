import React, {useState, useEffect} from "react"
import { CertificatePageUi } from '../../components/CertificatePageUi'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import '../../css/certificatepageui.css'
import leftbar  from '../../images/leftbar.png'
import rightbar  from '../../images/rightbar.png'
import certificateborder from '../../images/certificateborder.png'
import certificate_logo from '../../images/certificate_logo.jpg'
import INCA from '../../images/INCA.jpg'

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [9.0, 14.0],
    scale: 0.8
};
 const Certificate = () => {
    const [userInfo, setUserInfo] = useState()
    let param = useParams();

    useEffect(() => {
        if (param.id) {
          getUserInfoForCertificate(param.id)
        }
      }, [param.id])

    let getUserInfoForCertificate = async (id) => {
        let url = `http://144.91.110.221:4801/api/generate_certificate/${id}`;
        try {
          let response = await axios.get(url);
         setUserInfo(response.data[0])
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <>
         <ReactToPdf targetRef={ref} filename="certificate.pdf" options={options} >
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </ReactToPdf>
        <div ref={ref}>
            <section class="border-line" >
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="first-logo text-center">
                              <img src={certificate_logo} width="100px" height="120px"/> 
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="heading">
                                <h1 class="text-center">Certificate</h1>
                                <span class="d-flex justify-content-center">OF PARTICIPATION</span>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="last-logo">
                                 <img src={INCA}/> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="frame">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                             <img src={certificateborder} width="100%" height="100%"/> 
                        </div>
                    </div>
                </div>
            </section>
            <section class="middle-text mt-5">
                <div class="container-fluid">
                    <div class="row text-center">
                        <div class="col-md-12">
                            <h4>Presented To</h4>
                        </div>
                        <div class="col-md-12">
                            <div class="candidate-name">
                                <h1>{userInfo?.name}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-12">
                            <div class="text-area">
                                <p>This Certificate is for the participation in INCA 42nd Internation <br />Congress held at National
                                    Hydrographic office,Dehradun on 11th <br />November 2022 to 13th November 2022. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="last-area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-5 col-5">
                            <div class="signature text-center">
                                <p>Cmde.Peush Pawsey</p>
                            </div>
                        </div>
                        <div class="col-md-7 col-7">
                            <div class="signature text-center">
                                <p>Vice Admiral Adhir Arora,NM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="side-bar">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <img src={leftbar} width="60%" height="80%"/> 
                        </div>
                        <div class="col-md-6 text-end">
                          <img src={rightbar} width="60%" height="80%"/> 
                        </div>
                    </div>
                </div>
            </section>
            </div>

        </>
    )
}
export default Certificate