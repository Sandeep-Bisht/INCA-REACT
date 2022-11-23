import React, { useState, useEffect } from "react"
import { CertificatePageUi } from '../../components/CertificatePageUi'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import '../../css/certificatepageui.css'
import bg from '../../images/bg.png'
import Layer from '../../images/Layer.png'
import Rope from '../../images/Rope.png'
import certificate_logo from '../../images/certificate_logo.jpg'
import Signature1 from '../../images/certificatesignature1.png'
import Signature2 from '../../images/certificatesignature2.png'

import INCA from '../../images/INCA.jpg'

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [14.0, 9.0],
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
        //let url = `http://localhost:4801/api/generate_certificate/${id}`;
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
            <div  ref={ref}>
              
                <div  class="border" style={{ backgroundImage: `url(${Rope})` }}>

                    <section class="frame">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4 col-4">
                                    <div class="logo">
                                        {/* <img src="./image/INCA.jpg" width="70px" height="80px"/> */}
                                        <img src={INCA} width="70px" height="80px"/> 
                                    </div>
                                </div>
                                <div class="col-md-4 col-4">
                                    <div class="content">
                                        <p>42<sup>ND</sup> INTERNATIONAL CONGRESS ON<br/>DIGITAL CARTOGRAPHY
                                            TO <br/>HARNESS BLUE ECONOMY</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-4 p-0">
                                        {/* <img src="./image/certificate_logo.jpg" width="70px" height="80px"/> */}
                                        <img src={certificate_logo} width="70px" height="80px"/> 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="heading">
                                            <p>Organised by</p>
                                            <p>Indian National Cartographic Association</p>
                                            <p>&</p>
                                            <p>National Hydrographic Office, Dehradun </p><br/>
                                                <p>09-11<sup>th</sup> November 2022 </p>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="main-text">
                                            <img src={Layer} width="30%" height="20%"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mx-auto">
                                        <div class="details"  style={{ backgroundImage: `url(${bg})` }}>
                                            <p><i>This is to certify that Prof./Dr./Mr./Ms. <span style={{borderBottom:"2px dotted", marginRight:0}}>{userInfo?.userName}</span></i></p>
                                            <p><i> of <span style={{borderBottom:"2px dotted", marginRight:0}}>{userInfo && userInfo.designation ? userInfo.designation : "------------" }</span> Attended / Chaired</i></p>
                                            <p><i>a session / Presented paper titled <span style={{borderBottom:"2px dotted", marginRight:0}}>{userInfo && userInfo.abstractPaperName ? userInfo.abstractPaperName : "------------" }</span></i></p>
                                            <p><i>....................................in the 42<sup>th</sup> INCA International</i></p>
                                            <span><i>Congress 2022.</i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row bottom_area">
                                    <div class="col-md-6 col-6 text-end">
                                        <img src={Signature1} className="img-fluid"></img>
                                        <div class="bottom_left">
                                            <span>Capt Kuldeep Singh</span>
                                            <p>(Organising Secretary)</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-6">
                                        
                                    <img src={Signature2} className="img-fluid second-sig"></img>
                                        <div class="bottom_right">
                                            <span>Cmde Peush Pawsey</span>
                                            <p>(Chairman)</p>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-center mt-5">
                                        <div class="last_line">
                                            <p>Date:11<sup>th</sup> Nov 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section>
                </div>
            </div>

        </>
    )
}
export default Certificate