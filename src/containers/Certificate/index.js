import React, { useState, useEffect } from "react"
import { CertificatePageUi } from '../../components/CertificatePageUi'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import '../../css/certificatepageui.css'
import bg from '../../images/bg.png'
import Layer from '../../images/Layer.png'
import background_img from '../../images/background_img.png'
import certificate_logo from '../../images/certificate_logo.jpg'
import Signature1 from '../../images/certificatesignature1.png'
import Signature2 from '../../images/certificatesignature2.png'
import Pdf from "react-to-pdf";

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
       // let url = `http://localhost:4801/api/generate_certificate/${id}`;
        try {
            let response = await axios.get(url);
            setUserInfo(response.data[0])
        } catch (error) {
            console.log(error);
        }
    }

    const ref = React.createRef();

    return (
        <>

            <div className="element-to-print" ref={ref}>
                <Pdf targetRef={ref} filename="cenaze-yardimlasma.pdf">
                    {({ toPdf }) => (
                        <button className="button" onClick={toPdf}>
                            Generate Pdf
                        </button>
                    )}
                </Pdf>
                <section  className="frame" style={{ backgroundImage: `url(${background_img})`}}>
                    <table className="table_content" id="top_row">
                        <tbody>
                            <tr className="table_row">
                                <td>
                                    <img src={INCA} width="70px" height="80px" />
                                </td>
                                <td className="content">
                                    <p>43<sup>RD</sup> INTERNATIONAL CONGRESS ON<br />DIGITAL CARTOGRAPHY
                                        TO <br />HARNESS BLUE ECONOMY</p>
                                </td>
                                <td>
                                    <img src={certificate_logo} width="70px" height="80px" />
                                </td>
                            </tr>

                            <tr className="table_row" id="mid_row_1">
                                <td>
                                    <p>Organised by</p>
                                    <p>Indian National Cartographic Association</p>
                                    <p>&</p>
                                    <p>Regional Remote Sensing Centre-West National Remote Sensing Center(NRSC),ISRO ISRO Complex, Bypass Road
                    Sector 9, Kudi Bhagtasani Housing Board (KBHB)  <br />
                     Jodhpur – 342005, </p>
                                    <p>06-09<sup>th</sup> November 2023</p>
                                </td>
                            </tr>
                            <tr className="table_row" id="mid_row_2">
                                <td className="logo"><img src={Layer} width="35%" height="100%" /></td>
                            </tr>
                            <tr className="table_row" id="mid_row_3" style={{ backgroundImage: `url(${bg})` }}>
                                <td className="mid_row_3_data">
                                    <p className="mid_para"><i>This is to certify that Prof./Dr./Mr./Ms. <span style={{fontSize:"1.1rem", marginRight: 0 }}>{userInfo?.userName}</span></i></p>
                                    <p className="mid_para"><i> of <span style={{fontSize:"1.1rem", marginRight: 0 }}>{userInfo && userInfo.designation ? userInfo.designation : "------------"}</span></i></p>
                                    <p className="mid_para"><i>Presented paper titled <span style={{ fontSize:"1.1rem", marginRight: 0 }}>{userInfo && userInfo.abstractPaperName ? userInfo.abstractPaperName : "------------"}</span></i></p>
                                    <span className="congress"><i>in the 43<sup>rd</sup> INCA International Congress 2023.</i></span>
                                   
                                </td>
                            </tr>
                            <tr className="table_row" id="mid_row_4">
                                <td>
                                    <img src={Signature2} width="30%" height="65%" />
                                </td>
                                <td>
                                    <img src={Signature1} width="30%" height="65%" />
                                </td>
                            </tr>
                            <tr className="table_row" id="mid_row_5">
                                <td id="mid_row_6">
                                    <span>Capt Kuldeep Singh</span>
                                    <p>(Organising Secretary)</p>
                                </td>
                                <td >
                                    <span>Cmde Peush Pawsey</span>
                                    <p>(Chairman)</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="table_row">
                                    <p>Date:11<sup>th</sup> Nov 2023</p>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </section>
            </div>

        </>
    )
}
export default Certificate