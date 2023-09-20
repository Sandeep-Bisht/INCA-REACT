import React from "react";
import "../../css/accommodation.css";
import AccommodationFile from "../../SampleFiles/Details of Hotel Accommodation for 43 INCA.docx";
function Accommodation() {
  return (
    <>
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-12">
            <p
              style={{
                marginTop: "0in",
                marginRight: "0in",
                marginBottom: ".0001pt",
                marginLeft: "0in",
                fontSize: "11.0pt",
                fontFamily: '"Calibri",sans-serif',
                textAlign: "center",
                lineHeight: "normal",
              }}
            >
              <strong>
                <span style={{ fontSize: 24 }}>
                  Hotel Accommodation Availability at Jodhpur
                </span>
              </strong>
              <strong>
                <span style={{ fontSize: 16 }}>&nbsp;</span>
              </strong>
            </p>
            <p
              style={{
                marginTop: "0in",
                marginRight: "0in",
                marginBottom: ".0001pt",
                marginLeft: "0in",
                fontSize: "11.0pt",
                fontFamily: '"Calibri",sans-serif',
                lineHeight: "normal",
                marginBottom: ".2in"
              }}
            >
              <strong>DISCLAIMER:</strong>&nbsp;
              <a target="_blank" href={AccommodationFile} className=" download-button text-decoration-none text-white">
              Download File
              </a>
            </p>
            <p
              style={{
                marginTop: "0in",
                marginRight: "0in",
                marginBottom: ".0001pt",
                marginLeft: "0in",
                fontSize: "11.0pt",
                fontFamily: '"Calibri",sans-serif',
                textAlign: "justify",
                lineHeight: "normal",
              }}
            >
              <strong>
                [A] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Accommodation
                Facility:&nbsp;
              </strong>
              To facilitate the delegates, the team of 43<sup>rd</sup> INCA has
              gathered the information about the Hotels of Jodhpur &amp; 
              Tariff with the best
              negotiated rates. The booking may be done directly by the
              delegates contacting the respective hotel of their choice and
              eligibility while stating that the booking is for “43<sup>rd&nbsp;</sup>
              INCA Conference” being organized by ISRO, Jodhpur. The direct
              payment will be made to the Hotels according their travel plan.&nbsp;
            </p>
            <p
              style={{
                marginTop: "0in",
                marginRight: "0in",
                marginBottom: ".0001pt",
                marginLeft: ".5in",
                fontSize: "11.0pt",
                fontFamily: '"Calibri",sans-serif',
                lineHeight: "normal",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginTop: "0in",
                marginRight: "0in",
                marginBottom: ".0001pt",
                marginLeft: ".5in",
                fontSize: "11.0pt",
                fontFamily: '"Calibri",sans-serif',
                textAlign: "justify",
                lineHeight: "normal",
              }}
            >
              These negotiated rates are valid for a limited period only and
              since November is tourist season, you are advised to make bookings
              as early as possible. The hotels may not be able to honor the
              indicated rates in the last 20 days before the Congress.
            </p>
            <p
              style={{
                marginTop: "0in",
                marginRight: "0in",
                marginBottom: ".0001pt",
                marginLeft: "0in",
                fontSize: "11.0pt",
                fontFamily: '"Calibri",sans-serif',
                lineHeight: "normal",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginTop: "0in",
                marginRight: "0in",
                marginBottom: ".0001pt",
                marginLeft: ".5in",
                fontSize: "11.0pt",
                fontFamily: '"Calibri",sans-serif',
                textIndent: "-.5in",
                lineHeight: "normal",
              }}
            >
              <strong>
                [B]&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Transport Facility:
              </strong>{" "}
              To be provided from the below identified hotels to 43<sup>rd</sup>{" "}
              INCA Venue and back only for attending the Congress related events
              i.e. from 06.11.2023 to 08.11.2023 on sharing basis at fixed
              timing. This transport facility will not be available to and from
              Airport/Railway Station/Bus Stand for pickup/drop. &nbsp;
            </p>
          </div>
        </div>
        <table width={980} className="table table-bordered mt-4">
          <thead className="accommodation-thead text-white">
            <tr>
              <td width={47}>
                <p>
                  <strong>S. No.</strong>
                </p>
              </td>
              <td width={151}>
                <p>
                  <strong>Name &amp; Address of Hotel</strong>
                </p>
              </td>
              <td width={189}>
                <p>
                  <strong>Contact Person (Phone/Email)</strong>
                </p>
              </td>
              <td width={142}>
                <p>Room Type</p>
              </td>
              <td width={57}>
                <p>No. Of Rooms</p>
              </td>
              <td width={113}>
                <p>Tariff in Rs. /Day</p>
              </td>
              <td width={66}>
                <p>GST</p>
              </td>
              <td width={215}>
                <p>
                  <strong>Distance from RRSC-West &amp; Remarks</strong>
                </p>
              </td>
            </tr>
          </thead>
          <tbody className="accommodation-table">
            <tr>
              <td width={47}>
                <p>1.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Radisson Hotel</strong>
                </p>
                <p>Gaurav Path, Airport Road, Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person:</p>
                <p>Sumit Dhandia</p>
                <p>Contact No.: 9116633018</p>
                <p>Email: sales@rdjodhpur.in</p>
              </td>
              <td width={142}>
                <p>· Superior Room</p>
                <p>· Junior Suite</p>
              </td>
              <td width={57}>
                <p>20</p>
                <p>06</p>
              </td>
              <td width={113}>
                <p>7499</p>
                <p>10000</p>
              </td>
              <td width={66}>
                <p>12%</p>
                <p>12%</p>
              </td>
              <td width={215}>
                <p>9 km</p>
                <p>Check-in: 15:00 Hrs</p>
                <p>Check-out: 12.00 Hrs, Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>2.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Kasturi Orchid</strong>
                </p>
                <p>Pal Chopasani Bypass Road, Near DPS School, Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Chain Singh</p>
                <p>Contact No.: 8094008346/44</p>
                <p>Email: sales@kasturiorchid.com</p>
              </td>
              <td width={142}>
                <p>· Deluxe</p>
                <p>· Suite</p>
              </td>
              <td width={57}>
                <p>44</p>
                <p>02</p>
              </td>
              <td width={113}>
                <p>3200/3500</p>
                <p>(Single/Double)</p>
                <p>5000</p>
              </td>
              <td width={66}>
                <p>Included</p>
              </td>
              <td width={215}>
                <p>7 km</p>
                <p>Check-in: 10:00 Hrs – 12:00 Hrs</p>
                <p>Check-out: 10.00 Hrs, Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>3.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Rajwara Palace</strong>
                </p>
                <p>Opp. Govt. Veterinary Hospital, Ratanada,</p>
                <p>Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Gajendra Singh Bhati</p>
                <p>Contact No.: 7665581115/ 0291-2515242</p>
                <p>Email: hotelrajwarapalace.om@gmail.com</p>
              </td>
              <td width={142}>
                <p>· Comfort</p>
                <p>· Club</p>
                <p>· Classic</p>
              </td>
              <td width={57}>
                <p>23</p>
                <p>13</p>
                <p>04</p>
              </td>
              <td width={113}>
                <p>3500</p>
                <p>4500</p>
                <p>5500</p>
              </td>
              <td width={66}>
                <p>Included</p>
              </td>
              <td width={215}>
                <p>11 km</p>
                <p>Check-in: 12:00 Hrs</p>
                <p>Check-out: 10.00 AM</p>
                <p>Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>4.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Fairfield by Marriott</strong> Opp. New High Court
                  Near Shatabdi Circle,
                </p>
                <p>Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Shubham Mathur</p>
                <p>Contact No.: 9001514543</p>
                <p>Email: shubham.mathur@marriott.com</p>
              </td>
              <td width={142}>
                <p>· Deluxe</p>
                <p>· Premium</p>
                <p>· Junior Suite</p>
              </td>
              <td width={57}>
                <p>50</p>
                <p>06</p>
                <p>04</p>
              </td>
              <td width={113}>
                <p>7499</p>
                <p>8499</p>
                <p>15000</p>
              </td>
              <td width={66}>
                <p>12%</p>
                <p>18%</p>
                <p>18%</p>
              </td>
              <td width={215}>
                <p>3 km</p>
                <p>Check-in: 14:00 Hrs</p>
                <p>Check-out: 12.00 Hrs</p>
                <p>Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>5.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Chandra Inn </strong>
                </p>
                <p>Near Panch Batti Circle, Airport Road, Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Devesh Mishra</p>
                <p>Contact No.: 6377200332</p>
                <p>Email: chandrainn@yahoo.co.in</p>
              </td>
              <td width={142}>
                <p>· Deluxe</p>
                <p>· Super Deluxe</p>
                <p>· Suite</p>
              </td>
              <td width={57}>
                <p>44</p>
                <p>16</p>
                <p>04</p>
              </td>
              <td width={113}>
                <p>2600</p>
                <p>3500</p>
                <p>4000</p>
              </td>
              <td width={66}>
                <p>12%</p>
                <p>12%</p>
                <p>12%</p>
              </td>
              <td width={215}>
                <p>10 km</p>
                <p>Check-in: 12:00 Hrs</p>
                <p>Check-out: 10.00 Hrs</p>
                <p>Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>6.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Shri Ram Excellency </strong>
                </p>
                <p>Residency Road,</p>
                <p>Opp. Medical College Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Nadeen Khan/ Shambhu Das</p>
                <p>Contact No.: 7230862444 / 555</p>
                <p>Email: info@hotelshriramexcellency.com</p>
              </td>
              <td width={142}>
                <p>· Deluxe</p>
                <p>· Superior</p>
              </td>
              <td width={57}>
                <p>18</p>
                <p>12</p>
              </td>
              <td width={113}>
                <p>5500</p>
                <p>6500</p>
              </td>
              <td width={66}>
                <p>12%</p>
                <p>12%</p>
              </td>
              <td width={215}>
                <p>10 km</p>
                <p>Check-in: 14:00 Hrs</p>
                <p>Check-out: 10.00 Hrs</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>7.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Shri Ram International </strong>
                </p>
                <p>Near Panch Batti Circle, Airport Road, Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Bhuvnesh Malik</p>
                <p>Contact No.: 8769190441</p>
                <p>Email: sales@shreeraminternational.com</p>
              </td>
              <td width={142}>
                <p>Deluxe</p>
              </td>
              <td width={57}>
                <p>30</p>
              </td>
              <td width={113}>
                <p>6000</p>
              </td>
              <td width={66}>
                <p>Included</p>
              </td>
              <td width={215}>
                <p>11 km</p>
                <p>Check-in: 14:00 Hrs</p>
                <p>Check-out: 11.00 Hrs</p>
                <p>Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>8.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Mapple Abhay </strong>
                </p>
                <p>Paota Circle,</p>
                <p>Near Bus Stand, Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Ms. Neha Tyagi</p>
                <p>Contact No.: 88753 15326</p>
                <p>Email: fomjdr@mapplehotels.com</p>
              </td>
              <td width={142}>
                <p>· Deluxe</p>
                <p>· Club</p>
              </td>
              <td width={57}>
                <p>10</p>
                <p>10</p>
              </td>
              <td width={113}>
                <p>3500</p>
                <p>4200</p>
              </td>
              <td width={66}>
                <p>Included</p>
              </td>
              <td width={215}>
                <p>13 km</p>
                <p>Check-in: 12:00 Hrs</p>
                <p>Check-out: 12.00 Hrs</p>
                <p>Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>9.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Rajputana Palace </strong>
                </p>
                <p>Panch Batti Circle, Airport Road, Jodhpur</p>
              </td>
              <td width={189}>
                <p>Contact Person: Sandeep Singh Bhaghel</p>
                <p>Contact No.: 0291-2799600/ 9636106101</p>
                <p>Email: gm@rajputanapalace.in</p>
              </td>
              <td width={142}>
                <p>· Deluxe</p>
                <p>· Super Deluxe</p>
              </td>
              <td width={57}>
                <p>22</p>
                <p>26</p>
              </td>
              <td width={113}>
                <p>2500</p>
                <p>3000</p>
              </td>
              <td width={66}>
                <p>Included</p>
              </td>
              <td width={215}>
                <p>10 km</p>
                <p>Check-in: 12:00 Hrs</p>
                <p>Check-out: 12.00 Hrs</p>
                <p>Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>10.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Niky International </strong>
                </p>
                <p>Near Panch Batti Circle Airport Road, Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Devi Singh</p>
                <p>Contact No.: 9799559281</p>
                <p>Email: info@hotelniky.com</p>
              </td>
              <td width={142}>
                <p>Deluxe</p>
              </td>
              <td width={57}>
                <p>15</p>
              </td>
              <td width={113}>
                <p>3800</p>
              </td>
              <td width={66}>
                <p>Included</p>
              </td>
              <td width={215}>
                <p>10.5 km</p>
                <p>Check-in: 14:00 Hrs</p>
                <p>Check-out: 11.00 Hrs</p>
                <p>Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>11.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Dazzle</strong>
                </p>
                <p>5-S-53/64, Ward 13, Near RRSC-West/ISRO</p>
                <p>Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Surendra Choudhary</p>
                <p>Contact No.: 9352357761</p>
                <p>Email: hoteldazzlejodhpur@gmail.com</p>
              </td>
              <td width={142}>
                <p>· Standard</p>
                <p>· Deluxe</p>
                <p>· Super Deluxe</p>
              </td>
              <td width={57}>
                <p>10</p>
                <p>02</p>
                <p>03</p>
              </td>
              <td width={113}>
                <p>2300</p>
                <p>2700</p>
                <p>3200</p>
              </td>
              <td width={66}>
                <p>Included</p>
              </td>
              <td width={215}>
                <p>0.5 km</p>
                <p>Check-in: 12:00 Hrs</p>
                <p>Check-out: 11.00 Hrs</p>
                <p>Breakfast Complimentary,</p>
                <p>Rates are for 2 persons per room</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>12.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Ghoomer</strong>
                </p>
                <p>R.T.D.C., Old High Court Road, Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Manvender Singh</p>
                <p>Contact No.: 8562081000</p>
                <p>Email: ghoomer.rtdc@rajasthan.gov.in</p>
              </td>
              <td width={142}>
                <p>· Suite</p>
                <p>· Super Deluxe</p>
                <p>· Deluxe</p>
                <p>· Standard</p>
              </td>
              <td width={57}>
                <p>01</p>
                <p>14</p>
                <p>34</p>
                <p>26</p>
              </td>
              <td width={113}>
                <p>2800</p>
                <p>1610</p>
                <p>1190</p>
                <p>980</p>
              </td>
              <td width={66}>
                <p>GST As Applicable</p>
              </td>
              <td width={215}>
                <p>12 km</p>
                <p>Check-in: 12:00 Hrs</p>
                <p>Check-out: 12.00 Hrs</p>
                <p>Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>13.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel Krishna Inn</strong>
                </p>
                <p>Sector 1, Kudi Bhagtasni Housing Board,</p>
                <p>KK Colony, Jodhpur.</p>
              </td>
              <td width={189}>
                <p>Contact Person: Dheeraj Kumawat</p>
                <p>Contact No.: 9351368297</p>
                <p>Email: hotelshrikrishnainn@gmail.com</p>
              </td>
              <td width={142}>
                <p>· Single</p>
                <p>· Classic</p>
              </td>
              <td width={57}>
                <p>02</p>
                <p>06</p>
              </td>
              <td width={113}>
                <p>1200</p>
                <p>1500</p>
              </td>
              <td width={66}>
                <p>Included</p>
              </td>
              <td width={215}>
                <p>1 km</p>
                <p>Check-in: 12:00 Hrs</p>
                <p>Check-out: 11.00 Hrs</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>14.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Hotel The Kashi Inn</strong>
                </p>
                <p>
                  Janta Colony, Sector-2, Kudi Bhagtasni Housing Board,
                  Jodhpur.&nbsp;
                </p>
              </td>
              <td width={189}>
                <p>Contact Person: Jogadri Singh</p>
                <p>Contact No.: 7073943150</p>
                <p>Email: thekashiinn@gmail.com</p>
              </td>
              <td width={142}>
                <p>Deluxe</p>
              </td>
              <td width={57}>
                <p>19</p>
              </td>
              <td width={113}>
                <p>1680</p>
              </td>
              <td width={66}>
                <p>Included</p>
              </td>
              <td width={215}>
                <p>1 km</p>
                <p>Check-in: 12:00 Hrs</p>
                <p>Check-out: 11.00 Hrs</p>
                <p>Breakfast Complimentary</p>
              </td>
            </tr>
            <tr>
              <td width={47}>
                <p>15.</p>
              </td>
              <td width={151}>
                <p>
                  <strong>Government Youth Hostel</strong>
                </p>
                <p>Circuit House Road, Ratanada, Jodhpur.</p>
              </td>
              <td width={189}>
                <p>E-mail: youthhosteljodhpur@gmail.com</p>
              </td>
              <td width={142}>
                <p>· Dormitory</p>
                <p>· Shared Gen. room</p>
                <p>· Shared AC room</p>
                <p>· Non-AC Double Bed (With Common Bath)</p>
                <p>· AC Double Bed</p>
              </td>
              <td width={57}>&nbsp;</td>
              <td width={113}>
                <p>90</p>
                <p>135</p>
                <p>200</p>
                <p>515</p>
                <p className="mt-5 pt-3">800</p>
              </td>
              <td width={66}>&nbsp;</td>
              <td width={215}>
                <p>12 km</p>
                <p>Breakfast available at nominal charges.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Accommodation;
